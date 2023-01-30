function rotateLeft(arr,m,d)
{
	let x = 1;
		while (x <= d) {
			let l = arr[0];
			for (let i = 0; i < m - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[m - 1] = l;
			x++;
		}

		for (let i = 0; i < m; i++) {
			console.log(arr[i] + " ");
		}
}
let arr = [ 1, 2, 3, 4, 5 ];
let m = arr.length;
let d=4; 

rotateLeft(arr, m,d);

