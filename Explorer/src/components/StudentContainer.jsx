
import React from "react";
import FormData from "./FormData";
import ListData from "./ListData";
import { useState } from "react";

const StudentContainer = () => {
    const [allListData, setAllListData] = useState([])

    const studentData = (data) => {
        setAllListData((prev) => [...prev, data]);
    }

    return(
        <>
            <FormData data={studentData} />
            <ListData allListData={allListData}/>
        </>
    )
}

export default StudentContainer;