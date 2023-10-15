class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.owner = null;
    }

    setOwner(person) {
        if (person instanceof Person) {
            this.owner = person;
        } 
    }
}

function displayData(person, car) {
    const resultDiv = document.getElementById("result");
    const error = document.getElementById('error');
    error.innerHTML =''
    error.style.display = 'none'
    resultDiv.innerHTML = `
        <h2>Данные о человеке:</h2>
        <p>Имя: ${person.name}</p>
        <p>Возраст: ${person.age} лет</p>
        <h2>Данные об автомобиле:</h2>
        <p>Марка: ${car.make}</p>
        <p>Модель: ${car.model}</p>
        <p>Владелец автомобиля: ${car.owner ? car.owner.name : "Не установлен"}</p>
    `;
}

function submitForm() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;

    if (name.trim() === "" || isNaN(age) || age <= 18 || make.trim() === "" || model.trim() === "") {
        const error = document.getElementById('error');
        const removeResult = document.getElementById('result');

        removeResult.style.display = 'none';
        error.classList.remove("hide_error");
        error.classList.add("show_error");
        error.textContent = "Ведите коректные данные";
        return;
    }

    const person = new Person(name, age);
    const car = new Car(make, model);
    car.setOwner(person); 

    displayData(person, car);
}