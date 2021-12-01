import React, { useEffect, useState, Component } from "react";
import "./home.scss";
import Navabar from "../navbar/navbar";
import vinfast from "../../assets/imgs/VINFAST.mp4";
import Datacar from "../../assets/data/product";
import BuyCar from "../../assets/data/buycar";
// import React from 'react'
import { Icon, Input, Segment, Pagination } from "semantic-ui-react";
import { Carousel } from "react-carousel-minimal";
import Slide from "../../assets/data/slide";

const Home = () => {
  const [image, setimage] = useState(Datacar[0].image);
  const [price, setprice] = useState(Datacar[0].price);
  const [name, setname] = useState(Datacar[0].name);
  const logo = "https://vinfastauto.com/themes/porto/img/vinfast/logo_gray.svg";
  const backgroundLogo =
    "https://storage.googleapis.com/vinfast-data-01/bg-title-car.png";
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
                <p>| ”Khách hàng là miếng cơm, là manh áo của Vinfast ” |</p>
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
              </div>
            </Segment>
            <div className="note"></div>
          </div>
        </div>
        <div className="container-note">
          <div className="note-topic">
            <h2> Hành trình chinh phục thế giới </h2>
            <p>----</p>
          </div>
          <div className="topic-one">
            <span>
              " VinFast, thương hiệu ô tô Việt thuộc Tập đoàn Vingroup <br />
              là điển hình tiêu biểu của việc nhanh chóng phục hồi <br />
              và có tiến bước nhanh chóng sau khi Việt Nam thành công chống dịch
              Covid... "
            </span>
            <br />
            <br />
          </div>
          <hr />
        </div>
      </div>
      <div className="container-buycar">
        {BuyCar.map((item) => (
          <div className="container-buycar-1">
            <div className="info">
              <div className="info-body">
                <div className="dong_xe">
                  <p> D Ò N G S U V </p>
                </div>
                <div className="slogan">Chinh Phục mọi cung đường</div>
                <div className="name_car">LUX SA2.0</div>
                <div className="scratch">
                  <img src={backgroundLogo} />
                </div>
              </div>
              <div className="body">
                <ul>
                  <li>{item.li1}</li>
                  <li>
                  {item.li2}
                  </li>
                  <li>{item.li3}</li>
                  <li>{item.li4} </li>
                </ul>
              </div>
              <div className="chitiet">
                <p>CHI TIẾT</p>
                <img src={logo} />
                <div className="car_chitiet">
                  <img width="361" height="200" src={item.car} />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="container-buycar-1">
          <div className="container-buycar-1">
            <div className="info">
              <div className="info-body">
                <div className="dong_xe">
                  <p> D Ò N G H A T C H B A C K </p>
                </div>
                <div className="slogan">TỐI ƯU MỌI TRẢI NGHIỆM</div>
                <div className="name_car">FADIL</div>
                <div className="scratch" width="361px" height="46px">
                  <img src={backgroundLogo} />
                </div>
              </div>
              <div className="body">
                <ul>
                  <li>Xe đô thị cỡ nhỏ hoàn hảo</li>
                  <li>Khả năng vận hành mạnh mẽ dẫn đầu phân khúc</li>
                  <li>Hệ thống giải trí và kết nối hiện đại</li>
                  <li>Chuẩn an toàn 4 sao ASEAN NCAP</li>
                </ul>
              </div>
              <div className="chitiet">
                <p>CHI TIẾT</p>
                <img src={logo} />
                
               
                <div className="car_chitiet">
                  {BuyCar.map((item) => (
                    <img width="361" height="200" src={item.car} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-buycar-1">
          <div className="container-buycar-1">
            <div className="info">
              <div className="info-body">
                <div className="dong_xe">
                  <p> D Ò N G S E D A N </p>
                </div>
                <div className="slogan">TẬN HƯỞNG TỪNG KHOẢNH KHẮC</div>
                <div className="name_car">LUX SA2.0</div>
                <div className="scratch">
                  <img src={backgroundLogo} />
                </div>
              </div>
              <div className="body">
                <ul>
                  <li>Thiết kế sang trọng, tinh tế</li>
                  <li>Động cơ tăng áp mạnh mẽ</li>
                  <li>
                    Hệ dẫn động cầu sau và hệ thống treo độc lập cho cảm giác
                    lái thể thao
                  </li>
                  <li>Chuẩn an toàn cao nhất 5 sao ASEAN NCAP</li>
                </ul>
              </div>
              <div className="chitiet">
                <p>CHI TIẾT</p>
                <img src={logo} />
                <div className="car_chitiet">
                  {BuyCar.map((item) => (
                    <img width="361" height="200" src={item.car} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
