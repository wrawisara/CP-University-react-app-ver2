import MiddleSide from "./components/MiddleSide/MiddleSide";
import Navbar from "./components/Navbar/Navbar";
import './dashboard.scss'
import Link from 'react-router-dom'
import CourseTypeGraph from "./components/CourseTypeGraph/CourseTypeGraph";
import BarChart from "./components/BarChart/BarChart";
import RightSide from "./components/RightSide/RightSide";

function Dashboard(){
    return(
    <div className="Dashboard">
        <div className="dashboardleft">
            <Navbar/>
            <MiddleSide/>
            <div className="dashboardright">
            <RightSide/>
            </div>
        </div>
    </div>
    );

}
export default Dashboard;