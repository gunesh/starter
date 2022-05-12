

export const userService = {
  getAll,
  getById,
  delete: _delete,
};

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: {},
  };

  return fetch(
    `https://jsonplaceholder.typicode.com/users`,
    requestOptions
  ).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: {},
  };

  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {},
  };

  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
