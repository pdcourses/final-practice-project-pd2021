const request = require('supertest');
const {sequelize, User} = require('../db/models');

const {createApp} = require('../app');
const app = createApp();

const yup = require('yup');

const testUser = {
    firstName: `Test${Date.now()}`,
    lastName:  `Surname${Date.now()}`,
    displayName: `DName${Date.now()}`,
    email: `test${Date.now()}@email.com`,
    password: 'qwerty',
    role: 'customer',
};

beforeAll( () => User.create(testUser));
afterAll( () => sequelize.close());

const authBodySchema = yup.object({
    data: yup.object({
        user: yup.object().required(),
        tokenPair: yup.object({
            accessToken: yup.string().required(),
            refreshToken: yup.string().required(),
        }).required()
    })
}).required();

describe('LOGIN', () => {
    test('User must login successfully', async () => {
        const {status , body} = await (await request(app).post('/api/login')).setEncoding({
            email: testUser.email,
            password: testUser.password,
        }); 
        expect(status).toBe(201);
        expect(await authBodySchema.isValid(body)).toBe(true);
    });
});