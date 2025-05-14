import express from "express";
import { getAllUsers, createUser, getAllUserById, updateUser,deleteUser } from "../controllers/userController.js";
import { getAllCompany , getCompanyById, createCompany,updateCompany} from "../controllers/companyController.js";

const router = express.Router();

router.get("/user",getAllUsers);
router.post("/user",createUser);
router.get("/user/:id",getAllUserById);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);


router.get("/company",getAllCompany);
router.get("/company/:id",getCompanyById);
router.post("/company",createCompany);
router.put("/company/:id",updateCompany);

export default router;