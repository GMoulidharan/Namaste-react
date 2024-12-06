 # Namaste React


 # Parcel
 -Dev Build
 -Local Server
 -HMR = Hot Module Replacement
 -File Watching Algorithm - written in C++
 -Caching - Faster Builds
 -Image optimization
 -Minification of our file
 -Bundling
 -Compress 
 -Consistent Hashing
 -Code Spliting
 -Differential Bundling -support old browsers.ehwn you have <script type="module">, parcel  automatically generates a nomodule fallback for old browsers as well.
 -Diagnostic
 -Error Handling
 -HTTPs
 -Tree Shaking -remove unsed code
 -Different  Dev and production bundles

 #Namaste React

 /*
* -Header
    -Logo
    -Nav Items
* -Body
    -Search
    -Restaurant container
        -restaurant card
            -image
            -Name of res,start,cuisine,delivery time
* -Footer
    -copy right
    -links
    -address
    -contact

*/

Two types of Export/Import

-Default Export/Import

export default Component;
import component from "path";

-Named Export/Import

export const Compoment
import {Component} from "path"

# React Hooks
-Normal JS utility function 
-2 important Hooks
    -1. useState() - super powerful state variable in react
    -2. useEffects()

# 2 types Routing in web apps
    -Client side Routing
    -Server side Routing
    
# Lifting state up
   -- When you want to coordinate two components, move their state to their common parent.
    -Then pass the information down through props from their common parent.
    -Finally, pass the event handlers down so that the children can change the parent’s state.
    -It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state)..

# Redux ToolKit
    -Install libraries
        -@reduxjs/toolkit
        -react-redux
    -Build our store
    -Connect our store to our App
    -Create a slice(cart slice)
    -dispatch(action)
    -Selector

# Types of testing(devloper)
    -Unit Testing
    -Integration Testing
    -End to End Testing - e2e Testing

# Setting up Testing in our app
    -Install React Testing Library
    -Install jest
    -Installed Babel dependencies(jest)
    -Configure Babel
    -Configure Parcel config file to disable default babel transpliation
    -Jest Configuration
    -Jest - npx jest --init
    -Install jsdom library
    -Install @babel/preset-react - to make JSX work in test cases
    -Include @babel/preset-react inside my babel configuration
    -Install npm i -D @testing-library/jest-dom