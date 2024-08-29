import './Reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
export default function Reasons(){
    return (
        <div className='reasons'>
            <div className="left-side">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-side">
                <span>Some reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> choose us?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt=""></img><span>Over 140+ expert coachers</span>
                    </div>
                    <div><img src={tick} alt="" /><span>Train smarter and faster than before</span></div>
                    <div><img src={tick} alt="" /><span>Free program for new member</span></div>
                    <div><img src={tick} alt="" /><span>Relable parteners</span></div>
                </div>

                <span style={{color:`gray`, fontWeight:'normal'}}>OUR PARTNERS</span>

                <div className='partners'>
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                </div>
                
            </div>
        </div>
    );
}