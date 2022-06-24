import React from 'react';
import "./header.css";
function Header()
{
    return (
        <div className="header">
            <div className="headerContainer">
                <h1 className="headerTitle">Tìm &amp; đặt phòng khách sạn giá rẻ chỉ với <br/> 3 bước đơn giản ! </h1>   
                <p className="headerDesc">Khám phá ngay những ưu đãi tốt nhất dành cho bạn tại Book4Fun.</p>  
                <button className="headerBtn">Đăng nhập / Đăng ký</button>   
            </div>
        </div>
        
    )
}
export default Header;