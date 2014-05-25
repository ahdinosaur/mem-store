var expect = require('chai').expect;

var createStore;
var ObjStore;
var objStore;

describe("mem-store", function () {

  it("should load MemStore", function () {
    createStore = require('../');
  });
  
  it("should createStore ObjStore", function () {
    ObjStore = createStore('objects');
  });

  it("should make new objStore", function () {
    objStore = new ObjStore();
    expect(objStore).to.exist;
    expect(objStore.onCreate).to.exist;
    expect(objStore.onUpdate).to.exist;
    expect(objStore.onPatch).to.exist;
    expect(objStore.onRemove).to.exist;
    expect(objStore.objects).to.deep.equal({});
  });

  it("should create object", function (done) {
    var doge = {
      id: "doge",
      such: "fun",
      wow: true,
    };

    objStore.once("change", function () {
      expect(objStore.objects["doge"]).to.deep.equal(doge);
      done();
    });
    objStore.onCreate(doge);
  });

  it("should patch object", function (done) {
    var doge = {
      id: "doge",
      wow: false,
    };

    objStore.once("change", function () {
      doge.such = "fun";
      expect(objStore.objects["doge"]).to.deep.equal(doge);
      done();
    });
    objStore.onUpdate(doge);
  });


  it("should update object", function (done) {
    var doge = {
      id: "doge",
      very: "great",
    };

    objStore.once("change", function () {
      expect(objStore.objects["doge"]).to.deep.equal(doge);
      done();
    });
    objStore.onUpdate(doge);
  });
});