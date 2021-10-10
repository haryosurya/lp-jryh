import React from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css'

const P14 = () => {
    const params = {
        slidesPerView : 1,
        loop: true,
        speed: 1000,
        // spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 2
            },

            991:{
                slidesPerView : 2
            },

            767:{
                slidesPerView : 2

            },

            575:{
                slidesPerView : 1
            }
        }
        }
    return (

        <section className="" id="blog">
                <div className="container">
                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <h2>Siapa yang akan kita bantu?</h2>
                    </div>
                    <div className="col">
                        <Swiper {...params}>
                           
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">
                                            <h3>Gudeg Bu Santem
                                            </h3>
                                            <span>“Jualan saya sepi, mas.”</span>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">

                                            <h3>
                                            Lotek Bu Nyami
                                            </h3>
                                           <p>
                                           “Yang penting halal, gak macem-macem buat saya cukup.”
                                           </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">

                                            <h3>
                                            Jamu Bu Kasih
                                            </h3>
                                           <p>
                                           “Setelah corona, penghasilan saya sudah gak pasti.”
                                           </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>

                                        <div className="blog-one__content">

                                            <h3>
                                            Bubur Kacang Ijo Pak Abin
                                            </h3>
                                           <p>
                                           “Kalau gak habis, saya bagiin aja ke yang butuh.”
                                           </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="box">
                                <div className="wow fadeInLeft" data-wow-duration="1500ms">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/images/blog/blog-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="blog-one__content">
                                            <h3>
                                            Bambu Mbah Min
                                            </h3>
                                           <p>
                                           “Pokoknya sebisa-bisanya kita usaha.”
                                           </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        
                        </Swiper>
                        

                        
                    </div>
                </div>
        </section>
    )
}
export default P14;