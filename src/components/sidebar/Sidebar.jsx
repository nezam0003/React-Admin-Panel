import React from "react";
import styled from "styled-components";
import { MdHome, MdTimeline, MdTrendingUp } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <SidebarStyled>
        <div className="sidebar_wrapper">
          <div className="sidebar_menu">
            <h3 className="sidebar_title">dashboard</h3>
            <ul className="sidebar_list">
              <li className="sidebar_list_item">
                <MdHome className="sidebar_icon" />
                Home
              </li>
              <li className="sidebar_list_item">
                <MdTimeline className="sidebar_icon" />
                Analytics
              </li>
              <li className="sidebar_list_item">
                <MdTrendingUp className="sidebar_icon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebar_menu">
            <h3 className="sidebar_title">Quick Menu</h3>
            <ul className="sidebar_list">
              <li className="sidebar_list_item">
                <MdHome className="sidebar_icon" />
                Users
              </li>
              <li className="sidebar_list_item">
                <MdTimeline className="sidebar_icon" />
                Products
              </li>
              <li className="sidebar_list_item">
                <MdTrendingUp className="sidebar_icon" />
                Transictions
              </li>
              <li className="sidebar_list_item">
                <MdTrendingUp className="sidebar_icon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebar_menu">
            <h3 className="sidebar_title">Notifications</h3>
            <ul className="sidebar_list">
              <li className="sidebar_list_item">
                <MdHome className="sidebar_icon" />
                Mail
              </li>
              <li className="sidebar_list_item">
                <MdTimeline className="sidebar_icon" />
                Messages
              </li>
              <li className="sidebar_list_item">
                <MdTrendingUp className="sidebar_icon" />
                Feedback
              </li>
            </ul>
          </div>
          <div className="sidebar_menu">
            <h3 className="sidebar_title">Staff</h3>
            <ul className="sidebar_list">
              <li className="sidebar_list_item">
                <MdHome className="sidebar_icon" />
                Manage
              </li>
              <li className="sidebar_list_item">
                <MdTimeline className="sidebar_icon" />
                Analytics
              </li>
              <li className="sidebar_list_item">
                <MdTrendingUp className="sidebar_icon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </SidebarStyled>
    </>
  );
};

const SidebarStyled = styled.div`
  flex: 1;
  background: #222;
  color: #fff;
  height: calc(100vh - 3.2rem);
  position: sticky;
  top: 3.2rem;

  .sidebar_wrapper {
    padding: 1.2rem 0;

    .sidebar_menu {
      padding: 0 1.2rem;
      margin-bottom: 0.6rem;
      border-bottom: 1px solid #333;

      .sidebar_title {
        text-transform: capitalize;
        font-size: 1rem;
        font-weight: 400;
      }
      .sidebar_list {
        padding: 0.3rem;

        .sidebar_list_item {
          font-size: 1rem;
          padding: 0.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;

          &.active {
            background: #444;
          }
          &:hover {
            background: #444;
          }

          .sidebar_icon {
            margin-right: 5px;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
export default Sidebar;
