import styles from "./NavList.module.css";
import { Link } from "react-router-dom";
import MainButton from "../../UI/MainButton";
const NavBooking = () => {
  return (
    <div className={styles.booking}>
      <Link to="/booking">
        <MainButton className={styles.button}>상담 예약</MainButton>
      </Link>
    </div>
  );
};

export default NavBooking;
