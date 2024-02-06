import { config } from 'dotenv';
import { users } from './data';

config();
const PORT = process.env.PORT || 4000;

console.log(users);
