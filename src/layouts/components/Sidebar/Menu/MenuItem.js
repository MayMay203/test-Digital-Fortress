import PropTypes from 'prop-types'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { NavLink} from 'react-router-dom'

const cx = classNames.bind(styles)
function MenuItem({ title, to, icon, isCollapse = false}) {
  return (
    <NavLink
      to={to}
      className={(nav) => {
        return cx('menu-item', { active: nav.isActive, collapse: isCollapse })
      }}
    >
      <span className={cx('icon')}>{icon}</span>
      {!isCollapse && <span className={cx('title')}>{title}</span>}
    </NavLink>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.node,
  activeIcon: PropTypes.node,
  avatar: PropTypes.object,
  onClick: PropTypes.func
}
export default MenuItem
