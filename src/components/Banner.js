import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      // const response = await fetch('https://fakestoreapi.com/products?limit=5');
      const response = await fetch('https://market2.store/wp-json/custom-api/v1/categories?limit=5');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
      <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-bs-ride="carousel">
        <div className="carousel-inner">
        {users.data && Array.isArray(users.data) && users.data.map((currElem, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} background_bg`}>
              <div className="banner_slide_content">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-9">
                      <div className="banner_content overflow-hidden">
                        <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">{currElem.category}</h5>
                        <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">{currElem.name}</h2>
                        <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="#" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-3">
                      <div className='banner-img'>
                        <img src={currElem.image} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"><i className="ion-chevron-left"></i></a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"><i className="ion-chevron-right"></i></a>
      </div>
    </div>
  );
};

export default Banner;
