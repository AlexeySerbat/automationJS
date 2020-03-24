function loginData() {
    this.correctData = {
        login: 'AutotestUser',
        password: 'AutotestUser123'
    };
    this.incorretData = {
        login: 'NoAutotestUser',
        password: 'NoAutotestUser123'
    }
}

module.exports = new loginData();