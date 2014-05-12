# grunt-ejs-locals

A Grunt task for compiling [ejs](http://npmjs.org/package/ejs) templates with the taste of `layouts`, `blocks` and `partials`.<br>
This Grunt plugin uses [randometc](https://github.com/RandomEtc)'s [ejs-locals](https://github.com/RandomEtc/ejs-locals).

[![NPM version](https://badge.fury.io/js/grunt-ejs-locals.png)](http://badge.fury.io/js/grunt-ejs-locals)
[![Dependency Status](https://david-dm.org/ixisio/grunt-ejs-locals.png)](https://david-dm.org/ixisio/grunt-ejs-locals)
[![devDependency Status](https://david-dm.org/ixisio/grunt-ejs-locals/dev-status.png)](https://david-dm.org/ixisio/grunt-ejs-locals#info=devDependencies)
[![NPM](https://nodei.co/npm/grunt-ejs-locals.png?downloads=false)](https://nodei.co/npm/grunt-ejs-locals/)

* **[EmbeddedJS Docs](http://embeddedjs.com/)**
* **[How to work with `partials`, `layouts` and `blocks`](https://github.com/RandomEtc/ejs-locals)**


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ejs-locals --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ejs-locals');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4).*

## EJS-locals task

Run this task with the `grunt ejs` command.

### Settings

Task `targets`, `files` and `options` may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


### Usage Examples

Add the task to your config and specify the destination for the compiled file:

```javascript
grunt.initConfig({
  ejs: {
    all: {
      src: ['**/*.ejs', '!_partials/**/*', '!_layouts/**/*'],
      cwd: 'src/',
      dest: 'dist/',
      expand: true,
      ext: '.html',
      options: {
        title: 'EJS-locals',
        headline: 'EmbeddedJS with locals',
        paragraph: 'A Grunt task for compiling ejs templates with the taste of layouts, blocks and partials.'
      }
    }
  }
});
```

**_layouts/default.ejs**:
```html
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <header>
      <%- partial('_partials/header') %>
    </header>
    <main id="content">
      <%- body %>
    </main>
  </body>
</html>
```

**index.ejs**:
```html
<% layout('_layouts/default') -%>

<h1><%= headline %></h1>
<p><%= paragraph %></p>
```

**Compiles to**:
```html
<html>
  <head>
    <title>EJS-locals</title>
  </head>
  <body>
    <header>
      <p>This is a header partial</p> 
    </header>
    <main id="content">
      <h1>EmbeddedJS with locals</h1>
      <p>A Grunt task for compiling ejs templates with the taste of layouts, blocks and partials.</p>
    </main>
  </body>
</html>
```





## Release History

* 0.1.1 update tasks documentation
* 0.1.0 initial release

## License

Licensed under the MIT license.

Copyright (c) 2014 Andreas Klein
