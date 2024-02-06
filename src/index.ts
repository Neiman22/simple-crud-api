import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

console.log('Hello, TypeScript!');
console.log('Generated UUID:', uuidv4());
console.log('Environment variable EXAMPLE:', process.env.EXAMPLE);