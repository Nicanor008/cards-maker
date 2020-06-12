import React from 'react'

function SetInnerHTML(value, paddingvalue) {
    return (
        <p
            dangerouslySetInnerHTML={{
                __html: value,
            }}
            style={{ padding: paddingvalue }}
        />
    )
}

export default SetInnerHTML
