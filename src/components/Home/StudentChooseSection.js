import React from 'react';
import Link from 'next/link';

const StudentChooseSection = () => {
    return (
        <div className="student-choose-area fix pt-120 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-5">
                  <div className="student-wrapper">
                     <div className="section-title mb-30">
                        <h2>Câu chuyện của <span className="down-mark-line">CodeSpace</span></h2>
                     </div>
                     <div className="sitdent-choose-content">
                        <p>Đội ngũ CodeSpace Việt Nam được vận hành bởi nhóm lập trình viên và chuyên gia nhân sự làm việc trong lĩnh vực công nghệ thông tin. May mắn được làm việc hằng ngày, tiếp cận và cập nhật bởi các công nghệ mới nhất hiện nay, chúng tôi thấy được sức ảnh hưởng và tầm quan trọng của công nghệ đối với đời sống. Chính vì vậy, mang nguyện vọng đưa công nghệ đến gần hơn cho hàng triệu trẻ em Việt Nam, CodeSpace mong muốn đem giáo dục về công nghệ và tư duy lập trình đến với các em.

                        </p>
                     </div>
                     <div className="student-choose-list">
                        <ul>
                           <li><i className="fas fa-check-circle"></i>Giúp trẻ em tiếp cận lập trình một cách trực quan, thú vị, học mà chơi, không đặt nặng kiểm tra mà thay vào đó là khả năng ứng dụng kiến thức vào phát triển dự án. </li>
                           <li><i className="fas fa-check-circle"></i>Đào tạo tư duy máy tính và lập trình chuyên nghiệp trực tiếp bởi các kỹ sư và các chuyên gia trong ngành</li>
                           <li><i className="fas fa-check-circle"></i>Định hướng và giúp trẻ trở thành 1 người dùng công nghệ thông minh, đúng cách</li>
                           <li><i className="fas fa-check-circle"></i>Phương pháp đào tạo theo mô hình STEAM cho phép học sinh kết nối việc học với sự khám phá và sáng tạo, liên kết với các môn học và kiến thức xã hội giúp nâng cao hiệu suất học tập, tăng cường học tập trực quan</li>
                           <li><i className="fas fa-check-circle"></i>Phát triển lối tư duy tự tìm hiểu, tự học và đào sâu phát triển kỹ năng giải quyết vấn đề từ gốc rễ</li>
                           <li><i className="fas fa-check-circle"></i>Truyền cảm hứng và khơi dậy sự sáng tạo, niềm đam mê công nghệ cho trẻ</li>
                        </ul>
                     </div>
                     <div className="student-btn">
                        <Link href="/gioi-thieu"><a className="edu-sec-btn">Xem thêm về chúng tôi</a></Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2">
                  <div className="student-wrapper position-relative">
                     <div className="shap-01">
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5">
                  <div className="student-choose-wrapper position-relative">
                     <div className="shap-02">
                     </div>
                     <div className="shap-03">
                        <img src="/assets/img/shape/student-shape-03.png" alt="image not found"/>
                     </div>
                     <div className="shap-04">
                        <img src="/assets/img/shape/student-shape-04.png" alt="image not found"/>
                     </div>
                     <div className="shap-05">
                        <img src="/assets/img/shape/student-shape-05.png" alt="image not found"/>
                     </div>
                     <div className="shap-06">
                        <img src="/assets/img/shape/student-shape-06.png" alt="image not found"/>
                     </div>
                     <div className="shap-07">
                        <img src="/assets/img/shape/student-shape-07.png" alt="image not found"/>
                     </div>
                     <div className="student-choose-thumb">
                        <img src="/assets/img/student-choose/student.png" alt="image not found"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default StudentChooseSection;