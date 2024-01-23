import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { FetchSingleCardRequest } from '../../store/actions/cards'
import { Loader } from '../../components/common/loader'
import './cards.css'
import SetInnerHTML from '../../utils/setInnerHTML'
import DecoratedLine from '../../images/DecoratedLine.svg'

class SingleCard extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        const { FetchSingleCard } = this.props
        return FetchSingleCard(id)
    }

    render() {
        const { singleCard } = this.props
        return (
            <div className="singleCardPageWrapper">
                {singleCard.loading ? (
                    <Loader />
                ) : (
                    singleCard.data && (
                        <div
                            style={{
                                border: `${singleCard.data.border}`,
                                margin: '1rem',
                                borderRadius: '2px',
                                padding: '2rem',
                                backgroundColor: `${singleCard.data.backgroundColor}`,
                            }}
                        >
                            <span className="eventDateTimeWrapper">
                                <p className="subtitle is-6 dateDisplay">
                                    {singleCard.data.eventDateTime &&
                                        moment(
                                            singleCard.data.eventDateTime
                                        ).format('dddd, MMMM Do YYYY')}
                                </p>
                                <u>
                                    <b>
                                        {singleCard.data.eventDateTime &&
                                            moment(
                                                singleCard.data.eventDateTime
                                            ).fromNow()}
                                    </b>
                                </u>
                                <p className="subtitle is-6 dateDisplay">
                                    {singleCard.data.eventDateTime &&
                                        moment(
                                            singleCard.data.eventDateTime
                                        ).format('hh:mm a')}
                                </p>
                            </span>
                            <center>
                                {SetInnerHTML(singleCard.data.name)}
                                <img
                                    src={DecoratedLine}
                                    alt="Horizontal line"
                                />
                            </center>
                            {SetInnerHTML(singleCard.data.message)}
                        </div>
                    )
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    singleCard: state.singleCard,
})

const mapDispatchToProps = {
    FetchSingleCard: FetchSingleCardRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard)
