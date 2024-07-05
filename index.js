import express from 'express';
import dotenv from 'dotenv';
import sendEmail from './Services/sendEmail.js'; // Adjust the import path as necessary
import connectDB from './Database/config.js';
import cors from 'cors'

import userRouter from './Routers/UserRouter.js'; // Adjust the import path as necessary
 // Adjust the import path as necessary


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
  

connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

app.use('/api',userRouter);

// Route to test email sending
app.post('/send-email', async (req, res) => {
  const { email, subject, text } = req.body;

  try {
    await sendEmail(email, subject, text);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Email not sent', error });
  }
});

// Additional routes using apiRouter



const PORT = process.env.PORT || 5001; // Change to a different port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
