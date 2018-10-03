package launchBrowserExamples;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class OpenWithFirefox {
	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver", "/home/flamechamp/gecko/geckodriver");
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.google.com/");
	}

}
