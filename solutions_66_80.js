// Практические задания по JavaScript №66–80 — полные решения
// Запуск: node solutions_66_80.js


// Задание 66. Проверка интернет-соединения
(() => {
  const speed = 25;
  if (speed < 0) {
    console.log("Некорректная скорость");
  } else if (speed === 0) {
    console.log("Нет подключения");
  } else if (speed <= 10) {
    console.log("Медленный интернет");
  } else if (speed <= 50) {
    console.log("Средняя скорость");
  } else {
    console.log("Быстрый интернет");
  }
  // Проверка: 0, 5, 25, 100, -3.
})();


// Задание 67. Проверка пароля и логина
(() => {
  const login = "admin";
  const password = "12345";
  const correctLogin = "admin";
  const correctPassword = "12345";

  if (login === correctLogin && password === correctPassword) {
    console.log("Вход выполнен");
  } else if (login === correctLogin) {
    console.log("Логин правильный, но пароль неверный");
  } else {
    console.log("Ошибка авторизации");
  }
})();


// Задание 68. Проверка рабочего времени
(() => {
  const hour = 14;
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    console.log("Некорректное время");
  } else if (hour >= 8 && hour < 18) {
    console.log("Кабинет работает");
  } else {
    console.log("Кабинет закрыт");
  }
})();


// Задание 69. Проверка температуры процессора
(() => {
  const cpuTemperature = 75;
  if (cpuTemperature < 40) {
    console.log("Низкая температура");
  } else if (cpuTemperature < 70) {
    console.log("Нормальная температура");
  } else if (cpuTemperature < 90) {
    console.log("Высокая температура");
  } else {
    console.log("Критическая температура! Проверьте охлаждение.");
  }
})();


// Задание 70. Проверка доступа к экзамену
(() => {
  const attendance = 85;
  const averageScore = 70;
  const reasons = [];
  if (attendance < 80) reasons.push("посещаемость ниже 80%");
  if (averageScore < 50) reasons.push("средний балл ниже 50");

  if (reasons.length === 0) {
    console.log("Допущен к экзамену");
  } else {
    console.log("Не допущен. Причина: " + reasons.join("; "));
  }
})();


// Задание 71. Подсчёт стоимости оборудования
(() => {
  const equipment = [250000, 180000, 320000, 150000, 200000];
  let total = 0;
  for (const price of equipment) total += price;
  const average = equipment.length ? total / equipment.length : 0;
  console.log("Общая стоимость:", total, "₸");
  console.log("Средняя стоимость:", average, "₸");
})();


// Задание 72. Поиск самого низкого балла
(() => {
  const scores = [78, 95, 43, 67, 88, 50, 91];
  let minScore = scores[0];
  let below50 = 0;
  for (const score of scores) {
    if (score < minScore) minScore = score;
    if (score < 50) below50++;
  }
  console.log("Минимальный балл:", minScore);
  console.log("Студентов с баллом ниже 50:", below50);
})();


// Задание 73. Генерация таблицы квадратов
(() => {
  for (let number = 1; number <= 20; number++) {
    console.log(`${number} → ${number ** 2}`);
  }
})();


// Задание 74. Анализ количества студентов
(() => {
  const groups = [24, 22, 25, 20, 23, 21];
  const totalStudents = groups.reduce((sum, count) => sum + count, 0);
  const averageGroup = totalStudents / groups.length;
  const largestGroup = Math.max(...groups);
  const groupsOver22 = groups.filter(count => count > 22).length;
  console.log("Всего студентов:", totalStudents);
  console.log("Средняя численность группы:", averageGroup.toFixed(2));
  console.log("Самая большая группа:", largestGroup);
  console.log("Групп более чем с 22 студентами:", groupsOver22);
})();


// Задание 75. Разделение чисел на чётные и нечётные
(() => {
  const numbers = [12, 7, 18, 5, 24, 9, 30, 11];
  const evenNumbers = [];
  const oddNumbers = [];
  for (const number of numbers) {
    (number % 2 === 0 ? evenNumbers : oddNumbers).push(number);
  }
  console.log("Чётные:", evenNumbers);
  console.log("Нечётные:", oddNumbers);
})();


// Задание 76. Расчёт стоимости обучения
(() => {
  function calculateTuition(monthlyFee, months) {
    if (!Number.isFinite(monthlyFee) || !Number.isFinite(months) ||
        monthlyFee <= 0 || months <= 0) {
      throw new Error("Стоимость и количество месяцев должны быть положительными");
    }
    return monthlyFee * months;
  }
  console.log(calculateTuition(25000, 8), "₸"); // 200000 ₸
})();


// Задание 77. Проверка электронного адреса
(() => {
  function checkEmail(email) {
    if (typeof email !== "string") return false;
    const at = email.indexOf("@");
    const dot = email.indexOf(".", at + 1);
    return at > 0 && dot > at + 1 && dot < email.length - 1 &&
           !email.includes(" ") && email.indexOf("@", at + 1) === -1;
  }
  const email = "student@gmail.com";
  console.log(checkEmail(email) ? "Формат email корректен" : "Ошибка email");
})();


// Задание 78. Учёт компьютеров
(() => {
  const computer = {
    id: 1,
    processor: "Intel Core i5",
    ram: 16,
    storage: 512,
    working: true
  };
  console.log("Характеристики до обновления:", computer);
  console.log(computer.working ? "Исправен" : "Требуется ремонт");
  computer.room = 21;
  computer.ram = 32;
  console.log("Характеристики после обновления:", computer);
})();


// Задание 79. Расчёт премии сотрудника
(() => {
  function calculateBonus(tasks) {
    if (!Number.isInteger(tasks) || tasks < 0) {
      throw new Error("Количество задач должно быть целым неотрицательным числом");
    }
    if (tasks < 5) return 0;
    if (tasks < 10) return 10000;
    if (tasks < 15) return 20000;
    return 35000;
  }
  for (const tasks of [3, 7, 12, 18]) {
    console.log(`${tasks} задач: ${calculateBonus(tasks)} ₸`);
  }
})();


// Задание 80. Поиск самого успешного студента
(() => {
  const students = [
    { name: "Алия", score: 87 },
    { name: "Арман", score: 94 },
    { name: "Данияр", score: 76 },
    { name: "Мадина", score: 98 }
  ];
  const bestStudent = students.reduce((best, student) =>
    student.score > best.score ? student : best
  );
  const highScorers = students.filter(student => student.score >= 90);
  console.log("Лучший студент:", bestStudent.name, bestStudent.score);
  console.log("Результаты 90 и выше:", highScorers);
})();
