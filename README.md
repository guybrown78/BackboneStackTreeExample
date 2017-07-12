# BackboneStackTreeExample

Example of a recursive backbone tree view and model. Each instance of the the view is initiated with it's instance of the model item. To demonstrate the binding of the model/view instances, the tree is rendered in a split screen section stack that is responsive. The first section renders the tree, the second section renders a view that is based on the selected tree node model. Each model has a genericCount and canEdit attribute. If the CanEdit === true, the second section allows you to alter the genericCount attribute. all views are then updated on the change:genericCount event

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The example uses gruntJS to build the JSscripts and SASS/RUBY


### Installing

To build the example - From the same directory as the project's Gruntfile and package.json, install the node dependancies

```
npm install
```

Once that's done, add this line to the existing directory

```
grunt
```

NB: The example development architecture is so that it allows for several applications to be built around the core js. In this example, the app resides in 'example' folder and builds to the same. If you add multiple applications, the build for individual applications can be triggered seperately.

To build this example app seperately;

```
grunt exampleApp
```

The build process will complete with a launch of the app via localhost:8000. All API calls and authorization has been stripped out. The JSON that renders the tree and item data view is static and resides in 'testjson'.
The tree loads the root level and then requests each item's children (if not already loaded) when the node is selected to open. The children are loaded on each items 'itemID'.
