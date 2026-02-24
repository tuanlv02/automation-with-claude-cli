"use strict";
exports.ids = ["main"];
exports.modules = {
"./src/users/users.service.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersService: () => (UsersService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _dto__rspack_import_1 = __webpack_require__("./src/users/dto/index.ts");
/* import */ var _app_app_logger__rspack_import_2 = __webpack_require__("../../libs/app-logger/src/index.ts");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}



var UsersService = /*#__PURE__*/ function() {
    "use strict";
    function UsersService() {
        _class_call_check(this, UsersService);
    }
    _create_class(UsersService, [
        {
            key: "createUser",
            value: function createUser(createUserDto) {
                return {
                    message: 'User created'
                };
            }
        },
        {
            key: "findUsers",
            value: function findUsers(queryUserDto) {
                return {
                    data: [],
                    query: queryUserDto
                };
            }
        },
        {
            key: "findUserById",
            value: function findUserById(userId) {
                return {
                    message: 'User retrieved successfully',
                    user: userId
                };
            }
        },
        {
            key: "getProfile",
            value: function getProfile(currentUser) {
                return {
                    message: 'User retrieved successfully',
                    currentUser: currentUser
                };
            }
        }
    ]);
    return UsersService;
}();
_ts_decorate([
    (0,_app_app_logger__rspack_import_2.LogActivity)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto__rspack_import_1.CreateUserDto === "undefined" ? Object : _dto__rspack_import_1.CreateUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersService.prototype, "createUser", null);
_ts_decorate([
    (0,_app_app_logger__rspack_import_2.LogActivity)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto__rspack_import_1.QueryUserDto === "undefined" ? Object : _dto__rspack_import_1.QueryUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersService.prototype, "findUsers", null);
UsersService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], UsersService);


},

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("6aa4ea0018c4f2c7")
})();

}
;
;
//# sourceMappingURL=main.3a98dbeec9728cc9.hot-update.js.map