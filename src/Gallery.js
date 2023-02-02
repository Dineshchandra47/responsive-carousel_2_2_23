import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Gallery = () => {
  return (
    <Carousel autoPlay infiniteLoop axis="horizontal">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <p className="legend">My Photo 1</p>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <p className="legend">My Photo 2</p>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <p className="legend">My Photo 3</p>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <p className="legend">My Photo 4</p>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <p className="legend">My Photo 5</p>
      </div>
    </Carousel>
  );
};

export default Gallery;
