module.exports = {
  path: 'mongodb://localhost/thejam', 
  options: {
    autoReconnect: true,
    useMongoClient: true,
    autoindex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    pollSize: 10
  }
}