import React from "react";
import { Dropdown } from 'react-bootstrap';
import getTicket from './../apis/api'
export const DropdownButton = ({sortTicketsByDate, sortByContentLength}) => {

    return (

            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Sort By  
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => sortTicketsByDate()}>Date</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortByContentLength()}>Content Length</Dropdown.Item>
                    <Dropdown.Item  onClick={() => {
                        return sortTicketsByDate()}
                        }>Uncompleted Tickets</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

    )

}

export const CompletedTasksButton = ({completedTickets, setcompletedTickets, getCompletedTicket}) => {
    
    return (

        <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Completed Tickets: {completedTickets.length}  
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {console.log(completedTickets)}
            {completedTickets.map((ticketCompleted) => {
                {/* ticketTitle = ticketCompleted */}
                console.log(ticketCompleted)
                return (<Dropdown.Item onClick={() => getCompletedTicket(ticketCompleted)}>{ticketCompleted.title}</Dropdown.Item>)
            })}
            </Dropdown.Menu>
        </Dropdown>

    )
}
