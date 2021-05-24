import React from 'react';

export const About=()=>{

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="header">About</h1>
                </div>
            </div>
            <div className="row mt-5 ">
                <div className='col-sm-6'>
                    <h1 className="header2 mt-5" style={{fontSize: '2vw'}}>The Vision</h1>
                </div>
                <div className="col-sm-6">
                    <p >Our vision is to empower and inspire the nonprofit sector. Whether a ministry or 
                        community-based organization, or a housing agency or educational institution.
                        We exists to meet the operational needs of the nonprofit sector and help you
                        focus on your mission. We help launch, grow, and fund community and faith-based 
                        organizations around the country. Our unique and customized approach to inspiring, 
                        sharing, and challenging others is unlike any other. We specialize in small to mid-size 
                        organizations and bring real-life experience to the table. Our president and principal 
                        owner has served as a volunteer, executive director, board member, and pastor...and understands 
                        the unique challenges of serving in both rural and urban settings.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className='col-sm-6'>
                    <h1 className="header2 mt-5" style={{fontSize: '2vw'}}>The Story</h1>
                </div>
                <div className="col-sm-6">
                    <p >The seed was planted in the heart of a small nucleus of teenagers whose lives crossed one another's 
                        paths in the Mid-Hudson Valley in upstate New York. At a young age they dedicated their hearts to God 
                        and lives to ministry and serving others. With the help and support of nurturing parents and supportive 
                        churches, they started a faith-based nonprofit ministry. It was launched as an evangelistic tool to provide 
                        inspiration, encouragement, as well as wholesome and nurturing environments and activities for other young people. 
                        After Derek, one of the three, left for college to prepare for pastoral ministry, the team gradually began shiftting 
                        its focus to serving felt-needs in under-resourced communities. Upon finishing college and entering his first pastorate 
                        in the state of Mississippi, he began his work by combining a traditional pastoral approach with a community-development 
                        emphasis to serve the needs of the congregation and community. Since those early days all of them - Derek Lane, Joe Sparks, 
                        and David Guerrero, have spent the last thirty-plus years engaged in various aspects of ministry with a goal of encouraging
                        others and empowering communities.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h1 className="header2" style={{fontSize: '3vw'}}>Meet our President/Owner</h1>
                </div>
                <div className="col mt-5">
                    <img src={dLane} alt="Derek Lane"/>
                    <h2 className="mt-5">Derek L Lane, Founder & CEO</h2>
                    <p>Derek L. Lane is the Principal owner of The Lane Consulting Group, 
                        an agency that provides workshops, training, and consulting services 
                        for community and faith-based organizations throughout the U.S. Some 
                        of his clients include World Vision, the U.S.Department of Housing and Urban Development,
                        the Chamber of Commerce, and the Christian Community Development Association. 
                        He has launched over a dozen non-profit agencies and secured over $20 million in grants 
                        and resources over the past 30 years as an executive director, board president, consultant and pastor. 
                        He is an ordained minister and graduate of Oakwood University, MS State University,
                        and NELI-the Nonprofit Executive Leadership Institute. In 2013 he was selected as a Peer Reviewer 
                        for the Standards of Excellence©Institute and currently serves as pastor of the Mt. Moriah SDA Church 
                        in Phenix City, Alabama, a fundraising consultant for the North American Division's Philanthropic Services 
                        for Institutions (PSI), and is the Director of Membership for Southern Union's Adventist Laymen's Services 
                        and Industries (ASI).
                    </p> <br/>
                    <p>He is married to Mae Aldridge-Lane and they have four adult children. 
                        He enjoys public speaking and writing and is passionate about helping communities 
                        and faith-based organizations make an impact where they serve.
                    </p><br/>
                    <p>The Lane Consulting Group conducts grant-writing and other capacity-building workshops 
                        for community and faith-based organizations throughout the country and subcontracts services
                        to local event organizers interested in a sideline opportunity for themselves or a fundraiser 
                        for their organization. Reach out to us about hosting a workshop in your community!
                    </p><br/>
                </div>
            </div>
        </div>
    )
}

const dLane = './images/derekLane.jpeg'