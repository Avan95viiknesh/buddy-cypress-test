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
    //open sales dropdown tab
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();
    cy.wait(1000);
    //open sales quota tab

    cy.get("a[href='/salesquotation']").click();

    cy.wait(2000);
  });

  it("validate by Posting Documents without Tax Codes.", () => {
    // click new sales quote button
    cy.xpath(
      "//a[@class='hp-float-right']//span[1]"
    ).click();

    // click get template btn
    cy.get("body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)").click();

    // click bulk upload button
    cy.get("body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1) > span:nth-child(2)").click();

  });
});
