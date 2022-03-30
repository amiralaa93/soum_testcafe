import { Selector as $, t } from 'testcafe'
import basePage from './basePage'

const abtestPage = {
  paragraphTitleTxt: $('div[class="example"] h3'),
  paragraphText: $('div[class="example"] p'),
  
}
export default { ...basePage, ...abtestPage }
