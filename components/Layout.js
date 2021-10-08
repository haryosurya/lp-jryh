import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
    return(
        <div>
            <Head>
                {/* <title>{props.pageTitle}</title>
                <meta charSet="utf-8" />
                <meta name="description" content={props.desc} />
                <meta property="og:type" content="website" />
                <meta name="og:title" property="og:title" content={props.pageTitle} />
                <meta name="og:description" property="og:description" content={props.desc} />
                <meta property="og:site_name" content={window.location.href + "//" + window.location.hostname } />
                <meta property="og:url" content={window.location.href} />  
                <meta name="twitter:card" content="summary" /> 
                <meta name="twitter:title" content={props.pageTitle} />
                <meta name="twitter:description" content={props.desc}/>
                <meta name="twitter:site" content={window.location.href} />
                <meta name="twitter:creator" content={props.creator} />
                <meta property="og:image" content={props.largeimage} />  
                <meta name="twitter:image" content={props.largeimage} />   
                <link rel="canonical" href={window.location.href} /> */}
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href={props.icons} />
                <link rel="icon" type="image/png" sizes="32x32" href={props.icons} />
                <link rel="icon" type="image/png" sizes="16x16" href={props.icons} />
            </Head>

            <div className="page-wrapper">

            {props.children}

            </div>

        </div>
    )
}
export default Layout;