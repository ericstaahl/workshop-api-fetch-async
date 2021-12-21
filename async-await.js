/**
 * async/await
 */


// const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then(res => res.json())
// 	.then(posts => {
// 		// output posts
// 		document.querySelector('#posts').innerHTML = posts
// 			.map(post => `<li>${post.title}</li>`)
// 			.join('');
// 	});

const getJSONAsync = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Could not fetch data")
	};

	const data = await res.json();
	return data;
};

const getNewImg = function () {
	getJSONAsync('https://cataas.com/cat?json=true')
		.then((data) => {
			imgEl.src = `https://cataas.com${data.url}`;
		});
};

const getIMGEl = document.querySelector("#get-img");
const imgEl = document.querySelector("#catImg")
getIMGEl.addEventListener("click", e => {
	getNewImg();
});

getNewImg();

// getJSONAsync
// console.log(data.url);
// imgEl.src = data.url;



// const sleep1500 = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, 1500);
// 	});
// };

// sleep1500().then(() => {
// 	alert('hej')
// });

// sleep1500().then(() => {
// 	alert('hej igen')
// });

// const hello = () => {
// 	return "Hello";
// };

// const helloAsync = async() => {
// 	return "Hello";
// };

// helloAsync().then(() => {
// 	console.log("helloAsync fulfilled", data);
// });