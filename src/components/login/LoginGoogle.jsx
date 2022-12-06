import styles from "./Login.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { SET_CURRENT_USER, ADD_USER } from "../../modules/user";
import { LOG_IN } from "../../modules/login";
import { useNavigate } from "react-router-dom";
const LoginGoogle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addUserAsync = async (user) => {
    console.log("added complete");
    const addedUser = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      signUpDate: new Date().toLocaleDateString(),
      timestamp: new Date().valueOf(),
      authLevel: 1,
      mySchedule: [],
      phone: "",
      region: "",
    };
    try {
      await setDoc(doc(db, "userList", addedUser.uid), addedUser);
      dispatch(ADD_USER(addedUser));
    } catch (e) {
      console.log(e.message);
    }
  };
  const loginGoogleHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userListRef = doc(db, "userList", user.uid);
      const userListSnap = await getDoc(userListRef);
      if (!userListSnap.exists()) {
        addUserAsync(user);
      }
      //첫 로그인인 경우(해당 uid를 가지는 userList 정보가 db에 없는 경우) 추가

      dispatch(LOG_IN(user.uid));
      dispatch(SET_CURRENT_USER(user.uid));
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e.message);
      //로그인 실패 화면 추가
    }
  };
  return (
    <button
      className={styles.google_login_btn}
      type="button"
      onClick={loginGoogleHandler}
    >
      <div>
        <span className={styles.google_icon}>
          <img src="https://img.icons8.com/color/24/null/google-logo.png" />
        </span>
        <span>구글 아이디로 로그인</span>
      </div>
    </button>
  );
};

export default LoginGoogle;
