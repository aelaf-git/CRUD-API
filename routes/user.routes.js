import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send({ message: "Get All Users" });
});

userRouter.get("/:id", (req, res) => {
    res.send({ message: "Get User By Id" });
});

userRouter.post("/", (req, res) => {
    res.send({ message: "Create User" });
});

userRouter.put("/:id", (req, res) => {
    res.send({ message: "Update User" });
});

userRouter.delete("/:id", (req, res) => {
    res.send({ message: "Delete User" });
});

export default userRouter;