const request = require('supertest');

const app = require('../../src/app');
const factory = require("../factories");

describe('Log', () => {

    it('should have correct parameters', async () => {

        const log = await factory.create('Log');

        /*
        const log = await Log.create({
            service: "user",
            message: {
                "status": "created",
                "data": {
                    "name": "Roberval Parin",
                    "email": "parin@gmail.com",
                    "cpf": "23232323223"
                },
            },
            type: "normal", //critical, normal, warning
            status: "resolvido", //pending, resolved, progress
            datetime: "2021-07-22 17:05"
        });
        */

        const response = await request(app)
            .post("/log")
            .send({
                service: log.service,
                message: log.message,
                type: log.type,
                status: log.status,
                datetime: log.datetime
            });

    })

})