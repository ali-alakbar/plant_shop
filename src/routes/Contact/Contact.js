
import HeadingLanding from '../../components/HeadingLanding/HeadingLanding';
import Location from '../../components/Location/Location';
import "./style/style.css"
import BrandLogo from '../../components/BrandLogo/BrandLogo';

const Contact = () => {
  
    
  return (
    <section className="section contact-sction">
      <HeadingLanding title={"Contact"} isThereList={false} />
      <Location />
      {/* Start Brand Logo */}
      <BrandLogo/>
    </section>
  );
}

export default Contact