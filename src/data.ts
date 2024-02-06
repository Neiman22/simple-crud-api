import { v4 as uuidv4 } from 'uuid';

interface IUser {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

export const users: IUser[] = [];

export const addUser = (username: string, age: number, hobbies: string[]) => {
  const id = uuidv4();
  const newUser: IUser = {id, username, age, hobbies}
  users.push(newUser);
  return newUser;
}
addUser('Artem', 39, ['skis']);

export const getAllUsers = () => {
  return users;
}