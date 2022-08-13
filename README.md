# GeekSquare Technical Test by Fran Villar

## Project configuration setup

I have added a lot of devDependencies to achieve the minimum requirements for me
to start coding. I was tempted to use [facebook/create-react-app](https://github.com/facebook/create-react-app)
directly to save time. But I wanted you to see my understanding of project 
creation and configuration. Still, this configuration could be improved and optimized.

What I've done so far: 

* Add Webpack config to build a production bundle and a dev server for development.
* Integrate Babel configs and plugins with Webpack to allow using the last ECMAScript
features.
* Add [React Fast Refresh](https://www.npmjs.com/package/react-refresh) to improve the HMR. This allows us to reload our app without losing our App State. (Sometimes you want to refresh the state but with a manual refresh F5 you can achieve that).
* Add Eslint to apply code linting with recommended rules to improve code cleaning.
* Add Typescript integrated with Eslint and Babel to allow us to write code in Typescript.
* Add Prettier and recommended prettier rules to allow us to autoformat on save our documents and auto fix Eslint problems while writing.
* Add Jest to the project as a Test Runner to allow us to write tests with React Testing Library.
* Add Emotion to Babel config to allow us to write Styled Components.

## Git history and Conventional Commits

I'm using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to write my commit title and messages. It is possible to configure conventional commit with [Husky](https://www.npmjs.com/package/husky) to lint commit messages. With this, developers will not be allowed to create commit messages outside of the conventional commits convention but I have left this out for now.


## API: Express, Axios and React Query

I've created a tiny server project to serve the JSON with the data to be consumed by the application. It is an Express server with only one endpoint `/categories`. On the application, I've added two dependencies to manage fetching and async treatment of data. For fetching, I've decided to use `axios` which is a tiny library for data fetching and is very complete. I was tempted on using javascript fetch for this purpose but It came faster to do it this way with react query which is another tiny library to manage asynchronous calls and asynchronous state management. 

I didn't need to this point to add Redux for app state management. Because to fulfill the requirements of the technical test it's not necessary, but in a real case scenario where we have several modules or more shared data through the application, It would came necessary to add some kind of global application state management or at least React Context.

## Styling solution with Emotion

I have decided to include Emotion to allow me to write CSS in JS. As you can see you can create dynamic styled components like `components/GridContainer` that allow us to have a dynamic grid to create our basic layouts or `components/Typography` to apply font styles to every text.

## useMediaQuery hook for responsiveness

I have created a React hook to know if we are in Mobile or in a Desktop viewport. Is the only custom hook I've decided to create, for now, it simply uses
window match Media with an EventListener attached to it. When we resize the application the hook changes it result value. 

## The category title issue

I've been struggling a bit with an issue with the category title. As you can see in the Figma mockups the category title above the button is always appearing but, as you can see this information is at the category level in the JSON which is correct. But this is creating some difficulties with the Favorites section. As you know, Favorites are not from one category only, to the contrary the favorite list could have elements from different categories.

So we can't know from which category any item in our favorite list if we don't have the category title at the Item level. So I've had to do some tweaks to resolve this. I had to add the property `categoryLevel` to the item when adding it to favorites and also on the default favorites values.

This won't be a problem in a real case scenario because the favorite list should come from our BE and somehow it should have the category with it. Another solution could be changing a bit the design to add a list under the FAVORITES list but I don't feel this necessary as I like the current design. 

Another solution we'll be to order the Favorites items without telling the user, so it will always appear all the items from one category next to all the items of the next category, and so on, but I don't know if this was the UX intention. So favorites structure will be like the JSON structure with categories and items under categories. 

Any of these solutions fix this minor issue of adding this property to the item in the UI.

Hope I've explained myself correctly, if don't I could explain this later on a call.

## Testing

I have created just one test to ensure that the app work as expected. I've included the common use case from the technical test PDF. I had to implement `msw` to mock the API response.


## How to use

It should be simple. You should have Node installed at least Node 12 with npm to launch the application.

1. At the `api-server` folder write down this terminal command: `npm ci && npm start`

2. At the root folder write down this terminal command: `npm ci && npm start`



(note: you don't need to install deps every time you run the app)

Optional: You can check the production build if you want:

1. At the root folder write down this terminal command: `npm run build`

2. After that you should find an HTML under the `dist` folder which you should be able to open with a browser.

