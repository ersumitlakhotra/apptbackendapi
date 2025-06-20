import handleResponse from "../middlewares/handleResponse.js";
import { createServicesService, getAllServicesService, getServicesByIdService, updateServicesService } from "../models/servicesModel.js";

export const getAllServices = async (req, res, next) => {
    try {
        const user = await getAllServicesService(req.params.cid);
        handleResponse(res, 200, "Fetch Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const createServices = async (req, res, next) => {
    const { title, price, timing, status } = req.body;
    try {
        const user = await createServicesService(req.params.cid, title,price, timing, status);
        handleResponse(res, 201, "Created Successfully", user)
    }
    catch (err) {
        next(err)
    }
};

export const getAllServicesById = async (req, res, next) => {
    try {
        const user = await getServicesByIdService(req.params.cid, req.params.id);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Fetch via Id Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const updateServices = async (req, res, next) => {
    const { title,price, timing, status } = req.body;
    try {
        const user = await updateServicesService(req.params.cid, req.params.id, title, price, timing, status);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Updated Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

