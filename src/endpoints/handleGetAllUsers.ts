import { getAllUsers } from "../data/data";
import { ServerResponse } from "http";

export const handleGetAllUsers = (res: ServerResponse) => {
  try {
    const users = getAllUsers();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}