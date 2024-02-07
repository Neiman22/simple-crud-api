import { v4 as uuidv4 } from 'uuid';

interface IUser {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
}

export const users: IUser[] = [];

export const getAllUsers = () => {
  return users;
}

export const validateUserId = (userId: string) => {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(userId);
}

export const getUserByID = (id: string) => {
  return users.find(user => user.id === id);
}

export const isValidUserData = (userData: IUser) => {
  return (
    userData.username && typeof userData.username === 'string' &&
    userData.age && typeof userData.age === 'number' &&
    userData.hobbies && Array.isArray(userData.hobbies)
  );
}

export const createNewUser = (userData: IUser) => {
  const id = uuidv4();
  const { username, age, hobbies } = userData;
  const newUser: IUser = {id, username, age, hobbies}
  users.push(newUser);
  return newUser;
}

createNewUser({
  username: 'Artem', 
  age: 39, 
  hobbies: ['skis'],
});

export const updateUserByID = (id: string, userData: IUser) => {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    const updateUser = {...users[userIndex], ...userData};
    users[userIndex] = updateUser;
    return updateUser;
  }
  return;
}