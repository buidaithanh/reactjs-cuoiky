import "./Introduces.scss";
import React from "react";
import { food1, food2, food3} from "../assets";
import Slider from "react-slick";
import {  StarRounded } from "@mui/icons-material";


function Introduces() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="introduces">
      <div className="slide-bar">
        <div className="slide-bar-content">
          <h1 className="header1">Hot and spicy foods</h1>
          <h1 className="header2">Specialty of foods</h1>
          <p className="header3">
            loremLorem Ipsum is simply dummy text of the printing and
            typesetting industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
          <br></br>
          <button>RESERVATION</button>
        </div>
      </div>
      <div className="history-food">
        <div className="history-desc">
          <h1>Restaurant History</h1>
          <p>
            Pellentesque habitant morbi tristique senectus netus et malesuada
            fames turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris Eonec eu
            ribero sit amet quam egestas semper. Aenean are ultricies mi vitae
            est tristique senectus et netus et malesuada placerat leo.
          </p>
          <button>READ MORE</button>
        </div>
        <img
          src="https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png"
          alt=""
        />
      </div>
      <div className="service-food">
        <div className="service-item">
          <img src={food1} alt="" />
          <h1>DELICIOUS FOOD</h1>
          <p>Beetroot water spinach okra water chestnut ricebean pea.</p>
        </div>
        <div className="service-item">
          <img src={food2} alt="" />
          <h1>DELICIOUS FOOD</h1>
          <p>Beetroot water spinach okra water chestnut ricebean pea.</p>
        </div>
        <div className="service-item">
          <img src={food3} alt="" />
          <h1>DELICIOUS FOOD</h1>
          <p>Beetroot water spinach okra water chestnut ricebean pea.</p>
        </div>
      </div>
      <div className="evaluate-client">
        <h1>What Clients Say</h1>
        <p>Latest News Updates You Dont Miss Out!</p>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-item">
            <h2 className="header-slider">this is the best food in the world</h2>
            <p className="client-say">Pellentesque habitant morbi tristique senectus netus et malesuada
            fames turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.</p>
            <img className="avt-client" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduUnSPPisNo27TQdcjNXSDddFVnV1O-RBDQ&usqp=CAU' alt=""/>
            <h3 className="name-client">john doe</h3>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded />
          </div>
          <div className="slider-item">
            <h2 className="header-slider">this is the best food in the world</h2>
            <p className="client-say">Pellentesque habitant morbi tristique senectus netus et malesuada
            fames turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.</p>
            <img className="avt-client" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvi_KwvVLcloJlI0-PHAm5bA8H5izxXC3Qw&usqp=CAU' alt=""/>
            <h3 className="name-client">john doe</h3>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded />
          </div><div className="slider-item">
            <h2 className="header-slider">this is the best food in the world</h2>
            <p className="client-say">Pellentesque habitant morbi tristique senectus netus et malesuada
            fames turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.</p>
            <img className="avt-client" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXW6HVdcMpJX7DxBl_OzS7oHhUoGtZ4WC0Q&usqp=CAU' alt=""/>
            <h3 className="name-client">john doe</h3>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded />
          </div><div className="slider-item">
            <h2 className="header-slider">this is the best food in the world</h2>
            <p className="client-say">Pellentesque habitant morbi tristique senectus netus et malesuada
            fames turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.</p>
            <img className="avt-client" src='https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-1/130524605_1328794840803404_5268426791668167905_n.jpg?stp=c368.376.259.258a_dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=esmEdhdNp-IAX9bHZVU&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfDa1z8h2_11uzjczlNisgjXCw7t7KW3iwz321jHj95Vdg&oe=639B11CF' alt=""/>
            <h3 className="name-client">john doe</h3>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded />
          </div><div className="slider-item">
            <h2 className="header-slider">this is the best food in the world</h2>
            <p className="client-say">Pellentesque habitant morbi tristique senectus netus et malesuada
            fames turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.</p>
            <img className="avt-client" src='https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-1/130524605_1328794840803404_5268426791668167905_n.jpg?stp=c368.376.259.258a_dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=esmEdhdNp-IAX9bHZVU&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfDa1z8h2_11uzjczlNisgjXCw7t7KW3iwz321jHj95Vdg&oe=639B11CF' alt=""/>
            <h3 className="name-client">john doe</h3>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded style={{color:'#ffaf0f'}}/>
            <StarRounded />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Introduces;
