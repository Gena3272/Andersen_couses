/**
 * Создать класс User который будет являтся базовым. Добавить в него свойства name, isAdmin.
 * Добавить методы которые будут возвращать name, isAdmin.
 * Создать классы Admin и DefaultUser, которые будут наследоватся от класса User.
 * Переопределить метод родителя(один), росширить метод(один),
 * а так же добавить новый метод(на ваш выбор). Можно добавить свйоство(если хотите).
 * 1. Написать прототипное наследование.
 */

const user = {
    name: 'User',
    isAdminPanel: false,
    getName() {
        return this.name;
    },
    getIsAdmin() {
        return this.isAdmin;
    },
};

const admin = Object.create(user, {
    secondName: {
        value: 'Admin',
    },
    isAdminPanel: {
        value: true,
    },
    getName: {
        value: function () {
            return this.secondName;
        }
    },
});

const defaultUser = Object.create(user, {
    age: {
        value: 30,
    },
    secondName: {
        value: 'defaultUser',
    },
    getName: {
        value: function () {
            return this.__proto__.getName() + this.secondName;
        }
    },
    getAge: {
        value: function () {
            return this.age;
        }
    },
});