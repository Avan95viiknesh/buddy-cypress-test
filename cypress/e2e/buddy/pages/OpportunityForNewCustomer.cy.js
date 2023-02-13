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

    // adding details
    //add company name
    cy.get("#basic_companyName").type("vsm co.pvt.ltd");
    // contact person

    cy.get("#basic_contactPerson").type("vignesh");

    // add designation

    cy.get("#basic_designation").type("trainee");

    // add email

    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
    ).type("vsm@gmail.com");
    // end phone no

    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
    ).type("9003200987");

    // opportunity details

    cy.get("#basic_opprName").type("existing opportunity");

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

    cy.xpath("//div[contains(text(),'K.S.Senthilkumar')]").click();
    //vertical field

    cy.get(
      ":nth-child(5) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();

    cy.get(
      "div[title='Jewellery'] div[class='ant-select-item-option-content']"
    ).click();

    // opportunity value
    cy.get("#basic_opprValue").type("10000");

    // currency
    cy.get(
      ".ant-input-group-addon > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector"
    ).click();

    cy.xpath(
      "//div[@class='ant-select-item-option-content'][normalize-space()='INR']"
    ).click();

    // followup date

    cy.get("#basic_followUpDate").click().type("2023-02-28").type("{enter}");

    // comments box

    cy.get("#basic_comments").type("opportunity for new customers");

    // save btn
    cy.get('[style=""] > .ant-btn').click();
  });
});
