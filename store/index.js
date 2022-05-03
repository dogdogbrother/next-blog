import React, { createContext, useContext } from 'react'
import { useLocalObservable, enableStaticRendering } from 'mobx-react-lite'
import createStore from './rootStore'

enableStaticRendering(false)

const StoreContext = createContext({})

export const StoreProvider = ({ initialValue, children }) => {
  const store = useLocalObservable(createStore(initialValue))
  store.user.getUserInfo()  // 获取用户信息
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('数据不存在');
  }
  return store;
}

