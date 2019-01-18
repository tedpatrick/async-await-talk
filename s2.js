async function f() {
    console.log( "ready" );

    const timeout = (ms) => new Promise( (res) => setTimeout(()=>{res(ms)}, ms) )

    let v1 = await timeout(1000);
    console.log( v1 );

    let v2 = await timeout(2000);
    console.log( v2 );

    let v3 = await timeout(1000);
    console.log( v3 );
}
f();