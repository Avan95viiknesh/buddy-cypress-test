import Login from "../page objects/loginpage/Login.cy";

describe("Add tasks", () => {
  beforeEach(() => {
    cy.visit("/");
    const ln = new Login();

    ln.setUserName("Manager");
    ln.setUserPassword("Avan!12345");
    ln.clickSubmit();
    //open sidebar
    cy.get(".hp-mr-24 > .ant-btn").click();
    //open task tab
    cy.xpath("(//a[normalize-space()='Tasks'])[1]").click({ force: true });
  });

  it("should create task", () => {
    //click add task button
    cy.get(
      "body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > span:nth-child(2)"
    ).click();

    // enter subject
    cy.get("#basic_subject").type("new sub10");

    // get assignee tab
    cy.get(".ant-select-selection-item").click();

    // select assignee item
    cy.get(
      "div[title='manager user'] div[class='ant-select-item-option-content']"
    ).click();

    // get due date field
    cy.get("#basic_dueDate").click();

    // select date
    cy.get("td[title='2023-02-22'] div[class='ant-picker-cell-inner']").click();

    // get status field
    cy.get("#basic_status").click();

    // select type
    cy.get(
      "div[title='Open'] div[class='ant-select-item-option-content']"
    ).click();

    // get priority tab
    cy.get("#basic_priority").click();

    // select priority type
    cy.get(
      "div[title='High'] div[class='ant-select-item-option-content']"
    ).click();

    // get description textbox
    cy.get("#basic_description").type("add tasks based on your needs");

    // click fav
    cy.get("#basic_favourite").click();

    // click create task button
    cy.get(
      "button[class='ant-btn ant-btn-primary ant-btn-block hp-bg-success-1 hp-border-color-success-1'] span"
    ).click();

    // after all completed click ok button
    cy.get("button[class='ant-btn ant-btn-primary']").click();
  });

  it.only("Edit tasks", () => {
    // click edit task button
    cy.xpath(
      "//a[@class='hp-mt-8 hp-d-block ant-tooltip-open']//*[name()='svg']"
    ).click();
  });
});
