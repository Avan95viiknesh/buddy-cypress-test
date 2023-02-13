class Login {
  setUserName(username) {
    cy.get("#basic_userName").type(username);
  }

  setUserPassword(password) {
    cy.get("#basic_password").type(password);
  }

  clickSubmit() {
    cy.get("button[type='submit']").click();
  }

 
}

export default Login;
