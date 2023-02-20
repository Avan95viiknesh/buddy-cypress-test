import Login from "../page objects/loginpage/Login.cy";

describe("Sorting fields to check", () => {
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

    // click opportunity button
    cy.get("a[href='/opportunity']").click();
  });

  it("should check sorting field", () => {
    //get qualification dropdown
    cy.get("#qualification").click();
    // select hot in list
    cy.get(
      "div[title='Hot'] div[class='ant-select-item-option-content']"
    ).click();

    // get status field
    cy.get("span[title='Open']").click();
    //select won in list
    cy.get(
      "div[title='Won'] div[class='ant-select-item-option-content']"
    ).click();

    // get opportunity stage field

    cy.get("#stageCode").click();

    // click proposal sent 

    cy.get("div[title='Proposal sent'] div[class='ant-select-item-option-content']").click();

    // get emp responsible field
    cy.get("#empRespCode").click();

    // select name from this field
    cy.get("div[title='Vikram.M'] div[class='ant-select-item-option-content']").click();
  });
});
