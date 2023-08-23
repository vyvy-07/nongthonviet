import React from "react";

const Comments = () => {
  return (
    <section className="comments p-t32">
      <div className="container">
        <h2 className="heading ffrb fs22">Bình luận</h2>
        <div className="comments__inputgroup">
          <div className="comments__inputgroup-avt">
            <img src="/img/sml.png" alt="avt" />
          </div>
          <div className="comments__inputgroup-input">
            <input
              className="input"
              placeholder="Viết bình luận..."
              type="text"
            />
            <div className="btngr">
              <img className="btngr_icon" src="/img/icon-sml.svg" alt="" />
              <button className="btngr_btn ffrr fs14 grey7">Bình luận</button>
            </div>
          </div>
        </div>
        <div className="comments__inputgroup">
          <div className="comments__inputgroup-avt">
            <img src="/img/sml.png" alt="avt" />
          </div>
          <div className="comments__inputgroup-input --cmt">
            <div className="content">
              <span className="username">VyVy</span>
              <span className="date ffri fs10 db">10:20 20/04/2021</span>
              <p className="comment">
                Tôi mong tinh thần này sẽ được lan tỏa sâu rộng trong toàn hệ
                thống giáo dục, đóng góp hiệu quả trong cuộc chiến chống dịch
                Covid-19 của đất nước.
              </p>
            </div>
            <div className="btngr">
              <img className="btngr_icon" src="/img/tim.svg" alt="" />
              <strong className="btngr_number fs10 ffrm">30</strong>
              <span className="btngr_rep fs10 ffrm">Phản hồi</span>
            </div>
          </div>
        </div>
        <div className="comments__inputgroup --repcmt">
          <div className="comments__inputgroup-avt">
            <img src="/img/sml.png" alt="avt" />
          </div>
          <div className="comments__inputgroup-input --cmt">
            <div className="content">
              <span className="username">VyVy</span>
              <span className="date ffri fs10 db">10:20 20/04/2021</span>
              <p className="comment">
                Tôi mong tinh thần này sẽ được lan tỏa sâu rộng trong toàn hệ
                thống giáo dục, đóng góp hiệu quả trong cuộc chiến chống dịch
                Covid-19 của đất nước.
              </p>
            </div>
            <div className="btngr">
              <img className="btngr_icon" src="/img/tim.svg" alt="" />
              <strong className="btngr_number fs10 ffrm">30</strong>
              <span className="btngr_rep fs10 ffrm">Phản hồi</span>
            </div>
          </div>
        </div>
        <p className="viewmore ffb fs16 grey7" style={{ paddingLeft: "0" }}>
          <span className="text">Xem thêm bình luận</span>
        </p>
        <div className="listnews --company">
          <div className="container">
            <div className="listnews__company">
              <div className="listnews__company-item">
                <img className="img" src="/img/banner3.jpg" alt="" />
              </div>
              <div className="listnews__company-item">
                <img className="img" src="/img/banner4.jpg" alt="" />
              </div>
              <div className="listnews__company-item">
                <img className="img" src="/img/banner6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
