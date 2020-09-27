import React, { Component } from 'react';
import './AboutStyle.css'
// import ChepLocation from "../../images/chep-location.png"
const AboutPage = () => {

    return (
        <div className="about-page-style">

            <div className="about-wrap">
                <div className="about-page-content">


                    <p>🧲 Tiên phong trong việc chế biến sản phẩm thức uống từ hạt , giữ nguyên giá trị dinh dưỡng của từng loại hạt được nấu thành sữa thơm ngon nhất.</p>
                    <p>🔰 Thức uống không chất béo,không thêm đường, không chất bảo quản, đa dạng vitamin và dưỡng chất phù hợp cho mọi lứa tuổi, đặc biệt tốt cho cả Mẹ bầu.</p>
                    <p>🔰 Thích hợp chế độ giảm cân hợp lý.</p>
                    <p>🔰 Sữa mới mỗi ngày giao tận tay khách hàng.</p>
                    <p>🔰 Đảm bảo vệ sinh, an toàn thực phẩm.</p>
                    <hr />
                    <p>🔖 Bạn có thể đến mua trực tiếp tại cửa hàng tại địa chỉ</p>
                    <p> 20/13 Cô Bắc, phường 1, Quận Phú Nhuận.</p>
                    <p>📮 Inbox nhu cầu thiết yếu của bạn</p>
                    <p> ☎️ Hotline: 0902441261</p>
                </div>
                <div className="chep-map"></div>
            </div>
        </div>
    )
}

export default AboutPage
