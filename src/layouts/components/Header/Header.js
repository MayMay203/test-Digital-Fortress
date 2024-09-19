import { useState } from 'react';
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icon';

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
            type="email"
            value={searchValue}
            required
            onChange={(e) => setSearchValue(e.target.value.startsWith())}
          ></input>
        </div>
      </div>
    )
}

export default Header;