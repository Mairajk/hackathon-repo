import { useFormik } from "formik"
import * as yup from 'yup';

import {
    getFirestore, collection,
    addDoc, getDocs, doc,
    onSnapshot, query, serverTimestamp,
    orderBy, deleteDoc, updateDoc, where

} from "firebase/firestore";

import { getAuth } from 'firebase/auth'
import { useState } from "react";



const NewClass = () => {

    const [messege, setMessege] = useState("");
    const db = getFirestore();


    const formik = useFormik({
        initialValues: {
            teacherName: "",
            schedule: "",
            classTimings: "",
            secName: "",
            courseName: "",
            batchNum: "",
        },

        validationSchema:

            yup.object({

                teacherName: yup
                    .string("Enter teacher's name")
                    .required("Teacher's name is required")
                    .min(3, "please enter more then 3 characters ")
                    .max(20, "please enter within 20 characters "),

                schedule: yup
                    .string('Enter your schedule')
                    .required('Schedule is required')
                    .min(3, "please enter more then 3 characters ")
                    .max(150, "please enter within 20 characters "),

                classTimings: yup
                    .string("Please enter your class timings")
                    .required("Class timings is required")
                    .min(3, "Minimum 8 characters")
                    .max(100, "please enter within 20 characters "),

                secName: yup
                    .string("Please Enter Section Name")
                    .required("Required")
                    .min(3, "please enter more then 3 characters ")
                    .max(150, "please enter within 20 characters "),

                courseName: yup
                    .string("Please enter your Password")
                    .required("Please select your courseName")
                    .min(3, "please enter more then 3 characters ")
                    .max(150, "please enter within 20 characters "),

                batchNum: yup
                    .string("Please enter your Password")
                    .required("Please enter an URL")
                    .min(3, "please enter more then 3 characters ")
                    .max(100, "please enter within 20 characters "),


            }),

        onSubmit: (values, e) => {
            console.log("values : ", values);

            const savaData = async () => {
                const auth = getAuth();

                try {

                    const docRef = await addDoc(collection(db, (`Class:${values.courseName}-${values.batchNum}`))
                        , {
                            Data: values,
                            user: auth.currentUser.email,
                            createdOn: serverTimestamp(),
                        });
                    console.log("Document written with ID: ", docRef.id);
                    setMessege("Class added successfully. ")
                    // e.resetForm;

                } catch (e) {
                    console.error("Error adding document: ", e);
                }


            }

            savaData();
        }
    });

    return (

        <div className="formDiv">

            <h1> Create New Class </h1>
            <p>{messege}</p>

            <form onSubmit={formik.handleSubmit}>
                <div className="inputDiv">
                    <label htmlFor="teacherName">TeacherName : </label>
                    <input
                        type="text"
                        id="teacherName"
                        value={formik.values.teacherName}
                        placeholder="Enter teacher's name :"
                        onChange={formik.handleChange}
                    />
                    {(formik.touched.teacherName && Boolean(formik.errors.teacherName)) ?
                        <p className="inputError">{formik.errors.teacherName}</p> : <p className="inputError"></p>}
                </div>

                <div className="inputDiv">
                    <label htmlFor="schedule">Schedule : </label>
                    <input
                        type="text"
                        id="schedule"
                        value={formik.values.schedule}
                        placeholder="Enter class schedule:"
                        onChange={formik.handleChange}
                    />
                    {(formik.touched.schedule && Boolean(formik.errors.schedule)) ?
                        <p className="inputError">{formik.errors.schedule}</p> : <p className="inputError"></p>}
                </div>

                <div className="inputDiv">
                    <label htmlFor="classTimings">Class timings : </label>
                    <input
                        type="text"
                        id="classTimings"
                        value={formik.values.classTimings}
                        placeholder="Enter your classTimings :"
                        onChange={formik.handleChange}
                    />
                    {(formik.touched.classTimings && Boolean(formik.errors.classTimings)) ?
                        <p className="inputError">{formik.errors.classTimings}</p> : <p className="inputError"></p>}
                </div>

                <div className="inputDiv">
                    <label htmlFor="batchNum"> Batch No. : </label>
                    <input
                        type="text"
                        id="batchNum"
                        value={formik.values.batchNum}
                        placeholder="Enter Batch number :"
                        onChange={formik.handleChange}
                    />
                    {(formik.touched.batchNum && Boolean(formik.errors.batchNum)) ?
                        <p className="inputError">{formik.errors.batchNum}</p> : <p className="inputError"></p>}
                </div>

                <div className="inputDiv">
                    <label htmlFor="secName"> Enter your Section Name : </label>
                    <input
                        type="text"
                        id="secName"
                        value={formik.values.secName}
                        placeholder="Enter Section Name :"
                        onChange={formik.handleChange}
                    />
                    {(formik.touched.secName && Boolean(formik.errors.secName)) ?
                        <p className="inputError">{formik.errors.secName}</p> : <p className="inputError"></p>}
                </div>

                <div className="inputDiv ">
                    <label htmlFor="courseName"> Course Name </label>

                    <input
                        type="text"
                        id="courseName"
                        value={formik.values.courseName}
                        placeholder="Enter Course Name :"
                        onChange={formik.handleChange}
                    />

                    {(formik.touched.courseName && Boolean(formik.errors.courseName)) ?
                        <p className="inputError">{formik.errors.courseName}</p> : <p className="inputError"></p>}
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}


export default NewClass;