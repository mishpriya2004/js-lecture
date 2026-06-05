import React from "react";
import axios from "axios";


export default function AxiosFetch() {
  (async function fetchdata(params) {
    let response = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    });
    console.log("🚀 ~ fetchdata ~ response:", response.data)
  })();
  return <div>AxiosFetch</div>;
}


/*

let instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default function AxiosFetch() {
  (async function fetchdata(params) {
    let response = await instance({
      method: "GET",
      url: "/products",
    });
    console.log("🚀 ~ fetchdata ~ response:", response.data);
  })();
  return <div>AxiosFetch</div>;
}

*/