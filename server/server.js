//this file combines the express file and the config file to start the server

import config from './../config/config'  //importing the config file
import app from './express'// need to import the express file

app.get("/", (req, res) => {
 res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})


