import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  //req안에 있는 body안에서 name, email, password, password2를 가져온다.
  //이부분은 bodyparser가 없으면 동작하지 않음
  if (password !== password2) {
    res.status(400);
    //만약 password와 password2가 다르면 잘못되었다는 상태코드 전달
    //상태 코드(status code)는 인터넷이 서로 어떻게 상호작용하는지 표시하는 것이다.
    //400이 뜻하는 것은 잘못된 요청이라는 뜻이다.
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in``
    res.redirect(routes.home);
    //redirect는 특정 URL로 접속했을때 다른 URL로 이동 시키는것
  }
};
//method가 post인 /join 경로에서만 작동하는거임

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);//아직 디비가 연동되지 않은 상태라서 그냥 home.pug로 redirect해준 상태이다.
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });


  


export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });