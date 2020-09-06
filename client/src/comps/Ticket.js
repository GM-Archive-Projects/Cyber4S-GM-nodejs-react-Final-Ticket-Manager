import React, { useState } from "react";
import "./Ticket.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import LinearWithValueLabel from "./LinearWithValueLabel";

const Ticket = ({
	ticket,
	hideTicketsHandler,
	setTicketUnDone,
	setTicketDone,
	getDate,
	progress,
	setProgress,
}) => (
	// const [doShow, setDoShow] = useState(false)
	<div className="ticket">
		<h2 className="title">{JSON.stringify(ticket.title)}</h2>
		<div className="date">{getDate(ticket.creationTime).toString()}</div>
		<br />

		<div id={ticket.id} className="ticketContent">
			<br />
			{ticket.content}
		</div>
		<br />
		<div>
			{ticket.labels &&
				ticket.labels.map((label) => <div className="label">{label}</div>)}
		</div>
		<br />
		<button
			className="hideTicketButton"
			onClick={() => hideTicketsHandler(ticket)}
		>
			Hide
		</button>
		<Button
			className="changeTicketState"
			variant={ticket.done ? "success" : "danger"}
			onClick={
				ticket.done
					? () => setTicketUnDone(ticket)
					: () => setTicketDone(ticket)
			}
		>
			{" "}
			{ticket.done ? "Undone" : "done"}
		</Button>
		{ticket.done ? (
			<LinearWithValueLabel
				className="timer"
				value={10}
				seconds={progress}
				setProgress={setProgress}
			/>
		) : undefined}
	</div>
);

export default Ticket;
