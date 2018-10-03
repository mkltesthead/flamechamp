Feature: Google Homepage With Outline
  This feature verifies the functionality on Google Homepages
  
  @Outline  
  Scenario Outline: Search for Different items on Google Homepage
    Given I launch Chrome browser
    When I open "http://www.google.com" Homepage
    And I want to see <searchterms> on Google 
    Then I can see the number of results
    And I close the browser
    
    Examples:
    |searchterms|
    |Webdriver|
    |Selenium|
    |Appium|