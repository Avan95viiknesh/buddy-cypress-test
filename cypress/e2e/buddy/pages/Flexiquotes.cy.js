import Login from "../page objects/loginpage/Login.cy";

describe("Create opportunity for existing customers", () => {
  beforeEach(() => {
    cy.visit("/");
    const ln = new Login();

    ln.setUserName("Manager");
    ln.setUserPassword("Avan!12345");
    ln.clickSubmit();

    //open sidebar
    cy.get('.hp-mr-24 > .ant-btn').click();

    //open sales dropdown tab
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();

    // click Flexi quote button
    cy.xpath("(//a[normalize-space()='Flexi Quote'])[1]").click();
  });

  it("checking flexi quote", () => {
    // click  New Flexi quote button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > button:nth-child(1) > span:nth-child(2)"
    ).click();

    // get qty field
    cy.get("#qty").clear().type("2");

    // get price field
    cy.get("#Price").type("14000");

    // get tax field
    cy.xpath("(//span[@title='GST-18'])[1]").click();

    cy.wait(1000);
    // select tax percentage field
    cy.xpath(
      "(//div[@class='ant-select-item-option-content'][normalize-space()='GST-12'])[1]"
    ).click();
  });

  it("Add new quote with us dollar", () => {
    // click  New Flexi quote button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > button:nth-child(1) > span:nth-child(2)"
    ).click();
    // get currency change btn
    cy.get("span[title='INR']").click();

    // select us dollar
    cy.get(
      "div[title='USD'] div[class='ant-select-item-option-content']"
    ).click();

    // get customer field
    cy.get("#basic_BpName").click();

    // click customer name from field
    cy.xpath(
      '//div[contains(@class,"rc-virtual-list-holder-inner")]//div[1]//div[1]//div[1]'
    ).click();

    // get quote date
    cy.get("#basic_QuoteDate").click();

    // click date from field
    cy.get(".ant-picker-today-btn").click();

    // get valid till date field
    cy.get("#basic_ValidUntil").click().type("2023-02-27").type("{enter}");

    // get select item field
    cy.get("#itemCode").click();

    // click value from field
    cy.xpath(
      "(//div[contains(text(),'15dB Coupler ~ 15 dB Coupler')])[1]"
    ).click();

    // get price field
    cy.get("#Price").type("14000");
   

    // get tax field
    cy.xpath("(//span[@title='GST-18'])[1]").click();

    cy.wait(1000);
    // select tax percentage field
    cy.xpath(
      "(//div[@class='ant-select-item-option-content'][normalize-space()='GST-12'])[1]"
    ).click();

    // click add Row btn
    cy.xpath("(//button[@type='button'])[4]").click();

    // get select item field for another field
    cy.xpath(
      "//div[@class='ant-select ant-select-auto-complete ant-select-focused ant-select-single ant-select-open ant-select-show-search']//input[@id='itemCode']"
    ).click();

    // click value from another  field
    // cy.get(
    //   "div[title='01.16 26 09 ~ 01.16 26 09'] div[class='ant-select-item-option-content']"
    // ).click();

    // after all complete click save btn
    cy.xpath(
      "//div[@class='ant-space ant-space-horizontal ant-space-align-center']//div[1]//button[1]//span[1]"
    ).click();
  });

  it("Edit the new flexi quote", () => {
    // click edit button
    cy.get(
      ":nth-child(8) > :nth-child(7) > .ant-space > :nth-child(2) > a > svg"
    ).click();

    // change price option
    cy.get("#Price").clear().type("1222").type("{enter}");

    // after all changes click update button
    cy.get(
      "button[class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']"
    ).click();
  });



it.only("Chnage currency usd to inr", () => {
    // click edit button
    cy.get(
      ":nth-child(8) > :nth-child(7) > .ant-space > :nth-child(2) > a > svg"
    ).click();

    // click currency btn
    cy.xpath("(//div[@class='ant-select-selector'])[1]").click();

    // change currency us dollar to inr currency
    cy.get("div[title='Indian Rupee'] div[class='ant-select-item-option-content']").click();

    // change tax code
    cy.xpath("//span[normalize-space()='EXEMPT']").click();

    // select no tax code
    cy.xpath("//div[contains(@class,'ant-select-item-option-content')][normalize-space()='EXEMPT']" ).click();

  // after all changes click update button
  cy.get(
    "button[class='ant-btn ant-btn-primary hp-bg-success-1 hp-border-color-success-1']"
  ).click();
})





});
