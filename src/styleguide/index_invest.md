# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized vertical column, and don't know how to quick and easily get it all done. Solution: The awesome grid!</p>

---

## Overview

The grid is built around two key elements: rows and column. Rows create a max-width and contain the column, and column create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## Nesting

In the Grid you can nest column down as far as you'd like. Just embed rows inside column and go from there. Each embedded row can contain up to 12 column.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of <div> tags to create vertical column.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 column">...</div>
  <div class="small-6 medium-8 large-9 column">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 column">4</div>
  <div class="small-12 large-4 column">4</div>
  <div class="small-12 large-4 column">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 column">3</div>
  <div class="small-12 large-6 column">6</div>
  <div class="small-12 large-3 column">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 column">2</div>
  <div class="small-12 large-8 column">8</div>
  <div class="small-12 large-2 column">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 column">3</div>
  <div class="small-12 large-9 column">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 column">4</div>
  <div class="small-12 large-8 column">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 column">5</div>
  <div class="small-12 large-7 column">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 column">6</div>
  <div class="small-12 large-6 column">6</div>
</div>

---

## Nesting Rows

In the Grid you can nest column down as far as you'd like. Just embed rows inside column and go from there. Each embedded row can contain up to 12 column.

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

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 column">2</div>
  <div class="small-10 column">10, last</div>
</div>
<div class="row">
  <div class="small-3 column">3</div>
  <div class="small-9 column">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 column">2</div>
  <div class="small-10 column">10, last</div>
</div>
<div class="row display">
  <div class="small-3 column">3</div>
  <div class="small-9 column">9, last</div>
</div>

---