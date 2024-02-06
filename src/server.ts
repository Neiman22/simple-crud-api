import { createServer } from 'http';
import { getAllUsers } from './data';

export const server = createServer(async (req, res) => {

  if (req.method === 'GET' && req.url === '/api/users') {
    const users = getAllUsers();
    console.log(users);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
  
}) 