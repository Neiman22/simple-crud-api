import { agent } from "supertest";
import { server } from "../server/server"
import { IUser } from "../data/data";

afterAll(() => {
  server.close();
})

/* 
describe('GET /api/users', () => {
  test('should return an empty array of users', async () => {
    const postResponce = await agent(server).get('/api/users');
    expect(postResponce.status).toBe(200);
    expect(postResponce.body).toEqual([]);
  })
})
 */

describe('POST api/users', () => {
  test('should return a new created user', async () => {
    const newUser: IUser = {
      username: 'New User',
      age: 30,
      hobbies: ['chess']
    }

    const responce = await agent(server).post('/api/users').send(newUser);
    expect(responce.status).toBe(201);
    expect(responce.body).toMatchObject(newUser);
  })
})

describe('GET api/user/{userId}', () => {
  test('should return created record by its id', async () => {
    const newUser: IUser = {
      username: 'New User',
      age: 30,
      hobbies: ['chess']
    }

    const postResponce = await agent(server).post('/api/users').send(newUser);
    const userId = postResponce.body.id;

    const getResponce = await agent(server).get(`/api/users/${userId}`);
    expect(getResponce.status).toBe(200);
    expect(getResponce.body).toMatchObject(newUser);
  })
})

describe('PUT api/users/{userId}', () => {
  test('should return updated object with the its id', async () => {
    const newUser: IUser = {
      username: 'New User',
      age: 30,
      hobbies: ['chess']
    }

    const postResponce = await agent(server).post('/api/users').send(newUser);
    const userId = postResponce.body.id;

    const updatedUser: IUser = {
      username: 'Updated User',
      age: 30,
      hobbies: ['hockey']
    }

    const putResponce = await agent(server).put(`/api/users/${userId}`).send(updatedUser);
    expect(putResponce.status).toBe(201);
    expect(putResponce.body).toMatchObject(updatedUser);
  })
})