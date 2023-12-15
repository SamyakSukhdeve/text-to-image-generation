import { useState } from "react";
import "../CreateImage/CreateImage.css";
import axios from "axios";
import ImageGrid from "../../Components/ImageGrid/imageGrid";
import LoadingSpinner from "../../Components/LoadingSpinner/loadingSpinner";

const CreateImage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(data);

  const handelChange = (e) => {
    setLoading(true);
    e.preventDefault();
    const text = e.target.text.value;
    axios
      .post("http://localhost:8000/api/promt", {
        text,
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // const ImageGrid = () => {
  //   return (
  //     <>
  //       {data.map((item, index) => {
  //         return (
  //           <div className="" key={index}>
  //             <img
  //               className=""
  //               src={"data:image/jpeg;base64," + item}
  //             />
  //           </div>
  //         );
  //       })}
  //     </>
  //   );
  // };

  return (
    <div>
      <div className="create-div">
        <h4 className="create-heading">
          Enter Text Prompt to Generate Ai Images
        </h4>
        <form onSubmit={handelChange}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Enter image description you want to generate?"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
              disabled={loading}
            >
              Draw
            </button>
          </div>
        </form>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="map-fun">
            {data.map((item, index) => {
              return (
                <ImageGrid key={index} src={"data:image/jpeg;base64," + item} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateImage;
