import { IS_SHOW_SUB_NAV } from './mutation-types'

export default {
  // 切换显示二级菜单
  [IS_SHOW_SUB_NAV](state, bool) {
    state.isShowSubNav = bool
  }
}