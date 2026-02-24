

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **getElementById**: Selects a single DOM element by its unique `id` attribute. Returns an `Element` object or `null`. It is very fast.
- **getElementsByClassName**: Selects all elements containing a specific class name. Returns a live `HTMLCollection` which automatically updates if elements are added/removed from the DOM.
- **querySelector**: Selects the first element that matches a given CSS selector (e.g., `#myId`, `.myClass`, `div > p`). Returns an `Element` object.
- **querySelectorAll**: Selects all elements matching a CSS selector and returns a static `NodeList` (does not automatically update when the DOM changes).
### 2. How do you create and insert a new element into the DOM?
1. **Create the element**: Use `document.createElement('tagName')` to create a new HTML element node.
2. **Add content/attributes**: Modify its properties, like `element.textContent`, `element.className`, or use `element.setAttribute()`.
3. **Insert into the DOM**: Select a parent element in the DOM and use methods like `parent.appendChild(element)` (adds to the end), `parent.prepend(element)` (adds to the beginning), or `parent.insertBefore(element, referenceNode)` to insert the newly created element.
### 3. What is Event Bubbling? And how does it work?
**Event Bubbling** is a phase in the event propagation mechanism in the browser's DOM. When an event occurs on an element (like a button click), the event first runs the handlers on that specific element, then it "bubbles" upwards to its parent element, then to the grandparent, and so on all the way up to the `document` object. It works exactly like a bubble rising in water, allowing parent elements to listen to events triggered by their descendants.
### 4. What is Event Delegation in JavaScript? Why is it useful?
**Event Delegation** is a pattern based on Event Bubbling where you attach a single event listener to a parent element instead of attaching multiple listeners to individual child elements.
**Why it is useful**:
- **Performance**: Attaching one listener requires less memory than attaching hundreds of listeners to child elements.
- **Dynamic Elements**: It automatically handles events for child elements that are added to the DOM dynamically *after* the initial page load, without needing to manually bind new listeners to them.
### 5. What is the difference between preventDefault() and stopPropagation() methods?
- **preventDefault()**: Prevents the browser's default behavior associated with the event. For example, stopping a form from submitting and reloading the page, or stopping a link from navigating to a new URL. It does *not* stop event bubbling.
- **stopPropagation()**: Stops the event from bubbling up the DOM tree. It prevents parent elements from being notified of the event, ensuring that their event listeners for that same event type won't trigger. It does *not* prevent default browser behaviors.
---