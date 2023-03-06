@regression
Feature: WebdriverUniversity - Login feature

    Scenario: Valid login scenario
        Given I navigate to the webdriveruniversity homepage
        When I click on the login button
        And I click on the username box and type valid userName
        And I click on the password box and type valid password
        And I click on the login button and should be presented with an popup message

    @invalid
    Scenario: Invalid login scenario
        Given I navigate to the webdriveruniversity homepage
        When I click on the login button
        And I click on the username box and type valid userName
        And I click on the password box and type invalid password
        And I click on the login button and should be presented with a fail message

    @smoke
    Scenario Outline: Validate Login Page
        Given I navigate to the webdriveruniversity homepage
        When I click on the login button
        And I click on the username box and type '<userName>'
        And I click on the password box and type <password>
        And I click on the login button and should be presented with a '<message>'
        # Then I should be presented with a '<message>' can also be used. (since it is an assertion)

        Examples:
            | userName   | password     | message              |
            | webdriver  | webdriver123 | validation succeeded |
            | webdriver  | webdriver1   | validation failed    |
            | merhaba    | webdriver123 | validation failed    |
            | webdrive   | webdriver1   | validation failed    |
            | web driver | webdriver1   | validation failed    |