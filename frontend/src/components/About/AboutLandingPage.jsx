import classes from './AboutLandingPage.module.css'
import { useNavigate } from 'react-router';
const AboutDetail = () => {
  const navigate = useNavigate()
  const redirectHandler= ()=>{
    navigate('location')
  }
  return (
    <>
      <div>
        <section className="h-screen">
          <h1 className={classes.title}>About Our Gym</h1>
          <div className='grid grid-cols-2 h-98 mt-12'>
            <div>
          <p className={classes.desc}>
            Welcome to Achilles Gym. You can find best trainers with history of
            winning in their background ready to teach you all their secrets to
            make you one of the best competitors in the future!
          </p>
          </div>
          <div >
            <h1 className='text-5xl m-auto text-center mb-12 '>Check Out our Trainers</h1>
            <div className={classes.AboutTrainer}>
            <img src='https://qph.cf2.quoracdn.net/main-qimg-8d2f002ba519bb31b8f5eb5b427e8770-lq' className={classes.trainerImg}/>
            <img src='https://iv1.lisimg.com/image/856025/556full-kevin-levrone.jpg' className={classes.trainerImg2}/>
            <img src='https://www.bodybuildingmealplan.com/wp-content/uploads/Chris-Bumstead-Arm-Measurement.jpg' className={classes.trainerImg3}/>
            </div>
          </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutDetail;
