import React from 'react'
import '../App.css'
import searchbar from '../Pictures/searchbar.png'
import Button from 'react-bootstrap/Button';
import Logo from '../Pictures/Logo.png';

function Footer() {
  return (
    <>
    <div className='container-fluid pt-5 pb-3' style={{borderBottom:"1px solid #616161",backgroundColor:"#2E2E2E",color:"white"}}>
        <div className="row">
            <div className="col-md-6 ps-5">
                <div className="container ms-5 ps-5">
            <p className='fs-4 fw-bold'>
            Explore the most attractive <br />
            areas in Kyiv neighborhoods <br />
            to buy a home
            </p>
            <p>We are very proud of the service we provide. Discover <br />
            the hottest communities available in our portfolio. Look <br />
            through the most popular areas. Our locations and <br />
            services prove we are the best.
            </p>
            <p>
            Kyiv is the capital and most populous city of Ukraine.The <br />
            city’s name is said to derive from the name of Kyi, one of <br />
            its four legendary founders. We rank amongst the Top 6 <br />
            agencies in the world.
            </p>
            </div>
            </div>
            <div className="col-md-6 pe-5">
            <div className="row">
            <div className="col-md-4" style={{height: '10vh'}}>
                <div className="row">
                    <div className="col-4">
                <div className='rounded-circle d-flex align-items-center justify-content-center iconborder' style={{height:'8vh',width:'4vw'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                </svg>
                </div>
                </div>
                <div className='col-8'>
                <p style={{fontSize:'.80rem'}}>Trusted and <br />verified property <br /> listings</p>
                </div>
                </div>
            </div>
            <div className="col-md-4" style={{height: '10vh'}}>
            <div className="row">
                    <div className="col-4">
                    <div className='rounded-circle d-flex align-items-center justify-content-center iconborder' style={{height:'8vh',width:'4vw'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-sliders2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5M12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8m9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5m1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                </svg>
                </div>
                </div>
                <div className='col-8'>
                <p style={{fontSize:'.80rem'}}>Personalized filters <br />that make property <br /> search easier</p>
                </div>
                </div>
            </div>
            <div className="col-md-4" style={{height: '10vh'}}></div>
            </div>
         <div className="row">
         <div className="col-md-4" style={{height: '10vh'}}>
         <div className="row">
                    <div className="col-4">
                    <div className='rounded-circle d-flex align-items-center justify-content-center iconborder' style={{height:'8vh',width:'4vw'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"/>
                </svg>
                </div>
                </div>
                <div className='col-8'>
                <p style={{fontSize:'.80rem'}}>Complete info on <br />trending properties <br /> listed</p>
                </div>
                </div>
         </div>
            <div className="col-md-4" style={{height: '10vh'}}>
            <div className="row">
                    <div className="col-4">
                    <div className='rounded-circle d-flex align-items-center justify-content-center iconborder' style={{height:'8vh',width:'4vw'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                </svg>
                </div>
                </div>
                <div className='col-8'>
                <p style={{fontSize:'.80rem'}}>Details info about <br />the property that <br /> are in wishlist.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4" style={{height: '10vh'}}></div>
        </div>
        <div className="row">
        <div className="col-md-4" style={{height: '10vh'}}>
        <div className="row">
                    <div className="col-4">
                    <div className='rounded-circle d-flex align-items-center justify-content-center iconborder' style={{height:'8vh',width:'4vw'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                </div>
                </div>
                <div className='col-8'>
                <p style={{fontSize:'.80rem'}}>Home plan layouts <br />for the virtual tours of <br /> every house.</p>
                </div>
                </div>
        </div>
            <div className="col-md-4" style={{height: '10vh'}}>
            <div className="row">
                    <div className="col-4">
                    <div className='rounded-circle d-flex align-items-center justify-content-center iconborder' style={{height:'8vh',width:'4vw'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"/>
                <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"/>
                <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"/>
                <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z"/>
                <path d="M12 9h2V8h-2z"/>
                </svg>
                </div>
                </div>
                <div className='col-8'>
                <p style={{fontSize:'.80rem'}}>Qr scan code for <br />retrieving property <br /> details.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4" style={{height: '10vh'}}></div>
         </div>
        <div className="row">
        <div className="col-md-8 pt-3 ps-5 text-white" style={{backgroundColor:'#C471ED'}}>
            <p style={{fontSize:'.90rem'}}>With tons of benefits for customers. Go True People Wall is <br />
            the ultimate place where a buyer will search for properties <br />
            online.
            </p>
        </div>
        <div className="col-4"></div>
        </div>
            </div>
        </div>
    </div>
    <div className="container-fluid" style={{backgroundColor:"#2E2E2E",color:"white"}}>
        <div className="row">
            <div className="col-6">
                <div className="container p-5 d-flex align-items-center justify-content-center">
                <img src={searchbar} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-6 pt-5">   
            <div className='pt-5'>
                <p className='fs-4 fw-bold'>Let Us Help You Find Your Deal <br />
                Buyer!
                </p>
                <p>Interior brings 41 years of interior designs experience <br />
                right to your home or office. Our design professionals <br />
                are equipped to help you determine the products and <br />
                design that work best for our customers.
                </p>
                <Button className="getstartbtn" variant="secondary" style={{fontSize:'0.80vw',fontWeight:'500'}}>REGISTER NOW</Button>         
                </div> 
            </div>
        </div>
    </div>
    <div className="container-fluid p-5">
        <div className="container">
        <div className="row">
    <div className="col-3">
        <img src={Logo} alt="" />
    </div>
    <div className="col-2" style={{fontSize:'0.8rem'}}>
        <a href="123" className="d-block text-decoration-none text-dark">HOME</a>
        <a href="123" className="d-block text-decoration-none text-dark my-3">PROFILE</a>
        <a href="123" className="d-block text-decoration-none text-dark my-3">REPORTS</a>
        <a href="123" className="d-block text-decoration-none text-dark my-3">INSIGHTS</a>
    </div>
    <div className="col-2"style={{fontSize:'0.8rem'}}>
        <a href="123" className="d-block text-decoration-none text-dark">INFORMATION CENTER</a>
        <a href="123" className="d-block text-decoration-none text-dark my-3">TERMS & CONDITIONS</a>
        <a href="123" className="d-block text-decoration-none text-dark my-3">PRIVACY POLICY</a>
    </div>
    <div className="col-5 d-flex align-items-end flex-column ">
        <div>
        <a href="123" className=" text-decoration-none text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
        </svg>
        </a>
        <a href="123" className=" text-decoration-none text-dark ms-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
        </a>
        <a href="123" className=" text-decoration-none text-dark ms-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
        </svg>
        </a>
        <a href="123" className=" text-decoration-none text-dark ms-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
        </svg>
            </a>
            </div>
            <div>
        <p className='mt-2' style={{fontSize:'0.7rem'}}>©2022 wealth properties.</p>
        </div>
    </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer