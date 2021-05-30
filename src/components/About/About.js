import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./About.css"
const About = () => {
    return (
        <section className="container about pt-5" id="about">
            <div className="common pt-5">
          <h2 className="mainHeader">ABOUT</h2>
          <p>lorem ipsum dolor sit am  ipsum dolor sit am.</p>
          <div className="commonBorder"></div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <img className="w-100" src="https://livedemo00.template-help.com/wt_51314/img/page1_pic1.jpg" alt=""/>
            </div>
            <div className="col-md-6 text-center">
                <div className="p-4" style={{borderTop: "1px solid black", borderRight: "1px solid black"}}>
                <h3>WELCOME TO OUR AMUSEMENT PARK!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar arcu eget lorem consequat ula lorem lipsum lol blandit rabitur vel semper lectus. Fusce blandit turpis accumsan consequat adipi allltscing elit. <br/> In eu arcu eget lorem consequat ula vitae rhoncus.Pellentesque posuere sapien id eniviverra, sit amet condimentum.</p>
                </div>
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-4 pt-5">
                <h4>PLAN A VISIT</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi allltscing elit. Donec pulvinar rabitur vel semper lectus. Fusce blandit felis quis turpis accumsan consequat. In eu arcu eget allerlorem consequat ula vitae rhoncusellentesque.</p>
                <div className="BorderBottom"></div>
            </div>
            <div className="col-md-4 pt-5">
                <h4>PLACES TO STAY</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi allltscing elit. Donec pulvinar rabitur vel semper lectus. Fusce blandit felis quis turpis accumsan consequat. In eu arcu eget allerlorem consequat ula vitae rhoncusellentesque.</p>
                <div className="BorderBottom"></div>
            </div>
            <div className="col-md-4 pt-5">
                <h4>THINGS TO DO</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi allltscing elit. Donec pulvinar rabitur vel semper lectus. Fusce blandit felis quis turpis accumsan consequat. In eu arcu eget allerlorem consequat ula vitae rhoncusellentesque.</p>
                <div className="BorderBottom"></div>
            </div>
        </div>

        </section>
    )
}

export default About
