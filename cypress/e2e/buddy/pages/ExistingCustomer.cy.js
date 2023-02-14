import Login from "../page objects/loginpage/Login.cy";

describe("Create opportunity for existing customers", () => {
  it("should create", () => {
    cy.visit("https://pstest.Avaniko.com");

    const ln = new Login();

    ln.setUserName("Manager");
    ln.setUserPassword("Avan!12345");
    ln.clickSubmit();

    //open sidebar
    cy.get(".hp-mr-24 > .ant-btn").click();
    //open sales dropdown tab
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();

    // click opportunity button
    cy.get("a[href='/opportunity']").click();

    //create opportunity

    cy.get(
      "button[class='ant-btn ant-btn-default hp-text-color-primary-1 hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0']"
    ).click();

    //click existing opportunity rado button
    cy.get("button[role='switch']").click();

    // adding details

    cy.get("#basic_customerCode").click();

    cy.get(
      "div[title='Vignesh - CUS0050'] div[class='ant-select-item-option-content']"
    ).click();

    // opportunity details

    // cy.get("#basic_opprName").type("existing opportunity");
    cy.get('input[placeholder*="Opportunity Description"]').type('existing opportunity') // getting based on placeholder
    // starting date

    cy.get(
      ":nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker"
    ).click();
    cy.get("td[title='2023-02-02'] div[class='ant-picker-cell-inner']").click();

    // end date

    cy.get("#basic_endDate").click().type("2023-02-28").type("{enter}");

    cy.wait(1000);
    // source

    cy.get(
      '[style="margin-left: -16px; margin-right: -16px; row-gap: 10px;"] > :nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();

    cy.get("div[title='Email']").click();

    //qualification

    cy.get(
      ':nth-child(1) > [style="margin-left: -16px; margin-right: -16px; row-gap: 10px;"] > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();

    cy.get(
      "div[title='Hot'] div[class='ant-select-item-option-content']"
    ).click();

    // opportunity stage
    cy.get(
      ':nth-child(2) > [style="margin-left: -16px; margin-right: -16px; row-gap: 10px;"] > :nth-child(3) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector'
    ).click();

    cy.get(
      "div[title='Proposal sent'] div[class='ant-select-item-option-content']"
    ).click();

    cy.wait(1000);
    // employee responsible field

    cy.get("#basic_empRespCode").click();

    cy.xpath("//div[contains(text(),'Anandkumar')]").click();
    //vertical field

    cy.get(
      ":nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();

    cy.get(
      "div[title='Jewellery'] div[class='ant-select-item-option-content']"
    ).click();

    // opportunity value
    cy.get(
      "input[placeholder*='Opportunity Value']"
    ).type("10000");

    // currency
    cy.get(
      ".ant-input-group-addon > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();

    cy.get(
       "div[title='INR'] div[class='ant-select-item-option-content']"
    ).click();

    // followup date

    cy.get("#basic_followUpDate").click().type("2023-02-28").type("{enter}");

    // comments box
    cy.get(
      "#rc-tabs-2-panel-1"
    ).click().type("Need to follow");

    // save btn
    cy.get('[style=""] > .ant-btn').click();
  });
});
