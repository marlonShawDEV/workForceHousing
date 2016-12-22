

# The Grid

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.
In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

---

## Basic Full Width Grid

```html
<div class="section-padding">  
  <div class="row">
    <div class="columns">
      <h2>A Heading that is in a full width column.</h2>
      <div class="row">
        <div class="columns large-6">
          <p>A column that is 6-wide at large breakpoint</p>
        </div>
        <div class="columns large-6">
          <p>A column that is 6-wide at large breakpoint</p>
        </div>
      </div>
      <div class="row">
        <div class="columns large-4">
          <p>A column that is 4-wide at large breakpoint</p>
        </div>
        <div class="columns large-4">
          <p>A column that is 4-wide at large breakpoint</p>
        </div>
        <div class="columns large-4">
          <p>A column that is 4-wide at large breakpoint</p>
        </div>
      </div>      
	  </div>
  </div>
  <div class="row">
    <div class="columns"> 
        <p>Additional content, within a new full width column, within a new row.</p>
      <div class="row">
        <div class="columns large-3">
          <p>A column that is 3-wide at large breakpoint</p>
        </div>
        <div class="columns large-3">
          <p>A column that is 3-wide at large breakpoint</p>
        </div>
        <div class="columns large-3">
          <p>A column that is 3-wide at large breakpoint</p>
        </div>
        <div class="columns large-3">
          <p>A column that is 3-wide at large breakpoint</p>
        </div>
      </div> 
    </div>
  </div>  
</div>
```


<div class="section-padding">  
  <div class="row">
    <div class="columns">
      <h2>A Heading that is in a full width column.</h2>
      <div class="row">
        <div class="columns large-6">
          <div class="callout">A column that is 6-wide at large breakpoint</div>
        </div>
        <div class="columns large-6">
          <div class="callout">A column that is 6-wide at large breakpoint</div>
        </div>
      </div>
      <div class="row">
        <div class="columns large-4">
          <div class="callout">A column that is 4-wide at large breakpoint</div>
        </div>
        <div class="columns large-4">
          <div class="callout">A column that is 4-wide at large breakpoint</div>
        </div>
        <div class="columns large-4">
          <div class="callout">A column that is 4-wide at large breakpoint</div>
        </div>
      </div>      
	  </div>
  </div>
  <div class="row">
    <div class="columns"> 
        <div class="callout">Additional content, within a new full width column, within a new row.</div>
      <div class="row">
        <div class="columns large-3">
          <div class="callout">A column that is 3-wide at large breakpoint</div>
        </div>
        <div class="columns large-3">
          <div class="callout">A column that is 3-wide at large breakpoint</div>
        </div>
        <div class="columns large-3">
          <div class="callout">A column that is 3-wide at large breakpoint</div>
        </div>
        <div class="columns large-3">
          <div class="callout">A column that is 3-wide at large breakpoint</div>
        </div>
      </div> 
    </div>
  </div>  
</div>

---

## Main Column With Aside Column Layout

```html
<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
      <h2>Main content</h2>
      <div class="callout">Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>
    </main>
    <aside class="column">  
      <section class="sidebar">
        <div class="row">
          <h2>Sidebar Content</h2>
          <p>Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>
        </div>
      </section>
    </aside>
  </div>
</div>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
      <div class="callout">
        <h2>Main content</h2>
        <p>Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>
      </div>
    </main>
    <aside class="column">  
      <section class="sidebar sidebar-blue">
        <div class="row">
          <h2>Sidebar Content</h2>
          <p>Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>
        </div>
      </section>
    </aside>
  </div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the color variables you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #00a6e2"></span>
      $fm-blue<br>
      $primary-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ff6c00"></span>
      $fm-orange<br>
      $secondary-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #88BD45"></span>
      $fm-green<br>
      $success-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ffb718"></span>
      $fm-yellow<br>
      $warning-color
    </div>
  </div>
</div>
<br>
<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #00a19a"></span>
      $fm-teal
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #cf0a2c"></span>
      $fm-red<br>
      $alert-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #725090"></span>
      $fm-purple
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #457bbe"></span>
      $fm-dark-blue
    </div>
  </div>
</div>
<br>
<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #333333"></span>
      $dark-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #464645"></span>
      $medium-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #777874"></span>
      $fm-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #000000"></span>
      $black
    </div>
  </div>
</div>
<br>
<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #f4f4f4"></span>
      $light-gray
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #f9f9f9"></span>
      $offwhite
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ffffff"></span>
      $white
    </div>
  </div>
</div>
<br>
<h3>Mosaic Colors:</h3>
<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #c6d838"></span>
      $pear
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #a4c745"></span>
      $celery
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #88BD45"></span>
      $mosaic-start
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #E4F118"></span>
      $mosaic-end
    </div>
  </div>
</div>




# Text and Typography

There are several text and typography styles to choose from. They're balanced and sized along a modular scale -- while some may appear similar at desktop width, they scale down differently at mobile sizes.

---

## Generic Headings

<div class="callout">
  <p>Avoid skipping heading levels when structuring your document, as it confuses screen readers. If you need a heading to match a specific style, use one of the custom Header classes in the next section.</p>
</div>

```html
<h1>h1. This is a very large header.</h1>
<h2>h2. This is a large header.</h2>
<h3>h3. This is a medium header.</h3>
<h4>h4. This is a moderate header.</h4>
<h5>h5. This is a small header.</h5>
<h6>h6. This is a tiny header.</h6>
```

<div class="row">
  <div class="columns medium-6">
    default on lighter backgrounds:
    <div class="callout">
      <h1>H1 is the largest header</h1>
      <h2>H2 is a large header</h2>
      <h3>H3 is a medium header</h3>
      <h4>H4 is a moderate header</h4>
      <h5>H5 is a small header</h5>
      <h6>H6 is the smallest header</h6>
    </div>
  </div>
  <div class="columns medium-6">
    default on darker backgrounds:
    <div class="callout callout-blue">
      <h1>H1 is the largest header</h1>
      <h2>H2 is a large header</h2>
      <h3>H3 is a medium header</h3>
      <h4>H4 is a moderate header</h4>
      <h5>H5 is a small header</h5>
      <h6>H6 is the smallest header</h6>
    </div>
  </div>
</div>

---

## Lead Paragraph

A slightly-larger-than-normal block of text, useful for introductory blurbs, or other emphasized text. The `.lead` text is a slightly larger size than standard text.

```html_example
<p class="lead">What are your cats <em>really</em> dreaming about while they sleep? <strong>Use strong tag for <em>extra</em> emphasis.</strong></p>
<p>Standard paragraph for comparison. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula.</p>
```

---

## Call Out Paragraph <span id="call-out-txt"></span>

A brief, attention-catching key phrase, in a distinctive typeface and color, used as a graphic element, serving to entice readers into the article or to highlight a key topic.

```html_example
<p class="callout-txt">Visit lots of websites like Realtor, Zillow, Trulia, Homesnap, Redfin, and individual broker websites.</p>
```

---

## Custom Headings and Text Blocks

These styles can be applied to most HTML elements, such as `H1` - `H6`, `span`, `div`, or `p`.  Many of these styles are intended for specific uses, or for specific page types.  

```html
<p>For use in main content area.</p>
<h3 class="subtitle">This is a subtitle</h3>
<h3 class="section-subtitle">This is a section-subtitle</h3>
<h3 class="call-to-action-medium">This is a call-to-action-medium</h3>
<h3 class="call-to-action-light">This is a call-to-action-light</h3>
<p class="lead">This is class lead</p>
<p class="callout-txt">This is class callout-txt</p>

<p>These are for article pages (news, blog, ep)</p>
<h3 class="headline-article">This is a headline-article (use in news, blog)</h3>
<h3 class="headline-perspectives">This is a headline-perspectives (variation for EP)</h3>
<div class="article-category">This is an article-category</div>
<div class="article-date">This is an article-date</div>
<div class="article-date-lg">This is an article-date-lg (use in featured blog/EP)</div>
<div class="article-blurb">This is article-blurb (use in news, EP)</div>
<div class="article-blurb-blog">This is article-blurb-blog (use in blog)</div>
<div class="article-blurb-lg">This is article-blurb-lg (use in featured EP)</div>
<dic class="article-author">This is article-author <span class="uppercase">(Uppercase in EP)</span></div>

<p>For use in aside (sidebar) content area.</p>
<h3 class="sidebar-subtitle">This is a sidebar-subtitle</h3>
<h3 class="headline-article-sidebar">This is a headline-article-sidebar</h3>
 
<p>This should only be used inside Call Out Fullwidth Bands.</p>
<h3 class="callout-footer-title">This is callout-footer-title</h3>

<p>These should only be used inside HERO elements.</p>
<div class="hero-date">This is hero-date</div>
<h1 class="hero-title">This is hero-title</h1>
<div class="hero-subtitle">This is hero-subtitle (homepage only)</div>

<p>These should only be used on the corporate homepage.</p>
<h2 class="homepage-headline">This is homepage-headline</h2>
<h2 class="homepage-business-highlight-title">This is homepage-business-highlight-title</h2>
<h3 class="finance-grid-title">This is finance-grid-title</h3>
<h3 class="finance-row1-title">This is finance-row1-title</h3>    
<p class="stat-sm">This is stat-sm <strong>(3%)</strong></p>
<p class="stat-points">This is stat-points</p>
<p class="title-testimonial">This is title-testimonial</p>
```

<div class="row">
  <div class="columns">
    <p>For use in main content area.</p>
    <div class="callout">
      <h3 class="subtitle">This is a subtitle</h3>
      <h3 class="section-subtitle">This is a section-subtitle</h3>
      <h3 class="call-to-action-medium">This is a call-to-action-medium</h3>
      <h3 class="call-to-action-light">This is a call-to-action-light</h3>
      <p class="lead">This is class lead</p>
      <p class="callout-txt">This is class callout-txt</p>
    </div>  
    <p>For use in aside (sidebar) content area.</p>
    <div class="callout">
      <h3 class="sidebar-subtitle">This is a sidebar-subtitle</h3>
      <h3 class="headline-article-sidebar">This is a headline-article-sidebar</h3>
    </div>  
    <p>This should <strong>only</strong> be used inside <a href="#call-out-fullwidth-band">Call Out Fullwidth Bands</a>.</p>
    <div class="callout callout-blue">
      <h3 class="callout-footer-title">This is callout-footer-title</h3>
    </div>
    <p>These should <strong>only</strong> be used inside <a href="#heros">HERO containers</a>.</p>
    <div class="callout callout-primary">
      <div class="hero-date">This is hero-date</div>
      <h1 class="hero-title">This is hero-title</h1>
      <div class="hero-subtitle">This is hero-subtitle (homepage only)</div>
    </div>
    <p>These should <strong>only</strong> be used on the homepage.</p>
    <div class="callout">
      <h2 class="homepage-headline">This is homepage-headline</h2>
      <h2 class="homepage-business-highlight-title">This is homepage-business-highlight-title</h2>
      <h3 class="finance-grid-title">This is finance-grid-title</h3>
      <h3 class="finance-row1-title">This is finance-row1-title</h3>    
      <p class="stat-sm">This is stat-sm <strong>(3%)</strong></p>
      <p class="stat-points">This is stat-points</p>
      <p class="title-testimonial">This is title-testimonial</p>
    </div>
  </div>
</div>

---

# Blockquotes

Sometimes other people say smart things, and you may want to mention those things with a quote.

- Do **not** use a blockquote simply to decorate text that isn't a quotation.  Try using a [call-out](#call-out-text) for that purpose.
- Include the source for the quote in a `footer` and include the author, title or work in a `cite`.

```html_example
<blockquote>
  <p>Cowards die many times before their deaths; the <strong>valiant</strong> never taste of death but once.</p>
  <footer><cite>William Shakespeare</cite> in <cite>King Henry the Fifth</cite></footer>
</blockquote>
```



# Abbreviations

Use the `<abbr>` tag to annotate a shortened term. Abbreviations must always have a `title` attribute which clarifies the full term.

```html_example
<p>In my dream last night, I saw <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien and George <abbr title="Raymond Richard">R. R.</abbr> Martin hanging out on Sunset <abbr title="Boulevard">Blvd</abbr>.</p>
```



# Code and Keystrokes

Format references to markup languanges with the `<code>` tag.  Use the `<kbd>` element to annotate a key stroke or combination.

```html_example
Remember to escape angle brackets when printing HTML: <code>&lt;div&gt;</code>
<p>Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows) to exit.</p>
```



# Text Alignment

The default text alignment for most containers is left.
- You can change the text alignment of an element by adding `.text-left`, `.text-right`, or `.text-center` to an element.
- You can shift alignment at different breakpoints by adding a breakpoint to the front of a text alignment class. For example, `.medium-text-center` will keep text left-aligned on the smallest screens, but switch to center-aligned on medium screens and larger.

```html_example
<p class="text-left"><strong>This text is left-aligned.</strong> </p>
<p class="medium-text-right"><strong>This text is right-aligned</strong> at medium screen widths and larger.</p>
<p class="text-center"><strong>This text is center-aligned.</strong> </p>
```



# Dividers

Use dividers to define thematic breaks between paragraphs. To denote the end of one section of a page and the start of another, it's better to use the `<div>` tag.

```html
<hr>
```



# Lists

<p class="lead">There are 3 types of lists: definition, ordered, unordered. Additionally, there are custom styles (un-bulleted, divided, etc) that can be used to modify the default layout of list elements.</p>

## Definition Lists

A definition list (`<dl>`) is used to display name-value pairs, like metadata or a dictionary definition. Each term (`<dt>`) is paired with one or more definitions (`<dd>`).  Additionally, there is an alternate style with indention on the definitions, which can be used for Glossary-type layouts.

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

## Ordered Lists

Use an ordered list when creating a list where the order of the items is important. Ordered lists support additional attributes if you need to specify a starting number other than 0, apply a non-integer counting method, or reverse to decending order.

```html_example
<h5>Standard Nested List</h5>
<ol>
  <li>Cheese</li>
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
  <li>Peppers</li>
  <li>Pineapple</li>
  <li>Black Olives</li>
  <li>Green Olives</li>
</ol>
<h5>Reversed Display Order</h5>
<p>Use <code>.reversed</code> to visually reverse the display (for something like a "top 10 list" where you want the items to appear to count down to one. <strong>Note:</strong> this only reverses the visual display. The items are still marked up in their standard order.</p>
<ol class="reversed">
  <li>Cheese</li>
  <li>Pepperoni</li>
  <li>Bacon</li>
  <li>Sausage</li>
  <li>Onions</li>
  <li>Mushrooms</li>
  <li>Peppers</li>
  <li>Pineapple</li>
  <li>Black Olives</li>
  <li>Green Olives</li>
</ol>
<h5>Alphabetical lists</h5>
<p>Use <code>.upper-alpha</code> for uppercase or <code>.lower-alpha</code> for lowercase. If you go beyond 26, the count will shift from A-Z to AA-ZZ to AAA-ZZZ, etc. Nested lists are numeric unless you specify a different type.</p>
<ol class="upper-alpha">
  <li>Coffee</li>
  <li>Milk
    <ol class="lower-alpha">
      <li>Whole</li>
      <li>Reduced fat</li>
      <li>Skim</li>
    </ol>
  </li>
  <li>Tea
    <ol>
      <li>Black</li>
      <li>Herbal</li>
      <li>Green</li>
    </ol>
  </li>
  <li>Soda</li>
</ol>
<h5>Roman Numerals lists</h5>
<p>Use <code>.upper-roman</code> for uppercase or <code>.lower-roman</code> for lowercase. Nested lists are numeric unless you specify a different type.</p>
<ol class="upper-roman">
  <li>Coffee</li>
  <li>Milk
    <ol class="lower-roman">
      <li>Whole</li>
      <li>Reduced fat</li>
      <li>Skim</li>
    </ol>
  </li>
  <li>Tea
    <ol>
      <li>Black</li>
      <li>Herbal</li>
      <li>Green</li>
    </ol>
  </li>
  <li>Soda</li>
</ol>
<h5>Leading Zero list</h5>
<p>Use <code>.leading-zero</code> to include leading zeros on the numbers 1-9. Nested lists are numeric unless you specify a different type.</p>
<ol class="leading-zero">
  <li>Cheese</li>
  <li>Pepperoni</li>
  <li>Bacon</li>
  <li>Sausage</li>
  <li>Onions</li>
  <li>Mushrooms</li>
  <li>Peppers</li>
  <li>Pineapple</li>
  <li>Black Olives</li>
  <li>Green Olives</li>
</ol>
<h5>Descending list</h5>
<ol reversed>
  <li>Coffee</li>
  <li>Milk</li>
  <li>Tea</li>
  <li>Soda</li>
</ol>
<h5>Start any list at a number other than One</h5>
<p>Provide a numeric value to the <code>start</code> attribute (even if the list is alpabetical). <strong>Note:</strong> you will need to add custom padding to a list where the item count is 3 digits or more -- our default level of indention displays best for 1-2 digit numbers.</p>
<ol start="98">
  <li>Coffee</li>
  <li>Milk
    <ol class="lower-alpha" start="8">
      <li>Whole</li>
      <li>Reduced fat</li>
      <li>Skim</li>
    </ol>
  </li>
  <li>Tea</li>
  <li>Soda</li>
</ol>
```

---

## Unordered Lists

Use an unordered list to... *list things*, if the order of the items doesn't matter.

```html_example
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item
    <ul>
      <li>Nested list item      
        <ul>
          <li>Nested in a nested list item   
            <ol>
              <li>Numbered list</li>
              <li>Deeply nested</li>
            </ol>
          </li>
        </ul>
      </li>
      <li>Nested list item</li>
      <li>Nested list item</li>
    </ul>
  </li>
  <li>List item</li>
  <li>List item. This is a list item with a much longer content.  Sometimes a list item is long enough that it will span multiple lines.  This is an example of such an item, to show the line height, padding, and margin that are applied to this list element when it is long enough to wrap to a new line.</li>
  <li>List item</li>
</ul>
```

---

### Un-bulleted Unordered Lists

The `<ul>` is a bulleted list by default, but you can add the class `.no-bullet` to remove the bullets from that list.  Nested lists will retain their formatting unless also modified.

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
  <li>List item. This is a list item with a much longer content.  Sometimes a list item is long enough that it will span multiple lines.  This is an example of such an item, to show the line height, padding, and margin that are applied to this list element when it is long enough to wrap to a new line.</li>
  <li>List item</li>
</ul>
```

---

### Divided Lists

To add dividers between items in a list, add the class `.list-divided` to the list tag.  Typically the dividers are used along with the `.no-bullet` class.

```html_example
<ul class="no-bullet list-divided">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
  <li>List item. This is a list item with a much longer content.  Sometimes a list item is long enough that it will span multiple lines.  This is an example of such an item, to show the line height, padding, and margin that are applied to this list element when it is long enough to wrap to a new line.</li>
  <li>List item</li>
</ul>
```

---

### Expanded Lists

If you require additional space between very long, complex list items -- such as those where multiple paragraphs are in a single list item, use `<p>` tags.

```html_example
<ul>
  <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor <a href="#">orci eros, ac molestie lorem</a> dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat.</p></li>
  <li><p>Proin diam quam, elementum in eleifend id, elementum et metus. Cras in justo consequat justo semper ultrices. Sed dignissim lectus a ante mollis, nec vulputate ante molestie. Proin in porta nunc. Etiam pulvinar turpis sed velit porttitor, vel adipiscing velit fringilla. Cras ac tellus vitae purus pharetra tincidunt. Sed cursus aliquet aliquet. <strong>Cras eleifend commodo malesuada.</strong> In turpis turpis, ullamcorper ut tincidunt a, ullamcorper a nunc. Etiam luctus tellus ac dapibus gravida. Ut nec lacus laoreet neque ullamcorper volutpat.</p>
  <p>Nunc et leo erat. Aenean mattis ultrices lorem, eget adipiscing dolor ultricies eu. In hac habitasse platea dictumst. Vivamus cursus feugiat sapien quis aliquam. Mauris quam libero, porta vel volutpat ut, blandit a purus. Vivamus vestibulum <a href="#">dui vel tortor molestie</a>, sit amet feugiat sem commodo. Nulla facilisi. Sed molestie arcu eget tellus vestibulum tristique.</p>
  </li>
  <li><p>Nullam ut tincidunt nunc. Pellentesque metus lacus, commodo eget justo ut, rutrum varius nunc. <strong>Sed non rhoncus risus.</strong> Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, <a href="#">nec consequat ipsum mattis id</a>. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu.</p>
  <p><em>Suspendisse potenti.</em> Donec ante velit, ornare at augue quis, <a href="#">tristique laoreet sem</a>. Etiam in ipsum elit. Nullam cursus dolor sit amet nulla feugiat tristique. Phasellus ac tellus tincidunt, imperdiet purus eget, ullamcorper ipsum. Cras eu tincidunt sem. Nullam sed dapibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id venenatis tortor. In consectetur sollicitudin pharetra. Etiam convallis nisi nunc, et aliquam turpis viverra sit amet. Maecenas faucibus sodales tortor.</p>
  <p>Suspendisse lobortis mi eu leo viverra volutpat. Pellentesque velit ante, vehicula sodales congue ut, elementum a urna. Cras tempor, ipsum eget luctus rhoncus, arcu ligula fermentum urna, vulputate pharetra enim enim non libero.</p></li>
  <li><p>Vivamus sagittis, diam in vehicula lobortis, <a href="#">sapien arcu mattis erat</a>, vel aliquet sem urna et risus. Ut feugiat sapien vitae mi elementum laoreet. Suspendisse potenti. Aliquam erat nisl, aliquam pretium libero aliquet, sagittis eleifend nunc. In hac habitasse platea dictumst. Integer turpis augue, tincidunt dignissim mauris id, rhoncus dapibus purus. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In dictum mauris vel augue varius, ac ullamcorper nisl ornare. In eu posuere velit, ac fermentum arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sed malesuada leo, at interdum elit.</p></li>
</ul>
```

---

### Compact Lists

Plain `<li>` elements (not those styles as tabs, accordions, carousels, etc) have default margins to separate each item to provide better scanability.  If you are creating a custom layout element using list items, you can override the default margin by adding a class of `.compact` to the `<ul>` or `<ol>` container.

```html_example
<ul class="compact">
  <li>List item</li>
  <li>List item</li>
  <li>List item. This is a list item with a much longer content.  Sometimes a list item is long enough that it will span multiple lines.  This is an example of such an item, to show the line height, padding, and margin that are applied to this list element when it is long enough to wrap to a new line.</li>
  <li>List item</li>
</ul>
```



# Anchor Links

<p>Links are very standard, and the color is preset to the Foundation primary color. In addition, there are some custom link styles, such as  `.icon` (when you want to include an svg icon and have it inherit its size and color states from the link) and `.secondary` when you want the link to be secondary color isntead of primary. </p>
<p>Links inside <a href="#sidebar-modules">sidebar modules</a> and links inside <a href="#article-blocks">Article Blocks</a> inherit the existing text color to blend in better.</p>
<p>Refer to <a href="#modals">Modals</a> if you are looking for information on how to make a link launch a video, image, or content block inside a modal.</p>
<div class="callout">
  <p>To make links screen reader-friendly, avoid using vague words like "here" or "read more" within link text. The text of the link itself should adequately describe where the link goes.</p>
</div>

```html_example
<ul class="no-bullet">
<li><a href="#">standard link</a></li>
<li><a href="#" class="icon">link with icon <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4-26.3-27.8-64-45.7-105.3-45.7h-.1-.1c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1zM161 193.1c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5v.2l-.1.1c18.3 19.2 28.1 53 28.1 80.3V224H161v-30.9z"/></svg></a></li>
<li><a href="#" class="icon secondary">secondary link with icon <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 0 450 480"><path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z"/></svg></a></li>
</ul>
```

## Linked Image Overlays

Apply the `.overlay` class to the `<a>` that wraps an image to style the image with a blue overlay on hover and focus.
Refer to <a href="#blog-feature">Blog Feature</a> for a dark variant on the overlay.

```html
<a class="overlay" href="#"><img alt="photo of David Brickman" src="/images/exec_david_brickman.jpg"></a>
```

<div class="row">
  <div class="small-6 medium-3 columns small-centered">
    <a class="overlay" href="#"><img alt="photo of David Brickman" src="/images/exec_david_brickman.jpg"></a>
  </div>
</div>

---



# Visibility Classes

Visibility classes let you show or hide elements based on screen size or device orientation. You can also use visibility classes to control which elements users see depending on their browsing environment.

<div class="callout">
  <p>There are no classes to detect touchscreen devices, as both desktop and mobile browsers inconsistently report touch support. Learn more here: <a href="http://www.stucox.com/blog/you-cant-detect-a-touchscreen/">You Can't Detect a Touchscreen</a></p>
</div>

## Show/Hide by Screen Size/Orientation

There are `.show-for-xxx` and `.hide-for-xxx` visibility classes to control the visiblity of an element based on the device on which users view a page. If their browser meets the class's conditions, the element will be shown. If not, it will be hidden.

```html_example
<p>You are on a small screen or larger.</p>
<p class="show-for-medium">You are on a medium screen or larger.</p>
<p class="show-for-large">You are on a large screen or larger.</p>
<p class="show-for-small-only">You are <em>definitely</em> on a small screen.</p>
<p class="show-for-medium-only">You are <em>definitely</em> on a medium screen.</p>
<p class="show-for-large-only">You are <em>definitely</em> on a large screen.</p>
<p class="hide-for-medium">You are <em>not</em> on a medium screen or larger.</p>
<p class="hide-for-large">You are <em>not</em> on a large screen or larger.</p>
<p class="hide-for-small-only">You are <em>definitely not</em> on a small screen.</p>
<p class="hide-for-medium-only">You are <em>definitely not</em> on a medium screen.</p>
<p class="hide-for-large-only">You are <em>definitely not</em> on a large screen.</p>
<p class="show-for-landscape">You are in landscape orientation.</p>
<p class="show-for-portrait">You are in portrait orientation.</p>
```

---

## Show/Hide for Screen Readers

And if you really just need something hidden no matter what, there are classes for that as well. The `.hide` and `.invisible` classes respectively set `display: none` and `visibility: hidden` on an element. Note that both of these classes hide content from screen readers.

To visually hide content, while still allowing assistive technology to read it, add the class `.show-for-sr`.  To hide text from assistive technology, while still keeping it visible, add the attribute `aria-hidden="true"`. This doesn't affect how the element looks, but screen readers will skip over it.

Use the class `.show-on-focus` to hide an element, except when it has focus. Adding tabindex="0" to the target element makes if focusable.

```html_example
<p class="hide">Hidden for all users.</p>
<p class="invisible">Not visible for all users, but still occupies space on screen.</p>
<p class="show-for-sr">This text can only be read by a screen reader.</p>
<p>There's a line of text above this one, you just can't see it because it is only shown to screen readers.</p>
<p aria-hidden="true">This text can be seen, but won't be read by a screen reader.</p>

<p>Click on this sentence and then hit tab to see the skip link appear while it has focus.</p>
<p><a name="skiplink" class="show-on-focus" href="#sampleContent">Skip to Content</a></p>

<div id="sampleContent" role="main" tabindex="0" style="min-height: 1rem;">
</div>
```



# Float Classes

<p class="lead">Foundation includes a handful of helpful float classes to add common positioning behaviors to elements.</p>

---

## Float Left/Right

You can change the float behavior of an element by adding the `.float-left` or `.float-right` classes to an element. To clear floats, add the class `.clearfix` to the parent element.


```html_example
<div class="callout clearfix">
  <a class="button secondary float-left">Left</a>
  <a class="button secondary float-right">Right</a>
</div>
```

---

## Float Center

Okay, it's not *really* a float, but you can add the `.float-center` class to an element to engage the automatic margin centering trick. Note that this will only work on elements with an absolute width, which means not a percentage or `auto` width.

```html_example
<img src="/images/blog/fm_blog_usda_returns.jpg" alt="Harp - act now!" class="float-center">
```



# Buttons

<p class="lead">The following `.button` styles can be used either on anchor links or on actual <code>button</code> tags.  The size can be adjusted by adding a class of `.small`, or `.large`.</p>

---

## Default Buttons

Use default buttons for minor actions like resetting a form or cancelling a request.

```html_example
<p>
  <a href="#" class="large button">Button (large)</a>
  <a href="#" class="button">Button (default)</a>
  <a href="#" class="small button">Button (small)</a>
</p>
```

---

## Primary Buttons

Use class `.primary`, for buttons used for primary calls-to-action, like submitting a form.  Use sparingly; there shouldn't be multiple calls-to-action on most web pages.

```html_example
<p>
  <a href="#" class="primary large button">Button (large)</a>
  <a href="#" class="primary button">Button (default)</a>
  <a href="#" class="primary small button">Button (small)</a>
</p>
```

---

## Secondary Buttons

Use class `.secondary` for buttons used for less important, secondary actions on a page.

```html_example
<p>
  <a href="#" class="secondary large button">Button (large)</a>
  <a href="#" class="secondary button">Button (default)</a>
  <a href="#" class="secondary small button">Button (small)</a>
</p>
```

---

## Tertiary Buttons

Use class `.tertiary` for buttons for logins.  See below section on buttons with icons to include a padlock.

```html_example
<p>
  <a href="#" class="tertiary large button">Button (large)</a>
  <a href="#" class="tertiary button">Button (default)</a>
  <a href="#" class="tertiary small button">Button (small)</a>
</p>
```

---

## Hollow Buttons

Use class `.hollow` for buttons that aren't a call-to-action which are on a dark background, such as in carousels or modals. 

```html_example
<div class="callout callout-purple">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
<div class="callout callout-teal">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
<div class="callout callout-primary">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
```

---

## Buttons with Icons

If your svg icon includes a fill color (as in the third example), it will maintain that color on hover, focus, and active states.
If you use a one-color svg icon without a fill color, css will allow it to inherit the current TEXT color as it's fill color, and will adjust to match the text's color on hover, focus, and active states.  Use a tool like <a href="https://jakearchibald.github.io/svgomg/">SVGOMG</a> to optimize the svg markup.

```html_example
<p>
  <a href="#" class="button tertiary">Log In <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 450"><path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4-26.3-27.8-64-45.7-105.3-45.7h-.2c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1zM161 193.1c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5v.2l-.1.1c18.3 19.2 28.1 53 28.1 80.3V224H161v-30.9z" /></svg></a>

  <a class="button secondary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 400 400"><path d="M189.3 128.4L89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z"/></svg> Previous</a>
      
  <a class="button secondary">Next <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 400 400"><path d="M322.7 128.4l100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/></svg></a>
</p>
```

---

## Close Button <span id="close-button"></span>

A close button is a `<button>` element with the class `.close-button`. We use the multiplication symbol (`&times;`) as the X icon. This icon is wrapped in a `<span>` with the attribute `aria-hidden="true"`, so screen readers don't read the X icon.

The button is also labeled with `aria-label` to clarify what the button's purpose is.

```html_example
<div class="callout callout-yellow">
  <button class="close-button" aria-label="Close alert" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
  <p>Look at this close button!</p>
</div>
```

---

### Making Something Closable


The close button on its own doesn't close elements, but you can use it with other plugins that have open and close behaviors.


<div class="callout">
  <p>Any element can be used as a close trigger, not just close button. Adding the attribute <code>data-close</code> to any element within the callout will turn it into a close trigger.</p>
</div>

The below example pairs the callout with the close button component and `data-closable` attribute to create a dismissible alert box.

```html_example
<div class="row">
  <div class="large-12 columns">
    <div class="large-6 columns">
      <div class="callout" data-closable>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <p>You can so totally close this!</p>
      </div>
    </div>
    <div class="large-6 columns">
      <div class="callout" data-closable="slide-out-right">
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <p>You can close me too, and I close using a Motion UI animation.</p>
      </div>
    </div>
  </div>
</div>
```



# Button Group

<p class="lead">Button groups are containers for related action items. They're great when you need to display a group of actions in a bar. </p>

Add the `.button-group` class to a container, and inside it place any number of buttons. The buttons are separated by a small border.

Add the `.expanded` class to the container to make a full-width button group. Each item will automatically size itself based on how many buttons there are, up to a maximum of four.

```html_example
<div class="button-group">
  <a class="button">View</a>
  <a class="primary button">Edit</a>
  <a class="secondary button">Share</a>
  <a class="tertiary button">Delete</a>
</div>
<br>
<div class="expanded button-group">
  <a class="button">View</a>
  <a class="primary button">Edit</a>
  <a class="secondary button">Share</a>
  <a class="tertiary button">Delete</a>
</div>
```



# Heros

<p class="lead">There are several different hero styles, depending upon page type.  For pages that aren't landing pages or relying on a blog-like format, you should use a [page title](#page-title) instead of a hero.</p>

---

## Landing Page Heros

Landing Pages are those pages that are linked from the primary navigation. Add one of the following classes to the `.hero-blended` container to specify the background for a particular landing page: `.perspectives-landing-hero`, `.research-landing-hero`, `.blog-landing-hero`, `.media-landing-hero`, `.about-landing-hero`.


```html_example
<div class="hero-blended about-landing-hero">
  <div class="row vertical-center-full">
    <div class="columns">
      <div class="hero-blended-content">
        <h1 class="hero-title">About Us</h1>
        <p>Our statutory mission is to provide liquidity, stability and affordability to the U.S. housing market.</p>
      </div>
    </div>
  </div>
</div>
```

---

## Blog Detail Heros

Use this hero on Blog article pages.  Elements inside the hero include the date, the title, and the blog category.

```html
<div class="hero-blended blog-detail-hero">
  <div class="row vertical-center-full">
	  <div class="columns">
		  <div class="hero-blended-content">
		  	<div class="hero-date">May 9, 2016</div>
		    <h1 class="hero-title">Take the Anxiety Out of Your First Home Offer</h1>
		    <p><a href="#" class="hollow button small">Homeownership</a></p>
		  </div>
		</div>
	</div>
  <!-- and a share widget -->
</div>
```

<div class="grid-2col-article">
  <div class="hero-blended blog-detail-hero">
    <div class="row vertical-center-full">
      <div class="columns">
        <div class="hero-blended-content">
          <div class="hero-date">May 9, 2016</div>
          <h1 class="hero-title">Take the Anxiety Out of Your First Home Offer</h1>
          <p><a href="#" class="hollow button small">Homeownership</a></p>
        </div>
      </div>
    </div>
    <!-- and a share widget -->
  </div>
</div>

---

## Executive Perspectives Heros

Use this hero on Executive Perspectives article pages.  Elements include the label "Executive Perspectives", the date, the title, the author's image, the author's name, and the author's title.

```html
<div class="perspectives-detail-hero hero-blended">
  <div class="row column vertical-center-full">
    <div class="hero-blended-content">
      <div><strong>Executive Perspectives</strong></div>
      <div class="hero-date">August 9, 2016</div>
      <h1 class="hero-title">Three Reasons Why Baby Boomer Homeowners are a Market to Watch</h1>
      <figure class="avatar">
        <div>
          <img src="/images/exec_david_brickman.jpg" alt="Avatar img" />
        </div>
        <div>
          <figcaption class="reduce">Article By<br><strong>David Brickman, EVP Multifamily Business</strong></figcaption>
        </div>
      </figure>
    </div>
	</div>
  <!-- and a share widget -->
</div>
```

<div class="grid-2col-article">
  <div class="perspectives-detail-hero hero-blended">
    <div class="row column vertical-center-full">
      <div class="hero-blended-content">
        <div><strong>Executive Perspectives</strong></div>
        <div class="hero-date">August 9, 2016</div>
        <h1 class="hero-title">Three Reasons Why Baby Boomer Homeowners are a Market to Watch</h1>
        <figure class="avatar">
          <div>
            <img src="/images/exec_david_brickman.jpg" alt="Avatar img" />
          </div>
          <div>
            <figcaption class="reduce">Article By<br><strong>David Brickman, EVP Multifamily Business</strong></figcaption>
          </div>
        </figure>
      </div>
    </div>
    <!-- and a share widget -->
  </div>
</div>



# Page Title

Every page should use either a [hero element](#heros) or a page title.  There are 2 options for page titles, depending on if the page includes a tertiary nav or not.

## Page Title: Page Without Tertiary Navigation

For pages without a tertiary nav, the column with the title goes full width at all breakpoints.

```html_example
<div class="page-title">
  <div class="row">
    <div class="column">
      <h1 class="hero-title">Page Title That is Quite Long to Show Where Wrapping Occurs</h1>
    <div>
  </div>
</div>
```

---

## Page Title: Page With Tertiary Navigation

For pages with a tertiary nav, the column with the title must wrap at the 8 columns mark at large breakpoint or higher, to allow for the tertiary nav to overlap the page title.

```html_example
<div class="page-title">
  <div class="row">
    <div class="large-8 end column">
      <h1 class="hero-title">Page Title That is Quite Long to Show Where Wrapping Occurs</h1>
    <div>
  </div>
</div>
```



# Article Blocks

Article Blocks are a grouping of article entries, that include an image, headline, date, and optional blurb, category or author for each entry.

## Blog Blocks

```html_example
<div class="row medium-up-2 large-up-4" data-equalizer data-equalize-on="medium">
	<div class="column">
		<div class="article-block" data-equalizer-watch>
		  <a class="overlay" href="#">
		    <img src="/images/blog/blog-2.jpg" alt="Blog Img" />
		  </a>
      <div class="clippings-block-blog">
        <div class="article-date">May 13, 2016</div>
        <h3 class="headline-article"><a href="#">Down Payments: There's Help for That</a></h3>
        <div class="article-category">Homeownership</div>
        <p class="article-blurb-blog">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
		</div>
	</div>
	<div class="column">
		<div class="article-block" data-equalizer-watch>
		  <a class="overlay" href="#">
		    <img src="/images/blog/blog-3.jpg" alt="Blog Img" />
		  </a>
      <div class="clippings-block-blog">
        <div class="article-date">May 27, 2016</div>
        <h3 class="headline-article"><a href="#">Dear Seller, Pick Me</a></h3>
        <div class="article-category">Notable</div>
        <p class="article-blurb-blog">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
		</div>
	</div>
	<div class="column">
		<div class="article-block" data-equalizer-watch>
		  <a class="overlay" href="#">
		    <img src="/images/blog/blog-1.jpg" alt="Blog Img" />
		  </a>
      <div class="clippings-block-blog">
        <div class="article-date">May 30, 2016</div>
        <h3 class="headline-article"><a href="#">Try, Try Again: Responding to a Counteroffer</a></h3>
        <div class="article-category">Notable</div>
        <p class="article-blurb-blog">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
		</div>
	</div>
	<div class="column">
		<div class="article-block" data-equalizer-watch>
		  <a class="overlay" href="#">
		    <img src="/images/blog/blog-4.jpg" alt="Blog Img" />
		  </a>
      <div class="clippings-block-blog">
        <div class="article-date">June 2, 2016</div>
        <h3 class="headline-article"><a href="#">Outlook 2016: More Apartments, Low Vacancy Rates, Higher Rent</a></h3>
        <div class="article-category">Research &amp; Analysis</div>
        <p class="article-blurb-blog">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
		</div>
	</div>
</div>
```



# Feature Articles

## Featured Blog Articles

On the blog landing page, the first 2 entries are featured with large images and different styling to make them more prominent.

```html_example
<div class="row">
  <div class="columns large-6">
    <div class="article-block article-block-lg">
      <a href="/corporate/blog-detail.html" class="overlay overlay-dark">
        <img src="/images/blog/feature-1.jpg" alt="Blog Img"/>
        <div class="overlay-contents">
          <div class="article-date-lg">October 18, 2016</div>
          <h3 class="subtitle">Baby Boomer Myths: Up-Close and Personal with Sean Becketti, Chief Economist</h3>
          <div class="article-category">Research &amp; Analysis</div>
        </div>
      </a>
    </div>
  </div>
  <div class="columns large-6">
    <div class="article-block article-block-lg">
      <a href="/corporate/blog-detail.html" class="overlay overlay-dark">
        <img src="/images/blog/feature-2.jpg" alt="Blog Img"/>
        <div class="overlay-contents">
          <div class="article-date-lg">Oct 13, 2016</div>
          <h3 class="subtitle">Don't Be Spoofed</h3>
          <div class="article-category">Notable</div>
        </div>
      </a>
    </div>
  </div>
</div>
```      



# Callouts

<p class="lead">A callout is just a container with a `.callout` class applied. You can put any kind of content inside.  There are two types of callouts -- the ones shown below are for use within the content area, and the [footer band](#callout-fullwidth) for use below your content.</p>

```html
<div class="callout">
  <p>This is a callout.</p>
</div>
```
---

## Coloring

The background of the callout can be chnaged by including any of the following classes:

* `callout-hollow`
* `callout-gray`
* `.callout-blue`
* `.callout-green`
* `.callout-orange`
* `.callout-yellow`
* `.callout-purple`
* `.callout-teal`
* `.callout-primary`
* `.callout-alert`

```html_example
<div class="row">
  <div class="medium-6 columns">
    <div class="callout">
      <p>This is a default <a href="#">callout</a>.</p>
    </div>
    <div class="callout callout-hollow">
      <p>This is a <a href="#">callout</a> with a class of hollow.</p>
    </div>
    <div class="callout callout-gray">
      <p>This is a <a href="#">callout</a> with class of callout-gray.</p>
    </div>
    <div class="callout callout-blue">
      <p>This is a <a href="#">callout</a> with class of callout-blue.</p>
    </div>
    <div class="callout callout-green">
      <p>This is a <a href="#">callout</a> with a class of callout-green.</p>
    </div>
  </div>
  <div class="medium-6 columns">
    <div class="callout callout-orange">
      <p>This is a <a href="#">callout</a> with a class of callout-orange.</p>
    </div>
    <div class="callout callout-yellow">
      <p>This is a <a href="#">callout</a> with callout-yellow</p>
    </div>
    <div class="callout callout-purple">
      <p>This is a <a href="#">callout</a> with class of callout-purple.</p>
    </div>
    <div class="callout callout-teal">
      <p>This is a <a href="#">callout</a> with class of callout-teal.</p>
    </div>
    <div class="callout callout-primary">
      <p>This is a <a href="#">callout</a> with class of callout-primary.</p>
    </div>
    <div class="callout callout-alert">
      <p>This is a <a href="#">callout</a> with class of callout-alert.</p>
    </div>
  </div>
</div>
```

 ---

## Sizing

Callouts can be sized using the `.small` and `.large` classes. These will affect the padding around content to be smaller and larger respectively.


```html_example
<div class="row">
  <div class="medium-8 columns">
    <div class="callout callout-purple large">
      <p>This is a callout with class of large. It has more padding between the contents and the edge of the container. And the text is 20% larger.</p>
    </div>
  </div>
  <div class="medium-4 columns">
    <div class="callout callout-purple small">
      <p>This is a callout with class of small. It has less padding between the contents and the edge of the container.</p>
    </div>
  </div>
</div>
```

---

## Making Callouts Closable

Pair the callout with the [close button](#close-button) component and `data-closable` attribute to create a dismissable alert box.

<div class="callout">
  <p>Any element can be used as a close trigger, not just close button. Adding the attribute <code>data-close</code> to any element within the callout will turn it into a close trigger.</p>
  <p>When using the <code>data-closable</code> attribute, you can optionally add <a href="http://foundation.zurb.com/sites/docs/motion-ui.html">Motion UI</a> classes to the attribute to change the closing animation. If no class is added, the plugin defaults to jQuery's <code>.fadeOut()</code> function.</p>
</div>

```html_example
<div class="row">
  <div class="medium-6 columns">
    <div class="callout callout-orange" data-closable>
      <h5>This is Important!</h5>
      <p>When you're done reading it, click the close button in the corner to dismiss this alert.</p>
      <p>I'm using the default <code>data-closable</code> parameters, and simply fade out.</p>
      <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
  <div class="medium-6 columns">
    <div class="callout callout-green" data-closable="slide-out-right">
      <h5>This a friendly message.</h5>
      <p>When you're done reading it, click the close button in the corner to dismiss this message.</p>
      <p>And when you're done with me, I close using a Motion UI animation.</p>
      <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</div>
```



# Call Out Fullwidth Band

A Callout Fullwidth Band is a full width band of content.  On most interior pages, it goes immediately above the footer.  Never use more than one call out footer band per page, and limit the content of the footer band to a single concept and link.  The first `div` should contain the supporting text, and the second `div` should contain the link or a one-field form, if appropriate.   Use these classes to specify the background color for the callout fullwidth bands:

* `callout-gray`
* `.callout-primary`
* `.callout-blue`
* `.callout-green`
* `.callout-orange`
* `.callout-yellow`
* `.callout-purple`
* `.callout-teal`

```html_example
<div class="callout callout-primary callout-fullwidth">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="columns large-8" data-equalizer-watch>
      <h3 class="callout-footer-title">Getting To Know Freddie Mac</h3>
      <p>Every day, Freddie Mac employees ensure mortgage credit is available for America's families and help rebuild the nation's housing finance system.</p>
      <p>Learn how Our Mission is making a positive impact.</p>
    </div>
    <div class="columns large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="callout-fullwidth-cta">
       <a class="hollow button large" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</div>
<div class="callout callout-yellow callout-fullwidth">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="columns large-8" data-equalizer-watch>
       <h3 class="callout-footer-title">My Home by Freddie Mac®</h3>
      <p>We offer the resources to help you make informed housing decisions and support your success – whether you rent, own, or plan to buy a home.</p>
    </div>
    <div class="columns large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="callout-fullwidth-cta">
       <a class="hollow large button" href="http://myhome.freddiemac.com/">Find it</a>
      </div>
    </div>
  </div>
</div>
<div class="callout callout-teal callout-fullwidth">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="columns large-8" data-equalizer-watch>
      <h3 class="callout-footer-title">Getting To Know Freddie Mac</h3>
      <p>Every day, Freddie Mac employees ensure mortgage credit is available for America's families and help rebuild the nation's housing finance system.</p>
      <p>Learn how Our Mission is making a positive impact.</p>
    </div>
    <div class="columns large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="callout-fullwidth-cta">
       <a class="hollow button large" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</div>
```



#  Sidebar Modules

<p class="lead">There are a variety of modules available for use in a side bar, when you are using the Two Column Layout.</p>
<p>Links inside most sidebar modules inherit the existing text color (typically white) to blend in better.</p>

---

## Popular List Items

```html
<section class="sidebar sidebar-yellow">
  <div class="row">
    <h2>Trending Now</h2>
    <ul class="sidebar-list no-bullet lead">
      <li><a href="#">Credit Smart</a></li>
      <li><a href="#">Education &amp; Tools</a></li>
      <li><a href="#">Fraud</a></li>
      <li><a href="#">HARP</a></li>
      <li><a href="#">MiMi</a></li>
    </ul>
  </div>
</section>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
    </main>
    <aside class="column">  
      <section class="sidebar sidebar-yellow">
        <div class="row">
          <h2>Trending Now</h2>
          <ul class="sidebar-list no-bullet lead">
            <li><a href="#">Credit Smart</a></li>
            <li><a href="#">Education &amp; Tools</a></li>
            <li><a href="#">Fraud</a></li>
            <li><a href="#">HARP</a></li>
            <li><a href="#">MiMi</a></li>
          </ul>
        </div>
      </section>
    </aside>
  </div>
</div>

---

## Call To Action

```html
<section class="sidebar sidebar-blue">
  <div class="row">
    <div class="sidebar-txt">
      <h2 class="sidebar-subtitle">Get The Weekly Roundup</h2>
      <p>Sign up for the <strong>Weekly Roundup</strong> and get Freddie Mac blog articles delivered to your inbox.</p>
      <form class="form outline outline-primary">
        <p><input type="email" placeholder="Your Email Address"></p>
        <p><a class="primary button expanded" href="#">Sign Up</a></p>
      </form>
    </div>
  </div>
</section>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
    </main>
    <aside class="column">
      <section class="sidebar sidebar-blue">
        <div class="row">
          <div class="sidebar-txt">
            <h2 class="sidebar-subtitle">Get The Weekly Roundup</h2>
            <p>Sign up for the <strong>Weekly Roundup</strong> and get Freddie Mac blog articles delivered to your inbox.</p>
            <form class="form outline outline-primary">
              <p><input type="email" placeholder="Your Email Address"></p>
              <p><a class="primary button expanded" href="#">Sign Up</a></p>
            </form>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>

---

## RSS

```html
<section class="sidebar sidebar-gray">
  <div class="row">
    <h2>RSS Blog Feeds</h2>
    <ul class="sidebar-list no-bullet lead list-rss">
      <li><a href="#">All Posts</a></li>
      <li><a href="#">Homeownership</a></li>
      <li><a href="#">Rental Housing</a></li>
      <li><a href="#">Research &amp; Analysis</a></li>
      <li><a href="#">Notable</a></li>
    </ul>
  </div>
</section>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
      <main class="column">
      </main>
      <aside class="column">
        <section class="sidebar sidebar-gray">
          <div class="row">
            <h2>RSS Blog Feeds</h2>
            <ul class="sidebar-list no-bullet lead list-rss">
              <li><a href="#">All Posts</a></li>
              <li><a href="#">Homeownership</a></li>
              <li><a href="#">Rental Housing</a></li>
              <li><a href="#">Research &amp; Analysis</a></li>
              <li><a href="#">Notable</a></li>
            </ul>
          </div>
        </section>
      </aside>
  </div>
</div>

---

## News List

Note: The news release lists are automated by MarketWire.


```html
<section class="sidebar sidebar-concrete">
  <div class="row">
    <div class="sidebar-txt">
      <h2 class="sidebar-subtitle">Recent News</h2>
      <ul class="sidebar-list no-bullet">
        <li><a href="#">08/08/16 -  Freddie Mac (OTCQB: FMCC) today issued the company's stress test results for the severely adverse scenario conducted under FHFA's rule...</a> </li>
        <li><a href="#">08/02/16 -  Freddie Mac (OTCQB: FMCC) today reported its second quarter 2016 financial results and filed its quarterly Form 10-Q with the U.S. Securities...</a> </li>
        <li><a href="#">Jul 29, 2016 - Freddie Mac (OTCQB: FMCC) announced today that it plans to report its second quarter 2016 financial results before the U.S. financial markets...</a></li>	
      </ul>
    </div>
  </div>
</section>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
    </main>
    <aside class="column">
      <section class="sidebar sidebar-concrete">
        <div class="row">
          <div class="sidebar-txt">
            <h2 class="sidebar-subtitle">Recent News</h2>
            <ul class="sidebar-list no-bullet">
              <li><a href="#">08/08/16 -  Freddie Mac (OTCQB: FMCC) today issued the company's stress test results for the severely adverse scenario conducted under FHFA's rule...</a> </li>
              <li><a href="#">08/02/16 -  Freddie Mac (OTCQB: FMCC) today reported its second quarter 2016 financial results and filed its quarterly Form 10-Q with the U.S. Securities...</a> </li>
              <li><a href="#">Jul 29, 2016 - Freddie Mac (OTCQB: FMCC) announced today that it plans to report its second quarter 2016 financial results before the U.S. financial markets...</a></li>	
            </ul>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>

---

## Featured Article

```html
<section class="sidebar sidebar-blue sidebar-feature">
  <div class="feature-background" style="background-image: url('/images/feature-bg.jpg')"></div>
  <div class="row">
    <div class="sidebar-txt">
      <div class="article-category">Featured Insight</div>
      <h3 class="sidebar-subtitle">Life's a Beach</h3>
      <p class="lead">So you've always dreamed of living at the beach, but you're discouraged by the high price of beachfront property? Not to worry. We've found just the place for you.  </p>
      <p><a class="hollow button expand" href="#">Read More</a></p>
    </div>
  </div>
</section>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
    </main>
    <aside class="column">
      <section class="sidebar sidebar-blue sidebar-feature">
        <div class="feature-background" style="background-image: url('/images/feature-bg.jpg')"></div>
        <div class="row">
          <div class="sidebar-txt">
            <div class="article-category">Featured Insight</div>
            <h3 class="sidebar-subtitle">Life's a Beach</h3>
            <p class="lead">So you've always dreamed of living at the beach, but you're discouraged by the high price of beachfront property? Not to worry. We've found just the place for you.  </p>
            <p><a class="hollow button expand" href="#">Read More</a></p>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>

---

## Sidebar Posts

```html
<section class="sidebar sidebar-concrete">
  <div class="row">
    <h2 class="sidebar-subtitle">Recent Posts</h2>
    <ul class="sidebar-list no-bullet">
      <li class="media-object">
        <div class="media-object-section">
          <a class="overlay" href="#">
            <img src="/images/blog/post-1.jpg" alt="Post Img" />
        </a>
        </div>
        <div class="media-object-section">
          <div class="article-date">May 9, 2016</div>
          <h3 class="headline-article-sidebar"><a href="#">Homework and a Home Purchase</a></h3>
          <div class="article-category">Homeownership</div>
        </div>
      </li>
      <li class="media-object">
        <div class="media-object-section">
          <a class="overlay" href="#">
            <img src="/images/blog/post-2.jpg" alt="Post Img" />
          </a>
        </div>
        <div class="media-object-section">
          <div class="article-date">May 2, 2016</div>
          <h3 class="headline-article-sidebar"><a href="#">Law Enforcement Cracking Down on Home Rental Scams</a></h3>
          <div class="article-category">Rental Housing</div>
        </div>
      </li>
      <li class="media-object">
        <div class="media-object-section">
          <a class="overlay" href="#">
            <img src="/images/blog/post-3.jpg" alt="Post Img" />
          </a>
        </div>
        <div class="media-object-section">
          <div class="article-date">April 23, 2016</div>
          <h3 class="headline-article-sidebar"><a href="#">A Slow Start to the Best Year in Home Sales in a Decade</a></h3>
          <div class="article-category">Research &amp; Analysis</div>
        </div>
      </li>
    </ul>
  </div>
</section>
```

<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
    </main>
    <aside class="column">
      <section class="sidebar sidebar-concrete">
        <div class="row">
          <h2 class="sidebar-subtitle">Recent Posts</h2>
            <ul class="sidebar-list no-bullet">
              <li class="media-object">
                <div class="media-object-section">
                  <a class="overlay" href="#">
                    <img src="/images/blog/post-1.jpg" alt="Post Img" />
                </a>
                </div>
                <div class="media-object-section">
                  <div class="article-date">May 9, 2016</div>
                  <h3 class="headline-article-sidebar"><a href="#">Homework and a Home Purchase</a></h3>
                  <div class="article-category">Homeownership</div>
                </div>
              </li>
              <li class="media-object">
                <div class="media-object-section">
                  <a class="overlay" href="#">
                    <img src="/images/blog/post-2.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">
                  <div class="article-date">May 2, 2016</div>
                  <h3 class="headline-article-sidebar"><a href="#">Law Enforcement Cracking Down on Home Rental Scams</a></h3>
                  <div class="article-category">Rental Housing</div>
                </div>
              </li>
              <li class="media-object">
                <div class="media-object-section">
                  <a class="overlay" href="#">
                    <img src="/images/blog/post-3.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">
                  <div class="article-date">April 23, 2016</div>
                  <h3 class="headline-article-sidebar"><a href="#">A Slow Start to the Best Year in Home Sales in a Decade</a></h3>
                  <div class="article-category">Research &amp; Analysis</div>
                </div>
              </li>
            </ul>
        </div>
      </section>
    </aside>
  </div>
</div>



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



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

Make forms easy to use with the following rules:
* Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the <code>for</code>, <code>name</code>, and <code>id</code> attributes for all applicable elements.
* Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
* Required content should include <code>required</code>.

---

## Form Layouts

Form elements are styled based on their type attribute rather than a class. Inputs have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

---

## Form Example

```html_example
<div class="row">
  <div class="column">
    <form class="form" action="#">
      <div class="row">
        <div class="small-12 columns">
          <label for="">Label</label>
          <input id="" type="text" placeholder="placeholder">
        </div>
      </div>
      <div class="row">
        <div class="small-12 columns">
          <label for="pw">Password with Sample Help Text</label>
          <input id="pw" type="password" aria-describedby="passwordHelpText" placeholder="***">
          <p class="help-text" id="passwordHelpText">Your password must have at least 10 characters, a number, and a symbol.</p>
        </div>
      </div>
      <div class="row">
        <div class="medium-7 columns">
          <label for="">Email</label>
          <input id="" type="email" placeholder="name@company.com">
        </div>
        <div class="medium-5 columns">
          <div class="row collapse">
            <label>Height (combo field example)</label>
            <div class="input-group">
              <input id="feet" class="input-group-field" type="number" placeholder="5" min="0" max="12">
              <label for="feet" class="input-group-label">ft.</label>
              <input id="inches" class="input-group-field" type="number" placeholder="8" min="0" max="12">
              <label for="inches" class="input-group-label">in.</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="small-12 columns">
          <label for="">Select Box</label>
          <select>
            <option value="good">Good</option>
            <option value="better">Better</option>
            <option value="best">Best</option>
          </select> 
          <p class="help-text" id="">IE11 applies it's own design to active select boxes.</p>
        </div>
      </div>
      <div class="row"> 
        <div class="small-12 columns">
          <label for="">Multiple Select Box</label>
          <select multiple>
            <option value="showboat">Showboat</option>
            <option value="redwing">Redwing</option>
            <option value="narcho">Narcho</option>
            <option value="hardball">Hardball</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="medium-6 columns">
          <fieldset>
            <legend>Choose Your Favorite</legend>
            <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label>
            <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
            <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
          </fieldset>
        </div>
        <div class="medium-6 columns">
          <fieldset>
            <legend>Check these out</legend>
            <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
            <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
            <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
          </fieldset>
        </div>
      </div>
      <div class="row">
        <div class="small-12 columns">
          <fieldset class="fieldset">
            <legend>Styled Fieldset</legend>
            <input id="checkbox12" type="checkbox"><label for="checkbox12">Checkbox 1</label>
            <input id="checkbox22" type="checkbox"><label for="checkbox22">Checkbox 2</label>
            <input id="checkbox32" type="checkbox"><label for="checkbox32">Checkbox 3</label>
          </fieldset>
        </div>
      </div>
      <div class="row">
        <div class="small-12 columns">
          <label for="">How many items?</label>
          <input id="" type="number" value="100">
          <label for="">Textarea Label</label>
          <textarea placeholder="placeholder" rows="3"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="small-12 columns">
          <button class="button primary" type="submit">Submit</button>
          <button class="button" type="reset">Reset</button>
        </div>
      </div>
    </form>
  </div>  
</div>
```

---

### Example with labels next to fields

Sometimes you want a form with labels to the left of your inputs. Piece of cake! You can put the label inside a different column to the left of the input. Then use the class `.text-right` to realign the label.  Add the `.middle` class to vertically align the first line of the label with its input. In this example, for medium screen sizes and up, the labels are 3 columns wide and the fields are 9 columns wide; and the column with buttons is pushed 3 columns over to line up with the fields.

```html_example
<div class="row">
  <div class="column">
    <form class="form" action="#">
      <div class="row">
        <div class="medium-3 columns">
          <label for="side-label" class="text-right middle">Side Label</label>
        </div>
        <div class="medium-9 columns">
          <input type="text" id="side-label" placeholder="short label that is vertically aligned to middle of field">
        </div>
      </div>
      <div class="row">
        <div class="medium-3 columns">
          <label for="side-label2" class="text-right">A much longer side label for comparison</label>
        </div>
        <div class="medium-9 columns">
          <input type="text" id="side-label2" placeholder="longer label with default alignment">
        </div>
      </div>
      <div class="row">
        <div class="medium-9 medium-push-3 columns">
          <button class="button primary" type="submit">Submit</button>
          <button class="button" type="reset">Reset</button>
        </div>
      </div>
    </form>
  </div>
</div>  
```

---

### Example of single field form all in 1 row

If a form has only a single field, you can combine the label, field, and submit button into a single element using the `.input-group` class.

```html_example
<div class="row">
  <div class="column">
    <form class="form" action="#">
      <div class="medium-8 columns">
        <div class="input-group">
          <label for="emailxx" class="input-group-label">Get Notified</label>
          <input id="emailxx" class="input-group-field" type="email" placeholder="name@company.com">
          <div class="input-group-button">
            <button class="button tertiary" type="submit">Subscribe</button>
          </div>
        </div> 
      </div>
    </form>
  </div>
</div>
```

---

### Example on different background colors

When the form appears on a darker background, add the class `.outline` to invert the borders to white. Avoid putting forms inside a container that is red, green or orange to avoid conflicting with error/success messages and primary buttons.

```html
<form action="#" class="form outline">
  <label for="">Label</label>
  <input type="text" placeholder="placeholder">
  <button class="button primary">Submit</button>
</form>
```

<div class="row">
  <div class="medium-6 columns">
    <div class="callout callout-primary">
      <form action="#" class="form outline">
        <label for="">Label</label>
        <input type="text" placeholder="placeholder">
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
  <div class="medium-6 columns">
    <div class="callout callout-yellow">
      <form action="#" class="form outline">
        <label for="">Select One</label>
        <select>
          <option value="good">Good</option>
          <option value="better">Better</option>
          <option value="best">Best</option>
        </select>
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
</div>
<div class="row">
  <div class="medium-6 columns">
    <div class="callout callout-teal">
      <form action="#" class="form outline">
        <fieldset>
          <legend>Check a box or two</legend>
          <input id="checkbox13" type="checkbox"><label for="checkbox13">Checkbox 1</label>
          <input id="checkbox23" type="checkbox"><label for="checkbox23">Checkbox 2</label>
        </fieldset>
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
  <div class="medium-6 columns">
    <div class="callout callout-purple">
      <form action="#" class="form outline">
        <fieldset>
          <legend>Choose Your Favorite</legend>
          <input type="radio" name="coloropt" value="Red" id="colorRed"><label for="colorRed">Red</label>
          <input type="radio" name="coloropt" value="Blue" id="colorBlue"><label for="colorBlue">Blue</label>
          <input type="radio" name="coloropt" value="Yellow" id="colorYellow"><label for="colorYellow">Yellow</label>
        </fieldset>
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
</div>
<div class="row">
  <div class="medium-6 medium-centered columns">
    <div class="callout callout-blue">
      <form action="#" class="form outline">
        <label for="">Email</label>
        <input id="" type="email" placeholder="name@company.com">
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
</div>



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
      <p><img src="/images/blog/fm_blog_usda_returns.jpg" alt="Harp - act now!"></p>
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
        <img src= "/images/sean_becketti_md.jpg" alt="sean Becketti">
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

## Hover State

Need to spiff up the table just a tad? Just add the class `.hover` to lightly darken the table rows on hover.

```html
<table class="hover">
</table>
```

<table class="hover">
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Footer Row Header</th>
      <td>Footer content</td>
      <td>Footer content</td>
      <td>Footer content</td>
    </tr>
  </tfoot>
</table>

## Stacking Tables

To stack a table on small screens, add the class `.stack`.  Cells that span multiple rows are only shown in their original row -- if you have a complex table that has numerous rowspans and colspans, you may need opt for the scrolling table instead.

```html
<table class="stack">
</table>
```

<table class="stack">
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Footer Row Header</th>
      <td>Footer content</td>
      <td>Footer content</td>
      <td>Footer content</td>
    </tr>
  </tfoot>
</table>

---

## Scrolling Table

Got a lot of tubular tabular data? Add a wrapper element with the class `.table-scroll` around your table to enable horizontal scrolling.

<strong>Note:</strong> You can combine scrolling with stacking, but you may want to avoid doing so on tables with complex row and column spanning.

```html_example
<div class="table-scroll">
  <table></table>
</div>
```

<div class="table-scroll">
  <table>
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
        <th>These are all the words that people use to describe Foundation 6!</th>
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
</div>

---

## Unstriped

By default, table rows are striped. There's an `.unstriped` class to remove the stripes. 

```html
<table class="unstriped">
</table>
```

<table class="unstriped">
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
      <th>Table Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
    <tr>
      <th>Row Header</th>
      <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
      <td>Content Goes Here</td>
      <td>Content Goes Here</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Footer Row Header</th>
      <td>Footer content</td>
      <td>Footer content</td>
      <td>Footer content</td>
    </tr>
  </tfoot>
</table>



# Tooltip

By default, a tooltip appears below the defined term on hover or focus, and clicking on a tooltip will leave it open until you click somewhere else. Tooltips should be short, and cannot contain HTML markup.  You can use “curly quotes” if needed.

```html_example
<p>The <span data-tooltip aria-haspopup="true" class="has-tip" tabindex="0" title="A “scarabaeus” is an outdated
term for an object in the form of a scarab beetle. The scarab was a popular form of amulet in Ancient
Egypt.">scarabaeus</span> hung clear of any branches, and, if allowed to fall, would have fallen at our feet. </p>
```



# Modals

A standard modal dialog is just an empty container, so you can put any kind of content inside it, from text to forms to images to an entire grid.  To create a modal,

- Add the attributes `data-open` and `aria-controls` to to the link that opens the modal. The value of both should be the ID of the modal.
- To the modal container, add the class `.reveal`, the attribute `data-reveal`, and a unique ID (which is used by any link that launches the modal).
- Modals by default are accessible through the use of various ARIA attributes.  To make a modal even more accessible, designate a label to the modal by adding an `id` attribute on the elment you want to designate as the label (such as a heading inside the modal) and then adding the same value into an `aria-labelledby` attribute on the modal container.

Modals are available in a variety of background colors. To select a specific background, include `.overlay-xxx` class (where xxx is green, orange, blue, teal, gray, yellow, red, purple) on the `.reveal` element.

```html
<p><a data-open="modalID" aria-controls="modalID">View a modal window</a>.</p>
<div class="reveal full overlay-green" id="modalID" data-reveal aria-labelledby="modalID-label">
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="modalID-label">Modal Label</h2>
    </div>
    <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items.</p>
    <p>For grid based items, start with a row container, and add columns as desired.</p>
  </div>
</div>
 ```
 
<ol>
  <li><a data-open="fullModal1" aria-controls="fullModal1">View a modal on green</a>.
    <div class="reveal full overlay-green" id="fullModal1" data-reveal aria-labelledby="Modal1-label">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal1-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal2" aria-controls="fullModal2">View a modal on orange</a>.
    <div class="reveal full overlay-orange" id="fullModal2" data-reveal aria-labelledby="Modal2-label">
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal2-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal3">View a modal on blue</a>.
    <div class="reveal full overlay-blue" id="fullModal3" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal3-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal4">View a modal on teal</a>.
    <div class="reveal full overlay-teal" id="fullModal4" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal4-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal5">View a modal on gray</a>.
    <div class="reveal full overlay-gray" id="fullModal5" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal5-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal6">View a modal on yellow</a>.
    <div class="reveal full overlay-yellow" id="fullModal6" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal6-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal7">View a modal on purple</a>
    <div class="reveal full overlay-purple" id="fullModal7" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal7-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/kitten160.jpg" alt="kitty">
      </div>
  </li>
</ol>

---

## Nested Modal

It's possible for modals to open other modals. Create a second modal with a unique ID, and then add a click trigger with `data-open` inside the first modal.

```html_example
<ul>
  <li><a data-open="exampleModalA" aria-controls="exampleModalA">View a modal</a> that launches a second modal</li>
</ul>

<!-- This is the first modal -->
<div class="reveal full overlay-purple" id="exampleModalA" data-reveal>
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="exampleModalB-label">Modal Label</h2>
    </div>
    <h2>Awesome!</h2>
    <p class="lead">I have another modal inside of me!</p>
    <p><a class="button secondary" data-open="exampleModalB" aria-controls="exampleModalB">View another modal!</a></p>    
    <div class="row">
      <p class="text-center">One section 12 columns wide.</p>
      <div class="small-12 columns">
        <div class="primary callout">
        </div>
      </div>
    </div>
    <div class="row">
      <p class="text-center">Three sections each 4 columns wide.</p>
      <div class="small-4 columns">
        <div class="primary callout">
        </div>
      </div>
      <div class="small-4 columns">
        <div class="primary callout">
        </div>
      </div>
      <div class="small-4 columns">
        <div class="primary callout">
        </div>
      </div>
    </div>
    <div class="row">
      <p class="text-center">Two sections, each 6 columns wide.</p>
      <div class="small-6 columns">
        <div class="primary callout">
        </div>
      </div>
      <div class="small-6 columns">
        <div class="primary callout">
        </div>
      </div>
    </div> 
  </div>
</div>

<!-- This is the nested modal -->
<div class="reveal full overlay-orange" id="exampleModalB" data-reveal>
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="exampleModalB-label">Modal Label</h2>
    </div>
    <h2>ANOTHER MODAL!!!</h2>
    <p>I took the place of the first modal.</p>
  </div>
</div>
```

---

## Video Modal

Embedded videos won't maintain their aspect ratio as the width of the screen changes. To avoid squished videos, wrap them in a container with the class `.flex-video`.
The default ratio is 4:3. Add the `.widescreen` class to change it to 16:9.

- If the video is hosted by Vimeo, you should also add the class `.vimeo`.
- To prevent a video from continuing to play after a modal is closed, add `data-reset-on-close="true"`.
- To provide a non-javascript fallback link, include the url of the video page in the `href` attribute.


```html_example
<ul>
  <li><a href="https://www.youtube.com/watch?v=26OUQIjRRbc" data-open="exampleModalC" aria-controls="exampleModalC">View a modal with a (4:3 ratio) video</a>.</li>
</ul>

<div class="reveal overlay-video" id="exampleModalC" data-reveal data-reset-on-close="true">
  <div class="flex-video">
    <iframe width="420" height="315" frameborder="0" allowfullscreen src="" data-video="//www.youtube-nocookie.com/embed/26OUQIjRRbc?rel=0&amp;wmode=transparent"></iframe>
  </div>
</div>

<ul>
  <li><a href="https://www.youtube.com/watch?v=tCg9285bJnY" data-open="exampleModalD" aria-controls="exampleModalD">View a modal with a widescreen (16:9 ratio) video</a>.</li>
</ul>

<div class="reveal overlay-video" id="exampleModalD" data-reveal data-reset-on-close="true">
  <div class="flex-video widescreen">
    <iframe width="549" height="309" frameborder="0" allowfullscreen src="" data-video="//www.youtube-nocookie.com/embed/tCg9285bJnY?rel=0&amp;wmode=transparent"></iframe>
  </div>
</div>
```

---

## Image Modal

Image modals are those that contain only an image and a caption, and the image stretches/shrinks to fill the width of the container.  To prevent images from distorting at higher resolutions, the maximum container width for image modals (regardless of size) is the width of the grid (1400px).
- To create an image modal, add class `.reveal-image` to the .`reveal` container, and include a `figure` with `img` and `figcaption`.
- To provide a non-javascript fallback link, include the url of the larger image in the `href` attribute.
- If the modal is being launched from a link on an image, utilize the [`.overlay` class](#overlay) to provide a focus and hover state on the image.  Below are examples of an image modal being launched from a text link and from a link on an overlay image.
-


```html_example

<ul>
  <li><a data-open="exampleModalE" href="/images/bigkitty.jpg" aria-controls="exampleModalE">View an image modal</a>.</li>
</ul>

<div class="reveal reveal-image" id="exampleModalE" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="/images/bigkitty.jpg" alt="kitty">
      <figcaption>Pretty Kitty!</figcaption>
    </figure>
  </div>
</div>

<ul>
  <li>View an image modal by clicking the following image.<br><a data-open="exampleModalF" class="overlay"
  href="/images/kitty1600.jpg" aria-controls="exampleModalF"><img src="/images/kitten160.jpg" alt="kitty"></a></li>
</ul>

<div class="reveal reveal-image" id="exampleModalF" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="/images/kitty1600.jpg" alt="kitty">
      <figcaption>Who Doesn't Love Kitties?</figcaption>
    </figure>
  </div>
</div>
```

---

## Image Gallery Modal <span id="igallery"></span>

Combine the image modal and the nested modal to achieve an image gallery where the user can navigation through the images one at a time.

```html_example
<ul>
  <li><a data-open="galleryModalA" aria-controls="galleryModalA" href="/images/plant1.jpg">View a modal</a> that launches an image gallery</li>
</ul>

<!-- This is the first modal -->
<div class="large reveal reveal-image" id="galleryModalA" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="/images/plant1.jpg" alt="plant 1">
      <figcaption>Default - center aligned caption.</figcaption>
      <a class="gallery-previous" data-open="galleryModalD" aria-controls="galleryModalD"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</a>
      <a class="gallery-next" data-open="galleryModalB" aria-controls="galleryModalB"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</a>
    </figure>
  </div>
</div>

<!-- This is the second modal -->
<div class="large reveal reveal-image" id="galleryModalB" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="/images/plant2.jpg" alt="plant 2">
      <figcaption><p class="text-left">Left-aligned caption.</p><p class="text-left">With more than one paragraph.</p></figcaption>
      <a class="gallery-previous" data-open="galleryModalA" aria-controls="galleryModalA"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</a>
      <a class="gallery-next" data-open="galleryModalC" aria-controls="galleryModalC"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</a>
    </figure>
  </div>
</div>

<!-- This is the third modal -->
<div class="large reveal reveal-image" id="galleryModalC" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="/images/plant3.jpg" alt="plant 3">
      <figcaption>
        <p class="text-left show-for-medium">(example below is how a blockquote would appear - borrowed the idea from My Home.) </p>
        <blockquote>
          <p>"The lights burn blue. It is now dead midnight."</p>
          <footer><cite>William Shakespeare</cite> in <cite>King Henry the Sixth</cite></footer>
        </blockquote>
      </figcaption>
      <a class="gallery-previous" data-open="galleryModalB" aria-controls="galleryModalB"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</a>
      <a class="gallery-next" data-open="galleryModalD" aria-controls="galleryModalD"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</a>
    </figure>
  </div>
</div>

<!-- This is the fourth modal -->
<div class="large reveal reveal-image" id="galleryModalD" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="/images/plant4.jpg" alt="plant 4">
      <figcaption>This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption.
      </figcaption>
      <a class="gallery-previous" data-open="galleryModalC" aria-controls="galleryModalC"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</a>
      <a class="gallery-next" data-open="galleryModalA" aria-controls="galleryModalA"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</a>
    </figure>
  </div>
</div>
```



# Carousels

<p class="lead">Each carousel is made up of multiple slides.</p>

- The default animation for the carousel is slide out the existing slide while sliding in the replacement slide (direction based on whether you are moving forward or backward through the slides).  See below for [other animation options](#slide_animation).
- The wrapper for the carousel should use the `.orbit` class and contain a `data-orbit` attribute and a `role="region"` attribute.  For assistive technology, provide an `aria-label` attribute that describes the carousel contents.  The wrapper groups the slides and the slide navigation together.
- The container for the slides is a `ul` with the class `.orbit-container` (for image carousels, use a `div` with class `.orbit-container`).
- Each slide is an `li` with the class `.orbit-slide` (for image carousels use a `figure`).
- By default, slides transition every 5 seconds.  You can stop the auto-play functionality by adding the attribute `data-auto-play="false"`.
- Slides can be done with a variety of background colors by adding an `.orbit-slide-xxx` class (where xxx is green, orange, blue, teal, gray, yellow, red, purple) on the `.orbit-slide` element.
- To shift the dot navigation so that it appears inside the panel, add class `.bullets-overlay` to the `.orbit` element.

```html_example
<div class="orbit bullets-overlay" role="region" aria-label="Favorite Text Ever" data-orbit data-auto-play="false">
  <ul class="orbit-container">
    <li class="orbit-slide orbit-slide-yellow">
      <div>
        <h3>Slide One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide orbit-slide-green">
      <div>
        <h3>Slide Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide orbit-slide-orange">
      <div>
        <h3>Slide Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow large">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide orbit-slide-red">
      <div>
        <h3>Slide Four</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul>
        <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
        <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
        <p><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide orbit-slide-purple">
      <div>
        <h3>Slide Five</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide orbit-slide-blue">
      <div>
        <h3>Slide Six - Example Without a Button</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </li>
    <li class="orbit-slide orbit-slide-teal">
      <div>
        <h3>Slide Seven</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide orbit-slide-gray">
      <div>
        <h3>Slide Nine</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
  </ul>
</div>
```

---

## Image Carousel

For an image carousel, each slide consists of a `figure`, `img` and optional `figcaption`.

- Try to make sure your images are all similar in size and proportion.
- Each image should still have an `alt` attribute, even if it has an associated caption.
- Captions can contain additional markup -- from blockquotes to paragraphs to text formatting.
- Image carousels **cannot** be used inside a modal window -- instead refer to [Image Gallery Modal](#igallery).

```html_example
<div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit>
  <div class="orbit-container">
    <figure class="orbit-slide">
      <img src="/images/plant1.jpg" alt="plant 1">
      <figcaption>Default - center aligned caption.</figcaption>
    </figure>
    <figure class="orbit-slide">
      <img src="/images/plant2.jpg" alt="plant 2">
      <figcaption><p class="text-left">Left-aligned caption.</p><p class="text-left">With more than one paragraph.</p></figcaption>
    </figure>
    <figure class="orbit-slide">
      <img src="/images/plant3.jpg" alt="plant 3">
      <figcaption>
        <p class="text-left show-for-medium">(example below is how a blockquote would appear - borrowed the idea from My Home.) </p>
        <blockquote>
          <p>"The lights burn blue. It is now dead midnight."</p>
          <footer><cite>William Shakespeare</cite> in <cite>King Henry the Sixth</cite></footer>
        </blockquote>
      </figcaption>
    </figure>
    <figure class="orbit-slide">
      <img src="/images/plant4.jpg" alt="plant 4">
      <figcaption>This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption. </figcaption>
    </figure>
  </div>
</div>
```

---

## Changing the Slide Animation <span id="slide_animation"></span>

Orbit uses [Motion UI](http://foundation.zurb.com/sites/docs/motion-ui.html) CSS classes to animate slides around.  There are four plugin options you can set to change the default effects:

- `data-anim-in-from-left`: transition to play when a slide comes *in from the left*.
- `data-anim-in-from-right`: transition to play when a slide comes *in from the right*.
- `data-anim-out-from-left`: transition to play when a slide comes *out from the left*.
- `data-anim-out-from-right`: transition to play when a slide comes *out from the right*.

Since those option names are pretty *long*, you can also set them all in one HTML attribute, using `data-options`:

```html
<div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
```

Below is an example of the same image carousel shown above, but with a fade-in/fade-out animation.

<div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
  <div class="orbit-container">
    <figure class="orbit-slide">
      <img src="/images/plant1.jpg" alt="plant 1">
      <figcaption>Default - center aligned caption.</figcaption>
    </figure>
    <figure class="orbit-slide">
      <img src="/images/plant2.jpg" alt="plant 2">
      <figcaption><p class="text-left">Left-aligned caption.</p><p class="text-left">With more than one paragraph.</p></figcaption>
    </figure>
    <figure class="orbit-slide">
      <img src="/images/plant3.jpg" alt="plant 3">
      <figcaption>
        <p class="text-left show-for-medium">(example below is how a blockquote would appear - borrowed the idea from My Home.) </p>
        <blockquote>
          <p>"The lights burn blue. It is now dead midnight."</p>
          <footer><cite>William Shakespeare</cite> in <cite>King Henry the Sixth</cite></footer>
        </blockquote>
      </figcaption>
    </figure>
    <figure class="orbit-slide">
      <img src="/images/plant4.jpg" alt="plant 4">
      <figcaption>This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption. </figcaption>
    </figure>
  </div>
</div>

---

### Disabling Transition Animation

To disable the animation, set the `data-use-m-u-i` attribute to `false`.  To stop the auto-play functionality, add the attribute `data-auto-play="false"`.

```html
<div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-use-m-u-i="false" data-auto-play="false">
</div>
```



# Footer

**Note:** The footer will automatically be inserted via the template - do not include this code in your page.

```html_example
<footer class="footer">
	<div class="row">
		<div class="footer-top columns">
        <ul class="no-bullet">
          <li><a href="#">Careers</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Vendors &amp; Suppliers</a></li>
          <li><span class="show-for-sr">Follow us on social media</span>
            <a aria-label="YouTube" href="https://www.youtube.com/freddiemac" class="connect-link"><svg viewBox="8 8 125 125" xmlns="http://www.w3.org/2000/svg"><path d="M72 14.2C40.1 14.2 14.2 40.1 14.2 72c0 31.9 25.9 57.8 57.8 57.8 31.9 0 57.8-25.9 57.8-57.8C129.9 40.1 104 14.2 72 14.2zM104.4 85c0 4.4-3.6 8.1-8 8.1 0 0-6.9 1-24.7 1 -18 0-24.3-1-24.3-1 -4.4 0-8.1-3.6-8.1-8V58.5c0-4.4 3.6-8 8.1-8 0 0 6.3-1 24.3-1 17.9 0 24.8 1 24.8 1 4.4 0 8 3.6 8 8.1V85z" fill="#fff"/><polygon points="62 84.5 84 71.8 62 59.1 " fill="#fff"/></svg></a>
            <a aria-label="Facebook" href="https://www.facebook.com/FreddieMac" class="connect-link"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M29.8 50.3h6.7V34h4.5l0.6-5.6h-5.1l0-2.8c0-1.5 0.1-2.3 2.2-2.3h2.8V17.7h-4.5c-5.4 0-7.3 2.7-7.3 7.3v3.4h-3.4v5.6h3.4V50.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/3140" class="connect-link"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M50.8 48.1V36.4c0-6.3-3.3-9.2-7.8-9.2 -3.6 0-5.2 2-6.1 3.4V27.7h-6.8c0.1 1.9 0 20.4 0 20.4h6.8V36.7c0-0.6 0-1.2 0.2-1.7 0.5-1.2 1.6-2.5 3.5-2.5 2.5 0 3.4 1.9 3.4 4.6v10.9H50.8zM23 24.9c2.4 0 3.8-1.6 3.8-3.5 0-2-1.5-3.5-3.8-3.5s-3.8 1.5-3.8 3.5c0 2 1.5 3.5 3.8 3.5H23zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64zM26.4 48.1V27.7h-6.8v20.4H26.4z" fill="#fff"/></svg></a>
            <a aria-label="Twitter" href="https://twitter.com/FreddieMac" class="connect-link"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M38.2 22.3c-2.6 1-4.3 3.4-4.1 6.1l0.1 1 -1-0.1c-3.8-0.5-7.1-2.1-10-4.9l-1.4-1.4 -0.4 1c-0.8 2.3-0.3 4.7 1.3 6.3 0.8 0.9 0.6 1-0.8 0.5 -0.5-0.2-0.9-0.3-1-0.2 -0.1 0.1 0.4 2.1 0.8 2.8 0.5 1.1 1.7 2.1 2.9 2.7l1 0.5 -1.2 0c-1.2 0-1.2 0-1.1 0.5 0.4 1.4 2.1 2.8 3.9 3.5l1.3 0.4 -1.1 0.7c-1.7 1-3.6 1.5-5.6 1.6C20.8 43.3 20 43.3 20 43.4c0 0.2 2.6 1.4 4 1.9 4.5 1.4 9.8 0.8 13.7-1.6 2.8-1.7 5.7-5 7-8.2 0.7-1.7 1.4-4.9 1.4-6.4 0-1 0.1-1.1 1.2-2.3 0.7-0.7 1.3-1.4 1.5-1.6 0.2-0.4 0.2-0.4-0.9 0 -1.8 0.6-2 0.6-1.2-0.4 0.6-0.7 1.4-1.9 1.4-2.3 0-0.1-0.3 0-0.7 0.2 -0.4 0.2-1.2 0.5-1.8 0.7l-1.1 0.4 -1-0.7c-0.6-0.4-1.4-0.8-1.8-0.9C40.8 21.9 39.1 21.9 38.2 22.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
          </li>
        </ul>
		</div>
		<div class="footer-bottom columns">
      <ul class="no-bullet">
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact Us</a></li>
        <li>&copy; 2016 Freddie Mac</li>
      </ul>
    </div>
	</div>
</footer>
<div class="footer-bottom-edge"> </div>
```

---