import React  from "react";
import './Home.css';
import ImgSecure from "./cyber-security.png";
import ImgLike from "./love.png";
import ImgBrain from "./brain.png";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { Link } from "react-router-dom";

const FEATURES=[
    {
        featureImg : ImgSecure,
        featureText:"securely store your notes in the browser local storage. "   
    },
    {
        featureImg : ImgBrain,
        featureText:"use your brain for thinking , not for remembering things."
    },
    {
        featureImg:  ImgLike,
        featureText:" Loved by 100+ users."
    }
]

function Home(){
    return(
        <div>
            <h1 className="text-center text-primary app-title">Quick Note</h1>
            <p className="text-center text-gray">Your pocket friendly note taking app .<span class="text-highlight text-black tagline-highlight"><b>Remember Everything !</b></span></p>
           
                  <div>
                      <h3 className="text-center text-black">Why you should use Quick Note?</h3>
                  
           <div className="feature-container">
           {
              FEATURES.map((feature)=>{
                const {featureImg ,featureText} = feature;
                return(
                    <FeatureCard
                     featureImg={featureImg}
                     featureText={featureText}
                    />
                );
                })
            }
          </div>
          </div>
           <div className=" button-container ">
            <Link to="/add">
            <button className="btn btn-primary">Add Note</button>
            </Link>
            <Link to="/show">
            <button className="btn btn-secondary">View Notes</button>
            </Link>
           </div>
        
        </div>
    )
}

export default Home;