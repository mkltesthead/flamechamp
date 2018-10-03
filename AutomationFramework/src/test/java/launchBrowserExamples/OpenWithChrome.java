package launchBrowserExamples;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class OpenWithChrome 
{	
	public static void main(String[] args) 
	{
		//Define where chromedriver is located
		System.setProperty("webdriver.chrome.driver","/home/flamechamp/chrome/chromedriver");
		//Set Chrome Options here
		ChromeOptions options = new ChromeOptions();
		options.addArguments("disable-infobars");
		options.addArguments("--start-maximized");
		//Create a new Chrome Driver instance
		WebDriver driver = new ChromeDriver();
		//Navigate somewhere to make sure it's working
		driver.get("http://www.google.com/");		
	}
}