import { Selector as $, t } from 'testcafe'
import basePage from './basePage'

const notifyMsgPage = {

  before_notificationTxt : $('#flash'),
  clickHereBtn : $('a[href="/notification_message"]'),
  after_notificationTxt : $('#flash')

}
export default { ...basePage, ...notifyMsgPage }
