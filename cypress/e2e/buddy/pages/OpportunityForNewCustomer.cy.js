import Login from "../page objects/loginpage/Login.cy";

describe("Create opportunity for existing customers", () => {
  beforeEach(() => {
    cy.visit('/');
    const ln = new Login();

    ln.setUserName("Manager");
    ln.setUserPassword("Avan!12345");
    ln.clickSubmit();
  });

  it.skip("should create", () => {
  

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
    cy.get('input[placeholder*="Company"]').type("vsm co.pvt.ltd");

    // contact person

    cy.get('input[placeholder*="Contact Person"]').type("vignesh");

    // add designation

    cy.get('input[placeholder*="Designation"]').type("trainee");

    // add email

    cy.get('input[placeholder*="Email ID"]').type("vsm@gmail.com");
    // end phone no

    cy.get('input[placeholder*="Phone No"]').type("9003200987");

    // opportunity details

    cy.get('input[placeholder*="Opportunity Description"]').type(
      "opportunity for new customer"
    );

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
    cy.get("input[placeholder*='Opportunity Value']").type("10000");

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

  it.only("quick followup", () => {
    //open sidebar
    cy.get(".hp-mr-24 > .ant-btn").click();
    //open sales dropdown tab
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();

    // click opportunity button
    cy.get("a[href='/opportunity']").click();

    //click Action tab
    cy.get("tbody tr:nth-child(9) td:nth-child(10) div:nth-child(1) button:nth-child(2)").click();
    
    // click quick follow up button

    cy.xpath("//a[normalize-space()='Quick Followup']").click();

    // click next followup button

    cy.get("#FollowUpDate").click();

    // select date

    cy.get(".ant-picker-today-btn").click();

    // get comment box 

    // cy.get("#Comments").type(" quick follow up for opportunity list")
    cy.get("#Comments").type("checking multiple follow ups more than four times")


    // click save button
    cy.get("button[class='ant-btn ant-btn-primary ant-btn-block hp-bg-success-1 hp-border-color-success-1']").click();
  });


  it("export button check", () => {
 //open sidebar
 cy.get(".hp-mr-24 > .ant-btn").click();
 //open sales dropdown tab
 cy.get(
   ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
 ).click();

 // click opportunity button
 cy.get("a[href='/opportunity']").click();

 // click export button
 cy.get("body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)").click();
  })

});
