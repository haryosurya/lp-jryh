import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';



/* // const P11 = () =>  */
export default class P11 extends Component{

    constructor(){
        super()
        this.state = {
            isOpen: false
        }
        
    }
    
    openModal = () => {
        this.setState({isOpen: true})
    }
    render(){

    return(
        <section className="banner-one" id="banner" style={{backgroundImage: `url(/img/gmb/wave.svg)`}}>
            {/* <img src="/images/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
            <img src="/images/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />
            <img src="/images/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
            <img src="/images/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
            <img src="/images/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
            <img src="/images/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" /> */}

            <div className="container">
                <img src="/images/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1"/>
                <div className="wow fadeInUp banner-one__moc" data-wow-duration="1500ms">

                        {/* <img src="/images/resources/video-1-1.jpg" alt="" /> */}
                        <img src="/img/IMG_20210917_094200.png" alt="" className="" />
                            <div className="video-one__content">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})}/>
                                <div onClick={this.openModal} className="video-popup"><i
                                    className="fa fa-play"></i></div>
                                <h4 style={{color:"white"}} >Watch Our Video</h4>
                            </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="banner-one__content">
                            {/* <p className="banner-one__tag-line">Welcome to SEO Business <a href="#">free trial</a></p> */}
                            <h1>Larisi Dagangan Mereka,
                            <br/>Bantu Usaha Kecil di Masa Sulit</h1>
                            <h3>Mari kita bergandeng tangan menyiapkan sedekah terbaik kita<br/> larisi dagangan mereka untuk menjaga asa mereka tetap menyala.</h3>
                            <a href="#contact" data-target="#contact" className="thm-btn banner-one__btn scroll-to-target ">Donasi Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}
}
// export default P11;