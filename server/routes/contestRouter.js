const { Router } = require("express");
const basicMiddlewares = require("../middlewares/basicMiddlewares");
const contestController = require("../controllers/contestController");
const checkToken = require("../middlewares/checkToken");
const upload = require("../utils/fileUpload");

const contestRouter = Router();

contestRouter.post(
  "/dataForContest",
  checkToken.checkToken,
  contestController.dataForContest
);

contestRouter.get(
  "/customers",
  checkToken.checkToken,
  contestController.getCustomersContests
);

contestRouter.get(
  "/:contestId",
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

contestRouter.get(
  "/",
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);

contestRouter.post(
  "/updateContest",
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest
);

module.exports = contestRouter;
