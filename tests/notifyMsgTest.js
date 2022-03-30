import { Selector as $, t } from 'testcafe'
import homePage from '../pages/homePage'
import notifyMsgPage from '../pages/notifyMsgPage'

fixture`Notification Messages Page`
  .beforeEach(async t => { // beforeAll hack
    await homePage.goto()
  })

test('Notification Messages', async t => {

  await t.click(homePage.notification_messageBtn)
  
  await t.expect(notifyMsgPage.before_notificationTxt.exists).ok();
  await t.click(notifyMsgPage.clickHereBtn)
  await t.expect(notifyMsgPage.after_notificationTxt.innerText).contains("Action","Notification Message not rendered");
})
