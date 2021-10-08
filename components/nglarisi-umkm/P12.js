import Image from 'next/image';
import React from 'react';

const P12 = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        {/* <span className="block-title__bubbles"></span> */}
                        <h2>&ldquo;(Hidup) Naik-turun, mas. Sekarang bisa balik modal aja Alhamdulillah … &rdquo;</h2>
                        <span>-Ibu Penjual Lotek, Tamansiswa</span>
                    </div>
                    <div className="box-body">
                        <div className="row block">
                            {/* <Image src="/images/resources/video-1-1.jpg" alt="Ibu Penjual Lotek" width={1170} height={581} layout="responsive" /> */}
                            <img src="/images/resources/video-1-1.jpg" alt="Ibu Penjual Lotek" />
                        </div>
                    </div>
                </div>

            </section>

        )
}
export default P12;