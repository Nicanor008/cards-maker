import React from 'react'
import Version from '../../images/unboxing.svg'

const NextVersion = () => {
    return (
        <div className="columns nextVersionWrapper" style={{marginBottom:'0'}}>
            <div className="column imageVersion">
                <img src={Version} alt="Image Versioning" />
            </div>
            <div className="column textDescWrapper">
                <p className="title is-5" style={{ color: 'white' }}>
                    Features in Development
                </p>
                <p className="subtitle">Coming up on August 2020</p>
                <div className="content">
                    <ul type="1">
                        <li><strike>Upload image(s) during card while creating/updating</strike></li>
                        <li>Use Template while creating cards</li>
                        <li><strike>User manage Account</strike></li>
                        <li>Video Tutorial on how to create</li>
                        <li>Download Cards</li>
                        <li><strike>Share Event Cards</strike></li>
                        <li>Invite Users to view Cards</li>
                        <li><strike>View Event Date and Author name on card</strike></li>
                        <li><strike>Feature Event Cards</strike></li>
                        <li><strike>Archive Past Events</strike></li>
                        <li><strike>Maximum Characters on The Event Title on Creation and Display</strike></li>
                        <li>Cards Maker Social Media pages</li>
                        <li>Buy me a coffee option or Pricing Page</li>
                        <li>Oauth Social Login</li>
                        <li><strike>Terms and Conditions page</strike></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NextVersion
