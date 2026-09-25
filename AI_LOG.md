# AI Usage Log

**Tools used:** ChatGPT

## General AI Usage

ChatGPT was used as a learning and supporting tool during the project.

I used it to brainstorm project structure, explain React and TypeScript concepts, troubleshoot errors, discuss implementation approaches, plan testing, and review documentation.

In some cases, ChatGPT provided example code or code snippets as part of explanations or debugging. Where suggestions affected the implementation, I reviewed and adapted them to the project, tested the result, and made sure I understood the code being used.

## AI Log

### Date: 21.09.26

**Problem**

I needed to set up the project structure, connect the application to the Noroff Online Shop API and decide how to represent the API data with TypeScript.

**Fix**

I used ChatGPT to discuss the project structure, TypeScript types for the API responses, and different approaches to fetching product data. It explained how `useState` and `useEffect` could be used for fetching, loading states, and error handling.

We also discussed different data-fetching approaches, and I decided to use `fetch` with `useEffect` because the application was small enough that an additional data-fetching library was unnecessary. Example code and implementation guidance were used as references while developing the product listing.

**Outcome**

The application successfully fetches and displays the product data. The API data is represented with TypeScript types, and the product listing includes loading and error states.

---

### Date: 22.09.26

**Problem**

The shopping cart needed to be accessible from several parts of the application, including the product page, header, cart dialog, cart page, and checkout page. Keeping the cart as local component state would not allow these parts of the application to share the same state easily.

**Fix:**

I used ChatGPT to discuss shared state in React and how React Context could be used for the cart. We also discussed a custom `useCart` hook and using `localStorage` to persist the cart between page refreshes.

During implementation, I also encountered an ESLint/Fast Refresh issue with the Context setup. ChatGPT helped explain the error, and the Context was separated into `CartContext`, `CartProvider`, and `useCart`.

**Outcome:**

The application now has shared, typed cart state that can be accessed where it is needed. Cart quantities, totals, removal, and clearing are handled through the Context, and the cart persists across page refreshes using `localStorage`. Separating the Context files also resolved the lint issue.

---

### Date: 23.09.26

**Problem:**

I needed to implement dynamic product search, the checkout flow, and contact-form validation while keeping the state and event handling manageable.

**Fix:**

I used ChatGPT to discuss approaches for filtering products as the user types, handling checkout state, and validating controlled form fields with TypeScript and React.

Example code and suggestions were provided during implementation and debugging. I tested the contact form against the assignment requirements, including the minimum character limits and email validation.

**Outcome:**

The homepage provides dynamic product search with clickable results. The checkout flow clears the cart and navigates to a success page, and the contact form displays validation errors for invalid input and accepts valid input.

---

### Date: 24.09.26

**Problem:**

Refreshing the deployed application directly on a nested route returned a Netlify 404, even though navigating to the same route from within the application worked correctly.

**Fix:**

I used ChatGPT to help understand the problem. It explained that `BrowserRouter` handles routes on the client, while Netlify was trying to find a corresponding file when a nested URL was requested directly.

ChatGPT suggested adding a Netlify SPA redirect rule so that requests are served through `index.html` and then handled by React Router.

**Outcome:**

I added the redirect configuration and redeployed the application. I tested refreshing nested routes directly on the deployed site and confirmed that they loaded correctly.

---

### Date: 24/25.09.26

**Problem:**

The application worked locally, but a Netlify production build failed because it could not resolve the `ProductCard` component.

**Fix**

I used ChatGPT to help interpret the build error. The problem was traced to a difference between the filename casing in GitHub and the casing used by the import.

The issue had not appeared in the same way in my local Windows environment. I corrected the filename casing in Git using a two-step rename and pushed the change.

**Outcome:**

The Netlify build completed successfully and the application deployed correctly.

---

### Date: 24/25.09.26

**Problem:**

During testing, I found accessibility and UI issues, including inconsistent keyboard focus indicators and insufficient colour contrast on product tags.

**Fix:**

I used ChatGPT to discuss the issues found during manual testing and Lighthouse testing. It explained approaches for improving keyboard focus visibility and helped me review the use of semantic HTML and ARIA attributes.

**Outcome:**

Keyboard focus is clearly visible across the application. Lighthouse accessibility testing returned a score of 100 on the tested pages after the changes.

---

### Date: 25.09.26

**Problem:**

Before submission I wanted to check the project for unnecessary complexity, TypeScript and React issues, accessibility problems, and anything that could affect the final build.

**Fix:**

I used ChatGPT to review the project files and discuss TypeScript usage, React Hooks, accessibility, naming, duplication, error handling, and maintainability.

I evaluated the suggested changes before applying them and only kept changes that were relevant to the project. I then ran ESLint and the production build to verify the final application.

**Outcome:**

Minor accessibility and cleanup issues were corrected. `npm run lint` completed without errors, and `npm run build` successfully completed both the TypeScript compilation and Vite production build.

---

### Date: 25.09.26

**Problem:**

I needed to make sure the project documentation was complete and clear before submission.

**Fix:**

I used ChatGPT to review `TESTING.md`, `README.md` and `AI_LOG.md` for typos, missing information, and possible improvements to clarity and professional presentation.

I reviewed the suggestions and updated the documentation where appropriate.

**Outcome:**

The project documentation was completed.
