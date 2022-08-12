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

Im using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to write my commit title and messages. It is possible to configure conventional commit with [Husky](https://www.npmjs.com/package/husky) to lint commit messages. With this, developers will not be allowed to create commit messages outside of the conventional commits convention but I have left this out for now.


## API: Express, Axios and React Query

I've created a tiny server project to serve the JSON with the data to be consumed by the aplication. It is a Express server with only one endpoint `/categories`. On the aplication I've added two dependencies to manage fetching and async treatment of data. For fetching I've decided to use `axios` which as tiny library for data fetching and is very complete. I was tempted on using javascript fetch for this purpose but It came faster to do it this way with react query which is other tiny library to manage asynchronous calls and asynchronous state management. 

I didn't have the need to this point to add Redux for app state management. Because to fullfil the requirements of the technical test it's not necessary, but in a real case scenario where we have several modules or more shared data through the application It would came necessary to add some kind of global application state management or at least React Context.


