
# Basics of Foundation Grid

## Before You Begin ##

* When you are creating a page using a **TeamSite template**, the outermost row and column are automatically inserted for you. You should only need to add rows with columns when you want to vertically divide the content area.
* Be careful not to put a `.column` directly inside a `.column`, or a `.row` directly inside a `.row` --- when nesting you must alternate rows and columns.

---

## Getting Started ##

1. When you need to divide up a content area, start by adding an element with a class of `.row`. This will create a full width horizontal block to contain vertical columns. Then add `.column` elements within the row. 
2. Foundation is mobile-first. There is no reason to add a class of `.small-12` -- it does the same thing as class `.column`, because we are using a 12-column grid. 
3. Code for small screens first, and larger devices will inherit those styles. There is no reason to repeat identical measurements for each breakpoint: a div with a class of `column small-6 medium-6 large-6 xlarge-6` is no different than a div with just a class of `column small-6`.


```html
<div class="row">
  <div class="small-2 large-4 column"><!-- ... --></div>
  <div class="small-4 large-4 column"><!-- ... --></div>
  <div class="small-6 large-4 column"><!-- ... --></div>
</div>
<div class="row">
  <div class="large-3 column"><!-- ... --></div>
  <div class="large-6 column"><!-- ... --></div>
  <div class="large-3 column"><!-- ... --></div>
</div>
<div class="row">
  <div class="small-6 large-2 column"><!-- ... --></div>
  <div class="small-6 large-8 column"><!-- ... --></div>
  <div class="small-12 large-2 column"><!-- ... --></div>
</div>
<div class="row">
  <div class="small-3 column"><!-- ... --></div>
  <div class="small-9 column"><!-- ... --></div>
</div>
<div class="row">
  <div class="large-4 column"><!-- ... --></div>
  <div class="large-8 column"><!-- ... --></div>
</div>
<div class="row">
  <div class="small-6 large-5 column"><!-- ... --></div>
  <div class="small-6 large-7 column"><!-- ... --></div>
</div>
<div class="row">
  <div class="large-6 column"><!-- ... --></div>
  <div class="large-6 column"><!-- ... --></div>
</div>
```

<div class="row display">
  <div class="small-2 large-4 column"><span class="hide-for-large">2</span><span class="show-for-large">4</span></div>
  <div class="small-4 large-4 column">4</div>
  <div class="small-6 large-4 column"><span class="hide-for-large">6</span><span class="show-for-large">4</span></div>
</div>
<div class="row display">
  <div class="large-3 column"><span class="hide-for-large">full</span><span class="show-for-large">3</span></div>
  <div class="large-6 column"><span class="hide-for-large">full</span><span class="show-for-large">6</span></div>
  <div class="large-3 column"><span class="hide-for-large">full</span><span class="show-for-large">3</span></div>
</div>
<div class="row display">
  <div class="small-6 large-2 column"><span class="hide-for-large">6</span><span class="show-for-large">2</span></div>
  <div class="small-6 large-8 column"><span class="hide-for-large">6</span><span class="show-for-large">8</span></div>
  <div class="small-12 large-2 column"><span class="hide-for-large">full</span><span class="show-for-large">2</span></div>
</div>
<div class="row display">
  <div class="small-3 column">3</div>
  <div class="small-9 column">9</div>
</div>
<div class="row display">
  <div class="large-4 column"><span class="hide-for-large">full</span><span class="show-for-large">4</span></div>
  <div class="large-8 column"><span class="hide-for-large">full</span><span class="show-for-large">8</span></div>
</div>
<div class="row display">
  <div class="small-6 large-5 column"><span class="hide-for-large">6</span><span class="show-for-large">5</span></div>
  <div class="small-6 large-7 column"><span class="hide-for-large">6</span><span class="show-for-large">7</span></div>
</div>
<div class="row display">
  <div class="large-6 column"><span class="hide-for-large">full</span><span class="show-for-large">6</span></div>
  <div class="large-6 column"><span class="hide-for-large">full</span><span class="show-for-large">6</span></div>
</div>

---

## Small Grids

Small grids expand to large screens easier than large grids cram into small screens.

```html
<div class="row">
  <div class="small-2 column">2 <span class="hide-for-small-only">column</span></div>
  <div class="small-10 column">10 column</div>
</div>
<div class="row">
  <div class="small-3 column">3 column</div>
  <div class="small-9 column">9 column</div>
</div>
```

<div class="row display">
  <div class="small-2 column">2 column</div>
  <div class="small-10 column">10 column</div>
</div>
<div class="row display">
  <div class="small-3 column">3 column</div>
  <div class="small-9 column">9 column</div>
</div>

---

## Medium Grid

Medium sized screens will inherit styles from small, unless you specify a different layout using the medium grid classes.

```html
<div class="row">
  <div class="medium-2 column">2 column</div>
  <div class="medium-10 column">10 column</div>
</div>
<div class="row">
  <div class="medium-3 column">3 column</div>
  <div class="medium-9 column">9 column</div>
</div>
```

<div class="row display">
  <div class="medium-2 column">2 column</div>
  <div class="medium-10 column">10 column</div>
</div>
<div class="row display">
  <div class="medium-3 column">3 column</div>
  <div class="medium-9 column">9 column</div>
</div>



# Advanced

## Nesting

You can nest the grids indefinitely, though at a certain point it will get absurd.  When nesting you must *always* put columns inside rows and rows inside of columns.

```html
<div class="row">
  <div class="small-8 column">8
    <div class="row">
      <div class="small-8 column">8 Nested
        <div class="row">
          <div class="small-8 column">8 Nested Again</div>
          <div class="small-4 column">4</div>
        </div>
      </div>
      <div class="small-4 column">4</div>
    </div>
  </div>
  <div class="small-4 column">4</div>
</div>
```

<div class="row display">
  <div class="small-8 column">8
    <div class="row">
      <div class="small-8 column">8 Nested
        <div class="row">
          <div class="small-8 column">8 Nested Again</div>
          <div class="small-4 column">4</div>
        </div>
      </div>
      <div class="small-4 column">4</div>
    </div>
  </div>
  <div class="small-4 column">4</div>
</div>

---

## Offsets

Move blocks up to 11 column to the right by using classes like `.large-offset-1` and `.small-offset-3`.

```html
<div class="row">
  <div class="large-1 column">1</div>
  <div class="large-11 column">11</div>
</div>
<div class="row">
  <div class="large-1 column">1</div>
  <div class="large-10 large-offset-1 column">10, offset 1</div>
</div>
<div class="row">
  <div class="large-1 column">1</div>
  <div class="large-9 large-offset-2 column">9, offset 2</div>
</div>
<div class="row">
  <div class="large-1 column">1</div>
  <div class="large-8 large-offset-3 column">8, offset 3</div>
</div>
```

<div class="row display">
  <div class="large-1 column">1</div>
  <div class="large-11 column">11</div>
</div>
<div class="row display">
  <div class="large-1 column">1</div>
  <div class="large-10 large-offset-1 column">10, offset 1</div>
</div>
<div class="row display">
  <div class="large-1 column">1</div>
  <div class="large-9 large-offset-2 column">9, offset 2</div>
</div>
<div class="row display">
  <div class="large-1 column">1</div>
  <div class="large-8 large-offset-3 column">8, offset 3</div>
</div>

---

## Incomplete Rows

In order to work around browsers' different rounding behaviors, Foundation will float the last column in a row to the right so the edge aligns. If your row doesn't have a count that adds up to 12 column, you can tag the last column with a class of `.end` in order to override that behavior. 

```html
<div class="row">
  <div class="medium-3 column">3</div>
  <div class="medium-3 column">3</div>
  <div class="medium-3 column">3</div>
</div>
<div class="row">
  <div class="medium-3 column">3</div>
  <div class="medium-3 column">3</div>
  <div class="medium-3 column end">3 end</div>
</div>
```

<div class="row display-end">
  <div class="medium-3 column">3</div>
  <div class="medium-3 column">3</div>
  <div class="medium-3 column">3</div>
</div>
<div class="row display-end">
  <div class="medium-3 column">3</div>
  <div class="medium-3 column">3</div>
  <div class="medium-3 column end">3 end</div>
</div>

---

## Collapse/Uncollapse Rows

The `.collapse` class lets you remove column gutters (padding).

There are times when you won't want each media query to be collapsed or uncollapsed. In this case, use the media query size you want and collapse or uncollapse and add that to your row element. Example shows no gutter at small media size and then adds the gutter to column at medium.

```html
<div class="row medium-uncollapse large-collapse">
  <div class="small-6 column">
    Removes gutter at large media query
  </div>
  <div class="small-6 column">
    Removes gutter at large media query
  </div>
</div>
```

<p class="lead">Scale the browser down to a medium size to see the difference.</p>

<div class="row medium-uncollapse large-collapse">
  <div class="small-6 column">
    <div class="callout secondary">
      <p class="show-for-small-only">On a small screen, I have gutters!</p>
      <p class="show-for-medium-only">On a medium screen, I have gutters!</p>
      <p class="show-for-large">On a large screen, I have no gutters!</p>
    </div>
  </div>
  <div class="small-6 column">
    <div class="callout secondary">
      <p class="show-for-small-only">On a small screen, I have gutters!</p>
      <p class="show-for-medium-only">On a medium screen, I have gutters!</p>
      <p class="show-for-large">On a large screen, I have no gutters!</p>
    </div>
  </div>
</div>

---

## Centered column

Center your column by adding a class of `.small-centered` to your column. Large will inherit small centering by default, but you can also center solely on large by applying a `.large-centered` class. To uncenter on large screens, use `.large-uncentered`.

```html
<div class="row">
  <div class="small-3 small-centered column">3 centered</div>
</div>
<div class="row">
  <div class="small-6 large-centered column">6 centered</div>
</div>
<div class="row">
  <div class="small-9 small-centered large-uncentered column">9 centered</div>
</div>
<div class="row">
  <div class="small-11 small-centered column">11 centered</div>
</div>
```

<div class="row display">
  <div class="small-3 small-centered column">3 centered</div>
</div>
<div class="row display">
  <div class="small-6 large-centered column">6 centered, large</div>
</div>
<div class="row display">
  <div class="small-9 small-centered large-uncentered column">9 centered small</div>
</div>
<div class="row display">
  <div class="small-11 small-centered column">11 centered</div>
</div>

---

## Source Ordering

Using these source ordering classes, you can shift column around between our breakpoints. This means if you place sub-navigation below main content on small displays, you have the option to position the sub-navigation on either the left or right of the page for large displays. Prefix push/pull with the size of the device you want to apply the styles to. `.medium-push-#`, `.large-push-#` is the syntax you'll use. Use the number 0 instead to reset a push/pull, such as `.medium-push-0` or `.large-pull-0`.

```html
<div class="row">
  <div class="small-10 small-push-2 column">10</div>
  <div class="small-2 small-pull-10 column">2, last</div>
</div>
<div class="row">
  <div class="large-9 large-push-3 column">9</div>
  <div class="large-3 large-pull-9 column">3, last</div>
</div>
<div class="row">
  <div class="large-8 large-push-4 column">8</div>
  <div class="large-4 large-pull-8 column">4, last</div>
</div>
<div class="row">
  <div class="small-5 small-push-7 medium-7 medium-push-5 column">7</div>
  <div class="small-7 small-pull-5 medium-5 medium-pull-7 column">5, last</div>
</div>
<div class="row">
  <div class="medium-6 medium-push-6 column">6</div>
  <div class="medium-6 medium-pull-6 column">6, last</div>
</div>
```

<div class="row display">
  <div class="small-10 small-push-2 column">10</div>
  <div class="small-2 small-pull-10 column">2, last</div>
</div>
<div class="row display">
  <div class="large-9 large-push-3 column">9</div>
  <div class="large-3 large-pull-9 column">3, last</div>
</div>
<div class="row display">
  <div class="large-8 large-push-4 column">8</div>
  <div class="large-4 large-pull-8 column">4, last</div>
</div>
<div class="row display">
  <div class="small-5 small-push-7 medium-7 medium-push-5 column">7</div>
  <div class="small-7 small-pull-5 medium-5 medium-pull-7 column">5, last</div>
</div>
<div class="row display">
  <div class="medium-6 medium-push-6 column">6</div>
  <div class="medium-6 medium-pull-6 column">6, last</div>
</div>

---

## Block Grids

Block grids are a shorthand way to create equally-sized column. Add a class of the format `.[size]-up-[n]` to change the number of column within the row. By default, the max number of column you can use with block grid are 8. Adding the `.column-block` class to column will apply a bottom margin equal to the width of gutters.

```html_example
<div class="row small-up-2 medium-up-3 large-up-4">
  <div class="column column-block">
    <img src="//placehold.it/600x600" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="//placehold.it/600x600" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="//placehold.it/600x600" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="//placehold.it/600x600" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="//placehold.it/600x600" class="thumbnail" alt="">
  </div>
  <div class="column column-block">
    <img src="//placehold.it/600x600" class="thumbnail" alt="">
  </div>
</div>
```

---