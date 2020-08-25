//API Calls To Use
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { TICKETS, SEARCHTEXT } from './consts'

axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.validateStatus = (status) => status >= 200 && status < 300;

export const getTickets = async () => {
    return await axios.get(TICKETS)
}

// export const searchTickets = async (input) => {
//     return await axios.get(SEARCHTEXT + input)
// }
