Feature: Shop and Cart page

    As a user
    I would like to select, add and remove items from cart
    So that I can validate the shop and cart page

    Background: Visit shop page
        Given user has navigated to shop page
        And user has added 4 items to the cart
        And user has navigated to cart page

    @initial
    Scenario: View cart and validate items in cart
        When user views the cart page
        Then "4" items are listed in cart

    @final
    Scenario: Remove lowest value item and validate cart
        When user searches for the lowest price items in cart
        And user removes the lowest price items from cart
        Then "3" items are listed in cart
