import { createServer } from 'http';
import { handleGetAllUsers } from './endpoints/handleGetAllUsers';
import { handleGetUserById } from './endpoints/handleGetUserById';
import { handlePostNewUser } from './endpoints/handlePostNewUser';
import { handlePutUserById } from './endpoints/handlePutUserById';
import { handleDeleteUserById } from './endpoints/handleDeleteUserById';

export const server = createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/api/users') {
    handleGetAllUsers(res);
  } else if (method === 'GET' && url?.startsWith('/api/users/')) {
    handleGetUserById(res, url);
  } else if (method === 'POST' && url === '/api/users') {
    handlePostNewUser(req, res);
  } else if (method === 'PUT' && url?.startsWith('/api/users/')) {
    handlePutUserById(req, res, url);
  } else if (method === 'DELETE' && url?.startsWith('/api/users/')) {
    handleDeleteUserById(res, url);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
}) 