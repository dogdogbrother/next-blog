/**
 * @description 文章目录状态管理
 */
 import { getCatalogList } from 'api/catalog'

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
    getCatalog: async function() {
      const list = await getCatalogList()
      this.catalogInfo = {
        ...this.catalogInfo,
        list
      }
    }
  }
}

export default catalogStore