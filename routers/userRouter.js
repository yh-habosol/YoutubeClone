import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
  getEditProfile,
  postEditProfile,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);
export default userRouter;
