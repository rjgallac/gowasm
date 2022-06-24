const fs = require('fs');

const wasmBuffer = fs.readFileSync('test.wasm');

var importObject = {
    imports: {
      add: function(a, b) {
        console.log(a);
      }
    }
  };

  fetch('simple.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
  ).then(result =>
    result.instance.exports.exported_func()
  );