async function f() {
  console.log("ready");
  const timeout = ms =>
    new Promise(res =>
      setTimeout(() => {
        res({ ms });
      }, ms)
    );
  const all = Promise.all([timeout(100), timeout(1000), timeout(3000)]);
  let allResults = await all;
  console.log(allResults);
}
f();
