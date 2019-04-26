import * as type from '../constants'
import axios from '../common/ajax'


const setCurrentBrand = (data = {}) => ({
  type: type.SETCURRENTBRAND,
  data: Object.assign({}, { ...data })
})

export {
  setCurrentBrand
}