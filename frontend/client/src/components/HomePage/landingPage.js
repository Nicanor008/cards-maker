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
            {/* <Cards featuredPage={true} /> */}
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

            <div className="container youTubeVideo">
                <center>
                    <iframe
                        width="860"
                        height="515"
                        src="https://www.youtube.com/embed/GYcoQRYeojI"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                    ></iframe>
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
                            View Events
                        </p>
                        <p className="rowTextContent">
                            All and single events are displayed in an organized
                            logical manner. Plus you can search for an event. A
                            good way to view all and individual events. See the
                            important stuff for the event.
                        </p>
                    </div>
                    <div className="column">
                        <p className="bd-notification is-primary rowHeader">
                            Share
                        </p>
                        <p className="rowTextContent">
                            The Quick way to let your colleagues know the party
                            is going to happen, Share the link privately, on
                            Social Media or invite your friends to view.
                        </p>
                    </div>
                </div>

                <br />
                <br />

                <CreateCardsDescription description="Rely on the Cards Maker Playground to create beautiful Event Cards through Real time Output on What You See is What You Get technique." />
            </div>
            {/* feedback */}
            <AskFeedback />

            {/* next version */}
            <NextVersion />
        </>
    )
}

export default LandingPage
