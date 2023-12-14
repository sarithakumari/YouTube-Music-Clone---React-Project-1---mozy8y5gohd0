import React from 'react'

export default function Subscription() {
    return (
        <div>
            <>
                <div className='backdiv'>
                    <div className='greybox'>
                        <span className='subimg'><img src='\tylogo.png' /></span>
                        <h2 className='subhed'>Get Music Premium to listen to music ad-free, offline & with your screen off</h2>
                        <br></br>
                        <br></br>
                        <button className='subtn'>Get Music Premium</button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h5 className='subp'>Prepaid and subscription plans availabe. Prices start at Rs.99.00/month. Free trials available with subscription plans only.</h5>
                    </div>
                    <div className='box-container'>
                        <div className="box">
                            <i className="fa-solid fa-headphones"></i>
                            <p className='headphone'>Listen in the background</p>
                            <p className='subpara'>Don't worry about your music stopping</p>
                        </div>
                        <div className="box"><i className="fa-regular fa-circle-play"></i>
                        <p className='headphone2'>Ad-free music</p>
                        <p className='subpara2'>Listen to the world of music without ads</p>
                        </div>
                        <div className="box">
                        <i className="fa-regular fa-circle-down"></i>
                        <p className='headphone2'>Download and go</p>
                        <p className='subpara2'>Listen to your favorite music on the go</p>
                        </div>


                    </div>
                </div>
            </>
        </div>
    )
}
