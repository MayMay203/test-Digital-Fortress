import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)
function Button({
  to,
  href,
  onClick,
  primary = false,
  rounded = false,
  outline = false,
  text = false,
  circle = false,
  disabled = false,
  children,
  size = 'medium',
  className,
  leftIcon,
  rightIcon,
  isCollapse = false,
  ...passProps
}) {
  const props = {
    onClick,
    ...passProps,
  }
  let Comp = 'button'

  // Remove event listener when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof (props.key === 'function')) {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    rounded,
    text,
    disabled,
    circle,
    [size]: size,
  })
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
}

export default Button
