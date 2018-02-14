import { API } from './api';

function getDefaultOptions() {
    return {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-AUTH-TOKEN": ''
      }
    };
  }
  
  function buildParam(params, asJSON = true) {
    if(asJSON) {
      return JSON.stringify(params);
    }
    else {
      let fD = new FormData();
      Object.keys(params).map(param => {
        fD.append(param, params[param]);
      });
  
      return fD;
    }
  }
  
  export default async function ajax(uri, options = {}) {
    const defaultOptions = getDefaultOptions();
  
    options.method = options.method ? options.method : defaultOptions.method;
    options.headers = options.headers ? options.headers : defaultOptions.headers;
  
    if(options.body) {
      //options.body = buildParam(options.body);
      options.headers['Content-Type'] = 'application/json; charset=UTF-8';
      options.body = buildParam(options.body);

    }
  
    //options.credentials = 'same-origin';
  
    uri = uri.startsWith("/") ? uri : "/" + uri;
    const API_HOST = API; // TODO: get url from ENV Variable, if exists
    url = `${API_HOST}${uri}`;
  
    console.log(url)
    fetch(`${url}`, options).then(data => data.json()).catch(error => console.log(error.message()));
  }
  