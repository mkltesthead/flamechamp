package launchBrowserExamples;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class RunChromeHeadlessScreenshot {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","/home/flamechamp/chrome/chromedriver");

		// Set Chrome Headless Option
		ChromeOptions options = new ChromeOptions();
		options.setHeadless(true);
		
		//Call up WebDriver
		WebDriver driver = new ChromeDriver(options);
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