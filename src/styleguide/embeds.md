
# Embedded Objects

To make sure embedded content maintains its aspect ratio as the width of the screen changes, wrap the `iframe`, `object`, `embed`, or `video` in a container with the `.responsive-embed` class.  Add the attribute `allowfullscreen` to the iframe.

For Youtube videos, make sure you include `?rel=0&amp;wmode=transparent` at the end of the url to disable the related videos and to prevent conflict with overlays/drop downs on out site.

---

## Aspect Ratios

Add ratio classes to change the aspect ratio of responsive embeds. The default ratio is 4:3. The `.widescreen` class will change the container's aspect ratio to 16:9.

Currently, these ratio classes exist:

- default: 4 by 3
- widescreen: 16 by 9
- square: 1 by 1
- portrait:1 by 2
- tall: 1 by 3


```html_example
<h3>Widescreen (16/9) ratio video</h3>
<div class="row">
  <div class="columns medium-7 end">
    <div class="responsive-embed widescreen">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tCg9285bJnY?rel=0&amp;wmode=transparent" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>

<h3>Default (4/3) ratio video</h3>
<div class="row">
  <div class="columns medium-6 end">
    <div class="responsive-embed">
      <iframe width="420" height="315" src="https://www.youtube.com/embed/mM5_T-F1Yn4?rel=0&amp;wmode=transparent" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>
```


---

## Iframes

Any iframe wider than 300px will need to be responsive as well, otherwise the content can run off the screen on mobile, or may overlap the sidebar at in between sizes.  

```html_example
<div class="row">
  <div class="columns large-8 end">
    <div class="responsive-embed">
      <iframe src="http://investor.shareholder.com/fre/stocklookup.cfm" allowfullscreen="" frameborder="0" height="450" width="600"></iframe>
    </div> 
  </div>
</div>
```



# Tableau Visuals

Tableau visuals are often too large to be interacted with on a phone, or they require too much data/memory for some phones to be able to fully build out an embedded visual. 
For tableau, the best choice is to only load the visual when the container is wide enough to hold it. 
Refer to the <a href="http://onlinehelp.tableau.com/samples/en-us/js_api/tutorial.htm">Tableau API Tutorial</a> if you need to put additional hooks into the visual.

- Do not paste in the embed code provided by Tableau - use the embed code to get the url for hte static image, and the url for the tableau visual.
- Create a custom container for the visual and give it a unique `id`, and class `.overflow-horizontal`. 
- Inside the container, include the static image of the visual and link it to the Tableau visual url.
- Add custom javascript that tests that container's width before loading the visual, and 
- In this example, we are using vanilla javascript, so that the embed code can be start to load without waiting on all the other content and scripts to complete. 
  - Define the placholder div by its id.
  - Define the url for the visual (the logic shown below will toggle between http and https versions of the visual, which allows it to virtualize in TeamSite).
  - Define the options for the visual. At a minimum define the width and height. Refer to the TAbleau API for additional options you may want.

```html_example
<div id="tableau-viz1" class="overflow-horizontal  text-center" style="margin: 0 auto; max-width: 854px;">
  <div class='tableauPlaceholder' style='position: relative'>
    <a href='http://public.tableau.com/views/InvestmentIndex2016Q3/Dashboard1'><img alt="Dashboard" src="http://public.tableau.com/static/images/In/InvestmentIndex2016Q3/Dashboard1/1_rss.png"/></a>
  </div>
</div>
<script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.js"></script>
<script type="text/javascript">
  var viz, 
      placeholderDiv = document.getElementById("tableau-viz1"),
      vizUrl = location.protocol =='http' ? "http://public.tableau.com/views/InvestmentIndex2016Q3/Dashboard1" : "https://public.tableau.com/views/InvestmentIndex2016Q3/Dashboard1",
      vizOptions = {hideTabs: true, width: '854px', height: '1169px'};
  if (placeholderDiv.clientWidth > 600) {
    placeholderDiv.innerHTML = "";
    viz = new tableau.Viz(placeholderDiv, vizUrl, vizOptions); 
  }
</script>
```