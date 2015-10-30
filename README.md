##Juice

```
$ npm install elixir-juice --save-dev
```

```
var elixir = require('laravel-elixir');
 
require('elixir-juice');
 
elixir(function (mix) {
 
    // Bower dependencies 
    mix.bower({
        src: './bower_components',
        output: './resources/assets/vendor'
    });
});
```

