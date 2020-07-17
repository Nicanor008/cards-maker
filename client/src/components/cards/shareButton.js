import React from 'react'
import './shareButton.css'

const OnShareButton = () => {
    document.getElementById('shareDropdown').classList.toggle('show')
}

window.onclick = function (event) {
    if (!event.target.matches('.cardShareIcon')) {
        var dropdown = document.getElementsByClassName('shareDropdownContent')
        var i
        for (i = 0; i < dropdown.length; i++) {
            var openDropdown = dropdown[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}

const ShareButton = ({ id }) => {
    const pageUrl = `${window.location.origin}/event/${id}`
    return (
        <div className="shareWrapper">
            <i
                className="fas fa-share-alt cardShareIcon"
                aria-hidden="true"
                onClick={() => OnShareButton()}
            ></i>
            <div id="shareDropdown" className="shareDropdownContent">
                <a
                    href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=I've Created an awesome Event Card on Cards Maker. Check it Out`}
                    target="_blank"
                >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?url=#${pageUrl}&[title]=I've Created an awesome Event Card on Cards Maker. Check it Out`}
                    target="_blank"
                >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default ShareButton
