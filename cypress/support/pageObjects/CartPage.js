class CartPage
{

   getCartTitle()
   {
      return cy.get('.page-title')
   }
   getCartProducts()
   {
    return cy.get('tbody tr td.product-name')
   }
   getCartPrice()
   {
    return cy.get('tbody tr td:nth-child(4) span.woocommerce-Price-amount.amount')
   }
   getCartRows()
   {
    return cy.get('tbody tr')
   }
   removeProduct()
   {
   return find('td a.remove')
   }
   alertRemove()
   {
      return cy.get('.woocommerce-message')
   }
}
export default CartPage;