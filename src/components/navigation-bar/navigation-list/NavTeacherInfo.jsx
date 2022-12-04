import styles from "./NavList.module.css";
import { Link } from "react-router-dom";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";

const NavTeacherInfo = () => {
  return (
    <li className={styles.teacher_info}>
      <Link to="/teacher-info">
        <div>
          <span>
            <FaceOutlinedIcon color="inherit" />
          </span>
          <span>선생님 소개</span>
        </div>
      </Link>
    </li>
  );
};

export default NavTeacherInfo;
