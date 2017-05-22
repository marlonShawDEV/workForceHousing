# ZURB Template for FM Responsive Redesign

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)  

**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is based on the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- Style Sherpa style guide generator
- For production builds:
  - CSS compression
  - JavaScript compression & concatenation
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

### Setup

To manually set up the template, first download it with Git. If you have are behind a corporate firewall and have trouble with Git, update your proxy settings:

```bash
git clone https://github.com/SCarrero/fmzurb.git fmzurb
```

Then open the fmzurb folder in your command line, and install the needed dependencies. If you have are behind a corporate firewall and have trouble with npm or bower, update your proxy settings.

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

Before you start making asny changes, create your own git branch for version control.

```bash
git checkout -b branchname
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

Your finished styleguide will be created in `dist/styleguide.html`, viewable at this URL:

```
http://localhost:8000/styleguide/
```

To create compressed, production-ready assets, run `npm run build --production`.


### Developer SASS Notes

- Do not include browser-prefixes in the scss, they will be generated for you.
- If you are designing a variation of an element, add the new styles to the appropriate scss file.  If you are designing a new "widget" that is unique in purpose from existing elements, create a new scss file for it and update app_corp.css to include it.
- When the production code is generated, all white space and comments are trimmed, so format your code for ease of readability using multiple lines and indentations for each style definition, and use comments whenever you need to include explanation for other developers. 
- Avoid the use of the & to concatenate strings in your SCSS classes, avoid nesting styles, and avoid overriding existing styles (always search through all files to insure that the style you are creating isn't already defined). 
- Whenever possible (and when not conflicting with foundation class names) follow the SMACSS methodology: keep all styles lowercased, use hyphens instead of underscores, and aim for block-element-modify order (for example class footer-promo-cta). 