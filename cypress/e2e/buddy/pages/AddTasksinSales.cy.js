import Login from "../page objects/loginpage/Login.cy";

describe("Add Tasks", () => {
  beforeEach(() => {
    cy.visit("/");
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
    cy.xpath(
      "(//*[name()='svg'])[59]"
    ).click();
    cy.wait(1000);
    // click create  Task

    cy.xpath("(//a[normalize-space()='Create Task'])[1]").click();

    // get assingee tab
    cy.xpath("(//span[@class='ant-select-selection-item'])[2]").click();

    // select assingee
    cy.get(
      "div[title='manager user'] div[class='ant-select-item-option-content']"
    ).click();

    // get due date
    cy.get("#basic_dueDate").click();

    // select date
    cy.get("td[title='2023-02-23'] div[class='ant-picker-cell-inner']").click();

    // get status tab
    cy.get("#basic_status").click();

    // selct status
    cy.get(
      "div[title='Open'] div[class='ant-select-item-option-content']"
    ).click();

    // get priority tab
    cy.get("#basic_priority").click();

    // select priority
    cy.get(
      "div[title='Medium'] div[class='ant-select-item-option-content']"
    ).click();

    // get description text box
    cy.get("#basic_description").type("Check tasks has been updated another");

    // click fav
    cy.get("#basic_favourite").click();

    // click create task btn
    cy.get(
      "button[class='ant-btn ant-btn-primary ant-btn-block hp-bg-success-1 hp-border-color-success-1'] span"
    ).click();

    // after all completed click ok btn
    cy.xpath(
      "//div[@class='ant-modal-confirm-btns']//button[@type='button']"
    ).click();
  });




  it.only("should create a new Task", () => {

   //open sidebar
   cy.get(".hp-mr-24 > .ant-btn").click();

   //open task tab
   cy.xpath("(//a[normalize-space()='Tasks'])[1]").click({ force: true });

   // click edit button
   cy.get(':nth-child(1) > .ant-list-item-action > :nth-child(1) > .hp-mt-8 > svg').click(); // not getting exact field

   // change subject name 
   cy.get("#basic_subject").clear().type("I want new opportunity and news notification");

   // click update button
   cy.get('.ant-modal-footer').click();
   
  });









});
