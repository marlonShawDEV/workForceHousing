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

---

## Two Column Layout with Buffer

```html
<section class="two-column-layout">
  <div class="row page-buffer">
    <div class="row">
      <main class="medium-7 large-8 columns">
        <div class="page-buffer">
          <p>Main content. Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>					
        </div>
      </main> 
      <aside class="medium-5 large-4 columns">
        <section>
          <div class="row page-buffer">
            <h2>Sidebar Content</h2>            
            <p>Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>
          </div>
        </section>      
      </aside>
    </div>
  </div>
</section>
```

<section class="two-column-layout">
	<div class="row page-buffer">
		<div class="row display">
			<main class="medium-7 large-8 columns">
				<div class="page-buffer">
					<p>Main content. Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>					
				</div>
			</main>
			<aside class="medium-5 large-4 columns">
        <section>
          <div class="row page-buffer">
            <h2>Sidebar Content</h2>            
            <p>Sed semper tempus justo, ac volutpat ipsum, tempor ullamcorper odio.</p>
          </div>
        </section>      
			</aside>
		</div>
	</div>
</section>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #00a6e2"></span>
      #00a6e2<br>
      $cerulean, $primary-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ff6c00"></span>
      #ff6c00<br>
      $blaze, $secondary-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #88BD45"></span>
      #88BD45<br>
      $fm-green
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
</div>
<br>
<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #457bbe"></span>
      #457bbe<br>
      $steel
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
      <span style="background: #00a19a"></span>
      #00a19a<br>
      $niagara
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #cf0a2c"></span>
      #cf0a2c<br>
      $crimson
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #725090"></span>
      #725090<br>
      $wisteria
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
      <span style="background: #777874"></span>
      #777874<br>
      $fm-gray
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
</div>
<br>
<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #40CC5A"></span>
      #40CC5A<br>
      $success-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #FF970F"></span>
      #FF970F<br>
      $warning-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #DC3232"></span>
      #DC3232<br>
      $alert-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #000000"></span>
      #000000<br>
      $black
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

<div class="callout">
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

<div class="callout">
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

<div class="callout">
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

Sometimes other people say smart things, and you may want to mention those things with a quote. 

- Do **not** use a blockquote simply to decorate text that isn't a quotation.  Try using a [call out]{#call-out-txt} for that purpose.
- Include the source for the quote in a `footer` and include the author, title or work in a `cite`.

```html_example
<blockquote> 
  <p>Cowards die many times before their deaths; the <strong>valiant</strong> never taste of death but once.</p>
  <footer><cite>William Shakespeare</cite> in <cite>King Henry the Fifth</cite></footer>
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
<p>Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows) to exit.</p>
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

## Typography Helper Classes <span id="helper"></span>

<p class="lead">These helper classes allow you to scaffold certain typographic styles faster.</p>

---

### Text Alignment

The default text alignment for most containers is left.
- You can change the text alignment of an element by adding `.text-left`, `.text-right`, or `.text-center` to an element.
- You can shift alignment at different breakpoints by adding a breakpoint to the front of a text alignment class. For example, `.medium-text-center` will keep text left-aligned on the smallest screens, but switch to center-aligned on medium screens and larger.

```html_example
<p class="text-left"><strong>This text is left-aligned.</strong> </p>
<p class="medium-text-right"><strong>This text is right-aligned</strong> at medium screen widths and larger.</p>
<p class="text-center"><strong>This text is center-aligned.</strong> </p>
```

---

### Lead Paragraph

A slightly-larger-than-normal block of text, useful for introductory blurbs, or other emphasized text. The `.lead` text is a slightly heavier weight than standard text.

```html_example
<p class="lead">What are your cats <em>really</em> dreaming about while they sleep?</p>
<p class="lead"><strong>Use strong tag for <em>extra</em> emphasis.</strong></p>
```

---

### Call Out Paragraph <span id="call-out-txt"></span>

A brief, attention-catching key phrase, in a distinctive typeface and color, used as a graphic element, serving to entice readers into the article or to highlight a key topic.

```html_example
<p class="callout-txt">Visit lots of websites like Realtor, Zillow, Trulia, Homesnap, Redfin, and individual broker websites.</p>
```

---

### Un-bulleted List

The `<ul>` is a bulleted list by default, but you can add the class `.no-bullet` to remove the bullets from that list.

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

<p class="lead">The following `.button` styles can be used either on anchor links or on actual <code>button</code> tags.  The size can be adjusted by adding a class of `.tiny`, `.small`, or `.large`.</p>

---

## Primary Buttons

Use class `.primary`, for buttons used for primary calls-to-action.  Use sparingly; there shouldn't be multiple calls-to-action on a single web page. 

```html_example
<p>
  <a href="#" class="primary large button">Large button</a>
  <a href="#" class="primary button">Regular button</a>
  <a href="#" class="primary small button">Small button</a>
  <a href="#" class="primary tiny button">Tiny button</a>
</p>
```

---

## Secondary Buttons

Use class `.secondary` for buttons used for less important, secondary actions on a page.

```html_example
<p>
  <a href="#" class="secondary large button">Large button</a>
  <a href="#" class="secondary button">Regular button</a>
  <a href="#" class="secondary small button">Small button</a>
  <a href="#" class="secondary tiny button">Tiny button</a>
</p>
```

---

## Hollow Buttons

Use class `.hollow` to create white buttons for use on darker backgrounds.

```html_example
<div class="callout callout-purple">
  <p>
    <a href="#" class="hollow large button">Large button</a>
    <a href="#" class="hollow button">Regular button</a>
    <a href="#" class="hollow small button">Small button</a>
    <a href="#" class="hollow tiny button">Tiny button</a>
  </p>
</div>
<div class="callout callout-teal">
  <p>
    <a href="#" class="hollow large button">Large button</a>
    <a href="#" class="hollow button">Regular button</a>
    <a href="#" class="hollow small button">Small button</a>
    <a href="#" class="hollow tiny button">Tiny button</a>
  </p>
</div>
<div class="callout callout-yellow">
  <p>
    <a href="#" class="hollow large button">Large button</a>
    <a href="#" class="hollow button">Regular button</a>
    <a href="#" class="hollow small button">Small button</a>
    <a href="#" class="hollow tiny button">Tiny button</a>
  </p>
</div>
```

---

## Hollow Darken Buttons

Limit the usage of the `.hollow` and `.darken` combined styles to usage on light backgrounds.

```html_example
<p>
  <a href="#" class="hollow darken large button">Large button</a>
  <a href="#" class="hollow darken button">Regular button</a>
  <a href="#" class="hollow darken small button">Small button</a>
  <a href="#" class="hollow darken tiny button">Tiny button</a>
</p>
```

---

## Inverted Buttons

This `.inverted` style button is intended for category tags on hero blocks (used in the blog). For other backgrounds, use the `.hollow` style instead.

```html_example
<div class="callout callout-primary">
  <p>
    <a href="#" class="inverted small button">Homeownership</a>
  </p>
</div> 
```

---

## Buttons with Icons

If your svg icon includes a fill color (as in the third example), it will maintain that color on hover, focus, and active states.
If you use a one-color svg icon without a fill color, css will allow it to inherit the current TEXT color as it's fill color, and will adjust to match the text's color on hover, focus, and active states.  Use a tool like <a href="https://jakearchibald.github.io/svgomg/">SVGOMG</a> to optimize the svg markup.

```html_example
<p>
  <a href="#" class="button primary">Log In <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 450"><path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4-26.3-27.8-64-45.7-105.3-45.7h-.2c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1zM161 193.1c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5v.2l-.1.1c18.3 19.2 28.1 53 28.1 80.3V224H161v-30.9z" /></svg></a>
   
   
  <a href="#" class="hollow darken button">Hey There! <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 60 350 350"><path d="M363.3 363.9c-12.9-4.6-31.4-6.2-43.2-8.8-6.8-1.5-16.7-5.3-20-9.2-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6 9.4-18 6.9-31.4 6.9-31.4 6.8 0 9.2-11.9c2.6-13 6.6-18.4 6.1-28.1-.5-9-5.2-9.5-5.7-9.5 0 0 4.9-13.6 5.6-42.4C331.1 129.6 305 96 256 96s-75 33.5-74.3 67.6c.6 28.7 5.6 42.4 5.6 42.4-.5 0-5.2.5-5.7 9.5-.5 9.7 3.6 14.9 6.1 27.9 2.4 11.9 9.2 12 9.2 12s3.6 23.1 6.9 31.5c3.3 8.5 9.4 18 9.4 18s2 36.9-1.3 40.9-13.2 7.7-20 9.2c-11.9 2.6-30.3 4.3-43.2 8.9C135.8 368.5 96 384 96 416h320c0-32-39.8-47.5-52.7-52.1z"/></svg></a>
  
   <a href="#" class="button secondary">Continue <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 350 350"><path d="M322.7 128.4l100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z" fill="#ffb718"/></svg></a>
  
</p>
```

---

## Close Button <span id="close-button"></span>

A close button is a `<button>` element with the class `.close-button`. We use the multiplication symbol (`&times;`) as the X icon. This icon is wrapped in a `<span>` with the attribute `aria-hidden="true"`, so screen readers don't read the X icon.

The button is also labeled with `aria-label` to clarify what the button's purpose is.

```html_example
<div class="callout success">
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
      <div class="alert callout" data-closable>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <p>You can so totally close this!</p>
      </div>
    </div>  
    <div class="large-6 columns">     
      <div class="success callout" data-closable="slide-out-right">
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

```html_example
<div class="button-group">
  <a class="button">One</a>
  <a class="button">Two</a>
  <a class="button">Three</a>
</div>
```

---

## Coloring

Buttons within a button group can be colored individually with the `.success`, `.warning`, and `.alert` classes.

```html_example
<div class="button-group">
  <a class="button">View</a>
  <a class="success button">Edit</a>
  <a class="warning button">Share</a>
  <a class="alert button">Delete</a>
</div>
```

---

The entire group can also be colored using the same classes.

```html_example
<div class="button-group secondary">
  <a class="button">View</a>
  <a class="button">Edit</a>
  <a class="button">Share</a>
  <a class="button">Delete</a>
</div>
```

---

## Even-width Group

Add the `.expanded` class to the container to make a full-width button group. Each item will automatically size itself based on how many buttons there are, up to a maximum of six.

```html_example
<div class="expanded button-group">
  <a class="button">Expanded</a>
  <a class="button">Button</a>
  <a class="button">Group</a>
</div>
```



# Homepage Grid

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
        <div>
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
      <div class="cta-block__img-wrapper"><img src="/images/lightbulb.png" alt="lightbulb" /></div>
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
<div class="row medium-up-2 large-up-3">
  <div class="column">
    <div class="blog-block">
      <a class="overlay" href="#">
        <img src="/images/blog/blog-2.jpg" alt="Blog Img" />
      </a>
      <div class="blog-block__date">May 13, 2016</div>
      <h3><a href="#">Down Payments: There's Help for That</a></h3>
      <div class="blog-block__cat">Homeownership</div>
      <p>Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
    </div>
  </div>  
</div>
```

---

## Blog Block Title Only

```html_example
<div class="row medium-up-2 large-up-3">
  <div class="column">
    <div class="blog-block blog-block_title-only">
      <a class="overlay" href="#">
        <img src="/images/blog/blog-2.jpg" alt="Blog Img" />
      </a>
      <div class="blog-block__date">May 13, 2016</div>
      <h3><a href="#">Down Payments: There's Help for That</a></h3>
    </div>
  </div>  
</div>  
```

---

## Blog Block Large

```html_example
<div class="row medium-up-1">
  <div class="column">
    <div class="blog-block blog-block_lg">
      <a class="overlay" href="#">
        <img src="/images/blog/blog-lg-1.jpg" alt="Blog Img" />
        <div class="blog-block__txt">
          <h3>What Do Renters Save For?</h3>
        </div>
      </a>
    </div>
  </div>
</div> 
```

---

## Blog Block Sidebar

```html
<ul class="posts">
  <li>
    <div class="blog-block blog-block_sidebar">
      <div class="row">
        <div class="small-6 large-4 columns">
          <a class="overlay" href="#">
            <img src="/images/blog/post-1.jpg" alt="Post Img" />
          </a>
        </div>
        <div class="small-6 large-8 columns">
          <div class="blog-block__date">May 9, 2016</div>
          <h3><a href="#">Homework and a Home Purchase</a></h3>
          <div class="blog-block__cat">Home Ownership</div>
        </div>
      </div>
    </div>
  </li>
  <li>
    <div class="blog-block blog-block_sidebar">
      <div class="row">
        <div class="small-6 large-4 columns">
          <a class="overlay" href="#">
            <img src="/images/blog/post-2.jpg" alt="Post Img" />
          </a>
        </div>
        <div class="small-6 large-8 columns">
          <div class="blog-block__date">May 2, 2016</div>
          <h3><a href="#">Law Enforcement Cracking Down on Home Rental Scams</a></h3>
          <div class="blog-block__cat">Rental Housing</div>
        </div>
      </div>
    </div>
  </li>
</ul>
```

<section class="two-column-layout">
	<div class="row page-buffer">
		<div class="row">
			<aside class="medium-offset-6 medium-6 large-offset-7 large-5 columns adjust-sidebar">				
        <section class="posts-wrapper bg_light-gray">
          <div class="row page-buffer">
            <h2>Recent Posts</h2>
            <ul class="posts">
              <li>
                <div class="blog-block blog-block_sidebar">
                  <div class="row">
                    <div class="small-6 large-4 columns">
                      <a class="overlay" href="#">
                        <img src="/images/blog/post-1.jpg" alt="Post Img" />
                      </a>
                    </div>
                    <div class="small-6 large-8 columns">
                      <div class="blog-block__date">May 9, 2016</div>
                      <h3><a href="#">Homework and a Home Purchase</a></h3>
                      <div class="blog-block__cat">Home Ownership</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="blog-block blog-block_sidebar">
                  <div class="row">
                    <div class="small-6 large-4 columns">
                      <a class="overlay" href="#">
                        <img src="/images/blog/post-2.jpg" alt="Post Img" />
                      </a>
                    </div>
                    <div class="small-6 large-8 columns">
                      <div class="blog-block__date">May 2, 2016</div>
                      <h3><a href="#">Law Enforcement Cracking Down on Home Rental Scams</a></h3>
                      <div class="blog-block__cat">Rental Housing</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
			</aside>
		</div>
	</div>
</section>




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
          <div><input type="email" class="outline" placeholder="Your Email Address"></div>
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
  <div class="medium-6 columns">
    <div class="callout">
      <p>This is a default <a href="#">callout</a>.</p>
    </div> 
    <div class="callout alert">
      <p>This is a <a href="#">callout</a> with class of alert.</p>
    </div>  
    <div class="callout warning">
      <p>This is a <a href="#">callout</a> with class of warning.</p>
    </div>       
    <div class="callout success">
      <p>This is a <a href="#">callout</a> with class of success.</p>
    </div>       
    <div class="callout primary">
      <p>This is a <a href="#">callout</a> with class of primary.</p>
    </div>   
    <div class="callout secondary">
      <p>This is a <a href="#">callout</a> with class of secondary.</p>
    </div> 
    <div class="callout hollow">
      <p>This is a <a href="#">callout</a> with a class of hollow.</p>
    </div>   
    <div class="callout callout-gray">
      <p>This is a <a href="#">callout</a> with class of callout-gray.</p>
    </div>
  </div>
  <div class="medium-6 columns">     
    <div class="callout callout-green">
      <p>This is a <a href="#">callout</a> with a class of callout-green.</p>
    </div>    
    <div class="callout callout-orange">
      <p>This is a <a href="#">callout</a> with a class of callout-orange.</p>
    </div> 
    <div class="callout callout-yellow">
      <p>This is a <a href="#">callout</a> with callout-yellow</p>
    </div>  
    <div class="callout callout-purple">
      <p>This is a <a href="#">callout</a> with class of callout-purple.</p>
    </div>
    <div class="callout callout-primary">
      <p>This is a <a href="#">callout</a> with class of callout-primary.</p>
    </div>
    <div class="callout callout-blue">
      <p>This is a <a href="#">callout</a> with class of callout-blue.</p>
    </div> 
    <div class="callout callout-teal">
      <p>This is a <a href="#">callout</a> with class of callout-teal.</p>
    </div>
    <div class="callout callout-red">
      <p>This is a <a href="#">callout</a> with class of callout-red.</p>
    </div> 
  </div>
</div>  
```
 
 ---

## Sizing

Callouts can be sized using the `.small` and `.large` classes. These will affect the padding around content to be smaller and larger respectively.


```html_example  
<div class="row">
  <div class="medium-6 columns">
    <div class="callout callout-purple large">
      <p>This is a callout with class of large. It has more padding between the contents and the edge of the container.</p>
    </div>
  </div> 
  <div class="medium-6 columns">    
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
    <div class="callout callout-red" data-closable>
      <h5>This is Important!</h5>
      <p>When you're done reading it, click the close button in the corner to dismiss this alert.</p>
      <p>I'm using the default <code>data-closable</code> parameters, and simply fade out.</p>
      <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
  <div class="medium-6 columns">
    <div class="callout success" data-closable="slide-out-right">
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
    <div class="small-12 columns">
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
    <div class="small-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="medium-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="medium-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="small-12 columns">
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

---

## Outline Text Input Example

Add `.outline` to the class when the form appears on a dark background.

```html_example
<div class="callout callout-primary">
  <label>Label</label>
  <input type="text" class="outline" placeholder="placeholder">
  
  <div class="row">
    <div class="medium-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="medium-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
</div>
<div class="callout callout-yellow">
  <label>Label</label>
  <input type="text" class="outline" placeholder="Placeholder Text">
  
  <div class="row">
    <div class="medium-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="medium-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
</div>
```



# Heros

<p class="lead">There are several different hero styles, depending upon page type.  For pages that aren't landing pages or relying on a blog-like format, you should use a [page title](#page-title) instead of a hero.</p>

---

## Landing Page Heros

Landing Pages are those pages that are linked from the primary navigation. Add one of the following classes to the `.blue-hero` container to specify the background for a particular landing page: `.perspectives-landing-hero`, `.research-landing-hero`, `.blog-landing-hero`, `.media-landing-hero`, `.about-landing-hero`.


```html_example
<section class="media-landing-hero blue-hero">
  <div class="blue-hero__overlay"></div>
  <div class="row page-buffer">
  	<div class="row">
		  <div class="blue-hero__txt">
		    <h1>Media Room</h1>
		  </div>
		</div>
	</div>
</section>
```

---

## Blog Detail Heros

Use this hero on Blog article pages.  
 
```html_example
<section class="blog-detail-hero blue-hero">
  <div class="blue-hero__overlay"></div>
  <div class="row page-buffer">
	  <div class="row">
		  <div class="blue-hero__txt blue-hero__left">
		  	<div class="blue-hero__date">May 9, 2016</div>
		    <h1>Take the Anxiety Out of Your First Home Offer</h1>
		    <div>
		    	<a href="#" class="inverted button small">Homeownership</a>
		    </div>
		  </div>
		</div>
	</div>
</section>
```

---

## Executive Perspectives Heros

Use this hero on Executive Perspectives article pages.  
 
```html_example
<section class="perspectives-detail-hero blue-hero">
  <div class="blue-hero__overlay"></div>
  <div class="row page-buffer">
	  <div class="row">
		  <div class="blue-hero__txt  blue-hero__left">
		  	<div class="blue-hero__date">August 9, 2016</div>
		    <h1>Three Reasons Why Baby Boomer Homeowners are a Market to Watch</h1>
		    <figure class="avatar">
		      <div>
		        <img src="/images/exec_david_brickman.jpg" alt="Avatar img" />
		      </div>
		      <div>
		        <figcaption>Article By<br><strong>David Brickman, EVP Multifamily Business</strong></figcaption>
		      </div>
		    </figure>
		  </div>
		</div>
	</div>
</section>
```





# Page Title

Every page should use either a [hero element](#heros) or a page title.

```html_example
<section class="page-title">
  <div class="row page-buffer">
    <h1>Page title</h1>
  </div>
</section>
```



# Overlay

If you're going to use an image as an anchor, we've got you covered.  Apply the `.overlay` class to the `<a>` that wraps the image to style the image with a blue overlay on hover and focus.    

```html
<a class="overlay" href="#"><img alt="photo of David Brickman" src="/images/exec_david_brickman.jpg"></a>
```

<div class="row">
  <div class="small-6 medium-3 columns small-centered">
    <a class="overlay" href="#"><img alt="photo of David Brickman" src="/images/exec_david_brickman.jpg"></a> 
  </div>
</div>



# Media Objects  

<p class="lead">Media objects are super useful components for displaying an item, usually an image, alongside some content, usually text. You could put lists, grids, or even other media objects inside.</p>

A media object is a container with the class `.media-object`, and two or three sections with the class `.media-object-section`.  Each section aligns to the top by default, but individual sections can also be middle- or bottom-aligned by adding a `.middle` or `.bottom` class to `.media-object-section`.  If you nest a media object into the media-object-section section, it will indent to be inside the parent media object. 

If you are going to make the image a link,  [add the `.overlay` class](#overlay) to style the image on hover and focus. 

```html_example
<div class="large-9 large-centered columns">
  <div class="media-object">
    <div class="media-object-section">
      <a class="overlay" href="#"><img src= "http://www.freddiemac.com/images/blog/sean_becketti_md.jpg" alt="sean Becketti"></a>
    </div>
    <div class="media-object-section">
      <h4><a href="#">Are Baby Boomers the Key to the Single-Family Market?</a></h4>
      <p>One of the most important keys to today's single-family housing market is homeowners who were born before the first-ever episode of Star Trek aired in the 1960s. Today, more than 50 years later, Baby Boomers and other homeowners over the age of 55 control almost two-thirds of the nation's home equity.</p>
    </div>
  </div>
</div>  
```

---

## Stack on Small Options

By adding the `.stack-for-small` class, you can make your media object responsive and stack the media item and the associated blurb. Images will get a width of 100%, but this can be changed.

If you are going to make the image a link,  [add the `.overlay` class](#overlay) to style the image on hover and focus. 

```html_example
<div class="large-9 large-centered columns">
  <div class="media-object stack-for-small">
    <div class="media-object-section">
      <a class="overlay" href="http://www.freddiemac.com/blog/homeownership/20160630_home_searches_made_easier.html"><img src="http://www.freddiemac.com/blog/images/homesteps.jpg" alt="HomeSteps - house sold sign"></a>
    </div>
    <div class="media-object-section">
      <h4>Home Searches Made Easier</h4>
      <p>Register today for a free HomeSteps.com Home Search Account to keep track of your recent searches and receive weekly notifications of new home listings. <a href="http://www.freddiemac.com/blog/homeownership/20160630_home_searches_made_easier.html">More</a></p>
    </div>
  </div>
  <div class="media-object stack-for-small">
    <div class="media-object-section">
      <a class="overlay" href="http://www.freddiemac.com/blog/homeownership/20160628_harp_get_the_facts.html"><img src="http://www.freddiemac.com/blog/images/fm_blog_usda_returns.jpg" alt="Harp - act now!"></a>
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
        <img src= "http://www.freddiemac.com/images/blog/sean_becketti_md.jpg" alt="sean Becketti">
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

---

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

---

## Scrolling Table

Got a lot of tabular data? Add the class `.scroll` to the table itself to enable horizontal scrolling.

<div class="callout">
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



# Footer

**Note:** The corporate footer will automatically be inserted via the template - do not include this code in your page. 

```html_example
<footer class="footer">
  <div class="row page-buffer">
    <div class="footer__top">
      <ul class="no-bullet">
        <li><a href="#">Careers</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Vendors &amp; Suppliers</a></li>
      </ul>
    </div>
    <div class="footer__bottom">
      <div class="row">
        <div class="medium-6 columns">
          <ul class="no-bullet">
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
      <li><a href="#">Homeownership</a></li>
      <li><a href="#">Rental Housing</a></li>
      <li><a href="#">Research &amp; Analysis</a></li>
      <li><a href="#">Notable</a></li>
    </ul>
  </div>
</section>
```

---

## News

Note: The news release lists are automated by MarketWire.


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

<p class="lead clearfix">For use on the corporate homepage.</p>

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



# Tooltip

By default, a tooltip appears below the defined term on hover or focus, and clicking on a tooltip will leave it open until you click somewhere else. Tooltips should be short, and cannot contain HTML markup.  You can use “curly quotes” if needed. 

```html_example
<p>The <span data-tooltip aria-haspopup="true" class="has-tip" tabindex="0" title="A “scarabaeus” is an outdated 
term for an object in the form of a scarab beetle. The scarab was a popular form of amulet in Ancient 
Egypt.">scarabaeus</span> hung clear of any branches, and, if allowed to fall, would have fallen at our feet. </p>
```



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

### Show/Hide for Screen Readers

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



# Modals

A standard modal dialog is just an empty container, so you can put any kind of content inside it, from text to forms to images to an entire grid.  At small screen sizes, all modals are full width, and the default for medium or larger is 75%.  To create a modal, 

- Add the attributes `data-open` and `aria-controls` to to the link that opens the modal. The value of both should be the ID of the modal.
- To the modal container, add the class `.reveal`, the attribute `data-reveal`, and a unique ID (which is used by any link that launches the modal).  
- Modals by default are accessible through the use of various ARIA attributes.  To make a modal even more accessible, designate a label to the modal by adding an `id` attribute on the elment you want to designate as the label (such as a heading inside the modal) and then adding the same value into an `aria-labelledby` attribute on the modal container.

```html
<a data-open="customModal" aria-controls="customModal">Link to a modal</a>

<div class="reveal" id="customModal" data-reveal" aria-labelledby="customModalLabel">
  <h2 id="customModalLabel">Modal Title</h2>
  // modal contents
</div>

```

---

## Modal Sizing

Below the medium breakpoint, *all* modals are full screen.  Use the following classes to adjust a modal's size:

|Class    |Below Medium Breakpoint| Between Medium and Large   | Large Breakpoint and up     |
|---------|:---------------------:|:--------------------------:|:---------------------------:|
|`.small` |100% w x 100% h        |50% w (max 480p) x content h|480p w x content h           |
|`.medium`|100% w x 100% h        |75% w (max 720p) x content h|720p w x content h           |
|(default)|100% w x 100% h        |75% w (max 960p) x content h|960p w x content h           |
|`.large` |100% w x 100% h        |90% w x content h           |90% w (max 1400p) x content h|
|`.full`  |100% w x 100% h        |100% w x 100% h             |100% w x 100% h              |

```html_example
<ol>
  <li><a data-open="exampleModal5" aria-controls="exampleModal5">View a standard modal at small width</a>. 
    <div class="small reveal" id="exampleModal5" data-reveal aria-labelledby="Modal5-label">
      <div class="row">
        <h3 id="Modal5-label">I'm a small width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> to images.  </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>
    </div>
  </li>
  
  <li><a data-open="exampleModal6" aria-controls="exampleModal6">View a standard modal at medium width</a>.
    <div class="medium reveal" id="exampleModal6" data-reveal aria-labelledby="Modal6-label">
      <div class="row">
        <h3 id="Modal6-label">I'm a medium width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> to images.  </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>
    </div>  
  </li>  
  
  <li><a data-open="exampleModal2" aria-controls="exampleModal2">View a standard modal at default width</a>.
    <div class="reveal" id="exampleModal2" data-reveal>
      <div class="row">
        <p>I'm a modal at the default width.</p>
        <p> I can contain any normal markup, from <a href="/">links</a> to images.  </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
        <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
      </div>
    </div>
  </li>
  
  <li><a data-open="exampleModal7" aria-controls="exampleModal7">View a standard modal at large width</a>.  
    <div class="large reveal" id="exampleModal7" data-reveal>
      <div class="row">
        <p>I'm a large width modal.</p>
        <p> I can contain any normal markup, from <a href="/">links</a> to images.  </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>
    </div>
  </li>
  
  <li><a data-open="exampleModal8" aria-controls="exampleModal8">View a standard modal at full width/height</a> (you'll likely want to add a color overlay - see below).
    <div class="full reveal" id="exampleModal8" data-reveal>
      <div class="row">
        <p>I'm a full width modal.</p>
        <p> I can contain any normal markup, from <a href="/">links</a> to images.  </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div> 
    </div>    
  </li>
</ol>
```

---

## Color Overlays

Modals can be done with a variety of background colors by adding an `.overlay-xxx` class (where xxx is green, orange, blue, teal, gray, yellow, red, purple) on the `.reveal` element.

```html_example
<ol>
  <li><a data-open="fullModal1" aria-controls="fullModal1">View a full width/height modal on green</a>. 
    <div class="full reveal overlay-green" id="fullModal1" data-reveal aria-labelledby="Modal1-label">
      <div class="row"> 
        <h3 id="Modal1-label">I'm a full width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>
  </li>
  
  <li><a data-open="fullModal2" aria-controls="fullModal2">View a full width/height modal on orange</a>.
    <div class="full reveal overlay-orange" id="fullModal2" data-reveal aria-labelledby="Modal2-label">
      <div class="row"> 
        <h3 id="Modal1-label">I'm a full width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>  
  </li>  
  
  <li><a data-open="fullModal3">View a full width/height modal on blue</a>.  
    <div class="full reveal overlay-blue" id="fullModal3" data-reveal>
      <div class="row"> 
        <h3 id="Modal1-label">I'm a full width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>
  </li>  
  
  <li><a data-open="fullModal4">View a full width/height modal on teal</a>.  
    <div class="full reveal overlay-teal" id="fullModal4" data-reveal>
      <div class="row"> 
        <h3 id="Modal1-label">I'm a full width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>
  </li>
  
  <li><a data-open="fullModal5">View a full width/height modal on gray</a>.  
    <div class="full reveal overlay-gray" id="fullModal5" data-reveal>
      <div class="row"> 
        <h3 id="Modal1-label">I'm a full width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>
  </li>
  
  <li><a data-open="fullModal7">View a full width/height modal on yellow</a>.  
    <div class="full reveal overlay-yellow" id="fullModal7" data-reveal>
      <div class="row"> 
        <p>I'm a full width modal.</p>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>
  </li>
  
  <li><a data-open="fullModal8">View a full width/height modal on red</a>
    <div class="full reveal overlay-red" id="fullModal8" data-reveal>
      <div class="row"> 
        <h3 id="Modal1-label">I'm a full width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>  
  </li>
  
  <li><a data-open="fullModal9">View a full width/height modal on purple</a>
    <div class="full reveal overlay-purple" id="fullModal9" data-reveal>
      <div class="row"> 
        <h3 id="Modal1-label">I'm a full width modal.</h3>
        <p> I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="http://placekitten.com/200/160" alt="kitty">
      </div>  
    </div>  
  </li>
</ol>
```

---

## Nested Modal

It's possible for modals to open other modals. Create a second modal with a unique ID, and then add a click trigger with `data-open` inside the first modal.

```html_example
<ul>
  <li><a data-open="exampleModalA" aria-controls="exampleModalA">View a modal</a> that launches a second modal</li>
</ul>

<!-- This is the first modal -->
<div class="reveal" id="exampleModalA" data-reveal>
  <div class="row"> 
    <h2>Awesome!</h2>
    <p class="lead">I have another modal inside of me!</p>
    <p><a class="button secondary" data-open="exampleModalB" aria-controls="exampleModalB">View another modal!</a></p>
  </div>
</div>

<!-- This is the nested modal -->
<div class="reveal" id="exampleModalB" data-reveal>
  <div class="row"> 
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

<div class="reveal" id="exampleModalC" data-reveal data-reset-on-close="true">
  <div class="flex-video">
    <iframe width="420" height="315" frameborder="0" allowfullscreen src="//www.youtube-nocookie.com/embed/26OUQIjRRbc?rel=0&amp;wmode=transparent"></iframe>
  </div>
</div>

<ul>
  <li><a href="https://www.youtube.com/watch?v=tCg9285bJnY" data-open="exampleModalD" aria-controls="exampleModalD">View a modal with a widescreen (16:9 ratio) video</a>.</li>
</ul>

<div class="reveal" id="exampleModalD" data-reveal data-reset-on-close="true">
  <div class="flex-video widescreen">
    <iframe width="549" height="309" frameborder="0" allowfullscreen src="//www.youtube-nocookie.com/embed/tCg9285bJnY?rel=0&amp;wmode=transparent"></iframe>
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
  <li><a data-open="exampleModalE" href="http://placekitten.com/2300/1600" aria-controls="exampleModalE">View an image modal</a>.</li>
</ul>
  
<div class="reveal reveal-image" id="exampleModalE" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="http://placekitten.com/2200/1600" alt="kitty">
      <figcaption>Pretty Kitty!</figcaption>
    </figure>
  </div>
</div>

<ul>
  <li>View an image modal by clicking the following image.<br><a data-open="exampleModalF" class="overlay" 
  href="http://placekitten.com/2300/1600" aria-controls="exampleModalF"><img src="http://placekitten.com/200/160" alt="kitty"></a></li>
</ul>
  
<div class="reveal reveal-image" id="exampleModalF" data-reveal>
  <div class="reveal-image-inner">
    <figure>
      <img src="http://placekitten.com/2300/1600" alt="kitty">
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
      <section>
        <h3>Slide One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-green">
      <section>
        <h3>Slide Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><a class="button hollow">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-orange">
      <section>
        <h3>Slide Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow large">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-red">
      <section>
        <h3>Slide Four</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
        <ul>
        <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
        <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
        <p><a class="button hollow">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-purple">
      <section>
        <h3>Slide Five</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow tiny">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-blue">
      <section>
        <h3>Slide Six - Example Without a Button</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-teal">
      <section>
        <h3>Slide Seven</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-gray">
      <section>
        <h3>Slide Nine</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </section>
    </li>
  </ul>
</div>
```

---

## Vertical Navigation Bullets

```html_example
<div class="orbit bullets-vertical" role="region" aria-label="Favorite Text Ever" data-orbit data-auto-play="false">
  <ul class="orbit-container"> 
    <li class="orbit-slide orbit-slide-yellow">
      <section>
        <h3>Slide One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-green">
      <section>
        <h3>Slide Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><a class="button hollow">Button Link</a></p>
      </section>
    </li>
    <li class="orbit-slide orbit-slide-orange">
      <section>
        <h3>Slide Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow large">Button Link</a></p>
      </section>
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

---