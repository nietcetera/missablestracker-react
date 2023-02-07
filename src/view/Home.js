import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title>Home</Title>
      <Link to={"/games"}>Games</Link>
    </div>
  );
};

export default Home;
