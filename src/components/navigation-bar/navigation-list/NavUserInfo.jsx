import styles from "./NavList.module.css";
import { Link } from "react-router-dom";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
const NavUserInfo = () => {
  return (
    <li>
      <Link to="/user-info">
        <div>
          <span>
            <PortraitOutlinedIcon />
          </span>
          <span>마이페이지</span>
        </div>
      </Link>
    </li>
  );
};
export default NavUserInfo;
