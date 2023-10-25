import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Form() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({ name: '', offers: '', slecteCategories: '', image: '' });
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchPosts();
  }, []);


  const fetchPosts = () => {
    axios.get("http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/form/get")
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };
  const handlePostSubmit = async e => {
    e.preventDefault();

    try {
      if (selectedPost) {
        // Update existing post
        await axios.put(`http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/form/update${selectedPost.id}`, postData);
        setSelectedPost(null);
      } else {
        // Create new post
        await axios.post("http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/form/form", postData);
      }

      setPostData({ name: '', offers: '', slecteCategories: '', image: '', });
      fetchPosts(); // Fetch data again to reflect changes
    } catch (error) {
      console.error('Error creating/updating post:', error);
    }
  };

  const deletePost = async (postId) => {
    const confirmed = window.confirm('Are you sure you want to Delete this Post?');

    if (confirmed) {
      try {
        await axios.delete(`http://backend-env.eba-mnh4itmz.ap-south-1.elasticbeanstalk.com/form/delete/${postId}`);
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

      {/* <Navbar /> */}

      <div className='w-50 bg-white rouded p-3'>

        <table className='table'>
          <tbody>

            {/* <tr>
              <th>Id</th>
              <th></th>
              <th></th>
              <th></th>
          
              <th>Action</th>
            </tr> */}
            {data.map(post => (
              <div className="col-md-4 mb-4">
                {post.image && <img src={post.image} className="card-img-top" alt="Post Image" style={{ width: "284px" }} />}
                {/* {post.name} */}
                <button className='btn btn-danger' onClick={() => deletePost(post._id)}>Delete</button>
              </div>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Form