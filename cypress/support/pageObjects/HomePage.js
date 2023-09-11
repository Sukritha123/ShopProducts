class HomePage
{

   getProductTable()
   {
    return cy.get('ul.products.columns-3').find('li[class*=instock]')
   }
   getProductNameText()
   {
    return find('a h2.woocommerce-loop-product__title')
   }
   getViewCart()
   {
   Cypress.config('defaultCommandTimeout', 8000)
   //return cy.get("a[title='View cart']").first()
    return cy.get("a.added_to_cart.wc-forward").first() 
   }
    
}
export default HomePage;