import { createServer } from 'http';
import { handleGetAllUsers } from './endpoints/handleGetAllUsers';
import { handleGetUserById } from './endpoints/handleGetUserById';
import { handlePostNewUser } from './endpoints/handlePostNewUser';
import { handlePutUserById } from './endpoints/handlePutUserById';

export const server = createServer(async (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/api/users') handleGetAllUsers(req, res);
  if (method === 'GET' && url?.startsWith('/api/users/')) handleGetUserById(req, res, url);
  if (method === 'POST' && url === '/api/users') handlePostNewUser(req, res);
  if (method === 'PUT' && url?.startsWith('/api/users/')) handlePutUserById(req, res, url);
}) 