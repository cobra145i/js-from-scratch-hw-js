/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(arr, arr1) {
    let ArrayNew = []
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i]
        if (includesElement(arr1, currentElement)) {
            if (!includesElement(ArrayNew, currentElement)) {
                ArrayNew.push(currentElement)
            }

        }


    }
    return ArrayNew

}

findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]



