import Box from "@material-ui/core/Box";
import { geoOrthographic, geoPath, select, transition } from "d3";
import React, { useEffect, useRef, useState } from "react";

// import useResizeObserver from "./useResizeObserver";

const WorldMap = (props) => {
  const [state, setstate] = useState([0, 0, 0]);
  const [rect, setrect] = useState({ w: 1000, h: 1000 });
  const svgRef = useRef();
  const wrappedRef = useRef();
  // const dimensions = useResizeObserver(wrappedRef);
  // .scale((props.height - 10) / 2)
  const projection = geoOrthographic()
    .precision(0.1)
    .fitSize([props.width, props.height], props.data)
    .rotate([-20, 0, 0]);
  // .translate([0, 0]);
  /*
    .fitSize([props.width, props.height], props.data)
    .translate(100, 100);
    */
  const link = {
    type: "LineString",
    coordinates: [
      [100, 60],
      [-60, -30],
      [-100, 60],
      [50, 10],
    ],
  };
  const link2 = {
    type: "LineString",
    coordinates: [
      [-100, 60],
      [60, -30],
    ],
  };
  const pathGenerator = geoPath().projection(projection);
  const path = pathGenerator(link);
  const path2 = pathGenerator(link2);
  /*

    */

  useEffect(() => {
    const svg = select(svgRef.current);
    // const projectionn = geoMercator().fitSize([width, height], props.data);
    // Change these data to see ho the great circle reacts

    svg
      .selectAll(".country")
      .data(props.data.features)
      .join("path")
      .attr("class", (f) => `country country--${f.properties.sov_a3}`)
      .attr("d", (feature) => pathGenerator(feature));

    /*
    const mytest = svg
      .append("path")
      .attr("d", path)
      .attr("class", "test")
      .style("fill", "none")
      .style("stroke", "red")
      .style("stroke-width", 3);
    const mytest2 = svg
      .append("path")
      .attr("d", path2)
      .attr("class", "test")
      .style("fill", "none")
      .style("stroke", "yellow")
      .style("stroke-width", 3);

    const pathLength = mytest.node().getTotalLength();
    const pathLength2 = mytest2.node().getTotalLength();
    const transitionPath = transition().duration(4000).delay(1000);
    const transitionPath2 = transition().duration(4000).delay(3000);
    mytest
      .attr("stroke-dashoffset", pathLength)
      .attr("stroke-dasharray", pathLength)
      .transition(transitionPath)
      .attr("stroke-dashoffset", 0);

    mytest2
      .attr("stroke-dashoffset", pathLength2)
      .attr("stroke-dasharray", pathLength2)
      .transition(transitionPath2)
      .attr("stroke-dashoffset", 0); */
  }, [props.width, props.height]);
  // ...
  return (
    <Box
      ref={props.wrapper}
      className="WorldMap"
      style={{ width: "100%", height: "100%" }}
    >
      <svg
        ref={svgRef}
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      />
    </Box>
  );
};

export default WorldMap;
