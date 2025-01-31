import NavbarCode from '../component/navbar'
import headerVid from '../assets/video/sugar_header.mp4'
import Section1 from '../component/section1'

function Home(){
  return (
    <div>
      <NavbarCode></NavbarCode>
      <div className={'w-[100%] h-[600px]' }>
        <video src={headerVid} className='w-[100%] h-[100%] object-fill' autoPlay muted loop></video>
      </div>
      <Section1></Section1>
    </div>
  )
}

export default Home
