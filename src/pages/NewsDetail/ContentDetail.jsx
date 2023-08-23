import React from "react";
import BoxsItem from "../../components/BoxsItem";
import ReactHlsPlayer from "react-hls-player";
const ContentDetail = ({
  category,
  excerpt,
  penName,
  articleGA,
  description,
  sapo,
  postContent,
  data,
  featuredMedia,
}) => {
  return (
    <section className="sccontent p-t32">
      <div className="video p-bt32">
        <div className="container">
          <div className="audio">
            {featuredMedia?.videoHls?.uri && (
              <ReactHlsPlayer
                src={featuredMedia?.videoHls?.uri || {}}
                width={"100%"}
                autoPlay
                controls
                height={"100%"}
              />
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sccontent__left">
          <div className="sccontent__left-btn">
            <p className="ffrr">
              <span>aA</span>
            </p>
          </div>
          <div className="sccontent__left-item between">
            <img className="icon_img" src="/img/icon_link.svg" alt="icon" />
            <img className="icon_img" src="/img/fb-icon.svg" alt="icon" />
            <img className="icon_img" src="/img/zalo.svg" alt="icon" />
            <img className="icon_img" src="/img/chat-icon.svg" alt="icon" />
          </div>
          <div className="sccontent__left-item">
            <img className="icon_img" alt="" src="/img/bookmark.svg" />
            <img className="icon_img" alt="" src="/img/print.svg" />
          </div>
        </div>
        <div className="sccontent__between">
          <div className="sccontent__between-head">
            <div className="sccontent-heading">
              <h3
                className="heading-h3 ffrm fs16 p-bt12"
                style={{ textTransform: "uppercase" }}
              >
                {category?.categoryName}
              </h3>
              <h2 className="heading-h2 ffb fs28">{excerpt}</h2>
            </div>
            <div className="author p-tb32">
              <p className="author__writer ffrm">
                <span>{penName} </span>
              </p>
              <p className="gmt7">
                {articleGA?.DAY?.totalReaders} {articleGA?.HOUR?.totalReaders}{" "}
                GMT+7
              </p>
            </div>
          </div>

          <div className="sccontent__between-detail">
            <div className="detail">
              <h2 className="heading-h2 ffb">{sapo}</h2>
              <div className="pr-detail">
                <br />
                <p dangerouslySetInnerHTML={{ __html: postContent }}></p>
              </div>
            </div>
          </div>
          <div
            className="boxs --boxs-xs --relatednews"
            style={{ padding: "32px 0" }}
          >
            <h2 className="heading-h2">Tin tức liên quan</h2>

            {data?.length > 0 &&
              data?.slice(0, 1).map((item, index) => {
                return (
                  <BoxsItem
                    classTitle={"fs18 ffb"}
                    desc_e
                    className={"--sm"}
                    key={item?.id || index}
                    {...item}
                  />
                );
              })}
            <div className="boxs --mini">
              {data?.length > 0 &&
                data?.slice(1, 5).map((item, index) => {
                  return (
                    <BoxsItem
                      classTitle={"ffb"}
                      date__time={false}
                      key={item?.id || index}
                      {...item}
                    />
                  );
                })}
            </div>
          </div>
          <div className="sccontent__between-tag" style={{ paddingLeft: "0" }}>
            <div className="sharing">
              <div className="itemsharing left">
                <a href="#" className="item tag">
                  Chia sẻ
                </a>
                <img className="item" src="/img/mess1.svg" alt="" />
              </div>
              <div className="itemsharing right">
                <img className="item" src="/img/icon_link.svg" alt="" />
                <img className="item" src="/img/zalo.svg" alt="" />
                <img className="item" src="/img/mail.svg" alt="" />
              </div>
            </div>
            <div className="tags b-tbgr">
              <a href="#" className="item-tag">
                LUẬT ĐẤT ĐAI
              </a>
              <a href="#" className="item-tag">
                ĐẤT ĐAI
              </a>
              <a href="#" className="item-tag">
                ĐẤT ĐAI
              </a>
            </div>
          </div>
        </div>
        <div className="sccontent__right">
          <div className="sccontent__right-banner">Banner QC</div>
          <div className="sccontent__right-banner">Banner QC</div>
        </div>
      </div>
    </section>
  );
};

export default ContentDetail;
