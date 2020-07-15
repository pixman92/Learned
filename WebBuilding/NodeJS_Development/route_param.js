//code that takes routed param ('data') -> returns that sent file
app.get('/sendData/:data', async(req, res)=>{
    res.send(req.params.data);
});
