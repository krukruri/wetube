import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  geteditVideo,
  deleteVideo,
  posteditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
//console.log(routes.editVideo());


//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload,uploadVideo, postUpload);


//video detail
videoRouter.get(routes.videoDetail(), videoDetail);



//edit video
videoRouter.get(routes.editVideo(), geteditVideo);
videoRouter.post(routes.editVideo(), posteditVideo);


//delete video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;