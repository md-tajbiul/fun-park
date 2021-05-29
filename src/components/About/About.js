import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import park from "../../Images/park.jpg"
import "./About.css"
const About = () => {
    return (
        <section className="about-us pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-7 align-self-center">
                        <h1>Welcoming You to the Fun Park</h1>
                        <div className="text-dark my-5">
                            <p>
                                When you look good, you feel good.
                                <br />
                                We are pleased to announce our plans for a
                                phased reopening of the Fun Park.
                            </p>
                            <h1>
                            Enjoy the magic at:
                            </h1>
                            <ul className="about-ul">
                                <li>Disneyland Park and Disney California Adventure Park</li>
                                <li>Downtown Disney District</li>
                                <li>Disney’s Grand Californian Hotel & Spa</li>
                            </ul>
                            <p>Disney’s Paradise Pier Hotel will plan to reopen on June 15, 2021 with reduced capacity. The Disneyland Hotel will plan to reopen on July 2, 2021 with reduced capacity.</p>
                            <p>As always, our procedures may change as we continue to update our health and safety processes based on guidance from the state of California and local health officials. If planning to travel, please check and follow the Centers for Disease Control and Prevention (CDC) recommendations and any State travel advisories.</p>
                            <p>While it may be different from the last time you visited, together we can find new ways to create magical moments—and memories to treasure.</p>
                            <p>See below for important details to know before you visit.</p>
                            <p>Check this page often for the latest important information updates.</p>
                        </div>
                        <button>Book Now</button>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={park} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
