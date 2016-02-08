/*export function getProduct (id) {
	return {
		types: ['GET_PRODUCT_REQUEST',
				'GET_PRODUCT_SUCCESS',
				'GET_PRODUCT_FAILURE'],
		promise: () => {
			return new Promise((resolve, reject) => {
				$.ajax({
					type: 'GET',
					dataType: 'json',
					url: '/frpapi/marketplace/products/'+id,
					success: resolve,
					error: reject
				});
			});
		}
	};
}*/