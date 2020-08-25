import React, {useEffect, useState} from 'react'

const Ticket = (props) => {
    const temp = props.labels;
const temp2 = 
    console.log(temp)

    return (
        <div className="ticket">
            <h1>{JSON.stringify(props.title)}</h1>
            <div id={props.key} className="ticketContent">
            {props.content}
            </div>
            <br></br>
            <p>{JSON.stringify((props.labels))}</p>
            <p>{props.labels && props.labels.map((label) => <p className={label}>{label}</p>)}</p>
            {/* <p>{labels.from((label)=> <button>{label}</button>)}</p> */}
        {/* {JSON.stringify(props.ticki)} */}
            {/* {props.labels.map((label) => 
            && props.labels !== undefined)
            
            <p className={label}>{label}</p>)} */}
        </div>
    );
}

// {JSON.stringify(props.labels)}

export default Ticket;