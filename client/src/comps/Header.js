import React from 'react';
import { DropdownButton, CompletedTasksButton } from './Buttons';

import './Header.css';

export const Header = ({
  inputChangeHandler, restoreHidden, sortTicketsByDate, sortByContentLength, completedTickets, setCompletedTickets, getCompletedTicket, setTicketUnDone, hiddenTickets, ticketsData,
}) => (
  <div id="mainHeader">
    <h1 className="mainHeader">Ticket Manager App</h1>
    <input id="searchInput" className="searchInput" onChange={(e) => inputChangeHandler(e.target.value)} placeholder="Search For Tickets" />
    <button className="restoreHideTickets" id="restoreHideTickets" onClick={() => restoreHidden()}>Restore Hidden Tickets</button>
    <DropdownButton sortTicketsByDate={sortTicketsByDate} sortByContentLength={sortByContentLength} className="sortButton" />
    <br />
    <CompletedTasksButton variant="success" completedTickets={completedTickets} setCompletedTickets={setCompletedTickets} getCompletedTicket={getCompletedTicket} getCompletedTicket={getCompletedTicket} setTicketUnDone={setTicketUnDone} className="CompletedTickets" />
    <div className="hideTicketsCounter" id="hideTicketsCounter">{hiddenTickets.length}</div>
    <div className="hideTicketsCounter">
      Hidden Tickets =
      {hiddenTickets.length}
    </div>
    <div className="availableTickets">
      Available Ticket =
      {ticketsData.length}
    </div>

  </div>
);
