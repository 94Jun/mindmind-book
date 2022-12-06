import Header from "../header/Header";
import Logo from "../header/Logo";
import styles from "./Login.module.css";
import LoginBackground from "./LoginBackground";
import LoginForm from "./LoginForm";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.background_wrap}>
        <LoginBackground />
      </div>
      <div className={styles.login_content}>
        <div className={styles.logo_wrap}>
          <Header />
        </div>
        <h2 className={styles.login_text}>로그인</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
