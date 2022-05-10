Select 2 4.x.x Jasmine Problem
==

This is a toy project representing a real production project that we have a problem with.

The project worked fine under Select2 version 3.

We need to upgrade select2 for several reasons.

Under select2 version 4, everything works just fine, EXCEPT, we cannot get Jasmine (unit testing) to work. At all.

Examining the problem for yourself
--

1. `yarn install`
2. Run `bin/jasmine`
3. Observe the failure

```
node_modules/select2/dist/js/select2.full.js:6548
    if ( $.event.fixHooks ) {
                 ^

TypeError: Cannot read properties of undefined (reading 'fixHooks')
    at select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:6548:18
    at main (select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:363:39)
    at callDep (select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:221:18)
    at main (select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:354:31)
    at callDep (select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:221:18)
    at Object.req [as require] (select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:394:20)
    at select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:6811:20
    at module.exports (select2-jasmine-problem/node_modules/select2/dist/js/select2.full.js:27:7)
    at Object.<anonymous> (select2-jasmine-problem/bin/jasmine:64:43)
    at Module._compile (node:internal/modules/cjs/loader:1099:14)

Node.js v17.8.0
```

You can verify that select2 v3.x.x is OK:
1. downgrade package.json to `"select2": "^3.5.2-browserify"` and yarn install
2. open `bin/jasmine` and uncomment this line `// require('select2/select2.js'); // works fine with select2 version 3.x` and comment the other requires pertaining to select2
3. Run `bin/jasmine`
4. Observe that it works

Most likely cause
--

It seems that select2's loading mechanism was changed between v3 and v4. We don't know how to resolve it and are totally stuck.

Relevant reading
--

1. https://github.com/select2/select2/commit/45a877345482956021161203ac789c25f40a7d5e#commitcomment-24593031 - nearest thing to a direct support item on this issue

Things we've tried
--

1. Using 4.0.3 - we get the same problems

