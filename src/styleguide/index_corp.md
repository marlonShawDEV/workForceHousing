# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized vertical columns, and don't know how to quick and easily get it all done. Solution: The awesome grid!</p>

---

## Overview

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## Nesting

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of <div> tags to create vertical columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

## Nesting Rows

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

```html
<div class="row">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>
```

<div class="row display">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #00a6e2"></span>
      #00a6e2<br>
      $cerulean
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #97bb35"></span>
      #97bb35<br>
      $sushi
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #a4c745"></span>
      #a4c745<br>
      $celery
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ffb718"></span>
      #ffb718<br>
      $buttercup
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ff6c00"></span>
      #ff6c00<br>
      $blaze
    </div>
  </div>
</div>
<br>
<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #cf0a2c"></span>
      #cf0a2c<br>
      $crimson
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #00a19a"></span>
      #00a19a<br>
      $niagara
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #457bbe"></span>
      #457bbe<br>
      $steel
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #725090"></span>
      #725090<br>
      $wisteria
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #000000"></span>
      #000000<br>
      $black
    </div>
  </div>
</div>
<br>
<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #333333"></span>
      #333333<br>
      $dark-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #464645"></span>
      #464645<br>
      $medium-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #f4f4f4"></span>
      #f4f4f4<br>
      $light-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #f9f9f9"></span>
      #f9f9f9<br>
      $alabaster
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ffffff"></span>
      #ffffff<br>
      $white
    </div>
  </div>
</div>




# Typography

<p class="lead">This design uses Roboto, Arial for headings and paragraph text.</p>

---

## Headings

Foundation includes styles for all headings&mdash;they're balanced and sized along a modular scale.

<div class="callout primary">
  <p>Avoid skipping heading levels when structuring your document, as it confuses screen readers. For example, after using an <code>&lt;h2&gt;</code> in your code, the next heading used should be either <code>&lt;h2&gt;</code> or <code>&lt;h3&gt;</code>. If you need a heading to match a specific style, use one of the custom Header classes.</p>
</div>

```html_example
<h1>h1. This is a very large header.</h1>
<h2>h2. This is a large header.</h2>
<h3>h3. This is a medium header.</h3>
<h4>h4. This is a moderate header.</h4>
<h5>h5. This is a small header.</h5>
<h6>h6. This is a tiny header.</h6>
```

---

## Paragraphs

This is a paragraph. Paragraphs are preset with a font size, line height and spacing to match the overall vertical rhythm. To show what a paragraph looks like this needs a little more content&mdash;so, did you know that there are storms occurring on Jupiter that are larger than the Earth? Pretty cool. Use the `<strong>` and `<em>` tags to denote text that should be displayed or read with emphasis. Browsers will **bold** and *italicize* the words, while screen readers will read them with *emphasis*.

Refer to [helper](#helper) classes for additional style options.

<div class="callout primary">
  <p>If the emphasis of a phrase is important, don't make the emphasis purely visual&mdash;use the `<em>` or `<strong>` tags to mark it as well. Both of these tags have built-in styles, but there's no harm in adding additional styles in specific contexts.</p>
</div>

---

## Links

<p>Links are very standard, and the color is preset to the Foundation primary color. In addition, there are some custom link styles, such as  `.secured` and `.forward`.</p>


```html_example
<ul class="no-bullet">
<li><a href="#">standard link</a></li>
<li><a href="#" class="forward">forward link</a></li>
<li><a href="#" class="secured">secured link</a></li>
</ul>
```

<div class="callout primary">
  <p>To make links screen reader-friendly, avoid using vague words like "here" or "read more" within link text. The text of the link itself should adequately describe where the link goes.</p>
</div>

---

## Dividers

Use dividers to define thematic breaks between paragraphs. To denote the end of one section of a page and the start of another, it's better to use the `<section>` tag.

```html
<hr>
```

---

## Unordered Lists

Use an unordered list to... *list things*, if the order of the items doesn't matter.  

Refer to [helper](#helper) classes for additional style options.

```html_example
<ul>
  <li>List item with a much longer description or more content.</li>
  <li>List item</li>
  <li>List item
    <ul>
      <li>Nested list item</li>
      <li>Nested list item</li>
      <li>Nested list item</li>
    </ul>
  </li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

---

## Ordered Lists

Use an ordered list when creating a list where the order of the items is important, like ranking pizza toppings from best to worst.

```html_example
<ol>
  <li>Cheese (essential)</li>
  <li>Pepperoni</li>
  <li>Bacon
    <ol>
      <li>Normal bacon</li>
      <li>Canadian bacon</li>
    </ol>
  </li>
  <li>Sausage</li>
  <li>Onions</li>
  <li>Mushrooms</li>
</ol>
```

---

## Definition Lists

A definition list (`<dl>`) is used to display name-value pairs, like metadata or a dictionary definition. Each term (`<dt>`) is paired with one or more definitions (`<dd>`).

```html_example
<dl>
  <dt>Time</dt>
  <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
  <dt>Space</dt>
  <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
  <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
</dl>
```

---

## Blockquotes

Sometimes other people say smart things, and you may want to mention those things with a quote. Be sure to cite the source for the quote.

```html_example
<blockquote>
  Those people who think they know everything are a great annoyance to those of us who do.
  <cite>Isaac Asimov</cite>
</blockquote>
```

---

## Abbreviations

Use the `<abbr>` tag to annotate a shortened term. Abbreviations must always have a `title` attribute which clarifies the full term.

```html_example
<p>In my dream last night, I saw <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien and George <abbr title="Raymond Richard">R. R.</abbr> Martin hanging out on Sunset <abbr title="Boulevard">Blvd</abbr>.</p>
```

---

## Code

Format references to code with the `<code>` tag.

```html_example
Remember to escape angle brackets when printing HTML: <code>&lt;div&gt;</code>
```

---

## Keystrokes

Use the `<kbd>` element to annotate a key stroke or combination.

```html_example
<p>Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows) to play Half-Life 3.</p>
```

---

## Accessibility

Text is core to the content of your page, so making it accessible to everyone is important. Here are some general guidelines to follow.

### Text vs. Images

Prefer using actual text over text inside a graphic. Assistive technologies can't read an image, and the text in an image can't be resized by a browser, like normal text. If an image has text that needs to be read, add it in the `alt` attribute of the image.

```html
<img src="http://www.freddiemac.com/blog/images/fm_blog_usda_returns.jpg" alt="Harp - act now!">
```

---

## <span id="helper">Typography Helper Classes</span>

<p class="lead">The helper classes allow you to scaffold certain typographic styles faster.</p>

---

### Text Alignment

You can change the text alignment of an element by adding `.text-left`, `.text-right`, `.text-center` or `.text-justify` to an element.

Adding a breakpoint to the front of a text alignment class will cause it to only be applied on that size screen or larger. For example, `.medium-text-center` will keep text left-aligned on the smallest screens, but switch to center-aligned on medium screens and larger.

```html
<p class="text-left"><!-- ... --></p>
<p class="text-right"><!-- ... --></p>
<p class="text-center"><!-- ... --></p>
<p class="text-justify"><!-- ... --></p>
```

<p class="text-left"><strong>This text is left-aligned.</strong> Set in the year 0 F.E. ("Foundation Era"), The Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire. Though the empire appears stable and powerful, it is slowly decaying in ways that parallel the decline of the Western Roman Empire.</p>

<p class="text-right"><strong>This text is right-aligned.</strong> Set in the year 0 F.E. ("Foundation Era"), The Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire. Though the empire appears stable and powerful, it is slowly decaying in ways that parallel the decline of the Western Roman Empire.</p>

<p class="text-center"><strong>This text is center-aligned.</strong> Set in the year 0 F.E. ("Foundation Era"), The Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire. Though the empire appears stable and powerful, it is slowly decaying in ways that parallel the decline of the Western Roman Empire.</p>

<p class="text-justify"><strong>This text is justified.</strong> Set in the year 0 F.E. ("Foundation Era"), The Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire. Though the empire appears stable and powerful, it is slowly decaying in ways that parallel the decline of the Western Roman Empire.</p>

---

### Lead Paragraph

A slightly-larger-than-normal block of text, useful for decks, blurbs, or other descriptive text.

```html_example
<p class="lead">What are your cats <em>really</em> dreaming about while they sleep?</p>
```

---

### Un-bulleted List

In Foundation, the `<ul>` is a bulleted list by default, but you can add the class `.no-bullet` to remove the bullets from that list.

```html_example
<ul class="no-bullet">
  <li>List item with a much longer description or more content.</li>
  <li>List item</li>
  <li>List item
    <ul>
      <li>Nested list item</li>
      <li>Nested list item</li>
      <li>Nested list item</li>
    </ul>
  </li>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```

---

## Hollow Buttons

```html_example
<div style="background: #00a6e2">
  <br>
  <a href="#" class="hollow large button">Large button</a>
  <a href="#" class="hollow button">Regular button</a>
  <a href="#" class="hollow small button">Small button</a>
  <a href="#" class="hollow tiny button">Tiny button</a>
  <br>
</div>
```

---

## Hollow Darken Buttons

```html_example
<a href="#" class="hollow darken large button">Large button</a>
<a href="#" class="hollow darken button">Regular button</a>
<a href="#" class="hollow darken small button">Small button</a>
<a href="#" class="hollow darken tiny button">Tiny button</a>
```

---

## Inverted Buttons

```html_example
<div style="background: #00a6e2">
  <br>
  <a href="#" class="inverted large button">Large button</a>
  <a href="#" class="inverted button">Regular button</a>
  <a href="#" class="inverted small button">Small button</a>
  <a href="#" class="inverted tiny button">Tiny button</a>
  <br>
</div>
```



# Homepage Grid

---

## CTA Blocks

```html_example
<div class="cta-block">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
<div class="cta-block cta-block_alabaster">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
<div class="cta-block cta-block_buttercup">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
<div class="cta-block cta-block_cerulean">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
<div class="cta-block cta-block_sushi">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
<div class="cta-block cta-block_celery">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
```

---

## Centered Content Block

```html_example
<div class="cta-block cta-block_buttercup cta-block_centered">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
```

---

## Larger Bold Title

```html_example
<div class="cta-block cta-block_buttercup cta-block_centered cta-block_lg-title">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
```

---

## XLarge Thin Title

```html_example
<div class="cta-block cta-block_cerulean cta-block_centered cta-block_xlg-thin-title">
  <div>
    <span class="cta-block__category">Our Perspective</span>
    <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
    <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
  </div>
</div>
```

---

## Grid Layout

```html_example
<div class="row collapse home-grid">
  <div class="large-9 columns">
    <div class="row medium-up-3 collapse grid__top" data-equalizer data-equalize-on="medium">
      <div class="column cta-block" data-equalizer-watch>
        <div>
          <span class="cta-block__category">Our Perspective</span>
          <h3><a href="#">We're helping expand access to homeownership with technology</a></h3>
        </div> 
      </div>
      <div class="column cta-block cta-block_alabaster no-desc-mobile" data-equalizer-watch>
        <div>
          <span class="cta-block__category">Housing News</span>
          <h3><a href="#">Purchases of previously owned homes rebounded</a></h3>
          <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
        </div>
      </div>
      <div class="column cta-block cta-block_buttercup cta-block_centered cta-block_lg-title" data-equalizer-watch>
        <div>
          <span class="cta-block__category">By the Numbers</span>
          <h3>1.6 Americans Helped</h3>
          <p>We’ve provided over $400 billion in mortgage funding in 2015 for American families</p>
        </div>
      </div>
    </div>
    <div class="row collapse grid__bottom" data-equalizer data-equalize-on="medium">
      <div class="medium-4 columns cta-block cta-block_sushi no-desc-mobile" data-equalizer-watch>
        <div>
          <span class="cta-block__category">Freddie Mac Blog</span>
          <h3><a href="#">Almost $1b in sold in the 20th STACR<sup>®</sup> offering</a></h3>
          <p>We think the outlook for global growth will improve—or at least stabilize—throughout the.</p>
        </div>
      </div>
      <div class="medium-8 columns cta-block cta-block_celery" data-equalizer-watch>
        <div class="">
          <span class="cta-block__category">Freddie Mac Research</span>
          <h3><a href="#">Housing will have its best year in a decade or more. </a></h3>
          <p><a href="#">We think the outlook for global growth will improve—or at least stabilize—throughout the balance of this year and the downward pressure on U.S. rates will abate.</a></p>
        </div>
      </div>
    </div>
  </div>
  <div class="large-3 columns cta-block cta-block_cerulean cta-block_centered cta-block_xlg-thin-title cta-block_tall">
    <div>
      <span class="cta-block__category">Doing Business With Us</span>
      <div class="cta-block__img-wrapper"><img src="img/lightbulb.png" alt="lightbulb" /></div>
      <h3><a href="#">A Brighter Idea in Loan Production</a></h3>
      <div><a class="hollow large button" href="#">Loan Advisor Suite</a></div>
    </div>
  </div>
</div>
```



# Blog Blocks 

---

## Basic Blog Block

```html_example
<div class="blog-block">
  <a class="blog-block__img" href="#">
    <img src="/images/blog/blog-2.jpg" alt="Blog Img" />
    <div class="blog-block__overlay"></div>
    <div class="blog-block__txt"></div>
  </a>
  <div class="blog-block__date">May 13, 2016</div>
  <h3><a href="#">Down Payments: There's Help for That</a></h3>
  <div class="blog-block__cat">Home Ownership</div>
  <p>Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
</div>
```

---

## Blog Block Title Only

```html_example
<div class="blog-block blog-block_title-only">
  <a class="blog-block__img" href="#">
    <img src="/images/blog/blog-2.jpg" alt="Blog Img" />
    <div class="blog-block__overlay"></div>
    <div class="blog-block__txt"></div>
  </a>
  <div class="blog-block__date">May 13, 2016</div>
  <h3><a href="#">Down Payments: There's Help for That</a></h3>
</div>
```

---

## Blog Block Large

```html_example
<div class="blog-block blog-block_lg">
  <a class="blog-block__img" href="#">
    <img src="/images/blog/blog-lg-1.jpg" alt="Blog Img" />
    <div class="blog-block__overlay"></div>
    <div class="blog-block__txt">
      <h3>What Do Renters Save For?</h3>
    </div>
  </a>
</div>
```

---

## Blog Block Sidebar

```html_example
<div class="blog-block blog-block_sidebar">
  <div class="row">
    <div class="small-6 large-4 columns">
      <a class="blog-block__img" href="#">
        <img src="/images/blog/blog-2.jpg" alt="Blog Img" />
        <div class="blog-block__overlay"></div>
        <div class="blog-block__txt"></div>
      </a>
    </div>
    <div class="small-6 large-8 columns">
      <div class="blog-block__date">May 13, 2016</div>
      <h3><a href="#">Down Payments: There's Help for That</a></h3>
      <div class="blog-block__cat">Home Ownership</div>
    </div>
  </div>
</div>
```



# Call To Action

```html_example
<section class="page-cta">
  <div class="row page-buffer">
    <div class="page-cta__wrapper">
      <div class="page-cta__txt">
        <h3>Getting To Know Freddie Mac</h3>
        <p>Every day, Freddie Mac employees ensure mortgage credit is available for America’s families and help rebuild the nation’s housing finance system. Learn how Our Mission is making a positive impact.</p>
      </div>
      <div class="page-cta__btn">
        <a class="hollow large button" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</section>
<section class="page-cta page-cta_niagara">
  <div class="row page-buffer">
    <div class="page-cta__wrapper">
      <div class="page-cta__txt">
        <h3>Getting To Know Freddie Mac</h3>
        <p>Every day, Freddie Mac employees ensure mortgage credit is available for America’s families and help rebuild the nation’s housing finance system. Learn how Our Mission is making a positive impact.</p>
      </div>
      <div class="page-cta__btn">
        <a class="hollow large button" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</section>
<section class="page-cta page-cta_buttercup">
  <div class="row page-buffer">
    <div class="page-cta__wrapper">
      <div class="page-cta__txt">
        <h3>Getting To Know Freddie Mac</h3>
        <p>Every day, Freddie Mac employees ensure mortgage credit is available for America’s families and help rebuild the nation’s housing finance system. Learn how Our Mission is making a positive impact.</p>
      </div>
      <div class="page-cta__btn">
        <a class="hollow large button" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</section>
```

---

## Call To Action Sidebar
```html_example
<section class="page-cta page-cta_sidebar">
  <div class="row page-buffer">
    <div class="page-cta__wrapper">
      <div class="page-cta__txt">
        <h3>Getting To Know Freddie Mac</h3>
        <p>Every day, Freddie Mac employees ensure mortgage credit is available for America’s families and help rebuild the nation’s housing finance system. Learn how Our Mission is making a positive impact.</p>
      </div>
      <div class="page-cta__btn">
        <div class="input-btn-respond">
          <div><input type="email" class="primary outline" placeholder="Your Email Address"></div>
          <div><a class="secondary button expanded" href="#">Sign Up</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Call To Action Feature
```html_example
<section class="page-cta page-cta_sidebar page-cta_feature">
  <div class="row page-buffer">
    <div class="page-cta__overlay"></div>
    <div class="page-cta__wrapper">
      <div class="page-cta__txt">
        <div class="page-cta__cat">Featured Insight</div>
        <h3>Life's a Beach</h3>
        <p>So you've always dreamed of living at the beach, but you're discouraged by the high price of beachfront property? Not to worry. We've found just the place for you.  </p>
      </div>
      <div class="page-cta__btn">
        <a class="hollow expanded button" href="#">Read More</a>
      </div>
    </div>
  </div>
</section>
```



# Accordions

<p class="lead">Accordions are elements that help you organize and navigate multiple panes of content in a single container.</p>

---

## Basics

### Accordion Container

The container for an accordion needs the class `.accordion-pointer`, and the attribute `data-accordion`. Note that in these examples, we use a `<ul>`, but you can use any element you want.
-    For accessibility, include the attribute `role="tablist"`.


```html
<ul class="accordion-pointer" data-accordion role="tablist">
</ul>
```

### Accordion Content Panes

Inside the accordion, place a series of content panes (minimum of 2) with the class `.accordion-item` and the attribute `data-accordion-item`. To mark which pane should be open by default, add the class `.is-active` to that pane. Omit this class if all panes should be closed by default.

Each pane has 2 parts: a **title** and a **content area**.
-    The **title** is an `<a>` with the class `.accordion-title`, a unique `id`, and a link to its coordinating content area.  For accessibility, include `role="tab"`, and set the `aria-controls` attribute to the ID of its content area.
-    The **content area**, is a `<div>` with the class `.accordion-content`, the attribute `data-tab-content`, and each content area also has a unique `id`, which is targeted by the title  link.  For accessibility, include `role="tabpanel"`, and set the `aria-labelledby` attribute to the ID of its title tag.


```html
  <li class="accordion-item is-active" data-accordion-item>
    <a class="accordion-title" href="#panela" id="panel1-heading" aria-controls="panela" role="tab">Accordion A: Title</a>
    <div class="accordion-content" data-tab-content id="panela" aria-labelledby="panela-heading" role="tabpanel">
      Panel A: I start in the open state.
    </div>
  </li>
```

Once you put it all together, here's what you get!

```html_example
<ul class="accordion-pointer" data-accordion role="tablist">
  <li class="accordion-item is-active" data-accordion-item>
    <a class="accordion-title" href="#panel1" id="panel1-heading" aria-controls="panel1" role="tab">Panel One Title</a>
    <div class="accordion-content" data-tab-content id="panel1" aria-labelledby="panel1-heading" role="tabpanel">
      Panel 1. Lorem ipsum dolor.
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#panel2" id="panel2-heading" aria-controls="panel2" role="tab">Panel Two Title</a>
    <div class="accordion-content" data-tab-content id="panel2" aria-labelledby="panel2-heading" role="tabpanel">
      Panel 2. Lorem ipsum dolor.
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#panel3" id="panel3-heading" aria-controls="panel3" role="tab">Panel Three Title</a>
    <div class="accordion-content" data-tab-content id="panel3" aria-labelledby="panel3-heading" role="tabpanel">
      Panel 3. Lorem ipsum dolor.
    </div>
  </li>
</ul>    
```



# Call Out

<p class="lead">A callout is just an element with a `.callout` class applied. You can put any kind of content inside.</p>

```html
<div class="callout">
  <p>This is a callout.</p>
</div>
```
---

## Coloring

Callouts can be colored using the `.secondary`, `.primary`, `.success`, `.warning`, or `.alert` classes. 


```html_example
<div class="row">
  <div class="large-12 columns">
    <div class="large-4 medium-6 columns">
      <div class="callout">
        <h5>This is a callout.</h5>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
        <a href="http://www.lolcats.com/popular/19863-its-dangerous-to-go-alone-take-this.html">It's dangerous to go alone, take this.</a>
      </div> 
    </div> 
    <div class="large-4 medium-6 columns">     
      <div class="callout success">
        <h5>This is a callout with class of success</h5>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
        <a href="http://www.lolcats.com/popular/19863-its-dangerous-to-go-alone-take-this.html">It's dangerous to go alone, take this.</a>
      </div>
    </div>
    <div class="large-4 medium-6 columns">       
      <div class="callout primary">
        <h5>This is a callout with class of primary.</h5>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
        <a href="http://www.lolcats.com/popular/19863-its-dangerous-to-go-alone-take-this.html">It's dangerous to go alone, take this.</a>
      </div> 
    </div> 
    <div class="large-4 medium-6 columns">   
      <div class="callout warning">
        <h5>This is a callout with class of warning.</h5>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
        <a href="http://www.lolcats.com/popular/19863-its-dangerous-to-go-alone-take-this.html">It's dangerous to go alone, take this.</a>
      </div>
    </div>
    <div class="large-4 medium-6 columns">  
      <div class="callout secondary">
        <h5>This is a callout with class of secondary.</h5>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
        <a href="http://www.lolcats.com/popular/19863-its-dangerous-to-go-alone-take-this.html">It's dangerous to go alone, take this.</a>
      </div> 
    </div> 
    <div class="large-4 medium-6 columns">  
      <div class="callout alert">
        <h5>This is a callout with class of alert.</h5>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
        <a href="http://www.lolcats.com/popular/19863-its-dangerous-to-go-alone-take-this.html">It's dangerous to go alone, take this.</a>
      </div>
    </div>
  </div>
</div>  
```
 
 ---

## Sizing

Callouts can be sized using the `.small` and `.large` classes. These will affect the padding around content to be smaller and larger respectively.


```html_example  
<div class="row">
  <div class="large-12 columns">
    <div class="large-6 columns">
      <div class="callout large">
        <h5>This is a callout with class of large.</h5>
        <p>It can support any of the callout color classes shown above.</p>
      </div>
    </div> 
    <div class="large-6 columns">    
      <div class="callout small">
        <h5>This is a callout with class of small.</h5>
        <p>It can support any of the callout color classes shown above.</p>
      </div>
    </div>
  </div>  
</div>
```

---

## Making Closable

Pair the callout with the [close button](#close-button) component and `data-closable` attribute to create a dismissable alert box.

<div class="primary callout">
  <p>Any element can be used as a close trigger, not just close button. Adding the attribute <code>data-close</code> to any element within the callout will turn it into a close trigger.</p>
  <p>When using the <code>data-closable</code> attribute, you can optionally add <a href="http://foundation.zurb.com/sites/docs/motion-ui.html">Motion UI</a> classes to the attribute to change the closing animation. If no class is added, the plugin defaults to jQuery's <code>.fadeOut()</code> function.</p>
</div>


```html_example
<div class="row">
  <div class="large-12 columns"> 
    <div class="large-6 columns">   
      <div class="alert callout" data-closable>
        <h5>This is Important!</h5>
        <p>When you're done reading it, click the close button in the corner to dismiss this alert.</p>
        <p>I'm using the default <code>data-closable</code> parameters, and simply fade out.</p>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div class="large-6 columns">
      <div class="success callout" data-closable="slide-out-right">
        <h5>This a friendly message.</h5>
        <p>When you're done reading it, click the close button in the corner to dismiss this message.</p>
        <p>And when you're done with me, I close using a Motion UI animation.</p>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div> 
</div>  
``` 



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---

## Form Layouts

Form elements are styled based on their type attribute rather than a class. Inputs have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>  
  <div class="row">
    <button class="button primary" type="submit">Submit</button> 
    <button class="button secondary" type="reset">Reset</button>
  </div>  
</form>
```

## Outline Text Input Example
```html_example
<input type="text" class="outline" placeholder="Placeholder Text">
<input type="text" class="outline primary" placeholder="Placeholder Text">
```



# Heros

---

## Default
```html_example
<section class="blue-hero">
  <div class="blue-hero__overlay"></div>
  <div class="row page-buffer">
    <div class="row">
      <div class="blue-hero__txt">
        <h1>Page title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
</section>
```

---

## Short
```html_example
<section class="blue-hero blue-hero_short">
  <div class="blue-hero__overlay"></div>
  <div class="row page-buffer">
    <div class="row">
      <div class="blue-hero__txt">
        <h1>Page title</h1>
      </div>
    </div>
  </div>
</section>
```

---

## Tall
```html_example
<section class="blue-hero blue-hero_tall">
  <div class="blue-hero__overlay"></div>
  <div class="row page-buffer">
    <div class="row">
      <div class="blue-hero__txt">
        <h1>Page title</h1>
      </div>
    </div>
  </div>
</section>
```

---

## Left Align
```html_example
<section class="blue-hero blue-hero_tall blue-hero_left-align">
  <div class="blue-hero__overlay"></div>
  <div class="row page-buffer">
    <div class="row">
      <div class="blue-hero__txt">
        <h1>Page title</h1>
      </div>
    </div>
  </div>
</section>
```



# Page Title
```html_example
<section class="page-title">
  <div class="row page-buffer">
    <h1>Page title</h1>
  </div>
</section>
```



# Media Objects  

<p class="lead">Meida Objects are used to associate a blurb with a media element, such as an iamge or video.</p>

## Basics

A media object is a container with the class `.media-object`, and two or three sections with the class `.media-object-section`.  Each section aligns to the top by default, but individual sections can also be middle- or bottom-aligned by adding a `.middle` or `.bottom` class to `.media-object-section`.


```html_example
<div class="media-object">
  <div class="media-object-section">
    <div class="thumbnail">
      <img src= "http://www.freddiemac.com/images/blog/sean_becketti_md.jpg" alt="sean Becketti">
    </div>
  </div>
  <div class="media-object-section">
    <h4>Are Baby Boomers the Key to the Single-Family Market?</h4>
    <p>One of the most important keys to today's single-family housing market is homeowners who were born before the first-ever episode of Star Trek aired in the 1960s. Today, more than 50 years later, Baby Boomers and other homeowners over the age of 55 control almost two-thirds of the nation's home equity.</p>
  </div>
</div>
```

## Stack on Small Options

By adding the `.stack-for-small` class, you can make your media object responsive and stack the media item and the associated blurb. Images will get a width of 100%, but this can be changed.

```html_example
<div class="large-10 large-centered medium-12 columns">
  <div class="media-object stack-for-small">
    <div class="media-object-section">
      <div class="thumbnail">
        <img src="http://www.freddiemac.com/blog/images/homesteps.jpg" alt="HomeSteps - house sold sign">
      </div>
    </div>
    <div class="media-object-section">
      <h4>Home Searches Made Easier</h4>
      <p>Register today for a free HomeSteps.com Home Search Account to keep track of your recent searches and receive weekly notifications of new home listings. <a href="http://www.freddiemac.com/blog/homeownership/20160630_home_searches_made_easier.html">More</a></p>
    </div>
  </div>
  <div class="media-object stack-for-small">
    <div class="media-object-section">
      <div class="thumbnail">
        <img src="http://www.freddiemac.com/blog/images/fm_blog_usda_returns.jpg" alt="Harp - act now!">
      </div>
    </div>
    <div class="media-object-section">
      <h4>HARP: Get the Facts and Act Fast</h4>
      <p>Over 3.4 million homeowners have been helped through HARP, yet many eligible homeowners are still sitting on the sidelines due to common myths and misconceptions about the program.  Follow along as we debunk the myths and deliver the facts. <a href="http://www.freddiemac.com/blog/homeownership/20160628_harp_get_the_facts.html">More</a></p>
    </div>
  </div>
</div>
```



# Tabs

<p class="lead">Tabs are elements that help you organize and navigate multiple panes of content in a single container.  Tab option include fixed-width horizontal tabs, unfixed width horizontal tabs, and vertical tabs.</p>

---

## Basics

There are two pieces to a tabbed interface: the tabs themselves, and the content for each tab. 

The tabs are grouped within an element with the classes `.tabs` and `.horizontal`, the attribute `data-tabs`, and a unique `id` attribute.  
- Each tab has the class `.tabs-title` and contains a link to a tab. The `href` of each link should match the ID of a tab.  
- To mark which tab is the default, add the class `.is-active` to the tab, and `aria-selected="true"` to the `<a>` element.

```html
<ul class="tabs horizontal" data-tabs id="example-tabs-sample">
  <li class="tabs-title is-active"><a href="#panelsample1" aria-selected="true">Tab 1</a></li>
  <li class="tabs-title"><a href="#panelsample2">Tab 2</a></li>
</ul>
```

The tab content container has the class `.tabs-content` and a ` data-tabs-content` attribute that matches the ID of the coordinating tabs element, while each section has the class `.tabs-panel`. 
- Each content pane also has a unique ID, which is targeted by a link in the tabstrip.
- To mark which pane is the default, add the class `.is-active` to that pane.

```html
<div class="tabs-content" data-tabs-content="example-tabs-sample">
  <div class="tabs-panel is-active" id="panelsample1">
    <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
  </div>
  <div class="tabs-panel" id="panelsample2">
    <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
  </div>
</div>
```

---

### Standard Horizontal Tabs

For standard horizontal tabs, the tabs and the tab-content markup should be wrapped in a containing `<div>` with a class of `.tab-wrapper`.
By default, tabs will wrap to a new line when there is insufficient width.  You can opt to have horizontal tabs swap to full-width below the medium breakpoint by adding `.stacked-for-medium` to the tabs element.

```html
<div class="tab-wrapper">
  <ul class="tabs stacked-for-medium horizontal" data-tabs>
  </ul>
</div>
```

Once you put it all together, here's what you get for standard horizontal tabs!

```html_example
<div class="tab-wrapper">
  <ul class="tabs stacked-for-medium horizontal" data-tabs id="example-tabs">
    <li class="tabs-title is-active"><a href="#panelh1" aria-selected="true">Tab one</a></li>
    <li class="tabs-title"><a href="#panelh2">Tab two longer name</a></li>
    <li class="tabs-title"><a href="#panelh3">Tab three</a></li>
    <li class="tabs-title"><a href="#panelh4">Tab four</a></li>
  </ul>
  <div class="tabs-content" data-tabs-content="example-tabs">
    <div class="tabs-panel is-active" id="panelh1">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="tabs-panel" id="panelh2">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>      
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>    
    <div class="tabs-panel" id="panelh3">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>      
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>    
    <div class="tabs-panel" id="panelh4">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p><img src="http://www.freddiemac.com/blog/images/fm_blog_usda_returns.jpg" alt="Harp - act now!"></p>
    </div>
  </div>  
</div>
```

---


### Fixed-width Horizontal Tabs

For fixed-sized horizontal tabs (where all tabs are the same width):
1. Wrap the tabs in a `<div>` with a class of `.tab-wrapper`, an attribute of `data-equalizer`, and a `data-equalize-on` attribute that defines the lowest breakpoint where the tabs should all match heights.
2. Add a class the the tabs element that defines the starting breakpoint and quantity of tabs. For example, `.small-up-3` represents 3 equal-width tabs, starting at the smallest breakpoint.
3. Add attribute `data-equalizer-watch` to each link to insure they remain the same height.

```html
<div class="tab-wrapper" data-equalizer data-equalize-on="small"> 
  <ul class="tabs horizontal small-up-3" data-tabs>
    <li class="tabs-title is-active"><a href="#panelsample1" aria-selected="true" data-equalizer-watch>Tab</a></li>
    <li class="tabs-title"><a href="#panelsample2" data-equalizer-watch>Tab</a></li>
    <li class="tabs-title"><a href="#panelsample3" data-equalizer-watch>Tab</a></li>
  </ul>
</div>
```

Once you put it all together, here's what you get for equal width tabs!


```html_example
<div class="tab-wrapper" data-equalizer data-equalize-on="small">      
  <ul class="tabs small-up-3 horizontal" data-tabs id="example-tabsB">
    <li class="tabs-title is-active"><a href="#panel1B" aria-selected="true" data-equalizer-watch>Tab one</a></li>
    <li class="tabs-title"><a href="#panel2B" data-equalizer-watch>Tab two Longer</a></li>
    <li class="tabs-title"><a href="#panel3B" data-equalizer-watch>Tab three</a></li>
  </ul>
  <div class="tabs-content" data-tabs-content="example-tabsB">
    <div class="tabs-panel is-active" id="panel1B">
      <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
    </div>
    <div class="tabs-panel" id="panel2B">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>

      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>

      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>    
    <div class="tabs-panel" id="panel3B">
      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>

      <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
    </div>  
  </div>
</div>
```

---

### Vertical Tabs

For vertical tabs:
1. Wrap the tabs and tab content elements in a `<div>` with a class of `.row`, `.collapse`, and `.tab-wrapper`. Provide the wrapper with an attribute of `data-equalizer`, and a `data-equalize-on` attribute that defines the lowest breakpoint where the tabs should all match heights.
2. Add the `.vertical` class to the tabs and tabs-content elements.
3. Add attribute `data-equalizer-watch` to the tabs and tabs-content elements, and add `<div class="clearfix"></div>` to the end of the markup for each container to insure the tabs and the tab content area  remain the same height.
4. Add `<div class="clearfix"></div>` to the end of the markup for each tab container to insure that the tab content area resizes to contain the content on each tab change.
5. Add attribute `data-equalizer-watch` to each tab link to insure they remain the same height.
6. Place the tabstrip and the tab contents in grid columns to make them sit side-by-side.  In this example, tabs are 3-columns and tabbed content is 9 columns at the large breakpoint.

Once you put it all together, here's what you get for vertical tabs!

```html_example
<div class="row collapse tab-wrapper" data-equalizer data-equalize-on="medium">
  <div class="large-2 medium-3 columns">
    <ul class="tabs vertical" id="example-vert-tabsB" data-tabs data-equalizer-watch>
      <li class="tabs-title is-active"><a href="#panel1vB" aria-selected="true">Tab one</a></li>
      <li class="tabs-title"><a href="#panel2vB">Tab two</a></li>
      <li class="tabs-title"><a href="#panel3vB">Tab three</a> 
      </li>
    </ul> 
    <div class="clearfix"></div>
  </div>
  <div class="large-10 medium-9 columns">
    <div class="tabs-content vertical" data-tabs-content="example-vert-tabsB" data-equalizer-watch>
      <div class="tabs-panel is-active" id="panel1vB">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <div class="clearfix"></div>
      </div>
      <div class="tabs-panel" id="panel2vB">
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <div class="clearfix"></div>
      </div>
      <div class="tabs-panel" id="panel3vB">
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
        <img class="thumbnail" src= "http://www.freddiemac.com/images/blog/sean_becketti_md.jpg" alt="sean Becketti">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</div>
```



# Data Tables

<p class="lead">Okay, they're not the sexiest things ever, but tables get the job done (for tabular data, of course). They have responsive modifiers to help solve some of your layout issues based on your tables needs.</p>

---

## Hover State

Need to spiff up the table just a tad? Just add the class `.table--hover` to lightly darken the table rows on hover.

```html
<table class="table--hover">
</table>
```

## Stacking Tables

To stack a table on small screens, add the class `.stack`.

```html
<table class="stack">
</table>
```

Once you put it all together, here's what you get for a stacked table with hover effect.

```html_example
<table class="stack table--hover">
  <thead>
    <tr>
      <th>Cookies</th>
      <th>Taste</th>
      <th>Calories</th>
      <th>Overall</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chocolate Chip</td>
      <td>Tastey</td>
      <td>120cal</td>
      <td>7.5/10</td>
    </tr>
    <tr>
      <td>Snickerdoodle</td>
      <td>Delicious</td>
      <td>95cal</td>
      <td>8/10</td>
    </tr>
    <tr>
      <td>Oatmeal Raisin</td>
      <td>Superb</td>
      <td>100cal</td>
      <td>11/10</td>
    </tr>
    <tr>
      <td>Lemon Bar</td>
      <td>Tangy</td>
      <td>130cal</td>
      <td>6/10</td>
    </tr>
  </tbody>
</table>
```



# Float Classes

<p class="lead">Foundation includes a handful of helpful float classes to add common positioning behaviors to elements.</p>

---

## Float Left/Right

You can change the float behavior of an element by adding the `.float-left` or `.float-right` classes to an element. To clear floats, add the class `.clearfix` to the parent element.


```html_example
<div class="callout clearfix">
  <a class="button float-left">Left</a>
  <a class="button float-right">Right</a>
</div>
```

---

## Float Center

Okay, it's not *really* a float, but you can add the `.float-center` class to an element to engage the automatic margin centering trick. Note that this will only work on elements with an absolute width, which means not a percentage or `auto` width.

```html_example
<img src="http://www.freddiemac.com/blog/images/fm_blog_usda_returns.jpg" alt="Harp - act now!" class="float-center">
```



# Twitter 

---

## Twitter Basic
```html_example
<div class="twitter-block">
  <div class="twitter-block__overlay"></div>
  <div class="twitter-block__txt">
    <h4>Diana Olick</h4>
    <h5><a href="#">@dianaolick</a></h5>
    <p>30 yr fixed rate #mortgage averaged 3.66% for week ending June 2, up from 3.64% previous week, but down from 3.87% one yr ago <strong><a href="#">@FreddieMac</a></strong></p>
  </div>
</div>
```

---

## Scrolling Table

Got a lot of tabular data? Add the class `.scroll` to the table itself to enable horizontal scrolling.

<div class="primary callout">
  <p>Note: this method doesn't work great with Internet Explorer 9.</p>
</div>

```html_example
<table class="scroll table--hover">
  <thead>
    <tr>
      <th>This is the description!</th>
      <th>One</th>
      <th>Two</th>
      <th>Three</th>
      <th>Four</th>
      <th>Five</th>
      <th>Six</th>
      <th>Seven</th>
      <th>Eight</th>
      <th>Nine</th>
      <th>Ten</th>
      <th>Eleven</th>
      <th>Twelve</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th style="display:block; width:350px;">These are all the words that people use to describe Foundation 6!</th>
      <td>Cool</td>
      <td>Swag</td>
      <td>Chill</td>
      <td>Killer</td>
      <td>Rad</td>
      <td>Baller</td>
      <td>OMG</td>
      <td>Sweet</td>
      <td>Awesome</td>
      <td>Beast</td>
      <td>Dope</td>
      <td>Tubular</td>
    </tr>
    <tr>
      <th>These are some words that people use to describe other web frameworks.</th>
      <td>Whatevs</td>
      <td>Ugh.</td>
      <td>LOL</td>
      <td>K</td>
      <td>Aight</td>
      <td>Eh.</td>
      <td>Grrr...</td>
      <td>Meh.</td>
      <td>TTYL</td>
      <td>Bleh.</td>
      <td>Really?</td>
      <td>Why?</td>
    </tr>
    <tr>
      <th>Here are some great super heros.</th>
      <td>Batman</td>
      <td>Superman</td>
      <td>Spiderman</td>
      <td>Wonder Woman</td>
      <td>Hulk</td>
      <td>Nicolas Cage</td>
      <td>Antman</td>
      <td>Aquaman</td>
      <td>Captain America</td>
      <td>Wolverine</td>
      <td>Thor</td>
      <td>Iron Man</td>
    </tr>
    <tr>
      <th>Here are some common colors.</th>
      <td>Red</td>
      <td>Orange</td>
      <td>Yellow</td>
      <td>Green</td>
      <td>Blue</td>
      <td>Indigo</td>
      <td>Violet</td>
      <td>Black</td>
      <td>White</td>
      <td>Brown</td>
      <td>Peach</td>
      <td>Pink</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Here's a table footer, just in case</th>
      <td>A</td>
      <td>B</td>
      <td>C</td>
      <td>D</td>
      <td>E</td>
      <td>F</td>
      <td>G</td>
      <td>H</td>
      <td>I</td>
      <td>J</td>
      <td>K</td>
      <td>L</td>
    </tr>
  </tfoot>
</table>
```

---

## Twitter with Image
```html_example
<div class="twitter-block twitter-block_img" style="background-image: url('/images/blog-2.jpg')">
  <div class="twitter-block__overlay"></div>
  <div class="twitter-block__txt">
    <h4>Freddie Mac</h4>
    <h5><a href="#">@freddiemac</a></h5>
    <p>Mortgage rates up a bit, but we'll see how markets react on tomorrow's jobs report. <strong><a href="#">http://bit.ly/25CJp9P</a></strong></p>
  </div>
</div>
```



# Footer
```html_example
<footer>
  <div class="row page-buffer">
    <div class="footer__top">
      <ul>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Vendors &amp; Suppliers</a></li>
        <li><a href="#">Our Other Sites</a></li>
      </ul>
    </div>
    <div class="footer__bottom">
      <div class="row">
        <div class="medium-6 columns">
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="medium-6 columns">
          <p>Copyright &copy; 2016 <strong>Freddie Mac</strong>. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
```



# Popular List Items
```html_example
<section class="popular-items">
  <div class="row page-buffer">
    <h2>Trending Now</h2>
    <ul>
      <li><a href="#">Credit Smart</a></li>
      <li><a href="#">Education &amp; Tools</a></li>
      <li><a href="#">Fraud</a></li>
      <li><a href="#">HARP</a></li>
      <li><a href="#">MiMi</a></li>
    </ul>
  </div>
</section>
```

---

## RSS
```html_example
<section class="popular-items popular-items_rss">
  <div class="row page-buffer">
    <h2>RSS Blog Feeds</h2>
    <ul>
      <li><a href="#">All Posts</a></li>
      <li><a href="#">Home Ownership</a></li>
      <li><a href="#">Rental Housing</a></li>
      <li><a href="#">Research &amp; Analysis</a></li>
      <li><a href="#">Notable</a></li>
    </ul>
  </div>
</section>
```


---

## News

The news release lists are automated by MarketWire.


```html_example
<section class="popular-items popular-items_news">
  <div class="row page-buffer">
    <h2>Recent Press Releases</h2>
    <ul>
      <li><a href="#">Freddie Mac Issues Dodd-Frank Stress Test Results </a><br>08/08/16 -  MCLEAN, VA--(Marketwired - Aug 8, 2016) - &nbsp;Freddie Mac (OTCQB: FMCC) today issued the company's stress test results for the severely adverse scenario conducted under FHFA's rule...</li>
      <li><a href="#">Freddie Mac Reports Second Quarter 2016 Financial Results </a><br>08/02/16 -  MCLEAN, VA--(Marketwired - Aug 2, 2016) -  Freddie Mac (OTCQB: FMCC) today reported its second quarter 2016 financial results and filed its quarterly Form 10-Q with the U.S. Securities...</li>
      <li><a href="#">Freddie Mac Sets Release Date for Second Quarter 2016 Financial Results</a><br>Jul 29, 2016 - MCLEAN, VA--(Marketwired - Jul 29, 2016) -  Freddie Mac (OTCQB: FMCC) announced today that it plans to report its second quarter 2016 financial results before the U.S. financial markets...</li>	
    </ul>    
  </div>
</section>
```



# Gradient Information

```html_example
<section class="gradient-info">
  <div class="row page-buffer">
    <div class="row collapse gradient-info__wrapper" data-equalizer data-equalize-on="medium">
      <div class="medium-6 large-4 large-push-2 columns" data-equalizer-watch>
        <div class="gradient-info__feature">
          <h3>We're Tracking The Market</h3>
          <p>Freddie Mac surveys lenders each week on the rates, fees and points for the most popular mortgage products. Average Mortgage Rates as of April 28, 2016</p>
          <a href="#" class="secondary button">Get Weekly Surveys</a>
        </div>
      </div>
      <div class="medium-2 large-push-2 columns" data-equalizer-watch>
        <div class="gradient-info__stat">
          <h3>30-Yr FRM</h3>
          <p>3.66%</p>
          <span>0.6 Fees/Points</span>
        </div>
      </div>
      <div class="medium-2 large-push-2 columns" data-equalizer-watch>
        <div class="gradient-info__stat">
          <h3>30-Yr FRM</h3>
          <p>3.66%</p>
          <span>0.6 Fees/Points</span>
        </div>
      </div>
      <div class="medium-2 large-push-2 columns end" data-equalizer-watch>
        <div class="gradient-info__stat">
          <h3>30-Yr FRM</h3>
          <p>3.66%</p>
          <span>0.6 Fees/Points</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

