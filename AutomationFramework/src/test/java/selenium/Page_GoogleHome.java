package selenium;
 
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import common.Page_BasePage;
 
public class Page_GoogleHome extends Page_BasePage {
 
	public void launchChromeBrowser() {
		// Define location of chromedriver
		System.setProperty("webdriver.chrome.driver","/home/osboxes/drivers/chromedriver");
		// Set Chrome Headless Option
		ChromeOptions options = new ChromeOptions();
		options.setHeadless(true);
		driver = new ChromeDriver(options);
	}
	
	public void launchFirefoxBrowser() {
		System.setProperty("webdriver.gecko.driver","/home/osboxes/drivers/geckodriver");
		System.setProperty(FirefoxDriver.SystemProperty.DRIVER_USE_MARIONETTE,"true");
		System.setProperty(FirefoxDriver.SystemProperty.BROWSER_LOGFILE ,"/tmp/gecko_headless_log");
		// Set Firefox Headless Option
		FirefoxOptions options = new FirefoxOptions();
		options.setHeadless(true);
		//Call up WebDriver
		driver = new FirefoxDriver(options);
	}
	
	public void openURL(String url) {
		driver.get(url);
	}
		
	public void checkSearchBoxIsDisplayed() {
		if(driver.findElement(By.name("q")).isDisplayed()) {
			System.out.println("Search text box is displayed");
		} else {
			System.out.println("Search text box is NOT displayed");
		}
	}
	
	public void checkGoogleSearchButtonIsDisplayed() {
		if(driver.findElement(By.name("btnK")).isDisplayed()) {
			System.out.println("Google Search button is displayed");
		} else {
			System.out.println("Google Search button is NOT displayed");
		}
	}
	
	public void checkImFeelingLuckyButtonIsDisplayed() {
		if(driver.findElement(By.name("btnI")).isDisplayed()) {
			System.out.println("I'm Feeling Lucky button is displayed");
		} else {
			System.out.println("I'm Feeling Lucky button is NOT displayed");
		}
	}
	
	public void searchForTheseOnGoogle(String singlesearch) {
		driver.findElement(By.name("q")).sendKeys(singlesearch);
		driver.findElement(By.name("btnK")).click();
		System.out.println("The string searched for is: " + singlesearch);
	}
	
	public void wantToSeeOnGoogle(String outlinesearch) {
		driver.findElement(By.name("q")).sendKeys(outlinesearch);
		driver.findElement(By.name("btnK")).click();
		System.out.println("You searched for: " + outlinesearch);
	}
	
	public void seeNumberOfResults() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		// Display number of results on Console
		System.out.println("Total result - " + driver.findElement(By.id("resultStats")).getText());
	}
	
	public void closeBrowser() {
		System.out.println("Shutting down browser instance");
		driver.close();
	}
}