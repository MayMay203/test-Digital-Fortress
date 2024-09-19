import { images } from '~/assets/images'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { BackIcon, CalendarIcon, DashboardIcon, ProjectIcon, TaskIcon } from '~/components/Icon'
import Menu from './Menu'
import MenuItem from './Menu/MenuItem'
import { useEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)
function Sidebar() {
  const [isCollapse, setIsCollapse] = useState(false)
  const ref = useRef()
  const imageRef = useRef()

  useEffect(() => {
    if (isCollapse) {
      ref.current.style.flexDirection = 'column'
      ref.current.style.rowGap = '12px'
      imageRef.current.style.width = '70px'
    } else {
      ref.current.style.flexDirection = 'row'
      ref.current.style.rowGap = '0px'
      imageRef.current.style.width = 'initial' 
    }
  }, [isCollapse])

  const handleCollapse = () => {
    const newSidebarWidth = isCollapse ? '312px' : '96px'
    document.documentElement.style.setProperty('--sidebar-width', newSidebarWidth)
    setIsCollapse((prev) => !prev)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('top')} ref={ref}>
        <img src={images.logo} alt="logo" ref={ imageRef} />
        <button className={cx('btn')} onClick={handleCollapse}>
          <BackIcon />
        </button>
      </div>
      <Menu>
        <MenuItem icon={<DashboardIcon />} to="/dashboard" title="Dashboard" isCollapse={isCollapse}></MenuItem>
        <MenuItem icon={<TaskIcon />} to="/task" title="Task" isCollapse={isCollapse}></MenuItem>
        <MenuItem icon={<ProjectIcon />} to="/project" title="Projects" isCollapse={isCollapse}></MenuItem>
        <MenuItem icon={<CalendarIcon />} to="/schedule" title="Schedule" isCollapse={isCollapse}></MenuItem>
      </Menu>
    </div>
  )
}

export default Sidebar
