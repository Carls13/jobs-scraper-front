import { useEffect, useState } from 'react';

import axios from 'axios';

export const useFetching = (endpoint) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios.get(endpoint).then((response) => {
			setData(response.data);
			setLoading(false);
		}).catch((error) => {
			setLoading(false);
			setError(error.message);
		})
		// eslint-disable-next-line
	}, [])

	return [loading, data, error, setError];
}