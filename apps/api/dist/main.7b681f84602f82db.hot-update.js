"use strict";
exports.ids = ["main"];
exports.modules = {
"./src/users/dto/create-user.dto.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateUserDto: () => (CreateUserDto)
});
/* import */ var _nestjs_swagger__rspack_import_0 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_swagger__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__rspack_import_0);
/* import */ var class_validator__rspack_import_1 = __webpack_require__("class-validator");
/* import */ var class_validator__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_1);
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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


var CreateUserDto = function CreateUserDto() {
    "use strict";
    _class_call_check(this, CreateUserDto);
    _define_property(this, "name", void 0);
    _define_property(this, "email", void 0);
    _define_property(this, "password", void 0);
};
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        description: 'Full name',
        example: 'Tuan LV'
    }),
    (0,class_validator__rspack_import_1.IsNotEmpty)(),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        description: 'Email'
    }),
    (0,class_validator__rspack_import_1.IsNotEmpty)(),
    (0,class_validator__rspack_import_1.IsEmail)(),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        description: 'Password'
    }),
    (0,class_validator__rspack_import_1.IsNotEmpty)(),
    (0,class_validator__rspack_import_1.MinLength)(4),
    _ts_metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);


},

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("f957f4de22a01ced")
})();

}
;
;
//# sourceMappingURL=main.7b681f84602f82db.hot-update.js.map