import styles from "./NavList.module.css";
import { Link } from "react-router-dom";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
const NavOnlineConsulting = () => {
  return (
    <li>
      <Link to="/online-consulting">
        <div>
          <span>
            <QuestionAnswerOutlinedIcon />
          </span>
          <span>온라인 상담</span>
        </div>
      </Link>
    </li>
  );
};

export default NavOnlineConsulting;
