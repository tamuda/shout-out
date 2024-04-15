const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/shoutouts", controller.getShout_outs);
router.post("/shoutouts", controller.addShout_out);
router.get("/shoutouts/:soid", controller.getShout_outBySOId);
router.put("/shoutouts/:soid", controller.updateShout_out);
router.delete("/shoutouts/:soid", controller.removeShout_out);
router.get("/awards", controller.getAwards);
router.post("/awards", controller.addAward);
router.get("/awards/:awardID", controller.getAwardByID);
router.put("/awards/:awardID", controller.updateAward);
router.delete("/awards/:awardID", controller.removeAward);
//get user by id
router.post("/user", controller.getUserById);
//get all users
router.get("/users", controller.getUsers);

module.exports = router;
