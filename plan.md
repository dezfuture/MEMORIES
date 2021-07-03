Here is the full path of how this wonderfull MERN stack application is devoloped and what logic and tech's are applied when and where.

Hope this will be helpful :)

# SERVER->

Initially the dependencies installed here are ->

- body-parser -> enable us to send post requests.
- cors -> enable cross origin requests.
- express
- mongoose
- nodemon

Here made a index.js file and then just imported the initial packages

---

# CLIENT->

Initially the dependencies installed here are ->

- axios: For making API requests
- moment: For date and time;
- react-file-base64: convert our images
- redux
- redux-thunk: for making asynchronous requests

Here made the index.js file and the App.js file and created the basic setup of our react application.

---

# SERVER->

## First we will work on our backend ->

- In the index.js file first used app.use for bodyParser and cors to activate them.
- Now setup our cloud database on mongoDB atlas where we deploy a cluster database and once it is deployed we get the url which we store in a var in our index.js file.
- We now setup our mongoose and part it with .then() which returns a promise.

* Now run our server with npm start and it is possible to do so because of the changes made in package.json
* Here as the **bodyParser** was shown the warning of deprecated so we used **express** instead.
* Make a routes/posts.js in which we use to declare the routes of the application, once done with it now in our main index.js we import it as **postRoute** and then use an **express middleware** to connect it.
* Due to this middleware we now have a prefix of **posts** for the '/' route.
* Now make a controllers/posts.js to write the logic and the functionalities of different route paths and also to keep our posts file leaner.

- After that we create a models directory in which in postMessage.js we define our Schema ie. what we want in our posts.
- Now we create new routes like get, post etc.. and write the functions corresponding to them in the controllers/posts.js file.

* MADE the controllers/posts.js routes logic to work and use async-await to handle with promises and also wrapped the code with try-catch

# CLIENT

### NOW MAKING THE FRONTEND LIKE FORMS AND POSTS

- First we make the controllers directory and then in it we make the Forms and the Posts dierectory and make the files Forms.js and Posts.js in the respective directories.
- We also make a styles.js in both the folders it's for css in the form of JS
  - we installed the material UI dependency ie. npm install @material-ui/core

* Now we use material UI components Topology for creative heading stryles, Grow for little animations and then we import our Form and Posts components and use them inside of Grid which is a material ui component kinda responsible for responsiveness of the site.
* Now we write the code for the Form and Posts components
* Make the styles.js file for every component in which we keep our css styles and then imported them to every component.

#### redux

- For making our redux work for incresing the accessibility of the app we first make an api folder im which we import axios.
- Then we make the actions and the reducers directory and also in **src/index.js** we import the **Provider** for providing the redux store app wide then we imported different components from redux and **thunk** from redux-thunk and then we call our **createStore** method in which we pass the reducers and the applyMiddleware in compose.
- So for the reducers logic in **reducers/index.js** we import combineReducers and then export them by passing our **posts** in it.
- Now in **reducers/posts.js** we write the reducers function which take the **state** and the **action** and over here our state is **posts** and also the state is always passed with some default initial value.

* Now we use useDispatch hook which gives the action dispatched and we put it inside our useEffect now also for having action we in our **actions/posts.js** first import api as \* so that every action will be dispatched as an api and there we use switch statement to handle multiple cases.
* Now to bring the actions to our posts.js in the component we use the useSelector hook.
* For connecting the **client** side to the **server** side we in the package.json of the client directory add **proxy**: https://localhost:5000
