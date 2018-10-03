package cucumberTestRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		// location of Cucumber scenario feature files
		features="src/test/java/features",
		// location of step definition declarations
		glue="stepDefinitions", 
		// tags that you can add to limit the tests run
		tags="@Background",
		// plugin to help with reporting
		plugin= {
				"pretty",
				"html:target/cucumber_report",
				"json:target/cucumber.json",
				"junit:target/cucumber.xml"
				},
		// dry run allows for checking mappings without running tests in real time
		// dryRun=true,
		// monochrome cleans up the console output
		monochrome=true
		// strict shows where a test fails and marks tests as failed
		// strict=true
		)
public class TestRunner_GoogleHome {

}