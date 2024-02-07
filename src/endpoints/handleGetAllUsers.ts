import { getAllUsers } from "../data";
import { IncomingMessage, ServerResponse } from "http";

export const handleGetAllUsers = (req: IncomingMessage, res: ServerResponse) => {
  try {
    const users = getAllUsers();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}