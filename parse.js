var parse = function (string) {
    var parseArray = string.split(' -> ');
   
    parseArray.forEach(function (item) {
        linkedlist.addToTail(item);
    });
   
    var Linkedlist = function () {
       var list = {};
   
       this.head = null,
       this.tail = null
    };
   
    Linkedlist.prototype.addToTail = function(value) {
        var node = {
            value: value,
            next: null,
        };
    
        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        } 
    
        this.tail = node;
    };
    
    return linkedlist;
   };
   
var linkedlist = new Linkedlist();
parse('1 -> 2 -> 3 -> null');
console.log(linkedlist);