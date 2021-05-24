import React from 'react';

export const Services = () =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="header">Services</h1>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="header2">Description of Services & Fees</h1>
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne" style={{backgroundColor: '#3185FC'}}>
                                <h5 className="mb-0">
                                    <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Filing IRS 1023 Application Only 
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                    We assist with the filing of the IRS 1023 application to become a tax-exempt organization. 
                                    If you are a newly-formed nonprofit and need assistance filing the IRS form 1023 leading to 
                                    tax-exempt status for your organization, we can help.  Cost: $1,500
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo" style={{backgroundColor: '#3185FC'}}>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Full-Launch Filing
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                    We also assist with the development and filing of all necessary state and federal documents 
                                    leading to tax-exempt status. Besides the IRS Form 1023, we also assist with the Articles 
                                    of Incorporation, By-laws, & other necessary documents. Cost: $2,300
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree" style={{backgroundColor: '#3185FC'}}>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Capacity-Building Benchmarking Tool
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                    The Capacity-Building Benchmarking Tool is an assessment tool designed by the Lane Consulting Group
                                    to take community and faith-based organizations (including Christian Community Development Association 
                                    members) to the next level through what we call the "organizational check-up." It's typically used with 
                                    our strategic planning sessions but may also be used as a separate session and way to help identify 
                                    strengths and areas for improvement using a spreadsheet measuring key benchmarks along 8 different 
                                    areas including; 1) Board of Directors, 2) Strategic Planning, 3) Program Monitoring, 
                                    4) Community Linkages & Partnerships, 5) Resource Development & Fundraising, 
                                    6) Information Technology, 7) Managing Staff & Volunteers, and 8) 
                                    Financial Management. 1/2 day session. Cost $1,500
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree" style={{backgroundColor: '#3185FC'}}>
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            Strategic Planning
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion" >
                                        <div class="card-body">
                                        The strategic planning process is typically a one or two-day session that takes the board 
                                        & staff through a process to either develop or clarify its mission, vision, and goals for the future. 
                                        Cost: $3,000 1-day session; $4,500 2-day session
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="header2">Workshops</h1>
                    </div>
                </div>
                    <div className="row">
                        <div className='col'>
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne" style={{backgroundColor: '#3185FC'}}>
                                        <h5 class="mb-0">
                                            <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Introduction to Community-based Ministry
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                        (For Faith-based Clients) 1/2-day or weekend workshop designed to introduce churches and faith-based
                                        groups to a Biblically-centered exploration and application of community-based ministry. Raise the
                                        impact your church may have using Biblical, market-based strategies for outreach and ministry. Cost:
                                        1/2 day session, $1,500; wknd session (including sermon during worship hour) $2,300.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo" style={{backgroundColor: '#3185FC'}}>
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Funding the Vision: An Introduction to Grant-Writing for Community & Faith-based Organizations 
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                        A 1/2 day session for public agencies, housing authorities, community and/or faith-based organizations.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree" style={{backgroundColor: '#3185FC'}}>
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Topics covered:
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                        * Launching a Nonprofit - securing 501c3 status<br/>
                                        * Measuring your "organizational health" - Are you ready to write?<br/>
                                        * Show Me the Money! (Most popular segment) Where to find grants (an interactive exercise which also shares valuable information about local funding sources and the most important website you've never heard of!)<br/>
                                        *Power Lunch - Panel discussion: "Strengthening Your Nonprofit Capacity - Building Relationships & Attracting Resources" Special Guests Panelists include leaders in the philanthropic and nonprofit sector; <br/>       
                                        * The anatomy of a proposal - An overview of the various parts of an application & why they ask for it! <br/>                                                                                                                                        
                                        Cost: from $59-$109/participant - Contact us about flat fees or group rates. <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col">
                        <h1 className="header2">Continuing Education & Professional Development Classes - (For Colleges & Universities Only)</h1>
                    </div>
                </div>
                    <div className="row">
                        <div className='col'>
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne" style={{backgroundColor: '#3185FC'}}>
                                        <h5 class="mb-0">
                                            <button class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Grant-Writing 101
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                        Time Frame: 2 sessions, 3 hrs each <br/>                                                                                                  
                                        Description: This session is an overview for launching, growing, and funding a nonprofit. 
                                        Topics include; securing 501c3 status; measuring organizational health, finding grants, and preparing a grant proposal. 
                                        This session is especially designed for those new to grant-writing and nonprofit work. <br/>
                                        Fee: $179/participant
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo" style={{backgroundColor: '#3185FC'}}>
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Launching a Nonprofit
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                        Time Frame: 2 sessions, 3 hrs each  <br/>                                                                                              
                                        Description: This session provides the steps for starting a nonprofit 
                                        from securing a board to registering and reserving a name to providing 
                                        an overview of the 501c3 application for tax-exempt status.<br/>
                                        Fee: $179/participant
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree" style={{backgroundColor: '#3185FC'}}>
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Fundraising for Nonprofits
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                        Time Frame: 2 sessions, 3 hrs each <br/>                                                                                                     
                                        Description: An overview of fundraising strategies for long-term sustainability. 
                                        Includes areas such as planned giving, major donor solicitation, special events, 
                                        and capital campaigns. Especially helpful for nonprofit institutions & community-based 
                                        organizations. <br/>
                                        Fee: $179/participant    
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree" style={{backgroundColor: '#3185FC'}}>
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Grant-Writing Bootcamp
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                        Time Frame: M, T, Th - 3 hrs each session  <br/>                                                                                          
                                        Description: Whether you’ve written a few proposals or just getting started, this invigorating course is designed to equip you with the skills and tools needed to manage a nonprofit as well as prepare, research, and write successful proposals.
                                        This course is especially helpful for nonprofits without a full-time development staff. Participants will prepare, submit, and review mock proposals.<br/>
                                        Fee: $239/participant <br/>
                                        *Fees are shared between LCG and host college/university
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-6">
                                <h1 className="header2">Host Benefits</h1>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                * The Lane Consulting Group waives the fee for up to 3 staff persons from the host organization or agency <br/>
                                * For community-based workshops, local event organizers and host organizations have an opportunity to utilize 
                                training events as a fundraiser or sideline opportunity. <br/>
                                </p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-6">
                                <h1 className="header2">Committed to Community</h1>
                            </div>
                            <div className="col-sm-6">
                                <p>
                                The Lane Consulting Group works to build the capacity of nonprofits from start to finish - 
                                from securing your 501c3 tax-deductible status to grant-writing. The owner, Derek Lane, 
                                has helped launch over a dozen agencies and written or co-authored over $20 million 
                                in grants and resources for community and faith-based organizations.
                                </p>
                            </div>
                        </div>
                    </div>
    )
}