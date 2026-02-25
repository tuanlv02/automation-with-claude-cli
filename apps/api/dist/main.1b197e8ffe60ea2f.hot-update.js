"use strict";
exports.ids = ["main"];
exports.modules = {
"./src/app.module.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppModule: () => (AppModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__("@nestjs/config");
/* import */ var _nestjs_config__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__rspack_import_1);
/* import */ var _app_controller__rspack_import_2 = __webpack_require__("./src/app.controller.ts");
/* import */ var _app_service__rspack_import_3 = __webpack_require__("./src/app.service.ts");
/* import */ var _users_users_module__rspack_import_4 = __webpack_require__("./src/users/users.module.ts");
/* import */ var _auth_auth_module__rspack_import_5 = __webpack_require__("./src/auth/auth.module.ts");
/* import */ var _prisma_module__rspack_import_6 = __webpack_require__("./src/prisma.module.ts");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}







var AppModule = function AppModule() {
    "use strict";
    _class_call_check(this, AppModule);
};
AppModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_config__rspack_import_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env'
            }),
            _users_users_module__rspack_import_4.UsersModule,
            _auth_auth_module__rspack_import_5.AuthModule,
            _prisma_module__rspack_import_6.PrismaModule
        ],
        controllers: [
            _app_controller__rspack_import_2.AppController
        ],
        providers: [
            _app_service__rspack_import_3.AppService
        ]
    })
], AppModule);


},

};
exports.runtime = function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("2fbf393b8c4b196b")
})();

}
;
;
//# sourceMappingURL=main.1b197e8ffe60ea2f.hot-update.js.map