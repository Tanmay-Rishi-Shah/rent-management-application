import React from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
    return (
        <div className='body'>
            <div className="sidebar">
                <div className="room-number">Room No.</div>
                <button>102</button>
                <button>103</button>
                <button>104</button>
                <button>104</button>
                <button>105</button>
                <button>106</button>
                <button>107</button>
                <button>108</button>
                <button>102</button>
                <button>103</button>
                <button>104</button>
                <button>104</button>
                <button>105</button>
                <button>106</button>
                <button>107</button>
                <button>108</button>
                <button>102</button>
                <button>103</button>
                <button>104</button>
                <button>104</button>
                <button>105</button>
                <button>106</button>
                <button>107</button>
                <button>108</button>
                <button>102</button>
                <button>103</button>
                <button>104</button>
                <button>104</button>
                <button>105</button>
                <button>106</button>
                <button>107</button>
                <button>108</button>
                <button>102</button>
                <button>103</button>
                <button>104</button>
                <button>104</button>
                <button>105</button>
                <button>106</button>
                <button>107</button>
                <button>108</button>
            </div>
            <div className="main-content">
                <div className="header">
                    <div className="quote">Rand between Quotes</div>
                    <button className="logout">Logout</button>
                </div>
                <div className="center-content">
                    <img src="https://storage.googleapis.com/support-forums-api/attachment/thread-222109884-12757004031274789691.jpg"
                        alt="Payment Info" className="payment-info" />
                    <div className="message-box">Message from Resident</div>
                </div>
                <div className="footer">
                    <button className="button green">Payment Received</button>
                    <button className="button red">Payment Not Received</button>
                    <button className="button black"><a href="add-new-resident.html">Add New Resident</a></button>
                    <button className="button grey">Call To Resident</button>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard