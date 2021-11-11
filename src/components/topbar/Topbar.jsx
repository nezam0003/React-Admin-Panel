import React from "react";
import styled from "styled-components";
import profile from "../../images/profile.jpg";
// import { NotificationsNone } from "@mui/icons-material";
import { MdNotificationsNone, MdLanguage, MdSettings } from "react-icons/md";

const Topbar = () => {
  return (
    <>
      <TopbarStyled>
        <div className="topbar_wrapper">
          <div className="left">
            <span className="logo">dashboard</span>
          </div>
          <div className="right">
            <div className="icons_container">
              <span className="icon">
                <MdNotificationsNone />
              </span>
              <span className="badge">2</span>
            </div>
            <div className="icons_container">
              <span className="icon">
                <MdLanguage />
              </span>
              <span className="badge">2</span>
            </div>
            <div className="icons_container">
              <span className="icon">
                <MdSettings />
              </span>
            </div>
            <img src={profile} alt="profile" className="avater" />
          </div>
        </div>
      </TopbarStyled>
    </>
  );
};

const TopbarStyled = styled.div`
  width: 100%;
  height: 3.2rem;
  background: var(--clr-blue);
  position: sticky;
  top: 0;
  z-index: 999;

  .topbar_wrapper {
    padding: 0 1.2rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      .logo {
        font-weight: bold;
        text-transform: uppercase;
        color: var(--clr-white);
        letter-spacing: var(--spacing);
      }
    }

    .right {
      display: flex;
      align-items: center;
      .icons_container {
        cursor: pointer;
        margin-right: 0.5rem;
        position: relative;
        &:last-child {
          margin-right: 0;
        }

        .icon {
          color: var(--clr-white);
          font-size: 1.4rem;
        }

        .badge {
          width: 15px;
          height: 15px;
          background: red;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--clr-white);
          position: absolute;
          top: -5px;
          right: -2px;
          font-size: 10px;
        }
      }
      .avater {
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
        border-radius: 50%;
      }
    }
  }
`;

export default Topbar;
