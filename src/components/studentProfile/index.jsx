


const StudentProfile = () => {

    const addingStudent = () => {
        console.log("addingStudent");
    }

    const searchingStudent = () => {
        console.log("searchingStudent");
    }
 
    return(
        <div>
            <h1> Student Profile Page 7</h1>

            <button onClick={addingStudent}> Add new student </button>
            <button onClick={searchingStudent}> Search Student</button>

        </div>
    )
}

export default StudentProfile ;