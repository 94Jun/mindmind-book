import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link } from "react-router-dom";
const NavLogIn = () => {
  return (
    <li>
      <Link to="/login">
        <div>
          <span>
            <LoginOutlinedIcon />
          </span>
          <span>로그인</span>
        </div>
      </Link>
    </li>
  );
};

export default NavLogIn;
