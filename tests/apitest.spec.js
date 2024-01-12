import { test, expect } from '@playwright/test'
test('API POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Vasavi",
            "job": "student"
        }
    })
    expect(await response.status()).toBe(201);
    const responseText = await response.text();
    expect(responseText).toContain('Vasavi');
    console.log(responseText);
});
test('API GET request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users')
    expect(await response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet')
    console.log(await response.json());
});
test('API PUT request', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })
    expect(await response.status()).toBe(200);
    const responseText = await response.text();
    expect(responseText).toContain('morpheus');
})
test('API Delete Request', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(await response.status()).toBe(204);
})