import { getUserByID, validateUserId } from "../data";
import { IncomingMessage, ServerResponse } from "http";

export const handleGetUserId = (req: IncomingMessage, res: ServerResponse, url: string) => {
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