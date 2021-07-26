const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../src/app/models');
const { Log } = require('../src/app/models');

factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

factory.define('Log', Log, {
    name: faker.system.fileName(),
    message: {
        "status": "created",
        "data": {
            "name": faker.name.findName(),
            "cpf": faker.internet.cpf(),
            "email": faker.internet.email()
        },
    },
    status: "done",
    datetime: faker.date.recent()
})

module.exports = factory;