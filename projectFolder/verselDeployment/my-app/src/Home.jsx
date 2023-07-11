import React from 'react';
import "./Home.css";
import Product from './Product';
import onePlus9R from "./logo/OnePlus9R.jpeg";
import amazonBike from "./logo/amazonBike.jpeg";
import amazonEco from "./logo/amazonEco.jpeg";
import cubotKingKong from "./logo/CubotKingKong.jpeg";
import doogeeS98Pro from "./logo/DoogeeS98Pro.jpeg";
import doogeeS98 from "./logo/DoogeeS98.jpeg";
import engweBike from "./logo/EngweBike.jpeg";
import hotwavR6 from "./logo/HotwavR6Pro.jpeg";
import ipadPro from "./logo/ipadPro.jpg";
import learnSmartBook from "./logo/learnStartUpbook.jpg";
import Rt2 from "./logo/OukitelRT2.jpeg";
import Wp19 from "./logo/OukitelWP19.jpeg";
import odesey from "./logo/samsungOdesey.jpg";
import sewing from "./logo/SewingMachine.jpg";
import smartBike from "./logo/smartBike.jpeg";
import smartWatch from "./logo/smartWatch.jpg";
import ulefonePower from "./logo/UlefonePower.jpeg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.gearbest.com/u_file/2212/12/photo/105254957714338494-195a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920"
          alt=""
        />
        <div className="home__row">
            <Product 
            id="12367543"
            title="OnePlus 9RT 5G Global Rom Snapdragon 8"
            price={439.00}
            rating={4}
            image={onePlus9R}
            />
             <Product 
            id="25415479"
            title="OUKITEL WP19 Global Bands 21000mA"
            price={357.00}
            rating={4}
            image={Wp19}
            />
             <Product 
            id="34587126"
            title="Cubot KingKong 7 Global Version Rugged "
            price={319.00}
            rating={4}
            image={cubotKingKong}
            />
             <Product 
            id="45871236"
            title="Ulefone Power Armor 18T Rugged Pho"
            price={629.00}
            rating={4}
            image={ulefonePower}
            />
        </div>
        <div className="home__row">
            <Product 
            id="14259517"
            title="DOOGEE S98 Pro Rugged Phone Thermal Imaging Camera Phone"
            price={479.00}
            rating={3}
            image={doogeeS98Pro}
            />
             <Product 
            id="35261478"
            title="Oukitel RT2 Rugged Tablet 10.1 Inch F"
            price={309.00}
            rating={3}
            image={Rt2}
            />
             <Product 
            id="34582159"
            title="HOTWAV R6 Pro Tablet Android 12 Octa core 8GB 128GB 15600mAh 10.1 HD+ Display 16MP Camera 30W Fast Charging Tablets PC"
            price={219.00}
            rating={3}
            image={hotwavR6}
            />
             <Product 
            id="45577234"
            title="DOOGEE S99 4G Rugged Smart Phone Helio G96 8+128GB 64MP Night Vision Camera Android 12.0 6000mAh Massive"
            price={315.00}
            rating={3}
            image={doogeeS98}
            />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image={learnSmartBook}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={sewing}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Smart Watch"
            price={199.99}
            rating={3}
            image={smartWatch}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={amazonEco}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={ipadPro}
          />
        </div>

        <div className="home__row">
          <Product
            id="49254178"
            title="Samebike 20LVXD30 / 20LVXD30-II 350"
            price={773.00}
            rating={4}
            image={smartBike}
          />
          <Product
            id="33444931"
            title="ENGWE Bike C20 PRO Adult Electric Bik"
            price={949.00}
            rating={4}
            image={engweBike}
          />
          <Product
            id="325555545"
            title="BEZIOR X1500 Electric Bike Fat Tire 12.8"
            price={999.00}
            rating={5}
            image={amazonBike}
          />
        </div>


        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image={odesey}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
