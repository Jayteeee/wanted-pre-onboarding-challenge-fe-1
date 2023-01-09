const baseUrl = "http://localhost:8080";

const api = async (url = "", data = {}, method = "GET") => {
  const body_data = method !== "GET" ? JSON.stringify(data) : null;

  const response = await fetch(baseUrl + url, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    referrerPolicy: "no-referrer",
    body: body_data,
  });
  return response.json();
};

export default api;
