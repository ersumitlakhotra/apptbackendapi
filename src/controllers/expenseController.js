import handleResponse from "../middlewares/handleResponse.js";
import { getAllExpenseService, createExpenseService, getExpenseByIdService, updateExpenseService, deleteExpenseService } from "../models/expenseModel.js";

export const getAllExpense = async (req, res, next) => {
    try {
        const user = await getAllExpenseService(req.params.cid);
        handleResponse(res, 200, "Fetch Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const createExpense = async (req, res, next) => {
    const { etype, trndate, assignedto, amount, notes } = req.body;
    try {
        const user = await createExpenseService(req.params.cid, etype, trndate, assignedto, amount, notes);
        handleResponse(res, 201, "Created Successfully", user)
    }
    catch (err) {
        next(err)
    }
};

export const getAllExpenseById = async (req, res, next) => {
    try {
        const user = await getExpenseByIdService(req.params.cid, req.params.id);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Fetch via Id Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const updateExpense = async (req, res, next) => {
    const { etype, trndate, assignedto, amount, notes } = req.body;
    try {
        const user = await updateExpenseService(req.params.cid, req.params.id, etype, trndate, assignedto, amount, notes);
        if (!user) return handleResponse(res, 404, "user not found");
        handleResponse(res, 200, "Updated Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

export const deleteExpense = async (req, res, next) => {
    try {
        const user = await deleteExpenseService(req.params.cid,req.params.id);
        handleResponse(res, 203, "Deleted Successfully", user);
    }
    catch (err) {
        next(err)
    }
};

