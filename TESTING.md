# Testing Log

Testing performed on the deployed Netlify application

## Functional Testing

| Area                | Test                                                             | Expected Result                                                                             | Status                                                                                             |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---- |
| Product listing     | Load homepage                                                    | Products load and display in grid                                                           | Loading spinner displayed, then products loaded correctly in the grid                              | Pass |
| Product cards       | Check product information                                        | Cards display image, title, price, discount information and rating where applicable         | All required product information displayed correctly                                               | Pass |
| Product navigation  | Click on product card                                            | Correct product details page open                                                           | Correct product details page opens and browser Back returned to `/`                                | Pass |
| Product details     | View product details                                             | Product details page displays image, title, price, tags, description and review information | Product information displayed correctly, including discount pricing and review/empty review states | Pass |
| Add to cart         | Add the same product twice                                       | Product is added, toast appears and cart count increased from 1 to 2                        | Pass                                                                                               |
| Cart persistence    | Refresh product page with itemss in cart                         | Product page reloads and cart contents persist                                              | Page loaded correctly and cart contents persisted                                                  | Pass |
| Product search      | Search by partial product name                                   | Matching products appear dynamically                                                        | Matching products displayed while typing                                                           | Pass |
| Product search      | Search using different capitalization and surrounding whitespace | Search remains case-insensitive and ignores surrounding whitespace                          | Correct matching products displayed                                                                | Pass |
| Product search      | Search for non-existent product                                  | No-results message displays                                                                 | "No products found" displayed correctly                                                            | Pass |
| Search navigation   | Click a search result                                            | Correct product details page open                                                           | Correct product details page opened                                                                | Pass |
| Search interaction  | Click outside results and refocus search                         | Results close when clicking outside and reopen when refocusing search input                 | Dropdown behaved correctly                                                                         | Pass |
| Cart dialog         | Open cart dialog                                                 | Cart displays correct products, quantities, prices and total                                | Cart contents and total displayed correctly                                                        | Pass |
| Cart quantity       | Increase and decrease product quantity                           | Quantity, cart total and header count update correctly                                      | All values updated correctly                                                                       | Pass |
| Cart removal        | Remove product from cart                                         | Product is removed and removal toast appears                                                | Product removed and toast displayed                                                                | Pass |
| Multiple cart items | Add different products                                           | Multiple products display correctly in the cart                                             | Products displayed correctly                                                                       | Pass |
| Cart navigation     | Select View Cart                                                 | Dialog closes and `/cart` opens                                                             | navigated correctly and dialog closed                                                              | Pass |
| Checkout navigation | Select Checkout                                                  | Dialog closes and `/checkout` opens                                                         | Navigated correctly and dialog closed                                                              | Pass |
| Cart dialog         | Close using button, Escape and backdrop                          | Dialog closes with each method                                                              | All three methods closed the dialog correctly                                                      | Pass |

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
