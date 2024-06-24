import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Link} from 'react-router-dom'

const Skills = [
  
  {title:'Error tube', 
   Name:'Just like IMDb',
   Type:'Frontend',
   ImageUrl:'https://i.pinimg.com/564x/a8/30/d5/a830d5ce33d163055920bd028e2f1fa3.jpg',
   Link:'https://error-404-final.vercel.app/'
  },
  {title:'FreeLancing', 
   Name:'Where freelancer and producer can interact',
   Type:'Fullstack',
   ImageUrl:'https://i.pinimg.com/564x/68/13/87/68138758353b6a8a347b1d4148662e69.jpg',
   Link:'https://github.com/Hunney-ji/Freeelancing'
  },
  {title:'AirBnB', 
   Name:'Choose hotel also you can upload your hotel',
   Type:'Full Stack',
   ImageUrl:'https://i.pinimg.com/564x/0c/78/fa/0c78fa3f74bee3ccb6e6d11bcece756b.jpg',
   Link:'https://airbnb-project1.onrender.com/listings',
  },
] 

const Projects = () => {
  return (
    <section className='max-container'>
       <h1 className='head-text'>
        Hello, Here are My <span className='blue-gradient_text font-semibold drop-shadow '>Projects</span>
      </h1>
      <div className='mt-5 text-slate-500 flex gap-5 flex-col'>
        <p> Welcome to my projects page! Here, you'll find a showcase of my latest work and endeavors. I'm passionate about creating and innovating, and I'm excited to share these projects with you. Each project represents a unique journey and a set of challenges that have helped me grow. I hope you find them inspiring and informative. Feel free to explore, and if you have any questions or feedback, I'd love to hear from you!</p>
      </div>
      <div className='py-12'>
      <h3 className='subhead-text'>Projects</h3>
      <div className='mt-5 text-slate-500 flex gap-5 flex-col'>
        <p>Dive into my collection of projects where creativity meets functionality. Each project is crafted with attention to detail and a commitment to excellence. Whether it's a web development project, a design piece, or an experimental work, you'll find a variety of examples that highlight my skills and interests. Thank you for visiting, and I hope you enjoy exploring my work as much as I enjoyed creating it.
        </p>
      </div>
        <VerticalTimeline>
          {Skills.map((skill)=>(
            <VerticalTimelineElement
            icon={<div style={{overflow:'hidden'}}>
              <img src={skill.ImageUrl} />
            </div>}>
              <Link to={skill.Link}>
              <div>
                <h3 className='text-xl font-semibold'>
                  {skill.title}
                </h3>
                <p className='text-slate-500' style={{margin:0}}>{skill.Name} <br/>{skill.Type}</p>
              </div>
            </Link>
            </VerticalTimelineElement>
          ))

          }
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Projects
