package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before("@InnerTest")
	public void beforeValidation() {
		System.out.println("Run this first if you see an InnerTest tag");
	}
	
	@After("@InnerTest")
	public void afterValidation () {
		System.out.println("Run this last if you see an InnerTest tag");;
	}
}

	