import styles from './Table.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Table() {
    return (
      <div className={cx('wrapper')}>
        <table className={cx('table')}>
          <thead>
            <tr>
              <th className={cx('heading')}>Project</th>
              <th className={cx('heading')}>Last assessed</th>
              <th className={cx('heading')}>License use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dữ liệu 1</td>
              <td>Dữ liệu 2</td>
              <td>Dữ liệu 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

}

export default Table;