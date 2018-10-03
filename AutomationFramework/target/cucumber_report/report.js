$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleHomeBackground.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage",
  "description": "This feature verifies the functionality on Google Homepages",
  "id": "google-homepage",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open \"http://www.google.com\" Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_launch_chrome_browser()"
});
formatter.result({
  "duration": 4712967704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 8
    }
  ],
  "location": "StepDefinitions_GoogleHome.i_open_Homepage(String)"
});
formatter.result({
  "duration": 2582700955,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check that the main elements on Google Homepage are displayed",
  "description": "",
  "id": "google-homepage;check-that-the-main-elements-on-google-homepage-are-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Background"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I verify that the page displays search text box",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the page displays Google Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the page displays I\u0027m Feeling Lucky button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_verify_that_the_page_displays_search_text_box()"
});
formatter.result({
  "duration": 135597958,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.the_page_displays_google_search_button()"
});
formatter.result({
  "duration": 119132461,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.the_page_displays_im_feeling_lucky_button()"
});
formatter.result({
  "duration": 108865112,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_close_the_browser()"
});
formatter.result({
  "duration": 153665478,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open \"http://www.google.com\" Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_launch_chrome_browser()"
});
formatter.result({
  "duration": 491233243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 8
    }
  ],
  "location": "StepDefinitions_GoogleHome.i_open_Homepage(String)"
});
formatter.result({
  "duration": 2709661363,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search for Selenium on Google Homepage",
  "description": "",
  "id": "google-homepage;search-for-selenium-on-google-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Background"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I search for \"Selenium\" on Google",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I can see the number of results",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 14
    }
  ],
  "location": "StepDefinitions_GoogleHome.i_search_for_on_Google(String)"
});
formatter.result({
  "duration": 400628102,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: headless chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.42.591071 (0b695ff80972cc1a65a5cd643186d2ae582cd4ac),platform\u003dLinux 4.15.0-34-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027potchbox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-34-generic\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591071 (0b695ff80972cc..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:46309}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 421b16029957e8f3a7a09086b2de6c6e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat selenium.Page_GoogleHome.searchForTheseOnGoogle(Page_GoogleHome.java:63)\n\tat stepDefinitions.StepDefinitions_GoogleHome.i_search_for_on_Google(StepDefinitions_GoogleHome.java:58)\n\tat ✽.Then I search for \"Selenium\" on Google(GoogleHomeBackground.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_can_see_the_number_of_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open \"http://www.google.com\" Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_launch_chrome_browser()"
});
formatter.result({
  "duration": 745991365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.google.com",
      "offset": 8
    }
  ],
  "location": "StepDefinitions_GoogleHome.i_open_Homepage(String)"
});
formatter.result({
  "duration": 2953060310,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Use a Table for data values",
  "description": "",
  "id": "google-homepage;use-a-table-for-data-values",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Background"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I look for the following details",
  "rows": [
    {
      "cells": [
        "Gmail",
        "Images",
        "Google Apps"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_look_for_the_following_details(DataTable)"
});
formatter.result({
  "duration": 2140846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_close_the_browser()"
});
formatter.result({
  "duration": 130929063,
  "status": "passed"
});
});