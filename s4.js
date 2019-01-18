async function f() {
  console.log("ready");
  const timeout = ms =>
    new Promise(res =>
      setTimeout(() => {
        res({ ms });
      }, ms)
    );
  const all = {
    one: await timeout(100),
    two: await timeout(1000),
    three: await timeout(3000)
  };
  console.log(all);
}
f();
