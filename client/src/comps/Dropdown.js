import React from "react";
import { Dropdown } from 'react-bootstrap';

const DropdownButton = ({sortTicketsByDate, sortByContentLength }) => {

    return (

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
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

export default DropdownButton;