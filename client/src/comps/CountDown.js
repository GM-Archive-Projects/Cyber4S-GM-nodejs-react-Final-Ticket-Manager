import React from "react";
import { ProgressBar } from 'react-bootstrap';



const progressInstance = ({seconds}) => {
    let animatedSeconds = seconds;

    return (
        <ProgressBar animated now={animatedSeconds * 20} variant='danger' label={`${seconds} Seonds Left Before Ticket Mark as Completed`} />
    )

}
export default progressInstance;