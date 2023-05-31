export default class UserInfo {
    constructor(info) {
        this._nameProfile = document.querySelector(info.nameSelector);
        this._jobProfile = document.querySelector(info.jobSelector);
    }
    getUserInfo() {
        return {
            username: this._nameProfile.textContent,
            job: this._jobProfile.textContent
        }
    }
    setUserInfo(user) {
        this._nameProfile.textContent = user.username;
        this._jobProfile.textContent = user.job;
    }
}