const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ecomm');
const DB = 'mongodb+srv://rajip873:9224265644@cluster0.rrgpysf.mongodb.net/ecomm'



mongoose.connect(DB, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   autoIndex: false, // Don't build indexes
   family: 4 // Use IPv4, skip trying IPv6
}).then(() => {
   console.log('connection successfully')
})
   .catch((err) => {
      console.log('no connection', err)
   })



