'use client'
import { User } from '@/app/page';
import React from 'react';
interface IProps {
  user: User
}

const Product = ({user}: IProps) => {
  const handleClick = () => {
    window.print();
  }
  return (
    <>
      <div id="sidebar">
        <div id="outline">
        </div>
      </div>
      <div id="page-container">
        <button onClick={() => handleClick()}>Print PDF</button>
        <div id="pf1" className="pf w0 h0" data-page-no="1">
          <div className="pc pc1 w0 h0"><img className="bi x0 y0 w1 h1" alt="" src="bg1.png" />
            <div className="c x1 y1 w0 h2">
              <div className="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0">QTĐG:<span className="ff2 fs1"> FRP-BA22/FMT &amp;
                FRP-BA22/A</span></div>
              <div className="t m0 x3 h4 y3 ff3 fs0 fc0 sc0 ls0 ws0"> 1</div>
            </div>
            <div className="c x4 y4 w2 h5">
              <div className="t m0 x5 h6 y5 ff4 fs2 fc1 sc0 ls0 ws0">TIEN HUNG FURNITURE CO, LTD.</div>
              <div className="t m0 x6 h7 y6 ff5 fs3 fc2 sc0 ls0 ws0">B<span className="ff2">ì</span>nh Chu<span
                className="ff6">ẩ</span>n - Thu<span className="ff6">ậ</span>n An - B<span className="ff2">ì</span>nh
                <span className="ff7">Dương</span></div>
            </div>
            <div className="t m0 x7 h8 y7 ff8 fs4 fc0 sc0 ls0 ws0">THÔNG TIN <span className="ff9">ĐÓNG</span> GÓI</div>
            <div className="t m0 x2 h9 y8 ffa fs1 fc0 sc0 ls0 ws0">Ngày 18/10/2021.</div>
            <div className="t m0 x2 h9 y9 ffa fs1 fc0 sc0 ls0 ws0">Tên <span className="ffb">sản</span> <span
              className="ffb">phẩm:</span> BÀN</div>
            <div className="t m0 x2 h9 ya ffa fs1 fc0 sc0 ls0 ws0">Mã <span className="ffb">sản</span> <span
              className="ffb">phẩm:</span> FRP-BA22/FMT VÀ FRP-BA22/A</div>
            <div className="t m0 x2 h9 yb ffa fs1 fc0 sc0 ls0 ws0">Khách hàng: {user.firstName + " " + user.lastName}</div>
            <div className="t m0 x2 h9 yc ff8 fs1 fc0 sc0 ls0 ws0">I - <span className="ff9">SỬ</span> <span
              className="ff9">DỤNG</span> BAO BÌ CARTON:</div>
            <div className="t m0 x2 h9 yd ff8 fs1 fc0 sc0 ls0 ws0">II – THÔNG <span className="ff9">SỐ</span> <span
              className="ff9">KỸ</span> <span className="ff9">THUẬT</span> <span className="ff9">ĐÓNG</span> GÓI:</div>
            <div className="t m0 x8 h9 ye ffa fs1 fc0 sc0 ls0 ws0">1.<span className="_ _0"> </span>Kích <span
              className="ffb">thước</span> <span className="ffb">tổng</span> <span className="ffb">thể</span> (2200x 950 x
              751) mm</div>
            <div className="t m0 x8 h9 yf ffa fs1 fc0 sc0 ls0 ws0">2.<span className="_ _0"> </span><span
              className="ffb">Trọng</span> <span className="ffb">lượng:</span> </div>
            <div className="t m0 x6 h9 y10 ffa fs1 fc0 sc0 ls0 ws0">N.W: kg</div>
            <div className="t m0 x6 h9 y11 ffa fs1 fc0 sc0 ls0 ws0">G.W: kg</div>
            <div className="t m0 x2 h9 y12 ff8 fs1 fc0 sc0 ls0 ws0">III – MÔ <span className="ff9">TẢ</span> <span
              className="ff9">ĐÓNG</span> GÓI <span className="ff9">SẢN</span> <span className="ff9">PHẨM:</span></div>
            <div className="c x2 y13 w3 ha">
              <div className="t m0 x9 h9 y14 ff8 fs1 fc0 sc0 ls0 ws0">Step 1:<span className="ffa"> <span
                className="ffb">Vệ</span> sinh <span className="ffb">sản</span> <span
                  className="ffb">phẩm.Tháo</span> chân</span></div>
            </div>
            <div className="c xa y13 w4 ha">
              <div className="t m0 xb h9 y14 ff8 fs1 fc0 sc0 ls0 ws0">Step 2:<span className="ffa"> <span
                className="ffb">Phủ</span> mút chân</span></div>
            </div>
            <div className="c x2 y15 w3 hb">
              <div className="t m0 xb h9 y16 ff8 fs1 fc0 sc0 ls0 ws0">Step 3:<span className="ffa"> Dán chân</span></div>
            </div>
            <div className="c xa y15 w4 hb">
              <div className="t m0 xb h9 y17 ff8 fs1 fc0 sc0 ls0 ws0">Step 4:<span className="ffa"> <span
                className="ffb">Phủ</span> mút <span className="ffb">mặt</span> bàn</span></div>
            </div>
          </div>
          <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf2" className="pf w0 h0" data-page-no="2">
          <div className="pc pc2 w0 h0"><img className="bi x0 y0 w1 h1" alt="" src="bg2.png" />
            <div className="c x1 y1 w0 h2">
              <div className="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0">QTĐG:<span className="ff2 fs1"> FRP-BA22/FMT &amp;
                FRP-BA22/A</span></div>
              <div className="t m0 x3 h4 y3 ff3 fs0 fc0 sc0 ls0 ws0"> 2</div>
            </div>
            <div className="c x4 y4 w2 h5">
              <div className="t m0 x5 h6 y5 ff4 fs2 fc1 sc0 ls0 ws0">TIEN HUNG FURNITURE CO, LTD.</div>
              <div className="t m0 x6 h7 y6 ff5 fs3 fc2 sc0 ls0 ws0">B<span className="ff2">ì</span>nh Chu<span
                className="ff6">ẩ</span>n - Thu<span className="ff6">ậ</span>n An - B<span className="ff2">ì</span>nh
                <span className="ff7">Dương</span></div>
            </div>
            <div className="c x2 y18 w3 hc">
              <div className="t m0 xb h9 y19 ff8 fs1 fc0 sc0 ls0 ws0">Step 5:<span className="ffa"> Dán <span
                className="ffb">mặt</span> bàn</span></div>
            </div>
            <div className="c xa y18 w4 hc">
              <div className="t m0 xb h9 y19 ff8 fs1 fc0 sc0 ls0 ws0">Step 6: <span className="ffa">Dán 4pcs <span
                className="ffb">xốp</span> (10 x 100 x 730) <span className="ffb">cặp</span> theo chân</span>
              </div>
            </div>
            <div className="c x2 y1a w5 hb">
              <div className="t m0 xb h9 y16 ff8 fs1 fc0 sc0 ls0 ws0">Step 7: <span className="ffb">Đặt<span className="ffa">
                2pcs </span>cụm<span className="ffa"> chân lên bàn xoay </span>chiều<span className="ffa"> bas
                </span>sắt<span className="ffa"> </span></span></div>
              <div className="t m0 xb h9 y1b ffa fs1 fc0 sc0 ls0 ws0">ra ngoài</div>
              <div className="t m0 xb h9 y1c ffa fs1 fc0 sc0 ls0 ws0"> -Dán 4 pcs <span className="ffb">xốp</span> (20 x
                100 x 730)mm lên chân</div>
            </div>
            <div className="c xa y1a w5 hb">
              <div className="t m0 xb h9 y16 ff8 fs1 fc0 sc0 ls0 ws0">Step 8:<span className="ffa"> <span
                className="ffb">-Đặt</span> 2 pcs <span className="ffb">xốp</span> (60 x 100 x 600)mm lót
                chân</span></div>
            </div>
            <div className="c x2 y1d w5 hd">
              <div className="t m0 xb h9 y1e ff8 fs1 fc0 sc0 ls0 ws0">Step <span className="_ _1"></span>9:<span
                className="ffa"> <span className="_ _1"></span><span className="ffb">Đặt<span className="ffa"> <span
                  className="_ _1"></span>2 <span className="_ _1"></span>pcs <span
                    className="_ _1"></span><span className="ffb">xốp<span className="ffa"> <span
                      className="_ _1"></span>(100 <span className="_ _1"></span>x <span
                        className="_ _1"></span>100 <span className="_ _1"></span>x <span
                          className="_ _1"></span>330)mm <span className="_ _1"></span>chèn <span
                            className="_ _1"></span>chân</span></span></span></span></span></div>
              <div className="t m0 xb h9 y1f ffa fs1 fc0 sc0 ls0 ws0"> </div>
            </div>
            <div className="c xa y1d w5 hd">
              <div className="t m0 xb h9 y1e ff8 fs1 fc0 sc0 ls0 ws0">Step 10:<span className="ffa"> <span
                className="ffb">Đặt</span> 4pcs <span className="ffb">khối</span> <span className="ffb">xốp</span>
                (80 x 100 x 190) mm</span></div>
              <div className="t m0 xb h9 y1f ffa fs1 fc0 sc0 ls0 ws0"> <span className="ffb">-Đặt</span> 1 pcs <span
                className="ffb">xốp</span> <span className="ffb">giữa(100</span> x 650 x 190)mm</div>
              <div className="t m0 xb h9 y20 ffa fs1 fc0 sc0 ls0 ws0"> - <span className="ffb">Đặt</span> 2 <span
                className="ffb">đầu</span> 2 pcs <span className="ffb">xốp</span> (950 x 100 x 190)mm</div>
              <div className="t m0 xb h9 y21 ffa fs1 fc0 sc0 ls0 ws0"> <span className="ffb">-Quấn</span> PE</div>
            </div>
          </div>
          <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf3" className="pf w0 h0" data-page-no="3">
          <div className="pc pc3 w0 h0"><img className="bi x0 y0 w1 h1" alt="" src="bg3.png" />
            <div className="c x1 y1 w0 h2">
              <div className="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0">QTĐG:<span className="ff2 fs1"> FRP-BA22/FMT &amp;
                FRP-BA22/A</span></div>
              <div className="t m0 x3 h4 y3 ff3 fs0 fc0 sc0 ls0 ws0"> 3</div>
            </div>
            <div className="c x4 y4 w2 h5">
              <div className="t m0 x5 h6 y5 ff4 fs2 fc1 sc0 ls0 ws0">TIEN HUNG FURNITURE CO, LTD.</div>
              <div className="t m0 x6 h7 y6 ff5 fs3 fc2 sc0 ls0 ws0">B<span className="ff2">ì</span>nh Chu<span
                className="ff6">ẩ</span>n - Thu<span className="ff6">ậ</span>n An - B<span className="ff2">ì</span>nh
                <span className="ff7">Dương</span></div>
            </div>
            <div className="c x2 y22 w5 hb">
              <div className="t m0 xb h9 y16 ff8 fs1 fc0 sc0 ls0 ws0">Step 11:<span className="ffa"> <span
                className="ffb">Mặt</span> nóc <span className="ffb">đặt</span> 1pcs <span
                  className="ffb">xốp</span> <span className="ffb">tấm</span> (20 x 700 x </span></div>
              <div className="t m0 xb h9 y1b ffa fs1 fc0 sc0 ls0 ws0">1900)mm</div>
              <div className="t m0 xb h9 y1c ffa fs1 fc0 sc0 ls0 ws0"> <span className="ffb">-Cạnh</span> bàn <span
                className="ffb">ốp</span> 12 pcs <span className="ffb">xốp</span> V (20 x 350)mm</div>
              <div className="t m0 xb h9 y23 ffa fs1 fc0 sc0 ls0 ws0"> <span className="ffb">-Đặt</span> 4 pcs <span
                className="ffb">gốc</span> <span className="ffb">xốp</span> 20+ <span className="ffb">gốc</span> <span
                  className="ffb">giấy</span></div>
            </div>
            <div className="c xa y22 w5 hb">
              <div className="t m0 xb h9 y16 ff8 fs1 fc0 sc0 ls0 ws0">Step 12: <span className="ffa">Cho <span
                className="ffb">sản</span> <span className="ffb">phẩm</span> vào thùng carton</span></div>
              <div className="t m0 xb h9 y1b ffa fs1 fc0 sc0 ls0 ws0"> </div>
            </div>
            <div className="c x2 y24 w5 he">
              <div className="t m0 xb h9 y25 ff8 fs1 fc0 sc0 ls0 ws0">Step 13:<span className="ffa"> Dán thùng</span>
              </div>
            </div>
          </div>
          <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
        </div>
      </div>
    </>
  )
}

export default Product