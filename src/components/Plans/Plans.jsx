import './Plans.css';
import whiteTick from '../../assets/whiteTick.png';
import rightArrow from '../../assets/rightArrow.png';
import heartHelth from '../../assets/heartHealth.svg';
import {plansData} from '../../data/plansData';
export default function Plans(){
    return(
    <div className="plans-container">
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'> READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITHUS</span>
        </div>

        {/* plans cards */}
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className='plan' key={i}>
                    {plan.icon}
                    <span key={i}>{plan.name}</span>
                    <span key={i+1}>$ {plan.price}</span>
                    <div key={i+2} className="features">
                        {plan.features.map((feature,j)=>(
                            <div key={j+1} className="feature">
                                <img key={j+2} src={whiteTick} alt="" />
                                <span key={j}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>
                            See more benefits -&gt;
                        </span>
                        <button className='btn'>
                            Join now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}