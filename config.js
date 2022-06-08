export const config = {
  node: "http://localhost:9200",
  maxRetries: 5,
  requestTimeout: 60000,
  sniffOnStart: true,
  auth: {
    username: 'admin',
    password: 'admin'
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
