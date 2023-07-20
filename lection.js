// // const dictionary = new Map();
// // console.log(dictionary);
// ==========================================================

// const button = new Map([
//    ["color", "red"],
//    ["size", "32px"],
// ]);
// console.log(button);
// ==========================================================

// const obj = {
//    color: "red",
//    size: 32 + "px",
// };

// const button2 = new Map(Object.entries(obj));
// console.log(button2);

// const set = new Set(["red", "green", "blue", "yellow"]);
// const button3 = new Map(set.entries());
// console.log(button3);

// const button4 = new Map(Object.entries(Object.fromEntries(set.entries())));
// console.log(button4);
// const set2 = new Set(button);
// console.log(set2);
// ==========================================================

// const set3 = new Set(button.keys());
// console.log(set3);

// const set4 = new Set(button.values());
// console.log(set4);
// ==========================================================
// for (const [key, value] of button) {
//    console.log(key, value);
// }
// ==========================================================
// button.forEach((value, key, map) => console.log(key, value, map));
// ==========================================================

// console.log(button.size);
// ==========================================================

// button.set("key", "value");
// console.log(button);
// console.log(button.get("key"));
// console.log(button.delete("key"));
// console.log(button);
// console.log(button.has("color")); //true
// console.log(button.has("key")); //false
// button.clear();
// console.log(button.size);
// ==========================================================
// ==========================================================
// ==========================================================
// const LANG_LIST = {
//    UA: "uk-UA",
//    EU: "eu-US",
// };
// const activeLang = LANG_LIST.EU;
// const product = {
//    price: 100,
//    amount: 3,
//    info: new Map([
//       [LANG_LIST.UA, { title: "Заголовок", info: "Інформація" }],
//       [LANG_LIST.EU, { title: "Tittle", info: "Information" }],
//    ]),
// };

// const info = product.info.get(activeLang);
// console.log(info);
// console.log(product.info.has(activeLang));
// ==========================================================
// ==========================================================
// ==========================================================
// const user1 = {
//    id: 1234,
//    name: "Ivan",
// };
// const user2 = {
//    id: 5554,
//    name: "Victor",
// };
// const product1 = {
//    id: 1234,
//    title: "Phone",
// };
// const product2 = {
//    id: 5554,
//    title: "Computer",
// };

// const userProductList = new Map();
// userProductList.set(user1, product1).set(user2, product2);

// console.log(userProductList);
// console.log(userProductList.has(user1));
// console.log(userProductList.get(user1));

// const productClientList = new Map();
// productClientList.set(product1, new Set()).set(product2, new Set());
// console.log(productClientList);
// productClientList.set(product1, productClientList.get(product1).add(user1));
// console.log(productClientList);

// const productClientList = new Map([[product1, new Set()]]);
// console.log(productClientList);
// productClientList.set(product1, productClientList.get(product1).add(user1));
// productClientList.set(product1, productClientList.get(product1).add(user2));
// console.log(productClientList);
// console.log(productClientList.get(product1).has(user1));
