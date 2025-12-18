import Component2 from "./Component2";

function Component1() {
  const data = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish"
  };
  return (
    <>
      <Component2 data={data} />
    </>
    )
}
export default Component1;
