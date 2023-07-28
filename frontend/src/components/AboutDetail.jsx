import classes from './About.module.css'
import placeholder from '../assets/placeholder.jpg'
import about1 from '../assets/about1.jpg'
import { Link } from 'react-router-dom';

const AboutDetail = () => {
  return (
    <>
      <div className=" mt-14 overflow-hidden ">
          <div className='flex text-center'>
            <div className='w-100'>
            <h1 className='text-5xl   '>Who Are We?</h1>
            <p className='m-10 text-2xl '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <span className=' absolute -my-4 border border-slate-600 p-2 ml-3 w-24 h-12 border-t-1 border-l-0 border-r-1 border-b-0'>
            </span> */}
            <Link to='location'>
            <button className={classes.button}>Location</button>
            </Link>
            </div>
            <img  src={about1} className='w-2/6 h-2/6 mr-20 object-cover rounded-lg ' />
          </div>
          <div className='flex text-center m-20 mt-60'>
          <img  src={placeholder} className='w-4/6 h-100 mr-20 object-cover' />
            <div className='w-100'>
            <h1 className='text-5xl  '>lorem</h1>
            <p className='m-10 text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nam amet corrupti nostrum repellendus sunt a tenetur,
              corporis, maiores placeat non, magnam provident tempore sint
              asperiores unde molestiae reiciendis? Veritatis?
            </p>
            </div>     
          </div>
      </div>
    </>
  );
};

export default AboutDetail;
