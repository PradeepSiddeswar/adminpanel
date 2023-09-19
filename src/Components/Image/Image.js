import Navbar from '../Navbar/Navabar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Image = () => {

    const [data, setData] = useState([]);
    const [postData, setPostData] = useState({ image: '' });
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        // Fetch data when the component mounts
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios.get('http://localhost:8080/image/get')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handlePostSubmit = async e => {
        e.preventDefault();

        try {
            if (selectedPost) {
                // Update existing post
                await axios.put(`http://localhost:8080/image/update${selectedPost.id}`, postData);
                setSelectedPost(null);
            } else {
                // Create new post
                await axios.post('http://localhost:8080/image', postData);
            }

            setPostData({ image: '' });
            fetchPosts(); // Fetch data again to reflect changes
        } catch (error) {
            console.error('Error creating/updating post:', error);
        }
    };

    const deletePost = async (postId) => {
        const confirmed = window.confirm('Are you sure you want to Delete this Post?');

        if (confirmed) {
            try {
                await axios.delete(`http://localhost:8080/image/delete/${postId}`);
                fetchPosts(); // Refresh the data after deletion
            } catch (error) {
                console.error('Error deleting post', error);
            }
        }
    };



    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <Navbar />
        <div class="container text-center mt-5">
            {/* Your Navbar component or other content */}
            
            <div className="row">
                {data.map(post => (
                    <div className="col-md-4 mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            {post.image && <img src={post.image} className="card-img-top" alt="Post Image" style={{ width: "284px" }} />}
                            <div className="card-body">
                                <h5 class="card-title">Images</h5>
                                <p class="card-text">Some quick example text images to buid on the card title and amke up the bulk of the card's content.</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item ">An item</li>
                                    <li class="list-group-item">A second item</li>
                                </ul>
                                <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div>
                                <button className='btn btn-danger' onClick={() => deletePost(post._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
export default Image;