# React Redux Boilerplate

Basic React Redux structures to get our front-end apps off the ground. This is meant to be used within our larger front-end directory where all projects share a single `webpack.config.js`.

This repository includes the following technology:

* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/rackt/redux)
* [React-Redux](https://github.com/rackt/react-redux)
* [Redux-Form](https://github.com/erikras/redux-form)

## Usage

### Step 1: Clone project inside front-end directory

```
git clone git@gitlab.fitness-plus.local:frontend/react-redux-boilerplate.git
```

### Step 2: Rename directory

Change the name of the newly cloned project from `react-redux-boilerplate` to whatever your new front-end app name will be.

### Step 3: Update webpack config

Open `webpack.config.js` in the containing main front-end project.

Add an entry point that comes from your new project:

```
entry: {
  new_project: './new_project/src/index.js'
}
```

Add the project directory to the module loaders `include` whitelist:

```
include: [
            path.resolve(__dirname, 'new_project'),
         ],
```

### Step 4. Configure project

When you include the bundled project file in a page, that page needs to have a `div` element with an ID for rendering the app. Add the ID of that `div` to `index.js`:

```
ReactDOM.render(
  <App />,
  document.getElementById('new_project_id')
);
```
