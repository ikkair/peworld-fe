import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import sytle from "./style.module.css"

const index = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <div className="row gap-3">
                <dir className="col-3 bg-danger">
                    <Image src={Person1}/>
                </dir>
                <dir className="col bg-primary">

                </dir>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default index