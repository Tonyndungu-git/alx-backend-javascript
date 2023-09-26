function getResponseFromAPI() {


    return new Promise((resolve, reject) =>{

	const apiResponse = {
	    status: 200,
	    data: 'sample data from API'
	};

	if (apiResponse.status == 200) {
	    resolve(apiResponse.data);
	}else {
	    reject(new Error('API request failed'));
	}

    });

}
export default getResponseFromAPI;
