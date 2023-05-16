
console.log("========= 1 ===========")
// 1. Написать цикл, который создает множество параграфов 
// с каждым десятым числом в промежутке от 100 до 50 
// (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.

const divBox = document.querySelector(".numbers")
for (let i = 100; i >= 50; i-=10) {
    const pElem = document.createElement("p") 
    pElem.innerText = i 
    console.log(pElem)
    divBox.append(pElem)
}
console.log(divBox)



console.log("========= 2 ===========")
// 2.Написать цикл, который проходится по массиву
// строк, для каждой строки создает параграф и 
// добавляет его в div с классом strings_container. 
// Строки взять произвольные.

const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
const divBox2 = document.querySelector(".strings_container")

for (let i = 0; i < words.length; i++) {
    const pElem2 = document.createElement("p") 
    pElem2.innerText = words[i] 
    console.log(pElem2)
    divBox2.append(pElem2)
}
console.log(divBox2)


console.log("========= 3 ===========")
// 3.Написать цикл, который проходится по массиву 
// с объектами - у объектов свойства first_name, 
// last_name и  age (данные взять произвольные) 
// - и создает карточки только для совершеннолетних 
// пользователей. 
// Карточка должна содержать информацию 
// об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом users_container.

const products = [
    {
        first_name: "Ivan",
        last_name: "Chumak",
        age: 30,
    },
    {
        first_name: "Vasya",
        last_name: "Pupkin",
        age: 3,
    },
    {
        first_name: "Jane",
        last_name: "Ostapko",
        age: 46,
    },
    {
        first_name: "Kate",
        last_name: "Novak",
        age: 11,
    },
    {
        first_name: "Sasha",
        last_name: "Mironov",
        age: 17,
    }
]

const divBox3 = document.querySelector(".users_container")
for (let i = 0; i < products.length; i++) {
    const {first_name, last_name,age} = products[i]
    if (products[i].age < 18) {
      console.log(`${first_name} ${last_name} ${age} years old`)
      const pElem3 = document.createElement("p") 
      pElem3.innerText = `${first_name} ${last_name} ${age} years old` 
      divBox3.append(pElem3)
    }
    
}



