import HeaderNav from 'components/header-nav'

export default function Layout({ children }) {
  return <div>
    <HeaderNav />
    <main>{children}</main>
  </div>
}