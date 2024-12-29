import React, { useState } from "react";
import "./App.css";

// 예시: src 폴더 내 assets 디렉토리에 이미지 파일을 두었다고 가정
import profileImg from "./assets/profile-image.jpg";
import instagram_icon from "./assets/instagram-icon.png";
import kakao_icon from "./assets/kakao-icon.png"; // 새로 추가한 카카오 아이콘

function App() {
  // My Profile 섹션 열림 여부
  const [showProfileDetail, setShowProfileDetail] = useState(false);

  // 인스타그램 아이디 표시 여부 (토글)
  const [showInstaID, setShowInstaID] = useState(false);

  // 카카오톡 모달 열림 여부
  const [showKakaoModal, setShowKakaoModal] = useState(false);

  // My Profile 클릭 핸들러
  const handleProfileClick = () => {
    setShowProfileDetail(!showProfileDetail);
  };

  // 인스타그램 아이콘 클릭 → 아이디 토글
  const handleInstaClick = () => {
    setShowInstaID(!showInstaID);
  };

  // 카카오 아이콘 클릭 → 카카오톡 QR 모달 오픈
  const handleKakaoClick = () => {
    setShowKakaoModal(true);
  };

  // 카카오톡 모달 닫기
  const handleCloseKakaoModal = () => {
    setShowKakaoModal(false);
  };

  return (
    <div className="portfolio-container">
      {/* 왼쪽 프로필 영역 */}
      <aside className="profile">
        <div className="profile-top">
          <div className="insta-header">
            <img
              src={profileImg}
              alt="프로필 이미지"
              className="insta-profile-image"
            />
            <div className="insta-info">
              <h2 className="insta-username">김싸피</h2>
              <p className="insta-quote">“여태껏 기도한 마음을 더해 가래”</p>
              
              {/* 인스타그램 & 카카오 아이콘 */}
              <div className="icon-row">
                <img
                  src={instagram_icon}
                  alt="Instagram Icon"
                  className="instagram-icon"
                  onClick={handleInstaClick}
                />
                <img
                  src={kakao_icon}
                  alt="Kakao Icon"
                  className="kakao-icon"
                  onClick={handleKakaoClick}
                />
              </div>

              {/* 인스타그램 아이디: showInstaID가 true일 때만 표시 */}
              {showInstaID && <p className="instagram-id">@kyue_29</p>}
            </div>
          </div>
        </div>

        <nav className="profile-nav">
          <ul>
            <li onClick={handleProfileClick}>MY PROFILE</li>
            <li>MBTI</li>
            <li>해시태그</li>
          </ul>
        </nav>

        {/* MY PROFILE 클릭 시 열리는 디테일 섹션 */}
        {showProfileDetail && (
          <div className="profile-detail">
            <p>안녕하세요! 저는 전자공학과 졸업 후...</p>
            <p>간단한 소개나 이력을 넣을 수 있습니다.</p>
          </div>
        )}
      </aside>

      {/* 가운데 타임라인 영역 */}
      <section className="timeline">
        <h2>이런 삶을 살아왔습니다.</h2>
        <div className="timeline-list">
          <div className="timeline-item">
            <p>전자공학과 졸업 (2021.02)</p>
          </div>
          <div className="timeline-item">
            <p>포스코 AIㆍBig Data 아카데미 16기 (2021.10 ~ 2021.12)</p>
          </div>
          <div className="timeline-item">
            <p>삼성 청년 SW 아카데미 8기 Python반 (2022.03 ~ 2022.09)</p>
          </div>
          <div className="timeline-item">
            <p>OO회사 개발자 입사 (2023.06)</p>
          </div>
        </div>
        <div className="extra-info">
          <p>동료들과 함께 즐겁게 배우고, 멋진 2학기를 만들고 싶습니다!</p>
          <div className="battery-status">
            <div className="battery battery-lv1"></div>
            <div className="battery battery-lv2"></div>
            <div className="battery battery-lv3"></div>
          </div>
        </div>
      </section>

      {/* 오른쪽 영역 */}
      <div className="right-content">
        <section className="project-list">
          <h3>프로젝트</h3>
          <ol>
            <li>빅데이터 분석 프로젝트</li>
            <li>User Tracking AI Cart 프로젝트</li>
            <li>SSAFY 관통 프로젝트</li>
          </ol>
        </section>

        <section className="tech-stack">
          <h3>기술 스택 (React 중심)</h3>
          <div className="stack-icons">
            {/* 로고 경로는 적절히 수정해주세요 */}
            <img src="vue-logo.png" alt="Vue" />
            <img src="django-logo.png" alt="Django" />
            <img src="react-logo.png" alt="React" />
            <img src="cpp-logo.png" alt="C++" />
          </div>
        </section>

        <section className="goal">
          <h3>2학기 목표와 다짐</h3>
          <ul>
            <li>멋진 프로젝트를 하고 싶습니다!</li>
            <li>100% 온전히 2학기 참여</li>
            <li>함께 성장하자! said Tomorrow</li>
          </ul>
        </section>

        <section className="photo-gallery">
          <h3>사랑이 재산이다.</h3>
          <p>다른 사람과 함께한 사진들, 모임, MT 사진 등</p>
          <div className="photo-grid">
            <img src="group-photo1.jpg" alt="단체사진1" />
            <img src="group-photo2.jpg" alt="단체사진2" />
          </div>
        </section>
      </div>

      {/* 카카오톡 QR 코드 모달 */}
      {showKakaoModal && (
        <div className="modal-overlay" onClick={handleCloseKakaoModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <h3>카카오톡 QR</h3>
            {/* 예: 카카오톡 QR 이미지 경로 */}
            <img
              src="kakao-qr.jpg"
              alt="카카오톡 QR 코드"
              className="qr-image"
            />
            <button onClick={handleCloseKakaoModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
