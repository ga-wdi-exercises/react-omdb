### Step 6: When a User Searches...

- Define a results component that will take in a collection of movie objects and render each individual movie's title and poster
- Refactor your Search Container component to include state relating to whether or not a user has searched
- If a user has searched, instead of rendering the Search component, render a Results components with hard coded data

## Bonus

### Step 7: Connect to the Omdb Api

- With the API key we're using, you don't need an API key, go ahead an look at the [documentation](http://omdbapi.com/) to determine the api's proper usage
- We're going to be querying the movie API based on title to return a collection of results.
- Load in jQuery and use it to make an ajax call to the api endpoint using the user's query
- Pass the movie data to the Results component to be displayed

### Step 8: Add Styles to your React app

- Load in Bootstrap CDN in `index.html`
- Modify UI to include Bootstrap classes
- Create a `styles` directory and make a file for your CSS rule definitions - this will be written in Javascript!
- Load in that file in any component and then use that to apply inline styling

## Double Bonus

### Step 9: Add a Movie Detail UI

- Create a Details component that render information about a movie
- When a user clicks on a movie in the results view, render the movie detail UI
