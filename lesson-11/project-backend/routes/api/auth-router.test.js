import mongoose from "mongoose";
import request from "supertest";
import "dotenv/config";

import app from "../../app.js";

import User from "../../models/User.js";

const { TEST_DB_HOST, PORT = 3000 } = process.env;

describe("test /api/auth/signup", () => {
    let server = null;
    beforeAll(async () => {
        await mongoose.connect(TEST_DB_HOST);
        server = app.listen(PORT);
    })

    afterAll(async () => {
        await mongoose.connection.close();
        server.close();
    })

    beforeEach(() => {

    })

    afterEach(async () => {
        await User.deleteMany({});
    })

    test("test signup with correctData", async () => {
        const signupData = {
            username: "Bogdan",
            email: "bogdan@gmail.com",
            password: "123456"
        };
        const { statusCode, body } = await request(app).post("/api/auth/signup").send(signupData);
        expect(statusCode).toBe(201);
        expect(body.username).toBe(signupData.username);
        expect(body.email).toBe(signupData.email);

        const user = await User.findOne({ email: signupData.email });
        expect(user.username).toBe(signupData.username);
    })
})