## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


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


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
> **Note:** This is the first commit documenting changes made to the repository.