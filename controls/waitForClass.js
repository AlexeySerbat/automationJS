function Waiter() {
    this.waitForClass = async function (elementFinder, desiredClass) {
            return function () {
                return elementFinder.getAttribute('class').then(function (classValue) {
                    return classValue && classValue.indexOf(desiredClass) >= 0;
                });
            };
    };
}


module.exports = new Waiter();