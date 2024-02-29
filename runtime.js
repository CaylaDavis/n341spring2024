sum = 0;
for( i = 0; i < n; ++i )
++sum;

function measureRuntime(n) {
    var startTime = performance.now();
    var sum = 0;
    for (var i = 0; i < n; ++i) {
        ++sum;
    }
    var endTime = performance.now();
    var runtime = endTime - startTime;
    console.log("Runtime for n =", n, "is", runtime, "milliseconds");
}

// Test with multiple values of n
var testValues = [10, 100, 1000, 10000];
testValues.forEach(function(n) {
    measureRuntime(n);
});
