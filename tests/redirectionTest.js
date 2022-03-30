import { Selector as $, t } from 'testcafe'
import homePage from '../pages/homePage'
import redirectionPage from '../pages/redirectionPage'

fixture`Redirection Testing Page`
 
  .beforeEach(async t => { // beforeAll hack
    await homePage.goto()
  })

test('Redirection Testing', async t => {

  await t.click(homePage.redirectorBtn )
  await t.expect(redirectionPage.redirecttionTitle.innerText).contains("Redirection", "Redirection Page not opened" );
  await t.expect(redirectionPage.redirecttionContent.exists).ok();
  await t.click(redirectionPage.redirectBtn)

  await t.expect(redirectionPage.statusCodeTitle.exists).ok
  await t.expect(redirectionPage.statusCodeTitle.innerText).contains("Status Code","Page not redirected")
   
})
