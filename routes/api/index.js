const route = require('express').Router();

route.use("/product", require('./product').route);
route.use("/users", require('./users').route);

exports = module.exports = {
    route,
}


            
// /* <div class="col-4 card mx-2">

// One Plus 7pro
//  <div class="row">
//     <div class="col">
//         Rs. 60,999
//         <button class="btn btn-primary">Buy</button>
//     </div>
// </div> -->

// --> */
