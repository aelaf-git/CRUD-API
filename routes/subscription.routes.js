import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    res.send({ message: "Get All Subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
    res.send({ message: "Get Subscription By Id" });
});

subscriptionRouter.post("/", (req, res) => {
    res.send({ message: "Create Subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
    res.send({ message: "Update Subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
    res.send({ message: "Delete Subscription" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
    res.send({ message: "Get User Subscriptions" });
});

subscriptionRouter.put("/user/:id/cancel", (req, res) => {
    res.send({ message: "Cancel Subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    res.send({ message: "Upcoming Renewals" });
});

export default subscriptionRouter;