import ChallengeCard from "./ChallengeCard";

const ChallengeList = ({ data }) => {
  return (
    <ul className="ChallengeList">
      {data.challenges.map((data, index) => {
        return (
          <li className="ChallengeList__item" key={index}>
            <ChallengeCard data={data} />
          </li>
        );
      })}
    </ul>
  );
};

export default ChallengeList;
