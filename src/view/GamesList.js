import { Table } from "antd";
import { Link } from "react-router-dom";

const dataSource = [
  {
    key: "1",
    title: "Paper Mario",
    system: "Nintendo 64",
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <Link to={"/games/1"}>{text}</Link>,
  },
  {
    title: "System",
    dataIndex: "system",
    key: "system",
  },
];

const GamesList = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default GamesList;
