import {BaseUrl, BaseUrl1} from './NetWorkUrl';

const get = urlOptions => {
  return fetch(BaseUrl + urlOptions, {
    headers: {
      'content-type': 'application/json',
      authorization: 'apikey 2IFdV34EFzXuyQxeY9BWut:2r90movyzE3x27lWBPgouN',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};
const post = (urlOption, body) => {
  return fetch(BaseUrl1 + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 2IFdV34EFzXuyQxeY9BWut:2r90movyzE3x27lWBPgouN',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post};
