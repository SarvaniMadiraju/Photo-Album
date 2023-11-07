import React from 'react';

const Grid = ({ photos }) => {
  return (
    <>
      <h1>Photo Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id, title, description }) => (
          <div key={_id} className="grid__item">
            <img src={`http://localhost:5000/uploads/${photo}`} alt="grid_image" />
            <div className="grid__item-info">
              <p>Title: {title}</p>
              <p>Description: {description}</p>
              <p>Date: {new Date().toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;




















































