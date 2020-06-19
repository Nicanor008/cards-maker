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
                        <li>Upload image(s) during card while creating/updating</li>
                        <li>Use Template while creating cards</li>
                        <li>User manage Account</li>
                        <li>Video Tutorial on how to create</li>
                        <li>Download Cards</li>
                        <li>Share Event Cards</li>
                        <li>Invite Users to view Cards</li>
                        <li>View Event Date and Author</li>
                        <li>Feature Event Cards</li>
                        <li>Cards Maker Social Media pages</li>
                        <li>Buy me a coffee option or Pricing Page</li>
                        <li>Oauth Social Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NextVersion