package stepDefinitions;

//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import selenium.Page_GoogleHome;

public class StepDefinitions_GoogleHome {
	
	Page_GoogleHome googleHome = new Page_GoogleHome();

    @Given("^I launch Chrome browser$")
    public void i_launch_chrome_browser() throws Throwable {
    	googleHome.launchChromeBrowser();
    }

    @Given("^I launch Firefox browser$")
    public void i_launch_firefox_browser() throws Throwable {
    	googleHome.launchFirefoxBrowser();
    }
    
    @When("^I open \"([^\"]*)\" Homepage$")
    public void i_open_Homepage(String url) throws Throwable {
        googleHome.openURL(url);
    }

    @And("^I look for the following details$")
    public void i_look_for_the_following_details(DataTable data) throws Throwable {
        List<List<String>> obj=data.raw(); 
        System.out.println(obj.get(0).get(0));
        System.out.println(obj.get(0).get(1));
        System.out.println(obj.get(0).get(2));
    }
    
    @Then("^I verify that the page displays search text box$")
    public void i_verify_that_the_page_displays_search_text_box() throws Throwable {
    	googleHome.checkSearchBoxIsDisplayed();
    }

    @And("^the page displays Google Search Button$")
    public void the_page_displays_google_search_button() throws Throwable {
    	googleHome.checkGoogleSearchButtonIsDisplayed();
    }

    @And("^the page displays I'm Feeling Lucky button$")
    public void the_page_displays_im_feeling_lucky_button() throws Throwable {
    	googleHome.checkImFeelingLuckyButtonIsDisplayed();
    }
    
    @Then("^I search for \"([^\"]*)\" on Google$")
    public void i_search_for_on_Google(String singlesearch) throws Throwable {
    	googleHome.searchForTheseOnGoogle(singlesearch);
    }
    
    @And("^I want to see (.+) on Google$")
     public void i_want_to_see_on_google(String outlinesearch) throws Throwable {
     	googleHome.wantToSeeOnGoogle(outlinesearch);
     }
    
    @Then("^I can see the number of results$")
    public void i_can_see_the_number_of_results() throws Throwable {
    	googleHome.seeNumberOfResults();
    }
    
    @Then("^I close the browser$")
    public void i_close_the_browser() throws Throwable {
        googleHome.closeBrowser();
    }
}