import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const NavLogOut = (props) => {
  return (
    <li>
      <div onClick={props.onLogOut}>
        <span>
          <LogoutOutlinedIcon color="inherit" />
        </span>
        <span>๋ก๊ทธ์์</span>
      </div>
    </li>
  );
};

export default NavLogOut;
