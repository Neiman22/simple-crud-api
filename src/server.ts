import { createServer } from 'http';
import { handleGetAllUsers } from './endpoints/handleGetAllUsers';
import { handleGetUserId } from './endpoints/handleGetUserId';
import { handlePostNewUser } from './endpoints/handlePostNewUser';

export const server = createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/api/users') handleGetAllUsers(req, res);
  if (method === 'GET' && url?.startsWith('/api/users/')) handleGetUserId(req, res, url);
  if (method === 'POST' && url === '/api/users') handlePostNewUser(req, res);
}) 