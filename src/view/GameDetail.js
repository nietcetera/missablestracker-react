import { Checkbox, Collapse, Table } from "antd";

const { Panel } = Collapse;

const dataSource = [
  {
    key: "1",
    title: "Bob-Omb",
    category: "Tattle",
    location: "Chapter 1",
    missable: false,
  },
  {
    key: "2",
    title: "Bullet Bill",
    category: "Tattle",
    location: "Chapter 1",
    missable: true,
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Missable?",
    dataIndex: "missable",
    key: "missable",
    render: (t, r, i) =>
      r.missable ? (
        <Checkbox disabled={true} checked={true} />
      ) : (
        <Checkbox disabled={true} />
      ),
  },
];

const GameDetail = () => {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Tattles" key="1">
        <Table dataSource={dataSource} columns={columns} />
      </Panel>
    </Collapse>
  );
};

export default GameDetail;
