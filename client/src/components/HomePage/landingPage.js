import React from 'react'
import './homePage.css'

import LoveIcon from '../../images/Love2Icons.svg'
import SEO from '../SEO'
import { CreateCardsDescription } from './createCardsDescription'
import NextVersion from './nextVersion'
import AskFeedback from './feedback'
import Cards from '../../containers/Cards/cards'

const LandingPage = () => {
    return (
        <>
            <SEO title="Cards Maker" />
            {/* image */}

            {/* <ThreeFeaturedEvents /> */}
            <Cards featuredPage={true} />
            <div className="bodyWrapper love2Icons">
                <center>
                    <figure className="is-centered">
                        <img
                            alt="Love Icons"
                            src={LoveIcon}
                            className="LoveIcons image"
                            width="800"
                        />
                    </figure>
                </center>
            </div>

            {/* about cards maker description */}
            <div className="container columnDescriptionWrapper">
                <div className="columns">
                    <div className="column">
                        <p className="bd-notification is-primary rowHeader">
                            Create
                        </p>
                        <p className="rowTextContent">
                            With technology trends, we bring you the traditional
                            Event Card writing to you. With CardsMaker, you've
                            complete control on how you want your event card to
                            look. Real time writing, What you see is what you
                            get on the Card
                        </p>
                    </div>
                    <div className="column">
                        <p className="bd-notification is-primary rowHeader">
                            Collaborate
                        </p>
                        <p className="rowTextContent">
                            <strong>Coming out on the new Version 2</strong>,
                            soon, we bring your Event's buddies to you,
                            collaborate to write/edit a single card and share it
                            with the world. We believe, Two are better than One
                        </p>
                    </div>
                    <div className="column">
                        <p className="bd-notification is-primary rowHeader">
                            Share
                        </p>
                        <p className="rowTextContent">
                            The Quick way to let your colleagues know the party is going to happen, Share the link
                            privately, on Social Media or invite your friends to
                            view.
                            <strong>Coming Soon</strong>
                        </p>
                    </div>
                </div>

                <br />
                <br />

                <CreateCardsDescription
                    description="You got an event coming, Create a card, and share with your colleagues."
                />

                
            </div>
            {/* feedback */}
            <AskFeedback />

            {/* next version */}
            <NextVersion />
        </>
    )
}

export default LandingPage
