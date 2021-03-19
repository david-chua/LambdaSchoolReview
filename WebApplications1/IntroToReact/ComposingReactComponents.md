# Composing React Components

## Overview

When JavaScript was first introduced, inserting it into a web application meant writing code inside of a script tag inside of an HTML file. The script ran sequentially. That is from top to bottom. Back then, if you wanted to use the same code in another project, you had to copy and paste it. There were performance issues - namely, functions and variables were all global. If you weren't careful, you could quickly see the trouble with declarations holding unexpected values. Eventually, including a src attribute did allow for more reusability, but it was still dependent on order and still globally scoped.

Then over a decade ago, developers used module pattern like IIFE( Immediately Invoked Function Expressions). This function runs as soon as it is defined. While this keeps the global space tidy and grants privacy to any inner variables, it's somewhat fragile and none too eloquent.

```
(function(){
  // lexically enclosed function statement
})();
```

### Server side JS:

The release of Node.JS in 2009 meant that JavaScript could now execute outside of the browser. With the adoption of a common JavaScript specified standard library known as CommonJS, we now have defined terms for sending data to and from our file systems. These advances were complete game-changers for JS developers but all still relied heavily on third party bundlers and transpilers to address common issues. Tools like webpack and rollup would compile packs of modules and assign any missing dependencies before sending them off to the browser. Transpilers like Babel handle translating source code for the browser and convert the latest features of ES6 into compatible ES5. While handy, all of these require downloading, updating and configuring.


### JS Modules (ECMAScript modules)

This brings us to today. While past methods relied on specific function or third party libraries, with the latest version of JS, we can now export functions, data, components from our files by merely prefixing the **export** keyword. Then, when we want to bring in such feature into our file, we use the **import** keyword.


#### Follow Along

**export** - exports a single named function that can now be imported into another module using the import keyword

```
export const emphasize = str => {
  return str.toUpperCase();
};
```

When **export default** is specified (either inline or at the end of the file) the declaration that follows is exported by default and additional modules will need to be exported (and imported) by name.

```
const emphasize = str => {
  return str.toUpperCase();
};

export default emphasize;
```

Multiple items exported from one module can then either be imported into separate modules or can all be extracted for use with object destructuring in the import declaration

When set up properly, this pattern is incredibly efficient; the majority of errors being syntactical, or from renaming or changing your file structure. Another advantage of modules is that top-level variables do not pollute the global object. In addition to connecting to our project files, bringing in a library, or an external component to our project is a matter of downloading it with our CLI and then directly importing it to our file. Fonts, loaders, middleware, pretty much everything you need.

Importing a file/module starts with declaring the import keyword followed by the name of the import, then the from keyword followed by the module specifier. The module specifier usually is a file path or an npm module name.

#### Import examples

* A single named exports

```
import { a } from './directory/fileName';
```

* Multiple named exports

```
import { item1, item2, item3 } from './directory/items.js';
```

* Exported as default

```
import Component from './folderName/Component.js'
```


#### File path specification

The prefixing './' on the file URL points to a unique location of your file system. It indicates the file for import is exported elsewhere in the current directory. When the file is read, the loader knows where it is located in the directory tree. Adding the additional  dot ('../') to the path will indicate a location one directory higher.

File Location

* Current Directory - ./
* Parent Directory -  ../
* Parent of parent directory - ../../
