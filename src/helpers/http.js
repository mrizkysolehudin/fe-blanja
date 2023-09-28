import axios from "axios";

const httpJson = (token = null) => {
	const headers = {
		"content-type": "application/json",
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	return axios.create({
		headers,
		// withCredentials: true,
	});
};

export const httpFormData = (token = null) => {
	const headers = {
		"Content-Type": "multipart/form-data",
	};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	return axios.create({
		headers,
		// withCredentials: true,
	});
};

export default httpJson;
