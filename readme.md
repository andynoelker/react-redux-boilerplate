# React Redux Boilerplate

Basic React Redux structures to get our front-end apps off the ground.

## Usage

### Step 1: Clone project inside front-end directory

```
git clone http://192.168.9.32/frp-developers/react-redux-boilerplate.git
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
