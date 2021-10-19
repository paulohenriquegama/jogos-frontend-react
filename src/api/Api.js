export const Api = {
  baseUrl: "http://localhost:3000",

  // Endpoint Game
  readAllGameUrl: () => Api.baseUrl + "/game",

  readByIdGameUrl: (id) => `${Api.baseUrl}/game/${id}`,

  createGameUrl: () => Api.baseUrl + "/game",

  deleteGameUrl: (id) => `${Api.baseUrl}/game/${id}`,

  // Endpoint Genres

  readAllGenresUrl: () => Api.baseUrl + "/genre",

  // Endpoint User
  readAllUserUrl: () => Api.baseUrl + "/user",

  readByIdUserUrl: (id) => `${Api.baseUrl}/user/${id}`,

  createUserUrl: () => Api.baseUrl + "/user",

  // Endpoint Profile
  readAllProfileUrl: () => Api.baseUrl + "/profile",

  readByIdProfileUrl: (id) => `${Api.baseUrl}/profile/${id}`,

  createProfileUrl: () => Api.baseUrl + "/profile",

  deleteProfileUrl: (id) => `${Api.baseUrl}/profile/${id}`,



  // Auth Header
 

  //GET requests
  buildApiGetRequest: url => 
    fetch(url, {
      method: "GET",
    }),

  buildApiPostRequest: (url, body) => 
    fetch(url, {
      method: "POST",
      headers: new Headers( {
        "content-type": "application/json"
      }),
      body: JSON.stringify(body),
    }),

  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
        method: "DELETE",
        // headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
}
