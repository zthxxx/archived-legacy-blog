// import this before ht.js
ht.Data.prototype.setStyles = function(obj){
    this.s(obj);
    return this;
};
ht.Data.prototype.setAttrs = function(obj){
    this.a(obj);
    return this;
};
ht.PositionState = {X:0, Y:2, Z:1};