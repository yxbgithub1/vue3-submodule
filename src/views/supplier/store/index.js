/**
 * 尹咸彪 
 * 2018-10-17
 * PS:模块若未使用stroe可不新建此文件夹
 */
import store from '@store'
import * as modules from './modules'

Object.keys(modules).map(m => store.registerModule(m, modules[m]))
