import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
const NavLogIn = (props) => {
  return (
    <li>
      <div onClick={props.onLogIn}>
        <span>
          <LoginOutlinedIcon />
        </span>
        <span>로그인</span>
      </div>
    </li>
  );
};

export default NavLogIn;
