import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    id: "658c6dbaae99b0be6046ce77"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "23h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const jwtPayload = jwt.verify(token, JWT_SECRET);
    // console.log(jwtPayload);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGM2ZGJhYWU5OWIwYmU2MDQ2Y2U3NyIsImlhdCI6MTcwMzcwMzMwNiwiZXhwIjoxNzAzNzg2MTA2fQ.lJQofyg8MoYOncpMOzr3wVVMsiYsiAAonzYSc2j3mqe";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch(error) {
    console.log(error.message);
}
