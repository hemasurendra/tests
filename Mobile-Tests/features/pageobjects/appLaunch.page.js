"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sub page containing specific selectors and methods for a specific page
 */
class appLaunch {
    /**
     * define selectors using getter methods
     */
    get splashScreenTitle() {
        let splashScreenText = driver.getElementText('#launchScreenTitle');
        return splashScreenText;
    }
}
exports.default = new appLaunch();
