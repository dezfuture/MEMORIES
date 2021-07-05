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

- First we make the **components** directory and then in it we make the Forms and the Posts dierectory and make the files Forms.js and Posts.js in the respective directories.
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

#### Making the form

- In Form.js we import the component from materialUI and one of them is Paper which is basically a div with a whittish background.
- Using material UI components we design the form and also used the css classes we listed in the styles.js, we used the spread operator to keep the old properties of the post object and only override the changed one, and also we used the destructured **{base64}** to convert the image to file.

* To dispatch the **CREATE** action we first in the api file make an axios fetch request and then in the actions/posts.js we write the action creator for the createPost and then in the reducers/posts.js in the case of CREATE we return the spread post is **...post** and the action payload.
* Then in the form.js we first import the useDispatch hook and also createPost from actions and then in the handleSubmit function we pass first e.preventDefault() and then dispatch the postData which we get from the useState.
* For now we test our connections and submit the form once to check everything's going well or not and we see an array on the console and on Mongo Atlas we se that an object is created so now it's verified that our backend and the frontend are working synchronously.

#### Posts

- Here we now start working on displaying our -> **posts**
- First in the Posts.js we import some of material ui components and also the we use the following components to structure our cards in a responsive grid layout in which we pass our **Post** component **mapped** to every id and then in the **Post** component we now handle the appearance of the memory card ie. the image, the ovelay, like , delete , hashtags and in all this setup materail UI's icons and componnets are used extensively.
- We also from the SVGBackgrounds.com choose a style and then import it to the index.css for the background.

---

#### SERVER

- we make a new route **router.patch()** which is used to update the existing document.
- Then in the controllers/posts.js file we define the updatePost controller in which first we destructure our id and also take the post from **req.body** which is provided from the frontend and then if the id is not valid we send Error(404) else we create an updated post with the id and set **new: true** so our changes are saved and then we just do res.json()

---

#### CLIENT

- Here we have to ensure that when the 3 dots on the top right corner of the post are clicked we get the id of that post and then the form changes to update the post.
- So in **Post.js** we see we have that edit button but for now in here we do not use redux just pure react, so to do so we go to the highest component the App.js and over there use useState and then the currentId and setCurrentId to form and posts components and in posts through prop drilling to **Post**.
- we pass the setCurrentId to the onClick method in the **edit->'...'** div and then in the form we set that on handleSubmit if we have the currentId then the post is requested to be updated and therefore we send a new action creator updatepost with the id and post and now first in api/index.js we set the **axios** method and then in the actions/posts.js we write the action function now we head to the reducers and in there in posts.js we make the case of UPDATE and pass the map which as we knoe returns an array.
- In Form.js now we import useSelector and from which we just need the post that needs to be updated so we run a ternary operator and call the **.find** method to find the requires post on the bases of id.

* Also in Form.js we use useEffect to send post data if there is any change in the post then useEffect will be exexuted and also wrote the clear() function.

### Adding Delete Feature

---

##### SERVER:

- First in the routes we state the delete route and then in the controllers we write the delete code with **findbyIdAndRemove**.

##### CLIENT:

- Here first we in our Api state the axios query and then in actions/posts.js we write the deletePost logic and then in the reducers we write the **case 'DELETE'** and finally then in the post.js import useDispatch and the deletePost action and in the onClick method of the delete button pass the dispatch function with the **id** of the post deleted.

---

##### We repeat a similar cycle as delete for adding the Like functionality.

##### added some quick fixes such as the hashtags problem and then the spacing between the like button.

##### added the constants/actionTypes to avoid some errors on big scale.

## Adding Login with Email(JWT) and google auth

#### CLIENT

- The dependencies installed are:
  - jwt decode
  - react-google-login

#### Server

- The dependencies installed are:
  - bcryptjs
  - jsonwebtoken

#### CLIENT

- First we focus on the navbar component and for that we cut that appBar in the App.js and make a new file in Navbar/Navbar.js and there we imported some other material ui components and also we made a styles.js file in the Navbar folder and also we import that too after using these components we use ternary operator to render the **Sign In** and the **Logout** button and now we render the navbar in App.js.
- Then we take out the remaining component being rendered in the App.js in order to make our App file lean and we shift this code to Home/Home.js and over there we also import the hooks been rendered.
- Now we also make a Auth/Auth.js file in which we just output Auth for now.
- Now we in App.js import all these three components and also we import **BrowserRouter** ,**Switch** ,**Route** from react-router-dom and set up our routes.
- This now completes the initial layout.
