import Database from 'better-sqlite3';

const db = new Database('headers.db');

// Create table if not exists
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        country TEXT,
        email TEXT NOT NULL,
        destination TEXT,
        ticket_url TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

export default db;
