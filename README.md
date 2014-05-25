# mem-store

[fluxxor store](http://fluxxor.com/) in memory

## how to use

```
npm install --save mem-store
```

```
var MemStore = require('mem-store');
var Fluxxor = require('fluxxor');

var MyStore = MemStore();

var actions = {...};
var stores = { MyStore: MyStore };

var flux = new Fluxxor.Flux(stores, actions);
```

## methods

### create(data, params)

### update(id, data, params)

### patch(id, data, params)

### remove(id)
