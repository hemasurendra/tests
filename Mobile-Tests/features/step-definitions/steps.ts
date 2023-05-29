import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/appLaunch.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    console.log('running setps.....')
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    //await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async () => {

});

