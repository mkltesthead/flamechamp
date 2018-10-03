Feature: Google Homepage
  This feature verifies the functionality on Google Homepages
  
  Background:
    Given I launch Chrome browser
    When I open "http://www.google.com" Homepage
  
  @Background  
  Scenario: Check that the main elements on Google Homepage are displayed
    Then I verify that the page displays search text box
    And the page displays Google Search Button
    And the page displays I'm Feeling Lucky button
    And I close the browser
  
  @InnerTest
  Scenario: Search for WebDriver on Google Homepage
    Then I search for "WebDriver 3" on Google 
    And I can see the number of results
    And I close the browser
   
  @Background    
  Scenario: Search for Selenium on Google Homepage
    Then I search for "Selenium" on Google 
    And I can see the number of results
    And I close the browser
  
  @Background  
  Scenario: Use a Table for data values
    Then I look for the following details
    | Gmail | Images | Google Apps |
    And I close the browser