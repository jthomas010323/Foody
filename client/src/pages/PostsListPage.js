import React, { useState, useEffect, createRef } from "react";
import axios from 'axios';
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

function PostsListPage() {

  const [image, setImage] = useState(null);
  const fileInput = createRef();


  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const result = await axios.post(
      "http://localhost:8080/upload-image",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div className="box justify-content-center">
      <form onSubmit={submitImage}>
        <div>
          <p>Foody is an AI that checks to see if your image is a food item. Click here to upload an image</p>
          <input type="file" name="image" accept="image/*" onChange={onInputChange} />
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>


      </form>
    </div>

  );

}
export default PostsListPage;
