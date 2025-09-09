import handleResponse from "../middlewares/handleResponse.js";
import { getAllLogsService, createLogsService,getLogsByIdService,updateLogsService } from "../models/logsModel.js";

export const getAllLogs = async (req, res, next) => {
    try {
        const user = await getAllLogsService(req.params.cid);
        handleResponse(res, 200, "Fetch Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const createLogs = async (req, res, next) => {
    const { ltype, lid, lname, userid,  status } = req.body;
    try {
        const user = await createLogsService(req.params.cid, ltype, lid, lname, userid, status);
        handleResponse(res, 201, "Created Successfully", user)
    }
    catch (err) {
        next(err)
    }
};

export const getAllLogsById = async (req, res, next) => {
    try {
        const user = await getLogsByIdService(req.params.cid, req.params.id);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Fetch via Id Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const updateLogs = async (req, res, next) => {
    const { ltype, lid, lname, userid,  status } = req.body;
    try {
        const user = await updateLogsService(req.params.cid, req.params.id, ltype, lid, lname, userid, status);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Updated Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

