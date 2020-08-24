const express = require('express');
const fs = require('fs').promises
const app = express();
app.use(express.json());
module.exports = app;

app.get('/api/tickets/', async(req, res)=> {
    const content = await fs.readFile('./data.json');
    const tickets = JSON.parse(content);
    if(!req.query.searchText){
        res.send(tickets);
    } else {
        const filterText = tickets.filter((text) => 
        text.title.toLowerCase().includes(req.query.searchText.toString()))
        res.send(filterText)
    }      
});

app.post('/api/tickets/:ticketId/done', async(req,res)=>{
    const content = await fs.readFile('./data.json')
    let tickets = JSON.parse(content);
    try {
        const newTicket = tickets.map((item)=>{
            if(item.id === req.params.ticketId){
                item.done = true;
            }
            return item;
        });
    tickets = JSON.stringify(newTicket);
    await fs.writeFile('./data.json', tickets);
    res.send( { updated: true });
    }
    catch (error) { res.send({ updated: false }); }
    });
  
  app.post('/api/tickets/:ticketId/undone', async (req, res) => {
    const content = await fs.readFile('./data.json');
    let tickets = JSON.parse(content);
    try {
      const data = tickets.map((item) => {
        if (item.id === req.params.ticketId) {
          item.done = false;
        }
        return item;
      });
      tickets = JSON.stringify(data);
      await fs.writeFile('./data.json', tickets);
      res.send({ updated: true });
    } catch (e) { res.send({ updated: true }); }
  });