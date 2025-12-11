// function makeMessage(name, price) {
//   //   console.log(`You picked ${name}, price per item is ${price} credits`);
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// console.log(makeMessage('Radar', 6150));
// // makeMessage('Reactor', 8000);
// // makeMessage('Radar', 6150);
// // makeMessage('Scanner', 3500);
// // makeMessage('Engine', 4070);

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));

// function getShippingMessage(country, price, deliveryFee) {
//   // const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }
// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// function getElementWidth(content, padding, border) {
//   return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
// }
// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

// const fullName = 'Jacob Mercer';
// console.log(fullName);
// console.log(fullName.slice(0, 5));
// console.log(fullName.slice(6));

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring('Hello world', 5)); // Hello
// console.log(getSubstring('Hello world', 2)); // He

// const message = 'Welcome to Bahamas!';
// console.log(message.toLowerCase());
// console.log(message);
// console.log(message.toUpperCase());

// const brancdName = 'samsung';
// const userInput = 'saMsUng';
// const lowercaseInput = userInput.toLowerCase();
// console.log(brancdName); // samsung
// console.log(userInput); // saMsUng
// console.log(userInput === brancdName); // false
// console.log(lowercaseInput); // samsung
// console.log(lowercaseInput === brancdName); // true

// function normalizeInput(input, to) {
//   return to === 'lower' ? input.toLowerCase() : input.toUpperCase();
// }
// console.log(normalizeInput("This ISN'T SpaM", 'lower'));
// console.log(normalizeInput("This ISN'T SpaM", 'upper'));

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// console.log(checkForName('Jacob Mercer', 'jacob')); // true
// console.log(checkForName('Jacob Mercer', 'mercer')); // true
// console.log(checkForName('Jacob Mercer', 'Jason')); // false

// function checkFileExtension(fileName, ext) {
//   if (fileName.toLowerCase().endsWith(ext.toLowerCase())) {
//     return `File extension matches`;
//   } else {
//     return `File extension does not match`;
//   }
// }
// console.log(checkFileExtension('document.pdf', '.pdf')); // "File extension matches"
// console.log(checkFileExtension('image.jpeg', '.png')); // "File extension does not match"
// console.log(checkFileExtension('archive.zip', '.ZIP')); // "File extension matches"

// const message = 'Welcome to Bahamas!';
// const index = message.indexOf('to');
// console.log(index); // 8

// function getFileName(file) {
//   return getFileName ? file.slice(0, file.indexOf('.')) : file;
// }

// function getFileName(file) {
//   const index = file.indexOf('.');
//   if (index === -1) {
//     return file;
//   } else {
//     return file.slice(0, index);
//   }
// }
// console.log(getFileName('styles.css'));
// console.log(getFileName('index'));

// function createFileName(name, ext) {
//   return name.trim() + '.' + ext;
// }
// console.log(createFileName('  myfile  ', 'txt')); // "myfile.txt"
// console.log(createFileName('  document  ', 'pdf')); // "document.pdf"
