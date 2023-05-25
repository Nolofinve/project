'use strict';

// (*) Продвинутые задания на использование функций
// В этих задачах мы уже усложним работу с функциями.Они необязательны и тут можно попробовать свои силы.

//     Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу.Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

//     Задачи:

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример).Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами(10 часов).Так как проверки на большие числа будут раздувать код(33 часа, 31 час, 11 часов и тд).Этого будет достаточно и код будет проверять именно этот промежуток(1 - 10 часов).Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

//     Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes()

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

//     Пример:

// findMaxNumber(1, 5, 6.6, 11); => 11

// findMaxNumber(1, 5, '6', '10');  => 0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS.Подходит любое:)

function findMaxNumber