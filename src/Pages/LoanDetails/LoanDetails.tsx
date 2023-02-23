import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


type detail = {
    eligibilities: [],
    features: [],
    name: string,
}
const LoanDetails = () => {

    const { loanType } = useParams();
    const [details, setDetails] = useState<detail>();

    useEffect(() => {
        fetch(`http://localhost:5000/loans/${loanType}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [loanType]);
    return (
        <div>
            <h1>{details?.name}</h1>
        </div>
    )
}

export default LoanDetails