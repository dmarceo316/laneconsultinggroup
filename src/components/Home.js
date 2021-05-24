import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Home =() => {
AOS.init();

    return(
        <div className="container-fluid">
            <div 
            className="row"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center', 
                backgroundSize: 'cover',
                height: '700px'
            }}>
                <div
                data-aos="zoom-in" 
                className="col-12 text-center">
                    <h1 className="text-white header">Providing training, workshops, and consulting services,</h1>
                    <h4 className="text-white header2">to launch, grow, and fund your nonprofit or faith-based organization</h4>
                    <button type="button" className="btn btn-outline-light btn-lg mt-3">GET IN TOUCH</button>
                </div>
            </div>
            <div
            className="row"
            style={{ 
                height: '1000px',
                marginBottom: '50px'
            }}
            >
                <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12">
                    <h1 className="text-dark header"
                    style={{ fontSize: '7vw'}}
                    >Launching</h1>
                    <h2 className="mt-5 header2">Are you interested in launching a 501c3 nonprofit or faith-based organization?
                        Let us help you file the organizing documents. We offer the help you need to get started;
                        articles of incorporation, bylaws, 1023's, etc., just let us know!
                    </h2>
                    <h1
                    data-aos="fade-down"
                    data-aos-duration="1000" 
                    className="mt-5"><i className="fa fa-flag-o fa-2x" aria-hidden="true"></i></h1>
                </div>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-duration="1000"
            className="row"
            style={{ 
                backgroundColor: '#3185FC',
                height: '1000px'
            }}
            >
                <div className="col-12">
                    <h1 className="text-light header"
                    style={{ fontSize: '7vw'}}
                    >Growing</h1>
                    <h2 className="mt-5 text-light header2">Need assistance with strategic planning, organizational development,
                    leadership training, staff development? Lane Consulting offers an array of training workshops
                    and tools to help take your nonprofit to the next level.
                    </h2>
                    <h1
                    data-aos="fade-down"
                    data-aos-duration="1000" 
                    className="mt-5"><i className="fa fa-line-chart fa-2x" aria-hidden="true" style={{color: 'white'}} ></i></h1>
                </div>
            </div>
            <div 
            className="row"
            style={{ 
                height: '1000px'
            }}
            >
                <div 
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12">
                    <h1 className="text-dark header"
                    style={{ fontSize: '7vw'}}
                    >Funding</h1>
                    <h2 className="mt-5 text-dark header2">New to fundraising or just need a refresher?
                    We've secured over $20 million for clients! And we share our secrets of success through proposal-writing 
                    & capacity-building workshops that will propel you towards your vision!
                    </h2>
                    <h1
                    data-aos="fade-down"
                    data-aos-duration="1000" 
                    className="mt-5"><i class="fa fa-usd fa-2x" aria-hidden="true"></i></h1>
                </div>
            </div>
            <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="row"
            style={{ 
                backgroundColor: '#3185FC',
                height: '1000px'
            }}
            >
                <div className="col">
                    <h1 className="text-light header"
                    style={{ fontSize: '6vw'}}
                    >Tools of the Trade</h1>
                    <h2 className="mt-5 text-light header2">We offer a customized organizational assessment to help measure the health of your nonprofit. Our unique model focuses in three key areas:<br/><br/>
                    1. Operations and Technical Support.<br/><br/>
                    2. Collaborations and Strategic Partnerships.<br/><br/>
                    3. Stewardship/Resource Development.
                    </h2>
                    <button type="button" className="btn btn-outline-light btn-lg mt-5">GET IN TOUCH</button>
                </div>
            </div>
        </div>
    )
}

const bgImage = './images/team.jpg'