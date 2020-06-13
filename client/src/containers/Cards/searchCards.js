import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchCards extends Component {
    render() {
        return (
            <div className="searchWrapper">
                <div className="">something here </div>
                <div className="control has-icons-right">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search Event Cards"
                    />
                    <span className="icon is-medium is-right">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(SearchCards)
