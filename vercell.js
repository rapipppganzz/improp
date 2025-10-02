import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = `http://depay.lekowl.shop:5014{req.url}`;
  const response = await fetch(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' ? req.body : undefined,
  });
  const data = await response.text();
  res.status(response.status).send(data);
}
