import Login from "../page objects/loginpage/Login.cy";

describe("Add new source in settings opportunity", () => {
  beforeEach(() => {
    cy.visit("/");
    const ln = new Login();

    ln.setUserName("Manager");
    ln.setUserPassword("Avan!12345");
    ln.clickSubmit();
    //open sidebar
    cy.get(".hp-mr-24 > .ant-btn").click();
    //open settings tab
    cy.xpath("(//a[normalize-space()='Settings'])[1]").click({ force: true });

    // getting opportunity tab in settings page
    cy.xpath("//span[normalize-space()='Opportunity']").click();
  });

  it("should create", () => {
    //click source tab
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    //click add new source button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)"
    ).click();

    //get source input field
    cy.get("#source").type("check again2");

    //click save btn
    cy.get("button[class='ant-btn ant-btn-primary'] span").click();

    // click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });

  it(" update source", () => {
    // update source input field with new value

    //click source tab
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    // click edit button
    cy.xpath("(//*[name()='svg'][@role='presentation'])[42]").click({
      force: true,
    });

    // get active dropdown
    cy.get("span[title='Yes']").click();

    // click no
    cy.get(
      "div[title='Yes'] div[class='ant-select-item-option-content']"
    ).click();
    cy.wait(1000);
    // click update btn
    cy.get("button[class='ant-btn ant-btn-primary'] span").click();

    // finally all done click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });

  it("Edit an already existing Stage", () => {
    //click stages tab
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    // click edit btn
    cy.xpath("(//*[name()='svg'][@role='presentation'])[34]").click({
      force: true,
    });

    // in edit model fields

    // get stage input field
    // cy.get("#name").clear().type("upsideNew");

    cy.wait(1000);
    // get step id
    // cy.get("#stepId").clear().type("8");

    // get closing percent field
    // cy.get("#cloPrcnt").clear().type("66");

    // active tab
    cy.xpath("//span[@title='Yes']").click();
    // click no field
    cy.xpath("//div[contains(text(),'No')]").click();

    // click update button
    // cy.xpath("//span[normalize-space()='Update']").click();

    // click update btn
    cy.xpath("//span[normalize-space()='Update']").click();

    // after all done click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });

  it("Add new stage", () => {
    //click stages tab
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(2) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    // click add stage btn
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)"
    ).click();

    // get stage input field
    cy.get("#name").clear().type("vsm");

    cy.wait(1000);
    // get step id
    cy.get("#stepId").clear().type("9");

    // get closing percent field
    cy.get("#cloPrcnt").clear().type("71");

    // active tab
    cy.xpath("//span[@title='Yes']").click();

    // click save btn
    cy.xpath("//button[@class='ant-btn ant-btn-primary']").click();

    // after all done click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });

  it("Add new vertical", () => {
    // click vertical button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(3) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    // click new vertical button
    cy.xpath(
      "//div[contains(@class,'ant-col hp-pl-sm-16 hp-pl-32 hp-py-sm-24 hp-py-32 hp-pb-24 hp-overflow-hidden')]//button[contains(@type,'button')]//span[1]"
    ).click();

    // get vertical field
    cy.get("#name").type("Trading");

    // click save btn
    cy.xpath("//span[normalize-space()='Save']").click();

    // after all done click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });

  it("edit vertical", () => {
    // click vertical button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(3) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    // click edit vertical button
    cy.xpath("(//*[name()='svg'][@role='presentation'])[38]").click();

    // get active field
    cy.get("span[title='Yes']").click();
    // select no
    cy.xpath("//div[contains(text(),'No')]").click();

    // click update btn
    cy.xpath("//span[normalize-space()='Update']").click();

    // after all done click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });

  it("Add new status", () => {
    // click status tab
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(4) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    // click add btn
    cy.xpath(
      "//div[contains(@class,'ant-col hp-pl-sm-16 hp-pl-32 hp-py-sm-24 hp-py-32 hp-pb-24 hp-overflow-hidden')]//button[contains(@type,'button')]//span[1]"
    ).click();

    // get status field
    cy.get("#name").type("open003");

    // get allow edit btn
    cy.get("#allowEdit").click();

    // select yes
    cy.get(
      "div[title='Yes'] div[class='ant-select-item-option-content']"
    ).click();

    // get allow copy to
    cy.get("#allowCopyTo").click();

    // select NO
    cy.get(
      "div[class='ant-select-dropdown ant-select-dropdown-placement-bottomLeft '] div div[class='rc-virtual-list'] div[class='rc-virtual-list-holder'] div div[title='No'] div[class='ant-select-item-option-content']"
    ).click({ force: true });

    // click save btn
    cy.xpath("//span[normalize-space()='Save']").click();

    // after all done click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });

  it.only("Edit status", () => {
    // click status tab
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(2) > li:nth-child(4) > span:nth-child(2) > a:nth-child(1)"
    ).click();

    // click edit status btn
    cy.xpath("(//*[name()='svg'][@role='presentation'])[34]").click();

    // get status field name
    // cy.get("#name").clear().type("open002");

    // get allow edit btn
    cy.get("#allowEdit").click();

    // select yes
    cy.get(
      "div[title='No'] div[class='ant-select-item-option-content']"
    ).click();

    // get allow copy to
    cy.xpath("(//span[@title='No'][normalize-space()='No'])[2]").click({ force: true });

    // select yes
    cy.xpath(
      "(//div[contains(@class,'ant-select-item-option-content')][normalize-space()='Yes'])[1]"
    ).click({ force: true });

    // click update btn
    cy.xpath("//span[normalize-space()='Update']").click();

    // after all done click ok btn
    cy.xpath("//span[normalize-space()='OK']").click();
  });
});
