let NAME = ["Urvish", "Tejash", "Jay", "Shahil"];

let x = [<h1>Urvish</h1>, <h1>Tejash</h1>, <h1>Jay</h1>, <h1>Shahil</h1>];

export function MapAndKey(params) {
  let no = 1000;
  return (
    <div>
      {/* <div>
        <h1>Urvish</h1>
      </div>
      <div>
        <h1>Tejash</h1>
      </div>
      <div>
        <h1>Jay</h1>
      </div>
      <div>
        <h1>Shahil</h1>
      </div> */}
      <h1>{no}</h1>

      {/* {x} */}

      {NAME.map((e, i) => {
        console.log("-----e", e);
        return (
          <div key={i}>
            <div>
              <h1>{e}</h1>
              <h1>{i}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
