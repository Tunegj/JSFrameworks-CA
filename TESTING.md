# Testing Log

Testing performed on the deployed Netlify application

## Functional Testing

| Area                 | Test                                                             | Expected Result                                                                             | Status                                                                                             |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---- |
| Product listing      | Load homepage                                                    | Products load and display in grid                                                           | Loading spinner displayed, then products loaded correctly in the grid                              | Pass |
| Product cards        | Check product information                                        | Cards display image, title, price, discount information and rating where applicable         | All required product information displayed correctly                                               | Pass |
| Product navigation   | Click on product card                                            | Correct product details page open                                                           | Correct product details page opens and browser Back returned to `/`                                | Pass |
| Product details      | View product details                                             | Product details page displays image, title, price, tags, description and review information | Product information displayed correctly, including discount pricing and review/empty review states | Pass |
| Add to cart          | Add the same product twice                                       | Product is added, toast appears and cart count increased from 1 to 2                        | Pass                                                                                               |
| Cart persistence     | Refresh product page with itemss in cart                         | Product page reloads and cart contents persist                                              | Page loaded correctly and cart contents persisted                                                  | Pass |
| Product search       | Search by partial product name                                   | Matching products appear dynamically                                                        | Matching products displayed while typing                                                           | Pass |
| Product search       | Search using different capitalization and surrounding whitespace | Search remains case-insensitive and ignores surrounding whitespace                          | Correct matching products displayed                                                                | Pass |
| Product search       | Search for non-existent product                                  | No-results message displays                                                                 | "No products found" displayed correctly                                                            | Pass |
| Search navigation    | Click a search result                                            | Correct product details page open                                                           | Correct product details page opened                                                                | Pass |
| Search interaction   | Click outside results and refocus search                         | Results close when clicking outside and reopen when refocusing search input                 | Dropdown behaved correctly                                                                         | Pass |
| Cart dialog          | Open cart dialog                                                 | Cart displays correct products, quantities, prices and total                                | Cart contents and total displayed correctly                                                        | Pass |
| Cart quantity        | Increase and decrease product quantity                           | Quantity, cart total and header count update correctly                                      | All values updated correctly                                                                       | Pass |
| Cart removal         | Remove product from cart                                         | Product is removed and removal toast appears                                                | Product removed and toast displayed                                                                | Pass |
| Multiple cart items  | Add different products                                           | Multiple products display correctly in the cart                                             | Products displayed correctly                                                                       | Pass |
| Cart navigation      | Select View Cart                                                 | Dialog closes and `/cart` opens                                                             | navigated correctly and dialog closed                                                              | Pass |
| Checkout navigation  | Select Checkout                                                  | Dialog closes and `/checkout` opens                                                         | Navigated correctly and dialog closed                                                              | Pass |
| Cart dialog          | Close using button, Escape and backdrop                          | Dialog closes with each method                                                              | All three methods closed the dialog correctly                                                      | Pass |
| Cart page            | View cart with multiple products                                 | Products, quantities, unit prices, subtotals and cart total displayed correctly             | All cart information displayed correctly                                                           | Pass |
| Cart quantity        | Increase and decrease quantities                                 | Quantity, item subtotal, cart total and header count update correctly                       | All values updated correctly                                                                       | Pass |
| Cart removal         | Reduce quantity to zero or use Remove                            | Product is removed from cart                                                                | Product removed correctly and removal toast displayed                                              | Pass |
| Product navigation   | Click product title in cart                                      | Correct product details page open                                                           | Correct product opened                                                                             | Pass |
| Cart navigation      | Select Proceed to Checkout                                       | Checkout page opens                                                                         | Navigated correctly to `/checkout`                                                                 | Pass |
| Empty cart           | Remove all products                                              | Empty-cart state displays                                                                   | Empty-cart state displayed correctly                                                               | Pass |
| Checkout             | Review order summary                                             | Products, quantities, line totals and over total are correct                                | All order information and totals displayed correctly                                               | Pass |
| Checkout             | Complete checkout                                                | User is taken to checkout success page and cart is cleared                                  | Success page displayed and header cart count changed to 0                                          | Pass |
| Checkout persistence | Refresh after completed checkout                                 | Cart remains empty after refresh                                                            | Cart remained empty                                                                                | Pass |
| Empty checkout       | Visit `/checkout` with an empty cart                             | Empty-cart state displays with a way to continue shopping                                   | Empty-cart state and Continue Shopping link displayed correctly                                    | Pass |
| Contact form         | Submit empty form                                                | Validation errors displaye for all required fields                                          | All four validation errors displayed                                                               | Pass |
| Contact form         | Test minimum character requirements                              | Name and subject require at least 3 characters and message requires at least 10             | Boundary validation worked correctly                                                               | Pass |
| Contact form         | Test invalid and valid email addresses                           | Invalid email is rejected and valid email is accepted                                       | Email validation worked correctly                                                                  | Pass |
| Contact form         | Leave an invalid field                                           | Field validates on blur and displays the appropriate error                                  | Blur validation worked correctly                                                                   | Pass |
| Contact form         | Correct a field with an existing error                           | Exisiting validation error clears when the user edits the field                             | Error cleared correctly                                                                            | Pass |
| Contact form         | Submit valid form                                                | Form clears and success message displays                                                    | Form submitted successfully and fields cleared                                                     | Pass |
| Contact form         | Edit form after successful submission                            | Previous success message disappears                                                         | Success message cleared correctly                                                                  | Pass |

## Responsive Testing

| Viewport | Pages Tested | Issues / Fixes | Status |
| -------- | ------------ | -------------- | ------ |

## Accessibility Testing

| Test | Result | Fixes |

## Issues/improvements Found and Fixed

### Issue: Direct URL refresh returned 404 on Netlify

- **Found:**
- **Cause:**
- **Fix:**
- **Retest:**
- **Status:**

### Improvement: Cart item subtotal

- **Found:** Cart items are displayed the unit price and overall cart total, but not the subtotal for each line item when quantity was greater than one.
- **Improvement:** Added a subtotal calculated from unit price x quantity for each cart item.
- **Retest:** Tested different quantities locally. Item subtotals and overall cart total updated correctly.
- **Status:** Fixed locally - production retest pending.

### Improvement: Continue Shopping from cart

- **Found:** The Cart page did not provide a direct way to return to shopping, particularly when the cart became empty.
- **Improvement:** Added a "Continue Shopping" link on the Cart page, including when the cart is empty.
- **Retest:** Pending.
- **Status:** In progress

### Improvement: Contact form blur validation

- **Found:** The contact form did not validate fields until submission.
- **Improvement:** Added `onBlur` validation so individual fields are validated when the user leaves them, while retaining full validation on submit.
- **Retest:** Tested locally using both mouse and keyboard navigation. Validation displayed correctly after leaving invalid fields.
- **Status:** Fixed locally - production retest pending.
