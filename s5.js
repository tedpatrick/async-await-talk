async function f() {
  console.log("ready");
  const timeout = ms =>
    new Promise((res, rej) =>
      setTimeout(() => {
        rej("BOOM");
      }, ms)
    );
  try {
    await timeout(3000);
    console.log("COMPLETE");
  } catch (error) {
    console.log("ERROR", error);
  }
}
f();
