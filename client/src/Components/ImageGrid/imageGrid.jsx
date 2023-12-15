/* eslint-disable react/prop-types */

import "../ImageGrid/imageGrid.css";

const ImageGrid = (props) => {
  return (
    <div className="wrap" key={props.key}>
      <div className="grid-div">
        <div className="grid-inner-div">
          <img src={props.src} className="grid-img" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
