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

export const getUserByID = (id: string) => {
  return users.find(user => user.id === id);
}

export const validateUserId = (userId: string) => {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(userId);
}