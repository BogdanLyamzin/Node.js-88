import fs from "fs/promises";

import Movie from "../models/Movie.js";

import { HttpError, cloudinary } from "../helpers/index.js";

import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const result = await Movie.find({ owner }, "-createdAt -updatedAt", { skip, limit }).populate("owner", "username");

    res.json(result);
}

const getById = async (req, res) => {
    const { id: _id } = req.params;
    const { _id: owner } = req.user;
    const result = await User.findOne({ _id, owner });
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(result);
}

const add = async (req, res) => {
    const { _id: owner } = req.user;
    try {
        const { url: poster } = await cloudinary.uploader.upload(req.file.path, {
            folder: "posters",
        });
        await fs.unlink(req.file.path);
        const result = await Movie.create({ ...req.body, poster, owner });
    
        res.status(201).json(result)
    }
    catch(error) {
        await fs.unlink(req.file.path);
        throw error;
    }
}

const updateById = async (req, res) => {
    const { id: _id } = req.params;
    const { _id: owner } = req.user;
    const result = await Movie.findOneAndUpdate({ _id, owner }, req.body);
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json(result);
}

const deleteById = async (req, res) => {
    const { id: _id } = req.params;
    const { _id: owner } = req.user;
    const result = await Movie.findOneAndDelete({ _id, owner });
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
    }

    res.json({
        message: "Delete success"
    })
}

export default {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
}