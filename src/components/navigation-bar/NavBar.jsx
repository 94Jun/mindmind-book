import Header from "../header/Header";
import styles from "./NavBar.module.css";
import NavBooking from "./navigation-list/NavBooking";
import NavCenterInfo from "./navigation-list/NavCenterInfo";
import NavOnlineConsulting from "./navigation-list/NavOnlineConsulting";
import NavUserInfo from "./navigation-list/NavUserInfo";
import NavTeacherInfo from "./navigation-list/NavTeacherInfo";
import NavLogOut from "./navigation-list/NavLogOut";
import NavConsultingLog from "./navigation-list/NavConsultingLog";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN, LOG_OUT } from "../../modules/login";
import NavLogIn from "./navigation-list/NavLogIn";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  //로그인 여부 확인(true/false)
  const logInHandler = () => {
    dispatch(LOG_IN());
  };
  const logOutHandler = () => {
    dispatch(LOG_OUT());
    navigate("/", { replace: true });
  };
  let content = isLoggedIn ? (
    <>
      <NavUserInfo />
      <NavConsultingLog />
      <NavLogOut onLogOut={logOutHandler} />
    </>
  ) : (
    <NavLogIn onLogIn={logInHandler} />
  );

  return (
    <div className={styles.nav_bar}>
      <Header />
      <NavBooking />
      <ul className={styles.nav_list}>
        <span className={styles.sub}>마인드마인드 소개</span>
        <NavCenterInfo />
        <NavTeacherInfo />
        <span className={styles.sub}>온라인 상담</span>
        <NavOnlineConsulting />
        <span className={styles.sub}>회원 정보</span>
        {content}
      </ul>
    </div>
  );
};

export default NavBar;
