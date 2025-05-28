import express from "express";
import { getAllUsers,getUserAuth, createUser, getAllUserById, updateUser,deleteUser } from "../controllers/userController.js";
import { getAllCompany , getCompanyById, createCompany,updateCompany} from "../controllers/companyController.js";
import { createOrder, getAllOrder, getOrderById, updateOrder } from "../controllers/orderController.js";
import { getAllRoles} from "../controllers/roleController.js"

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

router.get("/order",getAllOrder);
router.get("/order/:id",getOrderById);
router.post("/order",createOrder);
router.put("/order/:id",updateOrder);


router.get("/roles/:cid",getAllRoles);

export default router;