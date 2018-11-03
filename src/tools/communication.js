export function communication(params) {
    console.log('点击');
    params=JSON.stringify(params);
    window.postMessage(params);
}