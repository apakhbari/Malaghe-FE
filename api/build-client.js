import axios from 'axios'

import { APP_URL } from '../envConfig'

function BuildClient({ req }) {
  if (typeof window === 'undefined') {
    // We are on the server

    //return axios.create({
    //baseURL:
    //'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
    //headers: req.headers,
    //})

    return axios.create({
      baseUrl: `${APP_URL}`,
    })
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: `${APP_URL}`,
    })
  }
}

export default BuildClient
