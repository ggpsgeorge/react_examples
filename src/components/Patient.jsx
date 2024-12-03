import { useEffect } from "react";
import { useState } from "react";

function Patient() {

    const [patient, setPatient] = useState(null)
    const [url, setUrl] = useState('http://localhost:8181/api/patient/v1/patient-1')

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url)
            const data = await response.json()
            setPatient(data)
            return data
        }

        fetchData()
            .catch(console.error);

    }, [])

    if(patient) {
        return (
            <div>
                <h1>{patient.name[0].given[0]}</h1>
            </div>
        );
    } else {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
}

export default Patient;