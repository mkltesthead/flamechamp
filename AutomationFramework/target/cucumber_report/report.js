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
  "duration": 5427915766,
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
  "duration": 1020526724,
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
  "duration": 138308383,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.the_page_displays_google_search_button()"
});
formatter.result({
  "duration": 295597925,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.the_page_displays_im_feeling_lucky_button()"
});
formatter.result({
  "duration": 210918162,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_close_the_browser()"
});
formatter.result({
  "duration": 129952863,
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
  "duration": 879782332,
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
  "duration": 1019201827,
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
  "duration": 1990499542,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_can_see_the_number_of_results()"
});
formatter.result({
  "duration": 3045609358,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_close_the_browser()"
});
formatter.result({
  "duration": 110846670,
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
  "duration": 540739968,
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
  "duration": 654740007,
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
  "duration": 58287327,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions_GoogleHome.i_close_the_browser()"
});
formatter.result({
  "duration": 131181193,
  "status": "passed"
});
});