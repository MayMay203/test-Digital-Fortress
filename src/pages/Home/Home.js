import Button from '~/components/Button';
import styles from './Home.module.scss'
import classNames from 'classnames/bind';
import Table from '~/components/Table';

const cx = classNames.bind(styles)
function Home() {
    return (
      <div className={cx('wrapper')}>
        <h1 className={cx('heading')}>Dashboard</h1>
          <Table/>
        <div className={cx('pagination')}>
          <Button className={cx('btn')}>Previous</Button>
          <span className={cx('title')}>Page 1 of 10</span>
          <Button className={cx('btn')}>Next</Button>
        </div>
      </div>
    )
}

export default Home;