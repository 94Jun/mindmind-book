import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navigation-bar/NavBar";
import BookingPage from "./pages/booking/BookingPage";
import CenterInfoPage from "./pages/center-info/CenterInfoPage";
import ConsultingLogPage from "./pages/consulting-log/ConsultingLogPage";
import HomePage from "./pages/home/HomePage";
import OnlineConsultingPage from "./pages/online-consulting/OnlineConsultingPage";
import UserInfoPage from "./pages/user-info/UserInfoPage";
import TeacherInfoPage from "./pages/teacher-info/TeacherInfoPage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/teacher-info" element={<TeacherInfoPage />} />
        <Route path="/center-info" element={<CenterInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-info" element={<UserInfoPage />} />
        <Route path="/online-consulting" element={<OnlineConsultingPage />} />
        <Route path="/consulting-log" element={<ConsultingLogPage />} />
      </Routes>
    </div>
  );
}

export default App;
