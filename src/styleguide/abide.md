
# Abide Form Validation

## The Basics ##

To have a form validate with abide, simple add the attribute `data-abide` to the `form` tag.  You should also use the `novalidate` attribute to disable any browser validation that could conflict with Abide.

<pre><span class="hljs-tag">&lt;<span class="hljs-title">form</span> <span class="hljs-attribute">data-abide</span> <span class="hljs-attribute">novalidate</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">form</span>&gt;</span>
 </pre>

Then build your form fields:
- Each field should have a clear label that is associated with the field via the `for` attribute.
- Each field should have an id and a name, and `input` fields should have a declared type (email, url, text, tel, password, number, hidden).

There are additional details below on requiring different field types, validating against specific patterns, omitting some fields from validation, and customizing error messages.

```html_example
<form data-abide novalidate>
  <label class="icon-required" for="Name">Full Name</label> 
  <input id="Name" name="Name" required type="text" />

  <label for="URL">URL</label>
  <input id="URL" name="webaddress" type="url" placeholder="http://www.freddiemac.com">

  <div class="row">
    <div class="large-6 column">
      <label class="icon-required" for="Phone">Phone Number</label> 
      <input id="Phone" name="Phone" placeholder="xxx-xxx-xxxx" type="tel" pattern="tel" />
    </div>
    <div class="large-6 column">                      
      <label class="icon-required" for="State">State</label>
      <select id="State" name="state" required>
          <option selected="selected" value="">Select State</option>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="DC">DC</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="GU">GU</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="PR">PR</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="VI">VI</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
      </select>
    </div>
  </div>  

  <div class="row">
    <div class="medium-3 column">
      <button class="button primary" type="submit">Submit</button>
    </div>
    <div class="medium-9 column">
      <div class="callout small background-red" style="display: none;" data-abide-error data-closable>
        <button class="close-button" data-close="" aria-label="Dismiss alert"><span aria-hidden="true">&times;</span></button>
        <p class="enlarge">Please review your form for errors.</p>
      </div>
    </div>    
  </div>
</form>
```

---

## Required Fields ##

To visually alert the user that a field is required, add class `.icon-required` to the field's label or to the fieldset's legend.

Then, for most fields, all you need to do is to add the attribute `required` to the form field and Abide will disallow null values.  

- For radio buttons, as long as one button in a set with a shared name attribute has the `required` attribute, the set will be required.
- For a single checkbox, just include the  `required` attribute.
- For multiple checkboxes, where one or more is required, add `data-validator="checked_required"` to each input element. Then on the fieldset, add class `.checked-group` to the fieldset and provide the minimum number to attribute `data-validator-abide-min`. If a maximum number should also be enforced, add that value to the attribute `data-validator-abide-max`. 


```html_example
<form data-abide novalidate>
  <label class="icon-required" for="req1">Example of a <strong>required</strong> text field</label> 
  <input id="req1" name="field" type="text" required  aria-describedby="reqHelp1" />
  <p class="help-text" id="reqHelp1">This mothod works for inputs with any text-based type: text, email, url, password, tel, etc.</p>

  <fieldset>
    <legend class="icon-required">Example of a group of <strong>required</strong> radio buttons</legend>
    <input type="radio" name="pokemon" value="Red" id="pokemonRed"><label for="pokemonRed">Red</label>
    <input type="radio" name="pokemon" value="Blue" id="pokemonBlue" required><label for="pokemonBlue">Blue</label>
    <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
  </fieldset>
  
  <label class="icon-required" for="comments">Example of a <strong>required</strong> Textarea</label>
  <textarea id="comments" name="comments" rows="3" required></textarea>
      
  <fieldset>
    <legend class="icon-required">Example of a single <strong>required</strong> checkbox</legend>
    <input id="checkbox3" type="checkbox" value="I agree" required><label for="checkbox3">Checkbox 3</label>
  </fieldset>
  
  <fieldset class="checked-group">
    <legend class="icon-required">Example of a group of checkboxes, where one (or more) is <strong>required</strong></legend>
    <input id="checkbox1req" type="checkbox" data-validator="checked_required"><label for="checkbox1req">Checkbox 1</label>
    <input id="checkbox2req" type="checkbox" data-validator="checked_required"><label for="checkbox2req">Checkbox 2</label>
    <input id="checkbox3req" type="checkbox" data-validator="checked_required"><label for="checkbox3req">Checkbox 3</label>        
  </fieldset> 

  <fieldset class="checked-group" data-validator-abide-min="2" data-validator-abide-max="4">
    <legend class="icon-required">Example of a group of checkboxes, where two-four are <strong>required</strong></legend>
    <div class="row medium-up-2 large-up-3 xlarge-up-6">
      <div class="column"><input id="checkbox4" type="checkbox" value="4" data-validator="checked_required"><label for="checkbox4">Checkbox 4</label></div>
      <div class="column"><input id="checkbox5" type="checkbox" value="5" data-validator="checked_required"><label for="checkbox5">Checkbox 5</label></div>
      <div class="column"><input id="checkbox6" type="checkbox" value="6" data-validator="checked_required"><label for="checkbox6">Checkbox 6</label></div>
      <div class="column"><input id="checkbox7" type="checkbox" value="7" data-validator="checked_required"><label for="checkbox7">Checkbox 7</label></div> 
      <div class="column"><input id="checkbox8" type="checkbox" value="8" data-validator="checked_required"><label for="checkbox8">Checkbox 8</label></div>
      <div class="column"><input id="checkbox9" type="checkbox" value="9" data-validator="checked_required"><label for="checkbox9">Checkbox 9</label></div>
    </div>
  </fieldset>
  
  <label class="icon-required" for="reqSelect">Example of a <strong>required</strong> single-select list</label>
  <select id="reqSelect" required>
    <option value="" selected>Select One</option>
    <option value="showboat">Showboat</option>
    <option value="redwing">Redwing</option>
    <option value="narcho">Narcho</option>
    <option value="hardball">Hardball</option>
  </select>

  <label class="icon-required" for="car_select">Example of a <strong>required</strong> multi-select list</label>
  <select multiple id="car_select" required size="7">
    <option value="aston">Aston Martin</option>
    <option value="audi">Audi</option>
    <option value="bmw">BMW</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="maserati">Maserati</option>
    <option value="volvo">Volvo</option>
  </select>

  <div class="row">
    <div class="medium-3 column">
      <button class="button primary" type="submit">Submit</button>
    </div>
    <div class="medium-9 column">
      <div class="callout small background-red" style="display: none;" data-abide-error data-closable>
        <button class="close-button" data-close="" aria-label="Dismiss alert"><span aria-hidden="true">&times;</span></button>
        <p class="enlarge">Please review your form for errors.</p>
      </div>
    </div>
  </div>
</form>
```

---

## Equal Fields ##

Sometimes you need to make a user enter data twice to validate that it is accurate.  In such cases, use the `data-equalto` attribute and give it a value of the matching fields ID.

```html_example
<p>Test the form to see how the validation works for equal fields, and how to provide custom error messages.</p>
<form data-abide novalidate>
  <div class="row">
    <div class="medium-6 column">
      <label class="icon-required" for="password">Create a New Password</label>
      <input type="password" id="password" name="new_password" required >
    </div>
    <div class="medium-6 column">
      <label class="icon-required" for="password_confirmation">Re-enter Password</label>
      <input type="password" id="password_confirmation" required data-equalto="password">
      <span class="form-error">
        Your passwords do not match.
      </span>
    </div>
  </div>
  
  <div class="row">
    <div class="medium-6 large-12 xlarge-6 column">
      <label class="icon-required" for="Email">Email Address</label> 
      <input id="Email" name="user-email" required type="email" />
    </div>
    <div class="medium-6 large-12 xlarge-6 column">
      <label class="icon-required" for="email_confirmation">Confirm Email Address</label> 
      <input id="email_confirmation" required data-equalto="Email" type="email" />      
      <span class="form-error">
        Your email addresses do not match.
      </span>
    </div>
  </div>

  <div class="row">
    <div class="medium-3 column">
      <button class="button primary" type="submit">Submit</button>
    </div>
    <div class="medium-9 column">
      <div class="callout small background-red" style="display: none;" data-abide-error data-closable>
        <button class="close-button" data-close="" aria-label="Dismiss alert"><span aria-hidden="true">&times;</span></button>
        <p class="enlarge">Please review your form for errors.</p>
      </div>
    </div>    
  </div>
</form>
```

---

## Validation and Patterns

Input fields with the following types will validate agaisnt their type's pattern.

- type="email"  (properly formated email address including `@` and `.`)
- type="url"  (full url including http:// or https:// )
- type="number" (+/- floating point numbers:  -2,330.21 -- not intended for phone numbers or zip codes)

In addition, these following patterns can be combine with a type="text" to restrict the provided value.

- pattern="alpha"  (letters only -- no numbers, spaces, or punctuation)
- pattern="alpha_numeric"  (letters and numbers only -- no spaces or punctuation)
- pattern="integer"  (+/- numbers, no decimal)
- pattern="[0-9]*"  (string of numbers only, but allows for leading 0 such as zipcodes)
- pattern="tel"   (10 digits, formatted as phone number: (###) ###-#### or ###-###-#### or ########## followed by any text, ext #, etc.)
- pattern="month_day_year" (preferred American style date format: MM/DD/YYYY, MM-DD-YYYY)
- pattern="domain"   (website.com -- kinder than url, since it doesn't require http:// or https://)


---

## Field Error Examples ##

When a field fails validation, the label gains a class of `.is-invalid-label` and the form field gains a class of `.is-invalid-input`. If you include a `.form-error` to provide more context, it will gain class `.is-visible` when the field fails validation. 

```html_example
<label class="icon-required is-invalid-label" for="error-example2">Required Thing</label>
<textarea type="text" class="is-invalid-input" id="error-example2"></textarea>
  
<label class="icon-required is-invalid-label" for="error-example">Required Thing</label>
<input id="error-example" type="text" class="is-invalid-input">
<span class="form-error is-visible">Error with extra message. This field was required!</span>
```

---

## Block Error Examples ##

If you want to provide an error that isn't tied to a specific form field, you can use a `data-abide-error` block. When the form fails validation, the  `display: none` style is removed.  Ideally these types of message should go near the submit button, otherwise users on smaller screens may not see the error, and not understand why their form didn't submit.

For complex forms, make the error message closable.

```html_example
<div class="alert callout" data-abide-error>
  <p>There are some errors in your form.</p>
</div>

<div class="background-red callout small" data-abide-error data-closable>
  <button class="close-button" data-close="" aria-label="Dismiss alert"><span aria-hidden="true">&times;</span></button>
  <p class="enlarge">Please review your form for errors.</p>
</div>
```

---

## Ignored Inputs

Abide will not validate form fields that are disabled, hidden, or that contain the attribute `data-abide-ignore`.

```html
<form data-abide novalidate>
  <label for="disabledExample">Disabled Field</label>
  <input type="text" placeholder="Disabled fields are not validated" disabled id="disabledExample">

  <input type="hidden" value="Hidden input fields are not validated" id="hiddenExample">      

  <label for="ignoredExample">Fields using `data-abide-ignore` are not validated</label>
  <input type="text" placeholder="Use me, or don't" id="ignoredExample" data-abide-ignore>
</form>
```

---

## Event Listener

Most forms require **no additional javascript** to validate and submit.  Refer to the following if you need to run additional code as part of the validation.

Setup event listener after foundation is initialized (especially for formvalid/forminvalid). Easier to chain via document selector.
* valid.zf.abide and invalid.zf.abide are field level events, triggered in validateInput function 
  *   ev.target is the DOM field element, 
  *   elem is jQuery selector for field element
* formvalid.zf.abide and forminvalid.zf.abide are form events, triggered in validateForm function
  *   ev.target is the DOM form element, 
  *   frm is jQuery selector for form element

```javascript
$(document)
.on("forminvalid.zf.abide", function(ev,frm) {  
  // custom code for when form fails validation
})
.on("formvalid.zf.abide", function(ev,frm) {    // form validation passed, form will submit if submit event not returned false
  // custom code for when form passes validation, ajax calls should go here
})
.on("submit", function(ev) {   // submit happens afer successful validation
  // custom code for when form submits 
  //  to prevent submit use  ev.preventDefault();
});
  
// You can also bind field or form event selectively
$("#foo").on("invalid.zf.abide", function(ev,el) {
  alert("Input field foo is invalid");
});
$("#bar").on("formvalid.zf.abide", function(ev,frm) {
  alert("Form is valid, finally!");
  // do something perhaps
});
```

---

<script>
window.onload = codeCollapse;
</script>