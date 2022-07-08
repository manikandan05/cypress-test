/// <reference types="cypress" />

context('Actions', () => {

  before(() => {
    cy.setCookie("s_ecom_ops_jwt", "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpZMmhsYldGZmRtVnljMmx2YmlJNklqRXVNQ0lzSW1sa0lqb2laakk0WkRnM09XUXRZVGhpTnkwMFkyWmpMV0ZsTTJFdE56RXpaVE5sTVRsbU5HRTBJaXdpWlcxaGFXd2lPaUp3Y21GdVlYWnBMbWN4UUhCaGNuUnVaWEl1YzJGdGMzVnVaeTVqYjIwaUxDSndaWEp0YVhOemFXOXVjeUk2ZXlKdmNtUmxjaUk2ZXlKaGJHeHZkeUk2V3lKeVpXRmtJaXdpY21WeGRXVnpkQ0lzSW5keWFYUmxJbDE5TENKd2NtOWtkV04wSWpwN0ltRnNiRzkzSWpwYkluSmxZV1FpTENKM2NtbDBaU0lzSW5KbGNYVmxjM1FpWFN3aVkyOXVabWxuSWpwN0ltRnNiRzkzSWpwYkluSmxZV1FpTENKM2NtbDBaU0lzSW5KbGNYVmxjM1FpWFgxOUxDSlRkRzl5WlMxU1pYQWlPbnNpWVd4c2IzY2lPbHNpY21WaFpDSXNJbmR5YVhSbElpd2ljbVZ4ZFdWemRDSmRmU3dpY0hKcFkyVWlPbnNpWVd4c2IzY2lPbHNpY21WaFpDSXNJbkpsY1hWbGMzUWlMQ0ozY21sMFpTSmRmU3dpY21WMGRYSnVJanA3SW1Gc2JHOTNJanBiSW5keWFYUmxJaXdpY21WaFpDSXNJbkpsY1hWbGMzUWlYWDBzSW1OdmRYQnZiaUk2ZXlKaGJHeHZkeUk2V3lKeVpXRmtJaXdpY21WeGRXVnpkQ0lzSW5keWFYUmxJbDE5TENKdlptWmxjaUk2ZXlKaGJHeHZkeUk2V3lKeVpXRmtJaXdpY21WeGRXVnpkQ0lzSW5keWFYUmxJbDE5TENKbFpHUXRjMnhoWWkxaGRYUnZiV0YwYVc5dUlqcDdJbUZzYkc5M0lqcGJJbmR5YVhSbElsMTlMQ0pqWVhSaGJHOW5MV0ZrYldsdUlqcDdJbUZzYkc5M0lqcGJJbkpsWVdRaUxDSnlaWEYxWlhOMElpd2lkM0pwZEdVaVhYMHNJbU56TFdGblpXNTBJanA3SW1Gc2JHOTNJanBiSW5KbFlXUWlYWDBzSW5Sa0xXRmpZMjkxYm5RaU9uc2lZV3hzYjNjaU9sc2ljbVZoWkNJc0luSmxjWFZsYzNRaUxDSjNjbWwwWlNKZGZTd2lkSEpoWkdWcGJpSTZleUpoYkd4dmR5STZXeUozY21sMFpTSXNJbkpsWVdRaVhYMHNJbU56TFhOMWNHVnlkbWx6YjNJaU9uc2lJanA3SW1Gc2JHOTNJanBiWFgwc0ltRnNiRzkzSWpwYkluSmxZV1FpWFgwc0ltTmhjbVV0YjI1aWIyRnlaR2x1WnlJNmV5SmhiR3h2ZHlJNld5SjNjbWwwWlNKZGZTd2lZV3hzTFhOcGRHVWlPbnNpWVd4c2IzY2lPbHNpY21WaFpDSmRmU3dpZG05MVkyaGxjaUk2ZXlKaGJHeHZkeUk2V3lKeVpXRmtJaXdpY21WeGRXVnpkQ0lzSW5keWFYUmxJbDE5TENKbVlXSnlhV01pT25zaVlXeHNiM2NpT2xzaWNtVmhaQ0lzSW5KbGNYVmxjM1FpTENKM2NtbDBaU0pkZlN3aVluVnNheTExY0d4dllXUWlPbnNpWVd4c2IzY2lPbHNpY21WaFpDSXNJbmR5YVhSbElpd2ljbVZ4ZFdWemRDSmRmU3dpWTJGMFlXeHZaeUk2ZXlKaGJHeHZkeUk2V3lKeVpXRmtJaXdpZDNKcGRHVWlMQ0p5WlhGMVpYTjBJbDE5TENKbGNIQWlPbnNpWVd4c2IzY2lPbHNpY21WaFpDSXNJbmR5YVhSbElpd2ljbVZ4ZFdWemRDSmRmU3dpYzIxaUlqcDdJbUZzYkc5M0lqcGJJbkpsWVdRaUxDSnlaWEYxWlhOMElpd2lkM0pwZEdVaVhYMHNJbk4wYjNKbExYSmxjQ0k2ZXlKaGJHeHZkeUk2V3lKeVpXRmtJaXdpY21WeGRXVnpkQ0lzSW5keWFYUmxJbDE5TENKMWMyVnlJanA3SW1Gc2JHOTNJanBiSW5KbFlXUWlMQ0ozY21sMFpTSXNJbkpsY1hWbGMzUWlYWDBzSW5OcmRTMXpkMkZ3TFdGd2NISnZkbVVpT25zaVlXeHNiM2NpT2xzaWQzSnBkR1VpWFgwc0luQnZjQ0k2ZXlKaGJHeHZkeUk2V3lKeVpXRmtJaXdpY21WeGRXVnpkQ0lzSW5keWFYUmxJbDE5TENKamMzQnliMjF2SWpwN0ltRnNiRzkzSWpwYkluZHlhWFJsSWwxOUxDSmpjeTFoWkcxcGJpSTZleUpoYkd4dmR5STZXeUp5WldGa0lsMTlMQ0pqY3kxemFYUmxJanA3SW1Gc2JHOTNJanBiSW5keWFYUmxJbDE5TENKMGNtRmtaV2x1TFdOb1lYSm5aV0poWTJzdFkyRnVZMlZzSWpwN0ltRnNiRzkzSWpwYkluZHlhWFJsSWwxOUxDSmpjeTFuYVdaMFkyRnlaQzFoWkcxcGJpSTZleUpoYkd4dmR5STZXeUozY21sMFpTSmRmU3dpYzJodmNDMWhiR3hoWTJObGMzTWlPbnNpWVd4c2IzY2lPbHNpY21WeGRXVnpkQ0lzSW5KbFlXUWlMQ0ozY21sMFpTSmRmU3dpUTI5MWNHOXVJanA3SW1Gc2JHOTNJanBiSW5KbFlXUWlYWDBzSW5OMGIzSmxJanA3SW1Gc2JHOTNJanBiSW5KbFlXUWlYWDBzSW1aMWJHWnBiRzFsYm5RdGMybDBaU0k2ZXlKaGJHeHZkeUk2V3lKM2NtbDBaU0pkZlN3aVQzQnpMVUoxYkd0R2IzSmxZMkZ6ZENJNmV5SmhiR3h2ZHlJNld5SjNjbWwwWlNKZGZTd2liV2x6WXkxaFpHMXBiaUk2ZXlKaGJHeHZkeUk2V3lKM2NtbDBaU0pkZlN3aWNISnBZMmx1WnkxemFYUmxJanA3SW1Gc2JHOTNJanBiSW5keWFYUmxJbDE5TENKallYUmhiRzluTFhOcGRHVWlPbnNpWVd4c2IzY2lPbHNpZDNKcGRHVWlYWDBzSW0xdmRHOHRiM0prWlhJaU9uc2lZV3hzYjNjaU9sc2lkM0pwZEdVaVhYMHNJbTF2ZEc4dGNHRjVMV0l5WWlJNmV5SmhiR3h2ZHlJNld5SnlaV0ZrSWl3aWNtVnhkV1Z6ZENJc0luZHlhWFJsSWwxOWZTd2lkR1Z1WVc1MFgyTnZibVpwWnlJNmV5SjBaVzVoYm5SZmFXUWlPaUpWVTBFaUxDSnNiMk5oYkdVaU9pSmxiaTFWVXlKOUxDSnpkRzl5WlhNaU9sdGRMQ0pwWVhRaU9qRTJOVGN5TlRZM05UTXNJbVY0Y0NJNk1UWTFOekk1TWpjMU0zMC5lTU8zYzlWMDFXNm95VHlyT1RSSFhsNmV5akF0WDY0U3VkZUVXQUV0YVVR")
  })
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('s_ecom_ops_jwt')
  })

  it('Search Order Click', function () {
    cy.visit('https://opstools-qa-us.seasam.org/ops-web/cs/search-order')
    cy.get('[style="color: rgb(255, 255, 255); outline: white solid 1px; outline-offset: -9px;"] > #basic-nav-dropdown').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').click();
    cy.get('#search').type("USQ55464420", { delay: 100 })
    cy.get('[style="text-align: center; margin-top: -20px;"] > .btn > span', { timeout : 20000 }).click()
  })

  it('Redirect to Order Details', function () {
    cy.visit('https://opstools-qa-us.seasam.org/ops-web/cs/order-details/101b3057-e73a-4464-a8b2-e7ceb2a3aab4')
    cy.get('.user-link > span', { timeout : 10000 })
    cy.get('.user-link > span').click()
    cy.get(':nth-child(1) > :nth-child(1) > .orderDetails-item > .bw', { timeout: 10000 }).should('not.have.text', '')
    cy.get(':nth-child(1) > :nth-child(2) > .orderDetails-item > .bw', { timeout: 10000 }).should('not.have.text', '')
    cy.get(':nth-child(3) > :nth-child(2) > .orderDetails-item > p > a > span', { timeout : 15000 }).click()
    cy.get(':nth-child(3) > :nth-child(2) > .orderDetails-item > p > a > span').click()
    cy.get('.bw > :nth-child(1) > a > span', { timeout : 15000 })
    cy.get('.bw > :nth-child(1) > a > span', { timeout : 15000 }).click()
    cy.get(':nth-child(3) > .orderDetails-item > .bw > a', { timeout : 15000 })
    cy.get(':nth-child(3) > .orderDetails-item > .bw > a').click()
    cy.get('.order-product-details-body > :nth-child(2) > :nth-child(1) > :nth-child(1) > a', { timeout : 15000 })
    cy.get('.order-product-details-body > :nth-child(2) > :nth-child(1) > :nth-child(1) > a', { timeout : 15000 }).click()
    cy.get(':nth-child(8) > .jss569 > .jss571 > .jss572 > .jss573 > .jss533 > :nth-child(1) > .jss346 > .jss574 > .jss588 > .jss589 > :nth-child(1) > a', { timeout : 15000})
    cy.get(':nth-child(8) > .jss569 > .jss571 > .jss572 > .jss573 > .jss533 > :nth-child(1) > .jss346 > .jss574 > .jss588 > .jss589 > :nth-child(1) > a', { timeout : 15000}).click()
    cy.get(':nth-child(2) > .product-paper > .accordion-container > .order-product-details-body > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .productDetail-item > .bw > span', { timeout : 15000 })
    cy.get(':nth-child(2) > .product-paper > .accordion-container > .order-product-details-body > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .productDetail-item > .bw > span').should('not.have.text', '')
    cy.get(':nth-child(5) > :nth-child(3) > .productDetail-item > .bw', { timeout : 15000 })
    cy.get(':nth-child(5) > :nth-child(3) > .productDetail-item > .bw').should('have.text', '')
  })

  it("order details page", () => {
    cy.visit("https://opstools-qa-us.seasam.org/ops-web/cs/order-details/101b3057-e73a-4464-a8b2-e7ceb2a3aab4")
    cy.get(':nth-child(3) > .jss390 > .jss391 > .jss392 > span', { timeout: 15000 });
    cy.get(':nth-child(3) > .jss390 > .jss391 > .jss392 > span', { timeout: 15000 }).click();
    cy.get(':nth-child(1) > [style="position: absolute; width: 313px; height: 50px; left: 313px;"] > .react-grid-Cell__value > [style="margin-left: 0px; position: relative; top: 50%; transform: translateY(-50%);"] > :nth-child(1) > div > span').should('have.text', 'order was viewed')
    cy.get('.order-details-heading').contains("USQ55464420")
  })

  it('trade-in details page', () => {
    cy.visit("https://opstools-qa-us.seasam.org/ops-web/cs/order-details/101b3057-e73a-4464-a8b2-e7ceb2a3aab4")
    cy.get(':nth-child(3) > .jss390 > .jss391 > .jss392 > span', { timeout: 15000 });
    cy.get(':nth-child(5) > .jss390 > .jss391', { timeout: 15000 });
    cy.get(':nth-child(5) > .jss390 > .jss391', { timeout: 15000 }).click()
    cy.get(':nth-child(1) > .row > :nth-child(3) > .orderDetails-item > .bw').should('have.text', 'SM-N981UZNAXAA');
    cy.get(':nth-child(1) > .row > :nth-child(2) > .orderDetails-item > .bw').should('have.text', 'Galaxy Note20 5G 128GB (Unlocked)');
    cy.get(':nth-child(2) > .row > :nth-child(1) > .orderDetails-item > .bw').should('have.text', "APPLE-IPHONE-SE");
    cy.get('p > a').scrollIntoView().should('be.visible').should('have.text', "794619891450")
    cy.get(':nth-child(4) > .row > :nth-child(3) > .orderDetails-item > .bw').should('have.text', '-');
    cy.get(':nth-child(6) > :nth-child(2) > :nth-child(4) > .orderDetails-item > .bw').should('not.have.text', "")
    cy.get(':nth-child(6) > :nth-child(2) > :nth-child(5) > .orderDetails-item > .bw').should('not.have.text', "")
    cy.get(':nth-child(3) > .col-md-2 > .orderDetails-item > .bw').should('not.have.text', "")
    cy.get('tbody > :nth-child(1) > :nth-child(6)').scrollIntoView().should('be.visible').should('have.text', "05/25/2021")
  })

  it('Notification page', () => {
    cy.visit("https://opstools-qa-us.seasam.org/ops-web/cs/order-details/101b3057-e73a-4464-a8b2-e7ceb2a3aab4")
    cy.get(':nth-child(4) > .jss390 > .jss391 > .jss392 > span', { timeout: 15000 })
    cy.get(':nth-child(4) > .jss390 > .jss391 > .jss392 > span', { timeout: 15000 }).click()
    cy.get(':nth-child(1) > :nth-child(1) > .orderDetails-item > .bw').should('not.have.text', "")
    cy.get(':nth-child(1) > :nth-child(2) > .orderDetails-item > .bw').should('not.have.text', "")
    cy.get(':nth-child(1) > :nth-child(3) > .orderDetails-item > .bw > span').should('not.have.text', "")
    cy.get(':nth-child(2) > :nth-child(1) > .orderDetails-item > .bw').should('not.have.text', "")
    cy.get(':nth-child(2) > .orderDetails-item > .bw > span').should('not.have.text', "")
    cy.get(':nth-child(2) > :nth-child(3) > .orderDetails-item > .bw > span').should('not.have.text', "")
    cy.get('.order-status-details > :nth-child(3)').should('not.have.text', "")
    cy.get('.order-status-details > :nth-child(1)').should('not.have.text', "")
  })
})
