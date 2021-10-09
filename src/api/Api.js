export const Api = {
  baseUrl: "http://localhost:3000",

  readAllGameUrl: () => Api.baseUrl + "/game",

  readByIdGameUrl: (id) => `${Api.baseUrl}/game/${id}`,

  createGameUrl: () => Api.baseUrl + "/game",

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
