import * as React from 'react';
import airplane from '../images/Airplane2.jpg'; 
import Particle from '../services/particles';

const WelcomeComponent: React.FC = () => {

    const bottomLeft = {
            position: "absolute",
            bottom: "8px",
            left: "16px",
    }
    return(
        <div className="container-fluid" style={{backgroundColor: "black"}}>
            <img src={airplane} style={{height: "100%", width: "100%", transform: "rotate(0deg)", objectFit: "fill"}}></img>
                    <h2 style={{fontFamily: 'Kalam' , bottom: "8px", left: "16px", position:"absolute", fontSize: "50px", fontVariant: "small-caps", color: "white", marginTop: "auto"}}>
                        Fly with us!
                </h2>

                <div className="social-panel-container">
	<div className="social-panel">
		
	</div>
</div>

        </div>
    )
}

export default WelcomeComponent;