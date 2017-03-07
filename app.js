import { uniq } from 'lodash'
import insane from 'insane'
import jsonp from 'jsonp'

const ages = [1, 1, 1, 22, 2, 2, 33, 3, 3, 3, 4, 44, 4, 44, 4]

console.log(uniq(ages))
