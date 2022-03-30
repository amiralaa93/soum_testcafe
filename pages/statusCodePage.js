import { Selector as $, t } from 'testcafe'
import basePage from '../pages/basePage'

const statusCodePage = {
  url: 'status_codes',
  code_200: $('a[href="status_codes/200"]'),
  code_301: $('a[href="status_codes/301"]'),
  code_404: $('a[href="status_codes/404"]'),
  code_500: $('a[href="status_codes/500"]'),

  msg_200: $('div[class="example"] p'),
  msg_301: $('div[class="example"] p'),
  msg_404: $('div[class="example"] p'),
  msg_500: $('div[class="example"] p'),
}
export default { ...basePage, ...statusCodePage }
