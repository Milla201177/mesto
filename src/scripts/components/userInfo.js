export default class UserInfo {
    constructor() {
        this._nameProfile = document.querySelector('.profile__name');
        this._jobProfile = document.querySelector('.profile__job');
    }
    getUserInfo() {
        return {
            username: this._nameProfile.textContent,
            job: this._jobProfile.textContent
        }
    }
    setUserInfo(dataUser) {
        this._nameProfile.textContent = dataUser.username;
        this._jobProfile.textContent = dataUser.job;
    }
}

