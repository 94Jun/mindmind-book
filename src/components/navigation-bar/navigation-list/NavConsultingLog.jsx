import { Link } from "react-router-dom";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
const NavConsultingLog = () => {
  return (
    <li>
      <Link to="/consulting-log">
        <div>
          <span>
            <FactCheckOutlinedIcon />
          </span>
          <span>상담 내역</span>
        </div>
      </Link>
    </li>
  );
};

export default NavConsultingLog;
