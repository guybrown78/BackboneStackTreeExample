# BackboneStackTreeExample

BackboneJS responsive section stack view incorporating a treeview that data binds each item's model attributes to the tree's el and a model details panel.

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

The build process will complete with a launch of the app via localhost:8000
