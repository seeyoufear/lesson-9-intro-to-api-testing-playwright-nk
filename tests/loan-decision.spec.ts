import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
import { LoanDto } from './dto/loan-dto'

const URL = 'https://backend.tallinn-learning.ee/api/loan-calc/decision'

test('positive decision / low risk - 200 OK', async ({ request })=> {
  const response = await request.post(URL, {
    headers: { 'content-type': 'application/json' },
    data: LoanDto.lowRisk(),
  });

  const body = await response.json();

  expect.soft(response.status()).toBe(StatusCodes.OK);
  expect.soft(body.riskLevel).toBe('Low Risk');
})

test('positive decision / medium risk - 200 OK', async ({ request })=> {
  const response = await request.post(URL, {
    headers: { 'content-type': 'application/json' },
    data: LoanDto.mediumRisk(),
  });

  const body = await response.json();

  expect.soft(response.status()).toBe(StatusCodes.OK);
  expect.soft(body.riskLevel).toBe('Medium Risk');
})

test('negative decision / very high risk - 200 OK', async ({ request })=> {
  const response = await request.post(URL, {
    headers: { 'content-type': 'application/json' },
    data: LoanDto.veryHighRiskNegative(),
  });

  const body = await response.json();

  expect.soft(response.status()).toBe(StatusCodes.OK);
  expect.soft(body.riskLevel).toBe('Very High Risk');
})

test('positive decision / high risk - 200 OK', async ({ request })=> {
  const response = await request.post(URL, {
    headers: { 'content-type': 'application/json' },
    data: LoanDto.highRisk(),
  });

  const body = await response.json();

  expect.soft(response.status()).toBe(StatusCodes.OK);
  expect.soft(body.riskLevel).toBe('High Risk');
})

test('valid JSON / boundary values - 200 OK', async ({ request })=> {
  const response = await request.post(URL, {
    headers: { 'content-type': 'application/json' },
    data: LoanDto.boundaryMinValid()
  });

  const body = await response.json();

  expect.soft(response.status()).toBe(StatusCodes.OK);
  expect.soft(body.riskLevel).toBe('Very High Risk');
})

test('income 0 - 400 bad request', async ({ request })=> {
  const response = await request.post(URL, {
    headers: { 'content-type': 'application/json' },
    data: LoanDto.incomeZero()
  });

  expect.soft(response.status()).toBe(StatusCodes.BAD_REQUEST);
})

test('negative debt - 400 bad request', async ({ request })=> {
  const response = await request.post(URL, {
    headers: { 'content-type': 'application/json' },
    data: LoanDto.debtNegative()
  });

  expect.soft(response.status()).toBe(StatusCodes.BAD_REQUEST);
})