import React, { Component } from 'react'
import { SingleCard } from '../../../components/cards/singleCard'
import { connect } from 'react-redux'
import * as Actions from '../../../store/actions/cards'
import './home.css'
import { Loader } from '../../../components/common/loader'
import SEO from '../../../components/SEO'
import { CreateCardsDescription } from '../../../components/HomePage/createCardsDescription'
import Cards from '../cards'
import Modal from '../../../components/modal'
import SetInnerHTML from '../../../utils/setInnerHTML'
import DecoratedLine from '../../../images/DecoratedLine.svg'
import { withRouter } from 'react-router'

class HomePage extends Component {
    state = {
        modalOpen: false,
    }

    componentDidMount() {
        const { fetchUserCards } = this.props
        return fetchUserCards()
    }

    componentDidUpdate() {
        const { deleteCard } = this.props
        if (
            deleteCard.loading === false &&
            deleteCard.message === 'Event Card has been Deleted Successfully'
        ) {
            setTimeout(() => {
                return (location.href = '/dashboard')
            }, 1200)
        }
    }

    showModal = () => {
        this.setState({ modalOpen: true })
    }

    hideModal = () => {
        this.setState({ modalOpen: false })
    }

    onClickSingleCard = (id) => {
        const { FetchSingleCard } = this.props
        this.setState({ modalOpen: true })
        return FetchSingleCard(id)
    }

    render() {
        const { cards, singleCard, DeleteCardAction } = this.props
        const { loading, data } = cards
        return (
            <>
                <SEO title="Dashboard" />
                {loading ? (
                    <Loader />
                ) : (
                    <div className="container homePageWrapper">
                        {/* search your card here */}
                        <div
                            className="column"
                            style={{ display: 'flex', flexWrap: 'wrap' }}
                        >
                            {data !== undefined ? (
                                data.map((card) => (
                                    <SingleCard
                                        key={card._id}
                                        id={card._id}
                                        name={card.name}
                                        message={card.message}
                                        tags={card.tags}
                                        border={card.border}
                                        backgroundColor={card.backgroundColor}
                                        onClickSingleCard={
                                            this.onClickSingleCard
                                        }
                                        modalOpen={this.state.modalOpen}
                                    />
                                ))
                            ) : (
                                <>
                                    <CreateCardsDescription
                                        description="You Don't have any events Cards yet. You can proceed to view other cards 
                                                    or search a particular events"
                                    />

                                    {/* other peoples card/all cards in DB  */}
                                    <Cards />
                                </>
                            )}
                        </div>

                        {/* on click single card */}
                        {singleCard.data !== undefined && (
                            <Modal
                                show={this.state.modalOpen}
                                handleClose={this.hideModal}
                                loading={singleCard.loading}
                                isAuth={true}
                                onClickDelete={DeleteCardAction}
                                card={singleCard.data}
                                id={singleCard.data._id}
                            >
                                <div
                                    style={{
                                        border: `${singleCard.data.border}`,
                                        margin: '1rem',
                                        borderRadius: '2px',
                                        padding: '2rem',
                                        backgroundColor: `${singleCard.data.backgroundColor}`,
                                    }}
                                >
                                    <center>
                                        {SetInnerHTML(singleCard.data.name)}
                                        <img
                                            src={DecoratedLine}
                                            alt="Horizontal line"
                                        />
                                        {SetInnerHTML(singleCard.data.message)}
                                    </center>
                                </div>
                            </Modal>
                        )}
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.userCards,
    singleCard: state.singleCard,
    deleteCard: state.deleteCard,
})

const mapDispatchToProps = {
    fetchUserCards: Actions.FetchUserCardsRequest,
    FetchSingleCard: Actions.FetchSingleCardRequest,
    DeleteCardAction: Actions.DeleteCardRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
