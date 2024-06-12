const express = require("express");
const path = require("path");
const app = express();
const assetsRouter = require("./server/assets-router");app.use("/src", assetsRouter); //get from server/assets-router.js


app.use("/", express.static(path.join(__dirname, "public")));
//express.static middleware is used to serve static files from the public directory at the root of the server. This means that any files in the public directory can be accessed directly via the browser.
app.get("/api/v1", (req, res) => {
 res.json({
  project: "React and Express Boilerplate",
  from: "Vanaldito",
 });
});
//API Endpoint: A GET endpoint at /api/v1 is created. When this endpoint is hit, it responds with a JSON object.


app.get("/*", (_req, res) => {
 res.sendFile(path.join(__dirname, "public", "index.html"));
})
//Wildcard Route catches all other routes and serves the index.html file. This is necessary for client-side routing to work properly. The index.html file is served from the public directory.


const { PORT = 5001 } = process.env;
app.listen(PORT, () => {
 console.log();
 console.log(` App running in port ${PORT}`);
 console.log();
 console.log(` > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
//Starting the Server: The server is started on the port specified by the PORT environment variable, or port 5000 if PORT is not set. It logs a message to the console when the server starts.
