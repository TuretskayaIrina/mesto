export default class UserInfo {
  constructor({api, profileName, profileAbout, profileAvatar}) {
    this._api = api;
    this._profileName = profileName;
    this._profileAbout = profileAbout;
    this._profileAvatar = profileAvatar;
  }

  // getUserId() {
  //   this._api.getUserInfo()
  //     .then((data) => {
  //       data._id;
  //       console.log(data._id);
  //     })
  // }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent,
      avatar: this._profileAvatar.src
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this._profileAvatar.src = data.avatar;
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }
}
