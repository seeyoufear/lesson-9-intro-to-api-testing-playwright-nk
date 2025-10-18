import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

const BASE_URL = 'https://backend.tallinn-learning.ee'

test('GET request with a valid order ID (1-10) should receive code 200', async ({ request }) => {
  const responseOrderId1 = await request.get(`${BASE_URL}/test-orders/1`)
  expect(responseOrderId1.status()).toBe(StatusCodes.OK)
})

test('GET request with an invalid order ID (outside 1-10 range) should receive code 400', async ({
  request,
}) => {
  const responseOrderId11 = await request.get(`${BASE_URL}/test-orders/11`)
  expect(responseOrderId11.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('PUT order with valid ID (1-10) and valid 16-digit API key should receive code 200', async ({
  request,
}) => {
  const requestHeaders = {
    api_key: '1234567890123456',
  }

  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const response = await request.put(`${BASE_URL}/test-orders/1`, {
    headers: requestHeaders,
    data: requestBody,
  })
  console.log(response.status())
  console.log(await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('PUT request with invalid API key should receive code 401', async ({ request }) => {
  const requestHeaders = {
    api_key: '1234567890123',
  }

  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }

  const response = await request.put(`${BASE_URL}/test-orders/1`, {
    headers: requestHeaders,
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})

test('DELETE order worder with valid ID (1-10) and valid 16-digit API key should receive code 204', async ({
  request,
}) => {
  const requestHeaders = {
    api_key: '1234567890123456',
  }

  const response = await request.delete(`${BASE_URL}/test-orders/1`, {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})
