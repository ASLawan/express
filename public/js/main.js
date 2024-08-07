const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');
const form = document.querySelector('#add-post-form');

// get and show posts
async function showPosts() {
	try{
		const result = await fetch('http://localhost:8000/api/posts');
		if (!result.ok) {
			throw new Error("Failed to fetch posts!");
		};

		const posts = await result.json();
		output.innerHTML = "";

		posts.forEach((post) => {
			const postElement = document.createElement('div');
			postElement.textContent = post.title;
			output.appendChild(postElement);
		});
	} catch (error) {
		console.log('Error fetchin posts', error);
	}


}

async function addPost(e) {
	e.preventDefault();
	const formData = new FormData(this);
	const title = formData.get('title');

	try{
		const result = await fetch('http://localhost:8000/api/posts', {
			method: "POST",	
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({title})
		});

		if (!result.ok) {
			throw new Error('Failed to add post');
		}

		const newPost = await result.json();
		output.innerHTML = "";

		const postElement = document.createElement('div');
		postElement.textContent = newPost.title;
		output.appendChild(postElement);

		showPosts();
	} catch(error) {
		console.error("Failed to add post");
	}
};

button.addEventListener('click', showPosts);
form.addEventListener('submit', addPost);
