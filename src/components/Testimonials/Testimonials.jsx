import { useState } from 'react';
import {testimonialsData} from '../../data/testimonialsData.js';
import "./Testimonials.css";
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
export default function Testimonials(){
    const [index, setIndex] = useState(0);

    function next(){
        setIndex((prev)=>{
            return (prev+1)%testimonialsData.length;
        });
    }
    function back(){
        setIndex((prev)=>{
            return (prev-1+testimonialsData.length)%testimonialsData.length;
        })
    }
    return(
    <div className="Testimonials">
        <div className="left-t">
            <h1>Testimonials</h1>
            <div>
                <span className='stroke-text'>What They</span>
                <span>Say About Us</span>
            </div>
            
            <div>
                <span>
                    {testimonialsData[index].review}
                </span>
            </div>
            <div>
                <span>{testimonialsData[index].name} </span>
                <span> - {testimonialsData[index].status}</span>
            </div>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img className='reviewer-img' src={testimonialsData[index].image} alt="" />
            <div className='controllers'>
                <img onClick={back} src={leftArrow} alt="" />
                <img onClick={next} src={rightArrow} alt="" />
            </div>
        </div>
    </div>);
}