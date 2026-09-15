
import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <div className="px-10">
            <div className="flex gap-35 items-center" >
           <div>
            <div className="mt-6 mb-4">

                    <img src={Logo} alt="" />
                    <p className="max-w-75 text-gray-500 ">Curated tools, technologies, and resources for developers building
modern software.</p> </div>
<div className="flex gap-4 items-center">
    <span>GitHub</span>
    <span>Twitter</span>
    <span>LinkedIn</span>
</div>

            </div>
            <div className="flex gap-20 items-start"> 
<div>
<ul className="list-none">
<b>PRODUCT</b> 
<div className="text-gray-600 mt-2">
  <li>Home</li>
  <li>Technologies</li>
  <li>Projects</li> </div>
  </ul>     
</div>
<div>
<ul className="list-none">
<b>COMPANY</b> <div className="text-gray-600 mt-2">
  <li>About</li>
  <li>Contact</li>
  <li>Careers</li> </div>
  </ul>     
</div>
<div>
<ul className="list-none">
<b>LEGAL</b> <div className="text-gray-600 mt-2">
  <li>Privacy Policy</li>
  <li>Terms of Service</li> </div>
  
  
  </ul>     
</div> </div>

        </div>
<div className="flex justify-between items-center mt-4 mb-4">
    <p> <span className="text-gray-600"> © 2026 Dev Stack. All rights reserved. </span></p> 
    <div className="flex gap-4 items-center"> 
    <p> <span className="text-gray-600">Privacy</span></p> 
    <p><span className="text-gray-600">Terms</span></p></div>
    </div> 
    
    
    
    
    
    
    
    </div>

    );
};

export default Footer;