// POINT propsは読み取り専用
const Hello = (props) => {
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
