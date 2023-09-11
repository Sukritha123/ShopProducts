/// <reference types ="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../support/pageObjects/HomePage'
import CartPage from '../../../support/pageObjects/CartPage'
const data = require('../../../fixtures/products.json')
const homePage = new HomePage()
const cartPage = new CartPage()

Given(/^user has navigated to shop page$/, () => {
	cy.visit(Cypress.env('url') + "/");
});



When(/^user has added 4 items to the cart$/, () => {
    Cypress.config('defaultCommandTimeout', 8000)
    data.itemName.forEach(element => {
        //cy.selectItem(element); //Custom command to select Item to be added to cart
        homePage.getProductTable().each(($el, index, $list) => {
            const productName = $el.find('a h2.woocommerce-loop-product__title').text()
            if (productName.includes(element)) {
                cy.wrap($el).contains('Add to cart').click()
            }
        })
    });
});


When(/^user has navigated to cart page$/, () => {
    homePage.getViewCart().click()
});


When(/^user views the cart page$/, () => {
    cartPage.getCartTitle().should('have.text', 'Cart')
});


Then(/^"([^"]*)" items are listed in cart$/, (initialProductCount) => {
    Cypress.config('defaultCommandTimeout', 10000)
    cy.wait(8000)
    cartPage.getCartProducts().should('have.length', initialProductCount)
});


When(/^user searches for the lowest price items in cart$/, () => {
    let newValue = [];
    cartPage.getCartPrice().each(($el, index, $list) => {

        const dollarPrice = $el.text()
        var tval = dollarPrice.split('$')
        tval = tval[1].trim()
        newValue.push(parseInt(tval))
        var lowest_price = Math.min.apply(null, newValue)        //getting the lowest price using Math.min function   

        if (index == data.initialProductNumber - 1) {
            cy.log('The lowest price is : ' + lowest_price);           //displaying the lowest price after calculation completed

        }

    })

});


When(/^user removes the lowest price items from cart$/, () => {
    let newValue1 = [];
    cartPage.getCartPrice().each(($el, index, $list) => {

        const dollarPrice = $el.text()
        var tval = dollarPrice.split('$')
        tval = tval[1].trim()
        newValue1.push(parseInt(tval))
        var lowest_price = Math.min.apply(null, newValue1)        //getting the lowest price using Math.min function   

        if (index == data.initialProductNumber - 1) {
            cartPage.getCartRows().each(($el, index, $list) => {
                //cy.log($el.find('td:nth-child(4) span.woocommerce-Price-amount.amount').text())
                if ($el.find('td:nth-child(4) span.woocommerce-Price-amount.amount').text().includes(lowest_price)) {
                    cy.wrap($el).find('td a.remove').click();
                    cy.log('The lowest price item deleted');
                }

            })

        }
    })
});


Then(/^"([^"]*)" items are listed in cart$/, (finalProductCount) => {
    Cypress.config('defaultCommandTimeout', 10000)
    //cartPage.alertRemove().should('exist').and('include.text','removed' ) //alternate code
    cartPage.alertRemove().then(function (element) {
        const alertText = element.text()
        expect(alertText.includes("removed")).to.be.true
    })

    cartPage.getCartProducts().should('have.length', finalProductCount)
});


