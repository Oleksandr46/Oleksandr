// function makeMessage(name, price) {
//   //   console.log(`You picked ${name}, price per item is ${price} credits`);
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// console.log(makeMessage('Radar', 6150));
// // makeMessage('Reactor', 8000);
// // makeMessage('Radar', 6150);
// // makeMessage('Scanner', 3500);
// // makeMessage('Engine', 4070);

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
