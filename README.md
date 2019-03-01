# eCommerceReact


<b>Disclaimer: Currently the README file is not updated to reflect the recent commits. README will be completed after project completion.</b> 

NOTES: 

React Fragment: allows us to simulate html tags.
Browser router: which will hold the info for all routes
Switch: used for grouping routes
Route: specific route
Link: anchor tab

# React-Router Utilization

A regular web browser a few years back would work in the following way: a user clicks on a link, it traditionally submits a new request for some new web page from some remote server. The user might click on a link that goes to google.com and it reaches out to google.com, grabs some HTML document from some server and that document is sent back to the users browser where the HTML document appears on the screen. React Routers purpose is to circumvent that process. We are no longer making request to our server to get a web page receiving a web page back and then showing that page to the user, instead React-Router intercepts changes to the URL. When a user clicks on a link, it says "oh I see the user is trying to navigate to a different URL. I'm going to stop that user from navigating to a different page and instead I'm going to manually look at the URL and decide to display a different set of component on the screen based on what that URL is".

When a user clicks on a link or maybe a button that says "create new post", the browser says to the History library "hey, the user just changed the URL. Here's the new the URL or they're trying to visit". The History library takes that new change to the URL. It does some parsing over it and figures out exactly what changed about the URL and then it passes it on to the React-Router library. React-Router receives the new route and its going to decide to show a new set of components on the screen based on exactly what that new route is. Our place in this whole process is to setup that configuration inside React-Router. So we're going to be writing the code that says "hey react-router, if the URL looks like this, then I want you to show this component". Once React-Router has decided what set of component it would like to display based on the URL, its going to say "hey react, it looks like we've got a new set of component to show on the screen please. Please re-render yourself or render all the components that are visible based on this new set of components". In the end, its renders them as content. This is the architecture behind single-page applications (SPA's). The idea behind a SPA is that we're no longer navigating between distinct HTML documents that are being created by some remote web server. Instead we're always dealing with a single HTML document and we're relying upon some javascript to change the set of components that a user sees appearing on the screen.

# React Router Features

We're going to import a couple of things from react-router-dom such as the BrowserRouter. This object interacts with the History library and decides exactly what to do based on a change inside the URL. The term BrowserRouter in particular is saying I want React-Router to look at the entire URL when deciding what different components to show on the screen. The purpose of the RouteComponent is to provide the configuration that will say "hey if the URL looks like this, then I want you show this component and so on." So again, the route object or the route component is all about providing some customization or configuration to react-router.

# Switch Component

The switch component takes in a collection of different routes. So in practice, we usually nest a couple of routes within a switch component. It'll look at all the routes inside of it and then decide to only render the first route that matches the current URL. So we can put our most specific URL in the top of the list.

Within the *Switch* component, we've embedded a number of routes: ProductList, Details, Cart, and Default. Within the **index.js** file, we've embedded a **<router>** tag that serves as parent container for all routes and within those tags has the **app.js** file being called upon in the **index.js** file being rendered in the ReactDOM. 

# Navigation Bar

The first component worked on is the navigation bar which merely consists of the store icon which was imported via cdn for iconfinder and two links routing to the products and cart page. 
<<<<<<< HEAD

# Issues

There are one more thing we want to fix before we start working on the details component of the website; this would lie in the context component. This issue has everything to do with the fact that everytime we work with JS, everytie we assign objects to a variable, we're assigning a reference. 

We have the products which is a property in the state in which we're assining it to an array. Within the array, we have objects embeded. and those objects are assigned as references.

Problem?

- Changing the products in the state is going to change products in the "storeProducts"

Lets set some functionality where we'll get the value for the state first.

**we want extraction of data from the actual data.js file not references. 
=======
>>>>>>> cd047b4492fc50f896cb604488dec0d16ea1d0d6
