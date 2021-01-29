import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Header } from 'element-ui'
import {
    Container,
    Aside,
    Main,
    Menu,
    Submenu,
    // MenuItemGroup,
    MenuItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
    // Vue.use(MenuItemGroup)
Vue.use(MenuItem)
    // 进行全局挂载：
Vue.prototype.$message = Message