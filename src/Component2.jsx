import Component3 from "./Component3.jsx";

function Component2({data}) {
  return (
    <div>
      <h2>Component2</h2>

      {/* Props not used here */}
      <Component3 data={data}  />
    </div>
  );
}

export default Component2;
