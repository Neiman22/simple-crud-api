import { createServer } from 'http';
import { getAllUsers, getUserByID, validateUserId } from './data';

export const server = createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/api/users') {
    try {
      const users = getAllUsers();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  }

  if (method === 'GET' && url?.startsWith('/api/users/')) {
    const userId = url.split('/')[3];
    if (!validateUserId(userId)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid userId' }));
      return;
    }

    try {
      const user = getUserByID(userId);
      if (!user) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'User not found' }));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }

    
  }
}) 