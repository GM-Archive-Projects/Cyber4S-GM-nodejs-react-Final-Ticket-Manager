import React from 'react';
import { Dropdown } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export const DropdownButton = ({ sortTicketsByDate, sortByContentLength }) => (

  <Dropdown className="sortButton">
    <Dropdown.Toggle variant="info" id="dropdown-basic">
      Sort By
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={() => sortTicketsByDate()}>Date</Dropdown.Item>
      <Dropdown.Item onClick={() => sortByContentLength()}>Content Length</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

);

export const CompletedTasksButton = ({ completedTickets, setTicketUnDone, getCompletedTicket }) => {
  const classes = useStyles();
  return (

    <Dropdown className="CompletedTickets">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Completed Tickets:
        {' '}
        {completedTickets.length}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {console.log(completedTickets)}
        {completedTickets.map((ticketCompleted) => {
          { /* ticketTitle = ticketCompleted */ }
          console.log(ticketCompleted);
          return (
            <Dropdown.Item>
              <Button onClick={() => getCompletedTicket(ticketCompleted)}>{ticketCompleted.title}</Button>
              <Button onClick={() => setTicketUnDone(ticketCompleted)} variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
                Undone Ticket
              </Button>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>

  );
};
