import { getAllUsersService ,getUserAuthService, createUserService,getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";
import handleResponse from "../middlewares/handleResponse.js";

export const getAllUsers = async (req,res,next) => {
    try{
        const user= await getAllUsersService(req.params.cid);
        handleResponse(res,200,"Fetch Successfully",user);
    }
    catch(err){
        next(err)
    }
};

export const getUserAuth = async (req,res,next) => {
    try{
        const user= await getUserAuthService(req.params.username,req.params.password);
        if(!user) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Fetch Successfully",user);
    }
    catch(err){
        next(err)
    }
};

export const createUser = async (req,res,next) => {
    const {username,password,role,permission,email,cell,rating,status,profilepic,fullname,accounttype}= req.body;
    try{
        const user= await createUserService(req.params.cid,username,password,role,permission,email,cell,rating,status,profilepic,fullname,accounttype);
        handleResponse(res,201,"Created Successfully",user)
    }
    catch(err){
        next(err)
    }
};

export const getAllUserById = async (req,res,next) => {
    try{
        const user= await getUserByIdService(req.params.cid,req.params.id);
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
        const user= await updateUserService(req.params.cid,req.params.id,password);
        if(!user) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Updated Successfully",user);
    }
    catch(err){
        next(err)
    }
};


export const deleteUser = async (req,res,next) => {  
    try{
        const user= await deleteUserService(req.params.cid,req.params.id);
        if(!user) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Deleted Successfully",user);
    }
    catch(err){
        next(err)
    }
};
