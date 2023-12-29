const posts = [
    { title: 'Post one', body: 'This is post one'},
    { title: 'Post two', body: 'This is post two'}
];

const user = {
    name: 'sahil',
    lastActivityTime: 'Today'
};

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);
}

async function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;
            updateLastUserActivityTime()
                .then(() => {
                    if (!error) {
                        resolve();
                    } else {
                        reject('ERROR: Something went wrong');
                    }
                })
                .catch(reject);
        }, 2000);
    });
}

async function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length !== 0) {
                resolve(posts.pop());
            } else {
                reject('Array is empty now!');
            }
        });
    });
}

async function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime);
        }, 1000);
    });
}

async function userUpdatePost() {
    try {
        await Promise.all([
            createPost({ title: 'Post five', body: 'This is post five' }),
            updateLastUserActivityTime()
        ]);

        const deletedPost = await deletePost();
        console.log(deletedPost);

        getPosts();
    } catch (err) {
        console.log(err);
    }
}

(async () => {
    await createPost({ title: 'Post three', body: 'This is post three' });
    getPosts();
})();
