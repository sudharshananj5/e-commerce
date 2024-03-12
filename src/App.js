// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import './index.css' 
import Logo from './Logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
// import { IoSearchSharp } from "react-icons/io5";
// import flag from './flag.png'
import { GiHamburgerMenu } from "react-icons/gi";
import navimg from './navimg.png'
import bodybgimg from './bodybgimg.png'
import container1 from './container1.png'
import container2 from './container2.png'
import container3 from './container3.png'
import container4 from './container4.png'
import popular1 from './popular1.png'
import popular2 from './popular2.png'
import popular3 from './popular3.png'
import popular4 from './popular4.png'
import cloths1 from './cloths1.png'
import cloths2 from './cloths2.png'
import cloths3 from './cloths3.png'
import cloths4 from './cloths4.png'
import boxfiveimg from './boxfiveimg.png'
import secrow from './secrow.png'
import home1 from './home1.png'
import home2 from './home2.png'
import home3 from './home3.png'
import home4 from './home4.png'
import deals1 from './deals1.png'
import deals2 from './deals2.png'
import deals3 from './deals3.png'
import deals4 from './deals4.png'
import kitchen1 from './kitchen1.png'
import kitchen2 from './kitchen2.png'
import kitchen3 from './kitchen3.png'
import kitchen4 from './kitchen4.png'
import slide1 from './slide1.png'
import slide2 from './slide2.png'
import slide3 from './slide3.png'
import slide4 from './slide4.png'
import slide5 from './slide5.png'
import item1 from './item1.png'
import item2 from './item2.png'
import item3 from './item3.png'
import item4 from './item4.png'
import item5 from './item5.png'
import earbud1 from './earbud1.png'
import earbud2 from './earbud2.png'
import earbud3 from './earbud3.png'
import earbud4 from './earbud4.png'
import earbud5 from './earbud5.png'
// import earbud6 from './earbud6.png'
import product1 from './product1.png'
import product2 from './product2.png'
import product3 from './product3.png'
import product4 from './product4.png'
import printer from './printer.png'
import phone from './phone.png'
import main1 from './main1.png'
import main2 from './main2.png'
import main3 from './main3.png'
import main4 from './main4.png'
import float1 from './float1.png'
import float2 from './float2.png'
import float3 from './float3.png'
import float4 from './float4.png'
import float5 from './float5.png'
import float6 from './float6.png'
import float7 from './float7.png'
import flight from './flight.png'
import watch1 from './watch1.png'
import watch2 from './watch2.png'
import watch3 from './watch3.png'
import watch4 from './watch4.png'
import watch5 from './watch5.png'
import watch6 from './watch6.png'
import watch7 from './watch7.png'
import amalogo from './amalogo.png'




function App(){
    return( 
<body>
  <div className='maindiv'>
    <div className='firstrow'>
    <img src={Logo}alt="logo" ></img>
    <a className='location'><IoLocationOutline /></a>
    <a><p className='delivery'>Delivering to Sydney...</p><p className='update'>Update Location</p></a>
    <input type="text" placeholder="Search here buddy!! Amazon.in"></input>
    <a className='lang'><p>EN</p></a>
    <a className='arrow'><IoMdArrowDropdown /></a>
    <a><p className='signin'>Hello,sign in</p><p className='acc'>Account&List</p></a>
    <a className='arrow'><IoMdArrowDropdown /></a>
    <a><p className='return'>Returns</p><p className='orders'>&Orders</p></a>
    <a className='cartpic'><FaShoppingCart/></a>
    <a className='cart'>Cart</a>
    </div>
  </div>
<div className='maindiv2' >
    <div className='navbar'>
    <a className='hamburger'><GiHamburgerMenu /></a>
    <a className='f1' >All</a>
    <a className='f2'>Fresh</a>
    <a className='f3'>Amazon miniTV</a> 
    <a className='f4'>Sell</a>
    <a className='f5'>Best Sellers</a>
    <a className='f6'>Mobiles</a>
    <a className='f7'>Today's Deals</a>
    <img src={navimg} alt="image"></img>
    </div>
</div>  

<div className='maindiv3'>
<img src={bodybgimg} alt="image"></img>
</div>

<div className='cards'>
    <div className='container'>
    <p>Up to 65% off | Deals on wide range of TVs</p>
    <div className='containers'>
    <div className='container1'>
        <img src={container1} ></img>
        <p>Budget TVs|Starting<br></br> ₹5,499</p>
        <div className='container2' >
        <img src={container2} ></img>
        <p>4K TVs | Up to 18 months No Cost EMI</p>
        <div className='container3'>
        <img src={container3} ></img>
        <p>Big Screens | Save up <br></br>to ₹30,000</p>
        <div className='container4'>
        <img src={container4} ></img>
          <p>Ultra Premium TVs | Flat 50% off</p>
          <div className='deals'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>
 <div className='cards2'>
    <div className='containerbox-2'>
    <p>Popular deals</p>
    <div className='containersbox-2'>
    <div className='secondbox-1'>
        <img src={popular1} ></img>
        <p className='red'>39% off Republic <br></br>Day Sale</p>
        <div className='secondbox-2' >
        <img src={popular2} ></img>
        <p className='red'>37% off Republic <br></br>Day Sale</p>
        <div className='secondbox-3'>
        <img src={popular3} ></img>
        <p className='red'>33% off Republic <br></br>Day Sale</p>
        <div className='secondbox-4'>
        <img src={popular4} ></img>
        <p className='red'>45% off Republic <br></br>Day Sale</p>
          <div className='secondbox-deals'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>
 <div className='cards3'>
    <div className='containerbox-3'>
    <p>Minimum 60% off | Deals on top brands</p>
    <div className='containersbox-3'>
    <div className='thirdbox-1'>
        <img src={cloths1} ></img>
        <p >Tops & tees</p>
        <div className='thirdbox-2' >
        <img src={cloths2} ></img>
        <p>Kurtas&Kurtis</p>
        <div className='thirdbox-3'>
        <img src={cloths3} ></img>
        <p>Dresses&Jumpsuits</p>
        <div className='thirdbox-4'>
        <img src={cloths4} ></img>
        <p>Sarees</p>
          <div className='thirdbox-deals'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>
 <div className='cards4'>
    <div className='containerbox-4'>
    <p>Sign in for your best experience</p>
    <button>Sign  Securely</button>
    </div>
 </div>
 <div className='cards5'>
    <div className='containerbox-5'>
      <img src={boxfiveimg}></img>
    </div>
 </div>
 <div className='sec-rowcards'>
    <div className='sec-rowcontainer'>
    <p>Up to 75% off | Electronics & accessories</p>
    <div>
      <img src={secrow} ></img>
      <div className='secrow-deals'>
      <p>See all deals</p>
      </div>
    </div>
    </div>
 </div>

 <div className='sec-rowcards2'>
    <div className='sec-rowcontainer2'>
    <p>Up to 65% off | Bestselling appliances for your home</p>
    <div className='sec-rowcontainers2'>
    <div className='secbox-1'>
        <img src={home1} ></img>
        <p>Refrigerators | Up to <br></br>60% <br></br>off</p>
        <div className='secbox-2' >
        <img src={home2} ></img>
        <p>Washing machines | Up to 60% off</p>
        <div className='secbox-3'>
        <img src={home3} ></img>
        <p>AC | Up to 55% off</p>
        <div className='secbox-4'>
        <img src={home4} ></img>
        <p>waves | Up to 60% off</p>
          <div className='secrow-deals-2'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>
 <div className='sec-rowcards3'>
    <div className='sec-rowcontainer3'>
    <p>Minimum 60% off | Deals on Amazon brands & more</p>
    <div className='sec-rowcontainers3'>
    <div className='box3-1'>
        <img src={deals1} ></img>
        <p>Up to 70% off |<br></br> Comforters & more</p>
        <div className='box3-2' >
        <img src={deals2} ></img>
        <p>Minimum 50% off |<br></br> Kitchen product</p>
        <div className='box3-3'>
        <img src={deals3} ></img>
        <p>Starting ₹99 | Toys & <br></br>games</p>
        <div className='box3-4'>
        <img src={deals4} ></img>
        <p>Minimum 60% off |<br></br> Jackets & sweatshirts</p>
          <div className='secrow-deals-3'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>
 <div className='sec-rowcards4'>
    <div className='sec-rowcontainer4'>
    <p>Starting ₹199 | Deals on Amazon brands & more</p>
    <div className='sec-rowcontainers4'>
    <div className='box4-1'>
        <img src={kitchen1} ></img>
        <p>Starting ₹299 | <br></br>Storage containerse</p>
        <div className='box4-2' >
        <img src={kitchen2} ></img>
        <p>Starting ₹199 |<br></br> Kitchen tools</p>
        <div className='box4-3'>
        <img src={kitchen3} ></img>
        <p>Starting ₹299 | <br></br>Water bottles</p>
        <div className='box4-4'>
        <img src={kitchen4} ></img>
        <p>Starting ₹399 | Pans,tawas & mores</p>
          <div className='secrow-deals-4'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>

 <div className='tr-slides'>
    <div className='slider'>
    <p className='block'>Blockbuster deals</p>
    <p className='all'>See all deals</p>
    <div className='slides'>
    <div className='box-1'>
        <img src={slide1} ></img>
        <a>Up to 39% off Republic Day Sale</a>
        <p>Samsung Galaxy M14 | <br></br>Lowest Ever Price</p>
        <div className='box-2' >
        <img src={slide2} ></img>
        <a>Up to 15% off Republic Day Sale</a>
        <p>iQOO Z7 Pro || Crazy Deal @21499</p>
        <div className='box-3'>
        <img src={slide3} ></img>
        <a>Up to 89% off Republic Day Sale</a>
        <p>Starting at 999 – smartwatches from…</p>
        <div className='box-4'>
        <img src={slide4} ></img>
        <a>Up to 83% off Republic Day Sale</a>
        <p>Top Headsets from Oneplus, Samsung…</p>
          <div className='box-5'>
          <img src={slide5} ></img>
          <a>Up to 33% off Republic Day Sale</a>
            <p>Redmi 13C|Starting from 7999</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>

 <div className='tr-slides2'>
    <div className='slider2'>
    <p className='block'>Trending deals</p>
    <p className='all'>See all deals</p>
    <div className='slides2'>
    <div className='box2-1'>
        <img src={item1} ></img>
        <a>₹199 and under Republic Day Sale</a>
        <p>Best of BSB Bedsheets</p>
        <div className='box2-2' >
        <img src={item2} ></img>
        <a>80% off Republic Day Sale</a> 
        <p>₹199.00M.R.P.: ₹999.00<br></br> Crazy Deals on BSB Bedsheet</p>
        <div className='box2-3'>
        <img src={item3} ></img>
        <a>56% off Republic Day Sale</a> 
        <p>₹549.00M.R.P.: ₹1,245.00<br></br>Pigeon Amaze Plus Electric Kettle 1.5 L</p>
        <div className='box2-4'>
        <img src={item4} ></img>
        <a>56% off Republic Day Sale</a> 
        <p>₹549.00M.R.P.: ₹1,245.00<br></br>Amazon basics Electric Egg boiler</p>
          <div className='box2-5'>
          <img src={item5} ></img>
            <a>38% off Republic Day Sale</a> 
            <p>₹299.00M.R.P.: ₹480.00<br></br>Amazon Brand - Presto Oxo-Biodegra…</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>

 <div className='tr-slides3'>
    <div className='slider3'>
    <p className='block'>Starting ₹399 | Deals on Amazon brands & more</p>
    <p className='all-1'>See all deals</p>
    <div className='slides3'>
    <div className='const-1'>
        <img src={earbud1} ></img>
        <div className='const-2' >
        <img src={earbud2} ></img>
        <div className='const-3'>
        <img src={earbud3} ></img>
        <div className='const-4'>
        <img src={earbud4} ></img>
          <div className='const-5'>
          <img src={earbud5} ></img>
          {/* <div className='const-6'>
            <img src={earbud6}></img>
          </div> */}
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>


 <div className='row-items'>
    <div className='row-item-container'>
    <p>Shoes, jewellery & more | Starting ₹199</p>
    <div className='main-container'>
    <div className='main1'>
        <img src={product1} ></img>
        <p>Sports shoes</p>
        <div className='main2' >
        <img src={product2} ></img>
        <p>Jewellery&accessories</p>
        <div className='main3'>
        <img src={product3} ></img>
        <p>Watches&smartwatches</p>
        <div className='main4'>
        <img src={product4} ></img>
        <p>Bags,Wallets&luggage</p>
          <div className='main5'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>

 <div className='row-items2'>
    <div className='row-item-container2'>
    <p>Up to 10% cashback on business purchases</p>
    <div>
      <img src={printer} ></img>
      <div className='main-reg'>
      <p>Register for free</p>
      </div>
    </div>
    </div>
 </div>

 <div className='row-items3'>
    <div className='row-item-container3'>
    <p>Up to 40% off | Deals on mobiles and accessories</p>
    <div>
      <img src={phone} ></img>
      <div className='main-deals'>
      <p>See all deals</p>
      </div>
    </div>
    </div>
 </div>

 <div className='row-items4'>
    <div className='row-item-container4'>
    <p>No Cost EMI up to 18 months | TVs for every...</p>
    <div className='main-container4'>
    <div className='main4-1'>
        <img src={main1} ></img>
        <p>TVs under ₹15,000 | <br></br>Up to 50% off</p>
        <div className='main4-2' >
        <img src={main2} ></img>
        <p>TVs in price range of<br></br> ₹15,000 - ₹30,000</p>
        <div className='main4-3'>
        <img src={main3} ></img>
        <p>TVs in price range of<br></br> ₹30,000 - ₹50,000</p>
        <div className='main4-4'>
        <img src={main4} ></img>
        <p>TVs above ₹50,000 | Up to 65% off</p>
          <div className='main4-5'>
            <p>See all deals</p> 
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>

 <div className='float'>
    <div className='float-row'>
    <p className='block'>Starting ₹399 | Deals on Amazon brands & more</p>
    <p className='see-all'>See all offers</p>
    <div className='float-main'>
    <div className='float-1'>
        <img src={float1} ></img>
        <div className='float-2' >
        <img src={float2} ></img>
        <div className='float-3'>
        <img src={float3} ></img>
        <div className='float-4'>
        <img src={float4} ></img>
          <div className='float-5'>
          <img src={float5} ></img>
          <div className='float-6'>
          <img src={float6} ></img>
          <div className='float-7'>
          <img src={float7} ></img>
          </div>
          </div>
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>

 <div className='flight-tickets'>
    <div className='flight'>
    <img src={flight}></img>
 </div>
 </div>

 <div className='watch'>
    <div className='watch-row'>
    <p className='block'>Starting ₹399 | Deals on Amazon brands & more</p>
    <p className='offers'>See all offers</p>
    <div className='watch-main'>
    <div className='watch-1'>
        <img src={watch1} ></img>
        <div className='watch-2' >
        <img src={watch2} ></img>
        <div className='watch-3'>
        <img src={watch3} ></img>
        <div className='watch-4'>
        <img src={watch4} ></img>
          <div className='watch-5'>
          <img src={watch5} ></img>
          <div className='watch-6'>
          <img src={watch6} ></img>
          <div className='watch-7'>
          <img src={watch7} ></img>
          </div>
          </div>
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  </div>
 </div>
 <div className='line'>
 <hr></hr>
 </div>


 {/* <div className='empty'>

 </div> */}

 <div className='amazon'>
  <p>See personalized recommendations</p>
  <button>Sign in</button>
  <p>New customer? <span className='span1'>Start here.</span></p>
  <hr></hr>
 </div>

 <div className='border'>
  <p>Back to top</p>
 </div>

<div className='footer'>
<div className='footer-col1'>
  <p>Get to Know Us</p>
  <li>About Us</li>
  <li>Careers</li>
  <li>Press Releases</li>
  <li>Amazon Science</li>
  </div>
  <div className='footer-col2'>
  <p>Connect with Us</p>
  <li>Facebook</li>
  <li>Twitter</li>
  <li>Instagram</li>
</div>

<div className='footer-col3'>
  <p>Make Money with Us</p>
<li>Sell on Amazon</li>
<li>Sell under Amazon Accelerator</li>
<li>Protect and Build Your Brand</li>
<li>Amazon Global Selling</li>
<li>Become an Affiliate</li>
<li>Fulfilment by Amazon</li>
<li>Advertise Your Products</li>
<li>Amazon Pay on Merchants</li>
</div>

<div className='footer-col4'>
  <p>Let Us Help You</p>
<li>COVID-19 and Amazon</li>
<li>Your Account</li>
<li>Returns Centre</li>
<li>100% Purchase Protection</li>
<li>Amazon App Download</li>
<li>Help</li>

<hr className='hr'></hr>

<a>Australia</a>
<a>Brazil</a>
<a>Canada</a>
<a>China</a>
<a>France</a>
<a>Germany</a>
<a>Italy</a>
<a>Japan</a>
<a>Mexico</a>
<a>Netherlands</a>
<a>Poland</a>
<a>Singapore</a>
<a>Spain</a>
<a>Turkey</a>
<a>United Arab Emirates</a><br></br>
<a>United Kingdom</a>
<a>United States</a>
</div>
</div>

<div className='last'>
  <p>AbeBooks</p>
  <p>Books, art<br></br>& collectibles</p>
  <div className='last1'>
  <a>	Amazon Web Services</a><br></br>
  <a>Scalable Cloud<br></br>
Computing Services</a>
<div className='last2'>
  <a>Audible</a><br></br>
  <a>Download
Audio Books</a>
<div className='last3'>
<a>IMDb</a><br></br>
<a>Movies, TV
& Celebrities</a>
</div>
<div className='last4'>
<a>Conditions of Use & Sale
Privacy Notice
Interest-Based Ads</a><br></br>
<a>© 1996-2024, Amazon.com, Inc. or its affiliates</a>
</div>
</div>
</div>
  </div>

</body> 





    )
}
export default App
