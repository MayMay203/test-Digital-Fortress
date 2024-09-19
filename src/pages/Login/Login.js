import styles from './Login.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function Login() {
    return (<div className={cx('wrapper')}>
        Login page
    </div> );
}

export default Login;