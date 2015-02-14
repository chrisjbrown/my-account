My account - SPA ecommerce account management prototype
=====================================

### Resources used

- boilerplate https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate
  - gulp as task runner
  - requirejs for dependency injection
  - Angularjs framework
  - Browserify
- Lodash for working w/ objects (wishlist and cart, though this would probably be handled by the server api in reality)
- Bourbon, neat, refills for styling/SaSS mixins

### App explanation
Assuming a login page gives you access to the app.
On bootstrap, the user account information is pulled from the server and the base controller AccountController is loaded.
This state is abstract and can not be navigated to directly.
The child states then take over. Overview, edit, and wishlist; overview by default.
These child states inherit the account information from their parent scope.
No need to pull the data from the server again.
The edit and wishlist states allow the user to modify their information/wishlist.
These states would make api calls but for the sake of this prototype they just modify the data on the frontend.

I've structured the application this way because the account information would be the driving force of the app and needed immediately. This way no matter to what state the user navigates to on first run the app will always immediately resolve the account information from the server defeating any race conditions.



---

### Getting up and running

- clone repo
- npm install
- bower install
- gulp dev (dev server on localhost)
- gulp prod (build to /build directory)
