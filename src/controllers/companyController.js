import { getAllCompanyService , getCompanyByIdService, createCompanyService, updateCompanyService } from "../models/companyModel.js";
import handleResponse from "../middlewares/handleResponse.js";


export const getAllCompany = async (req,res,next) => {
    try{
        const data= await getAllCompanyService();
        handleResponse(res,200,"Fetch Successfully",data);
    }
    catch(err){
        next(err)
    }
};


export const getCompanyById = async (req,res,next) => {
    try{
        const data= await getCompanyByIdService(req.params.id);
        if(!data) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Fetch via Id Successfully",data);
    }
    catch(err){
        next(err)
    }
};

export const createCompany = async (req,res,next) => {
    const {name, address, city, province, country, postal, email, cell, owner, ownercell}= req.body;
    try{
        const data= await createCompanyService(name, address, city, province, country, postal, email, cell, owner, ownercell);
        handleResponse(res,201,"Created Successfully",data)
    }
    catch(err){
        next(err)
    }
};

export const updateCompany = async (req,res,next) => {
    const {name, address, city, province, country, postal, email, cell, owner, ownercell,active}= req.body;
   try{
       const data= await updateCompanyService(req.params.id,name, address, city, province, country, postal, email, cell, owner, ownercell,active);
       if(!data) return handleResponse(res,404,"user not found");
       handleResponse(res,200,"Updated Successfully",data);
   }
   catch(err){
       next(err)
   }
};