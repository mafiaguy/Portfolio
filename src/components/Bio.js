import React from "react"
import picture from "../images/about-picture.jpg"

class Bio extends React.Component  {
  render(){
    return(
      <div>

        <div className="line-numbers">
          <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
        </div>
        <div className="divider">
        </div>

        <div className="about-content-container">

          <div className="comments">
              <p>// This is a comment.</p>
              <p>// This is a comment.</p>
              <p>// This is a comment.</p> 
          </div>

            <div className="about-main-section">
             
              <ul className="about-list">
                <li>
                  <p><span style={{ color: "#FF97FF"}}>.name</span> &#123; </p>
                    <p className="tag-info">Siddhanth Dwivedi</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#86FFF8"}}>.bio</span> &#123; </p>
                    <p className="tag-info">I am a tech enthusiast, Cybersecurity expert.
Networking skills, Wireshark, Nmap, Metasploit, Ness, Monitoring, Ettercap, Vega, Maltego, Burp suite, Beef
The guy whom you always want to get knowledge from </p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#94D381"}}>.skills</span> &#123; </p>
                    <p className="tag-info">Wireshark;</p>
                    <p className="tag-info">Nmap;</p>
                    <p className="tag-info">Metasploit;</p>
                    <p className="tag-info">Ness;</p>
                    <p className="tag-info">Burp suite;</p>
                  <p>&#125;</p>
                </li>
              </ul>

              <div className="about-image-container">
                <img src={picture} /> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
