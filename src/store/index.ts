// 导入store
import Cart from './cart'
import Classify from './classify'
import  search  from './search'
import  category  from './category'

export default {
    cart: new Cart(),
    classify:new Classify(),
    search:new search(),
    category:new category()
}