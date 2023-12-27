const posts = [
    { title: 'Post one', body: 'This is post one'},
    { title: 'Post two', body: 'This is post two'}
];

const user = {
    name : 'sahil',
    lastActivityTime : 'Today'
}

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            posts.push(post);
            
            const error = false;
            updateLastUserActivityTime();

            if (!error) {
                resolve();
            } else {
                reject('ERROR : Something went wrong')
            }
        }, 2000);
    });
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (posts.value != 0) {
                resolve(posts.pop());
            } else {
                reject('Array is empty now!');
            }
        });
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime);
        }, 1000);

    })
}

createPost({title: 'Post three', body: 'This is post three'})
.then( () => {
    getPosts()
    deletePost().then( () => {
        getPosts();
    })
})

function userUpdatePost() {
    Promise.all([createPost({ title: 'Post five', body: 'This is post five' }), updateLastUserActivityTime()])
        .then(([createPostResolves, updateLastUserActivityTimeResolves]) => {
            console.log(createPostResolves);
            console.log(updateLastUserActivityTimeResolves);

            deletePost().then(() => {
                getPosts();
            });
        })
        .catch(err => console.log(err));
}
