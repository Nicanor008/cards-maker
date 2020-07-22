import React from 'react'
import Version from '../../images/unboxing.svg'

const NextVersion = () => {
    return (
        <div className="columns nextVersionWrapper" style={{marginBottom:'0'}}>
            <div className="column imageVersion">
                <img src={Version} alt="Image Versioning" />
            </div>
            <div className="column textDescWrapper" style={{marginTop:'5rem'}}>
                <p className="title is-5" style={{ color: 'white' }}>
                    Features in Development
                </p>
                <p className="subtitle">Coming up soon</p>
                <div className="content">
                    <ul type="1">
                        <li>Use Template of choice to creating cards</li>
                        <li>Download Event Cards</li>
                        <li>Cards Maker Social Media pages</li>
                        <li>Buy me a coffee option or Pricing Page</li>
                        <li>Invite users to private events</li>
                        <li>Change the Landing Page</li>
                        <li>Acquire a Cards Maker domain</li>
                        <li>Product advertising and marketing</li>
                        <li>User and Event Card Analytics</li>
                        <li>Calendar sync</li>
                        <li>Event Reminder</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NextVersion
