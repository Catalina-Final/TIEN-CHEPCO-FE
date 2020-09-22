import React from 'react'
import './AdminDashStyle.css'
import AdminDashBg from '../../../images/admin-dash-bg.svg'
const AdminDashboard = () => {
    return (
        <div className="tien-admin-dashboard-style">
            <div className="tien-admin-body">
                <div className="tien-admin-sidebar">
                    <div className="bg-style">
                        <img src={AdminDashBg} alt="admin dashboard bg" />
                    </div>
                </div>
                <div className="tien-admin-content">
                    accounting here
            </div>
            </div>
        </div>
    )
}

export default AdminDashboard
