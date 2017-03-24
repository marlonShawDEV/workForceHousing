
# The Templates

The corporate site has 2 primary templates: One-column content, and two-column content.

The templates are build using the Foundation grid -- which uses two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## One Column Content

When you are creating a new page using the responsive template, the markup for the 1 column band is automatically wrapped around your content.

```html
<div class="content-band">
  <div class="row column">
      <!-- content area -->
  </div>
</div>
```

<div class="row display">
  <div class="column">  
    <h3>Main Content Area</h3>
    <p>This column can be further divided by using cards or inserting <a href="#rows-and-columns">rows of columns</a> (max of 12 columns per row).</p>    
    <div class="row">
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
      <div class="column small-1">
        <div class="background-white callout small"></div>
      </div>
    </div>
  </div>
</div>

---

## Two Column Content

When you are creating a new page using the responsive template, the markup for the 2 column band is automatically wrapped around your content.

```html
<div class="two-column-layout">
  <div class="row two-column-row"> 
    <main class="column">
      <!-- main content area -->      
    </main>
    <aside class="column">  
      <!-- sidebar content area -->
    </aside>
  </div>
</div>
```

<div class="two-column-layout">
  <div class="row two-column-row display">
    <main class="column">
      <h3>Main Content Area</h3>
      <p>This column can be further divided by using cards or inserting <a href="#rows-and-columns">rows of columns</a> (max of 12 columns per row).</p>   
      <div class="row">
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
        <div class="column small-1">
          <div class="background-white callout small"></div>
        </div>
      </div>
    </main>
    <aside class="column">
      <section class="sidebar">
        <div class="row">
          <div class="column">
            <h3>Aside Content Area</h3>
            <p>This column can be further divided by using cards or inserting <a href="#rows-and-columns">rows of columns</a>.</p>
            <div class="row">
              <div class="small-3 column">
                <div class="background-white callout small"></div>
              </div>
              <div class="small-3 column">
                <div class="background-white callout small"></div>
              </div>
              <div class="column small-3">
                <div class="background-white callout small"></div>
              </div>
              <div class="column small-3">
                <div class="background-white callout small"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>



# Rows and Columns

When you need to divide your content into columns, start by adding an element with a class of `.row`. This will create a horizontal block to contain vertical columns. Then add elements with a `.column` class within that row. Specify the widths of each column with the `.small-#`, `.medium-#`, `.large-#`, and `.xlarge-#`.  Larger widths will inherit from smallers ones, so you only need to add an extra class if you are changing the layout at a larger breapoint.

Move blocks up to 11 columns to the right by using classes like `.large-offset-1` and `.small-offset-3`. 

In order to work around browsers' different rounding behaviors, Foundation will float the last column in a row to the right so the edge aligns. If your row doesn't have a count that adds up to 12 columns, you can tag the last column with a class of `.end` in order to override that behavior.

Center your columns by adding a class of `.small-centered` to your column. Large will inherit small centering by default, but you can also center solely on large by applying a `.large-centered` class. To uncenter on large screens, use `.large-uncentered`.

If you are looking for more advanced examples, refer to <a href="http://foundation.zurb.com/sites/docs/grid.html">Foundation Docs</a>.

```html_example
<div class="row">
  <div class="small-2 large-4 column">
    <p>small-2 large-4 column content</p>
  </div>
  <div class="small-4 large-4 column">
    <p>small-4 large-4 column content</p>
  </div>
  <div class="small-6 large-4 column">
    <p>small-6 large-4 column content</p>
  </div>
</div>
<div class="row">
  <div class="large-3 column">
    <p>large-3 column content</p>
  </div>
  <div class="large-6 column">
    <p>large-6 column content</p>
  </div>
  <div class="large-3 column">
    <p>large-3 column content</p>
  </div>
</div>
<div class="row">
  <div class="small-6 large-2 column">
    <p>small-6 large-2 column content</p>
  </div>
  <div class="small-6 large-8 column">
    <p>small-6 large-8 column content</p>
  </div>
  <div class="small-12 large-2 column">
    <p>small-12 large-2 column content</p>
  </div>
</div>
<div class="row">
  <div class="small-3 column">
    <p>small-3 column content</p>
  </div>
  <div class="small-9 column">
    <p>small-9 column content</p>
  </div>
</div>
<div class="row">
  <div class="large-4 column">
    <p>large-4 column content</p>
  </div>
  <div class="large-8 column">
    <p>large-8 column content</p>
  </div>
</div>
<div class="row">
  <div class="small-6 large-5 column">
    <p>small-6 large-5 column content</p>
  </div>
  <div class="small-6 large-7 column">
    <p>small-6 large-7 column content</p>
  </div>
</div>
<div class="row">
  <div class="large-6 column">
    <p>large-6 column content</p>
  </div>
  <div class="large-6 column">
    <p>large-6 column content</p>
  </div>
</div>
```

---

## Block Grids

Block grids are a shorthand way to create equally-sized columns. Add a class of the format `.[size]-up-[n]` to change the number of columns within the row. Adding the `.column-block` class to columns will apply a bottom margin equal to the width of gutters.

Block grids are used for most of the card displays.

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



# Colors

<p class="lead">Below you can find the different values we created that support the color variables you can change at any time in <code>\_settings.scss</code></p>

---
<h2>Bolds</h2>
<div class="row up-1 medium-up-3 large-up-4">
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
  <div class="column">
    <div class="color-block">
      <span style="background: #cf0a2c"></span>
      $fm-red<br>
      $alert-color
    </div>
  </div>
</div>
<br>
<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #00a6e2"></span> 
      $primary-color
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #457bbe"></span>
      $fm-blue
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #00a19a"></span>
      $fm-teal
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #725090"></span>
      $fm-purple
    </div>
  </div>
</div>
<br>
<h2>Neutrals</h2>
<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #000000"></span>
      $black
    </div>
  </div>
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
<h2>Mosiacs and Card Edges</h2>
<div class="row up-1 medium-up-3 large-up-4">
  <div class="column">
    <div class="color-block">
      <span style="background: #c7d939"></span>
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




# Dividers

Use `<hr>` dividers to define thematic breaks between content chunks. 

```html_example
<hr>
```



# Text and Typography

There are several text and typography styles to choose from, although some styles are intended for specific uses, or for specific page types. Avoid skipping heading levels when structuring your document, as it confuses screen readers. 

<div class="callout background-gray">
  <p class="lead">While some may appear similar at desktop width, they scale down differently at mobile sizes, so pay attention to the class you choose.</p>
</div>

```html_example
<ul class="accordion-pointer" data-accordion>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography1" id="typography1-heading" aria-controls="typography1" role="tab">Generic Headings</a>
    <div class="accordion-content" data-tab-content id="typography1" aria-labelledby="typography1-heading" role="tabpanel">
      <p>Avoid skipping heading levels when structuring your document. If you need a heading to match a specific style, use one of the custom classes in the Basic Content Styles section.</p>
      <hr>
      <div class="callout">
        <h1>H1 is the largest header</h1>
        <h2>H2 is a large header</h2>
        <h3>H3 is a medium header</h3>
        <h4>H4 is a moderate header</h4>
        <h5>H5 is a small header</h5>
        <h6>H6 is the smallest header</h6>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography2" id="typography-heading2" aria-controls="typography2" role="tab">Custom Content Styles</a>
    <div class="accordion-content" data-tab-content id="typography2" aria-labelledby="typography-heading2" role="tabpanel">
      <p>These styles can be applied to <strong>most HTML elements</strong>, such as <code>H1</code> - <code>H6</code>, <code>span</code>, <code>div</code>, or <code>p</code>. You do not have to use the same element that the example uses.</p>
      <p>Avoid skipping heading levels when structuring your document, as it confuses screen readers. Screen readers announce headings and identify the heading level. JAWS, for example, precedes &lt;h1&gt; headings with "heading level 1."</p>
      <hr>
      <div class="callout">
        <p><span class="callout-txt">This is class callout-txt, use it for a brief, attention-catching phrase.</a></p>  
        <h3 class="call-to-action">This is class call-to-action  (currently not used)</h3>
        <h3 class="subtitle">This is class subtitle</h3>
        <h3 class="section-subtitle">This is class section-subtitle</h3> 
        <h2 class="page-subtitle">This is class page subtitle (also used for subtitles in <a href="#page-title">page titles</a>)</h2>
        <p class="flex-up">This is class flex-up</p>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography3" id="typography-heading3" aria-controls="typography3" role="tab">Content Intro/Lead</a>
    <div class="accordion-content" data-tab-content id="typography3" aria-labelledby="typography-heading3" role="tabpanel">
      <p>These styles create larger blocks of text for introductory content.</p>
      <hr>
      <div class="callout">
        <p class="intro">This is a paragraph with class <code>.intro</code>, which can also <strong>contain strong text</strong> and <em>emphasized text</em>.</p>
        <p class="lead">This is a paragraph with class <code>.lead</code>, which can also <strong>contain strong text</strong> and <em>emphasized text</em>.</p>
        <p>This is a regular paragraph for comparison.</p>
      </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography4" id="typography-heading4" aria-controls="typography4" role="tab">Sidebar (aside) classes</a>
    <div class="accordion-content" data-tab-content id="typography4" aria-labelledby="typography-heading4" role="tabpanel">
      <p>In addition to these styles, sidebars can also use any of the basic content styles.</p>
      <hr>
      <div class="callout">
        <h3 class="sidebar-title">This is a sidebar-title</h3>
        <h3 class="sidebar-subtitle">This is a sidebar-subtitle (use in research landing)</h3>
        <h3 class="sidebar-headline">This is a sidebar-headline</h3>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography5" id="typography-heading5" aria-controls="typography5" role="tab">Article Promo classes</a>
    <div class="accordion-content" data-tab-content id="typography5" aria-labelledby="typography-heading5" role="tabpanel">
      <p>These styles are for article promotions via article lists and cards. These are not for use in actual article content.</p>
      <hr>
      <div class="callout">
      <h5>Article Data for Lists and Cards</h5>
        <h3 class="article-headline">This is class article-headline (use in news, blog)</h3>
        <h3 class="card-title-large">This is class card-title-large (variation of above, used for EP cards only)</h3>
        <div class="article-category">This is class article-category</div>
        <div class="article-date">This is class article-date (used in blog, perspectives)</div>
        <div class="article-date-lg">This is class article-date-lg <span class="uppercase"><strong>Partial Uppercase/Strong</strong></span> (used in media, research)</div>
        <div class="article-date-feature">This is class article-date-feature <span class="uppercase">Partial Uppercase</span> (used in featured blog/EP)</div>
        <div class="article-byline">This is class article-byline <span class="uppercase">Partial Uppercase</span> <span class="reduce">Partial Reduced</span> (used in featured EP)</div> 
      </div>
      <hr>
      <div class="callout">
      <h5>Promo Blurbs</h5>
      <p>These styles are limited just to promo blurbs -- all of these styles <strong>hide</strong> at smallest screen sizes, to allow more room for their accompanying headline.</p> 
        <div class="article-blurb">This is class article-blurb (used in news, EP).</div>
        <div class="article-blurb-blog">This is class article-blurb-blog (used only in blog).</div>
        <div class="article-blurb-lg">This is class article-blurb-lg (used only in featured EP).</div> 
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography6" id="typography6-heading" aria-controls="typography6" role="tab">Capitalization</a>
    <div class="accordion-content" data-tab-content id="typography6" aria-labelledby="typography6-heading" role="tabpanel">
      <p>Use these styles when the choice to display some text is merely a stylistic choice. When using these styles, keep your markup in standard case, and use this class to visually change the displayed case.</p>
      <p>For words that should <strong>always</strong> be uppercased (such as our stock symbol, or acronyms like REO), use uppercased letters in your markup.</p>
      <hr>
      <div class="callout">
        <p><span class="uppercase">This is class uppercase</span>, which makes every letter appear capitalized.</p>
        <p><span class="smallcaps">This is Class smallcaps</span>, which makes every lowercased letter appear as small capital letters.</p>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography7" id="typography-heading7" aria-controls="typography7" role="tab">Footer Promo classes</a>
    <div class="accordion-content" data-tab-content id="typography7" aria-labelledby="typography-heading7" role="tabpanel">
      <p>This style should only be used inside a Footer Promo.</p>
      <hr>
      <div class="callout">
        <div class="callout background-primary footer-promo">
          <h3 class="callout-footer-title">This is callout-footer-title</h3>
        </div>  
      </div>      
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography8" id="typography-heading8" aria-controls="typography8" role="tab">Hero classes</a>
    <div class="accordion-content" data-tab-content id="typography8" aria-labelledby="typography-heading8" role="tabpanel">
      <p>These should only be used inside HERO elements.</p>
      <hr>
      <div class="callout">
        <div class="callout background-primary">
          <div class="hero-date">This is hero-date</div>
          <h1 class="hero-title">This is hero-title</h1>
          <div class="hero-subtitle">This is hero-subtitle (homepage only)</div>
        </div>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography9" id="typography-heading9" aria-controls="typography9" role="tab">Grid-block classes</a>
    <div class="accordion-content" data-tab-content id="typography9" aria-labelledby="typography-heading9" role="tabpanel">
      <p>These are intended for use in the colorful grid layouts like the About page and media resources.  Be careful using them elsewhere, as they have a more dramatic size variation from small screen to large screen than most other text styles.</p>
      <hr>
      <div class="callout">
        <div class="callout background-teal">
          <p class="grid-block-label">This is grid-block-label</p>
          <p class="grid-block-title-large">This is grid-block-title-large</p>
          <p class="grid-block-title">This is grid-block-title</p>
          <p class="grid-block-title-medium">This is grid-block-title-medium</p>
          <p class="grid-block-text">This is grid-block-text.</p>
          <p class="grid-block-text-small">This is grid-block-text-small</p>
          <p class="stat-lg">This is stat-lg</p>
          <p class="stat-med">This is stat-med</p>
          <p class="stat">This is stat</p>
        </div>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography10" id="typography-heading10" aria-controls="typography10" role="tab">Homepage classes</a>
    <div class="accordion-content" data-tab-content id="typography10" aria-labelledby="typography-heading10" role="tabpanel">
      <p>These styles should only be used on the corporate homepage.</p>
      <hr>
      <div class="callout">
        <h2 class="homepage-headline">This is homepage-headline</h2>
        <h3 class="finance-category">This is finance-category</h3>
        <h3 class="finance-research-title">This is finance-research-title</h3>
        <p class="finance-research-category">This is finance-research-category</p>
        <p class="stat-med">This is stat-med</p>
        <p class="stat-sm">This is stat-sm</p>
        <p class="stat-points">This is stat-points</p>
        <p class="title-testimonial">This is title-testimonial</p>  
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography11" id="typography-heading11" aria-controls="typography11" role="tab">Blockquotes</a>
    <div class="accordion-content" data-tab-content id="typography11" aria-labelledby="typography-heading11" role="tabpanel">
      <p>Blockquotes should only be used when a person or source is being quoted.</p>
      <ul>
        <li>Include the source for the quote in a <code>footer</code> and include the author, title or work in a <code>cite</code>.</li>
        <li>Do <strong>not</strong> use a blockquote simply to decorate text that isn't a quotation.</li>
      </ul>
      <hr>
      <div class="callout">
        <blockquote>
          <p>Cowards die many times before their deaths; the <strong>valiant</strong> never taste of death but once.</p>
          <footer><cite>William Shakespeare</cite> in <cite>King Henry the Fifth</cite></footer>
        </blockquote>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography12" id="typography-heading12" aria-controls="typography12" role="tab">Abbreviations, Code, Keystrokes</a>
    <div class="accordion-content" data-tab-content id="typography12" aria-labelledby="typography-heading12" role="tabpanel">
      <p>Use the <code>abbr</code> tag to annotate a shortened term. Abbreviations must always have a <code>title</code> attribute which clarifies the full term.</p>
      <hr>
      <div class="callout">
        <ul>
          <li>In my dream last night, I saw <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien and George <abbr title="Raymond Richard">R. R.</abbr> Martin hanging out on Sunset <abbr title="Boulevard">Blvd</abbr>.</li>
        </ul>          
      </div>             
      <p>Format references to markup languanges with the <code>code</code> tag.  Use the <code>kbd</code> tag to annotate a key stroke or combination.</p>
      <hr>
      <div class="callout">
        <ul>
          <li>To displays all connections and listening ports, type <code>netstat -a</code> at the command prompt.</li>
          <li>To exit the routine, press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows).</li>
        </ul>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#typography15" id="typography15-heading" aria-controls="typography15" role="tab">Text Weight &amp; Size</a>
    <div class="accordion-content" data-tab-content id="typography15" aria-labelledby="typography15-heading" role="tabpanel">
      <div class="callout">
        <h5>Emphasized Text</h5>
        <p>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> to add emphasis to standard text.</p>
        <p>This is <strong>content inside a &lt;strong&gt; element</strong> in a regular sentence.</p>
        <p>This is <em>content inside an &lt;em&gt; element</em> in a regular sentence.</p>
      </div>    
      <hr>
      <div class="callout">
        <h5>Text Weight</h5>
        <p>When you need to change the weight of text without changing it's emphasis, add class <code>.weight-xxx</code> (where xxx = light, normal, medium, bold, or black).  These classes can be nested as needed to create variation.</p>
        <ol>
        <li class="weight-light">This is class weight-light (300), and <span class="weight-bold">This is class weight-bold (700)</span> inside of it.</li>
        <li class="weight-normal">This is class weight-normal (400), and <span class="weight-black">This is class weight-black (900)</span> inside of it.</li>
        <li class="weight-medium">This is class weight-medium (500), and <span class="weight-light">This is class weight-light (300)</span> inside of it.</li>
        <li class="weight-bold">This is class weight-bold (700), and <span class="weight-normal">This is class weight-normal (400)</span> inside of it.</li>
        <li class="weight-black">This is class weight-black (900), and <span class="weight-medium">This is class weight-medium (500)</span> inside of it.</li>
      </div>   
      <hr>
      <div class="callout"> 
        <h5>Text Size</h5>
        <p>Use these styles you want to adjust the font size of an item up or down.</p>
        <p>This is <span class="enlarge">class enlarge -- it bumps up the size</span> of the current text.</p>
        <p>This is <span class="reduce">class reduce -- it bumps down the size</span> of the current text.</p>
        <p>This is <span class="stat">class stat</span> it bumps up the size of a single data point to highlight it.</p>  
      </div>
    </div>
  </li>
</ul>
```



# Text Alignment

The default text alignment for most containers is left.
- You can change the text alignment of an element by adding `.text-left`, `.text-right`, or `.text-center` to an element.
- You can shift alignment at different breakpoints by adding a breakpoint to the front of a text alignment class. For example, `.medium-text-center` will keep text left-aligned on the smallest screens, but switch to center-aligned on medium screens and larger.
- There are also [vertical alignment classes](#data-tables) if you are needing to align table cells.

```html
<p class="text-left"><strong>This text is left-aligned.</strong> </p>
<p class="medium-text-right"><strong>This text is right-aligned</strong> at medium screen widths and larger.</p>
<p class="text-center"><strong>This text is center-aligned.</strong> </p>
```

<div class="callout background-concrete">
  <p class="text-left"><strong>This text is left-aligned.</strong> </p>
</div>
<div class="callout background-concrete">
  <p class="medium-text-right"><strong>This text is right-aligned</strong> at medium screen widths and larger.</p>
</div>
<div class="callout background-concrete">
  <p class="text-center"><strong>This text is center-aligned.</strong> </p>
</div>



# Lists

```html_example
<ul class="accordion-pointer" data-accordion>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#lists3" id="list-heading3" aria-controls="lists3" role="tab">Ordered Lists</a>
    <div class="accordion-content" data-tab-content id="lists3" aria-labelledby="list-heading3" role="tabpanel">      
      <p>Use an ordered list when creating a list where the order of the items is important. Ordered lists support additional attributes and classes if you need to specify a starting number other than 0, apply a non-integer counting method, or reverse to decending order.</p>
      <hr>
      <div class="callout">
        <h5>Standard Nested List</h5>
        <p>This is the ordered list style you will most often use.</p>
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
      </div>
      <hr>
      <div class="callout">
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
      </div>
      <hr>
      <div class="callout">
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
      </div>
      <hr>
      <div class="callout">
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
      </div>
      <hr>
      <div class="callout">
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
      </div>
      <hr>
      <div class="callout">
        <h5>Descending list</h5>
        <ol reversed>
          <li>Coffee</li>
          <li>Milk</li>
          <li>Tea</li>
          <li>Soda</li>
        </ol>
      </div>
      <hr>
      <div class="callout">
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
      </div>     
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#lists4" id="list-heading4" aria-controls="lists4" role="tab">Unordered Lists</a>
    <div class="accordion-content" data-tab-content id="lists4" aria-labelledby="list-heading4" role="tabpanel">      
      <p>Use an unordered list to... *list things*, if the order of the items doesn't matter.</p>
      <div class="callout background-concrete">
      Generic list items (those in <code>ul</code> or <code>ol</code> containers with no css class applied) have default margins to separate each item to provide better scanability. Adding any class to the <code>ul</code> or <code>ol</code> container will override the default margins on the <code>li</code> elements.
      </div>
      <hr>
      <div class="callout">
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
              <li>Nested list item. This is a list item with a much longer content.  Sometimes a list item is long enough that it will span multiple lines.  This is an example of such an item, to show the line height, padding, and margin that are applied to this list element when it is long enough to wrap to a new line.</li>
              <li>Nested list item</li>
            </ul>
          </li>
          <li>List item</li>
          <li>List item. This is a list item with a much longer content.  Sometimes a list item is long enough that it will span multiple lines.  This is an example of such an item, to show the line height, padding, and margin that are applied to this list element when it is long enough to wrap to a new line.</li>
          <li>List item</li>
        </ul>
      </div>
      <hr>
      <div class="callout">
        <h4>Un-bulleted Unordered Lists</h4>
        <p>The <code>ul</code> is a bulleted list by default, but you can add the class <code>.no-bullet</code> to remove the bullets from that list.  Nested lists will retain their formatting unless also modified.</p>
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
      </div>
      <hr>
      <div class="callout">
        <h4>Expanded Unordered Lists</h4>
        <p>When you require additional space between very long, complex list items -- such as those where multiple paragraphs are in a single list item, use <code>p</code> tags.</p>
        <ul>
          <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor <a href="#">orci eros, ac molestie lorem</a> dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat.</p></li>
          <li><p>Proin diam quam, elementum in eleifend id, elementum et metus. Cras in justo consequat justo semper ultrices. Sed dignissim lectus a ante mollis, nec vulputate ante molestie. Proin in porta nunc. Etiam pulvinar turpis sed velit porttitor, vel adipiscing velit fringilla. Cras ac tellus vitae purus pharetra tincidunt. Sed cursus aliquet aliquet. <strong>Cras eleifend commodo malesuada.</strong> In turpis turpis, ullamcorper ut tincidunt a, ullamcorper a nunc. Etiam luctus tellus ac dapibus gravida. Ut nec lacus laoreet neque ullamcorper volutpat.</p>
          <p>Nunc et leo erat. Aenean mattis ultrices lorem, eget adipiscing dolor ultricies eu. In hac habitasse platea dictumst. Vivamus cursus feugiat sapien quis aliquam. Mauris quam libero, porta vel volutpat ut, blandit a purus. Vivamus vestibulum <a href="#">dui vel tortor molestie</a>, sit amet feugiat sem commodo. Nulla facilisi. Sed molestie arcu eget tellus vestibulum tristique.</p>
          </li>
          <li><p>Nullam ut tincidunt nunc. Pellentesque metus lacus, commodo eget justo ut, rutrum varius nunc. <strong>Sed non rhoncus risus.</strong> Morbi sodales gravida pulvinar. Duis malesuada, odio volutpat elementum vulputate, massa magna scelerisque ante, et accumsan tellus nunc in sem. Donec mattis arcu et velit aliquet, non sagittis justo vestibulum. Suspendisse volutpat felis lectus, <a href="#">nec consequat ipsum mattis id</a>. Donec dapibus vehicula facilisis. In tincidunt mi nisi, nec faucibus tortor euismod nec. Suspendisse ante ligula, aliquet vitae libero eu, vulputate dapibus libero. Sed bibendum, sapien at posuere interdum, libero est sollicitudin magna, ac gravida tellus purus eu ipsum. Proin ut quam arcu.</p>
          <p><em>Suspendisse potenti.</em> Donec ante velit, ornare at augue quis, <a href="#">tristique laoreet sem</a>. Etiam in ipsum elit. Nullam cursus dolor sit amet nulla feugiat tristique. Phasellus ac tellus tincidunt, imperdiet purus eget, ullamcorper ipsum. Cras eu tincidunt sem. Nullam sed dapibus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id venenatis tortor. In consectetur sollicitudin pharetra. Etiam convallis nisi nunc, et aliquam turpis viverra sit amet. Maecenas faucibus sodales tortor.</p>
          <p>Suspendisse lobortis mi eu leo viverra volutpat. Pellentesque velit ante, vehicula sodales congue ut, elementum a urna. Cras tempor, ipsum eget luctus rhoncus, arcu ligula fermentum urna, vulputate pharetra enim enim non libero.</p></li>
        </ul>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#list5" id="list-heading5" aria-controls="list5" role="tab">Definition Lists</a>
    <div class="accordion-content" data-tab-content id="list5" aria-labelledby="list-heading5" role="tabpanel">
      <p>A definition list (<code>dl</code>) is used to display name-value pairs, like metadata or a dictionary definition. Each term (<code>dt</code>) is paired with one or more definitions (<code>dd</code>).  Add class <code>.glossary</code> to the <code>dl</code> to indent the definitions.</p>
      <hr>
      <div class="callout">
        <h4>Plain style</h4>
        <dl>
          <dt>Time</dt>
          <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
          <dt>Space</dt>
          <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
          <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
        </dl>
      </div>
      <hr>
      <div class="callout">
        <h4>Glossary style</h4>
        <dl class="glossary">
          <dt>Amortization</dt>
          <dd>Paying off a loan over the period of time and at the interest rate specified in a loan document. The amortization of a loan includes the payment of interest and a part of the amount borrowed in each mortgage payment.</dd>
          <dt>Amortization Schedule</dt>
          <dd>Provided by mortgage lenders, the schedule shows how over the term of your mortgage the principal portion of the mortgage payment increases and the interest portion of the mortgage payment decreases.</dd>
          <dt>Annual Percentage Rate (APR)</dt>
          <dd>How much a loan costs annually. The APR includes the interest rate, points, broker fees and certain other credit charges a borrower is required to pay.</dd>
          <dt>Application Fee</dt>
          <dd>The fee that a mortgage lender charges to apply for a mortgage to cover processing costs.</dd>
        </dl>   
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#list6" id="list-heading6" aria-controls="list6" role="tab">Divided Lists</a>
    <div class="accordion-content" data-tab-content id="list6" aria-labelledby="list-heading6" role="tabpanel">      
      <p>To add dividers between items in a list, add the class <code>.list-divided</code> (for light backgrounds) or <code>.list-divided-white</code> (for dark backgrounds) to the <code>ul</code> or <code>ol</code> tag.</p>
      <p>The spacing is looser for `.list-divided` than it is for `.list-divided-white`.</p>
      <p>On unordered lists, the dividers are typically used along with the <code>.no-bullet</code> class.</p>
      <div class="row">
        <div class="column medium-6">
        <h5>Unordered Divided Lists</h5>
          <div class="callout"> 
            <ul class="list-divided no-bullet">
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>
          </div> 
          <div class="callout background-gray"> 
            <ul class="list-divided-white no-bullet">
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ul>
          </div>
        </div>
        <div class="column medium-6">
        <h5>Ordered Divided Lists</h5>
          <div class="callout">   
            <ol class="list-divided">
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ol>
          </div>
          <div class="callout background-gray">   
            <ol class="list-divided-white">
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
              <li>List item</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#list7" id="list-heading7" aria-controls="list7" role="tab">News Clipping Lists</a>
    <div class="accordion-content" data-tab-content id="list7" aria-labelledby="list-heading7" role="tabpanel">      
      <p>Similar to the Divided List, but more spread out to give more room to the additional data that blog headlines include.</p>
      <p>Variations of this design also exist for <a href="#sidebar-modules">sidebar modules</a>.</p>
      <div class="callout">       
        <ul class="no-bullet clipping-block gutter-bottom">
          <li><div class="article-date-lg">January 18, 2017</div>
            <h3 class="article-headline"><a href="#">Freddie Mac Forgoes Issuing a Reference Notes Security on its January 18, 2017 Announcement Date</a></h3>
            <p>Freddie Mac announced today that it will forgo issuing a Reference Notes security on its Jan. 18, 2017 announcement... <a href="#">More</a></p>
          </li>
          <li><div class="article-date-lg">January 18, 2017</div>
            <h3 class="article-headline"><a href="#">Freddie Mac to Delist from Luxembourg Stock Exchange </a></h3>
            <p>Freddie Mac  announced that its request to delist its debt and mortgage securities from the Luxembourg Stock Exchange was granted... <a href="#">More</a></p>
          </li>
          <li><div class="article-date-lg">January 18, 2017</div>
            <h3 class="article-headline"><a href="#">Mortgage Rates Lower for Third Consecutive Week </a></h3>
            <p>Freddie Mac  today released the results of its Primary Mortgage Market Survey&reg; (PMMS&reg;), showing average mortgage rates moving... <a href="#">More</a></p>
          </li>
          <li><div class="article-date-lg">January 17, 2017</div>
            <h3 class="article-headline"><a href="#">Freddie Mac Announces Pricing of $198.5 Million Multifamily Small Balance Loan Securitization </a></h3>
            <p>Freddie Mac  announces the pricing of the SB26 offering, a multifamily mortgage-backed securitization backed by small balance... <a href="#">More</a></p>
          </li>
        </ul>
      </div>  
    </div>
  </li>
</ul>
```



# Callouts

<p class="lead">A callout is just a container with a `.callout` class applied. You can put any kind of content inside.</p>

- To create a white callout with a border, add either class `.hollow` or `.hollow-thin` to the `.callout` container.
- To select a callout with a specific background color, include `.background-xxx` class (where xxx is green, orange, primary, blue, teal, gray, yellow, red, purple, concrete, white) on the `.callout` container.
- There are callouts for use within the content area.  Refer to <a href="#prefooter-promo-band">prefooter promo</a> for full width promo containers. 

```html_example
<div class="row">
  <div class="medium-6 column">
    <div class="callout hollow">
      <p>This is a <a href="#">callout</a> with class of hollow.</p>
    </div>
    <div class="callout hollow-thin">
      <p>This is a <a href="#">callout</a> with a class of hollow-thin.</p>
    </div>
    <div class="callout background-concrete">
      <p>This is a <a href="#">callout</a> with a class of background-concrete.</p>
    </div>
    <div class="callout background-gray">
      <p>This is a <a href="#">callout</a> with class of background-gray.</p>
    </div>
    <div class="callout background-green">
      <p>This is a <a href="#">callout</a> with a class of background-green.</p>
    </div>
    <div class="callout background-blue">
      <p>This is a <a href="#">callout</a> with class of background-blue.</p>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-orange">
      <p>This is a <a href="#">callout</a> with a class of background-orange.</p>
    </div>
    <div class="callout background-yellow">
      <p>This is a <a href="#">callout</a> with background-yellow</p>
    </div>
    <div class="callout background-purple">
      <p>This is a <a href="#">callout</a> with class of background-purple.</p>
    </div>
    <div class="callout background-teal">
      <p>This is a <a href="#">callout</a> with class of background-teal.</p>
    </div>
    <div class="callout background-primary">
      <p>This is a <a href="#">callout</a> with class of background-primary.</p>
    </div>
    <div class="callout background-red">
      <p>This is a <a href="#">callout</a> with class of background-red.</p>
    </div>
  </div>
</div>
<div class="row">
  <div class="column">
    <div class="callout background-gray">
      <p>This is a gray callout, with another callout nested inside it.</p>
      <div class="callout background-white">
        <p>This is a <a href="#">callout</a> with class of background-white.</p>
      </div>
    </div>
  </div>
</div>
```

---

## Rounded Corners

<p>Add class `.rounded` to give a `.callout` rounded corners.  Rounded corners can be combined with any of the color or size variations.

```html_example
<div class="callout background-blue rounded">
  <p>This is a rounded callout.</p>
</div>
```

---
 
## Sizing

Callouts can be sized using the `.small`, `.large` and `.xlarge` classes. These will affect the padding around content to be smaller and larger respectively.  You can limit the width of a callout by putting it inside less than 12 columns at larger widths.


```html_example
<div class="row">
  <div class="medium-4 column">
    <div class="callout background-purple small">
      <p>This is a callout with class of small. It has less padding between the contents and the edge of the container.</p>
    </div>
  </div>
  <div class="medium-8 column">
    <div class="callout background-purple large">
      <p>This is a callout with class of large. It has more padding between the contents and the edge of the container.</p>
    </div>
  </div>  
</div>

<div class="callout background-purple xlarge">
    <p class="enlarge">This is a callout with class of xlarge. It has waaaay more padding between the contents and the edge of the container.</p>
  <div class="callout background-white xlarge">
    <p>This is also a callout with class of xlarge. Combined it with <code>.background-white</code>, to create a white frame inside an element with a darker background, such as a modal.</p>
  </div>
</div>
```

---

## Make Full Callout a Single Link

To make the entire callout clickable, put an anchor tag around the `.callout` container.  

```html_example
<div class="row">
  <div class="small-8 medium-6 end column">
    <a href="/"><div class="callout background-blue">
    <p>This entire blue callout is inside an anchor tag and becomes 1 big link.</p>
    </div></a>
  </div>
</div>
```


## Making Callouts Closable

Pair the callout with the [close button](#close-button) component and `data-closable` attribute to create a dismissable alert box.

<div class="callout background-concrete">
  <p>When using the <code>data-closable</code> attribute, you can optionally add <a href="http://foundation.zurb.com/sites/docs/motion-ui.html">Motion UI</a> classes to the attribute to change the closing animation. If no class is added, the plugin defaults to to a fadeout animation.</p>
</div>

```html_example
<div class="row">
  <div class="medium-6 column">
    <div class="callout background-orange" data-closable>
      <h5>This is Important!</h5>
      <p>When you're done reading it, click the close button in the corner to dismiss this alert.</p>
      <p>I'm using the default <code>data-closable</code> parameters, and simply fade out.</p>
      <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-green" data-closable="slide-out-right">
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



# Anchor Links

<p>Links are very standard, and the color is preset to the Foundation primary color. In addition, there are some custom link styles, such as  `.icon` (when you want to include an svg icon and have it inherit its size and color states from the link) and `.secondary` when you want the link to be secondary color isntead of primary. </p>
<p>Links inside <a href="#sidebar-modules">sidebar modules</a> and links inside <a href="#cards">Cards</a> inherit the existing text color to blend in better.</p>
<p>Refer to <a href="#modals">Modals</a> if you are looking for information on how to make a link launch a video, image, or content block inside a modal.</p>
<div class="callout background-concrete">
  <p>To make links screen reader-friendly, avoid using vague words like "here" or "read more" within link text. The text of the link itself should adequately describe where the link goes.</p>
</div>

```html_example
<ul class="no-bullet">
<li><a href="#">standard link</a></li>
<li><a href="#" class="icon-chevron-right">link with css-based icon</a></li>
<li><a href="#" class="icon">link with inline svg icon <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style="vertical-align: baseline;"><path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4-26.3-27.8-64-45.7-105.3-45.7h-.1-.1c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1zM161 193.1c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5v.2l-.1.1c18.3 19.2 28.1 53 28.1 80.3V224H161v-30.9z"/></svg></a></li>
</ul>
```

---

## Linked Image Overlays

Apply the `.overlay` class to the `<a>` that wraps an image to style the image with a blue overlay on hover and focus. 
Refer to <a href="#modals">modals</a> for additional options if you are launching a modal from the link.

```html
<a class="overlay" href="#"><img alt="photo of David Brickman" src="/images/exec_david_brickman.jpg"></a>
```

<div class="row">
  <div class="small-6 medium-3 column small-centered">
    <a class="overlay" href="#"><img alt="photo of David Brickman" src="/images/exec_david_brickman.jpg"></a>
  </div>
</div>



# Visibility Classes

Visibility classes let you show or hide elements based on screen size or device orientation. You can also use visibility classes to control which elements users see depending on their browsing environment.

<div class="callout background-concrete">
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

Okay, it's not *really* a float, but you can add the `.float-center` class to an element to engage the automatic margin centering trick. Note that this will only work on elements with an absolute width or a maximum width that is less than their containing element.

```html_example
<div class="gutter-bottom">
  <img src="/images/blog/fm_blog_usda_returns.jpg" alt="Harp - act now!"  class="float-center">
</div>
```

---

## Content Section Floats

There are four options for creating floated content columns within a content area: left and right variations that are proportionate or fixed.  All will only float at medium breakpoint and above -- the content will stack at small screen sizes.  Only use floated containers when ther eis sufficient content to wrap around them -- if there isn't sufficient content use a row that splits content into columns at specific breakpoints to create a similar concept.

### Left Float, Proportionate Width

Use class `.box-left-40` to float content to the left at 40% of the content area's width (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html_example
<p class="lead">Example showing floated element inserted, with floated container set to percentage-based width at medium breakpoint and higher.</p>
<div class="box-left-40">
  <div class="callout background-teal">
    <h3>Related Items</h3>
    <ul>
      <li><a href="#">Link to some supporting material</a></li>
      <li><a href="#">Link to some other supporting material</a></li>
    </ul>
  </div>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

### Left Float, Fixed Width 

Use class `.box-left-fixed300` to float content to the left at a fixed width of 300px (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html_example
<p class="lead">Example showing floated element inserted, with floated container set to a fixed-size width at medium breakpoint and higher.</p>
<div class="box-left-fixed300">
  <figure>
    <img src="/images/styleguide/bigkitty.jpg" alt="kitty">
  </figure>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

### Right Float, Proportionate Width 

Use class `.box-right-40` to float content to the right at 40% of the content area's width (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html_example
<p class="lead">Example showing floated element inserted, with floated container set to percentage-based width at medium breakpoint and higher.</p>
<div class="box-right-40">
  <div class="callout background-yellow">
    <h3>Related Items</h3>
    <ul class="list-divided no-bullet">
      <li><a href="#">Link to some supporting material</a></li>
      <li><a href="#">Link to some other supporting material</a></li>
      <li><a href="#">Link to some other supporting material</a></li>
    </ul>
  </div>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

### Right Float, Fixed Width 

Use class `.box-right-fixed300` to float content to the right at a fixed width of 300px (content will stack below medium breakpoint).  The floated content can contain a callout, figure, or other design elements.

```html_example
<p class="lead">Example showing floated element inserted, with floated container set to a fixed-size width at medium breakpoint and higher.</p>
<div class="box-right-fixed300">
  <figure>
    <img src="/images/styleguide/bigkitty.jpg" alt="kitty">
  </figure>
</div>
<p>This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. This content comes after a floated container, and thus can wrap around it if needed.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
<div class="callout background-purple">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
<div class="callout background-teal">
  <p>
    <a href="#" class="hollow large button">Button (large)</a>
    <a href="#" class="hollow button">Button (default)</a>
    <a href="#" class="hollow small button">Button (small)</a>
  </p>
</div>
<div class="callout background-primary">
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
  <a class="button secondary"><svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 400 400"><path d="M189.3 128.4L89 233.4c-6 5.8-9 13.7-9 22.4s3 16.5 9 22.4l100.3 105.4c11.9 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2L184.4 288h217c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32h-217l48.2-50.4c11.9-12.5 11.9-32.7 0-45.2-12-12.5-31.3-12.5-43.3 0z"/></svg> Previous</a>
   
  <a href="#" class="button tertiary">Log In <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 450"><path d="M86.4 480h339.2c12.3 0 22.4-9.9 22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4-26.3-27.8-64-45.7-105.3-45.7h-.2c-41.3 0-79 17.9-105.3 45.6C124.2 105.4 108 151.5 108 193v31H86.4C74 224 64 233.9 64 246v211.9c0 12.2 10 22.1 22.4 22.1zM161 193.1c0-27.3 9.9-61.1 28.1-80.3v-.3C206.7 93.9 231 83 255.9 83h.2c24.9 0 49.2 10.9 66.8 29.5v.2l-.1.1c18.3 19.2 28.1 53 28.1 80.3V224H161v-30.9z" /></svg></a>
   
  <a class="button secondary">Next <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 400 400"><path d="M322.7 128.4l100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/></svg></a>
</p>
```

---

## Close Button <span id="close-button"></span>

A close button is a `<button>` element with the class `.close-button`. We use the multiplication symbol (`&times;`) as the X icon. This icon is wrapped in a `<span>` with the attribute `aria-hidden="true"`, so screen readers don't read the X icon.

The button is also labeled with `aria-label` to clarify what the button's purpose is.

```html_example
<div class="callout background-yellow">
  <button class="close-button" aria-label="Close alert" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
  <p>Look at this close button!</p>
</div>
```

---

### Making Something Closable

The close button on its own doesn't close elements, but you can use it with other plugins that have open and close behaviors.

<div class="callout background-concrete">
  <p>Any element can be used as a close trigger, not just close button. Adding the attribute <code>data-close</code> to any element within the callout will turn it into a close trigger.</p>
</div>

The below example pairs the callout with the close button component and `data-closable` attribute to create a dismissible alert box.

```html_example
<div class="row">
  <div class="large-12 column">
    <div class="large-6 column">
      <div class="callout background-concrete" data-closable>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
        <p>You can so totally close this!</p>
      </div>
    </div>
    <div class="large-6 column">
      <div class="callout background-concrete" data-closable="slide-out-right">
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
  <div class="row">
    <div class="column">
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
  <div class="row">
	  <div class="column">
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

<div class="grid-2col-blog">
  <div class="hero-blended blog-detail-hero">
    <div class="row">
      <div class="column">
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

## Perspectives Heros

Use this hero on Perspectives article pages.  Elements include the label "Perspectives", the date, the title, the author's image, the author's name, and the author's title.

```html
<div class="perspectives-detail-hero hero-blended">
  <div class="row">
    <div class="column hero-blended-content">
      <div><strong>Perspectives</strong></div>
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

<div class="grid-2col-blog">
  <div class="perspectives-detail-hero hero-blended">
    <div class="row">
      <div class="column hero-blended-content">
        <div><strong>Perspectives</strong></div>
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

There are 3 options for page titles, depending on if the page is a research article or includes a subtitle.

## Page Title without Subtitle

For pages without a tertiary nav, the column with the title goes full width at all breakpoints.

```html_example
<div class="page-title">
  <div class="row">
    <div class="column">
      <h1>Page Title That is Quite Long to Show Where Wrapping Occurs</h1>
    </div>
  </div>
</div>
```

---

## Page Title with Subtitle

For pages that include a subtitle, it will appear directly below the H1.

```html_example
<div class="page-title">
  <div class="row">
    <div class="column">
      <h1>Page Title</h1>
      <p class="page-subtitle">This is an optional page subtitle</p>
    </div>
  </div>
</div>
```

---

## Page Title for Research Articles (Insights and Outlooks)


```html_example
<div class="page-title">
  <div class="row column">
    <div class="">
      <p class="intro"><span class="uppercase weight-bold">Outlook</span> | December 12, 2016</p>
      <h1>After housing's best year in a decade, what is next?</h1>
    </div>
  </div>
  <!-- and a share widget -->
</div>
```



# Cards

<p class="lead">Cards are a are a popular and flexible UI component, typically used to group article entries. </p>

<p>A card is just an element with a `.card` class applied. You can put any kind of content inside.
Make sure you wrap your content in a `.card-section` element in order to achieve the traditional card look.</p>
<p>A card container has no padding, allowing you to place full-bleed images inside. Use the `.card-divider` and `.card-section` classes to sub-divide a card. To center the text content (for people cards, for example) simply add class `.text-center` to the `.card-section` container.</p>

## Perspective Cards

<p>This style of card is used for Perspectives articles. </p>

- If the cards have the same background as the content contaienr they are in, add no extra color class.
- If the cards should have a white background (when displayed on a darker color) add class `.background-white` to each card.
- If the cards should have a gray background (when displayed on a white background) add class `.background-gray` to each card.

```html_example
<div class="row medium-up-2 xlarge-up-4 perspectives" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">August 13, 2016</div>
        <h3 class="card-title-large"><a href="#">Multifamily Is On a Roll</a></h3>
        <p class="card-blurb-large">2016 was a very good year. Freddie Mac Multifamily is on track to purchase approximately $55 billion and securitize over $50 billion in loans – both new records. Barring any surprises, we believe the multifamly industry – and our business -- can grow another five to ten percent next year. </p>
        <figure class="avatar">
          <div>
            <img src="/images/perspectives/brickman-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">David Brickman</strong><br>EVP Multifamily Business</figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">June 27, 2016</div>
        <h3 class="card-title-large"><a href="#">Homeownership: Where We Are Now, Where We Are Headed</a></h3>
        <p class="card-blurb-large">The second half of the 20th century brought with it remarkable growth in homeownership.  For the first four decades of the century, homeownership rates were relatively stable and remained below 50 percent, dropping as low as 44 percent in 1940. </p>
        <figure class="avatar">
          <div>
            <img src="/images/perspectives/gilmore-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">Yvette Gilmore</strong><br>VP Single-Family Servicer Performance Management </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">May 13, 2016</div>
        <h3 class="card-title-large"><a href="#">This is the Week to Learn About Mortgage Fraud</a></h3>
        <p class="card-blurb-large">Fraud continues to threaten homebuyers, renters and the mortgage industry. The latest report from CoreLogic, a real estate information company, says fraud is on an upward trajectory and estimates that some 13,000 mortgage applications made during the second quarter had indications of fraud.</p>
        <figure class="avatar">
          <div>
            <img src="/images/perspectives/layton-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">Donald H. Layton</strong><br>CEO</figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div class="card-divider" data-equalizer-watch>
        <div class="article-date">April 30, 2016</div>
        <h3 class="card-title-large"><a href="#">Freddie Mac Reports Another Quarter of Solid Financial Results</a></h3>
        <p class="card-blurb-large">Today Freddie  Mac reported net income and comprehensive income of $2.3 billion for the third quarter  of 2016. Our results strongly reflect our improving business fundamentals and  competitiveness &ndash; higher purchase volumes.</p>
        <figure class="avatar">
          <div>
            <img src="/images/perspectives/hanson-sm.jpg" alt="Avatar image" />
          </div>
          <div>
            <figcaption class="reduce"><strong class="uppercase">Mark Hanson</strong><br>SVP Securitization</figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
</div>
```

---    

## Blog Cards

- If the cards have the same background as the content contaienr they are in, add no extra color class.
- If the cards should have a white background (when displayed on a darker color) add class `.background-white` to each card.
- If the cards should have a gray background (when displayed on a white background) add class `.background-gray` to each card.

```html_example
<div class="row small-up-2 medium-up-3 large-up-4" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="/">
        <img src="/images/blog/blog-2.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">May 13, 2016</p>
        <h3 class="card-title"><a href="#">Down Payments: There's Help for That</a></h3>
        <p class="article-category">Homeownership</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="/">
        <img src="/images/blog/blog-3.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">May 27, 2016</p>
        <h3 class="card-title"><a href="#">Dear Seller, Pick Me</a></h3>
        <p class="article-category">Notable</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="/">
        <img src="/images/blog/blog-1.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">May 30, 2016</p>
        <h3 class="card-title"><a href="#">Try, Try Again: Responding to a Counteroffer</a></h3>
        <p class="article-category">Notable</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card" data-equalizer-watch>
      <a class="overlay" href="/">
        <img src="/images/blog/blog-4.jpg" alt="Blog Img" />
      </a>
      <div class="card-section">
        <p class="article-date">June 2, 2016</p>
        <h3 class="card-title"><a href="#">Outlook 2016: More Apartments, Low Vacancy Rates, Higher Rent</a></h3>
        <p class="article-category">Research &amp; Analysis</p>
        <p class="card-blurb">Sed quis mauris at leo blandit cursus. Sed tempor gravida augue. Ut dictum enim velit, in elementum mauris vehicula sed. </p>
      </div>
    </div>
  </div>
</div>
```

---

## Video Cards

- If the cards have the same background as the content contaienr they are in, add no extra color class.
- If the cards should have a white background (when displayed on a darker color) add class `.background-white` to each card.
- If the cards should have a gray background (when displayed on a white background) add class `.background-gray` to each card.

```html_example
<div class="row medium-up-2 large-up-3" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <a class="overlay video-modal widescreen-video" href="https://www.youtube.com/watch?v=QcthGnwJRsk" data-src="//www.youtube-nocookie.com/embed/QcthGnwJRsk?rel=0&amp;wmode=transparent"><span class="video-length" area-label="video length in minutes">2:11</span><img src="/images/media/video-1.jpg" alt="description of video"></a>
      <div class="card-section">
        <p class="card-title">Why Freddie Mac</p>
        <p class="card-subtitle">Early reports are showing first-time homebuyers coming back into the market.</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <a class="overlay video-modal widescreen-video" href="https://www.youtube.com/watch?v=vNPl4CS4nnQ" data-src="//www.youtube-nocookie.com/embed/vNPl4CS4nnQ?rel=0&amp;wmode=transparent"><span class="video-length" area-label="video length in minutes">4:48</span><img src="/images/media/video-2.jpg" alt="description of video"></a>
      <div class="card-section">
        <h4 class="card-title">Freddie Mac and Your Mortgage</h4>
        <p class="card-subtitle">During National Volunteer Week we celebrate all volunteers who give back to make our communities better and improve the lives of others</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <a class="overlay video-modal widescreen-video" href="https://www.youtube.com/watch?v=kkHyUX40NxE" data-src="//www.youtube-nocookie.com/embed/kkHyUX40NxE?rel=0&amp;wmode=transparent"><span class="video-length" area-label="video length in minutes">3:45</span><img src="/images/media/video-3.jpg" alt="description of video"></a>    
      <div class="card-section">
        <h4 class="card-title">Avoiding Mortgage Fraud</h4>
        <p class="card-subtitle">McLean ,VA</p>
      </div>
    </div>
  </div>
</div>
```

## People Cards

- If the cards have the same background as the content contaienr they are in, add no extra color class.
- If the cards should have a white background (when displayed on a darker color) add class `.background-white` to each card.
- If the cards should have a gray background (when displayed on a white background) add class `.background-gray` to each card.

```html_example
<div class="row small-up-1 medium-up-2 large-up-4" data-equalizer data-equalize-by-row="true">
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <img alt="photo of Donald Layton" src="/images/exec_donald_layton.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>Donald H. Layton</strong></p>
        <p class="card-subtitle">Chief Executive Officer</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <img alt="photo of David Brickman" src="/images/exec_david_brickman.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>David M. Brickman</strong></p>
        <p class="card-subtitle">Executive Vice President, Multifamily Business</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <img alt="photo of James Mackey" src="/images/exec_james_mackey.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>James G. Mackey</strong></p>
        <p class="card-subtitle">Executive Vice President and Chief Financial Officer</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card"  data-equalizer-watch>
      <img alt="photo of Dwight Robinson" src="/images/exec_dwight_robinson.jpg">
      <div class="card-section text-center">
        <p class="card-title"><strong>Dwight Robinson</strong></p>
        <p class="card-subtitle">Senior Vice President of Human Resources, Diversity &amp; Inclusion and Chief Diversity Officer</p>
      </div>
    </div>
  </div>
</div>
```



# Featured Posts

## Featured Blogs

On the blog landing page, the first 2 entries are featured with large images and different styling to make them more prominent.

```html_example
<div class="row large-up-2">
  <div class="column">
    <div class="card feature-block">
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
  <div class="column">
    <div class="card feature-block">
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

---

## Featured Perspectives

```html_example
<div class="row xlarge-up-2">
  <div class="column">
    <div class="card feature-block">
      <a href="/corporate/perspectives-detail.html" class="overlay overlay-gradient">
        <img src="/images/perspectives/gilmore-lg.jpg" alt="Yvette Gilmore"/>
        <div class="overlay-contents">
          <div class="article-date-lg">August 22, 2016</div>
          <h3 class="subtitle">The New Normal: Servicing in a Post-Crisis World</h3>
          <p class="article-blurb-lg">In the years since the crisis we’ve made important strides in making the servicing industry stronger, more efficient and better able to help struggling borrowers. Today servicers have broadly delegated authority...</p>
          <div class="article-byline"><strong class="uppercase">Yvette Gilmore</strong><br><span class="reduce">VP Single-Family Servicer Performance Management</span></div>
        </div>
      </a>
    </div>
  </div>
  <div class="column">
    <div class="card feature-block">
      <a href="/corporate/perspectives-detail.html" class="overlay overlay-gradient">
        <img src="/images/perspectives/hanson-lg.jpg" alt="Mark Hanson"/>
        <div class="overlay-contents">
          <div class="article-date-lg">Jul 11, 2016</div>
          <h3 class="subtitle">The Single Security: Testing the Pipes</h3>
          <p class="article-blurb-lg">Borrowers such as step-rate mortgages and partial principal forbearance. In addition, we’ve made it possible for them to modify loans without documentation through our streamlined modification program.</p>
          <div class="article-byline"><strong class="uppercase">Mark Hanson</strong><br><span class="reduce">Senior Vice President Securitization</span></div>
        </div>
      </a>
    </div>
  </div>
</div>
```    



# Tertiary Navigation

<p class="lead">Tertiary navigation is available for pages that are 3-4 levels deep in the IA.  Tertiary nav is only avaialble in the two-column content template.</p>

All items in the tertiary nav (including the heading) should be linked.  Add class `.no-bullet` to the `ul` tags to create the link lists.

```html
<div class="tertiary-nav">
<h2><a href="#">Level Two Link</a></h2> 
<nav>
  <ul class="no-bullet">
    <li><a href="#">Level Three Link</a>
      <ul class="no-bullet">
        <li><a href="#">Level Four Link</a></li>
        <li><a href="#">Level Four Link</a></li>
      </ul> 
    </li>
    <li><a href="#">Level Three Link</a></li>
    <li><a href="#">Level Three Link</a></li>
    <li><a href="#">Level Three Link</a></li>
  </ul>
</nav>
</div>
```

<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <div class="tertiary-nav">
        <h2><a href="#">Level Two Link</a></h2> 
        <nav>
          <ul class="no-bullet">
            <li><a href="#">Level Three Link</a>
              <ul class="no-bullet">
                <li><a href="/styleguide/styleguide_corp.html">Level Four Link</a></li>
                <li><a href="#">Level Four Link</a></li>
              </ul> 
            </li>
            <li><a href="#">Level Three Link</a></li>
            <li><a href="#">Level Three Link</a></li>
            <li><a href="#">Level Three Link</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</div>



#  Sidebar Modules

<p class="lead">There are a variety of modules available for use in a side bar, when you are using the Two Column Layout.</p>

Links inside most sidebar modules inherit the existing text color (typically white) to blend in better.

To select a specific background, include `.background-xxx` class (where xxx is green, orange, primary, blue, teal, gray, yellow, red, purple, concrete) on the `.sidebar` container.

Avoid using the same background color for  the last sidebar box that you use in the prefooter -- in mobile they will appear to run together when that occurs.

---

## Sidebar Popular List Items

For divided list items, include these classes on the `ul` tag: `.no-bullet` (to suppress list bullets), `.lead` (to increase the font size), and `.list-divided-white` (to add white dividers between items -- if background is concrete, use `.list-divided` instead).

```html_example
<!-- the template will provide the outer containers, to create these in a templated page, begin with the <section> tag. -->
<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">  
      <section class="sidebar background-yellow">
        <div class="row">
          <h2>Trending Now</h2>
          <ul class="list-divided-white no-bullet lead">
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
```

---

## Sidebar Call To Action

To avoid having the text stretch edge-to-edge, you can wrap the text in a div with class `.sidebar-txt`.

If a sidebar contains multiple calls-to-action, set one button to be the `.primary` call.

```html_example
<!-- the template will provide the outer containers, to create these in a templated page, begin with the <section> tag. -->
<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <section class="sidebar background-primary">
        <div class="row">
          <div class="column">
            <div class="sidebar-txt">
              <h2 class="sidebar-title">Connect with Us</h2>
              <p>Sign up to get the latest <strong>Lorem Ipsum updates</strong> in your inbox.</p>      
            </div>
            <p><a class="primary button" href="#">CTA</a> <a class="hollow button" href="#">CTA</a></p>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>
```

---

## Sidebar RSS

For divided list items, include these classes on the `ul` tag: `.no-bullet` (to suppress list bullets), `.lead` (to increase the font size), `.list-divided-white` (to add white dividers between items), and `.list-rss` (to add the RSS icons).

```html_example
<!-- the template will provide the outer containers, to create these in a templated page, begin with the <section> tag. -->
<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
      <aside class="column">
        <section class="sidebar background-gray">
          <div class="row">
            <h2>RSS Feeds</h2>
            <ul class="list-divided-white no-bullet lead list-rss">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </section>
      </aside>
  </div>
</div>
```

---

## Sidebar Featured Article

<p>To select the background color, include `.background-xxx` class (where xxx is green, orange, primary, blue, teal, gray, yellow, red, or purple) on the `.sidebar-feature` container and include a background image in the `.feature-background` container.</p>

```html_example
<!-- the template will provide the outer containers, to create these in a templated page, begin with the <section> tag. -->
<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <section class="sidebar background-primary sidebar-feature">
        <div class="feature-background" style="background-image: url('/images/feature-bg.jpg')"></div>
        <div class="row">
          <div class="sidebar-txt">
            <p class="article-category">Insight <span class="weight-light">| November 30, 2016</span></p>
            <h3 class="sidebar-title">Life's a Beach</h3>
            <p class="lead">So you've always dreamed of living at the beach, but you're discouraged by the high price of beachfront property? Not to worry. We've found just the place for you.  </p>
            <p><a class="hollow button expand" href="#">Read More</a></p>
          </div>
        </div>
      </section>
      <section class="sidebar background-purple sidebar-feature">
        <div class="feature-background" style="background-image: url('/images/research/featured-background.jpg')"></div>
        <div class="row">
          <div class="column">
            <div class="sidebar-txt">
            <p class="article-category">Insight <span class="weight-light">| November 30, 2016</span></p>
            <h3 class="sidebar-title">Interest Rates Heading Higher. What That Means for Housing.</h3>
              <p>Interest rates surged higher over the past two weeks following the U.S. presidential election.  The 10-year Treasury closed at 2.35 percent on November 18, 2016, up over 50 basis points... </p>
              <p><a class="hollow button" href="#">Read More</a></p>
            </div>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>
```

---

## Sidebar Posts with Thumbnail

Refer to the Media Object section for more details about this markup.

```html_example
<!-- the template will provide the outer containers, to create these in a templated page, begin with the <section> tag. -->
<div class="two-column-layout content-band">
  <div class="row two-column-row"> 
    <aside class="column">
      <section class="sidebar background-concrete">
        <div class="row">
          <div class="column">
            <h2 class="sidebar-title">Recent Posts</h2>
            <ul class="list-divided no-bullet">
              <li class="media-object image1-leads-blurb2">
                <div class="media-object-section">  
                  <a class="overlay" href="#">
                    <img src="/images/blog/post-1.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">
                  <div class="article-date">May 9, 2016</div>
                  <h3 class="sidebar-headline"><a href="#">Homework and a Home Purchase</a></h3>
                  <div class="article-category">Homeownership</div>
                </div>
              </li>
              <li class="media-object image1-leads-blurb2">
                <div class="media-object-section">  
                  <a class="overlay" href="#">
                    <img src="/images/blog/post-2.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">  
                  <div class="article-date">May 2, 2016</div>
                  <h3 class="sidebar-headline"><a href="#">Law Enforcement Cracking Down on Home Rental Scams</a></h3>
                  <div class="article-category">Rental Housing</div>
                </div>
              </li>
              <li class="media-object image1-leads-blurb2">
                <div class="media-object-section">
                  <a class="overlay" href="#">
                    <img src="/images/blog/post-3.jpg" alt="Post Img" />
                  </a>
                </div>
                <div class="media-object-section">
                  <div class="article-date">April 23, 2016</div>
                  <h3 class="sidebar-headline"><a href="#">A Slow Start to the Best Year in Home Sales in a Decade</a></h3>
                  <div class="article-category">Research &amp; Analysis</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>
```



# Accordions

<p class="lead">Accordions are elements that help you organize and navigate multiple panes of content in a single container.</p>

---

## Basics

### Accordion Container

The container for an accordion needs the class `.accordion-pointer`, and the attribute `data-accordion`. Note that in these examples, we use a `<ul>`, but you can use any element you want.


```html
<ul class="accordion-pointer" data-accordion>
</ul>
```

### Accordion Content Panes

Inside the accordion, place a series of content panes with the class `.accordion-item` and the attribute `data-accordion-item`. To mark which pane should be open by default, add the class `.is-active` to that pane. Omit this class if all panes should be closed by default.

Each pane has 2 parts: a **title** and a **content area**.
-    The **title** is an `<a>` with the class `.accordion-title`. 
-    The **content area**, is a `<div>` with the class `.accordion-content`, and the attribute `data-tab-content`.


```html
  <li class="accordion-item is-active" data-accordion-item>
    <a class="accordion-title" href="#">Accordion A: Title</a>
    <div class="accordion-content" data-tab-content>
      Panel A: I start in the open state.
    </div>
  </li>
```

Once you put it all together, here's what you get!

```html_example
<ul class="accordion-pointer" data-accordion>
  <li class="accordion-item is-active" data-accordion-item>
    <a class="accordion-title" href="#">Panel One Title</a>
    <div class="accordion-content" data-tab-content>
      Panel 1. Lorem ipsum dolor.
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#">Panel Two Title</a>
    <div class="accordion-content" data-tab-content>
      Panel 2. Lorem ipsum dolor.
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a class="accordion-title" href="#">Panel Three Title</a>
    <div class="accordion-content" data-tab-content>
      Panel 3. Lorem ipsum dolor.
    </div>
  </li>
</ul>
```



# FAQs

Lists of Frequently Asked Questions (FAQs) use a variation of the accordion markup that includes numbering of questions, and omits the +/- type markers.  
- Use class `.accordion-faq` on hte container for the questions.
- Do not add a class to initially expand one FAQ.

```html_example
 <ol class="accordion-faq" data-accordion>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">What is the Refinance Report?</a>
    <div class="accordion-content" data-tab-content>
    <p>Freddie Mac compiles statistics on loans it purchases that refinance loans in its portfolio, and produces a report on the attributes of these refinance loans. The report is known as the Refinance Report and is released quarterly.</p>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">What does the Refinance Report cover and how far back does the data go?</a>
    <div class="accordion-content" data-tab-content>
    <p>The Freddie Mac's Refinance Activities Report covers: Quarterly Refinance Statistics for the United States covering the period 1985Q1 to present; Annual Refinance Statistics for the United States and four Census Divisions (1985-present); Quarterly Cash-Out Volume Estimates for the United States (1993Q1-present); Annual Cash-out Volume Estimates for the United States (1993-present); Quarterly Product Transition report for the United States (2002Q1-present); Annual Product Transition Report for the United States (1990-present).</p>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">When is the report updated? Do you revise previously released data?</a>
    <div class="accordion-content" data-tab-content>
    <p>Freddie Mac publishes its Refinance Report approximately 30 days after quarter's end. Previously released data is revised, but usually revisions are small. The revisions are due to Freddie Mac's purchases of refinance loans originated in prior quarters. The additional data can cause the reported median and average statistics values to change.</p>
    </div>
  </li>
  <li class="accordion-item" data-accordion-item>
    <a href="#" class="accordion-title">What data are typically released in the Refinance Report?</a>
   <div class="accordion-content" data-tab-content>
    <p>The quarterly and annual refinance statistics include the percent of Freddie Mac-owned loans that were refinanced and resulted in new mortgages at least five percent higher in amount than the original mortgages, the share that resulted in lower loan amounts, the median ratio of the new loan interest rate to the old interest rate for fixed-rate mortgages, the median age of the refinanced loan, and the median amount of appreciation on the property since the previous loan was originated.</p>
    </div>
  </li>
</ol>
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
<form class="form" action="#">
  <div class="row">
    <div class="small-12 column">
      <label for="">Label</label>
      <input id="" type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <label for="pw">Password with Sample Help Text</label>
      <input id="pw" type="password" aria-describedby="passwordHelpText" placeholder="***">
      <p class="help-text" id="passwordHelpText">Your password must have at least 10 characters, a number, and a symbol.</p>
    </div>
  </div>
  <div class="row">
    <div class="medium-7 column">
      <label for="">Email</label>
      <input id="" type="email" placeholder="name@company.com">
    </div>
    <div class="medium-5 column">
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
    <div class="small-12 column">
      <label for="">Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select> 
      <p class="help-text" id="">Browsers apply their own design to the drop down on select boxes.</p>
    </div>
  </div>
  <div class="row"> 
    <div class="small-12 column">
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
    <div class="medium-6 column">
      <fieldset>
        <legend>Choose Your Favorite</legend>
        <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label>
        <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label for="pokemonBlue">Blue</label>
        <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
      </fieldset>
    </div>
    <div class="medium-6 column">
      <fieldset>
        <legend>Check these out</legend>
        <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
        <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
        <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
      </fieldset>
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <fieldset class="fieldset">
        <legend>Styled Fieldset</legend>
        <input id="checkbox12" type="checkbox"><label for="checkbox12">Checkbox 1</label>
        <input id="checkbox22" type="checkbox"><label for="checkbox22">Checkbox 2</label>
        <input id="checkbox32" type="checkbox"><label for="checkbox32">Checkbox 3</label>
      </fieldset>
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <label for="">How many items?</label>
      <input id="" type="number" value="100">
      <label for="">Textarea Label</label>
      <textarea placeholder="placeholder" rows="3"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="small-12 column">
      <button class="button primary" type="submit">Submit</button>
    </div>
  </div>
</form>
```

---

### Example with labels next to fields

Sometimes you want a form with labels to the left of your inputs. Piece of cake! You can put the label inside a different column to the left of the input. Then use the class `.text-right` to realign the label.  Add the `.middle` class to vertically align the first line of the label with its input. In this example, for medium screen sizes and up, the labels are 3 columns wide and the fields are 9 columns wide; and the column with buttons is pushed 3 columns over to line up with the fields.

```html_example
<div class="row">
  <div class="column">
    <form class="form" action="#">
      <div class="row">
        <div class="medium-3 column">
          <label for="side-label" class="text-right middle">Side Label</label>
        </div>
        <div class="medium-9 column">
          <input type="text" id="side-label" placeholder="short label that is vertically aligned to middle of field">
        </div>
      </div>
      <div class="row">
        <div class="medium-3 column">
          <label for="side-label2" class="text-right">A much longer side label for comparison</label>
        </div>
        <div class="medium-9 column">
          <input type="text" id="side-label2" placeholder="longer label with default alignment">
        </div>
      </div>
      <div class="row">
        <div class="medium-9 medium-push-3 column">
          <button class="button primary" type="submit">Submit</button>
          <button class="button" type="button">Cancel</button>
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
      <div class="medium-8 column">
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
  <div class="medium-6 column">
    <div class="callout background-primary">
      <form action="#" class="form outline">
        <label for="">Label</label>
        <input type="text" placeholder="placeholder">
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-yellow">
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
  <div class="medium-6 column">
    <div class="callout background-teal">
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
  <div class="medium-6 column">
    <div class="callout background-purple">
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
  <div class="medium-6 column">
    <div class="callout background-blue">
      <form action="#" class="form outline">
        <label for="">Email</label>
        <input id="" type="email" placeholder="name@company.com">
        <button class="button primary">Submit</button>
      </form>
    </div>
  </div>
  <div class="medium-6 column">
    <div class="callout background-gray">
      <form action="#" class="form outline">
        <label for="">Keyword</label>
        <input id="" type="search" placeholder="search" class="icon">
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
By default, tabs will wrap to a new line when there is insufficient width.  You can add a class to have horizontal tabs stack at a breakpoint -- for example, to stack the tabs at and below the medium breakpoint, add class `.stacked-for-medium` to the tabs element.

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
1. Wrap the tabs in a `<div>` with a class of `.tab-wrapper`. 
2. Add a class the the tabs element that defines the starting breakpoint and quantity of tabs. For example, `.small-up-3` represents 3 equal-width tabs, starting at the smallest breakpoint.  You can set more than one at a time -- for example, at small you could have 2 rows of 2 tabs and at medium have 1 row of 4 tabs by adding both `.small-up-2` and `.medium-up-4`.
3. If you want to keep all tabs at equal heights, add an attribute of `data-equalizer`, and a `data-equalize-on` attribute to the `.tab-wrapper` container, set the value of `data-equalize-on` to the lowest breakpoint where the tabs should all match heights, and add the attribute `data-equalizer-watch` to each anchor tag to insure they remain the same height.  If you have mested items needing to be equalized, assign the same value to `data-equalizer` and each `data-equalizer-watch`.

```html
<div class="tab-wrapper" data-equalizer data-equalize-on="small">
  <ul class="tabs horizontal small-up-3" data-tabs>
    <li class="tabs-title is-active"><a data-equalizer-watch href="#panelsample1" aria-selected="true">Tab</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panelsample2">Tab</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panelsample3">Tab</a></li>
  </ul>
</div>
```

Once you put it all together, here's what you get for equal width tabs!


```html_example
<div class="tab-wrapper" data-equalizer data-equalize-on="small">
  <ul class="tabs small-up-3 horizontal" data-tabs id="example-tabsB">
    <li class="tabs-title is-active"><a data-equalizer-watch href="#panel1B" aria-selected="true">Tab one</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panel2B">Tab two Longer</a></li>
    <li class="tabs-title"><a data-equalizer-watch href="#panel3B">Tab three</a></li>
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
1. Wrap the tabs and tab content elements in a `<div>` with a class of `.row`, `.collapse`, and `.tab-wrapper`. 
2. Add the `.vertical` class to the tabs and tabs-content elements.
3. Add attribute `data-equalizer-watch` to the tabs and tabs-content elements, and add `<div class="clearfix"></div>` to the end of the markup for each container to insure the tabs and the tab content area  remain the same height.
4. Add `<div class="clearfix"></div>` to the end of the markup for each tab container to insure that the tab content area resizes to contain the content on each tab change.
5. Place the tabstrip and the tab contents in grid columns to make them sit side-by-side.  In this example, tabs are 3-columns and tabbed content is 9 columns at the large breakpoint.
6. To keep the tabs and content container at the same height, provide the wrapper with an attribute of `data-equalizer`, and a `data-equalize-on` attribute that defines the lowest breakpoint where the tabs should all match heights, and add attribute `data-equalizer-watch` to each tab link. If you have nested items needing to be equalized, assign the same value to `data-equalizer` and each `data-equalizer-watch`.

Once you put it all together, here's what you get for vertical tabs!

```html_example
<div class="row collapse tab-wrapper" data-equalizer data-equalize-on="medium">
  <div class="large-2 medium-3 column">
    <ul class="tabs vertical" id="example-vert-tabsB" data-tabs data-equalizer-watch>
      <li class="tabs-title is-active"><a href="#panel1vB" aria-selected="true">Tab one</a></li>
      <li class="tabs-title"><a href="#panel2vB">Tab two</a></li>
      <li class="tabs-title"><a href="#panel3vB">Tab three</a>
      </li>
    </ul>
    <div class="clearfix"></div>
  </div>
  <div class="large-10 medium-9 column">
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

- You can change a cell's horizontal alignment (default is left-aligned) by adding `.text-right`, or `.text-center` to the `<td>` or `<th>`.
- You can change a cell's vertical alignment (default is center-aligned) by adding `.vertical-top`, `.vertical-bottom`, or `.vertical-baseline` to the `<td>` or `<th>`.
- You can add a hover state to each row by adding class `.hover` to the `<table>`. 


## Stacking Tables

To stack a table on medium and small screens, add the class `.stack`.  Cells that span multiple rows are only shown in their original row -- if you have a complex table that has numerous rowspans and colspans, you may need opt for the scrolling table instead.

By default, *all* header rows are hidden when the table stacks.  You can make the first header cell visible by adding class `.show-header` to the table.  If you opt for this route, make sure you put relevant content info in the first cell.  

To swap the contents of the first cell between stacked and non-stacked displays, use class `.hide-for-large` for content that should only display when stacked and class `.show-for-large` for content that should only show when not stacked.

```html_example
<h3>Table that stacks and header does not display</h3>
<table class="stack hover">
  <thead>
    <tr>
      <th>Table Header</th>
      <th>Table Header (entire header is desktop only)</th>
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
<br>
<h3>Table that stacks and displays alternate header info</h3>
<table class="stack hover show-header">
  <thead>
    <tr>
      <th>
        <span class="show-for-large">Table Header (desktop only, alternate content at mobile)</span>
        <span class="hide-for-large">Alternate Header for Mobile Stacked Table</span>      
      </th>
      <th>Table Header (desktop only)</th>
      <th>Table Header (desktop only)</th>
      <th>Table Header (desktop only)</th>
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
```

---

## Scrolling Table

Got a lot of tubular tabular data? Add a wrapper element with the class `.table-scroll` around your table to enable horizontal scrolling.

<strong>Note:</strong> You can combine scrolling with stacking, but you may want to avoid doing so on tables with complex row and column spanning.

```html_example
<div class="table-scroll">
  <table>
  // table markup
  </table>
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

## Unstriped Tables

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

---

## Research Sidebar Tables

Research landing page has custom styled tables, which can be achieved by applying class `.research-table` to the table.

```html_example
<!-- the template will provide the outer containers, to create these in a templated page, begin with the <section> tag. -->
<div class="two-column-layout">
  <div class="row two-column-row"> 
    <aside class="column">  
      <section class="sidebar background-concrete">
        <div class="row">
          <div class="column">
            <ul class="list-divided no-bullet">
              <li>
                <table class="research-table">
                  <thead>
                    <tr>
                      <th colspan="2" class="text-center uppercase"><span class="weight-light">Full Year YYYY</span> as of Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center"><span class="reduce">30-Yr FRM</span><br>
                        <span class="stat-sm">4.2%</span><br>
                      </td>
                      <td class="text-center"><span class="reduce">Originations</span><br>
                        <span class="stat-sm">1,505 ($B)</span><br>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center"><span class="reduce">Home Sales</span><br>
                        <span class="stat-sm">5.75 (M)</span><br>
                      </td>
                      <td class="text-center"><span class="reduce">House Price Growth</span><br>
                        <span class="stat-sm">4.7%</span><br>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <table class="research-table">
                  <thead>
                    <tr>
                      <th colspan="3" class="text-center uppercase"><span class="weight-light">Average Rates</span> as of Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <span class="reduce">30-Yr FRM</span><br>
                        <span class="stat-sm">4.19%</span><br>
                        <span class="reduce"><strong>0.5</strong> Fees/<wbr>Points</wbr></span>
                      </td>
                      <td class="text-center">
                        <span class="reduce">15-Yr FRM</span><br>
                        <span class="stat-sm">3.41%</span><br>
                        <span class="reduce"><strong>0.5</strong> Fees/<wbr>Points</wbr></span>
                      </td>
                      <td class="text-center">
                        <span class="reduce">5/1-Yr ARM</span><br>
                        <span class="stat-sm">3.23%</span><br>
                        <span class="reduce"><strong>0.4</strong> Fees/<wbr>Points</wbr></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  </div>
</div>
```



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
- The contents of a modal should be wrapped in a `.modal-content` container.

```html
<p><a data-open="modalID" aria-controls="modalID">View a modal window</a>.</p>
<div class="reveal" id="modalID" data-reveal>
  <div class="modal-content">
  </div>
</div>
```

---

## Standard Content Modals

- All standard content modals should include 3 extra classes on the `.reveal` element: `.full` to enforce that the modal should always cover the full screen, and `.background-xxx` (where xxx is green, orange, primary, blue, teal, gray, yellow, red, purple).
- The close button is automatically attached to the `.modal-header`, so for this style of modal, it is required.
- Modals by default are accessible through the use of various ARIA attributes.  To make a modal even more accessible, designate a label to the modal by adding an `id` attribute on the elment you want to designate as the label (such as a heading inside the modal) and then adding the same value into an `aria-labelledby` attribute on the modal container.

<ol>
  <li><a data-open="fullModal1" aria-controls="fullModal1">View a modal on green</a>.
    <div class="reveal full background-green" id="fullModal1" data-reveal aria-labelledby="Modal1-label">
      <div class="modal-content">
        <div class="row">
          <div class="column xlarge-offset-1 xlarge-10 end">
            <div class="modal-header">
              <h2 id="Modal1-label">Modal Label</h2>
            </div>
              <p>I can contain a callout with a white background to great a framed area.</p>
              <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
              <img src="/images/styleguide/kitten160.jpg" alt="kitty">
          </div>
        </div>
      </div>
    </div>
  </li>
  <li><a data-open="fullModal2" aria-controls="fullModal2">View a modal on orange</a>.
    <div class="reveal full background-orange" id="fullModal2" data-reveal aria-labelledby="Modal2-label">
      <div class="modal-content">
        <div class="row">
          <div class="column xlarge-offset-1 xlarge-10 end">
            <div class="modal-header">
              <h2 id="Modal2-label">Modal Label</h2>
            </div>
            <div class="callout xlarge background-white">
              <p>I can contain a callout with a white background to great a framed area.</p>
              <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
              <img src="/images/styleguide/kitten160.jpg" alt="kitty">
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li><a data-open="fullModal3">View a modal on blue</a>.
    <div class="reveal full background-blue" id="fullModal3" data-reveal>
      <div class="modal-content">
        <div class="row">
          <div class="column xlarge-offset-1 xlarge-10 end">
            <div class="modal-header">
              <h2 id="Modal3-label">Modal Label</h2>
            </div>
            <div class="modal-page-header">
              <h1>Modal Header</h1>
              <p class="page-subtitle">I can even have a header above the callout</p>
            </div>
            <div class="callout xlarge background-white">
              <p>I can contain a callout with a white background to great a framed area.</p>
              <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
              <img src="/images/styleguide/kitten160.jpg" alt="kitty">
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li><a data-open="fullModal4">View a modal on teal</a>.
    <div class="reveal full background-teal" id="fullModal4" data-reveal>
      <div class="modal-content">
        <div class="row">
          <div class="column xlarge-offset-1 xlarge-10 end">
            <div class="modal-header">
              <h2 id="Modal4-label">Modal Label</h2>
            </div>
            <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
            <img src="/images/styleguide/kitten160.jpg" alt="kitty">
          </div>
        </div>
      </div>
    </div>
  </li>
  <li><a data-open="fullModal5">View a modal on gray</a>.
    <div class="reveal full background-gray" id="fullModal5" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal5-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/styleguide/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal6">View a modal on yellow</a>.
    <div class="reveal full background-yellow" id="fullModal6" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal6-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/styleguide/kitten160.jpg" alt="kitty">
      </div>
    </div>
  </li>
  <li><a data-open="fullModal7">View a modal on purple</a>
    <div class="reveal full background-purple" id="fullModal7" data-reveal>
      <div class="modal-content">
        <div class="modal-header">
          <h2 id="Modal7-label">Modal Label</h2>
        </div>
        <p>I can contain any normal markup, from <a href="/">links</a> and images, to a responsive grid of items. </p>
        <img src="/images/styleguide/kitten160.jpg" alt="kitty">
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
<div class="reveal full background-purple" id="exampleModalA" data-reveal>
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="exampleModalB-label">Modal Label</h2>
    </div>
    <h2>Awesome!</h2>
    <p class="lead">I have another modal inside of me!</p>
    <p><a class="button secondary" data-open="exampleModalB" aria-controls="exampleModalB">View another modal!</a></p>    
    <div class="row">
      <p class="text-center">One section 12 columns wide.</p>
      <div class="small-12 column">
        <div class="callout background-white">
        </div>
      </div>
    </div>
    <div class="row">
      <p class="text-center">Three sections each 4 columns wide.</p>
      <div class="small-4 column">
        <div class="callout background-white">
        </div>
      </div>
      <div class="small-4 column">
        <div class="callout background-white">
        </div>
      </div>
      <div class="small-4 column">
        <div class="callout background-white">
        </div>
      </div>
    </div>
    <div class="row">
      <p class="text-center">Two sections, each 6 columns wide.</p>
      <div class="small-6 column">
        <div class="callout background-white">
        </div>
      </div>
      <div class="small-6 column">
        <div class="callout background-white">
        </div>
      </div>
    </div> 
  </div>
</div>

<!-- This is the nested modal -->
<div class="reveal full background-orange" id="exampleModalB" data-reveal>
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

## Image Modal

Image modals are intended to contain ONLY an image and a optional caption -- if you require anything more, you should use a standard content modal. If the images contain content like charts or graphs that <strong>must</strong> be viewed with the content, consider using a carousel instead of a modal.  Below are examples of an image modal being launched from a text link and from a link with an image.

- To create an image modal, add class `.overlay-image` to the .`reveal` container. Then inside the `.modal-content` container, include a `figure` element that contains an `img` and optional `figcaption`.
- If the modal is being launched from a link on an image, add the class `.modal-launch` to add the image-expand icon and blue hover-overlay to the image.
- If the image is <strong>not</strong> a thumbnail, and should <strong>always</strong> stretch to fill the width of its container, also add class <code>.block</code>. 
- For image modals, the close button is automatically attached to first image.
- Images will only launch in modals if the user,s screenwidth is over 470px.  You <strong>must</strong> include the url of the image in the `href` attribute, so that small-screen users can still get to the image. Including the url also preserves all right-click mouse options for the link (such as opening the link in a new window/tab on desktop, bookmarking the link, copying the link).


```html_example
<ul>
  <li><a data-open="exampleModalE" href="/images/styleguide/bigkitty.jpg" aria-controls="exampleModalE">View an image modal</a>.</li>
</ul>

<div class="reveal overlay-image" id="exampleModalE" data-reveal>
  <div class="modal-content">
    <figure>
      <img src="/images/styleguide/bigkitty.jpg" alt="kitty">
      <figcaption>What a pretty kitty!</figcaption>
    </figure>
  </div>
</div>

<ul>
  <li>View an image modal by clicking the following image.<br><a data-open="exampleModalF" class="modal-launch"
  href="/images/styleguide/kitty1600.jpg" aria-controls="exampleModalF"><img src="/images/styleguide/kitten160.jpg" alt="kitty"></a></li>
</ul>

<div class="reveal overlay-image" id="exampleModalF" data-reveal>
  <div class="modal-content">
    <figure>
      <img src="/images/styleguide/kitty1600.jpg" alt="kitty">
      <figcaption>Who Doesn't Love Kitties?</figcaption>
    </figure>
  </div>
</div>
```

---

## Image Gallery Modal <span id="igallery"></span>

Combine the concept of the nested modal with the image modal to achieve an image gallery where the user can navigate through several images one at a time.  Follow the guidelines for image modals and nested modals.

- Similar to image modals, the close button is automatically attached to first image in each `reveal`.
- The prev/next navigation for is automated to cycle through all `.reveal` elements that share the same `rel` attribute, so that attribute is required for galleries.
- Images will only launch in modals if the user's screenwidth is over 470px.  You <strong>must</strong> include the url of the first image in the `href` attribute, so that small-screen users can still get to that image (small screen users will <strong>not</strong> be able to navigate to the rest of the gallery -- if the content is essential, consider putting it in a rotator isntead of a gallery).  Including the url also preserves all right-click mouse options for the link (such as opening the link in a new window/tab on desktop, bookmarking the link, copying the link).


```html_example
<ul>
  <li><a data-open="galleryModalA" aria-controls="galleryModalA" href="/images/styleguide/plant1.jpg">View a modal</a> that launches an image gallery</li>
</ul>
<ul>
  <li>View the same gallery, launched from an image instead<br>
  <a class="modal-launch" data-open="galleryModalA" aria-controls="galleryModalA" href="/images/styleguide/plant1.jpg"><img src="/images/styleguide/plant1-thumb.jpg" alt="flowers"></a></li>
</ul>


<!-- This is the first modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalA" data-reveal>
  <div class="modal-content">
    <figure>
      <img src="/images/styleguide/plant1.jpg" alt="plant 1">
      <figcaption>Default - center aligned caption.</figcaption>
    </figure>
  </div>
</div>

<!-- This is the second modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalB" data-reveal>
  <div class="modal-content">
    <figure>
      <img src="/images/styleguide/plant2.jpg" alt="plant 2">
      <figcaption><p class="text-left">Left-aligned caption.</p><p class="text-left">With more than one paragraph.</p></figcaption>
    </figure>
  </div>
</div>

<!-- This is the third modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalC" data-reveal>
  <div class="modal-content">
    <figure>
      <img src="/images/styleguide/plant3.jpg" alt="plant 3">
      <figcaption>
        <p class="text-left show-for-medium">The lights burn blue. It is now dead midnight.</p>
      </figcaption>
    </figure>
  </div>
</div>

<!-- This is the fourth modal -->
<div class="reveal overlay-gallery" rel="gallery1" id="galleryModalD" data-reveal>
  <div class="modal-content">
    <figure>
      <img src="/images/styleguide/plant4.jpg" alt="plant 4">
      <figcaption>This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption.
      </figcaption>
    </figure>
  </div>
</div>
```

---

## Video Modal

Embedded videos **won't** maintain their aspect ratio as the width of the screen changes, unless you specify the ratio used for the video. 

- Add a `.data-src` attribute to define the video url to embed in the modal, omit the http/https protocol from the embed url and include `wmode=transparent` in the embed query string.  This value should be different than the video page url -- we typically pull videos in via www.youtube-nocookie.com because they are less likely to be blocked. Do not include `autoplay=1` in the query string for the video.  It will be added on modal launch, and removed on modal close.
- Videos will only launch in modals if the user's screenwidth is over 470px.  You <strong>must</strong> include the url of the regular video page in the <code>href</code> attribute, so that small-screen users can still get to the video.  Including the url also preserves all right-click mouse options for the link (such as opening the link in a new window/tab on desktop, bookmarking the link, copying the link).
- Video modals are completely automated and will autoplay when the modal is opened.
- Video modals will only remain responsive if you specify their aspect ratio:  The default ratio is 4:3. Add the <code>.widescreen</code> class to the link to specify if a video is 16:9 instead.


```html_example
<ul>
  <li><a class="video-modal" href="https://www.youtube.com/watch?v=26OUQIjRRbc" data-src="//www.youtube-nocookie.com/embed/26OUQIjRRbc?rel=0&amp;wmode=transparent">View a modal with a (4:3 ratio) video</a>.</li>

  <li><a class="video-modal widescreen-video" href="https://www.youtube.com/watch?v=tCg9285bJnY"  data-src="//www.youtube-nocookie.com/embed/tCg9285bJnY?rel=0&amp;wmode=transparent">View a modal with a widescreen (16:9 ratio) video</a>.</li>
</ul>
```



# Carousels

<p class="lead">Each carousel is made up of multiple slides.</p>

- The default animation for the carousel is slide out the existing slide while sliding in the replacement slide (direction based on whether you are moving forward or backward through the slides).  See below for [other animation options](#slide_animation).
- The wrapper for the carousel should use the `.orbit` class and contain a `data-orbit` attribute and a `role="region"` attribute.  For assistive technology, provide an `aria-label` attribute that describes the carousel contents.  The wrapper groups the slides and the slide navigation together.
- The container for the slides is a `ul` with the class `.orbit-container`.
- Each slide is an `li` with the class `.orbit-slide`.
- By default, slides transition every 5 seconds.  That is typically sufficient for images, but if the slides contain very much text, you will likely want to stop the auto-play functionality by adding the attribute `data-auto-play="false"`.
- To shift the dot navigation so that it appears inside the panel, add class `.bullets-overlay` to the `.orbit` element.

To select a specific background, include `.background-xxx` class (where xxx is green, orange, primary, blue, teal, gray, yellow, red, purple) on the <code>.orbit-slide</code> container.


```html_example
<div class="orbit bullets-overlay" role="region" aria-label="Favorite Text Ever" data-orbit data-auto-play="false">
  <ul class="orbit-container">
    <li class="orbit-slide background-yellow">
      <div>
        <h3>Slide One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-green">
      <div>
        <h3>Slide Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-orange">
      <div>
        <h3>Slide Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow large">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-red">
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
    <li class="orbit-slide background-purple">
      <div>
        <h3>Slide Five</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-blue">
      <div>
        <h3>Slide Six - Example Without a Button</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </li>
    <li class="orbit-slide background-teal">
      <div>
        <h3>Slide Seven</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <a href="/">tempor incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p class="text-right"><a class="button hollow">Button Link</a></p>
      </div>
    </li>
    <li class="orbit-slide background-gray">
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

For an image carousel, each `orbit-slide` contains a `figure`, with an `img` and optional `figcaption`.

- Try to make sure your images are all similar in size and proportion.
- Each image should still have an `alt` attribute, even if it has an associated caption.
- Captions can contain additional markup -- from blockquotes to paragraphs to text formatting.
- Image carousels **cannot** be used inside a modal window -- instead refer to [Image Gallery Modal](#igallery).

```html_example
<div class="row">
  <div class="medium-8 column">
    <div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit>
      <ul class="orbit-container">
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant1.jpg" alt="plant 1">
            <figcaption>Default - center aligned caption.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant2.jpg" alt="plant 2">
            <figcaption><p class="text-left">Left-aligned caption.</p><p class="text-left">With more than one paragraph.</p></figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant3.jpg" alt="plant 3">
            <figcaption>
              <p class="text-left show-for-medium">(example below is how a blockquote would appear - borrowed the idea from My Home.) </p>
              <blockquote>
                <p>"The lights burn blue. It is now dead midnight."</p>
                <footer><cite>William Shakespeare</cite> in <cite>King Henry the Sixth</cite></footer>
              </blockquote>
            </figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant4.jpg" alt="plant 4">
            <figcaption>This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption. </figcaption>
          </figure>
        </li>
      </ul>
    </div>
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

<div class="row">
  <div class="medium-8 column">
    <div class="orbit" role="region" aria-label="Favorite Flower Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
      <ul class="orbit-container">
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant1.jpg" alt="plant 1">
            <figcaption>Default - center aligned caption.</figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant2.jpg" alt="plant 2">
            <figcaption><p class="text-left">Left-aligned caption.</p><p class="text-left">With more than one paragraph.</p></figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant3.jpg" alt="plant 3">
            <figcaption>
              <p class="text-left show-for-medium">(example below is how a blockquote would appear - borrowed the idea from My Home.) </p>
              <blockquote>
                <p>&quot;The lights burn blue. It is now dead midnight.&quot;</p>
                <footer><cite>William Shakespeare</cite> in <cite>King Henry the Sixth</cite></footer>
              </blockquote>
            </figcaption>
          </figure>
        </li>
        <li class="orbit-slide">
          <figure>
            <img class="full" src="/images/styleguide/plant4.jpg" alt="plant 4">
            <figcaption>This caption is longer than the others to show how things look when the caption is very long, and it contains a <a href="#">hyperlink</a> and formatting such as  <em>emphasis</em> and <strong>strong</strong>, so we can see how they look in a caption. </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>

---

### Disabling Transition Animation

To disable the animation, set the `data-use-m-u-i` attribute to `false`.  To stop the auto-play functionality, add the attribute `data-auto-play="false"`.

```html
<div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-use-m-u-i="false" data-auto-play="false">
</div>
```



# Prefooter Promo Band

A Prefooter Promo is a full width band of content.  On most interior pages, it is inserted after all content and immediately above the footer.  Never include more than one prefooter band per page, and limit the content of the prefooter band to a single concept and one link.  The first `div` should contain the supporting text, and the second `div` should contain the call to action.

To select a specific background, include `.background-xxx` class (where xxx is green, orange, primary, blue, teal, gray, yellow, red, purple) on the `.footer-promo` container.

Avoid using the same background color for the prefooter as you do for the last sidebar module -- in mobile they will appear to run together when that occurs.

```html_example
<div class="background-primary footer-promo">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="column large-8" data-equalizer-watch>
      <h3 class="callout-footer-title">Getting To Know Freddie Mac</h3>
      <p>Every day, Freddie Mac employees ensure mortgage credit is available for America's families and help rebuild the nation's housing finance system.</p>
      <p>Learn how Our Mission is making a positive impact.</p>
    </div>
    <div class="column large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="footer-promo-cta">
       <a class="hollow button large" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</div>
<div class="background-yellow footer-promo">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="column large-8" data-equalizer-watch>
       <h3 class="callout-footer-title">My Home by Freddie Mac®</h3>
      <p>We offer the resources to help you make informed housing decisions and support your success – whether you rent, own, or plan to buy a home.</p>
    </div>
    <div class="column large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="footer-promo-cta">
       <a class="hollow large button" href="http://myhome.freddiemac.com/">Find it</a>
      </div>
    </div>
  </div>
</div>
<div class="background-teal footer-promo">
  <div class="row" data-equalizer data-equalize-on="large">
    <div class="column large-8" data-equalizer-watch>
      <h3 class="callout-footer-title">Getting To Know Freddie Mac</h3>
      <p>Every day, Freddie Mac employees ensure mortgage credit is available for America's families and help rebuild the nation's housing finance system.</p>
      <p>Learn how Our Mission is making a positive impact.</p>
    </div>
    <div class="column large-offset-1 large-3 position-relative" data-equalizer-watch>
      <div class="footer-promo-cta">
       <a class="hollow button large" href="#">Our Mission</a>
      </div>
    </div>
  </div>
</div>
```



# Footer

**Note:** The footer will automatically be inserted via the template - do not include this code in your page.

```html_example
<footer class="footer hide-for-print">
	<div class="row column">
		<div class="footer-top">
        <ul class="no-bullet enlarge">
          <li><a href="#">Careers</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Suppliers</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><span class="show-for-sr">Follow us on social media</span>
            <a aria-label="YouTube" href="https://www.youtube.com/freddiemac" class="connect-link"><svg viewBox="8 8 125 125" xmlns="http://www.w3.org/2000/svg"><path d="M72 14.2C40.1 14.2 14.2 40.1 14.2 72c0 31.9 25.9 57.8 57.8 57.8 31.9 0 57.8-25.9 57.8-57.8C129.9 40.1 104 14.2 72 14.2zM104.4 85c0 4.4-3.6 8.1-8 8.1 0 0-6.9 1-24.7 1 -18 0-24.3-1-24.3-1 -4.4 0-8.1-3.6-8.1-8V58.5c0-4.4 3.6-8 8.1-8 0 0 6.3-1 24.3-1 17.9 0 24.8 1 24.8 1 4.4 0 8 3.6 8 8.1V85z" fill="#fff"/><polygon points="62 84.5 84 71.8 62 59.1 " fill="#fff"/></svg></a>
            <a aria-label="Facebook" href="https://www.facebook.com/FreddieMac" class="connect-link"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M29.8 50.3h6.7V34h4.5l0.6-5.6h-5.1l0-2.8c0-1.5 0.1-2.3 2.2-2.3h2.8V17.7h-4.5c-5.4 0-7.3 2.7-7.3 7.3v3.4h-3.4v5.6h3.4V50.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/3140" class="connect-link"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M50.8 48.1V36.4c0-6.3-3.3-9.2-7.8-9.2 -3.6 0-5.2 2-6.1 3.4V27.7h-6.8c0.1 1.9 0 20.4 0 20.4h6.8V36.7c0-0.6 0-1.2 0.2-1.7 0.5-1.2 1.6-2.5 3.5-2.5 2.5 0 3.4 1.9 3.4 4.6v10.9H50.8zM23 24.9c2.4 0 3.8-1.6 3.8-3.5 0-2-1.5-3.5-3.8-3.5s-3.8 1.5-3.8 3.5c0 2 1.5 3.5 3.8 3.5H23zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64zM26.4 48.1V27.7h-6.8v20.4H26.4z" fill="#fff"/></svg></a>
            <a aria-label="Twitter" href="https://twitter.com/FreddieMac" class="connect-link"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><path d="M38.2 22.3c-2.6 1-4.3 3.4-4.1 6.1l0.1 1 -1-0.1c-3.8-0.5-7.1-2.1-10-4.9l-1.4-1.4 -0.4 1c-0.8 2.3-0.3 4.7 1.3 6.3 0.8 0.9 0.6 1-0.8 0.5 -0.5-0.2-0.9-0.3-1-0.2 -0.1 0.1 0.4 2.1 0.8 2.8 0.5 1.1 1.7 2.1 2.9 2.7l1 0.5 -1.2 0c-1.2 0-1.2 0-1.1 0.5 0.4 1.4 2.1 2.8 3.9 3.5l1.3 0.4 -1.1 0.7c-1.7 1-3.6 1.5-5.6 1.6C20.8 43.3 20 43.3 20 43.4c0 0.2 2.6 1.4 4 1.9 4.5 1.4 9.8 0.8 13.7-1.6 2.8-1.7 5.7-5 7-8.2 0.7-1.7 1.4-4.9 1.4-6.4 0-1 0.1-1.1 1.2-2.3 0.7-0.7 1.3-1.4 1.5-1.6 0.2-0.4 0.2-0.4-0.9 0 -1.8 0.6-2 0.6-1.2-0.4 0.6-0.7 1.4-1.9 1.4-2.3 0-0.1-0.3 0-0.7 0.2 -0.4 0.2-1.2 0.5-1.8 0.7l-1.1 0.4 -1-0.7c-0.6-0.4-1.4-0.8-1.8-0.9C40.8 21.9 39.1 21.9 38.2 22.3zM34 64C17.4 64 4 50.6 4 34 4 17.4 17.4 4 34 4s30 13.4 30 30C64 50.6 50.6 64 34 64z" fill="#fff"/></svg></a>
          </li>
        </ul>
		</div>
		<div class="footer-bottom reduce">
      <ul class="no-bullet">
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li>&copy; 2017 Freddie Mac</li>
      </ul>
    </div>
	</div>
</footer>
<div class="footer-bottom-edge"> </div>
```

---