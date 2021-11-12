import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import styled from "styled-components";

const FeaturedInfo = () => {
  return (
    <>
      <FeaturedStyled>
        <div className="featured_item">
          <span className="featured_title">revanue</span>
          <div className="featured_money_container">
            <span className="featured_money">$1,4582</span>
            <span className="featured_money_rate">
              $ -7,52 <ArrowDownward className="featured_icon negative" />
            </span>
          </div>
          <div className="featured_subtitile">compare to last month</div>
        </div>
        <div className="featured_item">
          <span className="featured_title">Sales</span>
          <div className="featured_money_container">
            <span className="featured_money">$1,4582</span>
            <span className="featured_money_rate">
              $ -7,52 <ArrowDownward className="featured_icon negative" />
            </span>
          </div>
          <div className="featured_subtitile">compare to last month</div>
        </div>
        <div className="featured_item">
          <span className="featured_title">Cost</span>
          <div className="featured_money_container">
            <span className="featured_money">$1,4582</span>
            <span className="featured_money_rate">
              $ +2,52 <ArrowUpward className="featured_icon" />
            </span>
          </div>
          <div className="featured_subtitile">compare to last month</div>
        </div>
      </FeaturedStyled>
    </>
  );
};

const FeaturedStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  .featured_item {
    background: var(--clr-white);
    flex: 1;
    margin: 0 1.3rem;
    padding: 1.8rem;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 9px 12px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 9px 12px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 9px 12px 5px 0px rgba(0, 0, 0, 0.2);

    .featured_title {
      text-transform: capitalize;
      font-size: 1.3rem;
    }
    .featured_money_container {
      margin: 10px 0px;
      display: flex;
      align-items: center;

      .featured_money {
        font-size: 1.8rem;
        font-weight: 600;
      }

      .featured_money_rate {
        display: flex;
        align-items: center;
        margin-left: 1.3rem;

        .featured_icon {
          font-size: 0.9rem;
          color: green;
          margin-left: 0.2rem;

          &.negative {
            color: red;
          }
        }
      }
    }
    .featured_subtitile {
      text-transform: capitalize;
      font-size: 0.925rem;
      color: gray;
    }
  }
`;

export default FeaturedInfo;
