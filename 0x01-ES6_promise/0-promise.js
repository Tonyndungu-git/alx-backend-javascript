function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API request
    const apiResponse = {
      status: 200,
      data: 'Sample data from API'
    };

    if (apiResponse.status === 200) {
      resolve(apiResponse.data);
    } else {
      reject(new Error('API request failed'));
    }
  });
}

export default getResponseFromAPI;
