"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_framework_1 = require("@wdio/cucumber-framework");
const appLaunch_page_1 = __importDefault(require("../pageobjects/appLaunch.page"));
const pages = {
    login: appLaunch_page_1.default
};
(0, cucumber_framework_1.Given)(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});
(0, cucumber_framework_1.When)(/^I login with (\w+) and (.+)$/, async (username, password) => {
    //await LoginPage.login(username, password)
});
(0, cucumber_framework_1.Then)(/^I should see a flash message saying (.*)$/, async () => {
});
