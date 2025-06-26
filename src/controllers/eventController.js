import handleResponse from "../middlewares/handleResponse.js";
import { createEventService, getAllEventService, getEventByIdService, updateEventService } from "../models/eventModel.js";

export const getAllEvent = async (req, res, next) => {
    try {
        const user = await getAllEventService(req.params.cid);
        handleResponse(res, 200, "Fetch Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const createEvent = async (req, res, next) => {
    const { title, description, startdate,enddate,services,discounttype,discount, status } = req.body;
    try {
        const user = await createEventService(req.params.cid, title, description, startdate, enddate, services, discounttype, discount, status);
        handleResponse(res, 201, "Created Successfully", user)
    }
    catch (err) {
        next(err)
    }
};

export const getAllEventById = async (req, res, next) => {
    try {
        const user = await getEventByIdService(req.params.cid, req.params.id);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Fetch via Id Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const updateEvent = async (req, res, next) => {
    const { title, description, startdate, enddate, services, discounttype, discount, status } = req.body;
    try {
        const user = await updateEventService(req.params.cid, req.params.id, title, description, startdate, enddate, services, discounttype, discount, status);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Updated Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

