import CommonCover from '../../components/CommonCover/CommonCover';
import Heading from '../../components/Heading/Heading';
import TodayOffer from '../../components/TodayOffer/TodayOffer';

const OurMenu = () => {
  return (
    <div>
      <CommonCover heding="Our Menu" des="Would you like to try a dish?" />
      <div className="w-10/12 mx-auto">
        <Heading text="---Don't miss---" hed="TODAY'S OFFER" />
        <TodayOffer />
      </div>
      {/* =========== */}
      <CommonCover
        heding="DESSERTS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <TodayOffer />
      </div>

      {/* ================ */}
      <CommonCover
        heding="PIZZA"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <TodayOffer />
      </div>

      {/* ================ */}
      <CommonCover
        heding="SALADS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <TodayOffer />
      </div>

      {/* ================ */}
      <CommonCover
        heding="SOUPS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-10/12 mx-auto">
        <TodayOffer />
      </div>
    </div>
  );
};

export default OurMenu;
