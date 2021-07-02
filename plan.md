Here is the full path of how this wonderfull MERN stack application is devoloped and what logic and tech's are applied when and where.

Hope this will be helpful :)

SERVER->

Initially the dependencies installed here are ->

body-parser -> enable us to send post requests.
cors -> enable cross origin requests.
express
mongoose
nodemon

Here made a index.js file and then just imported the initial packages

CLIENT->

Initially the dependencies installed here are ->

axios: For making API requests
moment: For date and time;
react-file-base64: convert our images
redux
redux-thunk: for making asynchronous requests

Here made the index.js file and the App.js file and created the basic setup of our react application.

SERVER->

First we will work on our backend ->

- In the index.js file first used app.use for bodyParser and cors to activate them.
- Now setup our cloud database on mongoDB atlas where we deploy a cluster database and once it is deployed we get the url which we store in a var in our index.js file.
- We now setup our mongoose and part it with .then() which returns a promise
