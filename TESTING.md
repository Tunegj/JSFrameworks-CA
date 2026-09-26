# Testing Log

Testing performed on the deployed Netlify application

## Functional Testing

| Area                 | Test                                                             | Expected Result                                                                             | Actual Result                                                                                      | Status |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------ |
| Product listing      | Load homepage                                                    | Products load and display in grid                                                           | Loading spinner displayed, then products loaded correctly in the grid                              | Pass   |
| Product cards        | Check product information                                        | Cards display image, title, price, discount information and rating where applicable         | All required product information displayed correctly                                               | Pass   |
| Product navigation   | Click on product card                                            | Correct product details page open                                                           | Correct product details page opens and browser Back returned to `/`                                | Pass   |
| Product details      | View product details                                             | Product details page displays image, title, price, tags, description and review information | Product information displayed correctly, including discount pricing and review/empty review states | Pass   |
| Add to cart          | Add the same product twice                                       | Product is added, toast appears and cart count increased from 1 to 2                        | Pass                                                                                               |
| Cart persistence     | Refresh product page with itemss in cart                         | Product page reloads and cart contents persist                                              | Page loaded correctly and cart contents persisted                                                  | Pass   |
| Product search       | Search by partial product name                                   | Matching products appear dynamically                                                        | Matching products displayed while typing                                                           | Pass   |
| Product search       | Search using different capitalization and surrounding whitespace | Search remains case-insensitive and ignores surrounding whitespace                          | Correct matching products displayed                                                                | Pass   |
| Product search       | Search for non-existent product                                  | No-results message displays                                                                 | "No products found" displayed correctly                                                            | Pass   |
| Search navigation    | Click a search result                                            | Correct product details page open                                                           | Correct product details page opened                                                                | Pass   |
| Search interaction   | Click outside results and refocus search                         | Results close when clicking outside and reopen when refocusing search input                 | Dropdown behaved correctly                                                                         | Pass   |
| Cart dialog          | Open cart dialog                                                 | Cart displays correct products, quantities, prices and total                                | Cart contents and total displayed correctly                                                        | Pass   |
| Cart quantity        | Increase and decrease product quantity                           | Quantity, cart total and header count update correctly                                      | All values updated correctly                                                                       | Pass   |
| Cart removal         | Remove product from cart                                         | Product is removed and removal toast appears                                                | Product removed and toast displayed                                                                | Pass   |
| Multiple cart items  | Add different products                                           | Multiple products display correctly in the cart                                             | Products displayed correctly                                                                       | Pass   |
| Cart navigation      | Select View Cart                                                 | Dialog closes and `/cart` opens                                                             | navigated correctly and dialog closed                                                              | Pass   |
| Checkout navigation  | Select Checkout                                                  | Dialog closes and `/checkout` opens                                                         | Navigated correctly and dialog closed                                                              | Pass   |
| Cart dialog          | Close using button, Escape and backdrop                          | Dialog closes with each method                                                              | All three methods closed the dialog correctly                                                      | Pass   |
| Cart page            | View cart with multiple products                                 | Products, quantities, unit prices, subtotals and cart total displayed correctly             | All cart information displayed correctly                                                           | Pass   |
| Cart quantity        | Increase and decrease quantities                                 | Quantity, item subtotal, cart total and header count update correctly                       | All values updated correctly                                                                       | Pass   |
| Cart removal         | Reduce quantity to zero or use Remove                            | Product is removed from cart                                                                | Product removed correctly and removal toast displayed                                              | Pass   |
| Product navigation   | Click product title in cart                                      | Correct product details page open                                                           | Correct product opened                                                                             | Pass   |
| Cart navigation      | Select Proceed to Checkout                                       | Checkout page opens                                                                         | Navigated correctly to `/checkout`                                                                 | Pass   |
| Empty cart           | Remove all products                                              | Empty-cart state displays                                                                   | Empty-cart state displayed correctly                                                               | Pass   |
| Checkout             | Review order summary                                             | Products, quantities, line totals and over total are correct                                | All order information and totals displayed correctly                                               | Pass   |
| Checkout             | Complete checkout                                                | User is taken to checkout success page and cart is cleared                                  | Success page displayed and header cart count changed to 0                                          | Pass   |
| Checkout persistence | Refresh after completed checkout                                 | Cart remains empty after refresh                                                            | Cart remained empty                                                                                | Pass   |
| Empty checkout       | Visit `/checkout` with an empty cart                             | Empty-cart state displays with a way to continue shopping                                   | Empty-cart state and Continue Shopping link displayed correctly                                    | Pass   |
| Contact form         | Submit empty form                                                | Validation errors displaye for all required fields                                          | All four validation errors displayed                                                               | Pass   |
| Contact form         | Test minimum character requirements                              | Name and subject require at least 3 characters and message requires at least 10             | Boundary validation worked correctly                                                               | Pass   |
| Contact form         | Test invalid and valid email addresses                           | Invalid email is rejected and valid email is accepted                                       | Email validation worked correctly                                                                  | Pass   |
| Contact form         | Leave an invalid field                                           | Field validates on blur and displays the appropriate error                                  | Blur validation worked correctly                                                                   | Pass   |
| Contact form         | Correct a field with an existing error                           | Exisiting validation error clears when the user edits the field                             | Error cleared correctly                                                                            | Pass   |
| Contact form         | Submit valid form                                                | Form clears and success message displays                                                    | Form submitted successfully and fields cleared                                                     | Pass   |
| Contact form         | Edit form after successful submission                            | Previous success message disappears                                                         | Success message cleared correctly                                                                  | Pass   |

## Responsive Testing

| Page / Component                                        | Viewport          | Test                                                                                                           | Result                                                                                             | Status |
| ------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------ |
| Homepage                                                | Mobile (~375px)   | Check header, search, product grid and product cards for overflow, wrapping and usability                      | Layout displayed correctly with no overlap or horizontal scrolling                                 | Pass   |
| Product Details                                         | Mobile (~375px)   | Check image, product information, tags, cart button and reviews                                                | Content displayed correctly with no overflow or layout issues                                      | Pass   |
| Cart dialog                                             | Mobile (~375px)   | Check cart items, quantity controls, actions and scrolling for overflow and usability                          | Dialog fit the viewport correctly and remained scrollable with multiple products                   | Pass   |
| Cart page                                               | Mobile (~375px)   | Check cart items, quantity controls, subtotals, totals and navigation for wrapping, overflow and usability     | Layout displayed correctly with no overflow; Continue Shopping alignment was adjusted for mobile   | Pass   |
| Checkout                                                | Mobile (~375px)   | Check order summary, product information, line totals, overall total, checkout button and empty state          | Layout displayed correctly with no overflow or usability issues                                    | Pass   |
| Checkout success                                        | Mobile (~375px)   | Check confirmation content and Continue Shopping action for wrapping, overflow and usability                   | Content displayed correctly with no responsive issues                                              | Pass   |
| Contact form                                            | Mobile (~375px)   | Check form fields, validation messages, success message and submit button for wrapping, overflow and usability | Form and all validation states displayed correctly with no responsive issues                       | Pass   |
| 404 page                                                | Mobile (~375px)   | Check error message and Continue Shopping action for wrapping, overflow and usability                          | Content displayed correctly with no responsive issues                                              | Pass   |
| Homepage                                                | Tablet (~768px)   | Check header, search, search results and product grid across the tablet layout                                 | Two-column product grid and navigation displayed correctly with no overflow or layout issues       | Pass   |
| Product Details, Cart, Checkout, Contact form, 404 page | Tablet (~768px)   | Check layout and responsiveness across the tablet layout for all major pages                                   | Layout displayed correctly with no overflow or layout issues                                       | Pass   |
| All pages and components                                | Desktop (~1440px) | Check overall layout, spacing, content-width, product grid, dialogs and controls                               | Layout displayed correctly, homepage used four-column grid and no responsiveness issues were found | Pass   |

## Accessibility Testing

| Area | Test | Expected Result | Status |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---- |
| Full application | Keyboard navigation | Navigate using Tab, Shift+Tab, Enter and Escape | All interactive elements were reachable and operable in a logical order with visible focus states | Pass |
| Colour scheme | Emulate `prefers-color-scheme: dark` | Application remains readable and usable when the system prefers dark mode | Application retained its light theme and all text and controls remained visible and usable | Pass |
| Lighthouse audit | Homepage | Run automated Lighthouse accessibility audit on deployed application | Lighthouse returned an Accessibility score of 100 | Pass |
| Lighthouse audit | Cart page | Run automated Lighthouse accessibility audit on the deployed application | Lighthouse returned an Accessibility score of 100 | Pass |
| Lighthouse audit | Checkout page | Run automated Lighthouse accessibility audit on the deployed application | Lighthouse returned an Accessibility score of 100 | Pass |
| Lighthouse audit | Checkout success page | Run automated Lighthouse accessibility audit on the deployed application | Lighthouse returned an Accessibility score of 100 | Pass |
| Lighthouse audit | Contact form | Run automated Lighthouse accessibility audit on the deployed application | Lighthouse returned an Accessibility score of 100 | Pass |
| Lighthouse audit | Contact form with validation messages | Run automated Lighthouse accessibility audit on the deployed application | Lighthouse returned an Accessibility score of 100 | Pass |
| Lighthouse audit | Product Details page | Run automated Lighthouse accessibility audit on the deployed application | Lighthouse returned an Accessibility score of 100 after fixing tag contrast issues | Pass |

## Issues/improvements Found and Fixed

### Issue: Direct URL refresh returned 404 on Netlify

- **Found:** Navigating to an invalid route displayed a blank page because no React Router route matched the URL
- **Fix:** Added a catch-all `*` route with a Not Found page and a link back to the shop
- **Retest:** Tested on deployed Netlify site and working as expected
- **Status:** Fixed

### Issue: Inconsistent keyboard focus indicators

- **Found:** Several interactive elements used the browser's default black focus outline, while the Product Card focus state was not sufficiently clear.
- **Fix:** Standardized keyboard focus indicators using a green focus ring and offset. Product Cards use `focus-within` so the entire clickable card receives a visible focus state.
- **Retest:** Keyboard navigation tested across interactive elements and focus indicators displayed clearly and consistently.
- **Status:** Fixed.

### Issue: Insufficient colour contrast on product tags

- **Found:** Lighthouse reported insufficient contrast between the tag text and background on the Product Details page.
- **Fix:** Changed the tag text from `text-green-700` to `text-green-900` to improve contrast against the background.
- **Retest:** Tested on the deployed Netlify site and the contrast issue is resolved.
- **Status:** Fixed.

### Improvement: Cart item subtotal

- **Found:** Cart items are displayed the unit price and overall cart total, but not the subtotal for each line item when quantity was greater than one.
- **Improvement:** Added a subtotal calculated from unit price x quantity for each cart item.
- **Retest:** Tested on the deployed Netlify site and working as expected
- **Status:** Fixed

### Improvement: Continue Shopping from cart

- **Found:** The Cart page did not provide a direct way to return to shopping, particularly when the cart became empty.
- **Improvement:** Added a "Continue Shopping" link on the Cart page, including when the cart is empty.
- **Retest:** Tested on the deployed Netlify site and working as expected.
- **Status:** Fixed

### Improvement: Contact form blur validation

- **Found:** The contact form did not validate fields until submission.
- **Improvement:** Added `onBlur` validation so individual fields are validated when the user leaves them, while retaining full validation on submit.
- **Retest:** Tested on the deployed Netlify site and working as expected.
- **Status:** Fixed

### Improvement: Cart Navigation alignment on mobile

- **Found:** On mobile viewports, the "Continue Shopping" link and "Proceed to Checkout" button on the Cart page were not properly aligned, causing layout issues.
- **Improvement:** Centered the Continue Shopping link on the mobile cart layout.
- **Retest:** Displayed correctly at approximately 375px.
- **Status:** Fixed locally - production retest pending.
