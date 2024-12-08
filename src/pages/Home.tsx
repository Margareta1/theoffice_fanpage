import { TheOfficeCover } from "../assets";
import "../styles/HomePage.scss";

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <img src={TheOfficeCover} />
      <div className="custom-h1">
        <h1>
          The Office <span>Welcome to the fanpage</span>
        </h1>
      </div>
      <div className="home-page-intro">
        <p>
          The Office is a comedy tv series following the daily lives of a group
          of employees working at the fictional Dunder Mifflin Paper Company in
          Scranton, Pennsylvania. The series aired on NBC from 2005 to 2013.
        </p>
        <p>
          The series is filmed as a mock documentary, or mockumentary, that
          aimed to portray “in a realistic style some ordinary American office
          workers trapped in a confined space with their immature,
          inappropriate, bizarre, or deluded coworkers and one horribly
          overconfident supervisor,” according to the casting call distributed
          for the series’ pilot episode. In order to further its appearance as a
          documentary, the show was shot with a single-camera setup without a
          studio audience or laugh track, supplementing the main action of the
          show by talking-head interviews, or “confessionals,” in which
          characters speak directly to the camera.
        </p>
      </div>
      <div className="custom-h1">
        <h1>
          <span>The making of</span>
        </h1>
      </div>
      <div className="home-page-history">
        <p>
          The evolution of The Office began with the original British version,
          created by Ricky Gervais and Stephen Merchant, which first aired in
          2001 on BBC Two. The show was a mockumentary-style sitcom set in a
          mundane office environment, starring Gervais as the socially awkward,
          egotistical boss, David Brent. The success of the British series,
          which ran for two seasons, led to its international adaptation, with
          the most famous being the U.S. version. The US version of The Office
          took the core concept of the British series and expanded it to fit
          American sensibilities. While initially met with mixed reviews, the
          U.S. version, starring Steve Carell as Michael Scott, soon found its
          footing and became one of the most beloved sitcoms in television
          history. International adaptations of The Office also emerged in
          various countries,including Canada, Germany, and Chile, each tailoring
          the format to local tastes.However, it is the U.S. version that
          remains the most iconic, with a legacy that continues to influence
          television comedy even years after its conclusion.
        </p>
      </div>
    </div>
  );
};
