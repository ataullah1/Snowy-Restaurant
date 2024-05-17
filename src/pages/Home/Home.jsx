import Banner from '../../components/Banner/Banner';
import CategorisSlider from '../../components/CategorisSlider/CategorisSlider';
import ChefRecommendsSec from '../../components/ChefRecommends/ChefRecommendsSec';
import ContactNo from '../../components/ContactNo/ContactNo';
import FromOurMenu from '../../components/FromOurMenu/FromOurMenu';
import Heading from '../../components/Heading/Heading';
import MiddleBanner from '../../components/MiddleBanner/MiddleBanner';
import MiddleBanner2 from '../../components/MiddleBanner2.jsx/MiddleBanner2';

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
        <ChefRecommendsSec />
      </div>
      <MiddleBanner2 />

      <div className="w-10/12 mx-auto">
        <Heading text="---What Our Clients Say---" hed="TESTIMONIALS" />
      </div>
    </div>
  );
};

export default Home;
