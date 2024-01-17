import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

import { HttpError } from "../helpers/index.js";

import { ctrlWrapper } from "../decorators/index.js";

const { JWT_SECRET } = process.env;

const signup = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email already exist");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ ...req.body, password: hashPassword });

    res.status(201).json({
        username: newUser.username,
        email: newUser.email,
    })
}

const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401, "Email or password invalid"); // throw HttpError(401, "Email invalid");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpError(401, "Email or password invalid"); // throw HttpError(401, "Password invalid");
    }

    const { _id: id } = user;

    const payload = {
        id,
    }

    const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
    await User.findByIdAndUpdate(id, { accessToken, refreshToken });

    res.json({
        accessToken,
        refreshToken,
    })
}

const getCurrent = (req, res) => {
    const { name, email } = req.user;

    res.json({
        name,
        email,
    })
}

const signout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { accessToken: "", refreshToken: "" });

    res.json({
        message: "Signout success"
    })
}

const refresh = async (req, res) => {
    const { refreshToken } = req.body;
    try {
        const { id } = jwt.verify(refreshToken, JWT_SECRET);
        const user = await User.findOne({ refreshToken });
        if (!user) {
            throw HttpError(403);
        }
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
        const refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
        await User.findByIdAndUpdate(id, { accessToken, refreshToken });

        res.json({
            accessToken,
            refreshToken,
        })
    }
    catch {
        throw HttpError(403);
    }
}

export default {
    signup: ctrlWrapper(signup),
    signin: ctrlWrapper(signin),
    getCurrent: ctrlWrapper(getCurrent),
    signout: ctrlWrapper(signout),
    refresh: ctrlWrapper(refresh),
}