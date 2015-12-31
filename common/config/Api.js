import { jq } from '../../vendors/vendors'

const $ = jq();

function baseUrl (){
  let config = {
    protocol : 'http://',
    host : location.hostname,
    port : location.port,
    endpoint : 'api',
  }

  return config.protocol + config.host + ':' + config.port + '/' + config.endpoint + '/'
}

export function httpGET (url,params){
  //console.log(baseUrl() + url);
  return $.get(baseUrl() + url , params)
}

export function httpPOST (url,params){
  return $.post(baseUrl() + url , params)
}

export function getRouter (){
  return {
    getHost : location.host,
    getHostname : location.hostname,
    getPath : location.hash,
    getPathname : location.pathname,
    getSearch : location.search,
    getPort : location.port,
  }
}
