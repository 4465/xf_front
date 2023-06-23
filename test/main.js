var message = "hello World!";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("runboob");
    };
    return Site;
}());
var obj = new Site();
obj.name();
var binaryLiteral = 10;
console.log(binaryLiteral);
