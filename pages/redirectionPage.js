import { Selector as $, t } from 'testcafe'
import basePage from './basePage'

const redirectPage = {

  redirectBtn : $('#redirect'),
  redirecttionTitle : $('div[class="example"] h3'),
  redirecttionContent : $('div[class="example"] p'),
  statusCodeTitle : $('div[class="example"] h3'),

}
export default { ...basePage, ...redirectPage }
