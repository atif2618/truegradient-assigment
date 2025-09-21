// // // require('dotenv').config();
// // // const express = require('express');
// // // const cors = require('cors');
// // // const mongoose = require('mongoose');

// // // const authRoutes = require('./routes/auth');
// // // const chatRoutes = require('./routes/chat');
// // // const notificationsRoutes = require('./routes/notification');

// // // const app = express();
// // // app.use(cors());
// // // app.use(cors({
// // //   origin: 'http://localhost:3000',
// // //   methods: ['GET', 'POST', 'OPTIONS'],
// // //   allowedHeaders: ['Content-Type', 'Authorization']
// // // }));

// // // app.use(express.json());

// // // app.use('/auth', authRoutes);
// // // app.use('/api/chat', chatRoutes);
// // // app.use('/api/notifications', notificationsRoutes);

// // // const PORT = process.env.PORT || 5000;
// // // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // //   .then(() => {
// // //     console.log('Mongo connected');
// // //     app.listen(PORT, () => console.log('Server listening on', PORT));
// // //   })
// // //   .catch(err => console.error(err));


// // require('dotenv').config();
// // const express = require('express');
// // const cors = require('cors');
// // const mongoose = require('mongoose');

// // const authRoutes = require('./routes/auth');
// // const chatRoutes = require('./routes/chat');
// // const notificationsRoutes = require('./routes/notification');

// // const app = express();

// // // ✅ CORS configuration
// // const corsOptions = {
// //   origin: 'http://localhost:3000', // your frontend
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true, // allow cookies/auth headers
// // };

// // app.use(cors(corsOptions));

// // // Handle preflight OPTIONS requests for all routes
// // app.options('*', cors(corsOptions));

// // app.use(express.json());

// // // Routes
// // app.use('/auth', authRoutes);
// // app.use('/api/chat', chatRoutes);
// // app.use('/api/notifications', notificationsRoutes);

// // // Connect to MongoDB and start server
// // const PORT = process.env.PORT || 5000;
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log('Mongo connected');
// //     app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// //   })
// //   .catch(err => console.error(err));

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const authRoutes = require('./routes/auth');
// const chatRoutes = require('./routes/chat');
// const notificationsRoutes = require('./routes/notification');

// const app = express();

// // ✅ CORS configuration
// const corsOptions = {
//   origin: 'http://localhost:3000', // your frontend
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true, // allow cookies/auth headers
// };

// app.use(cors(corsOptions));

// // Handle preflight OPTIONS requests for all routes
// app.options('*', cors(corsOptions));

// app.use(express.json());

// // Routes
// app.use('/auth', authRoutes);
// app.use('/api/chat', chatRoutes);
// app.use('/api/notifications', notificationsRoutes);

// // Connect to MongoDB and start server
// // **CHANGE PORT HERE**
// const PORT = 2000; // Or process.env.PORT || 2000 if you use a .env file for port
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Mongo connected');
//     app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
//   })
//   .catch(err => console.error(err));


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const notificationsRoutes = require('./routes/notification');

const app = express();

// CORS config
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));  // ✅ handles preflight automatically
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/notifications', notificationsRoutes);

// Start server
const PORT = 2000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo connected');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch(err => console.error(err));
