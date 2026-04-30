let user = {
  a: 10,
  b: 30,
  c: {
    a: 500,
    get_A_Value() {
      return this.a;
    },
  },
};


let value = user.c.get_A_Value();
console.log("🚀 ~ value:", value);
