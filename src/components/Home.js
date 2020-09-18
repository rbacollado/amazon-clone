import React from "react";
import "./home.css";
import Product from "../components/Product";
import Category from "../components/Category";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* make this carousel */}
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
          alt=""
        />

        <div className="home__row">
          {/* category cards */}
          <Category
            img="https://m.media-amazon.com/images/G/01/img18/home/awr/hub/subcatpage/Shopbycategory_SportsOutdoors_1050x1050._CB1544055274_.jpg"
            title="Shop by category"
          />
          <Category
            img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            title="Amazon Basics"
          />

          <Category
            img="https://m.media-amazon.com/images/G/01/img18/home/awr/hub/subcatpage/Shopbycategory_Handmade_1050x1050_._CB1544055274_.jpg"
            title="Gifts"
          />
          <Category
            img="https://m.media-amazon.com/images/G/01/img18/home/awr/hub/subcatpage/Shopbycategory_HomeGarden_1050x1050._CB1544055274_.jpg"
            title="Trending Now"
          />
        </div>

        <div className="home__row">
          {/* make product rows */}
          <Product
            id="123142121551"
            title={
              "Apple iPhone X, 64GB, Space Gray - Fully Unlocked (Renewed)"
            }
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/383px-IPhone_X_vector.svg.png"
            }
            price={100.0}
            rating={5}
          />
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />

          <Product
            id="12314124"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting (1KL30AA) - Black"
            price={158.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
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
            id="12314124"
            title="AmazonBasics Down Alternative Bed Pillows for Stomach and Back Sleepers - 2-Pack, Soft Density, Standard"
            price={31.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31UQiFz%2BSuL._AC_.jpg"
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
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
  );
}

export default Home;
