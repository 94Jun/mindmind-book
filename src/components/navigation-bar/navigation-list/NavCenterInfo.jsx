import styles from "./NavList.module.css";
import { Link } from "react-router-dom";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

const NavCenterInfo = () => {
  return (
    <li>
      <Link to="/center-info">
        <div>
          <span>
            <StoreOutlinedIcon color="inherit" />
          </span>
          <span>센터 소개</span>
        </div>
      </Link>
    </li>
  );
};

export default NavCenterInfo;
