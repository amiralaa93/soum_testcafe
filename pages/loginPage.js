import { Selector as $, t } from 'testcafe'
import basePage from './basePage'

const loginPage = {
  url: 'login',
  usernameInput: $('#username'),
  passwordInput: $('#password'),
  loginBtn: $('button[type="submit"]'),
  errorMsg: $('#flash'), 
  welcomeMsg: $('.subheader'),
  logoutBtn: $('.button.secondary.radius'),

  async login (username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginBtn)
  }
}
export default { ...basePage, ...loginPage }
