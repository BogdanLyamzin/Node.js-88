import { HttpError } from "../helpers/index.js";
import Contact from "../models/Contacts.js";
import User from "../models/Users.js";

export async function getAll(req, res, next) {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = null } = req.query;
  const skip = (page - 1) * limit;
  try {
    if (favorite) {
      const result = await Contact.find({ owner, favorite }, "", {
        skip,
        limit,
      }).populate("owner", "email subscription");
      res.json(result);
    } else {
      const result = await Contact.find({ owner }, "", {
        skip,
        limit,
      }).populate("owner", "email subscription");
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
}

export async function getByID(req, res, next) {
  const { contactId: _id } = req.params;
  const { _id: owner } = req.user;
  try {
    const result = await Contact.findOne({ _id, owner }).populate(
      "owner",
      "email subscription"
    );
    if (!result) {
      throw HttpError(404);
    } else {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
}
export async function add(req, res, next) {
  const { _id: owner } = req.user;
  try {
    const result = await Contact.create({ ...req.body, owner });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
export async function deleteByID(req, res, next) {
  const { contactId: _id } = req.params;
  const { _id: owner } = req.user;
  try {
    const result = await Contact.findOneAndDelete({ _id, owner });
    if (!result) {
      throw HttpError(404);
    } else {
      res.json({ message: "contact deleted" });
    }
  } catch (error) {
    next(error);
  }
}
export async function updateByID(req, res, next) {
  const { contactId: _id } = req.params;
  const { _id: owner } = req.user;
  try {
    const result = await Contact.findOneAndUpdate(
      { _id, owner },
      { ...req.body, owner }
    ).populate("owner", "email subscription");
    if (!result) {
      throw HttpError(404);
    } else {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
}
export async function updateStatusContact(req, res, next) {
  const { contactId: _id } = req.params;
  const { _id: owner } = req.user;
  try {
    const result = await Contact.findOneAndUpdate(
      { _id, owner },
      { ...req.body, owner }
    ).populate("owner", "email subscription");
    if (!result) {
      throw HttpError(404);
    } else {
      res.json(result);
    }
  } catch (error) {
    next(error);
  }
}
