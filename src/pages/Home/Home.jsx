import Banner from '../../components/Banner/Banner';
import CategorisSlider from '../../components/CategorisSlider/CategorisSlider';
import ContactNo from '../../components/ContactNo/ContactNo';
import FromOurMenu from '../../components/FromOurMenu/FromOurMenu';
import Heading from '../../components/Heading/Heading';
import MiddleBanner from '../../components/MiddleBanner/MiddleBanner';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-10/12 mx-auto">
        <Heading text="---From 11:00am to 10:00pm---" hed="ORDER ONLINE" />
        <CategorisSlider />
        <MiddleBanner />
        <Heading text="---Check it out---" hed="FROM OUR MENUs" />
        <FromOurMenu />
        <ContactNo />
        <Heading text="---Should Try---" hed="CHEF RECOMMENDS" />
      </div>
    </div>
  );
};

export default Home;
