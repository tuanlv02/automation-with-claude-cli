(() => {
var __webpack_modules__ = ({
"../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/dev-server.js"(module, __unused_rspack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
  /** @type {undefined|string} */
  var lastHash;
  var upToDate = function upToDate() {
    return /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;
  };
  var log = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/log.js");
  var check = function check() {
    module.hot
      .check(true)
      .then(function (updatedModules) {
        if (!updatedModules) {
          log(
            'warning',
            '[HMR] Cannot find update. ' +
              (typeof window !== 'undefined'
                ? 'Need to do a full reload!'
                : 'Please reload manually!'),
          );
          log(
            'warning',
            '[HMR] (Probably because of restarting the webpack-dev-server)',
          );
          if (typeof window !== 'undefined') {
            window.location.reload();
          }
          return;
        }

        if (!upToDate()) {
          check();
        }

        __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/log-apply-result.js")(updatedModules, updatedModules);

        if (upToDate()) {
          log('info', '[HMR] App is up to date.');
        }
      })
      .catch(function (err) {
        var status = module.hot.status();
        if (['abort', 'fail'].indexOf(status) >= 0) {
          log(
            'warning',
            '[HMR] Cannot apply update. ' +
              (typeof window !== 'undefined'
                ? 'Need to do a full reload!'
                : 'Please reload manually!'),
          );
          log('warning', '[HMR] ' + log.formatError(err));
          if (typeof window !== 'undefined') {
            window.location.reload();
          }
        } else {
          log('warning', '[HMR] Update failed: ' + log.formatError(err));
        }
      });
  };
  var hotEmitter = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/emitter.js");
  hotEmitter.on('webpackHotUpdate', function (currentHash) {
    lastHash = currentHash;
    if (!upToDate() && module.hot.status() === 'idle') {
      log('info', '[HMR] Checking for updates on the server...');
      check();
    }
  });
  log('info', '[HMR] Waiting for update signal from WDS...');
} else {}


},
"../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/emitter.js"(module) {
function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function (eventName, callback) {
  if (!this.events[eventName]) {
    this.events[eventName] = [];
  }
  this.events[eventName].push(callback);
};

EventEmitter.prototype.emit = function (eventName) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (this.events[eventName]) {
    this.events[eventName].forEach(function (callback) {
      callback.apply(null, args);
    });
  }
};

module.exports = new EventEmitter();


},
"../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/log-apply-result.js"(module, __unused_rspack_exports, __webpack_require__) {
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });
  var log = __webpack_require__("../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/log.js");

  if (unacceptedModules.length > 0) {
    log(
      'warning',
      "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)",
    );
    unacceptedModules.forEach(function (moduleId) {
      log('warning', '[HMR]  - ' + moduleId);
    });
  }

  if (!renewedModules || renewedModules.length === 0) {
    log('info', '[HMR] Nothing hot updated.');
  } else {
    log('info', '[HMR] Updated modules:');
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === 'string' && moduleId.indexOf('!') !== -1) {
        var parts = moduleId.split('!');
        log.groupCollapsed('info', '[HMR]  - ' + parts.pop());
        log('info', '[HMR]  - ' + moduleId);
        log.groupEnd('info');
      } else {
        log('info', '[HMR]  - ' + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === 'number';
    });
    if (numberIds)
      log(
        'info',
        '[HMR] Consider using the optimization.moduleIds: "named" for module names.',
      );
  }
};


},
"../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/log.js"(module) {
/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = 'info';

function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
  var shouldLog =
    (logLevel === 'info' && level === 'info') ||
    (['info', 'warning'].indexOf(logLevel) >= 0 && level === 'warning') ||
    (['info', 'warning', 'error'].indexOf(logLevel) >= 0 && level === 'error');
  return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === 'info') {
      console.log(msg);
    } else if (level === 'warning') {
      console.warn(msg);
    } else if (level === 'error') {
      console.error(msg);
    }
  }
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
  logLevel = level;
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;
  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + '\n' + stack;
  } else {
    return stack;
  }
};


},
"./src/app.controller.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppController: () => (AppController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_swagger__rspack_import_1 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_swagger__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__rspack_import_1);
/* import */ var _app_service__rspack_import_2 = __webpack_require__("./src/app.service.ts");
/* import */ var _dto__rspack_import_3 = __webpack_require__("./src/dto/index.ts");
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




var AppController = /*#__PURE__*/ function() {
    "use strict";
    function AppController(appService) {
        _class_call_check(this, AppController);
        _define_property(this, "appService", void 0);
        this.appService = appService;
    }
    _create_class(AppController, [
        {
            key: "getHello",
            value: function getHello() {
                return this.appService.getHello();
            }
        },
        {
            key: "healthCheck",
            value: function healthCheck() {
                return this.appService.getHealth();
            }
        }
    ]);
    return AppController;
}();
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    (0,_nestjs_common__rspack_import_0.Version)('1'),
    (0,_nestjs_swagger__rspack_import_1.ApiOperation)({
        summary: 'Health check endpoint'
    }),
    (0,_nestjs_swagger__rspack_import_1.ApiOkResponse)({
        description: 'Service is running',
        type: _dto__rspack_import_3.HelloResponseDto
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof _dto__rspack_import_3.HelloResponseDto === "undefined" ? Object : _dto__rspack_import_3.HelloResponseDto)
], AppController.prototype, "getHello", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)('health'),
    (0,_nestjs_common__rspack_import_0.Version)('1'),
    (0,_nestjs_swagger__rspack_import_1.ApiOperation)({
        summary: 'Health check'
    }),
    (0,_nestjs_swagger__rspack_import_1.ApiOkResponse)({
        description: 'Service health status',
        type: _dto__rspack_import_3.HealthResponseDto
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", typeof _dto__rspack_import_3.HealthResponseDto === "undefined" ? Object : _dto__rspack_import_3.HealthResponseDto)
], AppController.prototype, "healthCheck", null);
AppController = _ts_decorate([
    (0,_nestjs_swagger__rspack_import_1.ApiTags)('App'),
    (0,_nestjs_common__rspack_import_0.Controller)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _app_service__rspack_import_2.AppService === "undefined" ? Object : _app_service__rspack_import_2.AppService
    ])
], AppController);


},
"./src/app.module.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
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
            _users_users_module__rspack_import_4.UsersModule
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
"./src/app.service.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppService: () => (AppService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
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

var AppService = /*#__PURE__*/ function() {
    "use strict";
    function AppService() {
        _class_call_check(this, AppService);
    }
    _create_class(AppService, [
        {
            key: "getHello",
            value: function getHello() {
                return {
                    message: 'Hello from API!',
                    timestamp: new Date(),
                    requestId: crypto.randomUUID()
                };
            }
        },
        {
            key: "getHealth",
            value: function getHealth() {
                return {
                    status: 'ok',
                    timestamp: new Date(),
                    service: 'backend',
                    version: '1.0.0',
                    uptime: process.uptime()
                };
            }
        }
    ]);
    return AppService;
}();
AppService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], AppService);


},
"./src/dto/health-response.dto.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HealthResponseDto: () => (HealthResponseDto)
});
/* import */ var _nestjs_swagger__rspack_import_0 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_swagger__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__rspack_import_0);
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

var HealthResponseDto = function HealthResponseDto() {
    "use strict";
    _class_call_check(this, HealthResponseDto);
    _define_property(this, "status", void 0);
    _define_property(this, "timestamp", void 0);
    _define_property(this, "service", void 0);
    _define_property(this, "version", void 0);
    _define_property(this, "uptime", void 0);
};
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        description: 'Service health status',
        example: 'ok',
        enum: [
            'ok',
            'error',
            'degraded'
        ],
        enumName: 'HealthStatus'
    }),
    _ts_metadata("design:type", String)
], HealthResponseDto.prototype, "status", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        description: 'Current timestamp in ISO format',
        type: Date,
        example: '2025-02-23T10:30:00.000Z'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], HealthResponseDto.prototype, "timestamp", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiPropertyOptional)({
        description: 'Service name',
        example: 'backend'
    }),
    _ts_metadata("design:type", String)
], HealthResponseDto.prototype, "service", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiPropertyOptional)({
        description: 'Service version',
        example: '1.0.0'
    }),
    _ts_metadata("design:type", String)
], HealthResponseDto.prototype, "version", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiPropertyOptional)({
        description: 'Server uptime in seconds',
        type: 'integer',
        format: 'int64'
    }),
    _ts_metadata("design:type", Number)
], HealthResponseDto.prototype, "uptime", void 0);


},
"./src/dto/hello-response.dto.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HelloResponseDto: () => (HelloResponseDto)
});
/* import */ var _nestjs_swagger__rspack_import_0 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_swagger__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__rspack_import_0);
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

var HelloResponseDto = function HelloResponseDto() {
    "use strict";
    _class_call_check(this, HelloResponseDto);
    _define_property(this, "message", void 0);
    _define_property(this, "timestamp", void 0);
    _define_property(this, "requestId", void 0);
};
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiProperty)({
        description: 'Greeting message',
        example: 'Hello from NestJS with Fastify!'
    }),
    _ts_metadata("design:type", String)
], HelloResponseDto.prototype, "message", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiPropertyOptional)({
        description: 'Response timestamp in ISO format',
        type: Date,
        example: '2025-02-23T10:30:00.000Z'
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], HelloResponseDto.prototype, "timestamp", void 0);
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiPropertyOptional)({
        description: 'Request ID for tracing',
        type: String,
        format: 'uuid',
        example: '550e8400-e29b-41d4-a716-446655440000'
    }),
    _ts_metadata("design:type", String)
], HelloResponseDto.prototype, "requestId", void 0);


},
"./src/dto/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HealthResponseDto: () => (/* reexport safe */ _health_response_dto__rspack_import_0.HealthResponseDto),
  HelloResponseDto: () => (/* reexport safe */ _hello_response_dto__rspack_import_1.HelloResponseDto)
});
/* import */ var _health_response_dto__rspack_import_0 = __webpack_require__("./src/dto/health-response.dto.ts");
/* import */ var _hello_response_dto__rspack_import_1 = __webpack_require__("./src/dto/hello-response.dto.ts");




},
"./src/main.ts"(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  bootstrap: () => (bootstrap)
});
/* import */ var _nestjs_core__rspack_import_0 = __webpack_require__("@nestjs/core");
/* import */ var _nestjs_core__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__rspack_import_0);
/* import */ var _nestjs_platform_fastify__rspack_import_1 = __webpack_require__("@nestjs/platform-fastify");
/* import */ var _nestjs_platform_fastify__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_fastify__rspack_import_1);
/* import */ var _nestjs_swagger__rspack_import_2 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_swagger__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__rspack_import_2);
/* import */ var _nestjs_common__rspack_import_3 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_3);
/* import */ var _nestjs_config__rspack_import_4 = __webpack_require__("@nestjs/config");
/* import */ var _nestjs_config__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__rspack_import_4);
/* import */ var class_validator__rspack_import_5 = __webpack_require__("class-validator");
/* import */ var class_validator__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(class_validator__rspack_import_5);
/* import */ var _scalar_nestjs_api_reference__rspack_import_6 = __webpack_require__("@scalar/nestjs-api-reference");
/* import */ var _scalar_nestjs_api_reference__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_scalar_nestjs_api_reference__rspack_import_6);
/* import */ var _app_module__rspack_import_7 = __webpack_require__("./src/app.module.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}








function bootstrap() {
    return _async_to_generator(function() {
        var fastifyAdapter, app, configService, servicePrefix, allowedOrigins, rawWildcardOrigins, envWildcardPatterns, wildcardOriginPatterns, corsOriginValidator, config, document, port;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fastifyAdapter = new _nestjs_platform_fastify__rspack_import_1.FastifyAdapter();
                    // Register multipart plugin for file uploads
                    return [
                        4,
                        fastifyAdapter.register(__webpack_require__("@fastify/multipart"), {
                            attachFieldsToBody: false,
                            limits: {
                                fileSize: 20 * 1024 * 1024,
                                files: 1,
                                fieldSize: 1024
                            }
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _nestjs_core__rspack_import_0.NestFactory.create(_app_module__rspack_import_7.AppModule, fastifyAdapter)
                    ];
                case 2:
                    app = _state.sent();
                    configService = app.get(_nestjs_config__rspack_import_4.ConfigService);
                    (0,class_validator__rspack_import_5.useContainer)(app.select(_app_module__rspack_import_7.AppModule), {
                        fallbackOnErrors: true
                    });
                    // Get service prefix from environment (default: backend)
                    servicePrefix = configService.get('SERVICE_PREFIX', 'backend');
                    // Set global prefix for all routes
                    app.setGlobalPrefix(servicePrefix);
                    // Enable global validation pipe with transform for DTO auto-parsing
                    app.useGlobalPipes(new _nestjs_common__rspack_import_3.ValidationPipe({
                        transform: true
                    }));
                    // Configure CORS
                    allowedOrigins = configService.get('CORS_ORIGIN', 'http://localhost:3000').split(',');
                    rawWildcardOrigins = configService.get('CORS_ORIGIN_REGEX');
                    envWildcardPatterns = rawWildcardOrigins ? rawWildcardOrigins.split(',').map(function(pattern) {
                        return pattern.trim();
                    }).filter(Boolean).map(function(pattern) {
                        try {
                            return new RegExp(pattern);
                        } catch (err) {
                            console.warn("Invalid CORS origin regex pattern: ".concat(pattern), err);
                            return null;
                        }
                    }).filter(function(pattern) {
                        return Boolean(pattern);
                    }) : [];
                    wildcardOriginPatterns = envWildcardPatterns;
                    corsOriginValidator = function(origin, callback) {
                        if (!origin) {
                            return callback(null, true);
                        }
                        // Check exact match first
                        var exactMatch = allowedOrigins.includes(origin);
                        // Check regex patterns
                        var regexMatch = wildcardOriginPatterns.some(function(pattern) {
                            return pattern.test(origin);
                        });
                        if (exactMatch || regexMatch) {
                            return callback(null, true);
                        }
                        console.warn("CORS blocked origin: ".concat(origin));
                        callback(new Error('Not allowed by CORS'));
                    };
                    app.enableCors({
                        origin: corsOriginValidator,
                        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS'
                    });
                    // Enable API versioning
                    app.enableVersioning({
                        type: _nestjs_common__rspack_import_3.VersioningType.URI
                    });
                    // Configure Swagger documentation
                    config = new _nestjs_swagger__rspack_import_2.DocumentBuilder().setTitle("".concat(servicePrefix.toUpperCase(), " API")).setDescription("API documentation for ".concat(servicePrefix, " service")).addBearerAuth().addServer('http://localhost:3000', 'Local').addServer('https://dev-origin-api.example.com', 'Development').addServer('https://api.example.com', 'Production').build();
                    document = _nestjs_swagger__rspack_import_2.SwaggerModule.createDocument(app, config);
                    // Setup Swagger JSON endpoint and Scalar UI
                    _nestjs_swagger__rspack_import_2.SwaggerModule.setup('api', app, document);
                    app.use('/reference', (0,_scalar_nestjs_api_reference__rspack_import_6.apiReference)({
                        url: '/api-json',
                        withFastify: true
                    }));
                    port = +configService.get('PORT', '3000') || 3000;
                    return [
                        4,
                        app.listen(port, '0.0.0.0')
                    ];
                case 3:
                    _state.sent();
                    console.log("\uD83D\uDE80 ".concat(servicePrefix.toUpperCase(), " service running on port ").concat(port));
                    console.log("\uD83D\uDCD6 Scalar reference: http://localhost:".concat(port, "/reference"));
                    console.log("\uD83D\uDCDA Swagger JSON: http://localhost:".concat(port, "/api-json"));
                    return [
                        2
                    ];
            }
        });
    })();
}
// Only run bootstrap when this file is executed directly, not when imported for testing
if (__webpack_require__.c[__webpack_require__.s] === module || process.argv[1].endsWith('/main.js')) {
    bootstrap();
}


},
"./src/users/dto/create-user.dto.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
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
"./src/users/dto/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateUserDto: () => (/* reexport safe */ _create_user_dto__rspack_import_0.CreateUserDto),
  QueryUserDto: () => (/* reexport safe */ _query_user_dto__rspack_import_1.QueryUserDto)
});
/* import */ var _create_user_dto__rspack_import_0 = __webpack_require__("./src/users/dto/create-user.dto.ts");
/* import */ var _query_user_dto__rspack_import_1 = __webpack_require__("./src/users/dto/query-user.dto.ts");




},
"./src/users/dto/query-user.dto.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  QueryUserDto: () => (QueryUserDto)
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


var QueryUserDto = function QueryUserDto() {
    "use strict";
    _class_call_check(this, QueryUserDto);
    _define_property(this, "search", void 0);
};
_ts_decorate([
    (0,_nestjs_swagger__rspack_import_0.ApiPropertyOptional)({
        description: 'Search keyword for user name of email'
    }),
    (0,class_validator__rspack_import_1.IsOptional)(),
    _ts_metadata("design:type", String)
], QueryUserDto.prototype, "search", void 0);


},
"./src/users/users.controller.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersController: () => (UsersController)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _users_service__rspack_import_1 = __webpack_require__("./src/users/users.service.ts");
/* import */ var _nestjs_swagger__rspack_import_2 = __webpack_require__("@nestjs/swagger");
/* import */ var _nestjs_swagger__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__rspack_import_2);
/* import */ var _dto__rspack_import_3 = __webpack_require__("./src/users/dto/index.ts");
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
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}










var UsersController = /*#__PURE__*/ function() {
    "use strict";
    function UsersController(userService) {
        _class_call_check(this, UsersController);
        _define_property(this, "userService", void 0);
        this.userService = userService;
    }
    _create_class(UsersController, [
        {
            key: "createUser",
            value: function createUser(createUserDto) {
                return this.userService.createUser(createUserDto);
            }
        },
        {
            key: "findUsers",
            value: function findUsers(query) {
                return this.userService.findUsers(query);
            }
        },
        {
            key: "findUserById",
            value: function findUserById(userId) {
                return this.userService.findUserById(userId);
            }
        }
    ]);
    return UsersController;
}();
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Post)(),
    (0,_nestjs_common__rspack_import_0.Version)('1'),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: 'Create a new user',
        description: 'Create a new user account in the system'
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiOkResponse)({
        description: 'User created successfully'
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto__rspack_import_3.CreateUserDto === "undefined" ? Object : _dto__rspack_import_3.CreateUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(),
    (0,_nestjs_common__rspack_import_0.Version)('1'),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: 'Get list of users',
        description: 'Retrieve a list of users'
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiOkResponse)({
        description: 'Users retrieved successfully'
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Query)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto__rspack_import_3.QueryUserDto === "undefined" ? Object : _dto__rspack_import_3.QueryUserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "findUsers", null);
_ts_decorate([
    (0,_nestjs_common__rspack_import_0.Get)(':id'),
    (0,_nestjs_common__rspack_import_0.Version)('1'),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: 'Get user by id',
        description: 'Retrieve a user by ID'
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiOkResponse)({
        description: 'User retrieved successfully'
    }),
    _ts_param(0, (0,_nestjs_common__rspack_import_0.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "findUserById", null);
UsersController = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Controller)('users'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _users_service__rspack_import_1.UsersService === "undefined" ? Object : _users_service__rspack_import_1.UsersService
    ])
], UsersController);


},
"./src/users/users.module.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsersModule: () => (UsersModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _users_controller__rspack_import_1 = __webpack_require__("./src/users/users.controller.ts");
/* import */ var _users_service__rspack_import_2 = __webpack_require__("./src/users/users.service.ts");
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



var UsersModule = function UsersModule() {
    "use strict";
    _class_call_check(this, UsersModule);
};
UsersModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        controllers: [
            _users_controller__rspack_import_1.UsersController
        ],
        providers: [
            _users_service__rspack_import_2.UsersService
        ]
    })
], UsersModule);


},
"./src/users/users.service.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
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
UsersService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)()
], UsersService);


},
"../../libs/app-logger/src/app-logger.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppLogger: () => (AppLogger),
  LogActivity: () => (LogActivity)
});
/* import */ var _error_handler__rspack_import_0 = __webpack_require__("../../libs/app-logger/src/error-handler.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

var AppLogger = /*#__PURE__*/ function() {
    "use strict";
    function AppLogger(context) {
        _class_call_check(this, AppLogger);
        _define_property(this, "contextName", void 0);
        this.contextName = context;
    }
    _create_class(AppLogger, [
        {
            key: "customLog",
            value: function customLog(info) {
                var _info_error;
                var logMessage = {
                    input_s: info.hasOwnProperty('input') ? info.input : '',
                    output_s: info.hasOwnProperty('output') ? info.output : '',
                    error_s: (_info_error = info.error) !== null && _info_error !== void 0 ? _info_error : '',
                    source_s: "".concat(this.contextName, ".").concat(info.function)
                };
                if ('message' in info) {
                    logMessage.message = info.message;
                }
                console.log(JSON.stringify(logMessage)); // Explicitly log context and message
            }
        }
    ]);
    return AppLogger;
}();
function LogActivity() {
    return function(target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return _async_to_generator(function() {
                var logger, logInfo, output, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            logger = new AppLogger(target.constructor.name);
                            logInfo = {
                                function: propertyKey.toString(),
                                input: args
                            };
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                4,
                                5
                            ]);
                            return [
                                4,
                                originalMethod.apply(this, args)
                            ];
                        case 2:
                            output = _state.sent();
                            logInfo.output = output;
                            return [
                                2,
                                output
                            ];
                        case 3:
                            error = _state.sent();
                            logInfo.error = (0,_error_handler__rspack_import_0.errorHandler)(error);
                            throw error;
                        case 4:
                            logger.customLog(logInfo);
                            return [
                                7
                            ];
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            }).call(this);
        };
        return descriptor;
    };
}


},
"../../libs/app-logger/src/error-handler.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  errorHandler: () => (errorHandler)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var axios__rspack_import_1 = __webpack_require__("axios");
/* import */ var axios__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(axios__rspack_import_1);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


var errorHandler = function(error) {
    if (_instanceof(error, axios__rspack_import_1.AxiosError)) {
        var _error_response;
        var config, headers;
        if (error.config) {
            var _error_config_headers;
            headers = _object_spread_props(_object_spread({}, (_error_config_headers = error.config.headers) !== null && _error_config_headers !== void 0 ? _error_config_headers : {}), {
                Authorization: '***********',
                'Ocp-Apim-Subscription-Key': '***********'
            });
            config = _object_spread_props(_object_spread({}, error.config), {
                headers: headers
            });
        }
        return {
            message: error.message,
            name: error.name,
            code: error.code,
            config: config,
            response: error.response ? {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data
            } : undefined,
            status: (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status
        };
    } else if (_instanceof(error, _nestjs_common__rspack_import_0.BadRequestException)) {
        return {
            message: error.message,
            name: error.name,
            response: error.getResponse()
        };
    } else if (_instanceof(error, Error)) {
        return {
            message: error.message,
            name: error.name,
            stack: error.stack
        };
    }
    return {
        message: 'Unknown Exception'
    };
};


},
"../../libs/app-logger/src/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppLogger: () => (/* reexport safe */ _app_logger__rspack_import_0.AppLogger),
  LogActivity: () => (/* reexport safe */ _app_logger__rspack_import_0.LogActivity)
});
/* import */ var _app_logger__rspack_import_0 = __webpack_require__("../../libs/app-logger/src/app-logger.ts");



},
"@fastify/multipart"(module) {
"use strict";
module.exports = require("@fastify/multipart");

},
"@nestjs/common"(module) {
"use strict";
module.exports = require("@nestjs/common");

},
"@nestjs/config"(module) {
"use strict";
module.exports = require("@nestjs/config");

},
"@nestjs/core"(module) {
"use strict";
module.exports = require("@nestjs/core");

},
"@nestjs/platform-fastify"(module) {
"use strict";
module.exports = require("@nestjs/platform-fastify");

},
"@nestjs/swagger"(module) {
"use strict";
module.exports = require("@nestjs/swagger");

},
"@scalar/nestjs-api-reference"(module) {
"use strict";
module.exports = require("@scalar/nestjs-api-reference");

},
"axios"(module) {
"use strict";
module.exports = require("axios");

},
"class-validator"(module) {
"use strict";
module.exports = require("class-validator");

},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function

        var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
        __webpack_require__.i.forEach(function(handler) { handler(execOptions); });
        module = execOptions.module;
        if (!execOptions.factory) {
          console.error("undefined factory", moduleId);
          throw Error("RuntimeError: factory is undefined (" + moduleId + ")");
        }
        execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
      
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
};
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("f957f4de22a01ced")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "main." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus;
	
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	}
	
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.6")
})();
// webpack/runtime/require_chunk_loading
(() => {
var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {"main": 1,};
function loadUpdateChunk(chunkId, updatedModulesList) {
	var update = require("./" + __webpack_require__.hu(chunkId));
	var updatedModules = update.modules;
	var runtime = update.runtime;
	for (var moduleId in updatedModules) {
		if (__webpack_require__.o(updatedModules, moduleId)) {
			currentUpdate[moduleId] = updatedModules[moduleId];
			if (updatedModulesList) updatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
}var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
		throw Error("RuntimeError: factory is undefined(" + module.id + ")");
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result = newModuleFactory ? getAffectedModuleEffects(moduleId) : {
				type: "disposed",
				moduleId: moduleId
			};
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
							result.moduleId +
							" in " +
							result.parentId +
							chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	}
	

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers;
				
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
					
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				
				currentUpdateRuntime[i](__webpack_require__);
				
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler);
								
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err1) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err1,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err1);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.require = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.requireHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = () => {
	return Promise.resolve()
		.then(() => {
			return require("./" + __webpack_require__.hmrF());
		})['catch']((err) => {
			if (err.code !== 'MODULE_NOT_FOUND') throw err;
		});
};
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.6";
})();
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__(__webpack_require__.s = "../../node_modules/.pnpm/@rspack+core@1.7.6/node_modules/@rspack/core/hot/dev-server.js");
var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/main.ts");
})()
;
//# sourceMappingURL=main.js.map