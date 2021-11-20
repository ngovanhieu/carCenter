import react from "react";
import "./navbar.scss";
import { Button, Icon } from "semantic-ui-react";
import logo from '../../assets/imgs/logo.png';
import { useHistory } from "react-router-dom";



const Navabar = () => {
  const ButtonExampleAnimated = () => {};
 
  

  return (
    <div className="container-navbar">
      <div className="menu">
        <div className="navbar">
          <ul>
            <li>
              <a href="">Trang Chủ</a>
            </li>
            <li>
              <a href="">Giới Thiệu</a>
            </li>
            <li>
              <a href="">Liên Hệ</a>
            </li>
            <li>
              <a href="">Ô Tô</a>
            </li>
            <li>
              <a href="">Dịch Vụ</a>
            </li>
          </ul>
          <div className="register">
            <Button animated>
              <Button.Content visible>Đăng kí lái thử</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
            <Button animated="vertical">
              <Button.Content hidden>Shop</Button.Content>
              <Button.Content visible>
                <Icon name="shop" />
              </Button.Content>
            </Button>
            <Button animated="vertical">
              <Button.Content hidden>liên hệ</Button.Content>
              <Button.Content visible>
                <Icon name="call" />
              </Button.Content>
            </Button>
            <Button animated="vertical">
              <Button.Content hidden>Hỗ trợ</Button.Content>
              <Button.Content visible>
                <Icon name="sidebar" />
              </Button.Content>
            </Button>
          </div>
        </div>
          <p className="chu"> hotline: 0787414023 <Icon name="call" /> </p>
        <div className="logo-container">
        <img className="logo" src={logo}  />
        </div>
      </div>
    </div>
  );
};

export default Navabar;
