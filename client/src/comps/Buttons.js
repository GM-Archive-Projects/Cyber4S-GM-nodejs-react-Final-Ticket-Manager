import React from "react";
import { Dropdown } from 'react-bootstrap';
import getTicket from './../apis/api'
export const DropdownButton = ({sortTicketsByDate, sortByContentLength }) => {

    return (

            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Sort By  
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => sortTicketsByDate()}>Date</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortByContentLength()}>Content Length</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Completed Last</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

    )

}

export const CompletedTasksButton = ({completedTickets, setcompletedTickets, getCompletedTask}) => {
    
    return (

        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Completed Tasks: {completedTickets.length}  
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {completedTickets.map((ticketCompleted) => {
                return (<Dropdown.Item onClick={getCompletedTask}>{ticketCompleted.title}</Dropdown.Item>)
            })}
            </Dropdown.Menu>
        </Dropdown>

    )
}
