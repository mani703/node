var callback1 = function(){
    console.log('1실행');
};
console.log('main start...');
var call1 = setImmediate(callback1);    // 이벤트 큐 최우선순위
clearImmediate(call1);
setTimeout(function(){
    console.log('3실행');
}, 0)
console.log('main end...');

