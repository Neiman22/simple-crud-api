import { isValidUserData, getUserByID, validateUserId, updateUserByID } from "../data";
import { IncomingMessage, ServerResponse } from "http";

export const handlePutUserById = (req: IncomingMessage, res: ServerResponse, url: string) => {
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

  let data = '';
  req.on('data', chunk => {
    data += chunk.toString();
  });

  req.on('end', () => {
    try {
      const userData = JSON.parse(data);
      if (!isValidUserData(userData)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Request does not contain required fields' }));
        return;
      }

      const updateUser = updateUserByID(userId, userData);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(updateUser));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  })
}