/**
 * @desc Store modules entry
 * @author Jooger <zzy1198258955@163.com>
 * @date 9 Oct 2017
 */

'use strict'

import * as app from './app'
import * as auth from './auth'
import * as article from './article'
import * as category from './category'
import * as tag from './tag'
import * as option from './option'

export default {
  app: { namespaced: true, ...app },
  auth: { namespaced: true, ...auth },
  article: { namespaced: true, ...article },
  category: { namespaced: true, ...category },
  tag: { namespaced: true, ...tag },
  option: { namespaced: true, ...option }
}
