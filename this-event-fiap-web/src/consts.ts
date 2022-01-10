const enviroment: string = window.location.href

const services: any = {
  'http://localhost:4200/': {
    api: 'http://localhost:8080',
    auth: 'http://localhost:5001/api',
    signup: 'http://localhost:5002/api'
  },
  'http://localhost/': {
    api: 'http://localhost:8080',
    auth: 'http://localhost:5001/api',
    signup: 'http://localhost:5002/api'
  }
}

export default {
  api: services[enviroment].api,
  auth: services[enviroment].auth,
  signup: services[enviroment].signup
}
