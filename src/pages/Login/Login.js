import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { EmailIcon, PasswordIcon } from '~/components/Icon';
import Button from '~/components/Button';
import { images } from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles)
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const formRef = useRef(null)
    const navigate = useNavigate()

      const handleLogin = () => {
        if (formRef.current.checkValidity()) {
          navigate(`${config.routes.dashboard}`)
        }
    }
    
    return (
      <div className={cx('wrapper')}>
        <div className={cx('content')}>
          <h1 className={cx('heading')}>
            Hello, <span>Digital Fortress</span>
          </h1>
          <p className={cx('desc')}>Log in to platform to start creating magic.</p>
          <form ref={formRef} className={cx('form')}>
            <div className={cx('form-input')}>
              <EmailIcon className={cx('icon')} />
              <input
                placeholder="Email"
                className={cx('input-text')}
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className={cx('form-input')}>
              <PasswordIcon className={cx('icon')} />
              <input
                placeholder="Password"
                className={cx('input-text')}
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
              ></input>
            </div>
            <div className={cx('row')}>
              <div className={cx('remember-wrapper')}>
                <input type="checkbox"></input>
                <span className={cx('remember-text')}>Remember me</span>
              </div>
              <Link className={cx('link')} to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" primary className={cx('button')} onClick={handleLogin}>
              Login
            </Button>
            <div className={cx('bottom')}>
              <span className={cx('desc')}>Don't have account?</span>
              <Link className={cx('link')} to={'/signup'}>
                Sign up
              </Link>
            </div>
          </form>
        </div>
        <div className={cx('image-wrapper')}>
          <img src={images.login} alt="login-image" className={cx('login-image')}></img>
          <div className={cx('text')}>
            <p className={cx('title')}>Digital Fortress has been a game-changer for our content creation process.</p>
            <p className={cx('title')}>
              The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
            </p>
            <span className={cx('author')}>Lily Alisson</span>
            <span className={cx('position')}>CMO at Digital Fortress</span>
          </div>
        </div>
      </div>
    )
}

export default Login;