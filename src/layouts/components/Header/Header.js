import { useState } from 'react';
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { MessageIcon, NotificationIcon, SearchIcon } from '~/components/Icon'
import { images } from '~/assets/images';

const cx = classNames.bind(styles)
function Header() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className={cx('wrapper')}>
      <div className={cx('form-input')}>
        <SearchIcon className={cx('icon')} />
        <input
          placeholder="Email"
          className={cx('input-text')}
          type="text"
          value={searchValue}
          required
          onChange={(e) => {
            e.target.value = e.target.value.trimStart()
            setSearchValue(e.target.value)
          }}
        ></input>
      </div>
      <div className={cx('actions')}>
        <button className={cx('btn-action')}>
          <MessageIcon />
        </button>
        <button className={cx('btn-notify')}>
          <NotificationIcon />
        </button>
        <span className={cx('avatar-wrapper')}>
          <img src={images.avatar} alt="avatar" className={cx('avatar')} />
        </span>
      </div>
    </div>
  )
}

export default Header;