import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

function PostsListPage() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  if (error) return <ErrorAlert details="Failed to fetch all micro posts" />;


  return (
    <div onClick={() => setIsClicked(true)} className="box justify-content-center">
      <p>Foody</p>
      {(isClicked && <div>
        <input type="file" onChange={onImageChange} className="filetype" />
        <img alt="preview image" src={image} />
      </div>) || <p>Foody is an AI that checks to see if your image is a food item. Click here to upload an image</p>}
    </div>

  );
}

export default PostsListPage;
