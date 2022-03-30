import statusCodePage from '../pages/statusCodePage'
import homePage from '../pages/homePage'
import { ClientFunction } from 'testcafe'


fixture`Status Code Test`
.beforeEach(async t => { // beforeAll hack
  await homePage.goto()
})

const goBack = ClientFunction(() => window.history.back())

test('Status code 200 Page', async t => {
  await t.click(homePage.statusCodeBtn)

  await t.click(statusCodePage.code_200)
  await t.expect(statusCodePage.msg_200.innerText)
  .contains('This page returned a 200 status code.',"Status code 200 page not rendered")

  await goBack()
})

test('Status code 301 Page', async t => {
  await t.click(homePage.statusCodeBtn)

  await t.click(statusCodePage.code_301)
  await t.expect(statusCodePage.msg_301.innerText)
  .contains('This page returned a 301 status code.',"Status code 301 page not rendered")

  await goBack()
})

test('Status code 404 Page', async t => {
  await t.click(homePage.statusCodeBtn)

  await t.click(statusCodePage.code_404)
  await t.expect(statusCodePage.msg_404.innerText)
  .contains('This page returned a 404 status code.',"Status code 404 page not rendered")

  await goBack()
})

test('Status code 500 Page', async t => {
  await t.click(homePage.statusCodeBtn)

  await t.click(statusCodePage.code_500)
  await t.expect(statusCodePage.msg_500.innerText)
  .contains('This page returned a 500 status code.',"Status code 500 page not rendered")
})