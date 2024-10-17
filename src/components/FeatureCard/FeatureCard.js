import React  from "react";
import './FeatureCrd.css';
function FeatureCard({featureImg ,featureText}){
    return(
        <div className="feature-card ">
            <img src={featureImg} className="feature-card-img" alt="like"/>
            <p className="feature-text">{featureText} </p>
           </div>
    )
}
export default FeatureCard;