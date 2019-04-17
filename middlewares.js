import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes; //route js을 가져온다. 
  res.locals.user = {
    isAuthenticated: true,//이건 아직 몽고 디비를 연결하지 않아서 그냥 ture값을 반환을 해주기 위해 넣은 코드이다.
    id: 1//가짜 정보
  };
  next();//middleware가 next에 req를 전달해야함
};
//locals에 로컬 변수를 저장하면, 이변수들을 템플릿에서 사용할 수 있다.
// 이 말은 전역적으로 사용할 수 있는 변수를 추가할 수 있는 방법이다.

export const uploadVideo = multerVideo.single("videoFile");