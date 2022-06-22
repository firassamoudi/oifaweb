import cx from "classnames";
import React from "react";

import Typography from "../../Typography";
import JourneyCard from "../JourneyCard/JourneyCard";

const CardsList = (props) => {
  return (
    <div>
      {props.list.map((item, index) => {
        return (
          <div className="CardBox" key={index}>
            <div className="CardBox__col">
              {index % 2 === 0 && (
                <JourneyCard
                  theme={props.theme}
                  title={item.title}
                  para={item.para}
                  list={item.list}
                />
              )}
            </div>

            <div className="CardBox__dot" />

            <div
              className={cx(
                "CardBox__vs",
                { "CardBox__vs--top": index === 0 },
                { "CardBox__vs--bottom": index === props.list.length - 1 }
              )}
            />

            <div
              className={cx("CardBox__col", "CardBox__col--right", {
                "CardBox__card--dark": props.theme,
              })}
            >
              {index % 2 !== 0 && (
                <JourneyCard
                  theme={props.theme}
                  title={item.title}
                  para={item.para}
                  list={item.list}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardsList;
