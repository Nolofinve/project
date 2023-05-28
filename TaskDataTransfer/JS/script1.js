'use strict';

// Задачи на работу с объектами
// В этих заданиях мы с вами потренируемся работать с объектами.Это важный навык и нам нужно понимать как работают эти структуры.

//     Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу.Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках.Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// У вас есть готовый объект с данными.Разработчик Х хочет написать часть функционала, но ему не хватает навыков.Выполните часть заданий за него.

//     Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

//     Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S.желательно использовать деструктуризацию, но не обязательно

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const { age } = plan;
        const { languages } = plan.skills;
        let str = `Me ${age} and I speak languages: `;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

console.log(showExperience(personalPlanPeter));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

//     Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков.Если ни один не указан, то возвращается пустая строка.

//     P.S.Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {
    let str = '';
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Language ${key} studied at ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);
console.log(showProgrammingLangs(personalPlanPeter));

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter.При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

//     Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре(большими буквами).Если данные в объекте поменяются, то и сообщение тоже изменится.



//     P.S.Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен.Но пока делаем это менее удобным способом)

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке.Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂