Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I launch eon drive mobile app to find cp's

    Given I launch the app
    Then I should see the splash screen with <appTitle>

    Examples:
      | appTitle | 
      | EON |