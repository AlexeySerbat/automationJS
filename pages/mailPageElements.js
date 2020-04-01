function mailPageElements () {
    this.displayNameOnTop = element(by.css('.mail-User-Name'));
    this.userDropdown = element(by.css('.ns-view-head-user.ns-view-id-54.mail-User'));
    this.userName = element(by.css('.dropdown-user.dropdown-user_current'))
}

module.exports = new mailPageElements();