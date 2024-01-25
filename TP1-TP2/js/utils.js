export const create2DArray = (rows, cols) => {
	let arr = [];

	for (let i = 0; i < rows; i++) {
		arr[i] = new Array(cols);
	}

	return arr;
}