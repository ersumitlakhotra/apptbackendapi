import express from "express";
import { getAllUsers,getUserAuth, createUser, getAllUserById, updateUser,deleteUser } from "../controllers/userController.js";
import { getAllCompany , getCompanyById, createCompany,updateCompany} from "../controllers/companyController.js";
import { createOrder, getAllOrder, getOrderById, updateOrder } from "../controllers/orderController.js";

const router = express.Router();

router.get("/user/auth/:username/:password",getUserAuth);

router.get("/user",getAllUsers);
router.post("/user",createUser);
router.get("/user/:id",getAllUserById);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);

router.get("/company",getAllCompany);
router.get("/company/:id",getCompanyById);
router.post("/company",createCompany);
router.put("/company/:id",updateCompany);

router.get("/order",getAllOrder);
router.get("/order/:id",getOrderById);
router.post("/order",createOrder);
router.put("/order/:id",updateOrder);

export default router;