import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CheckBoxComponent } from '../../components/common/input'
import * as Actions from '../../store/actions/searchCards'
import { Loader } from '../../components/common/loader'
import { SingleCard } from '../../components/cards/singleCard'

class SearchCards extends Component {
    state = {
        // nameCheckBox: false,
        // tagCheckBox: false,
        searchParameter: '',
    }

    onChangeHandler = (e) => {
        const selectedName = e.target.name
        // if (selectedName === 'nameCheckBox') {
        //     return this.setState({
        //         [selectedName]: !this.state.nameCheckBox,
        //     })
        // } else if (selectedName === 'tagCheckBox') {
        //     return this.setState({
        //         [selectedName]: !this.state.tagCheckBox,
        //     })
        // } else {
        return this.setState({
            [selectedName]: e.target.value,
        })
        // }
    }

    onSubmitSearch = (e) => {
        if (e.which === 13) {
            const { searchParameter, tagCheckBox } = this.state
            const { searchByNameAction, searchByTagAction } = this.props
            // if (tagCheckBox) {
            // searchByTagAction(searchParameter)
            // }
            return searchByNameAction(searchParameter)
        }
    }

    render() {
        const { searchByName } = this.props
        return (
            <div style={{display:'block'}}>
            <div className="searchWrapper">
                {(searchByName.loading) && <Loader />}
                {/* <div className="searchParameters">
                    <p>Search By:</p>
                    <CheckBoxComponent
                        checkboxName="name"
                        name="nameCheckBox"
                        onchange={this.onChangeHandler}
                    />
                    <CheckBoxComponent
                        checkboxName="tags"
                        name="tagCheckBox"
                        onchange={this.onChangeHandler}
                    />
                </div> */}
                <div className="control has-icons-right">
                    <input
                        className="input searchInput"
                        type="text"
                        name="searchParameter"
                        placeholder="Search Event Cards"
                        onChange={this.onChangeHandler}
                        onKeyPress={this.onSubmitSearch}
                    />
                    <span
                        className="icon is-medium is-right searchInputCursor"
                        onKeyPress={this.onSubmitSearch}
                        onClick={this.onSubmitSearch}
                    >
                        <i className="fas fa-search searchInputCursor"  aria-hidden="true"></i>
                    </span>
                </div>

                
            </div>
            {/* search results */}
            <div style={{backgroundColor:'wheat', width:'200%'}}>
                should get here
                    {console.log(">>>>>>>>>>....searching..", searchByName.data)}
                    {searchByName.data !== undefined &&
                        searchByName.data.map((card) => {
                            <>
                            <p>...........||{card.name}..........|||</p>
                            {/* {console.log(">>>>>>>.......search cards.......", card.name)} */}
                            <SingleCard
                                key={card._id}
                                name={card.name}
                                message={card.message}
                            /></>
                        })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchByName: state.searchByName,
})

const mapDispatchToProps = {
    searchByNameAction: Actions.SearchCardsByNameRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCards)
