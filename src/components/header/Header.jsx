import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Header = () => {
  return (
    <Link to="/">
      <h1 className={styles.header}>
        <Logo />
        <div className={styles.text}>마인드마인드 예약하기</div>
      </h1>
    </Link>
  );
};

export default Header;
