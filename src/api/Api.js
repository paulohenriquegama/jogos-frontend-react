export const Api = {
  baseUrl: "http://localhost:3000",

  // Endpoint Game
  readAllGameUrl: () => Api.baseUrl + "/game",

  readByIdGameUrl: (id) => `${Api.baseUrl}/game/${id}`,

  createGameUrl: () => Api.baseUrl + "/game",

  // Endpoint Genres

  readAllGenresUrl: () => Api.baseUrl + "/genre",

  // Endpoint User
  readAllUserUrl: () => Api.baseUrl + "/user",

  readByIdUserUrl: (id) => `${Api.baseUrl}/user/${id}`,

  createUserUrl: () => Api.baseUrl + "/user",

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
    })
}
