import React, { useState, useEffect, createRef } from "react";
import axios from 'axios';


function PostsListPage() {

  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
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
    setImageURL(URL.createObjectURL(e.target.files[0]))
  };

  return (
    <div className="box justify-content-center">
      <form onSubmit={submitImage}>
        <div>
          <p>Foody is an AI that checks to see if your image is a food item.</p>
          <input type="file" id='image' name="image" accept="image/*" onChange={onInputChange} />

          {(image &&
            (<div className="imageContainer">
              <img alt="preview image" src={imageURL} /> <button type="submit" className="btn btn-primary">Submit</button>
            </div>))
            || <label for="image">Click here to upload image.</label>}

        </div>


      </form>
    </div>

  );

}
export default PostsListPage;
