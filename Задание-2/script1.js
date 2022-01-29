// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**
let message = 'ddd@bbb@ccc';
document.writeln(message.replace(/@/g, '!'));