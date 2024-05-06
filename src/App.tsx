
import './App.css'
import dog from "./pet-static/dog000 1.png";
import Images from './Images';
import vibrantBackground from "./pet-static/Group.png"
function App() {
return(
  <>
  <div className='nav-bar'>
    <div className='info'>
    <h2 className='site-name'>Pet-first</h2>
    <div className='nav-links'>
      <a>Blog</a>
      <a>Madi-Car</a>
      <a>Service</a>
      <a>About</a>
    </div>
  </div>
  <div className='sign-up'>
    <h1>Sign Up</h1>
  </div>
  </div>
  <div className='container'>
    <div className='main'>
     <div className='quotes'>
      <h2>A PET-FIRST</h2>
      <h2 className='second-child'>APPROACH TO </h2>
      <h2>WELLNESS</h2>
      </div>
    <h3>Learn More</h3>
    </div>
    <div className='dog-logo'>
    <img className='dog' src={dog} alt="" />
    <img className='background' src={vibrantBackground} alt="" />
    </div>
  </div>
  <div className='footer'>
    <div className='logo'>
    <h1>Pet first</h1>
        </div>
    <div className='footer-images'>
    <img src={Images.p1} alt="" />
    <img src={Images.p2} alt="" />
    <img src={Images.p3} alt="" />
    <img src={Images.p4} alt="" />
    <img src={Images.p5} alt="" />
    <img src={Images.p6} alt="" />
    <img src={Images.p7} alt="" />
    <img src={Images.p8} alt="" />
    </div>

  </div>
  </>
)
}
export default App
