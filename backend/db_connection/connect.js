const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ecomm');
const DB = process.env.DB


mongoose.set('strictQuery', true);
try {
   console.log('hi')

   mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false, // Don't build indexes
      family: 4 // Use IPv4, skip trying IPv6
   }).then(() => {
      console.log('connection successfully')
      console.log('hi')

   })
      .catch((err) => {
         console.log('no connection', err)
      })

}
catch (err) {
   console.log(err)
}



