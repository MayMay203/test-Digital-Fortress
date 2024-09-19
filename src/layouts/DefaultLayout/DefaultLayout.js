import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('container')}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
