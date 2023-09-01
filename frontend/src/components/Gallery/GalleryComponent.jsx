import s1 from '../../assets/Gallery/1.jpeg'
import s2 from '../../assets/Gallery/2.jpeg'
import s3 from '../../assets/Gallery/3.webp'
import s4 from '../../assets/Gallery/4.jpeg'
import s5 from '../../assets/Gallery/5.jpeg'
import s6 from '../../assets/Gallery/6.webp'
import s7 from '../../assets/Gallery/7.webp'
import s8 from '../../assets/Gallery/8.webp'
import s9 from '../../assets/Gallery/9.jpeg'
import s10 from '../../assets/Gallery/10.webp'
import s11 from '../../assets/Gallery/11.webp'
import s12 from '../../assets/Gallery/12.jpeg'
import s13 from '../../assets/Gallery/13.avif'
import s14 from '../../assets/Gallery/14.jpeg'
import s15 from '../../assets/Gallery/15.webp'
import s16 from '../../assets/Gallery/16.webp'
import s17 from '../../assets/Gallery/17.jpg'
import s18 from '../../assets/Gallery/18.png'
import logo from '../../assets/logo.png'
import './Gallery.css'


const GalleryComponent = () => {

  return (
    <>
<div className='bg'>
    <div className='wallpaper'></div>
    <div className='container'>
    <div className='photo-gallery'>
    <div className='column'>
        <div className='photo'>
            <img src={s18} className='photo img'/>
            <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s2} className='photo img'/>
            <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s17} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s4} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s5} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s6} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
    </div>
    <div className='column'>
        <div className='photo'>
            <img src={s9} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s12} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s8} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s10} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s11} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s14} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
    </div>
    <div className='column'>
        <div className='photo'>
            <img src={s14} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s7} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s15} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s16} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s17} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        <div className='photo'>
            <img src={s1} className='photo img'/>
                 <img src={logo} className='logo-overlay'/>
        </div>
        
    </div>
    {/* <div className='column'>
        <div className='photo'>
            <img src={s2} className='photo'/>
        </div>
        <div className='photo'>
            <img src={s12} className='photo'/>
        </div>
        <div className='photo'>
            <img src={s5} className='photo'/>
        </div>
        <div className='photo'>
            <img src={s16} className='photo'/>
        </div>
        <div className='photo'>
            <img src={s7} className='photo'/>
        </div>
        <div className='photo'>
            <img src={s18} className='photo'/>
        </div>
        
    </div> */}
    </div>
    </div>
    </div>
    </>
  )
}

export default GalleryComponent