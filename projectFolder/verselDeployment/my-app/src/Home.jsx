import React from 'react';
import "./Home.css";
import Product from './Product';

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
            image="https://www.gearbest.com/u_file/2212/15/products/2aeb70df9c.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
            />
             <Product 
            id="25415479"
            title="OUKITEL WP19 Global Bands 21000mA"
            price={357.00}
            rating={4}
            image="https://www.gearbest.com/u_file/2212/15/products/93673702fb.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
            />
             <Product 
            id="34587126"
            title="Cubot KingKong 7 Global Version Rugged "
            price={319.00}
            rating={4}
            image="https://www.gearbest.com/u_file/2212/15/products/05b2665602.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
            />
             <Product 
            id="45871236"
            title="Ulefone Power Armor 18T Rugged Pho"
            price={629.00}
            rating={4}
            image="https://www.gearbest.com/u_file/2212/15/products/a5b62beb89.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
            />
        </div>
        <div className="home__row">
            <Product 
            id="14259517"
            title="DOOGEE S98 Pro Rugged Phone Thermal Imaging Camera Phone"
            price={479.00}
            rating={3}
            image="https://www.gearbest.com/u_file/2212/15/products/b98534fb57.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240"
            />
             <Product 
            id="35261478"
            title="Oukitel RT2 Rugged Tablet 10.1 Inch F"
            price={309.00}
            rating={3}
            image="https://www.gearbest.com/u_file/2212/15/products/283084ea35.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
            />
             <Product 
            id="34582159"
            title="HOTWAV R6 Pro Tablet Android 12 Octa core 8GB 128GB 15600mAh 10.1 HD+ Display 16MP Camera 30W Fast Charging Tablets PC"
            price={219.00}
            rating={3}
            image="https://www.gearbest.com/u_file/2212/15/products/e84fdd358e.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240"
            />
             <Product 
            id="45577234"
            title="DOOGEE S99 4G Rugged Smart Phone Helio G96 8+128GB 64MP Night Vision Camera Android 12.0 6000mAh Massive"
            price={315.00}
            rating={3}
            image="https://gearbest.com/u_file/2212/15/products/93673702fb.jpg?x-oss-process=image/quality,q_80/resize,m_lfit,h_500,w_500"
            />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49254178"
            title="Samebike 20LVXD30 / 20LVXD30-II 350"
            price={773.00}
            rating={4}
            image="https://www.gearbest.com/u_file/2212/15/products/d8c437406a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
          />
          <Product
            id="33444931"
            title="ENGWE Bike C20 PRO Adult Electric Bik"
            price={949.00}
            rating={4}
            image="https://www.gearbest.com/u_file/2212/15/products/f737e1b8d7.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
          />
          <Product
            id="325555545"
            title="BEZIOR X1500 Electric Bike Fat Tire 12.8"
            price={999.00}
            rating={5}
            image="https://www.gearbest.com/u_file/2212/15/products/12549db64b.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
          />
        </div>


        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;
