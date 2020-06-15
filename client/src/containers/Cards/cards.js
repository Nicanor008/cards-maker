import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    FetchCardsRequest,
    FetchSingleCardRequest,
} from '../../store/actions/cards'
import * as Actions from '../../store/actions/searchCards'
import { Loader } from '../../components/common/loader'
import SearchSingleCard, { SingleCard } from '../../components/cards/singleCard'
import './cards.css'
// import SearchCards from './searchCards'
import Modal from '../../components/modal'
import SetInnerHTML from '../../utils/setInnerHTML'
import DecoratedLine from '../../images/DecoratedLine.svg'
import SearchCard from '../../components/cards/searchCard'

class Cards extends Component {
    state = {
        modalOpen: false,
        searchParameter: '',
        displaySearch: false,
    }
    componentDidMount() {
        const { FetchAllCards } = this.props
        return FetchAllCards()
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

    onChangeHandler = (e) => {
        const selectedName = e.target.name
        if (e.target.value === '') {
            this.setState({ displaySearch: false })
        } else {
            this.setState({ displaySearch: true })
        }
        this.setState({
            [selectedName]: e.target.value,
        })

        // search cards
        const { searchParameter } = this.state
        const { searchByNameAction, searchByTagAction } = this.props
        setTimeout(() => {
            searchByTagAction(searchParameter)
            return searchByNameAction(searchParameter)
        }, 1000)
    }

    onSubmitSearch = (e) => {
        if (e.which === 13) {
            const { searchParameter, tagCheckBox } = this.state
            const { searchByNameAction, searchByTagAction } = this.props
            this.setState({ displaySearch: true })
            searchByTagAction(searchParameter)
            return searchByNameAction(searchParameter)
        }
    }

    render() {
        const { loading, data } = this.props.cards
        const { singleCard, searchByName, searchByTag } = this.props
        return (
            <div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="allCardsWrapper">
                        {/* <SearchCards /> */}
                        <SearchCard
                            onChangeHandler={this.onChangeHandler}
                            onSubmitSearch={this.onSubmitSearch}
                            displaySearch={this.state.displaySearch}
                            data={searchByName || searchByTag}
                            modalOpen={this.state.modalOpen}
                            onClickSingleCard={this.onClickSingleCard}
                        />
                        
                        <div className="cardsWrapper">
                            {data !== undefined &&
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
                                ))}
                        </div>

                        {/* on click single card */}
                        {singleCard.data !== undefined && (
                            <Modal
                                show={this.state.modalOpen}
                                handleClose={this.hideModal}
                                loading={singleCard.loading}
                            >
                                <div
                                    style={{
                                        border: `${singleCard.data.borderWidth} ${singleCard.data.border} ${singleCard.data.borderColor}`,
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.fetchAllCards,
    singleCard: state.singleCard,
    searchByName: state.searchByName,
    searchByTag: state.searchByTag,
})

const mapDispatchToProps = {
    FetchAllCards: FetchCardsRequest,
    FetchSingleCard: FetchSingleCardRequest,
    searchByNameAction: Actions.SearchCardsByNameRequest,
    searchByTagAction: Actions.SearchCardsByTagRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
