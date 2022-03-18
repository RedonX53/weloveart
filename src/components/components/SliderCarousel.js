import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "@reach/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };

    return (
      <div className="nft-big">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div className="nft_pic">
              <span>
                <Link to="/ItemDetail">
                  <span className="nft_pic_info">
                    <span className="nft_pic_title">ART DUBAI</span>
                    <span className="nft_pic_by">
                      During Level One you will start with the basics and focus
                      on developing your artistic style and skill to build a
                      foundation of painting techniques and principles.
                    </span>
                  </span>
                </Link>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/carousel/1.jpg"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div className="nft_pic">
              <span>
                <Link to="/ItemDetail">
                  <span className="nft_pic_info">
                    <span className="nft_pic_title">PRICING</span>
                    <span className="nft_pic_by">
                      390 AED (price includes 5%VAT) You will avail a three-hour
                      painting session (with all equipment provided), along with
                      professional guidance, all complemented with a choice of
                      two glasses of grape or four non-alcoholic drinks.
                    </span>
                  </span>
                </Link>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/carousel/2.jpg"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">PREMIUM EXPERIENES</span>
                  <span className="nft_pic_by">
                    We Love Art only partners with premium venues so that you
                    get a 5 star experience. In Abu Dhabi, we partner with
                    Museum Café in Louvre Abu Dhabi.
                  </span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/carousel/3.jpg"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">WHAT TO EXPECT</span>
                  <span className="nft_pic_by">
                    Become an artist for a night while you Paint, Create, Sip
                    and Connect! Recreate some of the world’s most renowned
                    pieces in one night at our paint events.
                  </span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/items/4.jpg"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={5}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">COMMUNITY</span>
                  <span className="nft_pic_by">
                    During Level One you will start with the basics and focus on
                    developing your artistic style and skill to build a
                    foundation of painting techniques and principles.{" "}
                  </span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/items/5.jpg"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
