async function f() {
  console.log("ready");

  const timeout = ms => new Promise(res => setTimeout(res, ms));

  await timeout(1000);
  console.log("after 1000ms");

  await timeout(2000);
  console.log("after 2000ms");

  await timeout(1000);
  console.log("after 1000ms --> done!");
}
f();
