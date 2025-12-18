import Component4 from "./Component4.jsx";

function Component3({data}) {
  return (
    <>
      <h2>Component 3</h2>
      <h4>This is prop a: {data.a}</h4>
      <h4>This is prop b: {data.b}</h4>

      <Component4 data ={data} />
    </>
    )
}
export default Component3;
