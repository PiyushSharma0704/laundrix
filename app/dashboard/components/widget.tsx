"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GitCommit {
  sha: string;
  repo: string;
  commit: {
    message: string;
    author: {
      name: string;
      date?: string;
    };
  };
}

export default function GitActivityCard() {
  const [commits, setCommits] = useState<GitCommit[]>([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const [uiRes, apiRes] = await Promise.all([
          fetch(
            "https://api.github.com/repos/PiyushSharma0704/laundrix/commits?per_page=20",
          ),
          fetch(
            "https://api.github.com/repos/PiyushSharma0704/laundrix-api/commits?per_page=20",
          ),
        ]);

        const [uiData, apiData] = await Promise.all([
          uiRes.json(),
          apiRes.json(),
        ]);

        const mergedCommits = [
          ...(Array.isArray(uiData)
            ? uiData.map((commit) => ({
                ...commit,
                repo: "UI",
              }))
            : []),

          ...(Array.isArray(apiData)
            ? apiData.map((commit) => ({
                ...commit,
                repo: "API",
              }))
            : []),
        ];

        mergedCommits.sort(
          (a, b) =>
            new Date(b.commit.author.date || "").getTime() -
            new Date(a.commit.author.date || "").getTime(),
        );

        setCommits(mergedCommits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCommits();
  }, []);

  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="mb-4 text-xl font-semibold">🚀 Recent Commits</h2>

      <div className="relative h-80 overflow-hidden">
        <motion.div
          animate={{
            y: ["0%", "-50%"],
          }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
          className="space-y-3"
        >
          {[...commits, ...commits].map((commit, index) => (
            <div
              key={`${commit.sha}-${index}`}
              className="flex items-center gap-3 border-b pb-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold">
                {commit.commit.author.name[0]}
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">{commit.commit.message}</p>

                <p className="text-xs text-muted-foreground">
                  {commit.commit.author.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
