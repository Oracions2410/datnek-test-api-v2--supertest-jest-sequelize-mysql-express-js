const supertest = require("supertest");
const app = require('../server')
const dbHandler = require("../tests/db.handler")();
const request = supertest(app)

const URL = "/api/users";

beforeEach(async () => {
    await dbHandler.create();
    await dbHandler.migrate();
});

afterEach(async () => {
    await dbHandler.create();
    await dbHandler.migrate();
});

const userComplete = {
    username: 'Louis2M',
    email: 'Louis2M@gmail.com',
    password: 'oracions'
}

describe("UsersController", () => {
    it("Can be create correctly", async () => {
        expect(1 + 1).toEqual(2);
        expect(5 + 5).toBe(10);
    });


    it('Should create a new user', async () => {

        const response = await request.post(URL)
            .set('Authorisation', dbHandler.header)
            .send(userComplete)

        expect(response.body.username).toBe(userComplete.username)
        expect(response.body.email).toBe(userComplete.email)
        expect(response.body.slug).toBeDefined()

    })






});