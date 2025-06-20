import express from "express";
import { getAllUsers,getUserAuth, createUser, getAllUserById, updateUser,deleteUser } from "../controllers/userController.js";
import { getAllCompany , getCompanyById, createCompany,updateCompany} from "../controllers/companyController.js";
import { createOrder, getAllOrder, getOrderById, updateOrder } from "../controllers/orderController.js";
import { getAllRoles} from "../controllers/roleController.js"
import { createServices, getAllServices, getAllServicesById, updateServices } from "../controllers/servicesController.js";

const router = express.Router();

router.get("/user/auth/:username/:password",getUserAuth);

router.get("/user/:cid",getAllUsers);
router.post("/user/:cid",createUser);
router.get("/user/:cid/:id",getAllUserById);
router.put("/user/:cid/:id",updateUser);
router.delete("/user/:cid/:id",deleteUser);

router.get("/company",getAllCompany);
router.get("/company/:id",getCompanyById);
router.post("/company",createCompany);
router.put("/company/:id",updateCompany);

router.get("/order/:cid",getAllOrder);
router.get("/order/:cid/:id",getOrderById);
router.post("/order/:cid",createOrder);
router.put("/order/:cid/:id",updateOrder);


router.get("/roles/:cid",getAllRoles);


router.get("/services/:cid", getAllServices);
router.post("/services/:cid", createServices);
router.get("/services/:cid/:id", getAllServicesById);
router.put("/services/:cid/:id", updateServices);

export default router;