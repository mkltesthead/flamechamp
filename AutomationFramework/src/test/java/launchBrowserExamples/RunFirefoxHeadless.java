package launchBrowserExamples;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class RunFirefoxHeadless {

	public static void main(String[] args) {

		System.setProperty("webdriver.gecko.driver","/home/flamechamp/gecko/geckodriver");
		System.setProperty(FirefoxDriver.SystemProperty.DRIVER_USE_MARIONETTE,"true");
		System.setProperty(FirefoxDriver.SystemProperty.BROWSER_LOGFILE ,"/tmp/gecko_headless_log");
		// Set Chrome Headless Option
		FirefoxOptions options = new FirefoxOptions();
		options.setHeadless(true);
		
		//Call up WebDriver
		WebDriver driver = new FirefoxDriver(options);
		driver.get("http://www.google.com");
		System.out.println("Page title is - " + driver.getTitle());
		
		//Search on Google
		driver.findElement(By.name("q")).sendKeys("selenium webdriver");
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		// Display number of results on Console
		System.out.println("Total result - " + driver.findElement(By.id("resultStats")).getText());
		
		driver.close();
	}
}