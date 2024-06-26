const express = require('express');
const router = express.Router();

const controller_auth = require("../../controller/client/auth");

router.post('/profile', controller_auth.profile);
router.post("/deposit", controller_auth.deposit);
router.post("/withdrawals", controller_auth.withdrawals);
router.post("/add-bonus", controller_auth.addBonus);
router.get("/transactions", controller_auth.get_user_transactions);
router.get("/trade", controller_auth.get_user_trade);
router.post("/place-trade", controller_auth.place_trade);


module.exports = router;
