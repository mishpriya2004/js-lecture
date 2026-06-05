import React from "react";

export default function ApiCall() {
  // fetch("https://fakestoreapi.com/products")
  //   .then((data) => {
  //     console.log("🚀 ~ ApiCall ~ data:", data);
  //     return data.json();
  //   })
  //   .then((finalData) => {
  //     console.log("🚀 ~ ApiCall ~ finalData:", finalData);
  //   });

  async function fetchData(params) {
    let data = await fetch("https://fakestoreapi.com/products");
    console.log("🚀 ~ fetchData ~ data:", data);
    let finalData = await data.json();
    console.log("🚀 ~ fetchData ~ finalData:", finalData);
  }
  fetchData();

  return <div>ApiCall</div>;
}

/*
database <-> api(be) <->  frontend 


https://fakestoreapi.com/products
https://fakestoreapi.com/products
https://fakestoreapi.com/products/1


url => base url + end point 
https://fakestoreapi.com (base url) + /carts (end point)

api type
- post => create
- get => to get data => no body  
- put => for data update
- delete => to delete data 
- patch => update data


body => data (JSON)
header => header 
query => filters fields





*/
