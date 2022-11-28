import axios from "axios";

const burgerKenzieApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 1000,
});

export { burgerKenzieApi };
