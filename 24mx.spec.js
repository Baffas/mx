describe('Menu test - home page', () => {
  it('Clicks the tab in menu', () => {
    cy.visit('https://www.24mx.pl/')
    cy.viewport(1920, 1080)
    cy.get('*[class^="m-navigation-item border-indicator gtm_navigation-category-1 ng-star-inserted"]').click({ multiple: true })
    cy.get('*[class^="m-button m-button--navigation m-button--xs qa-consent-agree-btn ng-tns-c96-9"]').click()
    cy.get('*[class^="o-navigation-link o-navigation-link__superdeals gtm_superdeals"]').click()
    cy.contains(' Outlet ').click()
  })
})

describe('Pop-up home page', () => {
  it('Pop-up home page', () => {
    cy.visit('https://www.24mx.pl/')
    cy.viewport(1920, 1080)
    cy.get('*[class^="ng-tns-c96-9"]').click({ multiple: true })
    cy.get('*[class^="m-button m-button--navigation m-button--xs qa-consent-agree-btn ng-tns-c96-9"]').click()
    cy.get('button[id="nostoOverlaySend"]').click()
    cy.get('button[id="nostoCouponCopyBtn"]').click()
    cy.get('button[id="nostoContinueBtn"]').click()
    cy.get('*[class^="NostoRibbonPopUpText"]').click()
  })
})

describe('Add your motorcycle', () => {
  it('Add your motorcycle', () => {
    cy.visit('https://www.24mx.pl/')
    cy.viewport(1920, 1080)
    cy.get('*[class^="m-button m-button--navigation m-button--xs qa-consent-agree-btn ng-tns-c96-9"]').click()
    cy.get('*[class^="drawer-indicator-text ng-star-inserted"]').click()
    cy.get('*[class^="gtm_fmb-select-brand"]').click()
    cy.contains(' Husqvarna ').click()
    cy.wait(1000)
    cy.get('*[class^="gtm_fmb-select-year"]').click()
    cy.wait(1000)
    cy.contains(' 2019 ').click()
    cy.wait(2000)
    cy.get('*[class^="gtm_fmb-select-model"]').click()
    cy.wait(4000)
    cy.contains(' Husqvarna FC 250 2019 ').click()
    cy.get('*[class^="m-button m-button--navigation m-button--xs qa-fmb-view-all-parts"]').click()
  })
})

describe('Adding a product to the cart', () => {
  it('Adding a product to the cart', () => {
    cy.visit('https://www.24mx.pl/')
    cy.viewport(1920, 1080)
    cy.get('*[class^="m-button m-button--navigation m-button--xs qa-consent-agree-btn ng-tns-c96-9"]').click()
    cy.get('*[class^="o-navigation-link o-navigation-link__superdeals gtm_superdeals"]').click()
    cy.contains('The Look').click()
    cy.get('*[class^="m-button m-button--purchase qa-pdp-add-to-cart-btn m-button--md"]').click()
    cy.wait(2000)
    cy.get('*[class^="a-textlink a-textlink--blue d-inline-block textsize-small qa-proceed-to-checkout"]').click()
    cy.wait(4000)
    cy.contains('*').click()
    cy.get('*[class^="m-button m-button--square m-button--floating m-button--navigation"]').click()
    cy.get('*[class^="m-button m-button--purchase qa-finalize-order-btn m-button--lg"]').click()
  })
})

describe('Search engine', () => {
  it('Search engine', () => {
    cy.visit('https://www.24mx.pl/')
    cy.viewport(1920, 1080)
    cy.get('*[id^="search-desktop"]').type('abcdefg1234!@#$ ":>{enter}') // Type 'abcdefg1234!@#$ ":>' into the 'search box'
    cy.get('*[id^="search-desktop"]').should('have.class', 'ng-valid ng-dirty ng-touched') // Assertion for class 'ng-valid ng-dirty ng-touched'
    cy.get('*[class^="svg-inline--fa fa-times-circle fa-w-16"]').click() //Clicking on the delete text button
    cy.get('*[id^="search-desktop"]').type('mx24') // new search text 'mx24'
    cy.contains('TM MX 300 2001').click() // I choose TM MX 300 2001 from the list
  })
})