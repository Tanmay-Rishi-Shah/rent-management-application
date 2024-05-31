import React from 'react'
import './AddResident.css';

const AddResident = () => {
    return (
        <div>


            <a href="admin_dashboard.html" className="btn btn--primary">Back</a>

            {/* ring div starts here */}

            <div className="ring">
                
                <i style="--clr:#00d5ff;"></i>
                <i style="--clr:#26ff00;"></i>
                <i style="--clr:#ffee00;"></i>
                <i style="--clr:#ff0000;"></i>
                <i style="--clr:#0d00ff;"></i>
                <i style="--clr:#ff00ff;"></i>

                <div className="login">
                    <h2>Add New Resident</h2>
                    <div className="inputBx">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Email" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Mobile Number" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Room Number" />
                    </div>
                    <div className="inputBx">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Add" />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default AddResident