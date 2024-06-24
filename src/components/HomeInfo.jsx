import React from 'react'
import {Link} from 'react-router-dom'
const Info=({txt,link,btntxt})=>{
     return (
        <div className='info-box'>
            <p className='text-center'>{txt}</p>
            <Link to={link} className='text-center neo-brutalism-white neo-btn'>
                {btntxt}<i class="fa-solid fa-arrow-right"></i>
            </Link>
        </div>
     )
}

const rendercontent={
    1:<Info txt="Please rotate the model."
    link='/'
    btntxt='Thankyou'
     />,
    4:<Info txt="Exploring the intersection of technology and adventure, always ready for the next challenge."
    link='/About'
    btntxt='About Me '
     />,
    3:<Info
    txt="For inquiries or collaboration opportunities, please contact me."
    link='/Contacts'
    btntxt='Contact Me'
    />,
    2:<Info
    txt="You can also check some of mine amazing projects "
    link='/Projects'
    btntxt='Projects'
    />,
}

const HomeInfo = ({currentStage}) => {
  return rendercontent[currentStage] || null
}

export default HomeInfo
