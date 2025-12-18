import Component6 from "./Component6.jsx";

function Component5({data}) {
  return (
    <>
      <h2>component 5</h2>
      <h4>This is prop f: {data.f}</h4>

      <Component6 e={data.e} />
    </>
    )
}
export default Component5;
