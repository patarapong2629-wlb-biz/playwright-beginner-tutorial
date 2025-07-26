import { test, expect } from '@playwright/test';

test('API GET Request', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  expect(response.status()).toBe(200);

  const text = await response.text();

  expect(text).toContain('Janet');
});

test('API POST Request', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
    data: {
      name: 'morpheus',
      job: 'leader',
    },
  });

  expect(response.status()).toBe(201);

  const data = await response.json();

  expect(data).toMatchObject({
    name: 'morpheus',
    job: 'leader',
  });
});

test('API PUT Request', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
    data: {
      name: 'morpheus',
      job: 'zion resident',
    },
  });

  expect(response).toBeOK();

  const data = await response.json();

  expect(data).toMatchObject({
    name: 'morpheus',
    job: 'zion resident',
  });
});

test('API DELETE Request', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2', {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  expect(response.status()).toBe(204);
});
