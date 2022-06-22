import Image from "next/image";
import React from "react";

const Clients = () => {
  const list = [1, 1, 1, 1, 1];
  // ...
  return (
    <div className="Clients">
      <ul className="Clients__list">
        {list.map((Logo, index) => {
          return (
            <li className="Clients__item" key={index}>
              <Image
                className="Clients__item__img"
                alt=""
                preload="false"
                layout="fill"
                loading="lazy"
                src="/client.jpg"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Clients;
