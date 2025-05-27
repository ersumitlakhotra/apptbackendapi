import handleResponse from "../middlewares/handleResponse.js";
import { getAllOrderService, getOrderByIdService, createOrderService,updateOrderService } from "../models/orderModel.js";


export const getAllOrder = async (req,res,next) => {
    try{
        const data= await getAllOrderService();
        handleResponse(res,200,"Fetch Successfully",data);
    }
    catch(err){
        next(err)
    }
};


export const getOrderById = async (req,res,next) => {
    try{
        const data= await getOrderByIdService(req.params.id);
        if(!data) return handleResponse(res,404,"user not found");
        handleResponse(res,200,"Fetch via Id Successfully",data);
    }
    catch(err){
        next(err)
    }
};

export const createOrder = async (req,res,next) => {
    const {cid, order_id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto}= req.body;
    try{
        const data= await createOrderService(cid, order_id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto);
        handleResponse(res,201,"Created Successfully",data)
    }
    catch(err){
        next(err)
    }
};

export const updateOrder = async (req,res,next) => {
    const {customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,modifiedat}= req.body;
   try{
       const data= await updateOrderService(req.params.id,customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,modifiedat);
       if(!data) return handleResponse(res,404,"order not found");
       handleResponse(res,200,"Updated Successfully",data);
   }
   catch(err){
       next(err)
   }
};