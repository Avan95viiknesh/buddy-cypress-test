import Login from "../page objects/loginpage/Login.cy";

describe("Add Tasks", () => {
  beforeEach(() => {
    cy.visit('/');
    const ln = new Login();

    ln.setUserName("Manager");
    ln.setUserPassword("Avan!12345");
    ln.clickSubmit();
  });

  it("should create a new Task", () => {
    //open sidebar
    cy.get(".hp-mr-24 > .ant-btn").click();
    //open sales dropdown tab
    cy.get(
      ".ant-drawer-body > .ant-menu > :nth-child(5) > .ant-menu-submenu-title > .ant-menu-title-content"
    ).click();

    // click opportunity button
    cy.get("a[href='/opportunity']").click();

    //click Action tab
    cy.get(
      "tbody tr:nth-child(2) td:nth-child(10) div:nth-child(1) button:nth-child(2)"
    ).click();

    // click create new Task

    cy.get(
      "body > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > span:nth-child(1) > a:nth-child(1)"
    ).click();
  });
});
