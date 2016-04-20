# React OMDB

**See Headers Below For Step By Step Outline**

### Step 0: Examine the Solution

Check out to the solution branch and spend time playing around with the completed exercise. Think about how you would separate your different components and functionality.

```
git checkout solution
npm start
```

### Step 1: Set up a `HelloWorld` Component

Before we start building our React app, let's create a `HelloWorld` component just to make sure that we've tied everything together properly.

- Fork this repository then clone your fork
- `npm install` the dependencies you'll need
- Create and configure your `.babelrc` file
- Create and configure your `webpack.config.js`file
- In your app directory create and configure your `index.html` file
- In your app directory create and configure your `index.js` file to render a HelloWorld component
- Start Webpack and make sure everything is working

### Step 2: Add UI for Home

- Create a Home component that outputs a header and a container element
- Renders that component to the DOM in your app's main `index.js` file

### Step 3: Add UI for Search

- Define a Search component that displays a search box, an inviting button
- Render the Search component in the Home component

### Step 4: Wire up the Search Button

- Define your Search component's initial state
- When a user searches for a movie, reset your component's state to track their query
- Wire up your button to log whatever is in the input field when the button is clicked

### Step 5: Move Search logic to a Container component

- Refactor your Search component so that it only renders a UI based on passed in data
- Define a new container component for Search
- The container Component should handle the business logic for your app's state
- The Search Container should render the Search component

### Step 6: When a User Searches...

- Define a results component that will take in a collection of movie objects and render each individual movie's title and poster
- Refactor your Search Container component to include state relating to whether or not a user has searched
- If a user has searched, instead of rendering the Search component, render a Results components will hard coded data

### Step 7: Connect to the Omdb Api

- With the API key we're using, you don't need an API key, go ahead an look at the [documentation](http://omdbapi.com/) to determine the api's proper usage
- We're going to be querying the movie API based on title to return a collection of results.
- Load in jQuery and use it to make an ajax call to the api endpoint using the user's query
- Pass the movie data to the Results component to be displayed

## Bonus

### Step 8: Add Styles to your React app

- Install `css-loader` and `style-loader` loaders with npm
- Define a new loader in your webpack configuration that targets any css files and applies the css and style loader transformations
- Create a styles directory and make a file for your css rule definitions
- Load in that file in any component and then use that to apply inline styles to React components

## Double Bonus

### Step 9: Add a Movie Detail UI

- Create a Details component that render information about a movie
- When a user clicks on a movie in the results view, render the movie detail UI
