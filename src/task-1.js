// task-1
// function getOrderMessage(product, quantity, pricePerUnit) {
//   const totalPrice = quantity * pricePerUnit;
//   return `Order of ${quantity} ${product} will cost ${totalPrice} credits`;
// }

// console.log(getOrderMessage('laptop', 2, 1500)); // "Order of 2 laptop will cost 3000 credits"
// console.log(getOrderMessage('phone', 5, 800));
// console.log(getOrderMessage('tablet', 3, 600));

// task-2
// function getSubscriptionStatus(username, isSubscribed) {
//   if (isSubscribed) {
//     return `${username} is subscribed`;
//   } else {
//     return `${username} is not subscribed`;
//   }
// }
// console.log(getSubscriptionStatus('Mango', true)); // "Mango is subscribed"
// console.log(getSubscriptionStatus('Poly', false)); //  "Poly is not subscribed"
// console.log(getSubscriptionStatus('Ajax', true)); // "Ajax is subscribed

// task-3
// function getTripCost(distance, fuelConsumption, fuelPfice) {
//   const totalCost = (distance / 100) * fuelConsumption * fuelPfice;
//   //   const sume = parseInt(totalCost);
//   return `Trip will cost ${parseInt(totalCost)} credits`;
// }
// console.log(getTripCost(958, 8.65, 6.54));
// console.log(getTripCost(1500, 10, 5));
// console.log(getTripCost(300, 7.5, 4.8));

// task-4
// function detDiscountMessage(price, discount, product) {
//   const finalPrice = price - (price * discount) / 100;
//   return `Price of ${product} after ${discount}% discount is ${finalPrice} credits`;
// }
// console.log(detDiscountMessage(1000, 20, 'laptop')); // "Price of laptop after 20% discount is 800 credits"
// console.log(detDiscountMessage(500, 10, 'phone'));
// console.log(detDiscountMessage(200, 5, 'tablet'));

// let price = 0;
// const subscription = 'pro';
// // const subscription = 'free';

// if (subscription === 'pro') {
//   price = 100;
// }
// console.log(price); // 100

// function getPrice(subscription) {
//   let price = 0;
//   if (subscription === 'pro') {
//     price = 100;
//   }
//   return price;
// }
// console.log(getPrice('pro')); // 100
// console.log(getPrice('free')); // 0

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
// }
// console.log(checkAge(17));
// console.log(checkAge(18));
// console.log(checkAge(20));

// const grade = 85;
// const grade = 65;
// if (grade >= 70) {
//   console.log('satisfactory');
// } else {
//   console.log('unsatisfactory');
// }

// function checkGrade(grade) {
//   if (grade >= 70) {
//     return `satisfactory`;
//   } else {
//     return `Unsatisfactory`;
//   }
// }
// console.log(checkGrade(40));
// console.log(checkGrade(85));

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return `Not enough goods in stock!`;
//   } else {
//     return `Order is processed, our manager will contact you.`;
//   }
// }
// console.log(checkStorage(100, 200));
// console.log(checkStorage(100, 50));
// console.log(checkStorage(200, 20));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return `There are no products in the order!`;
//   } else if (ordered > available) {
//     return `Your order is too large, there are not enough items in stock!`;
//   }
//   return `The order is accepted, our manager will contact you`;
// }
// console.log(checkStorage(100, 0));
// console.log(checkStorage(100, 150));
// console.log(checkStorage(100, 50));

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // "adult"

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam' === password;
//   return correctPassword ? 'Access granted' : 'Access denied, wrong password!';
// }
// console.log(checkPassword('mangodab3st'));
// console.log(checkPassword('jqueryismyjam'));

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//     case 'unknown':
//     case 'professional':
//     case `premium`:
//       return 20;
//     case 'organization':
//       return 50;
//     default:
//       return 'Invalid subscription type';
//   }
// }
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));
// console.log(getSubscriptionPrice('unknown'));
// console.log(getSubscriptionPrice('premium'));
// console.log(getSubscriptionPrice('basic'));
