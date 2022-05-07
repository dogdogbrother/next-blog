/**
 * @description 文章目录状态管理
 */
 import { getCatalogList } from 'api/catalog'

export const initValue = {
  list: [],
  loading: true,
  currentCatalogId: null,  // 当前选中的目录id
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
      this.catalogInfo.loading = true
      const list = await getCatalogList().finally(() => this.catalogInfo.loading = false)
      this.catalogInfo.list = list
      if (!window) return
      const query = window.location.href.split('?')[1] || ''
      if (!query) return
      const params = new URLSearchParams(query)
      const currentCatalogId = params.get('catalogId')
      if (currentCatalogId) {
        this.catalogInfo = {
          ...this.catalogInfo,
          currentCatalogId: Number(currentCatalogId)
        }
      }
    },
    // 切换当前目录
    changeCatalog: function(currentCatalogId) {
      this.catalogInfo = {
        ...this.catalogInfo,
        currentCatalogId
      }
      if (!window) return
      const href = window.location.href.split('?')
      const pathname = href[0]
      const params = new URLSearchParams()
      params.set('catalogId', currentCatalogId)
      const resUrl = params.toString()
      window.history.replaceState(
        {}, 
        '', 
        `${pathname}?${resUrl}`
      )
    }
  }
}

export default catalogStore