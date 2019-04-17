// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,

  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }//이 함수는 id를 인자로 입력받아, 만약 id가 있다면 /users/${id}를 리턴
  },
  //웹에서 :id를 인식하지 않으므로 (express는 이해함) 그래서 웹에서 이해 할 수 있도록 :id를 바꾸어주는 코드이다.

  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,

  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  //video id도 user id와 같은 이유로 똑같이 수정해준다.

  editVideo: id=>{
    if(id){
      return `/videos/${id}/edit`;
    }else{
      return EDIT_VIDEO;
    }
  },
  deleteVideo: DELETE_VIDEO
};

export default routes;