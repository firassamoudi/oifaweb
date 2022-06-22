import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import StepCard from "../../StepCard/StepCard";
const Step = (props) => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 700,
    })
  );

  return (
    <div className={cx("Step", { "Step--root": props.type })}>
      {props.type !== "root" && (
        <>
          <div className={cx("Step__left", { "Step__left--cor": props.cor })}>
            {props?.steps?.l?.map((stepL, index, arr) => {
              return (
                <div key={index}>
                  <div className="Step__left__card">
                    <div className="Step__card-box">
                      <StepCard
                        title={stepL.title}
                        para={stepL.para}
                        dark={props.dark}
                      />

                      {index === 0 && (
                        <div className="Step__dot Step__dot--left" />
                      )}
                      {!(props.last && index !== 0) && (
                        <div
                          className={cx(
                            "v-line",
                            "v-line--left",
                            {
                              "v-line--top": index === 0 && props.first,
                            },
                            {
                              "v-line--bottom": index === 0 && props.last,
                            }
                          )}
                        />
                      )}
                    </div>
                  </div>
                  <div className="test2">
                    {arr.length - 1 !== index && (
                      <div className="test">
                        {!phone && <div className="Step__dot" />}
                        <div className="v-line-sub" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={cx("Step__right", { "Step__right--cor": props.cor })}>
            {props?.steps?.r?.map((stepR, index, arr) => {
              return (
                <div key={index}>
                  <div className="Step__right__card">
                    <div className="Step__card-box">
                      <StepCard
                        title={stepR.title}
                        para={stepR.para}
                        dark={props.dark}
                      />

                      {index === 0 && (
                        <div className="Step__dot Step__dot--right" />
                      )}
                      {!(props.last && index !== 0) && (
                        <div
                          className={cx(
                            "v-line",
                            "v-line--right",
                            {
                              "v-line--top": index === 0 && props.first,
                            },
                            {
                              "v-line--bottom": index === 0 && props.last,
                            }
                          )}
                        />
                      )}
                    </div>
                  </div>
                  <div className="test2">
                    {arr.length - 1 !== index && (
                      <div className="test">
                        {!phone && <div className="Step__dot" />}
                        <div className="v-line-sub" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {props.type === "root" && (
        <div className="Step-box-root">
          <div className="Step-box-root__attatch" />

          {props?.steps?.list?.map((stepR, index) => {
            return (
              <div className="Step-box-root__item" key={index}>
                <StepCard
                  title={stepR.title}
                  para={stepR.para}
                  dark={props.dark}
                />
                {!props.last && <div className="Step__dot" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Step;
