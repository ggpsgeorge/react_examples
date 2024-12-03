import { useState, useEffect } from "react"

function PatientScroller() {

    const [patients, setPatients] = useState([])
    const [url, setUrl] = useState('http://localhost:8181/api/patient/v1/')

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url)
            const data = await response.json()
            setPatients(data)
            return data
        }

        fetchData()
            .catch(console.error);

    }, [])

    if(!patients.length) {
        return(
            <div>
                <h1>Loading ...</h1>
            </div>
        )
    }

    return (
        <div className="scroller">
            {patients.map((patient) => {
                return(
                    <div className="item">
                        <h1>{patient.name[0].given[0]}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default PatientScroller