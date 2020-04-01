function removeAttribute() {
    this.removeTarget = async function (element) {
        await browser.executeScript('arguments[0].removeAttribute("target");', element.getWebElement());
    };

}

module.exports = new removeAttribute();