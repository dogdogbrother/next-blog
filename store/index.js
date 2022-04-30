import userState from './user'
import React, { createContext, useContext } from 'react'
import { useLocalObservable, enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(true)

const StoreContext = createContext({})

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({...userState}));
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

