import { Selector as $, t } from 'testcafe'
import homePage from '../pages/homePage'
import abtestPage from '../pages/abTestPage'

fixture`A/B Testing Page`
  .beforeEach(async t => { // beforeAll hack
    await homePage.goto()
  })

test('A/B Testing', async t => {
  await t.click(homePage.abTestingBtn)
  await t.expect(abtestPage.paragraphTitleTxt.innerText).contains("A/B Test", "A/B Testing not opened" );
  await t.expect(abtestPage.paragraphText.exists).ok();
})
