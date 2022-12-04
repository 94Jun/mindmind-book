import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo_wrap}>
      <img src="/images/header_logo.png" alt="로고" />
    </div>
  );
};

export default Logo;
