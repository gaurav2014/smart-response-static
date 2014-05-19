smart-response-static
=====================

# Smart Response 2.0 Public Facing Site Static Markup

## Description

This repo holds the html/css/JS markup that will later be integrated into the SmartResponse CMS Templating system. On this project we will be using:
* Twitter Bootstrap for Markup/Layout/Responsiveness
* Backbone.js with Backgrid for JS module management and data management
* Require.js for JS dependency injection
* Bower for 3rd party dependency management
* Grunt (on top of Node.js with NPM) for JS/CSS linting and testing, code processing -- in general you will not need to run this because Travis will run this for you upon code pushes to github
* Git with GitHub for code management/versioning
* Travis-CI for continuous integration

## Getting Started

### GitHub Resources
1. https://help.github.com/articles/set-up-git
2. https://mac.github.com/
3. https://windows.github.com/

### First Steps after setting up git
1. Clone our github repo
2. Download/install Node.js (http://nodejs.org/)
3. From your command line type, npm install -g bower (http://bower.io/)
4. From your command line type, bower install (this will install all of the vendor/3rd party JS files in the assets/js/vendor directory)
5. Any 3rd party libraries that can not be retrieved by Bower are in the assets/js/libs folder and will come down to you when you clone the repo from github.
6. Anything in the vendor folder as well as the whole node_modules folder are not stored in git (they are in the .gitignore file)

### Maintaining Code Cohesiveness

Since there will be many developers from different backgrounds contributing to all aspects of this project, we are going to establish and follow a few guidelines so that way we can all write code in a similar fashion while minimizing the amount of merge issues and (hopefully) bugs/defects.

#### HTML/CSS Layout/Markup

1. We are using Twitter Bootstrap (http://getbootstrap.com/) for the majority of markup, layout, css. This will help facilitate meeting the project's quick turn-around time as well as ensuring that we are all using the same class names, ids, semantic markup structures, grid layouts, etc. So instead of laying out items with your own floats, etc, instead use Boostrap's extensive grid layout system (http://getbootstrap.com/css/#grid). We will rely on their grid system, for the most part and where-ever we can, for the responsiveness of the site.
2. Try to use CSS where possible instead of JS or images. (e.g. css animations instead of JS powered where possible, CSS drop-shadows instead of images, CSS shapes instead of images, etc)
3. We are using rgb(a) for colors instead of hexidecimal. See http://hex2rgba.devoth.com/ for easy conversions.

Do not worry about the number of files, they will all be concatenated into 1 and minified later.

#### JavaScript

With multiple developers working at the same time, JS can quickly turn into spaghetti code. The goal is to NOT develop a monolithic, large site, but rather a modular app.

1. Use require.js for dependency injection. There should be 1 entry point to all of our js code.
2. Use BackBone.js (http://backbonejs.org/) to structure any of the JS code we write. This will ensure we are all using the same eventing system, declaring event handlers in the same way and in the same location of all the scripts (the events object). This will also set us up for the future to move toward the site being push-state instead of relying on full=page refreshes.
3. Try to reuse Bootstrap plugins where ever it is feasible (e.g. reuse bootstrap modal if it meets the needs of the site)

Do not worry about the number of files, they will all be concatenated into 1 and minified later.

#### Code Management, testing, continuous integration
1. We are using git and github for source control.
2. We are using Travis-CI for continuous integration.
3. We are using Kanbanize (an agile KanBan board) to assign tasks.
3. We will work in our own feature/bug branches when working and will then push up to github, whereupon Travic-CI will run our unit tests and JShint to ensure we don't merge any code that will disrupt code in our develop branch. Upon a successful build, your code will be delivered to my integration server (to be set up still), where you can see your changes and an email will go out to let the project stakeholders know that we can merge your code. We will then merge your code into develop, and the merged code will be migrated to the integration server.
4. We will name our feature/bug branches after our Kanbanize task number, eg: feature/20-social-media-widget
