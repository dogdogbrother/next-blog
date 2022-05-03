/**
 * @description 文章目录状态管理
 */

export const initValue = {
  list: [],
  loading: false,
  currentCatalog: null,  // 当前选中的目录
  state: false
}

const catalogStore = () => {
  return {
    catalogInfo: {},
    setCatalogDrawer: function(state) {
      this.catalogInfo = {
        ...this.catalogInfo,
        state
      }
    },
  }
}

export default catalogStore