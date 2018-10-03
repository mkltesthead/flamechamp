package launchBrowserExamples;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class RunFirefoxHeadlessScreenshot {

	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver","/home/flamechamp/gecko/geckodriver");

		// Set firefox Headless Option
		FirefoxOptions options = new FirefoxOptions();
		options.setHeadless(true);
		
		//Call up WebDriver
		WebDriver driver = new FirefoxDriver(options);
		driver.get("http://www.google.com");
		System.out.println("Page title is - " + driver.getTitle());
		
		//Search on Google
		driver.findElement(By.name("q")).sendKeys("selenium webdriver");
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		
		//Take screenshot
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("/tmp/headless_screenshot.png"));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		driver.close();
	}
}