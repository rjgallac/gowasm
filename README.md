set GOOS=js

SET GOARCH=wasm

go build -o test.wasm .

cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .