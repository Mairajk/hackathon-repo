
import { Routes, Route, Link, Navigate } from "react-router-dom";


import AttendenceData from "../AttendenceData";
import NewClass from "../NewClass";
import StudentProfile from "../studentProfile";

const Navigator = (props) => {



    return (<div className="page">
        <div className="header">
            <h1>Posting App</h1>
            {
                <nav>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/student_profile_page`}>Student Profile</Link></li>
                        <li><Link to={`/attendence_sheet_page`}>Attendence Data</Link></li>
                        <li
                            onClick={() => {
                                props.setState(!props.state)
                            }}>
                            <Link to={`/`}>SignOut</Link></li>
                    </ul>
                </nav>
            }
        </div>

        {

            <Routes>
                <Route path="/" element={<NewClass />} />
                <Route path="/student_profile_page" element={<StudentProfile />} />
                <Route path="/attendence_sheet_page" element={<AttendenceData />} />
                <Route path="*" element={<Navigate to={`/`} replace={true} />} />
            </Routes>

        }

    </div>
    );

};

export default Navigator;
