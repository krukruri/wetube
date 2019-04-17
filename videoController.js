
import routes from "../routes";
import Video from "../models/Video";
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

  
//render함수의 첫번째 인자는 템플릿이고, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체이다.
//pageTitle이라는 변수?? 객체를 넣고 그것의 값은 Home이다.
//pateTitle이 home 템플릿으로 전달됨
//home 템플릿은 layouts/main을 extend하고 있다. (자세한 설명은 home 템플릿에 있다.)
//이것이 바로 템플릿 각각에 정보를 전달하는 방식이다.
//videos는 원래 videos:videos라고 써야한다.
//element를 받는 통로일 뿐이지 element자체는 아니다
export const search = (req, res) => {
    
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
//req값을 searchingby로 보내준다.
//const searchingBy = req.query.term;과 같다.
//const searchingBy = req.query.params
//async는 기다려주는 무언가 -> function의 어떤 부분은 꼭 기다려야해라고 하는 부분이다.

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });


  export const postUpload = async (req, res) => {
    const {
      body: { title, description },
      file: { path }
    } = req;
    const newVideo = await Video.create({
      fileUrl: path,
      title,
      description
    });
    res.redirect(routes.videoDetail(newVideo.id));
  };

export const videoDetail = async(req, res) =>{
  const{
    params:{id}
  }=req;
  try{
    const video = await Video.findById(id);
    //console.log(video);
    res.render("videoDetail", { pageTitle: "Video Detail",video });
    //video를 템플릿에 전달 video:video인데 줄여서 그냥 video라고 쓸 수 있다.
  }catch(error){
    res.redirect(routes.home);
  }
  
};
export const geteditVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

  export const posteditVideo = (req, res) =>
  res.render("editVideo", { });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
  //컨트롤러도 query에 접근하려면, method가 get이어야해~~