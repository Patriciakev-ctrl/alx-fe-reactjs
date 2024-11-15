
const Footer = ()=> {

    return( 
    <div style={{textAlign:'right', backgroundColor:'lightblue', margin:'10px 15px', padding:'20px 25px'}}>
         <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <p>
        <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
    )
};
export default Footer;