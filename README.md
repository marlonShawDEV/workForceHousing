# ZURB Template for FM Responsive Redesign

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)  

**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is based on the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

### Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/SCarrero/fmzurb.git fmzurb
```

Then open the fmzurb folder in your command line, and install the needed dependencies:

```bash
cd fmzurb
npm install
bower install
```

If you have trouble with admin privileges on your computer try the commands below instead.

```bash
sudo npm install
bower install --allow-root
```

Finally, run `npm start` (or `sudo npm start` if you have admin restrictions) to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

Your finished styleguide will be created in `dist/styleguide.html`, viewable at this URL:

```
http://localhost:8000/styleguide/
```

To create compressed, production-ready assets, run `npm run build`.
