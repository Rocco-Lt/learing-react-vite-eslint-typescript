import './index.less';
import LoginForm from './components/loginForm';

// const loginImg = require('@/assets/images/login_bg.svg');

const Login: React.FC = () => {
  return (
    <div className="login-content">
      <div className="loginBox">
        <div className="login-right">
          <p>
            <svg className="icon icon-title" aria-hidden="true">
              <use xlinkHref="#icon-react"></use>
            </svg>
          </p>
          <p className="title">Rocco Blogs Admin</p>
          <div className="login-form">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
