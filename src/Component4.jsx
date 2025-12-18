import Component5 from "./Component5.jsx";

function Component4({data}) {
  return (
    <>
      <h2>Component 4</h2>
      <h4>This is prop c: {data.c}</h4>
      <h4>This is prop d: {data.d}</h4>

      <Component5 data={data} />

    </>
    )
}
export default Component4;
