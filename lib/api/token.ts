export const tokenStorage = {
  setAccessToken(token: string) {
    localStorage.setItem(
      "accessToken",
      token
    );
  },


  getAccessToken() {
    return localStorage.getItem(
      "accessToken"
    );
  },

  removeTokens() {
    localStorage.removeItem(
      "accessToken"
    );

    localStorage.removeItem(
      "refreshToken"
    );
  },

  setRefreshToken(token: string) {
    localStorage.setItem(
      "refreshToken",
      token
    );
  },
};