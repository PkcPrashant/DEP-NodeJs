const loadNewPost = () => {
    fetch("http://localhost:3000/api/posts/new", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            post: document.getElementById("newpost").value
        })
    })
    .then(resp => resp.text())
    .then(resp => {
        if(resp === 'Success'){
            document.getElementById("newpost").value = "";
            loadUserProfile();
        }
    });
}

const loadUserProfile = () => {
    fetch(`http://localhost:3000/api/user`)
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById("username").innerHTML = `Welcome ${resp.fullname}`;
    })
    fetch(`http://localhost:3000/api/posts`)
    .then(resp => resp.json())
    .then(resp => {
        if(resp.location){
            window.location.href = resp.location;
            return;
        }
        const container = document.getElementById("profile");
        if(resp.post.length){
            container.innerHTML = '<h2>Your Posts</h2>';
            resp.post.map((post, index) => {
                container.innerHTML += `
                    <div class="card">
                        <h3 class="card-title">Post # ${index+1}</h3>
                        <p class="card-text">${post}</p>
                    </div>
                    `;
            })
        } else {
            container.innerHTML = '<h2>You have no posts yet</h2>';
        }
    });
}