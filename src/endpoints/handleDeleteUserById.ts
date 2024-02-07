import { getUserByID, validateUserId, deleteUserById } from "../data";
import { ServerResponse } from "http";

export const handleDeleteUserById = (res: ServerResponse, url: string) => {
  const userId = url.split('/')[3];
  if (!validateUserId(userId)) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid userId' }));
    return;
  }

  const user = getUserByID(userId);
  if (!user) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'User not found' }));
    return;
  }

  try {
    res.writeHead(204, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({...user}));
    deleteUserById(userId);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
