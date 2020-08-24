import React, {useEffect, useState} from 'react'

const Ticket = (props) => {
    return (
        <div className="ticket">
        {JSON.stringify(props.ticki)}
        </div>
    );
}

export default Ticket;