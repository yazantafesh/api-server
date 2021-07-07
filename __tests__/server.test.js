'use strict';

const supergoose = require('@code-fellows/supergoose');
const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Server Test Group', ()=>{
  let id;

  it('Handles bad route', async ()=>{
    const response = await request.get('/hello');
    expect(response.status).toEqual(404);
  });

  it('Handles bad method', async ()=>{
    const response = await request.post('/person?name=yazan');
    expect(response.status).toEqual(404);
  });

  it('Handles creating new food', async () => {
    let foodObj = { name: 'test', price: 50 };

    const response = await request.post('/api/v1/food').send(foodObj);

    id = response.body.id;

    expect(response.body.name).toBe(foodObj.name);
    expect(response.body.price).toBe(foodObj.price);
    expect(response.status).toEqual(200);
  });

  it('Handles reading foods', async () => {

    const response = await request.get('/api/v1/food');

    expect(response.body.foods[0].name).toBe("test");
    expect(response.body.foods[0].price).toBe(50);
    expect(response.body.foods.length).toBe(1);
    expect(response.status).toEqual(200);
  });

  it('Handles updating a record', async ()=>{

    const newObj={
      name:'potato',
      price:5
    }

    const response = await request.put("/api/v1/food/"+id).send(newObj);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe('potato');
  });

  it('Handles deleting a record', async ()=>{

    const response = await request.delete("/api/v1/food/"+id);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe('potato');
  });

});