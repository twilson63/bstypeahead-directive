# Bootstrap Typeahead Directive for AngularJS

A simple directive wrapper around the Bootstrap Typeahead component

## Requirements

* Bootstrap (2.1.1)
* AngularJS (1.0.2, 1.0.3)

## Goal

The goal of this project is to have a straight forward typeahead component example using angular, that can be forked and customized by developers wanting more specific use cases for their typeahead component.

## Usage

the `bstypeahead` directive takes an array of objects with `id` and `name` properties, and displays the name property in the
code completion and stores the id attribute in the model.  You can set the model programmatically to the id and the name will show up in the input.  This is not a fancy end all be all typeahead control, but it does work well for the use case of storing id and displaying names.

### data.json

```
[
 { "id": 1, "name": "Toronto" },
 { "id": 2, "name": "Montreal" },
 { "id": 3, "name": "Atlanta" },
 { "id": 4, "name": "Charleston" }
]
```

### View 

```
<input type="text" ng-model="foo" bstypeahead="/data.json"></input>
```

### Running the Example

* First install nodejs from [nodejs.org](http://nodejs.org)
* Next install a simple dev server w3

```
npm install w3 -g
```

* Clone the repo

```
git clone git://github.com/twilson63/bstypeahead-directive.git
```

* Change the directory

```
cd bstypeahead-directive
```

* Run the server

```
w3
```

* Open Browser to localhost:3000


### License

MIT

### Contributing

* bug fixes and pull requests are welcome

