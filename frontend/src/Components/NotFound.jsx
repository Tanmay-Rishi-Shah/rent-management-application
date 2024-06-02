import React from 'react'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="text">
                    <h1>Page Not Found</h1>
                    <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
                    <button>Go to Home Page</button>
                </div>
                <div><img className="image" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt="" /></div>
            </div>
        </div>

    )
}

export default NotFound