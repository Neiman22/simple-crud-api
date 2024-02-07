import { createNewUser, isValidUserData } from "../data";
import { IncomingMessage, ServerResponse } from "http";


export const handlePostNewUser = (req: IncomingMessage, res: ServerResponse) =>   {
  let data = '';
  req.on('data', chunk => {
    data += chunk.toString();
  })

  req.on('end', () => {
    try {
      const userData = JSON.parse(data);
      if (!isValidUserData(userData)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Request does not contain required fields' }));
        return;
      }

      const newUser = createNewUser(userData);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  })
}
