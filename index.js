let message = [
"Пойдем гулять в парк?",
"Кажется, дождь собирается. Лучше пойдем в кино!",
"Давай, сегодня как раз вышел новый фильм.",
"Встречаемся через час у кинотеатра."
];

console.log("Задание 1");

for (let i = 0; i < message.length; i++) {
  i % 2 == 0 ? console.log(`${i+1}) Вы: ${message[i]}`) : console.log(`${i+1}) Друг: ${message[i]}`);
}

console.log("Задание 2");

let elem = "кино";
for (let i = 0; i < message.length; i++) {
  if (message[i].includes(elem)) {
    console.log(`${message[i]}`);
  }
}
