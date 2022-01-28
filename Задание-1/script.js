// 1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере
// let message = 'Hello World';
// document.writeln(message);

// 2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение
// let message2 = 'Hello World';
// document.writeln(message2);

// message2 = 'Hi World';
// document.writeln(message2);

// 3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
// document.writeln('Kubanychbek');
// document.writeln('kubanyshbek.orozmatov.kk@gmail.com');

// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
// let suv = +prompt('Введите количество сувинеров');
// let bez = +prompt('Введите количество безделушек');

// let resSuv = suv * 75;
// let resBez = bez * 112;
// let result = resSuv + resBez;
// document.writeln(result, 'г');

// 5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
//     - сумма a и b; 
//     - разница между a и b;
//     - произведение a и b; 
//     - частное от деления a на b; 
//     - остаток от деления a на b;  
//     - результат возведения числа a в степень b

let usersA = +prompt('Введите целое число');
let usersB = +prompt('Введите целое число');

document.writeln(usersA + usersB);
document.writeln(usersA - usersB);
document.writeln(usersA * usersB);
document.writeln(usersA / usersB);
document.writeln(usersA % usersB);
document.writeln(usersA ** usersB);