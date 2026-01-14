import { Router } from "express";
import productController from "../../controllers/product.controller";
import authMiddleware from "../../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, productController.getAll);

router.get("/:id", authMiddleware, productController.getById);

router.post("/", authMiddleware, productController.create);

router.put("/:id", authMiddleware, productController.update);

router.delete("/:id", authMiddleware, productController.remove);

export default router;
