import './Programss.css';
import { programsData } from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png'
export default function Programss(){
    return (
    <div className='programs' id='programs'>
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* Programs */}
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'><span>Join Now</span><img src={rightArrow} alt="" /></div>
                </div>
            ))}
        </div>
        
    </div>);
}