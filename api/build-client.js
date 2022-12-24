import axios from 'axios'

function BuildClient({ req }) {
  if (typeof window === 'undefined') {
    // We are on the server

    //return axios.create({
    //baseURL:
    //'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
    //headers: req.headers,
    //})

    return axios.create({
      baseUrl: 'http://api:5000/',
    })
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: 'http://api:5000/',
    })
  }
}

export default BuildClient
