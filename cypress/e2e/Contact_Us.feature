@regression

Feature: WebdriverUniversity - Contact Us Page

    Background: Pre-Conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us FOrm Submission
        When I type a first name
        And I type a last name
        And I type a comment
        And I click submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission Using Specific Data
        When I type a specific first name "Mike"
        And I type a specific last name "Smith"
        And I enter an specific email address "mike_smith@mail.com"
        And I type a specific comment "How are you?" and number 121343 within the comment input field
        And I click submit button
        Then I should be presented with a successful contact us submission message

@login @smoke
    Scenario Outline: Validate conact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress        | comment                 | message                      |
            | John      | Jones    | john_jones@mail.com | Hello. How are you?     | Thank You for your Message!  |
            | Mia       | Carter   | mia_carter@mail.com | Test comment            | Thank You for your Message!  |
            | Grace     | Husdom   | grace_husdon        | Do you create websites? | Error: Invalid email address |


