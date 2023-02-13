// import Login from "../page objects/loginpage/Login.cy";

// describe("buddy", () => {
//   Cypress.on("uncaught:exception", (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false;
//   });

//   beforeEach(() => {
//     cy.visit("https://pstest.Avaniko.com");

//     const ln = new Login();

//     ln.setUserName("Manager");
//     ln.setUserPassword("Avan!12345");
//     ln.clickSubmit();

//   });

//   // it("LoginTest", () => {
//   //   cy.visit("https://pstest.Avaniko.com");

//   //   const ln = new Login();

//   //   ln.setUserName("Manager");
//   //   ln.setUserPassword("Avan!12345");
//   //   ln.clickSubmit();

//   // });

//   it("adding new customer", () => {
//     //open sidebar
//     cy.get(".hp-mr-24 > .ant-btn").click();
//     //open sales dropdown tab
//     cy.get(
//       ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
//     ).click();

//     // click opportunity button
//     cy.get("a[href='/opportunity']").click();

//     // add new customer

//     cy.get(
//       "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > button:nth-child(1) > span:nth-child(2)"
//     ).click();

//     cy.get(
//       "button[class='ant-btn ant-btn-primary ant-btn-background-ghost hp-float-right']"
//     ).click();

//     // series field
//     cy.get("div[class='ant-select ant-select-sm ant-select-single ant-select-show-arrow'] div[class='ant-select-selector']").click();
//     cy.get(".ant-select-item-option-content").click();

//     //customer name

//     cy.get("#basic_customerName").type("vignesh");
//     //customer group dropdown select
//     cy.get("#basic_customerGroup").click();
//     // dropdown value select
//     cy.get(
//       "div[title='Suppliers'] div[class='ant-select-item-option-content']"
//     ).click();
//     // currency select
//     cy.get(
//       ":nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-search > #basic_currency"
//     ).click();

//     cy.wait(1000);
//     // currency value
//     cy.get('.hp-mb-24 > :nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
//      cy.xpath("//div[@class='ant-select-item-option-content'][normalize-space()='INR']").click();

//     //email
//     cy.get(
//       ":nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_email"
//     ).type("vignesh1208@gmail.com");
//     //phone
//     cy.get(
//       ":nth-child(6) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_phone"
//     ).type("9021092313");
//     //   //sales-employee field
//     cy.get("#basic_salesemployee").click();
//     cy.get(
//       "div[title='Vikram.M'] div[class='ant-select-item-option-content']"
//     ).click();

//     // industry field

//     cy.get("#basic_industry").click();
//     cy.get(
//       "div[title='AMC'] div[class='ant-select-item-option-content']"
//     ).click();

//     //contact person

//         cy.get("#firstName").type("vignesh");
//         cy.get("#lastName").type("murugan");
//         cy.get("#position").type("Technical Consultant");
//         cy.get("#email").type("vignesh.murugan@avaniko.com");
//         cy.get("#mobile").type(9361367933);
//         cy.get(':nth-child(6) > .ant-space > [style=""] > .ant-btn').click();
//         cy.get("#rc-tabs-3-tab-2").click();
//         cy.get(
//           '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
//         ).click();
//         cy.xpath(`//div[contains(text(),'Billing')]`).click();
//         cy.get("#name").type("viikie");
//         cy.get("#street").type("ssm nagar");
//         cy.get("#block").type("398e");
//         cy.get("#city").type("chennai,guduvanchery");
//         cy.get("#zipcode").type(603202);
//         cy.get(
//           '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
//         )
//           .click()
//           .type("india");
//         cy.xpath(`//div[contains(text(),'India')]`).click();
//         cy.get(
//           '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
//         )
//           .click()
//           .type("tamil nadu");
//         cy.xpath(`//div[contains(text(),'Tamil Nadu')]`).click();
//         // cy.get('#gstin').type(9043212345)
//         cy.get(':nth-child(10) > .ant-space > [style=""] > .ant-btn > span').click()
//         cy.get('.ant-modal-footer > .ant-row > :nth-child(1) > .ant-btn').click()
//        // cy.get('.ant-modal-confirm-content').contains('Customer added succesfully')
//         cy.get('.ant-modal-confirm-btns > .ant-btn').click()

//       });
//     });

describe("Buddy", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    //   returning false here prevents Cypress from
    //     // failing the test
    return false;
  });

  it("Login", () => {
    cy.visit("https://pstest.Avaniko.com");
    cy.get("#basic_userName").type("Manager");
    cy.get("#basic_password").type("Avan!12345");
    cy.get(".ant-btn").click();
    cy.get("b").contains("Expense List");
    cy.xpath(
      "//button[@class='ant-btn ant-btn-text ant-btn-icon-only hp-mobile-sidebar-button']"
    ).click();
    cy.xpath(
      "//div[@class='ant-drawer-body']//div[@class='ant-row ant-row-space-between ant-row-middle hp-sidebar-footer hp-pb-16 hp-px-16 hp-bg-color-dark-100']//div[@class='ant-col']//div[@class='hp-d-flex hp-align-items-center hp-justify-content-between']//div//span[@class='ant-avatar ant-avatar-circle ant-avatar-image hp-cursor-pointer hp-mr-16'][normalize-space()='M']"
    ).contains("M");
    // cy.xpath("//button[@aria-label='Close']").click()
    // cy.get('.ant-drawer-body > .ant-row > .ant-col > .hp-d-flex > :nth-child(2) > .hp-d-block').should("eq","MANAGER")
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();
    // cy.get('[data-menu-id="rc-menu-uuid-83249-2-opportunity"] > .ant-menu-title-content > a').click()
    cy.xpath(
      "//li[@class='ant-menu-item ant-menu-item-only-child ant-menu-item-selected-in-active']//a[normalize-space()='Opportunity']"
    ).click();
    cy.get(".hp-float-right > .ant-btn").click();
    cy.get(":nth-child(3) > .ant-btn").click();
    cy.get(
      ":nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.xpath("//div[@class='ant-select-item-option-content']").click();
    cy.get("#basic_customerName").type("Vignesh");
    cy.get(
      ".hp-mb-24 > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.xpath("//div[contains(text(),'Customers')]").click();
    cy.get(
      ".hp-mb-24 > :nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.xpath(
      "//div[@class='ant-select-item-option-content'][normalize-space()='INR']"
    ).click();
    cy.get(
      ":nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_email"
    ).type("vignesh.murugan@avaniko.com");
    cy.get(
      ":nth-child(6) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > #basic_phone"
    ).type(9003100957);
    cy.get(
      ":nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.xpath("//div[contains(text(),'Anandkumar')]").click();
    cy.get(
      ":nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();
    cy.xpath("//div[contains(text(),'AMC')]").click();

    cy.get("#firstName").type("VigneshViikie");
    cy.get("#lastName").type("Murugan");
    cy.get("#position").type("Technical Consultant");
    cy.get("#email").type("vignesh.viikie@avaniko.com");
    cy.get("#mobile").type(9361367923);
    cy.get(':nth-child(6) > .ant-space > [style=""] > .ant-btn').click();
    cy.get("#rc-tabs-3-tab-2").click();
    cy.get(
      '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();

    cy.xpath(`//div[contains(text(),'Billing')]`).click();
    cy.get("#name").type("viikie");
    cy.get("#street").type("kk Nagar");
    cy.get("#block").type("398");
    cy.get("#city").type("jafferkhanpet");
    cy.get("#zipcode").type(600083);
    cy.get(
      '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    )
      .click()
      .type("india");
    cy.xpath(`//div[contains(text(),'India')]`).click();
    cy.get(
      '#rc-tabs-3-panel-2 > .ant-form > [style="margin-left: -17px; margin-right: -17px; row-gap: 0px;"] > :nth-child(7) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    )
      .click()
      .type("tamil nadu");
    cy.xpath(`//div[contains(text(),'Tamil Nadu')]`).click();
    // cy.get('#gstin').type(1234567890)
    cy.get(
      ':nth-child(10) > .ant-space > [style=""] > .ant-btn > span'
    ).click();
    cy.get(".ant-modal-footer > .ant-row > :nth-child(1) > .ant-btn").click();
    cy.get(".ant-modal-confirm-content").contains("Customer added succesfully");
    cy.get(".ant-modal-confirm-btns > .ant-btn").click();
  });
});
