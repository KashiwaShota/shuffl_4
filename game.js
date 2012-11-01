Array.prototype.shuffle = function(){
  var i = this.length;
  while(i){
    var j = Math.floor(Math.random() * i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

document.write("アルゴリズムとデータ構造：シャッフル演習");
a = [1, 2, 3, 4, 5];
document.write("<BR>シャッフル前：");
for(var k = 0; k < a.length; k++){
  document.write(a[k] + "、");
}
a.shuffle();
document.write("<BR>シャッフル後：");
for(var l = 0; l < a.length; l++){
  document.write(a[l] + "、");
}