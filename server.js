import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notfound.js';
import { fileURLToPath } from 'url';

const app = express();

const host = "localhost";
const port = 8000;



// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger Middleware
app.use(logger);

// Get directory name
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Setup static folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);

// Error Handler
app.use(notFound);
app.use(errorHandler);


// app.get('/', (req, res) => {
	// res.send({message: "Welcome to ExpressJS\n"});
//	res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});

//app.get('/about', (req, res) => {
	// res.send("About");
//	res.sendFile(path.join(__dirname, 'public', 'about.html'));
//});

//app.get('/contact', (req, res) => {
//	res.sendFile(path.join(__dirname, 'public', 'contact.html'));
//});
//
;



app.listen(port, () => {
	console.log(`Server is running on: ${host} at: ${port}`);
});
