export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._profileName = profileName;
    this._profileJob = profileJob;

    console.log(profileName);
    console.log(profileJob);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.job;

    console.log(this._profileName.textContent);
    console.log(this._profileJob);
  }
}
