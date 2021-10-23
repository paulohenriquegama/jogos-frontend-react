import { JwtHandler } from "../jwt-handler/JwtHandler";

export const Api = {
  baseUrl: "http://localhost:3000",
  // baseUrl: "https://bibliotecadejogos-nestejs.herokuapp.com",

  // Endpoint - Login

  loginUrl: () => Api.baseUrl + "/login",

  // Endpoint Game
  readAllGameUrl: () => Api.baseUrl + "/game",

  readCurrentUser: () => Api.baseUrl + "/game/usercurrent",

  readByIdGameUrl: (id) => `${Api.baseUrl}/game/${id}`,

  createGameUrl: () => Api.baseUrl + "/game",

  updateGameUrl: (id) => `${Api.baseUrl}/game/${id}`,


  deleteGameUrl: (id) => `${Api.baseUrl}/game/${id}`,

  // Endpoint Genres

  readAllGenresUrl: () => Api.baseUrl + "/genre",

  createGenreUrl: () => Api.baseUrl + "/genre",

  // Endpoint User
  readAllUserUrl: () => Api.baseUrl + "/user",

  readByIdUserUrl: (id) => `${Api.baseUrl}/user/${id}`,

  createUserUrl: () => Api.baseUrl + "/user",

  // Endpoint Profile
  readAllProfileUrl: () => Api.baseUrl + "/profile",

  readByIdProfileUrl: (id) => `${Api.baseUrl}/profile/${id}`,

  createProfileUrl: () => Api.baseUrl + "/profile",

  updateProfileUrl: (id) => `${Api.baseUrl}/profile/${id}`,

  deleteProfileUrl: (id) => `${Api.baseUrl}/profile/${id}`,



  // Auth Header
  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  //GET requests
  buildApiGetRequest:( url, auth) => 
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  buildApiPostRequest: (url, body, auth) => 
    fetch(url, {
      method: "POST",
      headers: new Headers( {
        "content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

    buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
        method: "PATCH",
        headers: new Headers({
            "Content-type": "application/json",
            ...(auth ? Api.authHeader() : {}),
        }),
        body: JSON.stringify(body),
    }),

  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
        method: "DELETE",
        headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
}
