import Login from "../page objects/loginpage/Login.cy";

describe("Add new source in settings opportunity", () => {
  beforeEach(() => {
    cy.visit("/");
    const ln = new Login();

    ln.setUserName("Manager");
    ln.setUserPassword("Avan!12345");
    ln.clickSubmit();
  });

  it("should create", () => {
 //open sidebar
 cy.get(".hp-mr-24 > .ant-btn").click();
 //open settings tab
 cy.get("li[class='ant-menu-item ant-menu-item-active ant-menu-item-selected ant-menu-item-selected'] a").click();
 
  });
});
