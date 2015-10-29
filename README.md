##Juice

```
$ npm install juice --save-dev
```

```
var elixir = require('laravel-elixir');
 
require('juice');
 
elixir(function (mix) {
 
    // Bower dependencies 
    mix.bower({
        src: './bower_components',
        output: './resources/assets/vendor'
    });
});
```

