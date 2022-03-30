import loginPage from '../pages/loginPage'
import { validUser, invalidUser } from '../data/roles'

fixture`Login Test`

test('should log into the system', async t => {
  await t
    .useRole(validUser)
    .expect(loginPage.welcomeMsg.visible).ok()

  await t.click(loginPage.logoutBtn)
})

test('invalid credentials should display error', async t => {
  await t
    .useRole(invalidUser)
    .expect(loginPage.errorMsg.visible).notOk()
})
