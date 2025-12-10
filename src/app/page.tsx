"use client";

import React, { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main>
      {/* Pricing Section */}
      <section id="pricing" className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2>Bảng Giá Nuôi Tôi</h2>
            <p>Chọn gói nuôi cho phù hợp, đừng để tôi đói</p>
          </div>

          <div className="pricing-grid">
            {/* Monthly Plan */}
            <div className="pricing-card">
              <div className="price-header">
                <div className="plan-name">Gói "Qua Ngày"</div>
                <div className="discount-badge">Sinh viên nghèo</div>
                <div className="price">
                  <span className="currency">₫</span>
                  500k
                  <span className="period">/tháng</span>
                </div>
              </div>
              <ul className="features-list">
                <li>
                  <CheckIcon /> Ăn mì tôm 2 bữa/ngày
                </li>
                <li>
                  <CheckIcon /> Uống nước lọc cầm hơi
                </li>
                <li>
                  <CheckIcon /> Ngủ gầm cầu thang
                </li>
                <li style={{ opacity: 0.5 }}>
                  <CrossIcon /> Không được đòi hỏi
                </li>
              </ul>
              <button className="card-btn" onClick={handleOpenModal}>Nuôi Thử</button>
            </div>

            {/* Yearly Plan - Featured */}
            <div className="pricing-card featured">
              <div className="price-header">
                <div className="plan-name">Gói "Ổn Định"</div>
                <div className="discount-badge">Được ăn thịt</div>
                <div className="price">
                  <span className="currency">₫</span>
                  4.8tr
                  <span className="period">/3 tháng</span>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <span className="original-price">6.000.000₫</span>
                </div>
              </div>
              <ul className="features-list">
                <li>
                  <CheckIcon /> Cơm bụi có thêm trứng
                </li>
                <li>
                  <CheckIcon /> Thỉnh thoảng được uống trà sữa
                </li>
                <li>
                  <CheckIcon /> Có chăn ấm nệm êm
                </li>
                <li>
                  <CheckIcon /> Được đi dạo công viên
                </li>
              </ul>
              <button className="card-btn" onClick={handleOpenModal}>Nuôi Luôn</button>
            </div>

            {/* Lifetime Plan */}
            <div className="pricing-card">
              <div className="price-header">
                <div className="plan-name">Gói VIP</div>
                <div className="discount-badge">Đại Gia</div>
                <div className="price">
                  <span className="currency">₫</span>
                  99tr
                  <span className="period">/trọn đời</span>
                </div>
              </div>
              <ul className="features-list">
                <li>
                  <CheckIcon /> Ăn bò Kobe, ngủ khách sạn
                </li>
                <li>
                  <CheckIcon /> Đi du lịch khắp thế giới
                </li>
                <li>
                  <CheckIcon /> Không hỗ trợ trả hàng
                </li>
              </ul>
              <button className="card-btn" onClick={handleOpenModal}>Chốt</button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <CrossIcon />
            </button>
            <div className="heart-anim">❤️</div>
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '0.5rem',
              background: 'linear-gradient(to right, #fff, #ff00cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800
            }}>
              Cảm ơn bạn!
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#e0e0e0', fontWeight: 500 }}>
              Tấm lòng của bạn là động lực lớn nhất!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ fill: 'currentColor' }}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}
