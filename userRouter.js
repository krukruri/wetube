import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);
//userDetail()은 선언만 하면 안되고 함수를 실제로 실행시켜야함 이 경우에는 id 이자로 해서 실행하지 않으니까 /:id를 리턴받음

export default userRouter;