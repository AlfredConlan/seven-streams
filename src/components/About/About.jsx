import React from "react";
import Helmet from "react-helmet";
import "./About.css";
import config from "../../../data/SiteConfig";
import Drawer from "../../layouts/Drawer/Drawer";
import SiteWrapper from "../../layouts/SiteWrapper/SiteWrapper";
import MainNav from "../../layouts/MainNav/MainNav";
import Navigation from "../../components/Navigation/Navigation";
import BlogLogo from "../BlogLogo/BlogLogo";
import MenuButton from "../MenuButton/MenuButton";

class About extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    // const { cover } = this.props.pathContext;
    return (
      <Drawer className="about-template" isOpen={this.state.menuOpen}>
        <Helmet title="About Page" />
        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />
        <SiteWrapper>
          <MainNav>
            <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
            <MenuButton
              navigation={config.siteNavigation}
              onClick={this.handleOnClick}
            />
          </MainNav>
          <div className="about-content">
            <h1 className="about-title">
              <strong>The Vision</strong>
            </h1>
            <p>
              Seven Streams Retreat Center is dedicated to creating and
              cultivating zen gardens and sustainably constructed architecture
              in three seasonal locations. Taos, NM (Summer), Sedona, AZ (Spring
              and Fall) and Joshua Tree, CA (Winter) are the desired locations
              for the retreat centers.{" "}
            </p>
            <p>
              SSRC will offer themed retreat weeks throughout the year,
              including topics such as Shamatha-Vipassana Meditation, Yoga, Golf
              and Mindfulness, Non-Violent Communication, etc.
            </p>
            <p>
              Membership in the SSRC community costs $12/year and is limited to
              2,000 individuals. Being a supporter provides the following
              benefits:
            </p>
            <ul>
              <li>
                A personalized mandala dedicated to the supporter’s calling
              </li>
              <li>A time-lapse photography video of the mandala’s creation</li>
              <li>
                Automatic entry into all raffles of artwork and sponsor’s
                products
              </li>
              <li>
                Access to consultations from Steven Miller, M.A. with his
                Masters degree in - Transpersonal Counseling Psychology from
                Naropa University
              </li>
              <li>
                Entry into all retreats and events hosted at SSRC, including
                live-streaming coverage of events for those who cannot make it
                in person<ul>
                  <li>
                    Supporters will be asked to contribute an hour or two a day
                    to volunteer work, along with contributing monetarily to the
                    daily food budget for the retreat center during their stay{" "}
                  </li>
                  <li>
                    Supporters are also responsible for their transportation to
                    and from SSRC{" "}
                  </li>
                  <li>
                    Each retreat will be open to all supporters on a first-come,
                    first-serve basis. Attendance will be limited based on the
                    housing options available at that particular retreat center
                    at the time-{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </SiteWrapper>
      </Drawer>
    );
  }
}

export default About;
