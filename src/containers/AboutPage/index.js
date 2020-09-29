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
                <div className="chep-map" onClick={() => window.open('https://www.google.com/maps/place/Ch%C3%A9p+%26+Co+-+S%E1%BB%AFa+T%E1%BB%AB+H%E1%BA%A1t/@10.7963128,106.6806627,17z/data=!4m16!1m10!4m9!1m4!2m2!1d106.633179!2d10.755243!4e1!1m3!2m2!1d106.6828247!2d10.7963106!3m4!1s0x31752fb0d06ede5d:0x30db7f446db3653f!8m2!3d10.7963128!4d106.6828514', '_blank')}>

                </div>
            </div>
        </div>
    )
}

export default AboutPage
