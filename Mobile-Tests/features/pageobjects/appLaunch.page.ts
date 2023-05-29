import { ChainablePromiseElement } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class appLaunch {
    /**
     * define selectors using getter methods
     */
    constructor() {
        console.log('running appLaunch');
    }
    public get splashScreenTitle () {
    let splashScreenText = driver.getElementText('#launchScreenTitle');
        return splashScreenText;
    }

}

export default new appLaunch();

