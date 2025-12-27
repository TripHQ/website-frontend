import express from 'express';
import cors from 'cors';
import db from './db.js';
import { generateTicket } from './ticket-service.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Serve generated tickets
app.use('/generated', express.static(path.join(__dirname, '../public/generated')));

// API Route: Join Waitlist
app.post('/api/join', async (req, res) => {
    try {
        const { name, email, country, destination } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Name and Email are required' });
        }

        console.log(`[Waitlist] New Joiner: ${name} (${email}) -> ${destination}`);

        // 1. Generate Ticket
        // This might take a second, but we await it to send the URL back
        const ticketUrl = await generateTicket({ name, country, destination });

        // 2. Save to Database
        const stmt = db.prepare('INSERT INTO users (name, email, country, destination, ticket_url) VALUES (?, ?, ?, ?, ?)');
        const info = stmt.run(name, email, country, destination, ticketUrl);

        // 3. Send Email (Mocked for now)
        // In real prod: await resend.emails.send({ ... })
        console.log(`[Email] Mock sending email to ${email} with attachment ${ticketUrl}`);

        res.json({
            success: true,
            userId: info.lastInsertRowid,
            ticketUrl: ticketUrl, // Frontend will use this to display in popup
            message: 'Welcome to the waitlist!'
        });

    } catch (error) {
        console.error('Error processing join:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
