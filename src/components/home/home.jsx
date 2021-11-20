import React, { useEffect, useState, Component } from "react";
import "./home.scss";
import Navabar from "../navbar/navbar";
import vinfast from "../../assets/imgs/VINFAST.mp4";
import Datacar from "../../assets/data/product";
// import React from 'react'
import { Icon, Input, Segment, Pagination } from "semantic-ui-react";
import { Carousel } from "react-carousel-minimal";
import Slide from "../../assets/data/slide";

const Home = () => {
  const [image, setimage] = useState(Datacar[0].image);
  const [price, setprice] = useState(Datacar[0].price);
  const [name, setname] = useState(Datacar[0].name);
  const [car_infomation, setcar_infomation] = useState(
    Datacar[0].car_infomation
  );

  const changeinfor = (item) => {
    setimage(item.image);
    setprice(item.price);
    setname(item.name);
    setcar_infomation(item.car_infomation);
  };

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  

  useEffect(() => {}, []);

  return (
    <div>
      <Navabar />
      <hr />
      <hr />
      <div className="container">
        <div class="Vinfast">
          <div class="video_bg">
            <video className="videoTag" autoPlay loop muted>
              <source src={vinfast} type="video/mp4" />
            </video>
            <hr />
            <hr />
          </div>
          <div class="container-flui">
            <div class="introduce-row">
              <div class="col-sm-3">
                <a href="">
                  ĐỘNG CƠ BMW <br /> 2.0L
                </a>
              </div>
              <div class="col-sm-3">
                <a href="">
                  CÔNG SUẤT <br /> 228 HP{" "}
                </a>
              </div>
              <div class="col-sm-3">
                <a href="">
                  HỘP SỐ TỰ ĐỘNG <br /> ZF 8 CẤP{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-car">
          <div className="name">
            <p>{name}</p>
            {Datacar.map((item) => (
              <div src={item.name} alt="" onClick={() => changeinfor(item)} />
            ))}
          </div>
          <div className="price">
            <p>{price}</p>
            {Datacar.map((item) => (
              <div src={item.price} alt="" onClick={() => changeinfor(item)} />
            ))}
          </div>
          <div className="information">
            <Segment>
              <p>{car_infomation}</p>
              {Datacar.map((item) => (
                <div
                  src={item.car_infomation}
                  alt=""
                  onClick={() => changeinfor(item)}
                />
              ))}
            </Segment>
          </div>
          <div className="car-img">
            <img src={image} alt={image} />
          </div>
          <div className="option">
            <b> CHỌN MÀU XE : </b>
          </div>
          <div className="car-color">
            {Datacar.map((item) => (
              <img src={item.color} alt="" onClick={() => changeinfor(item)} />
            ))}
          </div>
        </div>
        <div className="carousel_slide">
          <div className="App">
            <Segment>
              <div style={{ textAlign: "center" }}>
                <h2>
                  Vinfast Lux A 2.0 <br /> Thông Số Kĩ Thuật, Giá Bán, Ưu Đãi
                  Mới Nhất!
                </h2>
                <p>| ”Khách hàng là miếng cơm, manh áo của Vinfast ” |</p>
                <div
                  style={{
                    padding: "0 20px",
                  }}
                >
                  <Carousel
                    data={Slide}
                    time={2000}
                    width="100%"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="20%"
                    style={{
                      textAlign: "center",
                      maxWidth: "100%",
                      maxHeight: "500px",
                      margin: "40px auto",
                    }}
                  />
                </div>
                .
              </div>
              
            </Segment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
