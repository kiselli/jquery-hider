#jQuery hider

A jQuery plugin that lets you use a header div handling
 a slideDown, slideUp animation for it's underneath lying content div

**Usage:**

In your javascript:
```javascript
$(document).ready(function() {
	$(document).hider();
});
```

In your HTML:
```HTML
<div class="wrapper">
    <div class="header">Click me to expand &gt;&gt;</div>
    <div class="content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero 
        eos et accusam et justo duo dolores et ea rebum.
    </div>
</div>
```
