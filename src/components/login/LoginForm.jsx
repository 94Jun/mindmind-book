import MainButton from "../UI/MainButton";
import styles from "./Login.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../../modules/login";
import { useNavigate } from "react-router-dom";
import { SET_CURRENT_USER } from "../../modules/user";

import LoginGoogle from "./LoginGoogle";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.user.userList);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(true);
  const [error, setError] = useState("");
  const changeEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEnteredEmailIsValid(true);
    } else {
      setEnteredEmailIsValid(false);
    }
  };
  const blurEmailHandler = () => {
    if (enteredEmail.includes("@") && enteredEmail.includes(".")) {
      setEnteredEmailIsValid(true);
    } else {
      setEnteredEmailIsValid(false);
    }
  };
  const changePasswordHandler = (e) => {
    setEnteredPassword(e.target.value);
    if (e.target.value.trim().length > 5) {
      setEnteredPasswordIsValid(true);
    }
  };
  const blurPasswordHandler = (e) => {
    if (e.target.value.trim().length < 6) {
      setEnteredPasswordIsValid(false);
    }
  };

  const submitLoginFormHandler = async (e) => {
    e.preventDefault();
    if (enteredPassword.trim().length < 6) {
      setEnteredPasswordIsValid(false);
      if (!enteredEmail.includes("@") || !enteredEmail.includes(".")) {
        setEnteredEmailIsValid(false);
      }
      return;
    }
    if (!enteredEmail.includes("@") || !enteredEmail.includes(".")) {
      setEnteredEmailIsValid(false);
      return;
    }
    // ????????? ??????

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        enteredEmail,
        enteredPassword
      );
      //????????? ??????(????????? catch??? ?????????)
      dispatch(LOG_IN(userCredential.user.uid));
      dispatch(SET_CURRENT_USER(userCredential.user.uid));
      navigate("/", { replace: true });
      console.log(userCredential);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      //????????? ?????? ??? ?????? ?????? ??????
    }
  };
  return (
    <form className={styles.login_form} onSubmit={submitLoginFormHandler}>
      <div className={styles.login_input_wrap}>
        <input
          type="text"
          className={styles.login_input}
          placeholder="?????????"
          onChange={changeEmailHandler}
          onBlur={blurEmailHandler}
          value={enteredEmail}
        />
      </div>
      <p
        className={`${styles.invalid_text} ${
          !enteredEmailIsValid && styles.visible
        }`}
      >
        ???????????? ?????? ????????? ???????????????.
      </p>
      <div className={styles.login_input_wrap}>
        <input
          type="password"
          className={styles.login_input}
          placeholder="????????????"
          onChange={changePasswordHandler}
          onBlur={blurPasswordHandler}
          value={enteredPassword}
        />
      </div>
      <p
        className={`${styles.invalid_text} ${
          !enteredPasswordIsValid && styles.visible
        }`}
      >
        ??????????????? 6?????? ???????????????.
      </p>
      <div className={styles.find_wrap}>
        <span className={styles.find_password}>????????? ??????</span>
        <span> / </span>
        <span className={styles.find_password}>???????????? ??????</span>
      </div>
      <div className={styles.login_btn_wrap}>
        <MainButton className={styles.login_btn}>?????????</MainButton>
      </div>
      <div className={styles.or}>or</div>
      <div className={styles.google_login_btn_wrap}>
        <LoginGoogle />
      </div>
      <div className={styles.sign_up_wrap}>
        <span>?????? ????????? ?????????????</span>
        <span className={styles.sign_up}>????????????</span>
      </div>
    </form>
  );
};

export default LoginForm;
