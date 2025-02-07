var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeAge = function () {
        // this.age=9; // this is not possible because age is private in parent class
    };
    SubUser.prototype.changeEmail = function () {
        this.email = "nitin@gmail.com";
    };
    return SubUser;
}(User));
var nitin = new User("nitin", 10, "nitin@gmail.com");
// nitin.age = 10; // Error: Property 'age' is private and only accessible within class 'User'.
