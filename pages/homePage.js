import { Selector as $, t } from 'testcafe'
import basePage from './basePage'

const homePage = {
  url: '',
  // include modules...
  abTestingBtn: $('a[href="/abtest"]'),
  loginBtn: $('a[href="/login"]'),
  notification_messageBtn: $('a[href="/notification_message"]'),
  statusCodeBtn: $('a[href="/status_codes"]'),
  redirectorBtn: $('a[href="/redirector"]'),
}
export default { ...basePage, ...homePage }
