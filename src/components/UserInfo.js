export default class UserInfo {
  constructor({api, profileName, profileJob, profileAvatar }) {
    this.api = api;
    this._profileName = profileName;
    this._profileJob = profileJob;
    this._profileAvatar = profileAvatar;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.nameInput;
    this._profileJob.textContent = data.jobInput;
  }
}
