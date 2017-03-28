### Step 3: Add UI for Search

- Create a new file for your `Search` component.
- Define a `Search` component that renders a search form. This can be a simple form with a single input and submit button.
- Import the `Search` file to your `Home` file.
- Render the `Search` component in the `Home` component.

### Step 4: Wire up the Search Button

- Define your `Search` component's initial state. It should have a `query` value that corresponds to a search term.
- Define a function that is triggered whenever the user submits the Search form. Start by just logging `"clicked!"` to make sure it works.
  - Use an event listener to attach this function to your form. Try googling `onSubmit`.
- Define a function that updates your `query` value in state whenever a change is made to the input field. Try googling `onChange`.
- Update your submit function so that it now logs the `query` value in state.

### Step 5: Move Search logic to a Container component

- Refactor your Search component so that it only renders a UI based on passed in data
- Define a new container component for Search
- The container Component should handle the business logic for your app's state
- The Search Container should render the Search component

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
