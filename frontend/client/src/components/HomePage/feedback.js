import React from 'react'

const AskFeedback = () => {
    return (
        <div className="askFeedbackWrapper">
            <p className="subtitle">
                We would love to hear from you. Fill in the survey below or
                follow{' '}
                <a href="https://forms.gle/EYvt7RCXoZ2QcvJP8">this link</a>
            </p>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdJMYXKE-bhjMDnWCOHFJ9iRNHXDTORjz00pP_feVnjixy1fg/viewform?embedded=true"
                style={{
                width:"740",
                height:"1523",
                frameborder:"0",
                marginheight:"0",
                marginwidth:"0"}}
            >
                Loading…
            </iframe>
        </div>
    )
}

export default AskFeedback
