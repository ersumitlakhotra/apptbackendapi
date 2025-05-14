import { getAllUsersService , createUserService,getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";
import handleResponse from "../middlewares/handleResponse.js";

export const getAllUsers = async (req,res,next) => {
    try{
        const user= await getAllUsersService();
        handleResponse(res,200,"Fetch Successfully",user);
    }
    catch(err){
        next(err)
    }
};


export const createUser = async (req,res,next) => {
    const {cid,username,password,type,permission}= req.body;
    try{
        const user= await createUserService(cid,username,password,type,permission);
        handleResponse(res,201,"Created Successfully",user)
    }
    catch(err){
        next(err)
    }
};

export const getAllUserById = async (req,res,next) => {
    try{
        const user= await getUserByIdService(req.params.id);
        if(!user) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Fetch via Id Successfully",user);
    }
    catch(err){
        next(err)
    }
};
export const updateUser = async (req,res,next) => {
     const {password}= req.body;
    try{
        const user= await updateUserService(req.params.id,password);
        if(!user) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Updated Successfully",user);
    }
    catch(err){
        next(err)
    }
};


export const deleteUser = async (req,res,next) => {  
    try{
        const user= await deleteUserService(req.params.id);
        if(!user) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Deleted Successfully",user);
    }
    catch(err){
        next(err)
    }
};
