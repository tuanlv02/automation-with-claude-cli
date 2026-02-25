(() => {
var __webpack_modules__ = ({
"../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js"(module) {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AnyNull: () => AnyNull,
  AnyNullClass: () => AnyNullClass,
  DbNull: () => DbNull,
  DbNullClass: () => DbNullClass,
  Decimal: () => Decimal,
  JsonNull: () => JsonNull,
  JsonNullClass: () => JsonNullClass,
  NullTypes: () => NullTypes,
  ObjectEnumValue: () => ObjectEnumValue,
  PrismaClientInitializationError: () => PrismaClientInitializationError,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError,
  PrismaClientRustError: () => PrismaClientRustError,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError,
  PrismaClientValidationError: () => PrismaClientValidationError,
  Sql: () => Sql,
  empty: () => empty,
  hasBatchIndex: () => hasBatchIndex,
  isAnyNull: () => isAnyNull,
  isDbNull: () => isDbNull,
  isJsonNull: () => isJsonNull,
  join: () => join,
  raw: () => raw,
  sql: () => sql
});
module.exports = __toCommonJS(index_exports);

// src/errors/ErrorWithBatchIndex.ts
function hasBatchIndex(value) {
  return typeof value["batchRequestIdx"] === "number";
}

// src/errors/setClassName.ts
function setClassName(classObject, name) {
  Object.defineProperty(classObject, "name", {
    value: name,
    configurable: true
  });
}

// src/errors/PrismaClientInitializationError.ts
var PrismaClientInitializationError = class _PrismaClientInitializationError extends Error {
  clientVersion;
  errorCode;
  retryable;
  constructor(message, clientVersion, errorCode) {
    super(message);
    this.name = "PrismaClientInitializationError";
    this.clientVersion = clientVersion;
    this.errorCode = errorCode;
    Error.captureStackTrace(_PrismaClientInitializationError);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
setClassName(PrismaClientInitializationError, "PrismaClientInitializationError");

// src/errors/PrismaClientKnownRequestError.ts
var PrismaClientKnownRequestError = class extends Error {
  code;
  meta;
  clientVersion;
  batchRequestIdx;
  constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
    super(message);
    this.name = "PrismaClientKnownRequestError";
    this.code = code;
    this.clientVersion = clientVersion;
    this.meta = meta;
    Object.defineProperty(this, "batchRequestIdx", {
      value: batchRequestIdx,
      enumerable: false,
      writable: true
    });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
setClassName(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");

// src/errors/log.ts
function getBacktrace(log3) {
  if (log3.fields?.message) {
    let str = log3.fields?.message;
    if (log3.fields?.file) {
      str += ` in ${log3.fields.file}`;
      if (log3.fields?.line) {
        str += `:${log3.fields.line}`;
      }
      if (log3.fields?.column) {
        str += `:${log3.fields.column}`;
      }
    }
    if (log3.fields?.reason) {
      str += `
${log3.fields?.reason}`;
    }
    return str;
  }
  return "Unknown error";
}
function isPanic(err) {
  return err.fields?.message === "PANIC";
}

// src/errors/PrismaClientRustError.ts
var PrismaClientRustError = class extends Error {
  clientVersion;
  _isPanic;
  constructor({ clientVersion, error }) {
    const backtrace = getBacktrace(error);
    super(backtrace ?? "Unknown error");
    this._isPanic = isPanic(error);
    this.clientVersion = clientVersion;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustError";
  }
  isPanic() {
    return this._isPanic;
  }
};
setClassName(PrismaClientRustError, "PrismaClientRustError");

// src/errors/PrismaClientRustPanicError.ts
var PrismaClientRustPanicError = class extends Error {
  clientVersion;
  constructor(message, clientVersion) {
    super(message);
    this.name = "PrismaClientRustPanicError";
    this.clientVersion = clientVersion;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
setClassName(PrismaClientRustPanicError, "PrismaClientRustPanicError");

// src/errors/PrismaClientUnknownRequestError.ts
var PrismaClientUnknownRequestError = class extends Error {
  clientVersion;
  batchRequestIdx;
  constructor(message, { clientVersion, batchRequestIdx }) {
    super(message);
    this.name = "PrismaClientUnknownRequestError";
    this.clientVersion = clientVersion;
    Object.defineProperty(this, "batchRequestIdx", {
      value: batchRequestIdx,
      writable: true,
      enumerable: false
    });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
setClassName(PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError");

// src/errors/PrismaClientValidationError.ts
var PrismaClientValidationError = class extends Error {
  name = "PrismaClientValidationError";
  clientVersion;
  constructor(message, { clientVersion }) {
    super(message);
    this.clientVersion = clientVersion;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
setClassName(PrismaClientValidationError, "PrismaClientValidationError");

// src/nullTypes.ts
var secret = Symbol();
var representations = /* @__PURE__ */ new WeakMap();
var ObjectEnumValue = class {
  constructor(arg) {
    if (arg === secret) {
      representations.set(this, `Prisma.${this._getName()}`);
    } else {
      representations.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
  }
  _getName() {
    return this.constructor.name;
  }
  toString() {
    return representations.get(this);
  }
};
function setClassName2(classObject, name) {
  Object.defineProperty(classObject, "name", {
    value: name,
    configurable: true
  });
}
var NullTypesEnumValue = class extends ObjectEnumValue {
  _getNamespace() {
    return "NullTypes";
  }
};
var DbNullClass = class extends NullTypesEnumValue {
  // Phantom private property to prevent structural type equality
  // eslint-disable-next-line no-unused-private-class-members
  #_brand_DbNull;
};
setClassName2(DbNullClass, "DbNull");
var JsonNullClass = class extends NullTypesEnumValue {
  // Phantom private property to prevent structural type equality
  // eslint-disable-next-line no-unused-private-class-members
  #_brand_JsonNull;
};
setClassName2(JsonNullClass, "JsonNull");
var AnyNullClass = class extends NullTypesEnumValue {
  // Phantom private property to prevent structural type equality
  // eslint-disable-next-line no-unused-private-class-members
  #_brand_AnyNull;
};
setClassName2(AnyNullClass, "AnyNull");
var NullTypes = {
  DbNull: DbNullClass,
  JsonNull: JsonNullClass,
  AnyNull: AnyNullClass
};
var DbNull = new DbNullClass(secret);
var JsonNull = new JsonNullClass(secret);
var AnyNull = new AnyNullClass(secret);
function isDbNull(value) {
  return value === DbNull;
}
function isJsonNull(value) {
  return value === JsonNull;
}
function isAnyNull(value) {
  return value === AnyNull;
}

// ../../node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var EXP_LIMIT = 9e15;
var MAX_DIGITS = 1e9;
var NUMERALS = "0123456789abcdef";
var LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
var PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
var DEFAULTS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -EXP_LIMIT,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: EXP_LIMIT,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: false
  // true/false
};
var inexact;
var quadrant;
var external = true;
var decimalError = "[DecimalError] ";
var invalidArgument = decimalError + "Invalid argument: ";
var precisionLimitExceeded = decimalError + "Precision limit exceeded";
var cryptoUnavailable = decimalError + "crypto unavailable";
var tag = "[object Decimal]";
var mathfloor = Math.floor;
var mathpow = Math.pow;
var isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
var isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
var isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
var isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var BASE = 1e7;
var LOG_BASE = 7;
var MAX_SAFE_INTEGER = 9007199254740991;
var LN10_PRECISION = LN10.length - 1;
var PI_PRECISION = PI.length - 1;
var P = { toStringTag: tag };
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0) x.s = 1;
  return finalise(x);
};
P.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P.clampedTo = P.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s) return new Ctor(NaN);
  if (min2.gt(max2)) throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys) return xs;
  if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P.cosine = P.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d) return new Ctor(NaN);
  if (!x.d[0]) return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P.cubeRoot = P.cbrt = function() {
  var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  external = false;
  s = x.s * mathpow(x.s * x, 1 / 3);
  if (!s || Math.abs(s) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s = (e - n.length + 1) % 3) n += s == 1 || s == -2 ? "0" : "00";
    s = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
    r.s = x.s;
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.decimalPlaces = P.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w) for (; w % 10 == 0; w /= 10) n--;
    if (n < 0) n = 0;
  }
  return n;
};
P.dividedBy = P.div = function(y) {
  return divide(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P.equals = P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P.hyperbolicCosine = P.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero()) return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.hyperbolicSine = P.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P.hyperbolicTangent = P.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(x.s);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P.inverseCosine = P.acos = function() {
  var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseHyperbolicCosine = P.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicSine = P.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P.inverseHyperbolicTangent = P.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P.inverseSine = P.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero()) return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P.inverseTangent = P.atan = function() {
  var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s) return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.5);
      r.s = x.s;
      return r;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r = getPi(Ctor, pr + 4, rm).times(0.25);
    r.s = x.s;
    return r;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r.minus(px.div(n += 2));
    px = px.times(x2);
    r = t.plus(px.div(n += 2));
    if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--; ) ;
  }
  if (k) r = r.times(2 << k - 1);
  external = true;
  return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P.isFinite = function() {
  return !!this.d;
};
P.isInteger = P.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P.isNaN = function() {
  return !this.s;
};
P.isNegative = P.isNeg = function() {
  return this.s < 0;
};
P.isPositive = P.isPos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base == null) {
    base = new Ctor(10);
    isBase10 = true;
  } else {
    base = new Ctor(base);
    d = base.d;
    if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
    isBase10 = base.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; ) k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
  r = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
      r = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r.d, k += 10, rm));
  }
  external = true;
  return finalise(r, pr, rm);
};
P.minus = P.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (x.d) y.s = -y.s;
    else y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0]) y.s = -y.s;
    else if (xd[0]) y = new Ctor(x);
    else return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; ) d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; ) xd.pop();
  for (; xd[0] === 0; xd.shift()) --e;
  if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return naturalExponential(this);
};
P.naturalLogarithm = P.ln = function() {
  return naturalLogarithm(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P.plus = P.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s) y = new Ctor(NaN);
    else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0]) y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; ) d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; ) xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P.precision = P.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k) k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P.sine = P.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P.squareRoot = P.sqrt = function() {
  var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
  if (s !== 1 || !d || !d[0]) {
    return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0) n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r, e + 1, 1);
          m = !r.times(r).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r, e, Ctor.rounding, m);
};
P.tangent = P.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite()) return new Ctor(NaN);
  if (x.isZero()) return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; ) r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; ) r.pop();
  if (carry) ++e;
  else r.shift();
  y.d = r;
  y.e = getBase10Exponent(r, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P.toDecimalPlaces = P.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0) return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd) return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1) break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r;
};
P.toHexadecimal = P.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d) return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d) return y.s ? x : y;
    if (!y.d) {
      if (y.s) y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P.toNumber = function() {
  return +this;
};
P.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1)) return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1)) return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
  }
  s = x.s;
  if (s < 0) {
    if (e < y.d.length - 1) return new Ctor(NaN);
    if ((y.d[e] & 1) == 0) s = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r.d) {
    r = finalise(r, pr + 5, 1);
    if (checkRoundingDigits(r.d, pr, rm)) {
      e = pr + 10;
      r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r = finalise(r, pr + 1, 0);
      }
    }
  }
  r.s = s;
  external = true;
  Ctor.rounding = rm;
  return finalise(r, pr, rm);
};
P.toPrecision = function(sd, rm) {
  var str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.toSignificantDigits = P.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P.toString = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str : str;
};
P.truncated = P.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P.valueOf = P.toJSON = function() {
  var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str : str;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; ) w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0]; k >= 10; k /= 10) --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0) rd = rd / 100 | 0;
      else if (i == 1) rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0) rd = rd / 1e3 | 0;
      else if (i == 1) rd = rd / 100 | 0;
      else if (i == 2) rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; ) arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0) arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero()) return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = /* @__PURE__ */ function() {
  function multiplyInteger(x, k, base) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base | 0;
      carry = temp / base | 0;
    }
    if (carry) x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract(a, b, aL, base) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; ) a.shift();
  }
  return function(x, y, pr, rm, dp, base) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(
        // Return NaN if either NaN, or both Infinity or 0.
        !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0
        )
      );
    }
    if (base) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++) ;
    if (yd[i] > (xd[i] || 0)) e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base);
          xd = multiplyInteger(xd, k, base);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; ) rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base / 2) ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base) k = base - 1;
              prod = multiplyInteger(yd, k, base);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base);
              }
            } else {
              if (k == 0) cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL) prod.unshift(0);
            subtract(rem, prod, remL, base);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0]) qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out: if (sd != null) {
    xd = x.d;
    if (!xd) return x;
    for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
    i = sd - digits;
    if (i < 0) {
      i += LOG_BASE;
      j = sd;
      w = xd[xdi = 0];
      rd = w / mathpow(10, digits - j - 1) % 10 | 0;
    } else {
      xdi = Math.ceil((i + 1) / LOG_BASE);
      k = xd.length;
      if (xdi >= k) {
        if (isTruncated) {
          for (; k++ <= xdi; ) xd.push(0);
          w = rd = 0;
          digits = 1;
          i %= LOG_BASE;
          j = i - LOG_BASE + 1;
        } else {
          break out;
        }
      } else {
        w = k = xd[xdi];
        for (digits = 1; k >= 10; k /= 10) digits++;
        i %= LOG_BASE;
        j = i - LOG_BASE + digits;
        rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
      }
    }
    isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
    roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
    if (sd < 1 || !xd[0]) {
      xd.length = 0;
      if (roundUp) {
        sd -= x.e + 1;
        xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
        x.e = -sd || 0;
      } else {
        xd[0] = x.e = 0;
      }
      return x;
    }
    if (i == 0) {
      xd.length = xdi;
      k = 1;
      xdi--;
    } else {
      xd.length = xdi + 1;
      k = mathpow(10, LOG_BASE - i);
      xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
    }
    if (roundUp) {
      for (; ; ) {
        if (xdi == 0) {
          for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
          j = xd[0] += k;
          for (k = 1; j >= 10; j /= 10) k++;
          if (i != k) {
            x.e++;
            if (xd[0] == BASE) xd[0] = 1;
          }
          break;
        } else {
          xd[xdi] += k;
          if (xd[xdi] != BASE) break;
          xd[xdi--] = 0;
          k = 1;
        }
      }
    }
    for (i = xd.length; xd[--i] === 0; ) xd.pop();
  }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite()) return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10) e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10) len--;
    for (w = digits[0]; w >= 10; w /= 10) len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; ) zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k)) isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0) ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
  var k, y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    }
    k = x.cmp(y);
    if (k === n || k === 0 && x.s === n) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--) sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0) sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; i++) ;
  for (len = str.length; str.charCodeAt(len - 1) === 48; --len) ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;
    if (i < len) {
      if (i) x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; ) x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; ) str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str)) return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str) x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i) xd.pop();
  if (i < 0) return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat) x = divide(x, divisor, len * 4);
  if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; ) ;
      if (j == -1) break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e) n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (; xd[--len] == 0; ) xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len) ;
      for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++) str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length; !xd[len - 1]; --len) ;
            for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; ) str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len) for (e -= len; e--; ) str += "0";
        else if (e < len) str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object") throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults) this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== void 0) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2)) return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v; i2 >= 10; i2 /= 10) e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      }
      if (v * 0 !== 0) {
        if (!v) x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    }
    if (t === "string") {
      if ((i2 = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        if (i2 === 43) v = v.slice(1);
        x.s = 1;
      }
      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }
    if (t === "bigint") {
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      return parseDecimal(x, v.toString());
    }
    throw Error(invalidArgument + v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0) obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, -1);
}
function min() {
  return maxOrMin(this, arguments, 1);
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === void 0) sd = this.precision;
  else checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; ) rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--) rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE) rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
    if (k < LOG_BASE) e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; ) x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
P[Symbol.toStringTag] = "Decimal";
var Decimal = P.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);

// ../../node_modules/.pnpm/sql-template-tag@5.2.1/node_modules/sql-template-tag/dist/index.js
var Sql = class _Sql {
  constructor(rawStrings, rawValues) {
    if (rawStrings.length - 1 !== rawValues.length) {
      if (rawStrings.length === 0) {
        throw new TypeError("Expected at least 1 string");
      }
      throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
    }
    const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
    this.values = new Array(valuesLength);
    this.strings = new Array(valuesLength + 1);
    this.strings[0] = rawStrings[0];
    let i = 0, pos = 0;
    while (i < rawValues.length) {
      const child = rawValues[i++];
      const rawString = rawStrings[i];
      if (child instanceof _Sql) {
        this.strings[pos] += child.strings[0];
        let childIndex = 0;
        while (childIndex < child.values.length) {
          this.values[pos++] = child.values[childIndex++];
          this.strings[pos] = child.strings[childIndex];
        }
        this.strings[pos] += rawString;
      } else {
        this.values[pos++] = child;
        this.strings[pos] = rawString;
      }
    }
  }
  get sql() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `?${this.strings[i++]}`;
    return value;
  }
  get statement() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `:${i}${this.strings[i++]}`;
    return value;
  }
  get text() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `$${i}${this.strings[i++]}`;
    return value;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values
    };
  }
};
function join(values, separator = ",", prefix = "", suffix = "") {
  if (values.length === 0) {
    throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
  }
  return new Sql([prefix, ...Array(values.length - 1).fill(separator), suffix], values);
}
function raw(value) {
  return new Sql([value], []);
}
var empty = raw("");
function sql(strings, ...values) {
  return new Sql(strings, values);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.5.0
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/


},
"../../node_modules/.pnpm/@prisma+client@7.4.1_prisma@7.4.1_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__r_8e53772b4f7db0920d7f3afa4e50fe46/node_modules/@prisma/client/runtime/client.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";
var eu=Object.create;var Qt=Object.defineProperty;var tu=Object.getOwnPropertyDescriptor;var ru=Object.getOwnPropertyNames;var nu=Object.getPrototypeOf,iu=Object.prototype.hasOwnProperty;var hi=(e,t)=>()=>(e&&(t=e(e=0)),t);var V=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ie=(e,t)=>{for(var r in t)Qt(e,r,{get:t[r],enumerable:!0})},wi=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ru(t))!iu.call(e,i)&&i!==r&&Qt(e,i,{get:()=>t[i],enumerable:!(n=tu(t,i))||n.enumerable});return e};var U=(e,t,r)=>(r=e!=null?eu(nu(e)):{},wi(t||!e||!e.__esModule?Qt(r,"default",{value:e,enumerable:!0}):r,e)),ou=e=>wi(Qt({},"__esModule",{value:!0}),e);var Di=V((bf,Cu)=>{Cu.exports={name:"@prisma/engines-version",version:"7.5.0-4.55ae170b1ced7fc6ed07a15f110549408c501bb3",main:"index.js",types:"index.d.ts",license:"Apache-2.0",author:"Tim Suchanek <suchanek@prisma.io>",prisma:{enginesVersion:"55ae170b1ced7fc6ed07a15f110549408c501bb3"},repository:{type:"git",url:"https://github.com/prisma/engines-wrapper.git",directory:"packages/engines-version"},devDependencies:{"@types/node":"18.19.76",typescript:"4.9.5"},files:["index.js","index.d.ts"],scripts:{build:"tsc -d"}}});var Mi=V(Ht=>{"use strict";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.enginesVersion=void 0;Ht.enginesVersion=Di().prisma.enginesVersion});var _i=V((Ef,Fi)=>{"use strict";Fi.exports=e=>{let t=e.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((r,n)=>Math.min(r,n.length),1/0):0}});var ji=V((Sf,qi)=>{"use strict";qi.exports=(e,t=1,r)=>{if(r={indent:" ",includeEmptyLines:!1,...r},typeof e!="string")throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if(typeof t!="number")throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if(typeof r.indent!="string")throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);if(t===0)return e;let n=r.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,r.indent.repeat(t))}});var Bi=V((Of,zt)=>{"use strict";zt.exports=(e={})=>{let t;if(e.repoUrl)t=e.repoUrl;else if(e.user&&e.repo)t=`https://github.com/${e.user}/${e.repo}`;else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");let r=new URL(`${t}/issues/new`),n=["body","title","labels","template","milestone","assignee","projects"];for(let i of n){let o=e[i];if(o!==void 0){if(i==="labels"||i==="projects"){if(!Array.isArray(o))throw new TypeError(`The \`${i}\` option should be an array`);o=o.join(",")}r.searchParams.set(i,o)}}return r.toString()};zt.exports.default=zt.exports});var cn=V((Pg,Zi)=>{"use strict";Zi.exports=function(){function e(t,r,n,i,o){return t<r||n<r?t>n?n+1:t+1:i===o?r:r+1}return function(t,r){if(t===r)return 0;if(t.length>r.length){var n=t;t=r,r=n}for(var i=t.length,o=r.length;i>0&&t.charCodeAt(i-1)===r.charCodeAt(o-1);)i--,o--;for(var s=0;s<i&&t.charCodeAt(s)===r.charCodeAt(s);)s++;if(i-=s,o-=s,i===0||o<3)return o;var a=0,l,u,c,p,d,f,h,x,E,L,T,A,j=[];for(l=0;l<i;l++)j.push(l+1),j.push(t.charCodeAt(s+l));for(var ke=j.length-1;a<o-3;)for(E=r.charCodeAt(s+(u=a)),L=r.charCodeAt(s+(c=a+1)),T=r.charCodeAt(s+(p=a+2)),A=r.charCodeAt(s+(d=a+3)),f=a+=4,l=0;l<ke;l+=2)h=j[l],x=j[l+1],u=e(h,u,c,E,x),c=e(u,c,p,L,x),p=e(c,p,d,T,x),f=e(p,d,f,A,x),j[l]=f,d=p,p=c,c=u,u=h;for(;a<o;)for(E=r.charCodeAt(s+(u=a)),f=++a,l=0;l<ke;l+=2)h=j[l],j[l]=f=e(h,u,f,E,j[l+1]),u=h;return f}}()});var ro=hi(()=>{"use strict"});var no=hi(()=>{"use strict"});var On=V(Te=>{"use strict";Object.defineProperty(Te,"__esModule",{value:!0});Te.anumber=In;Te.abytes=Es;Te.ahash=Ip;Te.aexists=Op;Te.aoutput=Np;function In(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, got "+e)}function kp(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Es(e,...t){if(!kp(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function Ip(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");In(e.outputLen),In(e.blockLen)}function Op(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Np(e,t){Es(e);let r=t.outputLen;if(e.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}});var Bs=V(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.add5L=g.add5H=g.add4H=g.add4L=g.add3H=g.add3L=g.rotlBL=g.rotlBH=g.rotlSL=g.rotlSH=g.rotr32L=g.rotr32H=g.rotrBL=g.rotrBH=g.rotrSL=g.rotrSH=g.shrSL=g.shrSH=g.toBig=void 0;g.fromBig=Dn;g.split=Ps;g.add=_s;var Pr=BigInt(2**32-1),Nn=BigInt(32);function Dn(e,t=!1){return t?{h:Number(e&Pr),l:Number(e>>Nn&Pr)}:{h:Number(e>>Nn&Pr)|0,l:Number(e&Pr)|0}}function Ps(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:o,l:s}=Dn(e[i],t);[r[i],n[i]]=[o,s]}return[r,n]}var Ts=(e,t)=>BigInt(e>>>0)<<Nn|BigInt(t>>>0);g.toBig=Ts;var Ss=(e,t,r)=>e>>>r;g.shrSH=Ss;var As=(e,t,r)=>e<<32-r|t>>>r;g.shrSL=As;var vs=(e,t,r)=>e>>>r|t<<32-r;g.rotrSH=vs;var Cs=(e,t,r)=>e<<32-r|t>>>r;g.rotrSL=Cs;var Rs=(e,t,r)=>e<<64-r|t>>>r-32;g.rotrBH=Rs;var ks=(e,t,r)=>e>>>r-32|t<<64-r;g.rotrBL=ks;var Is=(e,t)=>t;g.rotr32H=Is;var Os=(e,t)=>e;g.rotr32L=Os;var Ns=(e,t,r)=>e<<r|t>>>32-r;g.rotlSH=Ns;var Ds=(e,t,r)=>t<<r|e>>>32-r;g.rotlSL=Ds;var Ms=(e,t,r)=>t<<r-32|e>>>64-r;g.rotlBH=Ms;var Fs=(e,t,r)=>e<<r-32|t>>>64-r;g.rotlBL=Fs;function _s(e,t,r,n){let i=(t>>>0)+(n>>>0);return{h:e+r+(i/2**32|0)|0,l:i|0}}var Ls=(e,t,r)=>(e>>>0)+(t>>>0)+(r>>>0);g.add3L=Ls;var $s=(e,t,r,n)=>t+r+n+(e/2**32|0)|0;g.add3H=$s;var Vs=(e,t,r,n)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0);g.add4L=Vs;var qs=(e,t,r,n,i)=>t+r+n+i+(e/2**32|0)|0;g.add4H=qs;var js=(e,t,r,n,i)=>(e>>>0)+(t>>>0)+(r>>>0)+(n>>>0)+(i>>>0);g.add5L=js;var Us=(e,t,r,n,i,o)=>t+r+n+i+o+(e/2**32|0)|0;g.add5H=Us;var Dp={fromBig:Dn,split:Ps,toBig:Ts,shrSH:Ss,shrSL:As,rotrSH:vs,rotrSL:Cs,rotrBH:Rs,rotrBL:ks,rotr32H:Is,rotr32L:Os,rotlSH:Ns,rotlSL:Ds,rotlBH:Ms,rotlBL:Fs,add:_s,add3L:Ls,add3H:$s,add4L:Vs,add4H:qs,add5H:Us,add5L:js};g.default=Dp});var Qs=V(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.crypto=void 0;var fe=__webpack_require__("node:crypto");Tr.crypto=fe&&typeof fe=="object"&&"webcrypto"in fe?fe.webcrypto:fe&&typeof fe=="object"&&"randomBytes"in fe?fe:void 0});var Gs=V(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.Hash=b.nextTick=b.byteSwapIfBE=b.isLE=void 0;b.isBytes=Mp;b.u8=Fp;b.u32=_p;b.createView=Lp;b.rotr=$p;b.rotl=Vp;b.byteSwap=_n;b.byteSwap32=qp;b.bytesToHex=Up;b.hexToBytes=Bp;b.asyncLoop=Jp;b.utf8ToBytes=Hs;b.toBytes=Sr;b.concatBytes=Hp;b.checkOpts=Gp;b.wrapConstructor=zp;b.wrapConstructorWithOpts=Wp;b.wrapXOFConstructorWithOpts=Kp;b.randomBytes=Zp;var Ge=Qs(),Fn=On();function Mp(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Fp(e){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}function _p(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function Lp(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function $p(e,t){return e<<32-t|e>>>t}function Vp(e,t){return e<<t|e>>>32-t>>>0}b.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function _n(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}b.byteSwapIfBE=b.isLE?e=>e:e=>_n(e);function qp(e){for(let t=0;t<e.length;t++)e[t]=_n(e[t])}var jp=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Up(e){(0,Fn.abytes)(e);let t="";for(let r=0;r<e.length;r++)t+=jp[e[r]];return t}var se={_0:48,_9:57,A:65,F:70,a:97,f:102};function Js(e){if(e>=se._0&&e<=se._9)return e-se._0;if(e>=se.A&&e<=se.F)return e-(se.A-10);if(e>=se.a&&e<=se.f)return e-(se.a-10)}function Bp(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);let t=e.length,r=t/2;if(t%2)throw new Error("hex string expected, got unpadded hex of length "+t);let n=new Uint8Array(r);for(let i=0,o=0;i<r;i++,o+=2){let s=Js(e.charCodeAt(o)),a=Js(e.charCodeAt(o+1));if(s===void 0||a===void 0){let l=e[o]+e[o+1];throw new Error('hex string expected, got non-hex character "'+l+'" at index '+o)}n[i]=s*16+a}return n}var Qp=async()=>{};b.nextTick=Qp;async function Jp(e,t,r){let n=Date.now();for(let i=0;i<e;i++){r(i);let o=Date.now()-n;o>=0&&o<t||(await(0,b.nextTick)(),n+=o)}}function Hs(e){if(typeof e!="string")throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array(new TextEncoder().encode(e))}function Sr(e){return typeof e=="string"&&(e=Hs(e)),(0,Fn.abytes)(e),e}function Hp(...e){let t=0;for(let n=0;n<e.length;n++){let i=e[n];(0,Fn.abytes)(i),t+=i.length}let r=new Uint8Array(t);for(let n=0,i=0;n<e.length;n++){let o=e[n];r.set(o,i),i+=o.length}return r}var Mn=class{clone(){return this._cloneInto()}};b.Hash=Mn;function Gp(e,t){if(t!==void 0&&{}.toString.call(t)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(e,t)}function zp(e){let t=n=>e().update(Sr(n)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function Wp(e){let t=(n,i)=>e(i).update(Sr(n)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=n=>e(n),t}function Kp(e){let t=(n,i)=>e(i).update(Sr(n)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=n=>e(n),t}function Zp(e=32){if(Ge.crypto&&typeof Ge.crypto.getRandomValues=="function")return Ge.crypto.getRandomValues(new Uint8Array(e));if(Ge.crypto&&typeof Ge.crypto.randomBytes=="function")return Ge.crypto.randomBytes(e);throw new Error("crypto.getRandomValues must be defined")}});var ta=V(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.shake256=C.shake128=C.keccak_512=C.keccak_384=C.keccak_256=C.keccak_224=C.sha3_512=C.sha3_384=C.sha3_256=C.sha3_224=C.Keccak=void 0;C.keccakP=Xs;var ze=On(),kt=Bs(),ae=Gs(),Ks=[],Zs=[],Ys=[],Yp=BigInt(0),Rt=BigInt(1),Xp=BigInt(2),ed=BigInt(7),td=BigInt(256),rd=BigInt(113);for(let e=0,t=Rt,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],Ks.push(2*(5*n+r)),Zs.push((e+1)*(e+2)/2%64);let i=Yp;for(let o=0;o<7;o++)t=(t<<Rt^(t>>ed)*rd)%td,t&Xp&&(i^=Rt<<(Rt<<BigInt(o))-Rt);Ys.push(i)}var[nd,id]=(0,kt.split)(Ys,!0),zs=(e,t,r)=>r>32?(0,kt.rotlBH)(e,t,r):(0,kt.rotlSH)(e,t,r),Ws=(e,t,r)=>r>32?(0,kt.rotlBL)(e,t,r):(0,kt.rotlSL)(e,t,r);function Xs(e,t=24){let r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let s=0;s<10;s++)r[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){let a=(s+8)%10,l=(s+2)%10,u=r[l],c=r[l+1],p=zs(u,c,1)^r[a],d=Ws(u,c,1)^r[a+1];for(let f=0;f<50;f+=10)e[s+f]^=p,e[s+f+1]^=d}let i=e[2],o=e[3];for(let s=0;s<24;s++){let a=Zs[s],l=zs(i,o,a),u=Ws(i,o,a),c=Ks[s];i=e[c],o=e[c+1],e[c]=l,e[c+1]=u}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)r[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~r[(a+2)%10]&r[(a+4)%10]}e[0]^=nd[n],e[1]^=id[n]}r.fill(0)}var It=class e extends ae.Hash{constructor(t,r,n,i=!1,o=24){if(super(),this.blockLen=t,this.suffix=r,this.outputLen=n,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,(0,ze.anumber)(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,ae.u32)(this.state)}keccak(){ae.isLE||(0,ae.byteSwap32)(this.state32),Xs(this.state32,this.rounds),ae.isLE||(0,ae.byteSwap32)(this.state32),this.posOut=0,this.pos=0}update(t){(0,ze.aexists)(this);let{blockLen:r,state:n}=this;t=(0,ae.toBytes)(t);let i=t.length;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);for(let a=0;a<s;a++)n[this.pos++]^=t[o++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:r,pos:n,blockLen:i}=this;t[n]^=r,(r&128)!==0&&n===i-1&&this.keccak(),t[i-1]^=128,this.keccak()}writeInto(t){(0,ze.aexists)(this,!1),(0,ze.abytes)(t),this.finish();let r=this.state,{blockLen:n}=this;for(let i=0,o=t.length;i<o;){this.posOut>=n&&this.keccak();let s=Math.min(n-this.posOut,o-i);t.set(r.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return(0,ze.anumber)(t),this.xofInto(new Uint8Array(t))}digestInto(t){if((0,ze.aoutput)(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){let{blockLen:r,suffix:n,outputLen:i,rounds:o,enableXOF:s}=this;return t||(t=new e(r,n,i,s,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=n,t.outputLen=i,t.enableXOF=s,t.destroyed=this.destroyed,t}};C.Keccak=It;var ge=(e,t,r)=>(0,ae.wrapConstructor)(()=>new It(t,e,r));C.sha3_224=ge(6,144,224/8);C.sha3_256=ge(6,136,256/8);C.sha3_384=ge(6,104,384/8);C.sha3_512=ge(6,72,512/8);C.keccak_224=ge(1,144,224/8);C.keccak_256=ge(1,136,256/8);C.keccak_384=ge(1,104,384/8);C.keccak_512=ge(1,72,512/8);var ea=(e,t,r)=>(0,ae.wrapXOFConstructorWithOpts)((n={})=>new It(t,e,n.dkLen===void 0?r:n.dkLen,!0));C.shake128=ea(31,168,128/8);C.shake256=ea(31,136,256/8)});var ua=V((px,ye)=>{"use strict";var{sha3_512:od}=ta(),na=24,Ot=32,Ln=(e=4,t=Math.random)=>{let r="";for(;r.length<e;)r=r+Math.floor(t()*36).toString(36);return r};function ia(e){let t=8n,r=0n;for(let n of e.values()){let i=BigInt(n);r=(r<<t)+i}return r}var oa=(e="")=>ia(od(e)).toString(36).slice(1),ra=Array.from({length:26},(e,t)=>String.fromCharCode(t+97)),sd=e=>ra[Math.floor(e()*ra.length)],sa=({globalObj:e=typeof global<"u"?global:typeof window<"u"?window:{},random:t=Math.random}={})=>{let r=Object.keys(e).toString(),n=r.length?r+Ln(Ot,t):Ln(Ot,t);return oa(n).substring(0,Ot)},aa=e=>()=>e++,ad=476782367,la=({random:e=Math.random,counter:t=aa(Math.floor(e()*ad)),length:r=na,fingerprint:n=sa({random:e})}={})=>function(){let o=sd(e),s=Date.now().toString(36),a=t().toString(36),l=Ln(r,e),u=`${s+l+a+n}`;return`${o+oa(u).substring(1,r)}`},ld=la(),ud=(e,{minLength:t=2,maxLength:r=Ot}={})=>{let n=e.length,i=/^[0-9a-z]+$/;try{if(typeof e=="string"&&n>=t&&n<=r&&i.test(e))return!0}finally{}return!1};ye.exports.getConstants=()=>({defaultLength:na,bigLength:Ot});ye.exports.init=la;ye.exports.createId=ld;ye.exports.bufToBigInt=ia;ye.exports.createCounter=aa;ye.exports.createFingerprint=sa;ye.exports.isCuid=ud});var ca=V((dx,Nt)=>{"use strict";var{createId:cd,init:pd,getConstants:dd,isCuid:md}=ua();Nt.exports.createId=cd;Nt.exports.init=pd;Nt.exports.getConstants=dd;Nt.exports.isCuid=md});var jm={};Ie(jm,{AnyNull:()=>F.AnyNull,DMMF:()=>ft,DbNull:()=>F.DbNull,Debug:()=>M,Decimal:()=>Kl.Decimal,Extensions:()=>Kr,JsonNull:()=>F.JsonNull,NullTypes:()=>F.NullTypes,ObjectEnumValue:()=>F.ObjectEnumValue,PrismaClientInitializationError:()=>w.PrismaClientInitializationError,PrismaClientKnownRequestError:()=>w.PrismaClientKnownRequestError,PrismaClientRustPanicError:()=>w.PrismaClientRustPanicError,PrismaClientUnknownRequestError:()=>w.PrismaClientUnknownRequestError,PrismaClientValidationError:()=>w.PrismaClientValidationError,Public:()=>Zr,Sql:()=>ne.Sql,createParam:()=>Po,defineDmmfProperty:()=>Co,deserializeJsonObject:()=>W,deserializeRawResult:()=>Gr,dmmfToRuntimeDataModel:()=>Ti,empty:()=>ne.empty,getPrismaClient:()=>Gl,getRuntime:()=>Wl,isAnyNull:()=>F.isAnyNull,isDbNull:()=>F.isDbNull,isJsonNull:()=>F.isJsonNull,join:()=>ne.join,makeStrictEnum:()=>zl,makeTypedQueryFactory:()=>Ro,raw:()=>ne.raw,serializeJsonQuery:()=>pr,skip:()=>cr,sqltag:()=>ne.sql,warnOnce:()=>un});module.exports=ou(jm);var Kr={};Ie(Kr,{defineExtension:()=>bi,getExtensionContext:()=>xi});function bi(e){return typeof e=="function"?e:t=>t.$extends(e)}function xi(e){return e}var Zr={};Ie(Zr,{validator:()=>Ei});function Ei(...e){return t=>t}var K=class{_map=new Map;get(t){return this._map.get(t)?.value}set(t,r){this._map.set(t,{value:r})}getOrCreate(t,r){let n=this._map.get(t);if(n)return n.value;let i=r();return this.set(t,i),i}};function ce(e){return e.substring(0,1).toLowerCase()+e.substring(1)}function Pi(e,t){let r={};for(let n of e){let i=n[t];r[i]=n}return r}function rt(e){let t;return{get(){return t||(t={value:e()}),t.value}}}function Ti(e){return{models:Yr(e.models),enums:Yr(e.enums),types:Yr(e.types)}}function Yr(e){let t={};for(let{name:r,...n}of e)t[r]=n;return t}var de=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var Jt={};Ie(Jt,{$:()=>Ri,bgBlack:()=>gu,bgBlue:()=>bu,bgCyan:()=>Eu,bgGreen:()=>hu,bgMagenta:()=>xu,bgRed:()=>yu,bgWhite:()=>Pu,bgYellow:()=>wu,black:()=>pu,blue:()=>be,bold:()=>H,cyan:()=>ie,dim:()=>nt,gray:()=>at,green:()=>ot,grey:()=>fu,hidden:()=>uu,inverse:()=>lu,italic:()=>au,magenta:()=>du,red:()=>we,reset:()=>su,strikethrough:()=>cu,underline:()=>it,white:()=>mu,yellow:()=>st});var Xr,Si,Ai,vi,Ci=!0;typeof process<"u"&&({FORCE_COLOR:Xr,NODE_DISABLE_COLORS:Si,NO_COLOR:Ai,TERM:vi}=process.env||{},Ci=process.stdout&&process.stdout.isTTY);var Ri={enabled:!Si&&Ai==null&&vi!=="dumb"&&(Xr!=null&&Xr!=="0"||Ci)};function S(e,t){let r=new RegExp(`\\x1b\\[${t}m`,"g"),n=`\x1B[${e}m`,i=`\x1B[${t}m`;return function(o){return!Ri.enabled||o==null?o:n+(~(""+o).indexOf(i)?o.replace(r,i+n):o)+i}}var su=S(0,0),H=S(1,22),nt=S(2,22),au=S(3,23),it=S(4,24),lu=S(7,27),uu=S(8,28),cu=S(9,29),pu=S(30,39),we=S(31,39),ot=S(32,39),st=S(33,39),be=S(34,39),du=S(35,39),ie=S(36,39),mu=S(37,39),at=S(90,39),fu=S(90,39),gu=S(40,49),yu=S(41,49),hu=S(42,49),wu=S(43,49),bu=S(44,49),xu=S(45,49),Eu=S(46,49),Pu=S(47,49);var Tu=100,ki=["green","yellow","blue","magenta","cyan","red"],lt=[],Ii=Date.now(),Su=0,en=typeof process<"u"?process.env:{};globalThis.DEBUG??=en.DEBUG??"";globalThis.DEBUG_COLORS??=en.DEBUG_COLORS?en.DEBUG_COLORS==="true":!0;var ut={enable(e){typeof e=="string"&&(globalThis.DEBUG=e)},disable(){let e=globalThis.DEBUG;return globalThis.DEBUG="",e},enabled(e){let t=globalThis.DEBUG.split(",").map(i=>i.replace(/[.+?^${}()|[\]\\]/g,"\\$&")),r=t.some(i=>i===""||i[0]==="-"?!1:e.match(RegExp(i.split("*").join(".*")+"$"))),n=t.some(i=>i===""||i[0]!=="-"?!1:e.match(RegExp(i.slice(1).split("*").join(".*")+"$")));return r&&!n},log:(...e)=>{let[t,r,...n]=e;(console.warn??console.log)(`${t} ${r}`,...n)},formatters:{}};function Au(e){let t={color:ki[Su++%ki.length],enabled:ut.enabled(e),namespace:e,log:ut.log,extend:()=>{}},r=(...n)=>{let{enabled:i,namespace:o,color:s,log:a}=t;if(n.length!==0&&lt.push([o,...n]),lt.length>Tu&&lt.shift(),ut.enabled(o)||i){let l=n.map(c=>typeof c=="string"?c:vu(c)),u=`+${Date.now()-Ii}ms`;Ii=Date.now(),globalThis.DEBUG_COLORS?a(Jt[s](H(o)),...l,Jt[s](u)):a(o,...l,u)}};return new Proxy(r,{get:(n,i)=>t[i],set:(n,i,o)=>t[i]=o})}var M=new Proxy(Au,{get:(e,t)=>ut[t],set:(e,t,r)=>ut[t]=r});function vu(e,t=2){let r=new Set;return JSON.stringify(e,(n,i)=>{if(typeof i=="object"&&i!==null){if(r.has(i))return"[Circular *]";r.add(i)}else if(typeof i=="bigint")return i.toString();return i},t)}function Oi(e=7500){let t=lt.map(([r,...n])=>`${r} ${n.map(i=>typeof i=="string"?i:JSON.stringify(i)).join(" ")}`).join(`
`);return t.length<e?t:t.slice(-e)}function Ni(){lt.length=0}var Li=U(_i(),1);function tn(e){let t=(0,Li.default)(e);if(t===0)return e;let r=new RegExp(`^[ \\t]{${t}}`,"gm");return e.replace(r,"")}var $i="prisma+postgres",Gt=`${$i}:`;function Vi(e){return e?.toString().startsWith(`${Gt}//`)??!1}function rn(e){if(!Vi(e))return!1;let{host:t}=new URL(e);return t.includes("localhost")||t.includes("127.0.0.1")||t.includes("[::1]")}var pt={};Ie(pt,{error:()=>Iu,info:()=>ku,log:()=>Ru,query:()=>Ou,should:()=>Ui,tags:()=>ct,warn:()=>nn});var ct={error:we("prisma:error"),warn:st("prisma:warn"),info:ie("prisma:info"),query:be("prisma:query")},Ui={warn:()=>!process.env.PRISMA_DISABLE_WARNINGS};function Ru(...e){console.log(...e)}function nn(e,...t){Ui.warn()&&console.warn(`${ct.warn} ${e}`,...t)}function ku(e,...t){console.info(`${ct.info} ${e}`,...t)}function Iu(e,...t){console.error(`${ct.error} ${e}`,...t)}function Ou(e,...t){console.log(`${ct.query} ${e}`,...t)}function oe(e,t){throw new Error(t)}function on({onlyFirst:e=!1}={}){let r=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");return new RegExp(r,e?void 0:"g")}var Nu=on();function Oe(e){if(typeof e!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);return e.replace(Nu,"")}var dt=U(__webpack_require__("node:path"));function sn(e){return dt.default.sep===dt.default.posix.sep?e:e.split(dt.default.sep).join(dt.default.posix.sep)}function an(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Wt(e,t){let r={};for(let n of Object.keys(e))r[n]=t(e[n],n);return r}function ln(e,t){if(e.length===0)return;let r=e[0];for(let n=1;n<e.length;n++)t(r,e[n])<0&&(r=e[n]);return r}function mt(e,t){Object.defineProperty(e,"name",{value:t,configurable:!0})}var Qi=new Set,un=(e,t,...r)=>{Qi.has(e)||(Qi.add(e),nn(t,...r))};function Ne(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Kt(e){return e.toString()!=="Invalid Date"}var Ji=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");function De(e){return Ji.Decimal.isDecimal(e)?!0:e!==null&&typeof e=="object"&&typeof e.s=="number"&&typeof e.e=="number"&&typeof e.toFixed=="function"&&Array.isArray(e.d)}var yo=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var ft={};Ie(ft,{ModelAction:()=>Me,datamodelEnumToSchemaEnum:()=>Du});function Du(e){return{name:e.name,values:e.values.map(t=>t.name)}}var Me=(A=>(A.findUnique="findUnique",A.findUniqueOrThrow="findUniqueOrThrow",A.findFirst="findFirst",A.findFirstOrThrow="findFirstOrThrow",A.findMany="findMany",A.create="create",A.createMany="createMany",A.createManyAndReturn="createManyAndReturn",A.update="update",A.updateMany="updateMany",A.updateManyAndReturn="updateManyAndReturn",A.upsert="upsert",A.delete="delete",A.deleteMany="deleteMany",A.groupBy="groupBy",A.count="count",A.aggregate="aggregate",A.findRaw="findRaw",A.aggregateRaw="aggregateRaw",A))(Me||{});var Ki=U(ji());var Wi=U(__webpack_require__("node:fs"));var Hi={keyword:ie,entity:ie,value:e=>H(be(e)),punctuation:be,directive:ie,function:ie,variable:e=>H(be(e)),string:e=>H(ot(e)),boolean:st,number:ie,comment:at};var Mu=e=>e,Zt={},Fu=0,y={manual:Zt.Prism&&Zt.Prism.manual,disableWorkerMessageHandler:Zt.Prism&&Zt.Prism.disableWorkerMessageHandler,util:{encode:function(e){if(e instanceof G){let t=e;return new G(t.type,y.util.encode(t.content),t.alias)}else return Array.isArray(e)?e.map(y.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++Fu}),e.__id},clone:function e(t,r){let n,i,o=y.util.type(t);switch(r=r||{},o){case"Object":if(i=y.util.objId(t),r[i])return r[i];n={},r[i]=n;for(let s in t)t.hasOwnProperty(s)&&(n[s]=e(t[s],r));return n;case"Array":return i=y.util.objId(t),r[i]?r[i]:(n=[],r[i]=n,t.forEach(function(s,a){n[a]=e(s,r)}),n);default:return t}}},languages:{extend:function(e,t){let r=y.util.clone(y.languages[e]);for(let n in t)r[n]=t[n];return r},insertBefore:function(e,t,r,n){n=n||y.languages;let i=n[e],o={};for(let a in i)if(i.hasOwnProperty(a)){if(a==t)for(let l in r)r.hasOwnProperty(l)&&(o[l]=r[l]);r.hasOwnProperty(a)||(o[a]=i[a])}let s=n[e];return n[e]=o,y.languages.DFS(y.languages,function(a,l){l===s&&a!=e&&(this[a]=o)}),o},DFS:function e(t,r,n,i){i=i||{};let o=y.util.objId;for(let s in t)if(t.hasOwnProperty(s)){r.call(t,s,t[s],n||s);let a=t[s],l=y.util.type(a);l==="Object"&&!i[o(a)]?(i[o(a)]=!0,e(a,r,null,i)):l==="Array"&&!i[o(a)]&&(i[o(a)]=!0,e(a,r,s,i))}}},plugins:{},highlight:function(e,t,r){let n={code:e,grammar:t,language:r};return y.hooks.run("before-tokenize",n),n.tokens=y.tokenize(n.code,n.grammar),y.hooks.run("after-tokenize",n),G.stringify(y.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,r,n,i,o,s){for(let x in r){if(!r.hasOwnProperty(x)||!r[x])continue;if(x==s)return;let E=r[x];E=y.util.type(E)==="Array"?E:[E];for(let L=0;L<E.length;++L){let T=E[L],A=T.inside,j=!!T.lookbehind,ke=!!T.greedy,Wr=0,Zl=T.alias;if(ke&&!T.pattern.global){let $=T.pattern.toString().match(/[imuy]*$/)[0];T.pattern=RegExp(T.pattern.source,$+"g")}T=T.pattern||T;for(let $=n,ue=i;$<t.length;ue+=t[$].length,++$){let tt=t[$];if(t.length>e.length)return;if(tt instanceof G)continue;if(ke&&$!=t.length-1){T.lastIndex=ue;var p=T.exec(e);if(!p)break;var c=p.index+(j?p[1].length:0),d=p.index+p[0].length,a=$,l=ue;for(let Xl=t.length;a<Xl&&(l<d||!t[a].type&&!t[a-1].greedy);++a)l+=t[a].length,c>=l&&(++$,ue=l);if(t[$]instanceof G)continue;u=a-$,tt=e.slice(ue,l),p.index-=ue}else{T.lastIndex=0;var p=T.exec(tt),u=1}if(!p){if(o)break;continue}j&&(Wr=p[1]?p[1].length:0);var c=p.index+Wr,p=p[0].slice(Wr),d=c+p.length,f=tt.slice(0,c),h=tt.slice(d);let Bt=[$,u];f&&(++$,ue+=f.length,Bt.push(f));let Yl=new G(x,A?y.tokenize(p,A):p,Zl,p,ke);if(Bt.push(Yl),h&&Bt.push(h),Array.prototype.splice.apply(t,Bt),u!=1&&y.matchGrammar(e,t,r,$,ue,!0,x),o)break}}}},tokenize:function(e,t){let r=[e],n=t.rest;if(n){for(let i in n)t[i]=n[i];delete t.rest}return y.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){let r=y.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){let r=y.hooks.all[e];if(!(!r||!r.length))for(var n=0,i;i=r[n++];)i(t)}},Token:G};y.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};y.languages.javascript=y.languages.extend("clike",{"class-name":[y.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/});y.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;y.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:y.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:y.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:y.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:y.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});y.languages.markup&&y.languages.markup.tag.addInlined("script","javascript");y.languages.js=y.languages.javascript;y.languages.typescript=y.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/});y.languages.ts=y.languages.typescript;function G(e,t,r,n,i){this.type=e,this.content=t,this.alias=r,this.length=(n||"").length|0,this.greedy=!!i}G.stringify=function(e,t){return typeof e=="string"?e:Array.isArray(e)?e.map(function(r){return G.stringify(r,t)}).join(""):_u(e.type)(e.content)};function _u(e){return Hi[e]||Mu}function Gi(e){return Lu(e,y.languages.javascript)}function Lu(e,t){return y.tokenize(e,t).map(n=>G.stringify(n)).join("")}function zi(e){return tn(e)}var Yt=class e{firstLineNumber;lines;static read(t){let r;try{r=Wi.default.readFileSync(t,"utf-8")}catch{return null}return e.fromContent(r)}static fromContent(t){let r=t.split(/\r?\n/);return new e(1,r)}constructor(t,r){this.firstLineNumber=t,this.lines=r}get lastLineNumber(){return this.firstLineNumber+this.lines.length-1}mapLineAt(t,r){if(t<this.firstLineNumber||t>this.lines.length+this.firstLineNumber)return this;let n=t-this.firstLineNumber,i=[...this.lines];return i[n]=r(i[n]),new e(this.firstLineNumber,i)}mapLines(t){return new e(this.firstLineNumber,this.lines.map((r,n)=>t(r,this.firstLineNumber+n)))}lineAt(t){return this.lines[t-this.firstLineNumber]}prependSymbolAt(t,r){return this.mapLines((n,i)=>i===t?`${r} ${n}`:`  ${n}`)}slice(t,r){let n=this.lines.slice(t-1,r).join(`
`);return new e(t,zi(n).split(`
`))}highlight(){let t=Gi(this.toString());return new e(this.firstLineNumber,t.split(`
`))}toString(){return this.lines.join(`
`)}};var $u={red:we,gray:at,dim:nt,bold:H,underline:it,highlightSource:e=>e.highlight()},Vu={red:e=>e,gray:e=>e,dim:e=>e,bold:e=>e,underline:e=>e,highlightSource:e=>e};function qu({message:e,originalMethod:t,isPanic:r,callArguments:n}){return{functionName:`prisma.${t}()`,message:e,isPanic:r??!1,callArguments:n}}function ju({callsite:e,message:t,originalMethod:r,isPanic:n,callArguments:i},o){let s=qu({message:t,originalMethod:r,isPanic:n,callArguments:i});if(!e||typeof window<"u"||"development"==="production")return s;let a=e.getLocation();if(!a||!a.lineNumber||!a.columnNumber)return s;let l=Math.max(1,a.lineNumber-3),u=Yt.read(a.fileName)?.slice(l,a.lineNumber),c=u?.lineAt(a.lineNumber);if(u&&c){let p=Bu(c),d=Uu(c);if(!d)return s;s.functionName=`${d.code})`,s.location=a,n||(u=u.mapLineAt(a.lineNumber,h=>h.slice(0,d.openingBraceIndex))),u=o.highlightSource(u);let f=String(u.lastLineNumber).length;if(s.contextLines=u.mapLines((h,x)=>o.gray(String(x).padStart(f))+" "+h).mapLines(h=>o.dim(h)).prependSymbolAt(a.lineNumber,o.bold(o.red("\u2192"))),i){let h=p+f+1;h+=2,s.callArguments=(0,Ki.default)(i,h).slice(h)}}return s}function Uu(e){let t=Object.keys(Me).join("|"),n=new RegExp(String.raw`\.(${t})\(`).exec(e);if(n){let i=n.index+n[0].length,o=e.lastIndexOf(" ",n.index)+1;return{code:e.slice(o,i),openingBraceIndex:i}}return null}function Bu(e){let t=0;for(let r=0;r<e.length;r++){if(e.charAt(r)!==" ")return t;t++}return t}function Qu({functionName:e,location:t,message:r,isPanic:n,contextLines:i,callArguments:o},s){let a=[""],l=t?" in":":";if(n?(a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)),a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))):a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),t&&a.push(s.underline(Ju(t))),i){a.push("");let u=[i.toString()];o&&(u.push(o),u.push(s.dim(")"))),a.push(u.join("")),o&&a.push("")}else a.push(""),o&&a.push(o),a.push("");return a.push(r),a.join(`
`)}function Ju(e){let t=[e.fileName];return e.lineNumber&&t.push(String(e.lineNumber)),e.columnNumber&&t.push(String(e.columnNumber)),t.join(":")}function Xt(e){let t=e.showColors?$u:Vu,r;return r=ju(e,t),Qu(r,t)}var oo=U(cn());function eo(e,t,r){let n=to(e),i=Hu(n),o=zu(i);o?er(o,t,r):t.addErrorMessage(()=>"Unknown error")}function to(e){return e.errors.flatMap(t=>t.kind==="Union"?to(t):[t])}function Hu(e){let t=new Map,r=[];for(let n of e){if(n.kind!=="InvalidArgumentType"){r.push(n);continue}let i=`${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,o=t.get(i);o?t.set(i,{...n,argument:{...n.argument,typeNames:Gu(o.argument.typeNames,n.argument.typeNames)}}):t.set(i,n)}return r.push(...t.values()),r}function Gu(e,t){return[...new Set(e.concat(t))]}function zu(e){return ln(e,(t,r)=>{let n=Yi(t),i=Yi(r);return n!==i?n-i:Xi(t)-Xi(r)})}function Yi(e){let t=0;return Array.isArray(e.selectionPath)&&(t+=e.selectionPath.length),Array.isArray(e.argumentPath)&&(t+=e.argumentPath.length),t}function Xi(e){switch(e.kind){case"InvalidArgumentValue":case"ValueTooLarge":return 20;case"InvalidArgumentType":return 10;case"RequiredArgumentMissing":return-10;default:return 0}}var q=class{constructor(t,r){this.name=t;this.value=r}isRequired=!1;makeRequired(){return this.isRequired=!0,this}write(t){let{colors:{green:r}}=t.context;t.addMarginSymbol(r(this.isRequired?"+":"?")),t.write(r(this.name)),this.isRequired||t.write(r("?")),t.write(r(": ")),typeof this.value=="string"?t.write(r(this.value)):t.write(this.value)}};no();var Fe=class{constructor(t=0,r){this.context=r;this.currentIndent=t}lines=[];currentLine="";currentIndent=0;marginSymbol;afterNextNewLineCallback;write(t){return typeof t=="string"?this.currentLine+=t:t.write(this),this}writeJoined(t,r,n=(i,o)=>o.write(i)){let i=r.length-1;for(let o=0;o<r.length;o++)n(r[o],this),o!==i&&this.write(t);return this}writeLine(t){return this.write(t).newLine()}newLine(){this.lines.push(this.indentedCurrentLine()),this.currentLine="",this.marginSymbol=void 0;let t=this.afterNextNewLineCallback;return this.afterNextNewLineCallback=void 0,t?.(),this}withIndent(t){return this.indent(),t(this),this.unindent(),this}afterNextNewline(t){return this.afterNextNewLineCallback=t,this}indent(){return this.currentIndent++,this}unindent(){return this.currentIndent>0&&this.currentIndent--,this}addMarginSymbol(t){return this.marginSymbol=t,this}toString(){return this.lines.concat(this.indentedCurrentLine()).join(`
`)}getCurrentLineLength(){return this.currentLine.length}indentedCurrentLine(){let t=this.currentLine.padStart(this.currentLine.length+2*this.currentIndent);return this.marginSymbol?this.marginSymbol+t.slice(1):t}};ro();var tr=class{constructor(t){this.value=t}write(t){t.write(this.value)}markAsError(){this.value.markAsError()}};var rr=e=>e,nr={bold:rr,red:rr,green:rr,dim:rr,enabled:!1},io={bold:H,red:we,green:ot,dim:nt,enabled:!0},_e={write(e){e.writeLine(",")}};var Z=class{constructor(t){this.contents=t}isUnderlined=!1;color=t=>t;underline(){return this.isUnderlined=!0,this}setColor(t){return this.color=t,this}write(t){let r=t.getCurrentLineLength();t.write(this.color(this.contents)),this.isUnderlined&&t.afterNextNewline(()=>{t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)))})}};var pe=class{hasError=!1;markAsError(){return this.hasError=!0,this}};var Le=class extends pe{items=[];addItem(t){return this.items.push(new tr(t)),this}getField(t){return this.items[t]}getPrintWidth(){return this.items.length===0?2:Math.max(...this.items.map(r=>r.value.getPrintWidth()))+2}write(t){if(this.items.length===0){this.writeEmpty(t);return}this.writeWithItems(t)}writeEmpty(t){let r=new Z("[]");this.hasError&&r.setColor(t.context.colors.red).underline(),t.write(r)}writeWithItems(t){let{colors:r}=t.context;t.writeLine("[").withIndent(()=>t.writeJoined(_e,this.items).newLine()).write("]"),this.hasError&&t.afterNextNewline(()=>{t.writeLine(r.red("~".repeat(this.getPrintWidth())))})}asObject(){}};var $e=class e extends pe{fields={};suggestions=[];addField(t){this.fields[t.name]=t}addSuggestion(t){this.suggestions.push(t)}getField(t){return this.fields[t]}getDeepField(t){let[r,...n]=t,i=this.getField(r);if(!i)return;let o=i;for(let s of n){let a;if(o.value instanceof e?a=o.value.getField(s):o.value instanceof Le&&(a=o.value.getField(Number(s))),!a)return;o=a}return o}getDeepFieldValue(t){return t.length===0?this:this.getDeepField(t)?.value}hasField(t){return!!this.getField(t)}removeAllFields(){this.fields={}}removeField(t){delete this.fields[t]}getFields(){return this.fields}isEmpty(){return Object.keys(this.fields).length===0}getFieldValue(t){return this.getField(t)?.value}getDeepSubSelectionValue(t){let r=this;for(let n of t){if(!(r instanceof e))return;let i=r.getSubSelectionValue(n);if(!i)return;r=i}return r}getDeepSelectionParent(t){let r=this.getSelectionParent();if(!r)return;let n=r;for(let i of t){let o=n.value.getFieldValue(i);if(!o||!(o instanceof e))return;let s=o.getSelectionParent();if(!s)return;n=s}return n}getSelectionParent(){let t=this.getField("select")?.value.asObject();if(t)return{kind:"select",value:t};let r=this.getField("include")?.value.asObject();if(r)return{kind:"include",value:r}}getSubSelectionValue(t){return this.getSelectionParent()?.value.fields[t].value}getPrintWidth(){let t=Object.values(this.fields);return t.length==0?2:Math.max(...t.map(n=>n.getPrintWidth()))+2}write(t){let r=Object.values(this.fields);if(r.length===0&&this.suggestions.length===0){this.writeEmpty(t);return}this.writeWithContents(t,r)}asObject(){return this}writeEmpty(t){let r=new Z("{}");this.hasError&&r.setColor(t.context.colors.red).underline(),t.write(r)}writeWithContents(t,r){t.writeLine("{").withIndent(()=>{t.writeJoined(_e,[...r,...this.suggestions]).newLine()}),t.write("}"),this.hasError&&t.afterNextNewline(()=>{t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())))})}};var k=class extends pe{constructor(r){super();this.text=r}getPrintWidth(){return this.text.length}write(r){let n=new Z(this.text);this.hasError&&n.underline().setColor(r.context.colors.red),r.write(n)}asObject(){}};var gt=class{fields=[];addField(t,r){return this.fields.push({write(n){let{green:i,dim:o}=n.context.colors;n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")))}}),this}write(t){let{colors:{green:r}}=t.context;t.writeLine(r("{")).withIndent(()=>{t.writeJoined(_e,this.fields).newLine()}).write(r("}")).addMarginSymbol(r("+"))}};function er(e,t,r){switch(e.kind){case"MutuallyExclusiveFields":Wu(e,t);break;case"IncludeOnScalar":Ku(e,t);break;case"EmptySelection":Zu(e,t,r);break;case"UnknownSelectionField":tc(e,t);break;case"InvalidSelectionValue":rc(e,t);break;case"UnknownArgument":nc(e,t);break;case"UnknownInputField":ic(e,t);break;case"RequiredArgumentMissing":oc(e,t);break;case"InvalidArgumentType":sc(e,t);break;case"InvalidArgumentValue":ac(e,t);break;case"ValueTooLarge":lc(e,t);break;case"SomeFieldsMissing":uc(e,t);break;case"TooManyFieldsGiven":cc(e,t);break;case"Union":eo(e,t,r);break;default:throw new Error("not implemented: "+e.kind)}}function Wu(e,t){let r=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();r&&(r.getField(e.firstField)?.markAsError(),r.getField(e.secondField)?.markAsError()),t.addErrorMessage(n=>`Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`)}function Ku(e,t){let[r,n]=Ve(e.selectionPath),i=e.outputType,o=t.arguments.getDeepSelectionParent(r)?.value;if(o&&(o.getField(n)?.markAsError(),i))for(let s of i.fields)s.isRelation&&o.addSuggestion(new q(s.name,"true"));t.addErrorMessage(s=>{let a=`Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;return i?a+=` on model ${s.bold(i.name)}. ${yt(s)}`:a+=".",a+=`
Note that ${s.bold("include")} statements only accept relation fields.`,a})}function Zu(e,t,r){let n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(n){let i=n.getField("omit")?.value.asObject();if(i){Yu(e,t,i);return}if(n.hasField("select")){Xu(e,t);return}}if(r?.[ce(e.outputType.name)]){ec(e,t);return}t.addErrorMessage(()=>`Unknown field at "${e.selectionPath.join(".")} selection"`)}function Yu(e,t,r){r.removeAllFields();for(let n of e.outputType.fields)r.addSuggestion(new q(n.name,"false"));t.addErrorMessage(n=>`The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`)}function Xu(e,t){let r=e.outputType,n=t.arguments.getDeepSelectionParent(e.selectionPath)?.value,i=n?.isEmpty()??!1;n&&(n.removeAllFields(),lo(n,r)),t.addErrorMessage(o=>i?`The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${yt(o)}`:`The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`)}function ec(e,t){let r=new gt;for(let i of e.outputType.fields)i.isRelation||r.addField(i.name,"false");let n=new q("omit",r).makeRequired();if(e.selectionPath.length===0)t.arguments.addSuggestion(n);else{let[i,o]=Ve(e.selectionPath),a=t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);if(a){let l=a?.value.asObject()??new $e;l.addSuggestion(n),a.value=l}}t.addErrorMessage(i=>`The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`)}function tc(e,t){let r=uo(e.selectionPath,t);if(r.parentKind!=="unknown"){r.field.markAsError();let n=r.parent;switch(r.parentKind){case"select":lo(n,e.outputType);break;case"include":pc(n,e.outputType);break;case"omit":dc(n,e.outputType);break}}t.addErrorMessage(n=>{let i=[`Unknown field ${n.red(`\`${r.fieldName}\``)}`];return r.parentKind!=="unknown"&&i.push(`for ${n.bold(r.parentKind)} statement`),i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),i.push(yt(n)),i.join(" ")})}function rc(e,t){let r=uo(e.selectionPath,t);r.parentKind!=="unknown"&&r.field.value.markAsError(),t.addErrorMessage(n=>`Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`)}function nc(e,t){let r=e.argumentPath[0],n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&(n.getField(r)?.markAsError(),mc(n,e.arguments)),t.addErrorMessage(i=>so(i,r,e.arguments.map(o=>o.name)))}function ic(e,t){let[r,n]=Ve(e.argumentPath),i=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(i){i.getDeepField(e.argumentPath)?.markAsError();let o=i.getDeepFieldValue(r)?.asObject();o&&co(o,e.inputType)}t.addErrorMessage(o=>so(o,n,e.inputType.fields.map(s=>s.name)))}function so(e,t,r){let n=[`Unknown argument \`${e.red(t)}\`.`],i=gc(t,r);return i&&n.push(`Did you mean \`${e.green(i)}\`?`),r.length>0&&n.push(yt(e)),n.join(" ")}function oc(e,t){let r;t.addErrorMessage(l=>r?.value instanceof k&&r.value.text==="null"?`Argument \`${l.green(o)}\` must not be ${l.red("null")}.`:`Argument \`${l.green(o)}\` is missing.`);let n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(!n)return;let[i,o]=Ve(e.argumentPath),s=new gt,a=n.getDeepFieldValue(i)?.asObject();if(a){if(r=a.getField(o),r&&a.removeField(o),e.inputTypes.length===1&&e.inputTypes[0].kind==="object"){for(let l of e.inputTypes[0].fields)s.addField(l.name,l.typeNames.join(" | "));a.addSuggestion(new q(o,s).makeRequired())}else{let l=e.inputTypes.map(ao).join(" | ");a.addSuggestion(new q(o,l).makeRequired())}if(e.dependentArgumentPath){n.getDeepField(e.dependentArgumentPath)?.markAsError();let[,l]=Ve(e.dependentArgumentPath);t.addErrorMessage(u=>`Argument \`${u.green(o)}\` is required because argument \`${u.green(l)}\` was provided.`)}}}function ao(e){return e.kind==="list"?`${ao(e.elementType)}[]`:e.name}function sc(e,t){let r=e.argument.name,n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&n.getDeepFieldValue(e.argumentPath)?.markAsError(),t.addErrorMessage(i=>{let o=ir("or",e.argument.typeNames.map(s=>i.green(s)));return`Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`})}function ac(e,t){let r=e.argument.name,n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();n&&n.getDeepFieldValue(e.argumentPath)?.markAsError(),t.addErrorMessage(i=>{let o=[`Invalid value for argument \`${i.bold(r)}\``];if(e.underlyingError&&o.push(`: ${e.underlyingError}`),o.push("."),e.argument.typeNames.length>0){let s=ir("or",e.argument.typeNames.map(a=>i.green(a)));o.push(` Expected ${s}.`)}return o.join("")})}function lc(e,t){let r=e.argument.name,n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),i;if(n){let s=n.getDeepField(e.argumentPath)?.value;s?.markAsError(),s instanceof k&&(i=s.text)}t.addErrorMessage(o=>{let s=["Unable to fit value"];return i&&s.push(o.red(i)),s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),s.join(" ")})}function uc(e,t){let r=e.argumentPath[e.argumentPath.length-1],n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();if(n){let i=n.getDeepFieldValue(e.argumentPath)?.asObject();i&&co(i,e.inputType)}t.addErrorMessage(i=>{let o=[`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];return e.constraints.minFieldCount===1?e.constraints.requiredFields?o.push(`${i.green("at least one of")} ${ir("or",e.constraints.requiredFields.map(s=>`\`${i.bold(s)}\``))} arguments.`):o.push(`${i.green("at least one")} argument.`):o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`),o.push(yt(i)),o.join(" ")})}function cc(e,t){let r=e.argumentPath[e.argumentPath.length-1],n=t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),i=[];if(n){let o=n.getDeepFieldValue(e.argumentPath)?.asObject();o&&(o.markAsError(),i=Object.keys(o.getFields()))}t.addErrorMessage(o=>{let s=[`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];return e.constraints.minFieldCount===1&&e.constraints.maxFieldCount==1?s.push(`${o.green("exactly one")} argument,`):e.constraints.maxFieldCount==1?s.push(`${o.green("at most one")} argument,`):s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`),s.push(`but you provided ${ir("and",i.map(a=>o.red(a)))}. Please choose`),e.constraints.maxFieldCount===1?s.push("one."):s.push(`${e.constraints.maxFieldCount}.`),s.join(" ")})}function lo(e,t){for(let r of t.fields)e.hasField(r.name)||e.addSuggestion(new q(r.name,"true"))}function pc(e,t){for(let r of t.fields)r.isRelation&&!e.hasField(r.name)&&e.addSuggestion(new q(r.name,"true"))}function dc(e,t){for(let r of t.fields)!e.hasField(r.name)&&!r.isRelation&&e.addSuggestion(new q(r.name,"true"))}function mc(e,t){for(let r of t)e.hasField(r.name)||e.addSuggestion(new q(r.name,r.typeNames.join(" | ")))}function uo(e,t){let[r,n]=Ve(e),i=t.arguments.getDeepSubSelectionValue(r)?.asObject();if(!i)return{parentKind:"unknown",fieldName:n};let o=i.getFieldValue("select")?.asObject(),s=i.getFieldValue("include")?.asObject(),a=i.getFieldValue("omit")?.asObject(),l=o?.getField(n);return o&&l?{parentKind:"select",parent:o,field:l,fieldName:n}:(l=s?.getField(n),s&&l?{parentKind:"include",field:l,parent:s,fieldName:n}:(l=a?.getField(n),a&&l?{parentKind:"omit",field:l,parent:a,fieldName:n}:{parentKind:"unknown",fieldName:n}))}function co(e,t){if(t.kind==="object")for(let r of t.fields)e.hasField(r.name)||e.addSuggestion(new q(r.name,r.typeNames.join(" | ")))}function Ve(e){let t=[...e],r=t.pop();if(!r)throw new Error("unexpected empty path");return[t,r]}function yt({green:e,enabled:t}){return"Available options are "+(t?`listed in ${e("green")}`:"marked with ?")+"."}function ir(e,t){if(t.length===1)return t[0];let r=[...t],n=r.pop();return`${r.join(", ")} ${e} ${n}`}var fc=3;function gc(e,t){let r=1/0,n;for(let i of t){let o=(0,oo.default)(e,i);o>fc||o<r&&(r=o,n=i)}return n}var mo=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var ht=class{modelName;name;typeName;isList;isEnum;constructor(t,r,n,i,o){this.modelName=t,this.name=r,this.typeName=n,this.isList=i,this.isEnum=o}_toGraphQLInputType(){let t=this.isList?"List":"",r=this.isEnum?"Enum":"";return`${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`}};function qe(e){return e instanceof ht}var po=": ",or=class{constructor(t,r){this.name=t;this.value=r}hasError=!1;markAsError(){this.hasError=!0}getPrintWidth(){return this.name.length+this.value.getPrintWidth()+po.length}write(t){let r=new Z(this.name);this.hasError&&r.underline().setColor(t.context.colors.red),t.write(r).write(po).write(this.value)}};var dn=class{arguments;errorMessages=[];constructor(t){this.arguments=t}write(t){t.write(this.arguments)}addErrorMessage(t){this.errorMessages.push(t)}renderAllMessages(t){return this.errorMessages.map(r=>r(t)).join(`
`)}};function je(e){return new dn(fo(e))}function fo(e){let t=new $e;for(let[r,n]of Object.entries(e)){let i=new or(r,go(n));t.addField(i)}return t}function go(e){if(typeof e=="string")return new k(JSON.stringify(e));if(typeof e=="number"||typeof e=="boolean")return new k(String(e));if(typeof e=="bigint")return new k(`${e}n`);if(e===null)return new k("null");if(e===void 0)return new k("undefined");if(De(e))return new k(`new Prisma.Decimal("${e.toFixed()}")`);if(e instanceof Uint8Array)return Buffer.isBuffer(e)?new k(`Buffer.alloc(${e.byteLength})`):new k(`new Uint8Array(${e.byteLength})`);if(e instanceof Date){let t=Kt(e)?e.toISOString():"Invalid Date";return new k(`new Date("${t}")`)}return e instanceof mo.ObjectEnumValue?new k(`Prisma.${e._getName()}`):qe(e)?new k(`prisma.${ce(e.modelName)}.$fields.${e.name}`):Array.isArray(e)?yc(e):typeof e=="object"?fo(e):new k(Object.prototype.toString.call(e))}function yc(e){let t=new Le;for(let r of e)t.addItem(go(r));return t}function sr(e,t){let r=t==="pretty"?io:nr,n=e.renderAllMessages(r),i=new Fe(0,{colors:r}).write(e).toString();return{message:n,args:i}}function ar({args:e,errors:t,errorFormat:r,callsite:n,originalMethod:i,clientVersion:o,globalOmit:s}){let a=je(e);for(let p of t)er(p,a,s);let{message:l,args:u}=sr(a,r),c=Xt({message:l,callsite:n,originalMethod:i,showColors:r==="pretty",callArguments:u});throw new yo.PrismaClientValidationError(c,{clientVersion:o})}function Y(e){return e.replace(/^./,t=>t.toLowerCase())}function wo(e,t,r){let n=Y(r);return!t.result||!(t.result.$allModels||t.result[n])?e:hc({...e,...ho(t.name,e,t.result.$allModels),...ho(t.name,e,t.result[n])})}function hc(e){let t=new K,r=(n,i)=>t.getOrCreate(n,()=>i.has(n)?[n]:(i.add(n),e[n]?e[n].needs.flatMap(o=>r(o,i)):[n]));return Wt(e,n=>({...n,needs:r(n.name,new Set)}))}function ho(e,t,r){return r?Wt(r,({needs:n,compute:i},o)=>({name:o,needs:n?Object.keys(n).filter(s=>n[s]):[],compute:wc(t,o,i)})):{}}function wc(e,t,r){let n=e?.[t]?.compute;return n?i=>r({...i,[t]:n(i)}):r}function bo(e,t){if(!t)return e;let r={...e};for(let n of Object.values(t))if(e[n.name])for(let i of n.needs)r[i]=!0;return r}function xo(e,t){if(!t)return e;let r={...e};for(let n of Object.values(t))if(!e[n.name])for(let i of n.needs)delete r[i];return r}var lr=class{constructor(t,r){this.extension=t;this.previous=r}computedFieldsCache=new K;modelExtensionsCache=new K;queryCallbacksCache=new K;clientExtensions=rt(()=>this.extension.client?{...this.previous?.getAllClientExtensions(),...this.extension.client}:this.previous?.getAllClientExtensions());batchCallbacks=rt(()=>{let t=this.previous?.getAllBatchQueryCallbacks()??[],r=this.extension.query?.$__internalBatch;return r?t.concat(r):t});getAllComputedFields(t){return this.computedFieldsCache.getOrCreate(t,()=>wo(this.previous?.getAllComputedFields(t),this.extension,t))}getAllClientExtensions(){return this.clientExtensions.get()}getAllModelExtensions(t){return this.modelExtensionsCache.getOrCreate(t,()=>{let r=Y(t);return!this.extension.model||!(this.extension.model[r]||this.extension.model.$allModels)?this.previous?.getAllModelExtensions(t):{...this.previous?.getAllModelExtensions(t),...this.extension.model.$allModels,...this.extension.model[r]}})}getAllQueryCallbacks(t,r){return this.queryCallbacksCache.getOrCreate(`${t}:${r}`,()=>{let n=this.previous?.getAllQueryCallbacks(t,r)??[],i=[],o=this.extension.query;return!o||!(o[t]||o.$allModels||o[r]||o.$allOperations)?n:(o[t]!==void 0&&(o[t][r]!==void 0&&i.push(o[t][r]),o[t].$allOperations!==void 0&&i.push(o[t].$allOperations)),t!=="$none"&&o.$allModels!==void 0&&(o.$allModels[r]!==void 0&&i.push(o.$allModels[r]),o.$allModels.$allOperations!==void 0&&i.push(o.$allModels.$allOperations)),o[r]!==void 0&&i.push(o[r]),o.$allOperations!==void 0&&i.push(o.$allOperations),n.concat(i))})}getAllBatchQueryCallbacks(){return this.batchCallbacks.get()}},Ue=class e{constructor(t){this.head=t}static empty(){return new e}static single(t){return new e(new lr(t))}isEmpty(){return this.head===void 0}append(t){return new e(new lr(t,this.head))}getAllComputedFields(t){return this.head?.getAllComputedFields(t)}getAllClientExtensions(){return this.head?.getAllClientExtensions()}getAllModelExtensions(t){return this.head?.getAllModelExtensions(t)}getAllQueryCallbacks(t,r){return this.head?.getAllQueryCallbacks(t,r)??[]}getAllBatchQueryCallbacks(){return this.head?.getAllBatchQueryCallbacks()??[]}};var ur=class{constructor(t){this.name=t}};function Eo(e){return e instanceof ur}function Po(e){return new ur(e)}var To=Symbol(),wt=class{constructor(t){if(t!==To)throw new Error("Skip instance can not be constructed directly")}ifUndefined(t){return t===void 0?cr:t}},cr=new wt(To);function B(e){return e instanceof wt}var bc={findUnique:"findUnique",findUniqueOrThrow:"findUniqueOrThrow",findFirst:"findFirst",findFirstOrThrow:"findFirstOrThrow",findMany:"findMany",count:"aggregate",create:"createOne",createMany:"createMany",createManyAndReturn:"createManyAndReturn",update:"updateOne",updateMany:"updateMany",updateManyAndReturn:"updateManyAndReturn",upsert:"upsertOne",delete:"deleteOne",deleteMany:"deleteMany",executeRaw:"executeRaw",queryRaw:"queryRaw",aggregate:"aggregate",groupBy:"groupBy",runCommandRaw:"runCommandRaw",findRaw:"findRaw",aggregateRaw:"aggregateRaw"},So="explicitly `undefined` values are not allowed";function pr({modelName:e,action:t,args:r,runtimeDataModel:n,extensions:i=Ue.empty(),callsite:o,clientMethod:s,errorFormat:a,clientVersion:l,previewFeatures:u,globalOmit:c,wrapRawValues:p}){let d=new mn({runtimeDataModel:n,modelName:e,action:t,rootArgs:r,callsite:o,extensions:i,selectionPath:[],argumentPath:[],originalMethod:s,errorFormat:a,clientVersion:l,previewFeatures:u,globalOmit:c,wrapRawValues:p});return{modelName:e,action:bc[t],query:bt(r,d)}}function bt({select:e,include:t,...r}={},n){let i=r.omit;return delete r.omit,{arguments:vo(r,n),selection:xc(e,t,i,n)}}function xc(e,t,r,n){return e?(t?n.throwValidationError({kind:"MutuallyExclusiveFields",firstField:"include",secondField:"select",selectionPath:n.getSelectionPath()}):r&&n.throwValidationError({kind:"MutuallyExclusiveFields",firstField:"omit",secondField:"select",selectionPath:n.getSelectionPath()}),Sc(e,n)):Ec(n,t,r)}function Ec(e,t,r){let n={};return e.modelOrType&&!e.isRawAction()&&(n.$composites=!0,n.$scalars=!0),t&&Pc(n,t,e),Tc(n,r,e),n}function Pc(e,t,r){for(let[n,i]of Object.entries(t)){if(B(i))continue;let o=r.nestSelection(n);if(fn(i,o),i===!1||i===void 0){e[n]=!1;continue}let s=r.findField(n);if(s&&s.kind!=="object"&&r.throwValidationError({kind:"IncludeOnScalar",selectionPath:r.getSelectionPath().concat(n),outputType:r.getOutputTypeDescription()}),s){e[n]=bt(i===!0?{}:i,o);continue}if(i===!0){e[n]=!0;continue}e[n]=bt(i,o)}}function Tc(e,t,r){let n=r.getComputedFields(),i={...r.getGlobalOmit(),...t},o=xo(i,n);for(let[s,a]of Object.entries(o)){if(B(a))continue;fn(a,r.nestSelection(s));let l=r.findField(s);n?.[s]&&!l||(e[s]=!a)}}function Sc(e,t){let r={},n=t.getComputedFields(),i=bo(e,n);for(let[o,s]of Object.entries(i)){if(B(s))continue;let a=t.nestSelection(o);fn(s,a);let l=t.findField(o);if(!(n?.[o]&&!l)){if(s===!1||s===void 0||B(s)){r[o]=!1;continue}if(s===!0){l?.kind==="object"?r[o]=bt({},a):r[o]=!0;continue}r[o]=bt(s,a)}}return r}function Ao(e,t){if(e===null)return null;if(typeof e=="string"||typeof e=="number"||typeof e=="boolean")return e;if(typeof e=="bigint")return{$type:"BigInt",value:String(e)};if(Ne(e)){if(Kt(e))return{$type:"DateTime",value:e.toISOString()};t.throwValidationError({kind:"InvalidArgumentValue",selectionPath:t.getSelectionPath(),argumentPath:t.getArgumentPath(),argument:{name:t.getArgumentName(),typeNames:["Date"]},underlyingError:"Provided Date object is invalid"})}if(Eo(e))return{$type:"Param",value:e.name};if(qe(e))return{$type:"FieldRef",value:{_ref:e.name,_container:e.modelName}};if(Array.isArray(e))return Ac(e,t);if(ArrayBuffer.isView(e)){let{buffer:r,byteOffset:n,byteLength:i}=e;return{$type:"Bytes",value:Buffer.from(r,n,i).toString("base64")}}if(vc(e))return e.values;if(De(e))return{$type:"Decimal",value:e.toFixed()};if(e instanceof de.ObjectEnumValue){if(!(0,de.isDbNull)(e)&&!(0,de.isJsonNull)(e)&&!(0,de.isAnyNull)(e))throw new Error("Invalid ObjectEnumValue");return{$type:"Enum",value:e._getName()}}if(Cc(e))return e.toJSON();if(typeof e=="object")return vo(e,t);t.throwValidationError({kind:"InvalidArgumentValue",selectionPath:t.getSelectionPath(),argumentPath:t.getArgumentPath(),argument:{name:t.getArgumentName(),typeNames:[]},underlyingError:`We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`})}function vo(e,t){if(t.shouldWrapRawValues()&&e.$type)return{$type:"Raw",value:e};let r={};for(let n in e){let i=e[n],o=t.nestArgument(n);B(i)||(i!==void 0?r[n]=Ao(i,o):t.isPreviewFeatureOn("strictUndefinedChecks")&&t.throwValidationError({kind:"InvalidArgumentValue",argumentPath:o.getArgumentPath(),selectionPath:t.getSelectionPath(),argument:{name:t.getArgumentName(),typeNames:[]},underlyingError:So}))}return r}function Ac(e,t){let r=[];for(let n=0;n<e.length;n++){let i=t.nestArgument(String(n)),o=e[n];if(o===void 0||B(o)){let s=o===void 0?"undefined":"Prisma.skip";t.throwValidationError({kind:"InvalidArgumentValue",selectionPath:i.getSelectionPath(),argumentPath:i.getArgumentPath(),argument:{name:`${t.getArgumentName()}[${n}]`,typeNames:[]},underlyingError:`Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`})}r.push(Ao(o,i))}return r}function vc(e){return typeof e=="object"&&e!==null&&e.__prismaRawParameters__===!0}function Cc(e){return typeof e=="object"&&e!==null&&typeof e.toJSON=="function"}function fn(e,t){e===void 0&&t.isPreviewFeatureOn("strictUndefinedChecks")&&t.throwValidationError({kind:"InvalidSelectionValue",selectionPath:t.getSelectionPath(),underlyingError:So})}var mn=class e{constructor(t){this.params=t;this.params.modelName&&(this.modelOrType=this.params.runtimeDataModel.models[this.params.modelName]??this.params.runtimeDataModel.types[this.params.modelName])}modelOrType;throwValidationError(t){ar({errors:[t],originalMethod:this.params.originalMethod,args:this.params.rootArgs??{},callsite:this.params.callsite,errorFormat:this.params.errorFormat,clientVersion:this.params.clientVersion,globalOmit:this.params.globalOmit})}getSelectionPath(){return this.params.selectionPath}getArgumentPath(){return this.params.argumentPath}getArgumentName(){return this.params.argumentPath[this.params.argumentPath.length-1]}getOutputTypeDescription(){if(!(!this.params.modelName||!this.modelOrType))return{name:this.params.modelName,fields:this.modelOrType.fields.map(t=>({name:t.name,typeName:"boolean",isRelation:t.kind==="object"}))}}isRawAction(){return["executeRaw","queryRaw","runCommandRaw","findRaw","aggregateRaw"].includes(this.params.action)}isPreviewFeatureOn(t){return this.params.previewFeatures.includes(t)}shouldWrapRawValues(){return this.params.wrapRawValues??!0}getComputedFields(){if(this.params.modelName)return this.params.extensions.getAllComputedFields(this.params.modelName)}findField(t){return this.modelOrType?.fields.find(r=>r.name===t)}nestSelection(t){let r=this.findField(t),n=r?.kind==="object"?r.type:void 0;return new e({...this.params,modelName:n,selectionPath:this.params.selectionPath.concat(t)})}getGlobalOmit(){return this.params.modelName&&this.shouldApplyGlobalOmit()?this.params.globalOmit?.[ce(this.params.modelName)]??{}:{}}shouldApplyGlobalOmit(){switch(this.params.action){case"findFirst":case"findFirstOrThrow":case"findUniqueOrThrow":case"findMany":case"upsert":case"findUnique":case"createManyAndReturn":case"create":case"update":case"updateManyAndReturn":case"delete":return!0;case"executeRaw":case"aggregateRaw":case"runCommandRaw":case"findRaw":case"createMany":case"deleteMany":case"groupBy":case"updateMany":case"count":case"aggregate":case"queryRaw":return!1;default:oe(this.params.action,"Unknown action")}}nestArgument(t){return new e({...this.params,argumentPath:this.params.argumentPath.concat(t)})}};function Co(e,t){let r=rt(()=>Rc(t));Object.defineProperty(e,"dmmf",{get:()=>r.get()})}function Rc(e){return{datamodel:{models:gn(e.models),enums:gn(e.enums),types:gn(e.types)}}}function gn(e){return Object.entries(e).map(([t,r])=>({name:t,...r}))}var yn=new WeakMap,dr="$$PrismaTypedSql",xt=class{constructor(t,r){yn.set(this,{sql:t,values:r}),Object.defineProperty(this,dr,{value:dr})}get sql(){return yn.get(this).sql}get values(){return yn.get(this).values}};function Ro(e){return(...t)=>new xt(e,t)}function mr(e){return e!=null&&e[dr]===dr}var Ql=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var Jl=__webpack_require__("node:async_hooks"),Hl=__webpack_require__("node:events");function Et(e){return{getKeys(){return Object.keys(e)},getPropertyValue(t){return e[t]}}}function _(e,t){return{getKeys(){return[e]},getPropertyValue(){return t()}}}function xe(e){let t=new K;return{getKeys(){return e.getKeys()},getPropertyValue(r){return t.getOrCreate(r,()=>e.getPropertyValue(r))},getPropertyDescriptor(r){return e.getPropertyDescriptor?.(r)}}}var fr={enumerable:!0,configurable:!0,writable:!0};function gr(e){let t=new Set(e);return{getPrototypeOf:()=>Object.prototype,getOwnPropertyDescriptor:()=>fr,has:(r,n)=>t.has(n),set:(r,n,i)=>t.add(n)&&Reflect.set(r,n,i),ownKeys:()=>[...t]}}var ko=Symbol.for("nodejs.util.inspect.custom");function z(e,t){let r=kc(t),n=new Set,i=new Proxy(e,{get(o,s){if(n.has(s))return o[s];let a=r.get(s);return a?a.getPropertyValue(s):o[s]},has(o,s){if(n.has(s))return!0;let a=r.get(s);return a?a.has?.(s)??!0:Reflect.has(o,s)},ownKeys(o){let s=Io(Reflect.ownKeys(o),r),a=Io(Array.from(r.keys()),r);return[...new Set([...s,...a,...n])]},set(o,s,a){return r.get(s)?.getPropertyDescriptor?.(s)?.writable===!1?!1:(n.add(s),Reflect.set(o,s,a))},getOwnPropertyDescriptor(o,s){let a=Reflect.getOwnPropertyDescriptor(o,s);if(a&&!a.configurable)return a;let l=r.get(s);return l?l.getPropertyDescriptor?{...fr,...l?.getPropertyDescriptor(s)}:fr:a},defineProperty(o,s,a){return n.add(s),Reflect.defineProperty(o,s,a)},getPrototypeOf:()=>Object.prototype});return i[ko]=function(){let o={...this};return delete o[ko],o},i}function kc(e){let t=new Map;for(let r of e){let n=r.getKeys();for(let i of n)t.set(i,r)}return t}function Io(e,t){return e.filter(r=>t.get(r)?.has?.(r)??!0)}function Be(e){return{getKeys(){return e},has(){return!1},getPropertyValue(){}}}function Oo(e){if(e===void 0)return"";let t=je(e);return new Fe(0,{colors:nr}).write(t).toString()}var Pt="<unknown>";function No(e){var t=e.split(`
`);return t.reduce(function(r,n){var i=Nc(n)||Mc(n)||Lc(n)||jc(n)||Vc(n);return i&&r.push(i),r},[])}var Ic=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Oc=/\((\S*)(?::(\d+))(?::(\d+))\)/;function Nc(e){var t=Ic.exec(e);if(!t)return null;var r=t[2]&&t[2].indexOf("native")===0,n=t[2]&&t[2].indexOf("eval")===0,i=Oc.exec(t[2]);return n&&i!=null&&(t[2]=i[1],t[3]=i[2],t[4]=i[3]),{file:r?null:t[2],methodName:t[1]||Pt,arguments:r?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var Dc=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;function Mc(e){var t=Dc.exec(e);return t?{file:t[2],methodName:t[1]||Pt,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var Fc=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,_c=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i;function Lc(e){var t=Fc.exec(e);if(!t)return null;var r=t[3]&&t[3].indexOf(" > eval")>-1,n=_c.exec(t[3]);return r&&n!=null&&(t[3]=n[1],t[4]=n[2],t[5]=null),{file:t[3],methodName:t[1]||Pt,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var $c=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;function Vc(e){var t=$c.exec(e);return t?{file:t[3],methodName:t[1]||Pt,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var qc=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function jc(e){var t=qc.exec(e);return t?{file:t[2],methodName:t[1]||Pt,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var hn=class{getLocation(){return null}},wn=class{_error;constructor(){this._error=new Error}getLocation(){let t=this._error.stack;if(!t)return null;let n=No(t).find(i=>{if(!i.file)return!1;let o=sn(i.file);return o!=="<anonymous>"&&!o.includes("@prisma")&&!o.includes("/packages/client/src/runtime/")&&!o.endsWith("/runtime/client.js")&&!o.startsWith("internal/")&&!i.methodName.includes("new ")&&!i.methodName.includes("getCallSite")&&!i.methodName.includes("Proxy.")&&i.methodName.split(".").length<4});return!n||!n.file?null:{fileName:n.file,lineNumber:n.lineNumber,columnNumber:n.column}}};function me(e){return e==="minimal"?typeof $EnabledCallSite=="function"&&e!=="minimal"?new $EnabledCallSite:new hn:new wn}var Do={_avg:!0,_count:!0,_sum:!0,_min:!0,_max:!0};function Qe(e={}){let t=Bc(e);return Object.entries(t).reduce((n,[i,o])=>(Do[i]!==void 0?n.select[i]={select:o}:n[i]=o,n),{select:{}})}function Bc(e={}){return typeof e._count=="boolean"?{...e,_count:{_all:e._count}}:e}function yr(e={}){return t=>(typeof e._count=="boolean"&&(t._count=t._count._all),t)}function Mo(e,t){let r=yr(e);return t({action:"aggregate",unpacker:r,argsMapper:Qe})(e)}function Qc(e={}){let{select:t,...r}=e;return typeof t=="object"?Qe({...r,_count:t}):Qe({...r,_count:{_all:!0}})}function Jc(e={}){return typeof e.select=="object"?t=>yr(e)(t)._count:t=>yr(e)(t)._count._all}function Fo(e,t){return t({action:"count",unpacker:Jc(e),argsMapper:Qc})(e)}function Hc(e={}){let t=Qe(e);if(Array.isArray(t.by))for(let r of t.by)typeof r=="string"&&(t.select[r]=!0);else typeof t.by=="string"&&(t.select[t.by]=!0);return t}function Gc(e={}){return t=>(typeof e?._count=="boolean"&&t.forEach(r=>{r._count=r._count._all}),t)}function _o(e,t){return t({action:"groupBy",unpacker:Gc(e),argsMapper:Hc})(e)}function Lo(e,t,r){if(t==="aggregate")return n=>Mo(n,r);if(t==="count")return n=>Fo(n,r);if(t==="groupBy")return n=>_o(n,r)}function $o(e,t){let r=t.fields.filter(i=>!i.relationName),n=Pi(r,"name");return new Proxy({},{get(i,o){if(o in i||typeof o=="symbol")return i[o];let s=n[o];if(s)return new ht(e,o,s.type,s.isList,s.kind==="enum")},...gr(Object.keys(n))})}var Vo=e=>Array.isArray(e)?e:e.split("."),bn=(e,t)=>Vo(t).reduce((r,n)=>r&&r[n],e),qo=(e,t,r)=>Vo(t).reduceRight((n,i,o,s)=>Object.assign({},bn(e,s.slice(0,o)),{[i]:n}),r);function zc(e,t){return e===void 0||t===void 0?[]:[...t,"select",e]}function Wc(e,t,r){return t===void 0?e??{}:qo(t,r,e||!0)}function xn(e,t,r,n,i,o){let a=e._runtimeDataModel.models[t].fields.reduce((l,u)=>({...l,[u.name]:u}),{});return l=>{let u=me(e._errorFormat),c=zc(n,i),p=Wc(l,o,c),d=r({dataPath:c,callsite:u})(p),f=Kc(e,t);return new Proxy(d,{get(h,x){if(!f.includes(x))return h[x];let L=[a[x].type,r,x],T=[c,p];return xn(e,...L,...T)},...gr([...f,...Object.getOwnPropertyNames(d)])})}}function Kc(e,t){return e._runtimeDataModel.models[t].fields.filter(r=>r.kind==="object").map(r=>r.name)}var Zc=["findUnique","findUniqueOrThrow","findFirst","findFirstOrThrow","create","update","upsert","delete"],Yc=["aggregate","count","groupBy"];function En(e,t){let r=e._extensions.getAllModelExtensions(t)??{},n=[Xc(e,t),tp(e,t),Et(r),_("name",()=>t),_("$name",()=>t),_("$parent",()=>e._appliedParent)];return z({},n)}function Xc(e,t){let r=Y(t),n=Object.keys(Me).concat("count");return{getKeys(){return n},getPropertyValue(i){let o=i,s=a=>l=>{let u=me(e._errorFormat);return e._createPrismaPromise(c=>{let p={args:l,dataPath:[],action:o,model:t,clientMethod:`${r}.${i}`,jsModelName:r,transaction:c,callsite:u};return e._request({...p,...a})},{action:o,args:l,model:t})};return Zc.includes(o)?xn(e,t,s):ep(i)?Lo(e,i,s):s({})}}}function ep(e){return Yc.includes(e)}function tp(e,t){return xe(_("fields",()=>{let r=e._runtimeDataModel.models[t];return $o(t,r)}))}function jo(e){return e.replace(/^./,t=>t.toUpperCase())}var Pn=Symbol();function Tt(e){let t=[rp(e),np(e),_(Pn,()=>e),_("$parent",()=>e._appliedParent)],r=e._extensions.getAllClientExtensions();return r&&t.push(Et(r)),z(e,t)}function rp(e){let t=Object.getPrototypeOf(e._originalClient),r=[...new Set(Object.getOwnPropertyNames(t))];return{getKeys(){return r},getPropertyValue(n){return e[n]}}}function np(e){let t=Object.keys(e._runtimeDataModel.models),r=t.map(Y),n=[...new Set(t.concat(r))];return xe({getKeys(){return n},getPropertyValue(i){let o=jo(i);if(e._runtimeDataModel.models[o]!==void 0)return En(e,o);if(e._runtimeDataModel.models[i]!==void 0)return En(e,i)},getPropertyDescriptor(i){if(!r.includes(i))return{enumerable:!1}}})}function Uo(e){return e[Pn]?e[Pn]:e}function Bo(e){if(typeof e=="function")return e(this);let t=Object.create(this._originalClient,{_extensions:{value:this._extensions.append(e)},_appliedParent:{value:this,configurable:!0},$on:{value:void 0}});return Tt(t)}function Qo({result:e,modelName:t,select:r,omit:n,extensions:i}){let o=i.getAllComputedFields(t);if(!o)return e;let s=[],a=[];for(let l of Object.values(o)){if(n){if(n[l.name])continue;let u=l.needs.filter(c=>n[c]);u.length>0&&a.push(Be(u))}else if(r){if(!r[l.name])continue;let u=l.needs.filter(c=>!r[c]);u.length>0&&a.push(Be(u))}ip(e,l.needs)&&s.push(op(l,z(e,s)))}return s.length>0||a.length>0?z(e,[...s,...a]):e}function ip(e,t){return t.every(r=>an(e,r))}function op(e,t){return xe(_(e.name,()=>e.compute(t)))}function hr({visitor:e,result:t,args:r,runtimeDataModel:n,modelName:i}){if(Array.isArray(t)){for(let s=0;s<t.length;s++)t[s]=hr({result:t[s],args:r,modelName:i,runtimeDataModel:n,visitor:e});return t}let o=e(t,i,r)??t;return r.include&&Jo({includeOrSelect:r.include,result:o,parentModelName:i,runtimeDataModel:n,visitor:e}),r.select&&Jo({includeOrSelect:r.select,result:o,parentModelName:i,runtimeDataModel:n,visitor:e}),o}function Jo({includeOrSelect:e,result:t,parentModelName:r,runtimeDataModel:n,visitor:i}){for(let[o,s]of Object.entries(e)){if(!s||t[o]==null||B(s))continue;let l=n.models[r].fields.find(c=>c.name===o);if(!l||l.kind!=="object"||!l.relationName)continue;let u=typeof s=="object"?s:{};t[o]=hr({visitor:i,result:t[o],args:u,modelName:l.type,runtimeDataModel:n})}}function Ho({result:e,modelName:t,args:r,extensions:n,runtimeDataModel:i,globalOmit:o}){return n.isEmpty()||e==null||typeof e!="object"||!i.models[t]?e:hr({result:e,args:r??{},modelName:t,runtimeDataModel:i,visitor:(a,l,u)=>{let c=Y(l);return Qo({result:a,modelName:c,select:u.select,omit:u.select?void 0:{...o?.[c],...u.omit},extensions:n})}})}var Ee=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var sp=["$connect","$disconnect","$on","$transaction","$extends"],Go=sp;function zo(e){if(e instanceof Ee.Sql)return ap(e);if(mr(e))return lp(e);if(Array.isArray(e)){let r=[e[0]];for(let n=1;n<e.length;n++)r[n]=St(e[n]);return r}let t={};for(let r in e)t[r]=St(e[r]);return t}function ap(e){return new Ee.Sql(e.strings,e.values)}function lp(e){return new xt(e.sql,e.values)}function St(e){if(typeof e!="object"||e==null||e instanceof Ee.ObjectEnumValue||qe(e)||B(e))return e;if(De(e))return new Ee.Decimal(e.toFixed());if(Ne(e))return new Date(+e);if(ArrayBuffer.isView(e))return e.slice(0);if(Array.isArray(e)){let t=e.length,r;for(r=Array(t);t--;)r[t]=St(e[t]);return r}if(typeof e=="object"){let t={};for(let r in e)r==="__proto__"?Object.defineProperty(t,r,{value:St(e[r]),configurable:!0,enumerable:!0,writable:!0}):t[r]=St(e[r]);return t}oe(e,"Unknown value")}function Ko(e,t,r,n=0){return e._createPrismaPromise(i=>{let o=t.customDataProxyFetch;return"transaction"in t&&i!==void 0&&(t.transaction?.kind==="batch"&&t.transaction.lock.then(),t.transaction=i),n===r.length?e._executeRequest(t):r[n]({model:t.model,operation:t.model?t.action:t.clientMethod,args:zo(t.args??{}),__internalParams:t,query:(s,a=t)=>{let l=a.customDataProxyFetch;return a.customDataProxyFetch=es(o,l),a.args=s,Ko(e,a,r,n+1)}})})}function Zo(e,t){let{jsModelName:r,action:n,clientMethod:i}=t,o=r?n:i;if(e._extensions.isEmpty())return e._executeRequest(t);let s=e._extensions.getAllQueryCallbacks(r??"$none",o);return Ko(e,t,s)}function Yo(e){return t=>{let r={requests:t},n=t[0].extensions.getAllBatchQueryCallbacks();return n.length?Xo(r,n,0,e):e(r)}}function Xo(e,t,r,n){if(r===t.length)return n(e);let i=e.customDataProxyFetch,o=e.requests[0].transaction;return t[r]({args:{queries:e.requests.map(s=>({model:s.modelName,operation:s.action,args:s.args})),transaction:o?{isolationLevel:o.kind==="batch"?o.isolationLevel:void 0}:void 0},__internalParams:e,query(s,a=e){let l=a.customDataProxyFetch;return a.customDataProxyFetch=es(i,l),Xo(a,t,r+1,n)}})}var Wo=e=>e;function es(e=Wo,t=Wo){return r=>e(t(r))}function rs({dataPath:e,modelName:t,args:r,runtimeDataModel:n}){let i={modelName:t,args:r??{}},o=up(e);if(!o||o.length===0)return i;let s=t,a=r??{};for(let l of o){let u=n.models[s];if(!u)return i;let c=u.fields.find(p=>p.name===l);if(!c)throw new Error(`Could not resolve relation field "${l}" on model "${s}" from dataPath "${e.join(".")}"`);if(c.kind!=="object"||!c.relationName)return i;s=c.type,a=cp(a,l)}return{modelName:s,args:a}}function up(e){let t=[];for(let r=0;r<e.length;r+=2){let n=e[r],i=e[r+1];if(n!=="select"&&n!=="include"||i===void 0)return;t.push(i)}return t}function cp(e,t){let r=e.select?.[t];if(ts(r))return r;let n=e.include?.[t];return ts(n)?n:{}}function ts(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}var ls=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var At=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");function P(e,t){throw new Error(t)}function Tn(e,t){return e===t||e!==null&&t!==null&&typeof e=="object"&&typeof t=="object"&&Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>Tn(e[r],t[r]))}function Je(e,t){let r=Object.keys(e),n=Object.keys(t);return(r.length<n.length?r:n).every(o=>{if(typeof e[o]==typeof t[o]&&typeof e[o]!="object")return e[o]===t[o];if(At.Decimal.isDecimal(e[o])||At.Decimal.isDecimal(t[o])){let s=ns(e[o]),a=ns(t[o]);return s&&a&&s.equals(a)}else if(e[o]instanceof Uint8Array||t[o]instanceof Uint8Array){let s=is(e[o]),a=is(t[o]);return s&&a&&s.equals(a)}else{if(e[o]instanceof Date||t[o]instanceof Date)return os(e[o])?.getTime()===os(t[o])?.getTime();if(typeof e[o]=="bigint"||typeof t[o]=="bigint")return ss(e[o])===ss(t[o]);if(typeof e[o]=="number"||typeof t[o]=="number")return as(e[o])===as(t[o])}return Tn(e[o],t[o])})}function ns(e){return At.Decimal.isDecimal(e)?e:typeof e=="number"||typeof e=="string"?new At.Decimal(e):void 0}function is(e){return Buffer.isBuffer(e)?e:e instanceof Uint8Array?Buffer.from(e.buffer,e.byteOffset,e.byteLength):typeof e=="string"?Buffer.from(e,"base64"):void 0}function os(e){return e instanceof Date?e:typeof e=="string"||typeof e=="number"?new Date(e):void 0}function ss(e){return typeof e=="bigint"?e:typeof e=="number"||typeof e=="string"?BigInt(e):void 0}function as(e){return typeof e=="number"?e:typeof e=="string"?Number(e):void 0}function vt(e){return JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString():ArrayBuffer.isView(r)?Buffer.from(r.buffer,r.byteOffset,r.byteLength).toString("base64"):r)}function pp(e){return e!==null&&typeof e=="object"&&typeof e.$type=="string"}function dp(e,t){let r={};for(let n of Object.keys(e))r[n]=t(e[n],n);return r}function W(e){return e===null?e:Array.isArray(e)?e.map(W):typeof e=="object"?pp(e)?mp(e):e.constructor!==null&&e.constructor.name!=="Object"?e:dp(e,W):e}function mp({$type:e,value:t}){switch(e){case"BigInt":return BigInt(t);case"Bytes":{let{buffer:r,byteOffset:n,byteLength:i}=Buffer.from(t,"base64");return new Uint8Array(r,n,i)}case"DateTime":return new Date(t);case"Decimal":return new ls.Decimal(t);case"Json":return JSON.parse(t);case"Raw":return t;case"FieldRef":throw new Error("FieldRef tagged values cannot be deserialized to JavaScript values");case"Enum":return t;default:P(t,"Unknown tagged value")}}function wr(e){return e.name==="DriverAdapterError"&&typeof e.cause=="object"}var m={Int32:0,Int64:1,Float:2,Double:3,Numeric:4,Boolean:5,Character:6,Text:7,Date:8,Time:9,DateTime:10,Json:11,Enum:12,Bytes:13,Set:14,Uuid:15,Int32Array:64,Int64Array:65,FloatArray:66,DoubleArray:67,NumericArray:68,BooleanArray:69,CharacterArray:70,TextArray:71,DateArray:72,TimeArray:73,DateTimeArray:74,JsonArray:75,EnumArray:76,BytesArray:77,UuidArray:78,UnknownNumber:128};var I=class extends Error{name="UserFacingError";code;meta;constructor(t,r,n){super(t),this.code=r,this.meta=n??{}}toQueryResponseErrorObject(){return{error:this.message,user_facing_error:{is_panic:!1,message:this.message,meta:this.meta,error_code:this.code}}}};function He(e){if(!wr(e))throw e;let t=fp(e),r=us(e);throw!t||!r?e:new I(r,t,{driverAdapterError:e})}function An(e){throw wr(e)?new I(`Raw query failed. Code: \`${e.cause.originalCode??"N/A"}\`. Message: \`${e.cause.originalMessage??us(e)}\``,"P2010",{driverAdapterError:e}):e}function fp(e){switch(e.cause.kind){case"AuthenticationFailed":return"P1000";case"DatabaseNotReachable":return"P1001";case"DatabaseDoesNotExist":return"P1003";case"SocketTimeout":return"P1008";case"DatabaseAlreadyExists":return"P1009";case"DatabaseAccessDenied":return"P1010";case"TlsConnectionError":return"P1011";case"ConnectionClosed":return"P1017";case"TransactionAlreadyClosed":return"P1018";case"LengthMismatch":return"P2000";case"UniqueConstraintViolation":return"P2002";case"ForeignKeyConstraintViolation":return"P2003";case"InvalidInputValue":return"P2007";case"UnsupportedNativeDataType":return"P2010";case"NullConstraintViolation":return"P2011";case"ValueOutOfRange":return"P2020";case"TableDoesNotExist":return"P2021";case"ColumnNotFound":return"P2022";case"InvalidIsolationLevel":case"InconsistentColumnData":return"P2023";case"MissingFullTextSearchIndex":return"P2030";case"TransactionWriteConflict":return"P2034";case"GenericJs":return"P2036";case"TooManyConnections":return"P2037";case"postgres":case"sqlite":case"mysql":case"mssql":return;default:P(e.cause,`Unknown error: ${e.cause}`)}}function us(e){switch(e.cause.kind){case"AuthenticationFailed":return`Authentication failed against the database server, the provided database credentials for \`${e.cause.user??"(not available)"}\` are not valid`;case"DatabaseNotReachable":{let t=e.cause.host&&e.cause.port?`${e.cause.host}:${e.cause.port}`:e.cause.host;return`Can't reach database server${t?` at ${t}`:""}`}case"DatabaseDoesNotExist":return`Database \`${e.cause.db??"(not available)"}\` does not exist on the database server`;case"SocketTimeout":return"Operation has timed out";case"DatabaseAlreadyExists":return`Database \`${e.cause.db??"(not available)"}\` already exists on the database server`;case"DatabaseAccessDenied":return`User was denied access on the database \`${e.cause.db??"(not available)"}\``;case"TlsConnectionError":return`Error opening a TLS connection: ${e.cause.reason}`;case"ConnectionClosed":return"Server has closed the connection.";case"TransactionAlreadyClosed":return e.cause.cause;case"LengthMismatch":return`The provided value for the column is too long for the column's type. Column: ${e.cause.column??"(not available)"}`;case"UniqueConstraintViolation":return`Unique constraint failed on the ${Sn(e.cause.constraint)}`;case"ForeignKeyConstraintViolation":return`Foreign key constraint violated on the ${Sn(e.cause.constraint)}`;case"UnsupportedNativeDataType":return`Failed to deserialize column of type '${e.cause.type}'. If you're using $queryRaw and this column is explicitly marked as \`Unsupported\` in your Prisma schema, try casting this column to any supported Prisma type such as \`String\`.`;case"NullConstraintViolation":return`Null constraint violation on the ${Sn(e.cause.constraint)}`;case"ValueOutOfRange":return`Value out of range for the type: ${e.cause.cause}`;case"TableDoesNotExist":return`The table \`${e.cause.table??"(not available)"}\` does not exist in the current database.`;case"ColumnNotFound":return`The column \`${e.cause.column??"(not available)"}\` does not exist in the current database.`;case"InvalidIsolationLevel":return`Error in connector: Conversion error: ${e.cause.level}`;case"InconsistentColumnData":return`Inconsistent column data: ${e.cause.cause}`;case"MissingFullTextSearchIndex":return"Cannot find a fulltext index to use for the native search, try adding a @@fulltext([Fields...]) to your schema";case"TransactionWriteConflict":return"Transaction failed due to a write conflict or a deadlock. Please retry your transaction";case"GenericJs":return`Error in external connector (id ${e.cause.id})`;case"TooManyConnections":return`Too many database connections opened: ${e.cause.cause}`;case"InvalidInputValue":return`Invalid input value: ${e.cause.message}`;case"sqlite":case"postgres":case"mysql":case"mssql":return;default:P(e.cause,`Unknown error: ${e.cause}`)}}function Sn(e){return e&&"fields"in e?`fields: (${e.fields.map(t=>`\`${t}\``).join(", ")})`:e&&"index"in e?`constraint: \`${e.index}\``:e&&"foreignKey"in e?"foreign key":"(not available)"}function gp(e){if(typeof e!="object"||e===null)return!1;let t=e;return"$type"in t&&t.$type==="Param"||"prisma__type"in t&&t.prisma__type==="param"}function yp(e){return"prisma__type"in e?e.prisma__value?.name:e.value.name}function hp(e,t){let r={};for(let[n,i]of Object.entries(e))if(r[n]=i,gp(i)){let o=yp(i);o&&o in t&&(r[n]=t[o])}return r}function cs(e,t,r={}){let n=e.map(o=>t.keys.reduce((s,a)=>(s[a]=W(o[a]),s),{})),i=new Set(t.nestedSelection);return t.arguments.map(o=>{let s=hp(o,r),a=n.findIndex(l=>Je(l,s));if(a===-1)return t.expectNonEmpty?new I("An operation failed because it depends on one or more records that were required but not found","P2025"):null;{let l=Object.entries(e[a]).filter(([u])=>i.has(u));return Object.fromEntries(l)}})}var ms=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var v=class extends I{name="DataMapperError";constructor(t,r){super(t,"P2023",r)}},ps=new WeakMap;function wp(e){let t=ps.get(e);return t||(t=Object.entries(e),ps.set(e,t)),t}function fs(e,t,r){switch(t.type){case"affectedRows":if(typeof e!="number")throw new v(`Expected an affected rows count, got: ${typeof e} (${e})`);return{count:e};case"object":return Cn(e,t.fields,r,t.skipNulls);case"field":return vn(e,"<result>",t.fieldType,r);default:P(t,`Invalid data mapping type: '${t.type}'`)}}function Cn(e,t,r,n){if(e===null)return null;if(Array.isArray(e)){let i=e;return n&&(i=i.filter(o=>o!==null)),i.map(o=>ds(o,t,r))}if(typeof e=="object")return ds(e,t,r);if(typeof e=="string"){let i;try{i=JSON.parse(e)}catch(o){throw new v("Expected an array or object, got a string that is not valid JSON",{cause:o})}return Cn(i,t,r,n)}throw new v(`Expected an array or an object, got: ${typeof e}`)}function ds(e,t,r){if(typeof e!="object")throw new v(`Expected an object, but got '${typeof e}'`);let n={};for(let[i,o]of wp(t))switch(o.type){case"affectedRows":throw new v(`Unexpected 'AffectedRows' node in data mapping for field '${i}'`);case"object":{let{serializedName:s,fields:a,skipNulls:l}=o;if(s!==null&&!Object.hasOwn(e,s))throw new v(`Missing data field (Object): '${i}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`);let u=s!==null?e[s]:e;n[i]=Cn(u,a,r,l);break}case"field":{let s=o.dbName;if(Object.hasOwn(e,s))n[i]=bp(e[s],s,o.fieldType,r);else throw new v(`Missing data field (Value): '${s}'; node: ${JSON.stringify(o)}; data: ${JSON.stringify(e)}`)}break;default:P(o,`DataMapper: Invalid data mapping node type: '${o.type}'`)}return n}function bp(e,t,r,n){return e===null?r.arity==="list"?[]:null:r.arity==="list"?e.map((o,s)=>vn(o,`${t}[${s}]`,r,n)):vn(e,t,r,n)}function vn(e,t,r,n){switch(r.type){case"unsupported":return e;case"string":{if(typeof e!="string")throw new v(`Expected a string in column '${t}', got ${typeof e}: ${e}`);return e}case"int":switch(typeof e){case"number":return Math.trunc(e);case"string":{let i=Math.trunc(Number(e));if(Number.isNaN(i)||!Number.isFinite(i))throw new v(`Expected an integer in column '${t}', got string: ${e}`);if(!Number.isSafeInteger(i))throw new v(`Integer value in column '${t}' is too large to represent as a JavaScript number without loss of precision, got: ${e}. Consider using BigInt type.`);return i}default:throw new v(`Expected an integer in column '${t}', got ${typeof e}: ${e}`)}case"bigint":{if(typeof e!="number"&&typeof e!="string")throw new v(`Expected a bigint in column '${t}', got ${typeof e}: ${e}`);return{$type:"BigInt",value:e}}case"float":{if(typeof e=="number")return e;if(typeof e=="string"){let i=Number(e);if(Number.isNaN(i)&&!/^[-+]?nan$/.test(e.toLowerCase()))throw new v(`Expected a float in column '${t}', got string: ${e}`);return i}throw new v(`Expected a float in column '${t}', got ${typeof e}: ${e}`)}case"boolean":{if(typeof e=="boolean")return e;if(typeof e=="number")return e===1;if(typeof e=="string"){if(e==="true"||e==="TRUE"||e==="1")return!0;if(e==="false"||e==="FALSE"||e==="0")return!1;throw new v(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`)}if(Array.isArray(e)||e instanceof Uint8Array){for(let i of e)if(i!==0)return!0;return!1}throw new v(`Expected a boolean in column '${t}', got ${typeof e}: ${e}`)}case"decimal":if(typeof e!="number"&&typeof e!="string"&&!ms.Decimal.isDecimal(e))throw new v(`Expected a decimal in column '${t}', got ${typeof e}: ${e}`);return{$type:"Decimal",value:e};case"datetime":{if(typeof e=="string")return{$type:"DateTime",value:Ep(e)};if(typeof e=="number"||e instanceof Date)return{$type:"DateTime",value:e};throw new v(`Expected a date in column '${t}', got ${typeof e}: ${e}`)}case"object":return{$type:"Json",value:vt(e)};case"json":return{$type:"Json",value:`${e}`};case"bytes":{switch(r.encoding){case"base64":if(typeof e!="string")throw new v(`Expected a base64-encoded byte array in column '${t}', got ${typeof e}: ${e}`);return{$type:"Bytes",value:e};case"hex":if(typeof e!="string"||!e.startsWith("\\x"))throw new v(`Expected a hex-encoded byte array in column '${t}', got ${typeof e}: ${e}`);return{$type:"Bytes",value:Buffer.from(e.slice(2),"hex").toString("base64")};case"array":if(Array.isArray(e))return{$type:"Bytes",value:Buffer.from(e).toString("base64")};if(e instanceof Uint8Array)return{$type:"Bytes",value:Buffer.from(e).toString("base64")};throw new v(`Expected a byte array in column '${t}', got ${typeof e}: ${e}`);default:P(r.encoding,`DataMapper: Unknown bytes encoding: ${r.encoding}`)}break}case"enum":{let i=n[r.name];if(i===void 0)throw new v(`Unknown enum '${r.name}'`);let o=i[`${e}`];if(o===void 0)throw new v(`Value '${e}' not found in enum '${r.name}'`);return o}default:P(r,`DataMapper: Unknown result type: ${r.type}`)}}var xp=/\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}(:?\d{2})?)?$/;function Ep(e){let t=xp.exec(e);if(t===null)return`${e}T00:00:00Z`;let r=e,[n,i,o]=t;if(i!==void 0&&i!=="Z"&&o===void 0?r=`${e}:00`:i===void 0&&(r=`${e}Z`),n.length===e.length)return`1970-01-01T${r}`;let s=t.index-1;return r[s]===" "&&(r=`${r.slice(0,s)}T${r.slice(s+1)}`),r}function X(e){if(typeof e!="object")return e;var t,r,n=Object.prototype.toString.call(e);if(n==="[object Object]"){if(e.constructor!==Object&&typeof e.constructor=="function"){r=new e.constructor;for(t in e)e.hasOwnProperty(t)&&r[t]!==e[t]&&(r[t]=X(e[t]))}else{r={};for(t in e)t==="__proto__"?Object.defineProperty(r,t,{value:X(e[t]),configurable:!0,enumerable:!0,writable:!0}):r[t]=X(e[t])}return r}if(n==="[object Array]"){for(t=e.length,r=Array(t);t--;)r[t]=X(e[t]);return r}return n==="[object Set]"?(r=new Set,e.forEach(function(i){r.add(X(i))}),r):n==="[object Map]"?(r=new Map,e.forEach(function(i,o){r.set(X(o),X(i))}),r):n==="[object Date]"?new Date(+e):n==="[object RegExp]"?(r=new RegExp(e.source,e.flags),r.lastIndex=e.lastIndex,r):n==="[object DataView]"?new e.constructor(X(e.buffer)):n==="[object ArrayBuffer]"?e.slice(0):n.slice(-6)==="Array]"?new e.constructor(e):e}function Pp(e){let t=Object.entries(e);return t.length===0?"":(t.sort(([n],[i])=>n.localeCompare(i)),`/*${t.map(([n,i])=>{let o=encodeURIComponent(n),s=encodeURIComponent(i).replace(/'/g,"\\'");return`${o}='${s}'`}).join(",")}*/`)}function br(e,t){let r={};for(let n of e){let i=n(X(t));for(let[o,s]of Object.entries(i))s!==void 0&&(r[o]=s)}return r}function gs(e,t){let r=br(e,t);return Pp(r)}function ys(e,t){return t?`${e} ${t}`:e}var Ct;(function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"})(Ct||(Ct={}));function Tp(e){switch(e){case"postgresql":case"postgres":case"prisma+postgres":return"postgresql";case"sqlserver":return"mssql";case"mysql":case"sqlite":case"cockroachdb":case"mongodb":return e;default:P(e,`Unknown provider: ${e}`)}}async function xr({query:e,tracingHelper:t,provider:r,onQuery:n,execute:i}){let o=n===void 0?i:async()=>{let s=new Date,a=performance.now(),l=await i(),u=performance.now();return n({timestamp:s,duration:u-a,query:e.sql,params:e.args}),l};return t.isEnabled()?await t.runInChildSpan({name:"db_query",kind:Ct.CLIENT,attributes:{"db.query.text":e.sql,"db.system.name":Tp(r)}},o):o()}function Pe(e,t){var r="000000000"+e;return r.substr(r.length-t)}var hs=U(__webpack_require__("node:os"),1);function Sp(){try{return hs.default.hostname()}catch{return process.env._CLUSTER_NETWORK_NAME_||process.env.COMPUTERNAME||"hostname"}}var ws=2,Ap=Pe(process.pid.toString(36),ws),bs=Sp(),vp=bs.length,Cp=Pe(bs.split("").reduce(function(e,t){return+e+t.charCodeAt(0)},+vp+36).toString(36),ws);function Rn(){return Ap+Cp}function Er(e){return typeof e=="string"&&/^c[a-z0-9]{20,32}$/.test(e)}function kn(e){let n=Math.pow(36,4),i=0;function o(){return Pe((Math.random()*n<<0).toString(36),4)}function s(){return i=i<n?i:0,i++,i-1}function a(){var l="c",u=new Date().getTime().toString(36),c=Pe(s().toString(36),4),p=e(),d=o()+o();return l+u+c+p+d}return a.fingerprint=e,a.isCuid=Er,a}var Rp=kn(Rn);var xs=Rp;var ba=U(ca());var $n=__webpack_require__("node:crypto");var pa="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var fd=128,Se,We;function gd(e){!Se||Se.length<e?(Se=Buffer.allocUnsafe(e*fd),$n.webcrypto.getRandomValues(Se),We=0):We+e>Se.length&&($n.webcrypto.getRandomValues(Se),We=0),We+=e}function Vn(e=21){gd(e|=0);let t="";for(let r=We-e;r<We;r++)t+=pa[Se[r]&63];return t}var Dt=U(__webpack_require__("node:crypto"),1);var ma="0123456789ABCDEFGHJKMNPQRSTVWXYZ",Mt=32;var yd=16,fa=10,da=0xffffffffffff;var Ae;(function(e){e.Base32IncorrectEncoding="B32_ENC_INVALID",e.DecodeTimeInvalidCharacter="DEC_TIME_CHAR",e.DecodeTimeValueMalformed="DEC_TIME_MALFORMED",e.EncodeTimeNegative="ENC_TIME_NEG",e.EncodeTimeSizeExceeded="ENC_TIME_SIZE_EXCEED",e.EncodeTimeValueMalformed="ENC_TIME_MALFORMED",e.PRNGDetectFailure="PRNG_DETECT",e.ULIDInvalid="ULID_INVALID",e.Unexpected="UNEXPECTED",e.UUIDInvalid="UUID_INVALID"})(Ae||(Ae={}));var ve=class extends Error{constructor(t,r){super(`${r} (${t})`),this.name="ULIDError",this.code=t}};function hd(e){let t=Math.floor(e()*Mt);return t===Mt&&(t=Mt-1),ma.charAt(t)}function wd(e){let t=bd(),r=t&&(t.crypto||t.msCrypto)||(typeof Dt.default<"u"?Dt.default:null);if(typeof r?.getRandomValues=="function")return()=>{let n=new Uint8Array(1);return r.getRandomValues(n),n[0]/255};if(typeof r?.randomBytes=="function")return()=>r.randomBytes(1).readUInt8()/255;if(Dt.default?.randomBytes)return()=>Dt.default.randomBytes(1).readUInt8()/255;throw new ve(Ae.PRNGDetectFailure,"Failed to find a reliable PRNG")}function bd(){return Pd()?self:typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:null}function xd(e,t){let r="";for(;e>0;e--)r=hd(t)+r;return r}function Ed(e,t=fa){if(isNaN(e))throw new ve(Ae.EncodeTimeValueMalformed,`Time must be a number: ${e}`);if(e>da)throw new ve(Ae.EncodeTimeSizeExceeded,`Cannot encode a time larger than ${da}: ${e}`);if(e<0)throw new ve(Ae.EncodeTimeNegative,`Time must be positive: ${e}`);if(Number.isInteger(e)===!1)throw new ve(Ae.EncodeTimeValueMalformed,`Time must be an integer: ${e}`);let r,n="";for(let i=t;i>0;i--)r=e%Mt,n=ma.charAt(r)+n,e=(e-r)/Mt;return n}function Pd(){return typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope}function ga(e,t){let r=t||wd(),n=!e||isNaN(e)?Date.now():e;return Ed(n,fa)+xd(yd,r)}var O=[];for(let e=0;e<256;++e)O.push((e+256).toString(16).slice(1));function Ar(e,t=0){return(O[e[t+0]]+O[e[t+1]]+O[e[t+2]]+O[e[t+3]]+"-"+O[e[t+4]]+O[e[t+5]]+"-"+O[e[t+6]]+O[e[t+7]]+"-"+O[e[t+8]]+O[e[t+9]]+"-"+O[e[t+10]]+O[e[t+11]]+O[e[t+12]]+O[e[t+13]]+O[e[t+14]]+O[e[t+15]]).toLowerCase()}var ya=__webpack_require__("node:crypto"),Cr=new Uint8Array(256),vr=Cr.length;function Ke(){return vr>Cr.length-16&&((0,ya.randomFillSync)(Cr),vr=0),Cr.slice(vr,vr+=16)}var ha=__webpack_require__("node:crypto"),qn={randomUUID:ha.randomUUID};function Td(e,t,r){if(qn.randomUUID&&!t&&!e)return qn.randomUUID();e=e||{};let n=e.random??e.rng?.()??Ke();if(n.length<16)throw new Error("Random bytes length must be >= 16");if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){if(r=r||0,r<0||r+16>t.length)throw new RangeError(`UUID byte range ${r}:${r+15} is out of buffer bounds`);for(let i=0;i<16;++i)t[r+i]=n[i];return t}return Ar(n)}var jn=Td;var Un={};function Sd(e,t,r){let n;if(e)n=wa(e.random??e.rng?.()??Ke(),e.msecs,e.seq,t,r);else{let i=Date.now(),o=Ke();Ad(Un,i,o),n=wa(o,Un.msecs,Un.seq,t,r)}return t??Ar(n)}function Ad(e,t,r){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=r[6]<<23|r[7]<<16|r[8]<<8|r[9],e.msecs=t):(e.seq=e.seq+1|0,e.seq===0&&e.msecs++),e}function wa(e,t,r,n,i=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!n)n=new Uint8Array(16),i=0;else if(i<0||i+16>n.length)throw new RangeError(`UUID byte range ${i}:${i+15} is out of buffer bounds`);return t??=Date.now(),r??=e[6]*127<<24|e[7]<<16|e[8]<<8|e[9],n[i++]=t/1099511627776&255,n[i++]=t/4294967296&255,n[i++]=t/16777216&255,n[i++]=t/65536&255,n[i++]=t/256&255,n[i++]=t&255,n[i++]=112|r>>>28&15,n[i++]=r>>>20&255,n[i++]=128|r>>>14&63,n[i++]=r>>>6&255,n[i++]=r<<2&255|e[10]&3,n[i++]=e[11],n[i++]=e[12],n[i++]=e[13],n[i++]=e[14],n[i++]=e[15],n}var Bn=Sd;var Rr=class{#e={};constructor(){this.register("uuid",new Jn),this.register("cuid",new Hn),this.register("ulid",new Gn),this.register("nanoid",new zn),this.register("product",new Wn)}snapshot(){return Object.create(this.#e,{now:{value:new Qn}})}register(t,r){this.#e[t]=r}},Qn=class{#e=new Date;generate(){return this.#e.toISOString()}},Jn=class{generate(t){if(t===4)return jn();if(t===7)return Bn();throw new Error("Invalid UUID generator arguments")}},Hn=class{generate(t){if(t===1)return xs();if(t===2)return(0,ba.createId)();throw new Error("Invalid CUID generator arguments")}},Gn=class{generate(){return ga()}},zn=class{generate(t){if(typeof t=="number")return Vn(t);if(t===void 0)return Vn();throw new Error("Invalid Nanoid generator arguments")}},Wn=class{generate(t,r){if(t===void 0||r===void 0)throw new Error("Invalid Product generator arguments");return Array.isArray(t)&&Array.isArray(r)?t.flatMap(n=>r.map(i=>[n,i])):Array.isArray(t)?t.map(n=>[n,r]):Array.isArray(r)?r.map(n=>[t,n]):[[t,r]]}};function kr(e,t){return e==null?e:typeof e=="string"?kr(JSON.parse(e),t):Array.isArray(e)?Cd(e,t):vd(e,t)}function vd(e,t){if(t.pagination){let{skip:r,take:n,cursor:i}=t.pagination;if(r!==null&&r>0||n===0||i!==null&&!Je(e,i))return null}return Ea(e,t.nested)}function Ea(e,t){for(let[r,n]of Object.entries(t))e[r]=kr(e[r],n);return e}function Cd(e,t){if(t.distinct!==null){let r=t.linkingFields!==null?[...t.distinct,...t.linkingFields]:t.distinct;e=Rd(e,r)}return t.pagination&&(e=kd(e,t.pagination,t.linkingFields)),t.reverse&&e.reverse(),Object.keys(t.nested).length===0?e:e.map(r=>Ea(r,t.nested))}function Rd(e,t){let r=new Set,n=[];for(let i of e){let o=Ze(i,t);r.has(o)||(r.add(o),n.push(i))}return n}function kd(e,t,r){if(r===null)return xa(e,t);let n=new Map;for(let o of e){let s=Ze(o,r);n.has(s)||n.set(s,[]),n.get(s).push(o)}let i=Array.from(n.entries());return i.sort(([o],[s])=>o<s?-1:o>s?1:0),i.flatMap(([,o])=>xa(o,t))}function xa(e,{cursor:t,skip:r,take:n}){let i=t!==null?e.findIndex(a=>Je(a,t)):0;if(i===-1)return[];let o=i+(r??0),s=n!==null?o+n:e.length;return e.slice(o,s)}function Ze(e,t){return JSON.stringify(t.map(r=>e[r]))}function Kn(e){return typeof e=="object"&&e!==null&&e.prisma__type==="param"}function Zn(e){return typeof e=="object"&&e!==null&&e.prisma__type==="generatorCall"}function ei(e,t,r,n){let i=e.args.map(o=>Q(o,t,r));switch(e.type){case"rawSql":return[Nd(e.sql,i,e.argTypes)];case"templateSql":return(e.chunkable?Md(e.fragments,i,n):[i]).map(s=>{if(n!==void 0&&s.length>n)throw new I("The query parameter limit supported by your database is exceeded.","P2029");return Id(e.fragments,e.placeholderFormat,s,e.argTypes)});default:P(e.type,"Invalid query type")}}function Q(e,t,r){for(;Dd(e);)if(Kn(e)){let n=t[e.prisma__value.name];if(n===void 0)throw new Error(`Missing value for query variable ${e.prisma__value.name}`);e=n}else if(Zn(e)){let{name:n,args:i}=e.prisma__value,o=r[n];if(!o)throw new Error(`Encountered an unknown generator '${n}'`);e=o.generate(...i.map(s=>Q(s,t,r)))}else P(e,`Unexpected unevaluated value type: ${e}`);return Array.isArray(e)&&(e=e.map(n=>Q(n,t,r))),e}function Id(e,t,r,n){let i="",o={placeholderNumber:1},s=[],a=[];for(let l of Xn(e,r,n)){if(i+=Od(l,t,o),l.type==="stringChunk")continue;let u=s.length,c=s.push(...Pa(l))-u;if(l.argType.arity==="tuple"){if(c%l.argType.elements.length!==0)throw new Error(`Malformed query template. Expected the number of parameters to match the tuple arity, but got ${c} parameters for a tuple of arity ${l.argType.elements.length}.`);for(let p=0;p<c/l.argType.elements.length;p++)a.push(...l.argType.elements)}else for(let p=0;p<c;p++)a.push(l.argType)}return{sql:i,args:s,argTypes:a}}function Od(e,t,r){let n=e.type;switch(n){case"parameter":return Yn(t,r.placeholderNumber++);case"stringChunk":return e.chunk;case"parameterTuple":return`(${e.value.length==0?"NULL":e.value.map(()=>Yn(t,r.placeholderNumber++)).join(",")})`;case"parameterTupleList":return e.value.map(i=>{let o=i.map(()=>Yn(t,r.placeholderNumber++)).join(e.itemSeparator);return`${e.itemPrefix}${o}${e.itemSuffix}`}).join(e.groupSeparator);default:P(n,"Invalid fragment type")}}function Yn(e,t){return e.hasNumbering?`${e.prefix}${t}`:e.prefix}function Nd(e,t,r){return{sql:e,args:t,argTypes:r}}function Dd(e){return Kn(e)||Zn(e)}function*Xn(e,t,r){let n=0;for(let i of e)switch(i.type){case"parameter":{if(n>=t.length)throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);yield{...i,value:t[n],argType:r?.[n]},n++;break}case"stringChunk":{yield i;break}case"parameterTuple":{if(n>=t.length)throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);let o=t[n];yield{...i,value:Array.isArray(o)?o:[o],argType:r?.[n]},n++;break}case"parameterTupleList":{if(n>=t.length)throw new Error(`Malformed query template. Fragments attempt to read over ${t.length} parameters.`);let o=t[n];if(!Array.isArray(o))throw new Error("Malformed query template. Tuple list expected.");if(o.length===0)throw new Error("Malformed query template. Tuple list cannot be empty.");for(let s of o)if(!Array.isArray(s))throw new Error("Malformed query template. Tuple expected.");yield{...i,value:o,argType:r?.[n]},n++;break}}}function*Pa(e){switch(e.type){case"parameter":yield e.value;break;case"stringChunk":break;case"parameterTuple":yield*e.value;break;case"parameterTupleList":for(let t of e.value)yield*t;break}}function Md(e,t,r){let n=0,i=0;for(let s of Xn(e,t,void 0)){let a=0;for(let l of Pa(s))a++;i=Math.max(i,a),n+=a}let o=[[]];for(let s of Xn(e,t,void 0))switch(s.type){case"parameter":{for(let a of o)a.push(s.value);break}case"stringChunk":break;case"parameterTuple":{let a=s.value.length,l=[];if(r&&o.length===1&&a===i&&n>r&&n-a<r){let u=r-(n-a);l=Fd(s.value,u)}else l=[s.value];o=o.flatMap(u=>l.map(c=>[...u,c]));break}case"parameterTupleList":{let a=s.value.reduce((p,d)=>p+d.length,0),l=[],u=[],c=0;for(let p of s.value)r&&o.length===1&&a===i&&u.length>0&&n-a+c+p.length>r&&(l.push(u),u=[],c=0),u.push(p),c+=p.length;u.length>0&&l.push(u),o=o.flatMap(p=>l.map(d=>[...p,d]));break}}return o}function Fd(e,t){let r=[];for(let n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r}function Ta(e){return e.rows.map(t=>t.reduce((r,n,i)=>(r[e.columnNames[i]]=n,r),{}))}function Sa(e){return{columns:e.columnNames,types:e.columnTypes.map(t=>_d(t)),rows:e.rows.map(t=>t.map((r,n)=>Ft(r,e.columnTypes[n])))}}function Ft(e,t){if(e===null)return null;switch(t){case m.Int32:switch(typeof e){case"number":return Math.trunc(e);case"string":return Math.trunc(Number(e));default:throw new Error(`Cannot serialize value of type ${typeof e} as Int32`)}case m.Int32Array:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as Int32Array`);return e.map(r=>Ft(r,m.Int32));case m.Int64:switch(typeof e){case"number":return BigInt(Math.trunc(e));case"string":return e;default:throw new Error(`Cannot serialize value of type ${typeof e} as Int64`)}case m.Int64Array:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as Int64Array`);return e.map(r=>Ft(r,m.Int64));case m.Json:switch(typeof e){case"string":return JSON.parse(e);default:throw new Error(`Cannot serialize value of type ${typeof e} as Json`)}case m.JsonArray:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as JsonArray`);return e.map(r=>Ft(r,m.Json));case m.Boolean:switch(typeof e){case"boolean":return e;case"string":return e==="true"||e==="1";case"number":return e===1;default:throw new Error(`Cannot serialize value of type ${typeof e} as Boolean`)}case m.BooleanArray:if(!Array.isArray(e))throw new Error(`Cannot serialize value of type ${typeof e} as BooleanArray`);return e.map(r=>Ft(r,m.Boolean));default:return e}}function _d(e){switch(e){case m.Int32:return"int";case m.Int64:return"bigint";case m.Float:return"float";case m.Double:return"double";case m.Text:return"string";case m.Enum:return"enum";case m.Bytes:return"bytes";case m.Boolean:return"bool";case m.Character:return"char";case m.Numeric:return"decimal";case m.Json:return"json";case m.Uuid:return"uuid";case m.DateTime:return"datetime";case m.Date:return"date";case m.Time:return"time";case m.Int32Array:return"int-array";case m.Int64Array:return"bigint-array";case m.FloatArray:return"float-array";case m.DoubleArray:return"double-array";case m.TextArray:return"string-array";case m.EnumArray:return"string-array";case m.BytesArray:return"bytes-array";case m.BooleanArray:return"bool-array";case m.CharacterArray:return"char-array";case m.NumericArray:return"decimal-array";case m.JsonArray:return"json-array";case m.UuidArray:return"uuid-array";case m.DateTimeArray:return"datetime-array";case m.DateArray:return"date-array";case m.TimeArray:return"time-array";case m.UnknownNumber:return"unknown";case m.Set:return"string";default:P(e,`Unexpected column type: ${e}`)}}function Aa(e,t,r){if(!t.every(n=>ti(e,n))){let n=Ld(e,r),i=$d(r);throw new I(n,i,r.context)}}function ti(e,t){switch(t.type){case"rowCountEq":return Array.isArray(e)?e.length===t.args:e===null?t.args===0:t.args===1;case"rowCountNeq":return Array.isArray(e)?e.length!==t.args:e===null?t.args!==0:t.args!==1;case"affectedRowCountEq":return e===t.args;case"never":return!1;default:P(t,`Unknown rule type: ${t.type}`)}}function Ld(e,t){switch(t.error_identifier){case"RELATION_VIOLATION":return`The change you are trying to make would violate the required relation '${t.context.relation}' between the \`${t.context.modelA}\` and \`${t.context.modelB}\` models.`;case"MISSING_RECORD":return`An operation failed because it depends on one or more records that were required but not found. No record was found for ${t.context.operation}.`;case"MISSING_RELATED_RECORD":{let r=t.context.neededFor?` (needed to ${t.context.neededFor})`:"";return`An operation failed because it depends on one or more records that were required but not found. No '${t.context.model}' record${r} was found for ${t.context.operation} on ${t.context.relationType} relation '${t.context.relation}'.`}case"INCOMPLETE_CONNECT_INPUT":return`An operation failed because it depends on one or more records that were required but not found. Expected ${t.context.expectedRows} records to be connected, found only ${Array.isArray(e)?e.length:e}.`;case"INCOMPLETE_CONNECT_OUTPUT":return`The required connected records were not found. Expected ${t.context.expectedRows} records to be connected after connect operation on ${t.context.relationType} relation '${t.context.relation}', found ${Array.isArray(e)?e.length:e}.`;case"RECORDS_NOT_CONNECTED":return`The records for relation \`${t.context.relation}\` between the \`${t.context.parent}\` and \`${t.context.child}\` models are not connected.`;default:P(t,`Unknown error identifier: ${t}`)}}function $d(e){switch(e.error_identifier){case"RELATION_VIOLATION":return"P2014";case"RECORDS_NOT_CONNECTED":return"P2017";case"INCOMPLETE_CONNECT_OUTPUT":return"P2018";case"MISSING_RECORD":case"MISSING_RELATED_RECORD":case"INCOMPLETE_CONNECT_INPUT":return"P2025";default:P(e,`Unknown error identifier: ${e}`)}}var _t=class e{#e;#t=new Rr;#r;#n;#i;#o;#a;constructor({onQuery:t,tracingHelper:r,serializer:n,rawSerializer:i,provider:o,connectionInfo:s}){this.#e=t,this.#r=r,this.#n=n,this.#i=i??n,this.#o=o,this.#a=s}static forSql(t){return new e({onQuery:t.onQuery,tracingHelper:t.tracingHelper,serializer:Ta,rawSerializer:Sa,provider:t.provider,connectionInfo:t.connectionInfo})}async run(t,r){let{value:n}=await this.interpretNode(t,{...r,generators:this.#t.snapshot()}).catch(i=>He(i));return n}async interpretNode(t,r){switch(t.type){case"value":return{value:Q(t.args,r.scope,r.generators)};case"seq":{let n;for(let i of t.args)n=await this.interpretNode(i,r);return n??{value:void 0}}case"get":return{value:r.scope[t.args.name]};case"let":{let n=Object.create(r.scope);for(let i of t.args.bindings){let{value:o}=await this.interpretNode(i.expr,{...r,scope:n});n[i.name]=o}return this.interpretNode(t.args.expr,{...r,scope:n})}case"getFirstNonEmpty":{for(let n of t.args.names){let i=r.scope[n];if(!va(i))return{value:i}}return{value:[]}}case"concat":{let n=await Promise.all(t.args.map(i=>this.interpretNode(i,r).then(o=>o.value)));return{value:n.length>0?n.reduce((i,o)=>i.concat(ri(o)),[]):[]}}case"sum":{let n=await Promise.all(t.args.map(i=>this.interpretNode(i,r).then(o=>o.value)));return{value:n.length>0?n.reduce((i,o)=>ee(i)+ee(o)):0}}case"execute":{let n=ei(t.args,r.scope,r.generators,this.#s()),i=0;for(let o of n){let s=Ca(o,r.sqlCommenter);i+=await this.#l(s,r.queryable,()=>r.queryable.executeRaw(s).catch(a=>t.args.type==="rawSql"?An(a):He(a)))}return{value:i}}case"query":{let n=ei(t.args,r.scope,r.generators,this.#s()),i;for(let o of n){let s=Ca(o,r.sqlCommenter),a=await this.#l(s,r.queryable,()=>r.queryable.queryRaw(s).catch(l=>t.args.type==="rawSql"?An(l):He(l)));i===void 0?i=a:(i.rows.push(...a.rows),i.lastInsertId=a.lastInsertId)}return{value:t.args.type==="rawSql"?this.#i(i):this.#n(i),lastInsertId:i?.lastInsertId}}case"reverse":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args,r);return{value:Array.isArray(n)?n.reverse():n,lastInsertId:i}}case"unique":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args,r);if(!Array.isArray(n))return{value:n,lastInsertId:i};if(n.length>1)throw new Error(`Expected zero or one element, got ${n.length}`);return{value:n[0]??null,lastInsertId:i}}case"required":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args,r);if(va(n))throw new Error("Required value is empty");return{value:n,lastInsertId:i}}case"mapField":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.records,r);return{value:Ra(n,t.args.field),lastInsertId:i}}case"join":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.parent,r);if(n===null)return{value:null,lastInsertId:i};let o=await Promise.all(t.args.children.map(async s=>({joinExpr:s,childRecords:(await this.interpretNode(s.child,r)).value})));return{value:Vd(n,o),lastInsertId:i}}case"transaction":{if(!r.transactionManager.enabled)return this.interpretNode(t.args,r);let n=r.transactionManager.manager,i=await n.startInternalTransaction(),o=await n.getTransaction(i,"query");try{let s=await this.interpretNode(t.args,{...r,queryable:o});return await n.commitTransaction(i.id),s}catch(s){throw await n.rollbackTransaction(i.id),s}}case"dataMap":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r);return{value:fs(n,t.args.structure,t.args.enums),lastInsertId:i}}case"validate":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r);return Aa(n,t.args.rules,t.args),{value:n,lastInsertId:i}}case"if":{let{value:n}=await this.interpretNode(t.args.value,r);return ti(n,t.args.rule)?await this.interpretNode(t.args.then,r):await this.interpretNode(t.args.else,r)}case"unit":return{value:void 0};case"diff":{let{value:n}=await this.interpretNode(t.args.from,r),{value:i}=await this.interpretNode(t.args.to,r),o=a=>a!==null?Ze(Ir(a),t.args.fields):null,s=new Set(ri(i).map(o));return{value:ri(n).filter(a=>!s.has(o(a)))}}case"process":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r);return ka(t.args.operations,r.scope,r.generators),{value:kr(n,t.args.operations),lastInsertId:i}}case"initializeRecord":{let{lastInsertId:n}=await this.interpretNode(t.args.expr,r),i={};for(let[o,s]of Object.entries(t.args.fields))i[o]=qd(s,n,r.scope,r.generators);return{value:i,lastInsertId:n}}case"mapRecord":{let{value:n,lastInsertId:i}=await this.interpretNode(t.args.expr,r),o=n===null?{}:Ir(n);for(let[s,a]of Object.entries(t.args.fields))o[s]=jd(a,o[s],r.scope,r.generators);return{value:o,lastInsertId:i}}default:P(t,`Unexpected node type: ${t.type}`)}}#s(){return this.#a?.maxBindValues!==void 0?this.#a.maxBindValues:this.#u()}#u(){if(this.#o!==void 0)switch(this.#o){case"cockroachdb":case"postgres":case"postgresql":case"prisma+postgres":return 32766;case"mysql":return 65535;case"sqlite":return 999;case"sqlserver":return 2098;case"mongodb":return;default:P(this.#o,`Unexpected provider: ${this.#o}`)}}#l(t,r,n){return xr({query:t,execute:n,provider:this.#o??r.provider,tracingHelper:this.#r,onQuery:this.#e})}};function va(e){return Array.isArray(e)?e.length===0:e==null}function ri(e){return Array.isArray(e)?e:[e]}function ee(e){if(typeof e=="number")return e;if(typeof e=="string")return Number(e);throw new Error(`Expected number, got ${typeof e}`)}function Ir(e){if(typeof e=="object"&&e!==null)return e;throw new Error(`Expected object, got ${typeof e}`)}function Ra(e,t){return Array.isArray(e)?e.map(r=>Ra(r,t)):typeof e=="object"&&e!==null?e[t]??null:e}function Vd(e,t){for(let{joinExpr:r,childRecords:n}of t){let i=r.on.map(([a])=>a),o=r.on.map(([,a])=>a),s={};for(let a of Array.isArray(e)?e:[e]){let l=Ir(a),u=Ze(l,i);s[u]||(s[u]=[]),s[u].push(l),r.isRelationUnique?l[r.parentField]=null:l[r.parentField]=[]}for(let a of Array.isArray(n)?n:[n]){if(a===null)continue;let l=Ze(Ir(a),o);for(let u of s[l]??[])r.isRelationUnique?u[r.parentField]=a:u[r.parentField].push(a)}}return e}function qd(e,t,r,n){switch(e.type){case"value":return Q(e.value,r,n);case"lastInsertId":return t;default:P(e,`Unexpected field initializer type: ${e.type}`)}}function jd(e,t,r,n){switch(e.type){case"set":return Q(e.value,r,n);case"add":return ee(t)+ee(Q(e.value,r,n));case"subtract":return ee(t)-ee(Q(e.value,r,n));case"multiply":return ee(t)*ee(Q(e.value,r,n));case"divide":{let i=ee(t),o=ee(Q(e.value,r,n));return o===0?null:i/o}default:P(e,`Unexpected field operation type: ${e.type}`)}}function Ca(e,t){if(!t||t.plugins.length===0)return e;let r=gs(t.plugins,{query:t.queryInfo,sql:e.sql});return r?{...e,sql:ys(e.sql,r)}:e}function ka(e,t,r){let n=e.pagination?.cursor;if(n)for(let[i,o]of Object.entries(n))n[i]=Q(o,t,r);for(let i of Object.values(e.nested))ka(i,t,r)}async function Ud(){return globalThis.crypto??await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, "node:crypto", 23))}async function Ia(){return(await Ud()).randomUUID()}async function Oa(e,t){return new Promise(r=>{e.addEventListener(t,r,{once:!0})})}var J=class extends I{name="TransactionManagerError";constructor(t,r){super("Transaction API error: "+t,"P2028",r)}},Lt=class extends J{constructor(){super("Transaction not found. Transaction ID is invalid, refers to an old closed transaction Prisma doesn't have information about anymore, or was obtained before disconnecting.")}},Or=class extends J{constructor(t){super(`Transaction already closed: A ${t} cannot be executed on a committed transaction.`)}},Nr=class extends J{constructor(t){super(`Transaction already closed: A ${t} cannot be executed on a transaction that was rolled back.`)}},Dr=class extends J{constructor(){super("Unable to start a transaction in the given time.")}},Mr=class extends J{constructor(t,{timeout:r,timeTaken:n}){super(`A ${t} cannot be executed on an expired transaction. The timeout for this transaction was ${r} ms, however ${n} ms passed since the start of the transaction. Consider increasing the interactive transaction timeout or doing less work in the transaction.`,{operation:t,timeout:r,timeTaken:n})}},Ye=class extends J{constructor(t){super(`Internal Consistency Error: ${t}`)}},Fr=class extends J{constructor(t){super(`Invalid isolation level: ${t}`,{isolationLevel:t})}};var Bd=100,Xe=M("prisma:client:transactionManager"),Qd=()=>({sql:"COMMIT",args:[],argTypes:[]}),Jd=()=>({sql:"ROLLBACK",args:[],argTypes:[]}),Hd=()=>({sql:'-- Implicit "COMMIT" query via underlying driver',args:[],argTypes:[]}),Gd=()=>({sql:'-- Implicit "ROLLBACK" query via underlying driver',args:[],argTypes:[]}),$t=class{transactions=new Map;closedTransactions=[];driverAdapter;transactionOptions;tracingHelper;#e;#t;constructor({driverAdapter:t,transactionOptions:r,tracingHelper:n,onQuery:i,provider:o}){this.driverAdapter=t,this.transactionOptions=r,this.tracingHelper=n,this.#e=i,this.#t=o}async startInternalTransaction(t){let r=t!==void 0?this.#a(t):{};return await this.tracingHelper.runInChildSpan("start_transaction",()=>this.#r(r))}async startTransaction(t){let r=t!==void 0?this.#a(t):this.transactionOptions;return await this.tracingHelper.runInChildSpan("start_transaction",()=>this.#r(r))}async#r(t){let r={id:await Ia(),status:"waiting",timer:void 0,timeout:t.timeout,startedAt:Date.now(),transaction:void 0},n=new AbortController,i=Na(()=>n.abort(),t.maxWait);i?.unref?.();let o=this.driverAdapter.startTransaction(t.isolationLevel).catch(He);switch(r.transaction=await Promise.race([o.finally(()=>clearTimeout(i)),Oa(n.signal,"abort").then(()=>{})]),this.transactions.set(r.id,r),r.status){case"waiting":if(n.signal.aborted)throw o.then(s=>s.rollback()).catch(s=>Xe("error in discarded transaction:",s)),await this.#o(r,"timed_out"),new Dr;return r.status="running",r.timer=this.#i(r.id,t.timeout),{id:r.id};case"timed_out":case"running":case"committed":case"rolled_back":throw new Ye(`Transaction in invalid state ${r.status} although it just finished startup.`);default:P(r.status,"Unknown transaction status.")}}async commitTransaction(t){return await this.tracingHelper.runInChildSpan("commit_transaction",async()=>{let r=this.#n(t,"commit");await this.#o(r,"committed")})}async rollbackTransaction(t){return await this.tracingHelper.runInChildSpan("rollback_transaction",async()=>{let r=this.#n(t,"rollback");await this.#o(r,"rolled_back")})}async getTransaction(t,r){let n=this.#n(t.id,r);if(n.status==="closing"&&(await n.closing,n=this.#n(t.id,r)),!n.transaction)throw new Lt;return n.transaction}#n(t,r){let n=this.transactions.get(t);if(!n){let i=this.closedTransactions.find(o=>o.id===t);if(i)switch(Xe("Transaction already closed.",{transactionId:t,status:i.status}),i.status){case"closing":case"waiting":case"running":throw new Ye("Active transaction found in closed transactions list.");case"committed":throw new Or(r);case"rolled_back":throw new Nr(r);case"timed_out":throw new Mr(r,{timeout:i.timeout,timeTaken:Date.now()-i.startedAt})}else throw Xe("Transaction not found.",t),new Lt}if(["committed","rolled_back","timed_out"].includes(n.status))throw new Ye("Closed transaction found in active transactions map.");return n}async cancelAllTransactions(){await Promise.allSettled([...this.transactions.values()].map(t=>this.#o(t,"rolled_back")))}#i(t,r){let n=Date.now(),i=Na(async()=>{Xe("Transaction timed out.",{transactionId:t,timeoutStartedAt:n,timeout:r});let o=this.transactions.get(t);o&&["running","waiting"].includes(o.status)?await this.#o(o,"timed_out"):Xe("Transaction already committed or rolled back when timeout happened.",t)},r);return i?.unref?.(),i}async#o(t,r){let n=async()=>{Xe("Closing transaction.",{transactionId:t.id,status:r});try{if(t.transaction&&r==="committed")if(t.transaction.options.usePhantomQuery)await this.#s(Hd(),t.transaction,()=>t.transaction.commit());else{let i=Qd();await this.#s(i,t.transaction,()=>t.transaction.executeRaw(i)).then(()=>t.transaction.commit(),o=>{let s=()=>Promise.reject(o);return t.transaction.rollback().then(s,s)})}else if(t.transaction)if(t.transaction.options.usePhantomQuery)await this.#s(Gd(),t.transaction,()=>t.transaction.rollback());else{let i=Jd();try{await this.#s(i,t.transaction,()=>t.transaction.executeRaw(i))}finally{await t.transaction.rollback()}}}finally{t.status=r,clearTimeout(t.timer),t.timer=void 0,this.transactions.delete(t.id),this.closedTransactions.push(t),this.closedTransactions.length>Bd&&this.closedTransactions.shift()}};t.status==="closing"?(await t.closing,this.#n(t.id,r==="committed"?"commit":"rollback")):await Object.assign(t,{status:"closing",reason:r,closing:n()}).closing}#a(t){if(!t.timeout)throw new J("timeout is required");if(!t.maxWait)throw new J("maxWait is required");if(t.isolationLevel==="SNAPSHOT")throw new Fr(t.isolationLevel);return{...t,timeout:t.timeout,maxWait:t.maxWait}}#s(t,r,n){return xr({query:t,execute:n,provider:this.#t??r.provider,tracingHelper:this.tracingHelper,onQuery:this.#e})}};function Na(e,t){return t!==void 0?setTimeout(e,t):void 0}var D=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");function Da(e){return new ni(e).deserialize()}function zd(e){return Buffer.from(e,"base64url")}var ni=class{#e;#t;#r=0;constructor(t){this.#e=t;let r=zd(t.graph);this.#t=new DataView(r.buffer,r.byteOffset,r.byteLength)}deserialize(){let{inputNodeCount:t,outputNodeCount:r,rootCount:n}=this.#s(),i=this.#u(t),o=this.#l(r),s=this.#p(n);return{strings:this.#e.strings,inputNodes:i,outputNodes:o,roots:s}}#n(){let t=0,r=0,n;do n=this.#t.getUint8(this.#r++),t|=(n&127)<<r,r+=7;while(n>=128);return t}#i(){let t=this.#n();return t===0?void 0:t-1}#o(){let t=this.#t.getUint8(this.#r);return this.#r+=1,t}#a(){let t=this.#t.getUint16(this.#r,!0);return this.#r+=2,t}#s(){let t=this.#n(),r=this.#n(),n=this.#n();return{inputNodeCount:t,outputNodeCount:r,rootCount:n}}#u(t){let r=[];for(let n=0;n<t;n++){let i=this.#n(),o={};for(let s=0;s<i;s++){let a=this.#n(),l=this.#a(),u=this.#i(),c=this.#i(),d={flags:this.#o()};l!==0&&(d.scalarMask=l),u!==void 0&&(d.childNodeId=u),c!==void 0&&(d.enumNameIndex=c),o[a]=d}r.push({edges:o})}return r}#l(t){let r=[];for(let n=0;n<t;n++){let i=this.#n(),o={};for(let s=0;s<i;s++){let a=this.#n(),l=this.#i(),u=this.#i(),c={};l!==void 0&&(c.argsNodeId=l),u!==void 0&&(c.outputNodeId=u),o[a]=c}r.push({edges:o})}return r}#p(t){let r={};for(let n=0;n<t;n++){let i=this.#n(),o=this.#i(),s=this.#i(),a=this.#e.strings[i],l={};o!==void 0&&(l.argsNodeId=o),s!==void 0&&(l.outputNodeId=s),r[a]=l}return r}};var Vt=class e{#e;#t;#r;constructor(t,r){this.#e=t,this.#r=r,this.#t=new Map;for(let n=0;n<t.strings.length;n++)this.#t.set(t.strings[n],n)}static deserialize(t,r){let n=Da(t);return new e(n,r)}static fromData(t,r){return new e(t,r)}root(t){let r=this.#e.roots[t];if(r)return{argsNodeId:r.argsNodeId,outputNodeId:r.outputNodeId}}inputNode(t){if(!(t===void 0||t<0||t>=this.#e.inputNodes.length))return{id:t}}outputNode(t){if(!(t===void 0||t<0||t>=this.#e.outputNodes.length))return{id:t}}inputEdge(t,r){if(!t)return;let n=this.#e.inputNodes[t.id];if(!n)return;let i=this.#t.get(r);if(i===void 0)return;let o=n.edges[i];if(o)return{flags:o.flags,childNodeId:o.childNodeId,scalarMask:o.scalarMask??0,enumNameIndex:o.enumNameIndex}}outputEdge(t,r){if(!t)return;let n=this.#e.outputNodes[t.id];if(!n)return;let i=this.#t.get(r);if(i===void 0)return;let o=n.edges[i];if(o)return{argsNodeId:o.argsNodeId,outputNodeId:o.outputNodeId}}enumValues(t){if(t?.enumNameIndex===void 0)return;let r=this.#e.strings[t.enumNameIndex];if(r)return this.#r(r)}getString(t){return this.#e.strings[t]}},te={ParamScalar:1,ParamEnum:2,ParamListScalar:4,ParamListEnum:8,ListObject:16,Object:32},N={String:1,Int:2,BigInt:4,Float:8,Decimal:16,Boolean:32,DateTime:64,Json:128,Bytes:256};function re(e,t){return(e.flags&t)!==0}function he(e){return e.scalarMask}var _r="7.4.1";var Ma={bigint:"bigint",date:"datetime",decimal:"decimal",bytes:"bytes"};function _a(e){let t;try{t=JSON.parse(e)}catch(i){throw new Error(`Received invalid serialized parameters: ${i.message}`)}if(!Array.isArray(t))throw new Error("Received invalid serialized parameters: expected an array");let r=t.map(i=>La(i)),n=t.map(i=>Kd(i));return{args:r,argTypes:n}}function La(e){if(Array.isArray(e))return e.map(t=>La(t));if(typeof e=="object"&&e!==null&&"prisma__value"in e){if(!("prisma__type"in e))throw new Error("Invalid serialized parameter, prisma__type should be present when prisma__value is present");return`${e.prisma__value}`}return typeof e=="object"&&e!==null?JSON.stringify(e):e}function Kd(e){return Array.isArray(e)?{scalarType:e.length>0?Fa(e[0]):"unknown",arity:"list"}:{scalarType:Fa(e),arity:"scalar"}}function Fa(e){return typeof e=="object"&&e!==null&&"prisma__type"in e&&typeof e.prisma__type=="string"&&e.prisma__type in Ma?Ma[e.prisma__type]:typeof e=="number"?"decimal":typeof e=="string"?"string":"unknown"}function $a(e,t){return{batch:e,transaction:t?.kind==="batch"?{isolationLevel:t.options.isolationLevel}:void 0}}function Va(e){return e?e.replace(/".*"/g,'"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g,t=>`${t[0]}5`):""}function qa(e){return e.split(`
`).map(t=>t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,"").replace(/\+\d+\s*ms$/,"")).join(`
`)}var ja=U(Bi());function Ua({title:e,user:t="prisma",repo:r="prisma",template:n="bug_report.yml",body:i}){return(0,ja.default)({user:t,repo:r,template:n,title:e,body:i})}function Ba({version:e,binaryTarget:t,title:r,description:n,engineVersion:i,database:o,query:s}){let a=Oi(6e3-(s?.length??0)),l=qa(Oe(a)),u=n?`# Description
\`\`\`
${n}
\`\`\``:"",c=Oe(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s?Va(s):""}
\`\`\`
`),p=Ua({title:r,body:c});return`${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${it(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`}var Lr=class e{#e;#t;#r;#n;#i;constructor(t,r,n){this.#e=t,this.#t=r,this.#r=n,this.#n=r.getConnectionInfo?.(),this.#i=_t.forSql({onQuery:this.#e.onQuery,tracingHelper:this.#e.tracingHelper,provider:this.#e.provider,connectionInfo:this.#n})}static async connect(t){let r,n;try{r=await t.driverAdapterFactory.connect(),n=new $t({driverAdapter:r,transactionOptions:t.transactionOptions,tracingHelper:t.tracingHelper,onQuery:t.onQuery,provider:t.provider})}catch(i){throw await r?.dispose(),i}return new e(t,r,n)}getConnectionInfo(){let t=this.#n??{supportsRelationJoins:!1};return Promise.resolve({provider:this.#t.provider,connectionInfo:t})}async execute({plan:t,placeholderValues:r,transaction:n,batchIndex:i,queryInfo:o}){let s=n?await this.#r.getTransaction(n,i!==void 0?"batch query":"query"):this.#t;return await this.#i.run(t,{queryable:s,transactionManager:n?{enabled:!1}:{enabled:!0,manager:this.#r},scope:r,sqlCommenter:this.#e.sqlCommenters&&{plugins:this.#e.sqlCommenters,queryInfo:o}})}async startTransaction(t){return{...await this.#r.startTransaction(t),payload:void 0}}async commitTransaction(t){await this.#r.commitTransaction(t.id)}async rollbackTransaction(t){await this.#r.rollbackTransaction(t.id)}async disconnect(){try{await this.#r.cancelAllTransactions()}finally{await this.#t.dispose()}}apiKey(){return null}};var Zd=new Set(["DateTime","Decimal","BigInt","Bytes","Json","Raw"]);function $r(e){if(e==null)return{kind:"null"};if(typeof e=="string")return{kind:"primitive",value:e};if(typeof e=="number")return{kind:"primitive",value:e};if(typeof e=="boolean")return{kind:"primitive",value:e};if(Array.isArray(e))return{kind:"array",items:e};if(typeof e=="object"){let t=e;if("$type"in t&&typeof t.$type=="string"){let r=t.$type;return Zd.has(r)?{kind:"taggedScalar",tag:r,value:t.value}:{kind:"structural",value:t.value}}return{kind:"object",entries:t}}return{kind:"structural",value:e}}function Qa(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)&&!("$type"in e)}function Ja(e){return typeof e=="object"&&e!==null&&"$type"in e&&typeof e.$type=="string"}function Ga(e,t){let r=new Vr(t),n=e.modelName?`${e.modelName}.${e.action}`:e.action,i=t.root(n);return{parameterizedQuery:{...e,query:r.parameterizeFieldSelection(e.query,i?.argsNodeId,i?.outputNodeId)},placeholderValues:r.getPlaceholderValues()}}function za(e,t){let r=new Vr(t),n=[];for(let i=0;i<e.batch.length;i++){let o=e.batch[i],s=o.modelName?`${o.modelName}.${o.action}`:o.action,a=t.root(s);n.push({...o,query:r.parameterizeFieldSelection(o.query,a?.argsNodeId,a?.outputNodeId)})}return{parameterizedBatch:{...e,batch:n},placeholderValues:r.getPlaceholderValues()}}var Vr=class{#e;#t=new Map;#r=new Map;#n=1;constructor(t){this.#e=t}getPlaceholderValues(){return Object.fromEntries(this.#t)}#i(t,r){let n=Xd(t,r),i=this.#r.get(n);if(i!==void 0)return Ha(i,r);let o=`%${this.#n++}`;return this.#r.set(n,o),this.#t.set(o,t),Ha(o,r)}parameterizeFieldSelection(t,r,n){let i=this.#e.inputNode(r),o=this.#e.outputNode(n),s={...t};return t.arguments&&t.arguments.$type!=="Raw"&&(s.arguments=this.#o(t.arguments,i)),t.selection&&(s.selection=this.#c(t.selection,o)),s}#o(t,r){if(!r)return t;let n={};for(let[i,o]of Object.entries(t)){let s=this.#e.inputEdge(r,i);s?n[i]=this.#a(o,s):n[i]=o}return n}#a(t,r){let n=$r(t);switch(n.kind){case"null":return t;case"structural":return t;case"primitive":return this.#s(n.value,r);case"taggedScalar":return this.#u(t,n.tag,r);case"array":return this.#l(n.items,t,r);case"object":return this.#p(n.entries,r);default:throw new Error(`Unknown value kind ${n.kind}`)}}#s(t,r){if(re(r,te.ParamEnum)&&r.enumNameIndex!==void 0&&typeof t=="string"&&this.#e.enumValues(r)?.includes(t)){let s={type:"Enum"};return this.#i(t,s)}if(!re(r,te.ParamScalar))return t;let n=he(r);if(n===0)return t;let i=ii(t);return Ka(i,n)?(n&N.Json&&(t=JSON.stringify(t)),this.#i(t,i)):t}#u(t,r,n){if(!re(n,te.ParamScalar))return t;let i=he(n);if(i===0||!Ya(r,i))return t;let o=Za(t.$type),s=Xa(t);return this.#i(s,o)}#l(t,r,n){if(re(n,te.ParamScalar)&&he(n)&N.Json){let i=JSON.stringify(W(t)),o={type:"Json"};return this.#i(i,o)}if(re(n,te.ParamEnum)){let i=this.#e.enumValues(n);if(i&&t.every(o=>typeof o=="string"&&i.includes(o))){let o={type:"List",inner:{type:"Enum"}};return this.#i(t,o)}}if(re(n,te.ParamListScalar)&&t.every(o=>im(o,n))&&t.length>0){let o=t.map(l=>om(l)),a={type:"List",inner:rm(t)};return this.#i(o,a)}if(re(n,te.ListObject)){let i=this.#e.inputNode(n.childNodeId);if(i)return t.map(o=>Qa(o)?this.#o(o,i):o)}return r}#p(t,r){if(re(r,te.Object)){let i=this.#e.inputNode(r.childNodeId);if(i)return this.#o(t,i)}if(he(r)&N.Json){let i=JSON.stringify(W(t)),o={type:"Json"};return this.#i(i,o)}return t}#c(t,r){if(!t||!r)return t;let n={};for(let[i,o]of Object.entries(t)){if(i==="$scalars"||i==="$composites"||typeof o=="boolean"){n[i]=o;continue}let s=this.#e.outputEdge(r,i);if(s){let a=o,l=this.#e.inputNode(s.argsNodeId),u=this.#e.outputNode(s.outputNodeId),c={selection:a.selection?this.#c(a.selection,u):{}};a.arguments&&(c.arguments=this.#o(a.arguments,l)),n[i]=c}else n[i]=o}return n}};function Ha(e,t){return{$type:"Param",value:{name:e,...t}}}function Wa(e){return e.type==="List"?`List<${Wa(e.inner)}>`:e.type}function Yd(e){return ArrayBuffer.isView(e)?Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("base64"):JSON.stringify(e)}function Xd(e,t){let r=Wa(t),n=Yd(e);return`${r}:${n}`}var em=2**31-1,tm=-(2**31);function ii(e){switch(typeof e){case"boolean":return{type:"Boolean"};case"number":return Number.isInteger(e)?tm<=e&&e<=em?{type:"Int"}:{type:"BigInt"}:{type:"Float"};case"string":return{type:"String"};default:throw new Error("unreachable")}}function Ka({type:e},t){switch(e){case"Boolean":return(t&N.Boolean)!==0;case"Int":return(t&(N.Int|N.BigInt|N.Float))!==0;case"BigInt":return(t&N.BigInt)!==0;case"Float":return(t&N.Float)!==0;case"String":return(t&N.String)!==0;default:return!1}}function Za(e){switch(e){case"BigInt":case"Bytes":case"DateTime":case"Json":return{type:e};case"Decimal":return{type:"Float"};default:return}}function rm(e){let t={type:"Any"};for(let r of e){let n=$r(r),i;switch(n.kind){case"primitive":i=ii(n.value);break;case"taggedScalar":i=Za(n.tag)??{type:"Any"};break;default:return{type:"Any"}}t=nm(t,i)}return t}function nm(e,t){if(e.type==="Any")return t;if(t.type==="Any"||e.type===t.type)return e;let r={Int:0,BigInt:1,Float:2},n=r[e.type],i=r[t.type];return n!==void 0&&i!==void 0?n>=i?e:t:{type:"Any"}}function Ya(e,t){switch(e){case"DateTime":return(t&N.DateTime)!==0;case"Decimal":return(t&N.Decimal)!==0;case"BigInt":return(t&N.BigInt)!==0;case"Bytes":return(t&N.Bytes)!==0;case"Json":return(t&N.Json)!==0;default:return!1}}function im(e,t){let r=$r(e);switch(r.kind){case"structural":return!1;case"null":return!1;case"primitive":{let n=ii(r.value),i=he(t);return i!==0&&Ka(n,i)}case"taggedScalar":{let n=he(t);return n!==0&&Ya(r.tag,n)}default:return!1}}function om(e){return Ja(e)?Xa(e):e}function Xa(e){return e.value}var qr=class{#e;#t;#r;constructor(t=1e3){this.#e=new Map,this.#t=new Map,this.#r=t}getSingle(t){let r=this.#e.get(t);return r&&(this.#e.delete(t),this.#e.set(t,r)),r}setSingle(t,r){if(this.#e.has(t)){this.#e.delete(t),this.#e.set(t,r);return}if(this.#e.size>=this.#r){let n=this.#e.keys().next().value;n!==void 0&&this.#e.delete(n)}this.#e.set(t,r)}getBatch(t){let r=this.#t.get(t);return r&&(this.#t.delete(t),this.#t.set(t,r)),r}setBatch(t,r){if(this.#t.has(t)){this.#t.delete(t),this.#t.set(t,r);return}if(this.#t.size>=this.#r){let n=this.#t.keys().next().value;n!==void 0&&this.#t.delete(n)}this.#t.set(t,r)}clear(){this.#e.clear(),this.#t.clear()}get size(){return this.#e.size+this.#t.size}get singleCacheSize(){return this.#e.size}get batchCacheSize(){return this.#t.size}};var ol=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var jr=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function el(e,t,r){let n=r||{},i=n.encode||encodeURIComponent;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!jr.test(e))throw new TypeError("argument name is invalid");let o=i(t);if(o&&!jr.test(o))throw new TypeError("argument val is invalid");let s=e+"="+o;if(n.maxAge!==void 0&&n.maxAge!==null){let a=n.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(n.domain){if(!jr.test(n.domain))throw new TypeError("option domain is invalid");s+="; Domain="+n.domain}if(n.path){if(!jr.test(n.path))throw new TypeError("option path is invalid");s+="; Path="+n.path}if(n.expires){if(!sm(n.expires)||Number.isNaN(n.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():n.priority){case"low":{s+="; Priority=Low";break}case"medium":{s+="; Priority=Medium";break}case"high":{s+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:{s+="; SameSite=Strict";break}case"lax":{s+="; SameSite=Lax";break}case"strict":{s+="; SameSite=Strict";break}case"none":{s+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(s+="; Partitioned"),s}function sm(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function tl(e,t){let r=(e||"").split(";").filter(l=>typeof l=="string"&&!!l.trim()),n=r.shift()||"",i=am(n),o=i.name,s=i.value;try{s=t?.decode===!1?s:(t?.decode||decodeURIComponent)(s)}catch{}let a={name:o,value:s};for(let l of r){let u=l.split("="),c=(u.shift()||"").trimStart().toLowerCase(),p=u.join("=");switch(c){case"expires":{a.expires=new Date(p);break}case"max-age":{a.maxAge=Number.parseInt(p,10);break}case"secure":{a.secure=!0;break}case"httponly":{a.httpOnly=!0;break}case"samesite":{a.sameSite=p;break}default:a[c]=p}}return a}function am(e){let t="",r="",n=e.split("=");return n.length>1?(t=n.shift(),r=n.join("=")):r=e,{name:t,value:r}}var Ur=class extends Error{clientVersion;cause;constructor(t,r){super(t),this.clientVersion=r.clientVersion,this.cause=r.cause}get[Symbol.toStringTag](){return this.name}};var Br=class extends Ur{isRetryable;constructor(t,r){super(t,r),this.isRetryable=r.isRetryable??!0}};function rl(e,t){return{...e,isRetryable:t}}var Ce=class extends Br{name="InvalidDatasourceError";code="P6001";constructor(t,r){super(t,rl(r,!1))}};mt(Ce,"InvalidDatasourceError");function nl(e){let t={clientVersion:e.clientVersion},r;try{r=new URL(e.accelerateUrl)}catch(l){let u=l.message;throw new Ce(`Error validating \`accelerateUrl\`, the URL cannot be parsed, reason: ${u}`,t)}let{protocol:n,searchParams:i}=r;if(n!=="prisma:"&&n!==Gt)throw new Ce("Error validating `accelerateUrl`: the URL must start with the protocol `prisma://` or `prisma+postgres://`",t);let o=i.get("api_key");if(o===null||o.length<1)throw new Ce("Error validating `accelerateUrl`: the URL must contain a valid API key",t);let s=rn(r)?"http:":"https:";process.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR&&r.searchParams.has("use_http")&&(s="http:");let a=new URL(r.href.replace(n,s));return{apiKey:o,url:a}}var il=U(Mi()),Qr=class{apiKey;tracingHelper;logLevel;logQueries;engineHash;constructor({apiKey:t,tracingHelper:r,logLevel:n,logQueries:i,engineHash:o}){this.apiKey=t,this.tracingHelper=r,this.logLevel=n,this.logQueries=i,this.engineHash=o}build({traceparent:t,transactionId:r}={}){let n={Accept:"application/json",Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json","Prisma-Engine-Hash":this.engineHash,"Prisma-Engine-Version":il.enginesVersion};this.tracingHelper.isEnabled()&&(n.traceparent=t??this.tracingHelper.getTraceParent()),r&&(n["X-Transaction-Id"]=r);let i=this.#e();return i.length>0&&(n["X-Capture-Telemetry"]=i.join(", ")),n}#e(){let t=[];return this.tracingHelper.isEnabled()&&t.push("tracing"),this.logLevel&&t.push(this.logLevel),this.logQueries&&t.push("query"),t}};function lm(e){return e[0]*1e3+e[1]/1e6}function oi(e){return new Date(lm(e))}var sl=M("prisma:client:clientEngine:remoteExecutor"),Jr=class{#e;#t;#r;#n;#i;#o;constructor(t){this.#e=t.clientVersion,this.#n=t.logEmitter,this.#i=t.tracingHelper,this.#o=t.sqlCommenters;let{url:r,apiKey:n}=nl({clientVersion:t.clientVersion,accelerateUrl:t.accelerateUrl});this.#r=new si(r),this.#t=new Qr({apiKey:n,engineHash:t.clientVersion,logLevel:t.logLevel,logQueries:t.logQueries,tracingHelper:t.tracingHelper})}async getConnectionInfo(){return await this.#a({path:"/connection-info",method:"GET"})}async execute({plan:t,placeholderValues:r,batchIndex:n,model:i,operation:o,transaction:s,customFetch:a,queryInfo:l}){let u=l&&this.#o?.length?br(this.#o,{query:l}):void 0;return(await this.#a({path:s?`/transaction/${s.id}/query`:"/query",method:"POST",body:{model:i,operation:o,plan:t,params:r,comments:u&&Object.keys(u).length>0?u:void 0},batchRequestIdx:n,fetch:a})).data}async startTransaction(t){return{...await this.#a({path:"/transaction/start",method:"POST",body:t}),payload:void 0}}async commitTransaction(t){await this.#a({path:`/transaction/${t.id}/commit`,method:"POST"})}async rollbackTransaction(t){await this.#a({path:`/transaction/${t.id}/rollback`,method:"POST"})}disconnect(){return Promise.resolve()}apiKey(){return this.#t.apiKey}async#a({path:t,method:r,body:n,fetch:i=globalThis.fetch,batchRequestIdx:o}){let s=await this.#r.request({method:r,path:t,headers:this.#t.build(),body:n,fetch:i});s.ok||await this.#s(s,o);let a=await s.json();return typeof a.extensions=="object"&&a.extensions!==null&&this.#u(a.extensions),a}async#s(t,r){let n=t.headers.get("Prisma-Error-Code"),i=await t.text(),o,s=i;try{o=JSON.parse(i)}catch{o={}}typeof o.code=="string"&&(n=o.code),typeof o.error=="string"?s=o.error:typeof o.message=="string"?s=o.message:typeof o.InvalidRequestError=="object"&&o.InvalidRequestError!==null&&typeof o.InvalidRequestError.reason=="string"&&(s=o.InvalidRequestError.reason),s=s||`HTTP ${t.status}: ${t.statusText}`;let a=typeof o.meta=="object"&&o.meta!==null?o.meta:o;throw new ol.PrismaClientKnownRequestError(s,{clientVersion:this.#e,code:n??"P6000",batchRequestIdx:r,meta:a})}#u(t){if(t.logs)for(let r of t.logs)this.#l(r);t.spans&&this.#i.dispatchEngineSpans(t.spans)}#l(t){switch(t.level){case"debug":case"trace":sl(t);break;case"error":case"warn":case"info":{this.#n.emit(t.level,{timestamp:oi(t.timestamp),message:t.attributes.message??"",target:t.target??"RemoteExecutor"});break}case"query":{this.#n.emit("query",{query:t.attributes.query??"",timestamp:oi(t.timestamp),duration:t.attributes.duration_ms??0,params:t.attributes.params??"",target:t.target??"RemoteExecutor"});break}default:throw new Error(`Unexpected log level: ${t.level}`)}}},si=class{#e;#t;#r;constructor(t){this.#e=t,this.#t=new Map}async request({method:t,path:r,headers:n,body:i,fetch:o}){let s=new URL(r,this.#e),a=this.#n(s);a&&(n.Cookie=a),this.#r&&(n["Accelerate-Query-Engine-Jwt"]=this.#r);let l=await o(s.href,{method:t,body:i!==void 0?JSON.stringify(i):void 0,headers:n});return sl(t,s,l.status,l.statusText),this.#r=l.headers.get("Accelerate-Query-Engine-Jwt")??void 0,this.#i(s,l),l}#n(t){let r=[],n=new Date;for(let[i,o]of this.#t){if(o.expires&&o.expires<n){this.#t.delete(i);continue}let s=o.domain??t.hostname,a=o.path??"/";t.hostname.endsWith(s)&&t.pathname.startsWith(a)&&r.push(el(o.name,o.value))}return r.length>0?r.join("; "):void 0}#i(t,r){let n=r.headers.getSetCookie?.()||[];if(n.length===0){let i=r.headers.get("Set-Cookie");i&&n.push(i)}for(let i of n){let o=tl(i),s=o.domain??t.hostname,a=o.path??"/",l=`${s}:${a}:${o.name}`;this.#t.set(l,{name:o.name,value:o.value,domain:s,path:a,expires:o.expires})}}};var li=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js"),ai={},al={async loadQueryCompiler(e){let{clientVersion:t,compilerWasm:r}=e;if(r===void 0)throw new li.PrismaClientInitializationError("WASM query compiler was unexpectedly `undefined`",t);let n;return e.activeProvider===void 0||ai[e.activeProvider]===void 0?(n=(async()=>{let i=await r.getRuntime(),o=await r.getQueryCompilerWasmModule();if(o==null)throw new li.PrismaClientInitializationError("The loaded wasm module was unexpectedly `undefined` or `null` once loaded",t);let s={[r.importName]:i},a=new WebAssembly.Instance(o,s),l=a.exports.__wbindgen_start;return i.__wbg_set_wasm(a.exports),l(),i.QueryCompiler})(),e.activeProvider!==void 0&&(ai[e.activeProvider]=n)):n=ai[e.activeProvider],await n}};var um="P2038",le=M("prisma:client:clientEngine"),pl=globalThis;pl.PRISMA_WASM_PANIC_REGISTRY={set_message(e){throw new D.PrismaClientRustPanicError(e,_r)}};var qt=class{name="ClientEngine";#e;#t={type:"disconnected"};#r;#n;#i;#o;config;datamodel;logEmitter;logQueries;logLevel;tracingHelper;#a;constructor(t,r){if(t.accelerateUrl!==void 0)this.#n={remote:!0,accelerateUrl:t.accelerateUrl};else if(t.adapter)this.#n={remote:!1,driverAdapterFactory:t.adapter},le("Using driver adapter: %O",t.adapter);else throw new D.PrismaClientInitializationError("Missing configured driver adapter. Engine type `client` requires an active driver adapter. Please check your PrismaClient initialization code.",t.clientVersion,um);this.#r=r??al,this.config=t,this.logQueries=t.logQueries??!1,this.logLevel=t.logLevel??"error",this.logEmitter=t.logEmitter,this.datamodel=t.inlineSchema,this.tracingHelper=t.tracingHelper,this.#i=new qr,this.#o=Vt.deserialize(t.parameterizationSchema,n=>{if(Object.hasOwn(t.runtimeDataModel.enums,n))return t.runtimeDataModel.enums[n].values.map(i=>i.name)}),t.enableDebugLogs&&(this.logLevel="debug"),this.logQueries&&(this.#a=n=>{this.logEmitter.emit("query",{...n,params:vt(n.params),target:"ClientEngine"})})}async#s(){switch(this.#t.type){case"disconnected":{let t=this.tracingHelper.runInChildSpan("connect",async()=>{let r,n;try{r=await this.#u(),n=await this.#l(r)}catch(o){throw this.#t={type:"disconnected"},n?.free(),await r?.disconnect(),o}let i={executor:r,queryCompiler:n};return this.#t={type:"connected",engine:i},i});return this.#t={type:"connecting",promise:t},await t}case"connecting":return await this.#t.promise;case"connected":return this.#t.engine;case"disconnecting":return await this.#t.promise,await this.#s()}}async#u(){return this.#n.remote?new Jr({clientVersion:this.config.clientVersion,accelerateUrl:this.#n.accelerateUrl,logEmitter:this.logEmitter,logLevel:this.logLevel,logQueries:this.logQueries,tracingHelper:this.tracingHelper,sqlCommenters:this.config.sqlCommenters}):await Lr.connect({driverAdapterFactory:this.#n.driverAdapterFactory,tracingHelper:this.tracingHelper,transactionOptions:{...this.config.transactionOptions,isolationLevel:this.#g(this.config.transactionOptions.isolationLevel)},onQuery:this.#a,provider:this.config.activeProvider,sqlCommenters:this.config.sqlCommenters})}async#l(t){let r=this.#e;r===void 0&&(r=await this.#r.loadQueryCompiler(this.config),this.#e=r);let{provider:n,connectionInfo:i}=await t.getConnectionInfo();try{return this.#m(()=>new r({datamodel:this.datamodel,provider:n,connectionInfo:i}),void 0,!1)}catch(o){throw this.#p(o)}}#p(t){if(t instanceof D.PrismaClientRustPanicError)return t;try{let r=JSON.parse(t.message);return new D.PrismaClientInitializationError(r.message,this.config.clientVersion,r.error_code)}catch{return t}}#c(t,r){if(t instanceof D.PrismaClientInitializationError)return t;if(t.code==="GenericFailure"&&t.message?.startsWith("PANIC:"))return new D.PrismaClientRustPanicError(ll(this,t.message,r),this.config.clientVersion);if(t instanceof I)return new D.PrismaClientKnownRequestError(t.message,{code:t.code,meta:t.meta,clientVersion:this.config.clientVersion});try{let n=JSON.parse(t);return new D.PrismaClientUnknownRequestError(`${n.message}
${n.backtrace}`,{clientVersion:this.config.clientVersion})}catch{return t}}#d(t){return t instanceof D.PrismaClientRustPanicError?t:typeof t.message=="string"&&typeof t.code=="string"?new D.PrismaClientKnownRequestError(t.message,{code:t.code,meta:t.meta,clientVersion:this.config.clientVersion}):typeof t.message=="string"?new D.PrismaClientUnknownRequestError(t.message,{clientVersion:this.config.clientVersion}):t}#m(t,r,n=!0){let i=pl.PRISMA_WASM_PANIC_REGISTRY.set_message,o;global.PRISMA_WASM_PANIC_REGISTRY.set_message=s=>{o=s};try{return t()}finally{if(global.PRISMA_WASM_PANIC_REGISTRY.set_message=i,o)throw this.#e=void 0,n&&this.stop().catch(s=>le("failed to disconnect:",s)),new D.PrismaClientRustPanicError(ll(this,o,r),this.config.clientVersion)}}onBeforeExit(){throw new Error('"beforeExit" hook is not applicable to the client engine, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.')}async start(){await this.#s()}async stop(){switch(this.#t.type){case"disconnected":return;case"connecting":return await this.#t.promise,await this.stop();case"connected":{let t=this.#t.engine,r=this.tracingHelper.runInChildSpan("disconnect",async()=>{try{await t.executor.disconnect(),t.queryCompiler.free()}finally{this.#t={type:"disconnected"}}});return this.#t={type:"disconnecting",promise:r},await r}case"disconnecting":return await this.#t.promise}}version(){return"unknown"}async transaction(t,r,n){let i,{executor:o}=await this.#s();try{if(t==="start"){let s=n;i=await o.startTransaction({...s,isolationLevel:this.#g(s.isolationLevel)})}else if(t==="commit"){let s=n;await o.commitTransaction(s)}else if(t==="rollback"){let s=n;await o.rollbackTransaction(s)}else oe(t,"Invalid transaction action.")}catch(s){throw this.#c(s)}return i?{id:i.id,payload:void 0}:void 0}async request(t,{interactiveTransaction:r,customDataProxyFetch:n}){le("sending request");let{executor:i,queryCompiler:o}=await this.#s().catch(l=>{throw this.#c(l,JSON.stringify(t))}),s,a={};if(ul(t))s=cl(t);else{let{parameterizedQuery:l,placeholderValues:u}=Ga(t,this.#o),c=JSON.stringify(l);a=u;let p=this.#i.getSingle(c);p?(le("query plan cache hit"),s=p):(le("query plan cache miss"),s=this.#h(l,c,o),this.#i.setSingle(c,s))}try{le("query plan created",s);let l=await i.execute({plan:s,model:t.modelName,operation:t.action,placeholderValues:a,transaction:r,batchIndex:void 0,customFetch:n?.(globalThis.fetch),queryInfo:{type:"single",modelName:t.modelName,action:t.action,query:t.query}});return le("query plan executed"),{data:{[t.action]:l}}}catch(l){throw this.#c(l,JSON.stringify(t))}}async requestBatch(t,{transaction:r,customDataProxyFetch:n}){if(t.length===0)return[];let i=t[0].action,o=t[0].modelName,s=$a(t,r),a=JSON.stringify(s),{executor:l,queryCompiler:u}=await this.#s().catch(f=>{throw this.#c(f,a)}),c=o===void 0,p,d={};if(c)p=this.#f(t,a,u);else{let{parameterizedBatch:f,placeholderValues:h}=za(s,this.#o),x=JSON.stringify(f);d=h;let E=this.#i.getBatch(x);if(E)le("batch query plan cache hit"),p=E;else{le("batch query plan cache miss");try{p=this.#f(f.batch,x,u),this.#i.setBatch(x,p)}catch(L){throw this.#d(L)}}}try{let f;switch(r?.kind==="itx"&&(f=r.options),p.type){case"multi":{if(r?.kind!=="itx"){let E=r?.options.isolationLevel?{...this.config.transactionOptions,isolationLevel:r.options.isolationLevel}:this.config.transactionOptions;f=await this.transaction("start",{},E)}let h=[],x=!1;for(let[E,L]of p.plans.entries())try{let T=await l.execute({plan:L,placeholderValues:d,model:t[E].modelName,operation:t[E].action,batchIndex:E,transaction:f,customFetch:n?.(globalThis.fetch),queryInfo:{type:"single",...t[E]}});h.push({data:{[t[E].action]:T}})}catch(T){h.push(T),x=!0;break}return f!==void 0&&r?.kind!=="itx"&&(x?await this.transaction("rollback",{},f):await this.transaction("commit",{},f)),h}case"compacted":{if(!t.every(E=>E.action===i&&E.modelName===o)){let E=t.map(T=>T.action).join(", "),L=t.map(T=>T.modelName).join(", ");throw new Error(`Internal error: All queries in a compacted batch must have the same action and model name, but received actions: [${E}] and model names: [${L}]. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.`)}if(o===void 0)throw new Error("Internal error: A compacted batch cannot contain raw queries. This indicates a bug in the client. Please report this issue to the Prisma team with your query details.");let h=await l.execute({plan:p.plan,placeholderValues:d,model:o,operation:i,batchIndex:void 0,transaction:f,customFetch:n?.(globalThis.fetch),queryInfo:{type:"compacted",action:i,modelName:o,queries:t}});return cs(h,p,d).map(E=>({data:{[i]:E}}))}}}catch(f){throw this.#c(f,a)}}async apiKey(){let{executor:t}=await this.#s();return t.apiKey()}#h(t,r,n){try{return this.#m(()=>this.#y({queries:[t],execute:()=>n.compile(r)}))}catch(i){throw this.#d(i)}}#f(t,r,n){if(t.every(ul))return{type:"multi",plans:t.map(i=>cl(i))};try{return this.#m(()=>this.#y({queries:t,execute:()=>n.compileBatch(r)}))}catch(i){throw this.#d(i)}}#g(t){switch(t){case void 0:return;case"ReadUncommitted":return"READ UNCOMMITTED";case"ReadCommitted":return"READ COMMITTED";case"RepeatableRead":return"REPEATABLE READ";case"Serializable":return"SERIALIZABLE";case"Snapshot":return"SNAPSHOT";default:throw new D.PrismaClientKnownRequestError(`Inconsistent column data: Conversion failed: Invalid isolation level \`${t}\``,{code:"P2023",clientVersion:this.config.clientVersion,meta:{providedIsolationLevel:t}})}}#y({queries:t,execute:r}){return this.tracingHelper.runInChildSpan({name:"compile",attributes:{models:t.map(n=>n.modelName).filter(n=>n!==void 0),actions:t.map(n=>n.action)}},r)}};function ll(e,t,r){return Ba({binaryTarget:void 0,title:t,version:e.config.clientVersion,engineVersion:"unknown",database:e.config.activeProvider,query:r})}function ul(e){return e.action==="queryRaw"||e.action==="executeRaw"}function cl(e){let t=e.query.arguments.query,{args:r,argTypes:n}=_a(e.query.arguments.parameters);return{type:e.action==="queryRaw"?"query":"execute",args:{type:"rawSql",sql:t,args:r,argTypes:n}}}function dl(e){return new qt(e)}var ml=e=>({command:e});var El=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");var fl=e=>e.strings.reduce((t,r,n)=>`${t}@P${n}${r}`);var hl=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");function et(e){try{return gl(e,"fast")}catch{return gl(e,"slow")}}function gl(e,t){return JSON.stringify(e.map(r=>wl(r,t)))}function wl(e,t){if(Array.isArray(e))return e.map(r=>wl(r,t));if(typeof e=="bigint")return{prisma__type:"bigint",prisma__value:e.toString()};if(Ne(e))return{prisma__type:"date",prisma__value:e.toJSON()};if(hl.Decimal.isDecimal(e))return{prisma__type:"decimal",prisma__value:e.toJSON()};if(Buffer.isBuffer(e))return{prisma__type:"bytes",prisma__value:e.toString("base64")};if(cm(e))return{prisma__type:"bytes",prisma__value:Buffer.from(e).toString("base64")};if(ArrayBuffer.isView(e)){let{buffer:r,byteOffset:n,byteLength:i}=e;return{prisma__type:"bytes",prisma__value:Buffer.from(r,n,i).toString("base64")}}return typeof e=="object"&&t==="slow"?bl(e):e}function cm(e){return e instanceof ArrayBuffer||e instanceof SharedArrayBuffer?!0:typeof e=="object"&&e!==null?e[Symbol.toStringTag]==="ArrayBuffer"||e[Symbol.toStringTag]==="SharedArrayBuffer":!1}function bl(e){if(typeof e!="object"||e===null)return e;if(typeof e.toJSON=="function")return e.toJSON();if(Array.isArray(e))return e.map(yl);let t={};for(let r of Object.keys(e))t[r]=yl(e[r]);return t}function yl(e){return typeof e=="bigint"?e.toString():bl(e)}var pm=/^(\s*alter\s)/i,xl=M("prisma:client");function ui(e,t,r,n){if(!(e!=="postgresql"&&e!=="cockroachdb")&&r.length>0&&pm.exec(t))throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)}var ci=({clientMethod:e,activeProvider:t})=>r=>{let n="",i;if(mr(r))n=r.sql,i={values:et(r.values),__prismaRawParameters__:!0};else if(Array.isArray(r)){let[o,...s]=r;n=o,i={values:et(s||[]),__prismaRawParameters__:!0}}else switch(t){case"sqlite":case"mysql":{n=r.sql,i={values:et(r.values),__prismaRawParameters__:!0};break}case"cockroachdb":case"postgresql":case"postgres":{n=r.text,i={values:et(r.values),__prismaRawParameters__:!0};break}case"sqlserver":{n=fl(r),i={values:et(r.values),__prismaRawParameters__:!0};break}default:throw new Error(`The ${t} provider does not support ${e}`)}return i?.values?xl(`prisma.${e}(${n}, ${i.values})`):xl(`prisma.${e}(${n})`),{query:n,parameters:i}},Pl={requestArgsToMiddlewareArgs(e){return[e.strings,...e.values]},middlewareArgsToRequestArgs(e){let[t,...r]=e;return new El.Sql(t,r)}},Tl={requestArgsToMiddlewareArgs(e){return[e]},middlewareArgsToRequestArgs(e){return e[0]}};function pi(e){return function(r,n){let i,o=(s=e)=>{try{return s===void 0||s?.kind==="itx"?i??=Sl(r(s)):Sl(r(s))}catch(a){return Promise.reject(a)}};return{get spec(){return n},then(s,a){return o().then(s,a)},catch(s){return o().catch(s)},finally(s){return o().finally(s)},requestTransaction(s){let a=o(s);return a.requestTransaction?a.requestTransaction(s):a},[Symbol.toStringTag]:"PrismaPromise"}}}function Sl(e){return typeof e.then=="function"?e:Promise.resolve(e)}var Al={name:"@prisma/instrumentation-contract",version:"7.4.1",description:"Shared types and utilities for Prisma instrumentation",main:"dist/index.js",module:"dist/index.mjs",types:"dist/index.d.ts",exports:{".":{require:{types:"./dist/index.d.ts",default:"./dist/index.js"},import:{types:"./dist/index.d.mts",default:"./dist/index.mjs"}}},license:"Apache-2.0",homepage:"https://www.prisma.io",repository:{type:"git",url:"https://github.com/prisma/prisma.git",directory:"packages/instrumentation-contract"},bugs:"https://github.com/prisma/prisma/issues",scripts:{dev:"DEV=true tsx helpers/build.ts",build:"tsx helpers/build.ts",prepublishOnly:"pnpm run build",test:"vitest run"},files:["dist"],sideEffects:!1,devDependencies:{"@opentelemetry/api":"1.9.0"},peerDependencies:{"@opentelemetry/api":"^1.8"}};var mm=Al.version.split(".")[0],fm="PRISMA_INSTRUMENTATION",gm=`V${mm}_PRISMA_INSTRUMENTATION`,vl=globalThis;function Cl(){let e=vl[gm];return e?.helper?e.helper:vl[fm]?.helper}var ym={isEnabled(){return!1},getTraceParent(){return"00-10-10-00"},dispatchEngineSpans(){},getActiveContext(){},runInChildSpan(e,t){return t()}},di=class{isEnabled(){return this.getTracingHelper().isEnabled()}getTraceParent(t){return this.getTracingHelper().getTraceParent(t)}dispatchEngineSpans(t){return this.getTracingHelper().dispatchEngineSpans(t)}getActiveContext(){return this.getTracingHelper().getActiveContext()}runInChildSpan(t,r){return this.getTracingHelper().runInChildSpan(t,r)}getTracingHelper(){return Cl()??ym}};function Rl(){return new di}function kl(e,t=()=>{}){let r,n=new Promise(i=>r=i);return{then(i){return--e===0&&r(t()),i?.(n)}}}function Il(e){return typeof e=="string"?e:e.reduce((t,r)=>{let n=typeof r=="string"?r:r.level;return n==="query"?t:t&&(r==="info"||t==="info")?"info":n},void 0)}var Nl=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");function fi(e){if(e.action!=="findUnique"&&e.action!=="findUniqueOrThrow")return;let t=[];return e.modelName&&t.push(e.modelName),e.query.arguments&&t.push(mi(e.query.arguments)),t.push(mi(e.query.selection)),t.join("")}function mi(e){return`(${Object.keys(e).sort().map(r=>{let n=e[r];return typeof n=="object"&&n!==null?`(${r} ${mi(n)})`:r}).join(" ")})`}var hm={aggregate:!1,aggregateRaw:!1,createMany:!0,createManyAndReturn:!0,createOne:!0,deleteMany:!0,deleteOne:!0,executeRaw:!0,findFirst:!1,findFirstOrThrow:!1,findMany:!1,findRaw:!1,findUnique:!1,findUniqueOrThrow:!1,groupBy:!1,queryRaw:!1,runCommandRaw:!0,updateMany:!0,updateManyAndReturn:!0,updateOne:!0,upsertOne:!0};function gi(e){return hm[e]}var Hr=class{constructor(t){this.options=t;this.batches={}}batches;tickActive=!1;request(t){let r=this.options.batchBy(t);return r?(this.batches[r]||(this.batches[r]=[],this.tickActive||(this.tickActive=!0,process.nextTick(()=>{this.dispatchBatches(),this.tickActive=!1}))),new Promise((n,i)=>{this.batches[r].push({request:t,resolve:n,reject:i})})):this.options.singleLoader(t)}dispatchBatches(){for(let t in this.batches){let r=this.batches[t];delete this.batches[t],r.length===1?this.options.singleLoader(r[0].request).then(n=>{n instanceof Error?r[0].reject(n):r[0].resolve(n)}).catch(n=>{r[0].reject(n)}):(r.sort((n,i)=>this.options.batchOrder(n.request,i.request)),this.options.batchLoader(r.map(n=>n.request)).then(n=>{if(n instanceof Error)for(let i=0;i<r.length;i++)r[i].reject(n);else for(let i=0;i<r.length;i++){let o=n[i];o instanceof Error?r[i].reject(o):r[i].resolve(o)}}).catch(n=>{for(let i=0;i<r.length;i++)r[i].reject(n)}))}}get[Symbol.toStringTag](){return"DataLoader"}};var Ol=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");function Re(e,t){if(t===null)return t;switch(e){case"bigint":return BigInt(t);case"bytes":{let{buffer:r,byteOffset:n,byteLength:i}=Buffer.from(t,"base64");return new Uint8Array(r,n,i)}case"decimal":return new Ol.Decimal(t);case"datetime":case"date":return new Date(t);case"time":return new Date(`1970-01-01T${t}Z`);case"bigint-array":return t.map(r=>Re("bigint",r));case"bytes-array":return t.map(r=>Re("bytes",r));case"decimal-array":return t.map(r=>Re("decimal",r));case"datetime-array":return t.map(r=>Re("datetime",r));case"date-array":return t.map(r=>Re("date",r));case"time-array":return t.map(r=>Re("time",r));default:return t}}function Gr(e){let t=[],r=wm(e);for(let n=0;n<e.rows.length;n++){let i=e.rows[n],o={...r};for(let s=0;s<i.length;s++)o[e.columns[s]]=Re(e.types[s],i[s]);t.push(o)}return t}function wm(e){let t={};for(let r=0;r<e.columns.length;r++)t[e.columns[r]]=null;return t}var bm=M("prisma:client:request_handler"),zr=class{client;dataloader;logEmitter;constructor(t,r){this.logEmitter=r,this.client=t,this.dataloader=new Hr({batchLoader:Yo(async({requests:n,customDataProxyFetch:i})=>{let{transaction:o,otelParentCtx:s}=n[0],a=n.map(p=>p.protocolQuery),l=this.client._tracingHelper.getTraceParent(s),u=n.some(p=>gi(p.protocolQuery.action));return(await this.client._engine.requestBatch(a,{traceparent:l,transaction:xm(o),containsWrite:u,customDataProxyFetch:i})).map((p,d)=>{if(p instanceof Error)return p;try{return this.mapQueryEngineResult(n[d],p)}catch(f){return f}})}),singleLoader:async n=>{let i=n.transaction?.kind==="itx"?Dl(n.transaction):void 0,o=await this.client._engine.request(n.protocolQuery,{traceparent:this.client._tracingHelper.getTraceParent(),interactiveTransaction:i,isWrite:gi(n.protocolQuery.action),customDataProxyFetch:n.customDataProxyFetch});return this.mapQueryEngineResult(n,o)},batchBy:n=>{if(n.transaction?.kind==="itx"){let i=fi(n.protocolQuery);return`itx-${n.transaction.id}${i?`-${i}`:""}`}return n.transaction?.id?`transaction-${n.transaction.id}`:fi(n.protocolQuery)},batchOrder(n,i){return n.transaction?.kind==="batch"&&i.transaction?.kind==="batch"?n.transaction.index-i.transaction.index:0}})}async request(t){try{return await this.dataloader.request(t)}catch(r){let{clientMethod:n,callsite:i,transaction:o,args:s,modelName:a}=t;this.handleAndLogRequestError({error:r,clientMethod:n,callsite:i,transaction:o,args:s,modelName:a,globalOmit:t.globalOmit})}}mapQueryEngineResult({dataPath:t,unpacker:r},n){let i=n?.data,o=this.unpack(i,t,r);return process.env.PRISMA_CLIENT_GET_TIME?{data:o}:o}handleAndLogRequestError(t){try{this.handleRequestError(t)}catch(r){throw this.logEmitter&&this.logEmitter.emit("error",{message:r.message,target:t.clientMethod,timestamp:new Date}),r}}handleRequestError({error:t,clientMethod:r,callsite:n,transaction:i,args:o,modelName:s,globalOmit:a}){if(bm(t),Em(t,i))throw t;if(t instanceof w.PrismaClientKnownRequestError&&Pm(t)){let u=Ml(t.meta);ar({args:o,errors:[u],callsite:n,errorFormat:this.client._errorFormat,originalMethod:r,clientVersion:this.client._clientVersion,globalOmit:a})}let l=t.message;if(n&&(l=Xt({callsite:n,originalMethod:r,isPanic:t.isPanic,showColors:this.client._errorFormat==="pretty",message:l})),l=this.sanitizeMessage(l),t.code){let u=s?{modelName:s,...t.meta}:t.meta;throw new w.PrismaClientKnownRequestError(l,{code:t.code,clientVersion:this.client._clientVersion,meta:u,batchRequestIdx:t.batchRequestIdx})}else{if(t.isPanic)throw new w.PrismaClientRustPanicError(l,this.client._clientVersion);if(t instanceof w.PrismaClientUnknownRequestError)throw new w.PrismaClientUnknownRequestError(l,{clientVersion:this.client._clientVersion,batchRequestIdx:t.batchRequestIdx});if(t instanceof w.PrismaClientInitializationError)throw new w.PrismaClientInitializationError(l,this.client._clientVersion);if(t instanceof w.PrismaClientRustPanicError)throw new w.PrismaClientRustPanicError(l,this.client._clientVersion)}throw t.clientVersion=this.client._clientVersion,t}sanitizeMessage(t){return this.client._errorFormat&&this.client._errorFormat!=="pretty"?Oe(t):t}unpack(t,r,n){if(!t||(t.data&&(t=t.data),!t))return t;let i=Object.keys(t)[0],o=Object.values(t)[0],s=r.filter(u=>u!=="select"&&u!=="include"),a=bn(o,s),l=i==="queryRaw"?Gr(a):W(a);return n?n(l):l}get[Symbol.toStringTag](){return"RequestHandler"}};function xm(e){if(e){if(e.kind==="batch")return{kind:"batch",options:{isolationLevel:e.isolationLevel}};if(e.kind==="itx")return{kind:"itx",options:Dl(e)};oe(e,"Unknown transaction kind")}}function Dl(e){return{id:e.id,payload:e.payload}}function Em(e,t){return(0,Nl.hasBatchIndex)(e)&&t?.kind==="batch"&&e.batchRequestIdx!==t.index}function Pm(e){return e.code==="P2009"||e.code==="P2012"}function Ml(e){if(e.kind==="Union")return{kind:"Union",errors:e.errors.map(Ml)};if(Array.isArray(e.selectionPath)){let[,...t]=e.selectionPath;return{...e,selectionPath:t}}return e}var yi=_r;var Vl=U(cn());var R=class extends Error{constructor(t){super(t+`
Read more at https://pris.ly/d/client-constructor`),this.name="PrismaClientConstructorValidationError"}get[Symbol.toStringTag](){return"PrismaClientConstructorValidationError"}};mt(R,"PrismaClientConstructorValidationError");var Fl=["errorFormat","adapter","accelerateUrl","log","transactionOptions","omit","comments","__internal"],_l=["pretty","colorless","minimal"],Ll=["info","query","warn","error"],Tm={adapter:()=>{},accelerateUrl:e=>{if(e!==void 0){if(typeof e!="string")throw new R(`Invalid value ${JSON.stringify(e)} for "accelerateUrl" provided to PrismaClient constructor.`);if(e.trim().length===0)throw new R('"accelerateUrl" provided to PrismaClient constructor must be a non-empty string.')}},errorFormat:e=>{if(e){if(typeof e!="string")throw new R(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);if(!_l.includes(e)){let t=jt(e,_l);throw new R(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`)}}},log:e=>{if(!e)return;if(!Array.isArray(e))throw new R(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);function t(r){if(typeof r=="string"&&!Ll.includes(r)){let n=jt(r,Ll);throw new R(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`)}}for(let r of e){t(r);let n={level:t,emit:i=>{let o=["stdout","event"];if(!o.includes(i)){let s=jt(i,o);throw new R(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`)}}};if(r&&typeof r=="object")for(let[i,o]of Object.entries(r))if(n[i])n[i](o);else throw new R(`Invalid property ${i} for "log" provided to PrismaClient constructor`)}},transactionOptions:e=>{if(!e)return;let t=e.maxWait;if(t!=null&&t<=0)throw new R(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);let r=e.timeout;if(r!=null&&r<=0)throw new R(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`)},omit:(e,t)=>{if(typeof e!="object")throw new R('"omit" option is expected to be an object.');if(e===null)throw new R('"omit" option can not be `null`');let r=[];for(let[n,i]of Object.entries(e)){let o=vm(n,t.runtimeDataModel);if(!o){r.push({kind:"UnknownModel",modelKey:n});continue}for(let[s,a]of Object.entries(i)){let l=o.fields.find(u=>u.name===s);if(!l){r.push({kind:"UnknownField",modelKey:n,fieldName:s});continue}if(l.relationName){r.push({kind:"RelationInOmit",modelKey:n,fieldName:s});continue}typeof a!="boolean"&&r.push({kind:"InvalidFieldValue",modelKey:n,fieldName:s})}}if(r.length>0)throw new R(Cm(e,r))},comments:e=>{if(e!==void 0){if(!Array.isArray(e))throw new R(`Invalid value ${JSON.stringify(e)} for "comments" provided to PrismaClient constructor. Expected an array of SQL commenter plugins.`);for(let t=0;t<e.length;t++)if(typeof e[t]!="function")throw new R(`Invalid value at index ${t} for "comments" provided to PrismaClient constructor. Each plugin must be a function.`)}},__internal:e=>{if(!e)return;let t=["debug","engine","configOverride"];if(typeof e!="object")throw new R(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);for(let[r]of Object.entries(e))if(!t.includes(r)){let n=jt(r,t);throw new R(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`)}}};function Sm(e){let t=e.adapter!==void 0,r=e.accelerateUrl!==void 0;if(t&&r)throw new R('The "adapter" and "accelerateUrl" options are mutually exclusive. Please provide only one of them.');if(!t&&!r)throw new R('Using engine type "client" requires either "adapter" or "accelerateUrl" to be provided to PrismaClient constructor.')}function ql(e,t){for(let[r,n]of Object.entries(e)){if(!Fl.includes(r)){let i=jt(r,Fl);throw new R(`Unknown property ${r} provided to PrismaClient constructor.${i}`)}Tm[r](n,t)}Sm(e)}function jt(e,t){if(t.length===0||typeof e!="string")return"";let r=Am(e,t);return r?` Did you mean "${r}"?`:""}function Am(e,t){if(t.length===0)return null;let r=t.map(i=>({value:i,distance:(0,Vl.default)(e,i)}));r.sort((i,o)=>i.distance<o.distance?-1:1);let n=r[0];return n.distance<3?n.value:null}function vm(e,t){return $l(t.models,e)??$l(t.types,e)}function $l(e,t){let r=Object.keys(e).find(n=>ce(n)===t);if(r)return e[r]}function Cm(e,t){let r=je(e);for(let o of t)switch(o.kind){case"UnknownModel":r.arguments.getField(o.modelKey)?.markAsError(),r.addErrorMessage(()=>`Unknown model name: ${o.modelKey}.`);break;case"UnknownField":r.arguments.getDeepField([o.modelKey,o.fieldName])?.markAsError(),r.addErrorMessage(()=>`Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);break;case"RelationInOmit":r.arguments.getDeepField([o.modelKey,o.fieldName])?.markAsError(),r.addErrorMessage(()=>'Relations are already excluded by default and can not be specified in "omit".');break;case"InvalidFieldValue":r.arguments.getDeepFieldValue([o.modelKey,o.fieldName])?.markAsError(),r.addErrorMessage(()=>"Omit field option value must be a boolean.");break}let{message:n,args:i}=sr(r,"colorless");return`Error validating "omit" option:

${i}

${n}`}var jl=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");function Ul(e){return e.length===0?Promise.resolve([]):new Promise((t,r)=>{let n=new Array(e.length),i=null,o=!1,s=0,a=()=>{o||(s++,s===e.length&&(o=!0,i?r(i):t(n)))},l=u=>{o||(o=!0,r(u))};for(let u=0;u<e.length;u++)e[u].then(c=>{n[u]=c,a()},c=>{if(!(0,jl.hasBatchIndex)(c)){l(c);return}c.batchRequestIdx===u?l(c):(i||(i=c),a())})})}var Ut=M("prisma:client");typeof globalThis=="object"&&(globalThis.NODE_CLIENT=!0);var Rm={requestArgsToMiddlewareArgs:e=>e,middlewareArgsToRequestArgs:e=>e},km=Symbol.for("prisma.client.transaction.id"),Im={id:0,nextId(){return++this.id}};function Gl(e){class t{_originalClient=this;_runtimeDataModel;_requestHandler;_connectionPromise;_disconnectionPromise;_engineConfig;_accelerateEngineConfig;_clientVersion;_errorFormat;_tracingHelper;_previewFeatures;_activeProvider;_globalOmit;_extensions;_engine;_appliedParent;_createPrismaPromise=pi();constructor(n){if(!n)throw new w.PrismaClientInitializationError("`PrismaClient` needs to be constructed with a non-empty, valid `PrismaClientOptions`:\n\n```\nnew PrismaClient({\n  ...\n})\n```\n\nor\n\n```\nconstructor() {\n  super({ ... });\n}\n```\n          ",yi);e=n.__internal?.configOverride?.(e)??e,ql(n,e);let i=new Hl.EventEmitter().on("error",()=>{});this._extensions=Ue.empty(),this._previewFeatures=e.previewFeatures,this._clientVersion=e.clientVersion??yi,this._activeProvider=e.activeProvider,this._globalOmit=n?.omit,this._tracingHelper=Rl();let o;if(n.adapter){o=n.adapter;let s=e.activeProvider==="postgresql"||e.activeProvider==="cockroachdb"?"postgres":e.activeProvider;if(o.provider!==s)throw new w.PrismaClientInitializationError(`The Driver Adapter \`${o.adapterName}\`, based on \`${o.provider}\`, is not compatible with the provider \`${s}\` specified in the Prisma schema.`,this._clientVersion)}try{let s=n??{},l=(s.__internal??{}).debug===!0;if(l&&M.enable("prisma:client"),s.errorFormat?this._errorFormat=s.errorFormat: false?0:process.env.NO_COLOR?this._errorFormat="colorless":this._errorFormat="colorless",this._runtimeDataModel=e.runtimeDataModel,this._engineConfig={enableDebugLogs:l,logLevel:s.log&&Il(s.log),logQueries:s.log&&!!(typeof s.log=="string"?s.log==="query":s.log.find(u=>typeof u=="string"?u==="query":u.level==="query")),compilerWasm:e.compilerWasm,clientVersion:e.clientVersion,previewFeatures:this._previewFeatures,activeProvider:e.activeProvider,inlineSchema:e.inlineSchema,tracingHelper:this._tracingHelper,transactionOptions:{maxWait:s.transactionOptions?.maxWait??2e3,timeout:s.transactionOptions?.timeout??5e3,isolationLevel:s.transactionOptions?.isolationLevel},logEmitter:i,adapter:o,accelerateUrl:s.accelerateUrl,sqlCommenters:s.comments,parameterizationSchema:e.parameterizationSchema,runtimeDataModel:e.runtimeDataModel},this._accelerateEngineConfig=Object.create(this._engineConfig),this._accelerateEngineConfig.accelerateUtils={resolveDatasourceUrl:()=>{if(s.accelerateUrl)return s.accelerateUrl;throw new w.PrismaClientInitializationError(`\`accelerateUrl\` is required when using \`@prisma/extension-accelerate\`:

new PrismaClient({
  accelerateUrl: "prisma://...",
}).$extends(withAccelerate())
`,e.clientVersion)}},Ut("clientVersion",e.clientVersion),this._engine=dl(this._engineConfig),this._requestHandler=new zr(this,i),s.log)for(let u of s.log){let c=typeof u=="string"?u:u.emit==="stdout"?u.level:null;c&&this.$on(c,p=>{pt.log(`${pt.tags[c]??""}`,p.message||p.query)})}}catch(s){throw s.clientVersion=this._clientVersion,s}return this._appliedParent=Tt(this)}get[Symbol.toStringTag](){return"PrismaClient"}$on(n,i){return n==="beforeExit"?this._engine.onBeforeExit(i):n&&this._engineConfig.logEmitter.on(n,i),this}$connect(){try{return this._engine.start()}catch(n){throw n.clientVersion=this._clientVersion,n}}async $disconnect(){try{await this._engine.stop()}catch(n){throw n.clientVersion=this._clientVersion,n}finally{Ni()}}$executeRawInternal(n,i,o,s){let a=this._activeProvider;return this._request({action:"executeRaw",args:o,transaction:n,clientMethod:i,argsMapper:ci({clientMethod:i,activeProvider:a}),callsite:me(this._errorFormat),dataPath:[],middlewareArgsMapper:s})}$executeRaw(n,...i){return this._createPrismaPromise(o=>{if(n.raw!==void 0||n.sql!==void 0){let[s,a]=Bl(n,i);return ui(this._activeProvider,s.text,s.values,Array.isArray(n)?"prisma.$executeRaw`<SQL>`":"prisma.$executeRaw(sql`<SQL>`)"),this.$executeRawInternal(o,"$executeRaw",s,a)}throw new w.PrismaClientValidationError("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",{clientVersion:this._clientVersion})})}$executeRawUnsafe(n,...i){return this._createPrismaPromise(o=>(ui(this._activeProvider,n,i,"prisma.$executeRawUnsafe(<SQL>, [...values])"),this.$executeRawInternal(o,"$executeRawUnsafe",[n,...i])))}$runCommandRaw(n){if(e.activeProvider!=="mongodb")throw new w.PrismaClientValidationError(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,{clientVersion:this._clientVersion});return this._createPrismaPromise(i=>this._request({args:n,clientMethod:"$runCommandRaw",dataPath:[],action:"runCommandRaw",argsMapper:ml,callsite:me(this._errorFormat),transaction:i}))}async $queryRawInternal(n,i,o,s){let a=this._activeProvider;return this._request({action:"queryRaw",args:o,transaction:n,clientMethod:i,argsMapper:ci({clientMethod:i,activeProvider:a}),callsite:me(this._errorFormat),dataPath:[],middlewareArgsMapper:s})}$queryRaw(n,...i){return this._createPrismaPromise(o=>{if(n.raw!==void 0||n.sql!==void 0)return this.$queryRawInternal(o,"$queryRaw",...Bl(n,i));throw new w.PrismaClientValidationError("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",{clientVersion:this._clientVersion})})}$queryRawTyped(n){return this._createPrismaPromise(i=>{if(!this._hasPreviewFlag("typedSql"))throw new w.PrismaClientValidationError("`typedSql` preview feature must be enabled in order to access $queryRawTyped API",{clientVersion:this._clientVersion});return this.$queryRawInternal(i,"$queryRawTyped",n)})}$queryRawUnsafe(n,...i){return this._createPrismaPromise(o=>this.$queryRawInternal(o,"$queryRawUnsafe",[n,...i]))}_transactionWithArray({promises:n,options:i}){let o=Im.nextId(),s=kl(n.length),a=n.map((l,u)=>{if(l?.[Symbol.toStringTag]!=="PrismaPromise")throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");let c=i?.isolationLevel??this._engineConfig.transactionOptions.isolationLevel,p={kind:"batch",id:o,index:u,isolationLevel:c,lock:s};return l.requestTransaction?.(p)??l});return Ul(a)}async _transactionWithCallback({callback:n,options:i}){let o={traceparent:this._tracingHelper.getTraceParent()},s={maxWait:i?.maxWait??this._engineConfig.transactionOptions.maxWait,timeout:i?.timeout??this._engineConfig.transactionOptions.timeout,isolationLevel:i?.isolationLevel??this._engineConfig.transactionOptions.isolationLevel},a=await this._engine.transaction("start",o,s),l;try{let u={kind:"itx",...a};l=await n(this._createItxClient(u)),await this._engine.transaction("commit",o,a)}catch(u){throw await this._engine.transaction("rollback",o,a).catch(()=>{}),u}return l}_createItxClient(n){return z(Tt(z(Uo(this),[_("_appliedParent",()=>this._appliedParent._createItxClient(n)),_("_createPrismaPromise",()=>pi(n)),_(km,()=>n.id)])),[Be(Go)])}$transaction(n,i){let o;typeof n=="function"?this._engineConfig.adapter?.adapterName==="@prisma/adapter-d1"?o=()=>{throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.")}:o=()=>this._transactionWithCallback({callback:n,options:i}):o=()=>this._transactionWithArray({promises:n,options:i});let s={name:"transaction",attributes:{method:"$transaction"}};return this._tracingHelper.runInChildSpan(s,o)}_request(n){n.otelParentCtx=this._tracingHelper.getActiveContext();let i=n.middlewareArgsMapper??Rm,o={args:i.requestArgsToMiddlewareArgs(n.args),dataPath:n.dataPath,runInTransaction:!!n.transaction,action:n.action,model:n.model},s={operation:{name:"operation",attributes:{method:o.action,model:o.model,name:o.model?`${o.model}.${o.action}`:o.action}}},a=async l=>{let{runInTransaction:u,args:c,...p}=l,d={...n,...p};c&&(d.args=i.middlewareArgsToRequestArgs(c)),n.transaction!==void 0&&u===!1&&delete d.transaction;let f=await Zo(this,d);if(!d.model)return f;let h=rs({dataPath:d.dataPath,modelName:d.model,args:d.args,runtimeDataModel:this._runtimeDataModel});return Ho({result:f,modelName:h.modelName,args:h.args,extensions:this._extensions,runtimeDataModel:this._runtimeDataModel,globalOmit:this._globalOmit})};return this._tracingHelper.runInChildSpan(s.operation,()=>new Jl.AsyncResource("prisma-client-request").runInAsyncScope(()=>a(o)))}async _executeRequest({args:n,clientMethod:i,dataPath:o,callsite:s,action:a,model:l,argsMapper:u,transaction:c,unpacker:p,otelParentCtx:d,customDataProxyFetch:f}){try{n=u?u(n):n;let h={name:"serialize"},x=this._tracingHelper.runInChildSpan(h,()=>pr({modelName:l,runtimeDataModel:this._runtimeDataModel,action:a,args:n,clientMethod:i,callsite:s,extensions:this._extensions,errorFormat:this._errorFormat,clientVersion:this._clientVersion,previewFeatures:this._previewFeatures,globalOmit:this._globalOmit}));return M.enabled("prisma:client")&&(Ut("Prisma Client call:"),Ut(`prisma.${i}(${Oo(n)})`),Ut("Generated request:"),Ut(JSON.stringify(x,null,2)+`
`)),c?.kind==="batch"&&await c.lock,this._requestHandler.request({protocolQuery:x,modelName:l,action:a,clientMethod:i,dataPath:o,callsite:s,args:n,extensions:this._extensions,transaction:c,unpacker:p,otelParentCtx:d,otelChildCtx:this._tracingHelper.getActiveContext(),globalOmit:this._globalOmit,customDataProxyFetch:f})}catch(h){throw h.clientVersion=this._clientVersion,h}}_hasPreviewFlag(n){return!!this._engineConfig.previewFeatures?.includes(n)}$extends=Bo}return t}function Bl(e,t){return Om(e)?[new Ql.Sql(e,t),Pl]:[e,Tl]}function Om(e){return Array.isArray(e)&&Array.isArray(e.raw)}var Nm=new Set(["toJSON","$$typeof","asymmetricMatch",Symbol.iterator,Symbol.toStringTag,Symbol.isConcatSpreadable,Symbol.toPrimitive]);function zl(e){return new Proxy(e,{get(t,r){if(r in t)return t[r];if(!Nm.has(r))throw new TypeError(`Invalid enum value: ${String(r)}`)}})}var Dm=()=>globalThis.process?.release?.name==="node",Mm=()=>!!globalThis.Bun||!!globalThis.process?.versions?.bun,Fm=()=>!!globalThis.Deno,_m=()=>typeof globalThis.Netlify=="object",Lm=()=>typeof globalThis.EdgeRuntime=="object",$m=()=>globalThis.navigator?.userAgent==="Cloudflare-Workers";function Vm(){return[[_m,"netlify"],[Lm,"edge-light"],[$m,"workerd"],[Fm,"deno"],[Mm,"bun"],[Dm,"node"]].flatMap(r=>r[0]()?[r[1]]:[]).at(0)??""}var qm={node:"Node.js",workerd:"Cloudflare Workers",deno:"Deno and Deno Deploy",netlify:"Netlify Edge Functions","edge-light":"Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"};function Wl(){let e=Vm();return{id:e,prettyName:qm[e]||e,isEdge:["workerd","deno","netlify","edge-light"].includes(e)}}var w=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js"),ne=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js"),F=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js"),Kl=__webpack_require__("../../node_modules/.pnpm/@prisma+client-runtime-utils@7.4.1/node_modules/@prisma/client-runtime-utils/dist/index.js");0&&(0);
/*! Bundled license information:

@noble/hashes/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=client.js.map


},
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
"../../node_modules/.pnpm/buffer-equal-constant-time@1.0.1/node_modules/buffer-equal-constant-time/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";
/*jshint node:true */

var Buffer = (__webpack_require__("buffer")/* .Buffer */.Buffer); // browserify
var SlowBuffer = (__webpack_require__("buffer")/* .SlowBuffer */.SlowBuffer);

module.exports = bufferEq;

function bufferEq(a, b) {

  // shortcutting on type is necessary for correctness
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    return false;
  }

  // buffer sizes should be well-known information, so despite this
  // shortcutting, it doesn't leak any information about the *contents* of the
  // buffers.
  if (a.length !== b.length) {
    return false;
  }

  var c = 0;
  for (var i = 0; i < a.length; i++) {
    /*jshint bitwise:false */
    c |= a[i] ^ b[i]; // XOR
  }
  return c === 0;
}

bufferEq.install = function() {
  Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
    return bufferEq(this, that);
  };
};

var origBufEqual = Buffer.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
  Buffer.prototype.equal = origBufEqual;
  SlowBuffer.prototype.equal = origSlowBufEqual;
};


},
"../../node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


var Buffer = (__webpack_require__("../../node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js")/* .Buffer */.Buffer);

var getParamBytesForAlg = __webpack_require__("../../node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js");

var MAX_OCTET = 0x80,
	CLASS_UNIVERSAL = 0,
	PRIMITIVE_BIT = 0x20,
	TAG_SEQ = 0x10,
	TAG_INT = 0x02,
	ENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),
	ENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);

function base64Url(base64) {
	return base64
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
}

function signatureAsBuffer(signature) {
	if (Buffer.isBuffer(signature)) {
		return signature;
	} else if ('string' === typeof signature) {
		return Buffer.from(signature, 'base64');
	}

	throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}

function derToJose(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	// the DER encoded param should at most be the param size, plus a padding
	// zero, since due to being a signed integer
	var maxEncodedParamLength = paramBytes + 1;

	var inputLength = signature.length;

	var offset = 0;
	if (signature[offset++] !== ENCODED_TAG_SEQ) {
		throw new Error('Could not find expected "seq"');
	}

	var seqLength = signature[offset++];
	if (seqLength === (MAX_OCTET | 1)) {
		seqLength = signature[offset++];
	}

	if (inputLength - offset < seqLength) {
		throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
	}

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "r"');
	}

	var rLength = signature[offset++];

	if (inputLength - offset - 2 < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
	}

	if (maxEncodedParamLength < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var rOffset = offset;
	offset += rLength;

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "s"');
	}

	var sLength = signature[offset++];

	if (inputLength - offset !== sLength) {
		throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
	}

	if (maxEncodedParamLength < sLength) {
		throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var sOffset = offset;
	offset += sLength;

	if (offset !== inputLength) {
		throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
	}

	var rPadding = paramBytes - rLength,
		sPadding = paramBytes - sLength;

	var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);

	for (offset = 0; offset < rPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);

	offset = paramBytes;

	for (var o = offset; offset < o + sPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);

	dst = dst.toString('base64');
	dst = base64Url(dst);

	return dst;
}

function countPadding(buf, start, stop) {
	var padding = 0;
	while (start + padding < stop && buf[start + padding] === 0) {
		++padding;
	}

	var needsSign = buf[start + padding] >= MAX_OCTET;
	if (needsSign) {
		--padding;
	}

	return padding;
}

function joseToDer(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	var signatureBytes = signature.length;
	if (signatureBytes !== paramBytes * 2) {
		throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
	}

	var rPadding = countPadding(signature, 0, paramBytes);
	var sPadding = countPadding(signature, paramBytes, signature.length);
	var rLength = paramBytes - rPadding;
	var sLength = paramBytes - sPadding;

	var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;

	var shortLength = rsBytes < MAX_OCTET;

	var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);

	var offset = 0;
	dst[offset++] = ENCODED_TAG_SEQ;
	if (shortLength) {
		// Bit 8 has value "0"
		// bits 7-1 give the length.
		dst[offset++] = rsBytes;
	} else {
		// Bit 8 of first octet has value "1"
		// bits 7-1 give the number of additional length octets.
		dst[offset++] = MAX_OCTET	| 1;
		// length, base 256
		dst[offset++] = rsBytes & 0xff;
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = rLength;
	if (rPadding < 0) {
		dst[offset++] = 0;
		offset += signature.copy(dst, offset, 0, paramBytes);
	} else {
		offset += signature.copy(dst, offset, rPadding, paramBytes);
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = sLength;
	if (sPadding < 0) {
		dst[offset++] = 0;
		signature.copy(dst, offset, paramBytes);
	} else {
		signature.copy(dst, offset, paramBytes + sPadding);
	}

	return dst;
}

module.exports = {
	derToJose: derToJose,
	joseToDer: joseToDer
};


},
"../../node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(module) {
"use strict";


function getParamSize(keySize) {
	var result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);
	return result;
}

var paramBytesForAlg = {
	ES256: getParamSize(256),
	ES384: getParamSize(384),
	ES512: getParamSize(521)
};

function getParamBytesForAlg(alg) {
	var paramBytes = paramBytesForAlg[alg];
	if (paramBytes) {
		return paramBytes;
	}

	throw new Error('Unknown algorithm "' + alg + '"');
}

module.exports = getParamBytesForAlg;


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/decode.js"(module, __unused_rspack_exports, __webpack_require__) {
var jws = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/index.js");

module.exports = function (jwt, options) {
  options = options || {};
  var decoded = jws.decode(jwt, options);
  if (!decoded) { return null; }
  var payload = decoded.payload;

  //try parse the payload
  if(typeof payload === 'string') {
    try {
      var obj = JSON.parse(payload);
      if(obj !== null && typeof obj === 'object') {
        payload = obj;
      }
    } catch (e) { }
  }

  //return header if `complete` option is enabled.  header includes claims
  //such as `kid` and `alg` used to select the key within a JWKS needed to
  //verify the signature
  if (options.complete === true) {
    return {
      header: decoded.header,
      payload: payload,
      signature: decoded.signature
    };
  }
  return payload;
};


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/index.js"(module, __unused_rspack_exports, __webpack_require__) {
module.exports = {
  decode: __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/decode.js"),
  verify: __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/verify.js"),
  sign: __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/sign.js"),
  JsonWebTokenError: __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/JsonWebTokenError.js"),
  NotBeforeError: __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/NotBeforeError.js"),
  TokenExpiredError: __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/TokenExpiredError.js"),
};


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(module) {
var JsonWebTokenError = function (message, error) {
  Error.call(this, message);
  if(Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'JsonWebTokenError';
  this.message = message;
  if (error) this.inner = error;
};

JsonWebTokenError.prototype = Object.create(Error.prototype);
JsonWebTokenError.prototype.constructor = JsonWebTokenError;

module.exports = JsonWebTokenError;


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/NotBeforeError.js"(module, __unused_rspack_exports, __webpack_require__) {
var JsonWebTokenError = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/JsonWebTokenError.js");

var NotBeforeError = function (message, date) {
  JsonWebTokenError.call(this, message);
  this.name = 'NotBeforeError';
  this.date = date;
};

NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);

NotBeforeError.prototype.constructor = NotBeforeError;

module.exports = NotBeforeError;

},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/TokenExpiredError.js"(module, __unused_rspack_exports, __webpack_require__) {
var JsonWebTokenError = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/JsonWebTokenError.js");

var TokenExpiredError = function (message, expiredAt) {
  JsonWebTokenError.call(this, message);
  this.name = 'TokenExpiredError';
  this.expiredAt = expiredAt;
};

TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);

TokenExpiredError.prototype.constructor = TokenExpiredError;

module.exports = TokenExpiredError;

},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(module, __unused_rspack_exports, __webpack_require__) {
const semver = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/index.js");

module.exports = semver.satisfies(process.version, '>=15.7.0');


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/psSupported.js"(module, __unused_rspack_exports, __webpack_require__) {
var semver = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/index.js");

module.exports = semver.satisfies(process.version, '^6.12.0 || >=8.0.0');


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(module, __unused_rspack_exports, __webpack_require__) {
const semver = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/index.js");

module.exports = semver.satisfies(process.version, '>=16.9.0');


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/timespan.js"(module, __unused_rspack_exports, __webpack_require__) {
var ms = __webpack_require__("../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js");

module.exports = function (time, iat) {
  var timestamp = iat || Math.floor(Date.now() / 1000);

  if (typeof time === 'string') {
    var milliseconds = ms(time);
    if (typeof milliseconds === 'undefined') {
      return;
    }
    return Math.floor(timestamp + milliseconds / 1000);
  } else if (typeof time === 'number') {
    return timestamp + time;
  } else {
    return;
  }

};

},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(module, __unused_rspack_exports, __webpack_require__) {
const ASYMMETRIC_KEY_DETAILS_SUPPORTED = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js");
const RSA_PSS_KEY_DETAILS_SUPPORTED = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js");

const allowedAlgorithmsForKeys = {
  'ec': ['ES256', 'ES384', 'ES512'],
  'rsa': ['RS256', 'PS256', 'RS384', 'PS384', 'RS512', 'PS512'],
  'rsa-pss': ['PS256', 'PS384', 'PS512']
};

const allowedCurves = {
  ES256: 'prime256v1',
  ES384: 'secp384r1',
  ES512: 'secp521r1',
};

module.exports = function(algorithm, key) {
  if (!algorithm || !key) return;

  const keyType = key.asymmetricKeyType;
  if (!keyType) return;

  const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];

  if (!allowedAlgorithms) {
    throw new Error(`Unknown key type "${keyType}".`);
  }

  if (!allowedAlgorithms.includes(algorithm)) {
    throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(', ')}.`)
  }

  /*
   * Ignore the next block from test coverage because it gets executed
   * conditionally depending on the Node version. Not ignoring it would
   * prevent us from reaching the target % of coverage for versions of
   * Node under 15.7.0.
   */
  /* istanbul ignore next */
  if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
    switch (keyType) {
    case 'ec':
      const keyCurve = key.asymmetricKeyDetails.namedCurve;
      const allowedCurve = allowedCurves[algorithm];

      if (keyCurve !== allowedCurve) {
        throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
      }
      break;

    case 'rsa-pss':
      if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
        const length = parseInt(algorithm.slice(-3), 10);
        const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;

        if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
          throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
        }

        if (saltLength !== undefined && saltLength > length >> 3) {
          throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`)
        }
      }
      break;
    }
  }
}


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/sign.js"(module, __unused_rspack_exports, __webpack_require__) {
const timespan = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/timespan.js");
const PS_SUPPORTED = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/psSupported.js");
const validateAsymmetricKey = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js");
const jws = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/index.js");
const includes = __webpack_require__("../../node_modules/.pnpm/lodash.includes@4.3.0/node_modules/lodash.includes/index.js");
const isBoolean = __webpack_require__("../../node_modules/.pnpm/lodash.isboolean@3.0.3/node_modules/lodash.isboolean/index.js");
const isInteger = __webpack_require__("../../node_modules/.pnpm/lodash.isinteger@4.0.4/node_modules/lodash.isinteger/index.js");
const isNumber = __webpack_require__("../../node_modules/.pnpm/lodash.isnumber@3.0.3/node_modules/lodash.isnumber/index.js");
const isPlainObject = __webpack_require__("../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js");
const isString = __webpack_require__("../../node_modules/.pnpm/lodash.isstring@4.0.1/node_modules/lodash.isstring/index.js");
const once = __webpack_require__("../../node_modules/.pnpm/lodash.once@4.1.1/node_modules/lodash.once/index.js");
const { KeyObject, createSecretKey, createPrivateKey } = __webpack_require__("crypto")

const SUPPORTED_ALGS = ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none'];
if (PS_SUPPORTED) {
  SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}

const sign_options_schema = {
  expiresIn: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
  notBefore: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
  audience: { isValid: function(value) { return isString(value) || Array.isArray(value); }, message: '"audience" must be a string or array' },
  algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
  header: { isValid: isPlainObject, message: '"header" must be an object' },
  encoding: { isValid: isString, message: '"encoding" must be a string' },
  issuer: { isValid: isString, message: '"issuer" must be a string' },
  subject: { isValid: isString, message: '"subject" must be a string' },
  jwtid: { isValid: isString, message: '"jwtid" must be a string' },
  noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
  keyid: { isValid: isString, message: '"keyid" must be a string' },
  mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
  allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean'},
  allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'}
};

const registered_claims_schema = {
  iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
  exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
  nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
};

function validate(schema, allowUnknown, object, parameterName) {
  if (!isPlainObject(object)) {
    throw new Error('Expected "' + parameterName + '" to be a plain object.');
  }
  Object.keys(object)
    .forEach(function(key) {
      const validator = schema[key];
      if (!validator) {
        if (!allowUnknown) {
          throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
        }
        return;
      }
      if (!validator.isValid(object[key])) {
        throw new Error(validator.message);
      }
    });
}

function validateOptions(options) {
  return validate(sign_options_schema, false, options, 'options');
}

function validatePayload(payload) {
  return validate(registered_claims_schema, true, payload, 'payload');
}

const options_to_payload = {
  'audience': 'aud',
  'issuer': 'iss',
  'subject': 'sub',
  'jwtid': 'jti'
};

const options_for_objects = [
  'expiresIn',
  'notBefore',
  'noTimestamp',
  'audience',
  'issuer',
  'subject',
  'jwtid',
];

module.exports = function (payload, secretOrPrivateKey, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }

  const isObjectPayload = typeof payload === 'object' &&
                        !Buffer.isBuffer(payload);

  const header = Object.assign({
    alg: options.algorithm || 'HS256',
    typ: isObjectPayload ? 'JWT' : undefined,
    kid: options.keyid
  }, options.header);

  function failure(err) {
    if (callback) {
      return callback(err);
    }
    throw err;
  }

  if (!secretOrPrivateKey && options.algorithm !== 'none') {
    return failure(new Error('secretOrPrivateKey must have a value'));
  }

  if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
    try {
      secretOrPrivateKey = createPrivateKey(secretOrPrivateKey)
    } catch (_) {
      try {
        secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === 'string' ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey)
      } catch (_) {
        return failure(new Error('secretOrPrivateKey is not valid key material'));
      }
    }
  }

  if (header.alg.startsWith('HS') && secretOrPrivateKey.type !== 'secret') {
    return failure(new Error((`secretOrPrivateKey must be a symmetric key when using ${header.alg}`)))
  } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
    if (secretOrPrivateKey.type !== 'private') {
      return failure(new Error((`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`)))
    }
    if (!options.allowInsecureKeySizes &&
      !header.alg.startsWith('ES') &&
      secretOrPrivateKey.asymmetricKeyDetails !== undefined && //KeyObject.asymmetricKeyDetails is supported in Node 15+
      secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
      return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
    }
  }

  if (typeof payload === 'undefined') {
    return failure(new Error('payload is required'));
  } else if (isObjectPayload) {
    try {
      validatePayload(payload);
    }
    catch (error) {
      return failure(error);
    }
    if (!options.mutatePayload) {
      payload = Object.assign({},payload);
    }
  } else {
    const invalid_options = options_for_objects.filter(function (opt) {
      return typeof options[opt] !== 'undefined';
    });

    if (invalid_options.length > 0) {
      return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + (typeof payload ) + ' payload'));
    }
  }

  if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
    return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
  }

  if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
    return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
  }

  try {
    validateOptions(options);
  }
  catch (error) {
    return failure(error);
  }

  if (!options.allowInvalidAsymmetricKeyTypes) {
    try {
      validateAsymmetricKey(header.alg, secretOrPrivateKey);
    } catch (error) {
      return failure(error);
    }
  }

  const timestamp = payload.iat || Math.floor(Date.now() / 1000);

  if (options.noTimestamp) {
    delete payload.iat;
  } else if (isObjectPayload) {
    payload.iat = timestamp;
  }

  if (typeof options.notBefore !== 'undefined') {
    try {
      payload.nbf = timespan(options.notBefore, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.nbf === 'undefined') {
      return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
    try {
      payload.exp = timespan(options.expiresIn, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.exp === 'undefined') {
      return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  Object.keys(options_to_payload).forEach(function (key) {
    const claim = options_to_payload[key];
    if (typeof options[key] !== 'undefined') {
      if (typeof payload[claim] !== 'undefined') {
        return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
      }
      payload[claim] = options[key];
    }
  });

  const encoding = options.encoding || 'utf8';

  if (typeof callback === 'function') {
    callback = callback && once(callback);

    jws.createSign({
      header: header,
      privateKey: secretOrPrivateKey,
      payload: payload,
      encoding: encoding
    }).once('error', callback)
      .once('done', function (signature) {
        // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
        if(!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`))
        }
        callback(null, signature);
      });
  } else {
    let signature = jws.sign({header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding});
    // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
    if(!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
      throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`)
    }
    return signature
  }
};


},
"../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/verify.js"(module, __unused_rspack_exports, __webpack_require__) {
const JsonWebTokenError = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/JsonWebTokenError.js");
const NotBeforeError = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/NotBeforeError.js");
const TokenExpiredError = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/TokenExpiredError.js");
const decode = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/decode.js");
const timespan = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/timespan.js");
const validateAsymmetricKey = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js");
const PS_SUPPORTED = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/lib/psSupported.js");
const jws = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/index.js");
const {KeyObject, createSecretKey, createPublicKey} = __webpack_require__("crypto");

const PUB_KEY_ALGS = ['RS256', 'RS384', 'RS512'];
const EC_KEY_ALGS = ['ES256', 'ES384', 'ES512'];
const RSA_KEY_ALGS = ['RS256', 'RS384', 'RS512'];
const HS_ALGS = ['HS256', 'HS384', 'HS512'];

if (PS_SUPPORTED) {
  PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
  RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
}

module.exports = function (jwtString, secretOrPublicKey, options, callback) {
  if ((typeof options === 'function') && !callback) {
    callback = options;
    options = {};
  }

  if (!options) {
    options = {};
  }

  //clone this object since we are going to mutate it.
  options = Object.assign({}, options);

  let done;

  if (callback) {
    done = callback;
  } else {
    done = function(err, data) {
      if (err) throw err;
      return data;
    };
  }

  if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {
    return done(new JsonWebTokenError('clockTimestamp must be a number'));
  }

  if (options.nonce !== undefined && (typeof options.nonce !== 'string' || options.nonce.trim() === '')) {
    return done(new JsonWebTokenError('nonce must be a non-empty string'));
  }

  if (options.allowInvalidAsymmetricKeyTypes !== undefined && typeof options.allowInvalidAsymmetricKeyTypes !== 'boolean') {
    return done(new JsonWebTokenError('allowInvalidAsymmetricKeyTypes must be a boolean'));
  }

  const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);

  if (!jwtString){
    return done(new JsonWebTokenError('jwt must be provided'));
  }

  if (typeof jwtString !== 'string') {
    return done(new JsonWebTokenError('jwt must be a string'));
  }

  const parts = jwtString.split('.');

  if (parts.length !== 3){
    return done(new JsonWebTokenError('jwt malformed'));
  }

  let decodedToken;

  try {
    decodedToken = decode(jwtString, { complete: true });
  } catch(err) {
    return done(err);
  }

  if (!decodedToken) {
    return done(new JsonWebTokenError('invalid token'));
  }

  const header = decodedToken.header;
  let getSecret;

  if(typeof secretOrPublicKey === 'function') {
    if(!callback) {
      return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));
    }

    getSecret = secretOrPublicKey;
  }
  else {
    getSecret = function(header, secretCallback) {
      return secretCallback(null, secretOrPublicKey);
    };
  }

  return getSecret(header, function(err, secretOrPublicKey) {
    if(err) {
      return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));
    }

    const hasSignature = parts[2].trim() !== '';

    if (!hasSignature && secretOrPublicKey){
      return done(new JsonWebTokenError('jwt signature is required'));
    }

    if (hasSignature && !secretOrPublicKey) {
      return done(new JsonWebTokenError('secret or public key must be provided'));
    }

    if (!hasSignature && !options.algorithms) {
      return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
    }

    if (secretOrPublicKey != null && !(secretOrPublicKey instanceof KeyObject)) {
      try {
        secretOrPublicKey = createPublicKey(secretOrPublicKey);
      } catch (_) {
        try {
          secretOrPublicKey = createSecretKey(typeof secretOrPublicKey === 'string' ? Buffer.from(secretOrPublicKey) : secretOrPublicKey);
        } catch (_) {
          return done(new JsonWebTokenError('secretOrPublicKey is not valid key material'))
        }
      }
    }

    if (!options.algorithms) {
      if (secretOrPublicKey.type === 'secret') {
        options.algorithms = HS_ALGS;
      } else if (['rsa', 'rsa-pss'].includes(secretOrPublicKey.asymmetricKeyType)) {
        options.algorithms = RSA_KEY_ALGS
      } else if (secretOrPublicKey.asymmetricKeyType === 'ec') {
        options.algorithms = EC_KEY_ALGS
      } else {
        options.algorithms = PUB_KEY_ALGS
      }
    }

    if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
      return done(new JsonWebTokenError('invalid algorithm'));
    }

    if (header.alg.startsWith('HS') && secretOrPublicKey.type !== 'secret') {
      return done(new JsonWebTokenError((`secretOrPublicKey must be a symmetric key when using ${header.alg}`)))
    } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey.type !== 'public') {
      return done(new JsonWebTokenError((`secretOrPublicKey must be an asymmetric key when using ${header.alg}`)))
    }

    if (!options.allowInvalidAsymmetricKeyTypes) {
      try {
        validateAsymmetricKey(header.alg, secretOrPublicKey);
      } catch (e) {
        return done(e);
      }
    }

    let valid;

    try {
      valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);
    } catch (e) {
      return done(e);
    }

    if (!valid) {
      return done(new JsonWebTokenError('invalid signature'));
    }

    const payload = decodedToken.payload;

    if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
      if (typeof payload.nbf !== 'number') {
        return done(new JsonWebTokenError('invalid nbf value'));
      }
      if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
        return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
      }
    }

    if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
      if (typeof payload.exp !== 'number') {
        return done(new JsonWebTokenError('invalid exp value'));
      }
      if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
      }
    }

    if (options.audience) {
      const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
      const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];

      const match = target.some(function (targetAudience) {
        return audiences.some(function (audience) {
          return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
        });
      });

      if (!match) {
        return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
      }
    }

    if (options.issuer) {
      const invalid_issuer =
              (typeof options.issuer === 'string' && payload.iss !== options.issuer) ||
              (Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1);

      if (invalid_issuer) {
        return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
      }
    }

    if (options.subject) {
      if (payload.sub !== options.subject) {
        return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
      }
    }

    if (options.jwtid) {
      if (payload.jti !== options.jwtid) {
        return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
      }
    }

    if (options.nonce) {
      if (payload.nonce !== options.nonce) {
        return done(new JsonWebTokenError('jwt nonce invalid. expected: ' + options.nonce));
      }
    }

    if (options.maxAge) {
      if (typeof payload.iat !== 'number') {
        return done(new JsonWebTokenError('iat required when maxAge is specified'));
      }

      const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
      if (typeof maxAgeTimestamp === 'undefined') {
        return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
      if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));
      }
    }

    if (options.complete === true) {
      const signature = decodedToken.signature;

      return done(null, {
        header: header,
        payload: payload,
        signature: signature
      });
    }

    return done(null, payload);
  });
};


},
"../../node_modules/.pnpm/jwa@2.0.1/node_modules/jwa/index.js"(module, __unused_rspack_exports, __webpack_require__) {
var Buffer = (__webpack_require__("../../node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js")/* .Buffer */.Buffer);
var crypto = __webpack_require__("crypto");
var formatEcdsa = __webpack_require__("../../node_modules/.pnpm/ecdsa-sig-formatter@1.0.11/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js");
var util = __webpack_require__("util");

var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".'
var MSG_INVALID_SECRET = 'secret must be a string or buffer';
var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';

var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
if (supportsKeyObjects) {
  MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
  MSG_INVALID_SECRET += 'or a KeyObject';
}

function checkIsPublicKey(key) {
  if (Buffer.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.type !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.asymmetricKeyType !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
};

function checkIsPrivateKey(key) {
  if (Buffer.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (typeof key === 'object') {
    return;
  }

  throw typeError(MSG_INVALID_SIGNER_KEY);
};

function checkIsSecretKey(key) {
  if (Buffer.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return key;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (key.type !== 'secret') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_SECRET);
  }
}

function fromBase64(base64) {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function toBase64(base64url) {
  base64url = base64url.toString();

  var padding = 4 - base64url.length % 4;
  if (padding !== 4) {
    for (var i = 0; i < padding; ++i) {
      base64url += '=';
    }
  }

  return base64url
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
}

function typeError(template) {
  var args = [].slice.call(arguments, 1);
  var errMsg = util.format.bind(util, template).apply(null, args);
  return new TypeError(errMsg);
}

function bufferOrString(obj) {
  return Buffer.isBuffer(obj) || typeof obj === 'string';
}

function normalizeInput(thing) {
  if (!bufferOrString(thing))
    thing = JSON.stringify(thing);
  return thing;
}

function createHmacSigner(bits) {
  return function sign(thing, secret) {
    checkIsSecretKey(secret);
    thing = normalizeInput(thing);
    var hmac = crypto.createHmac('sha' + bits, secret);
    var sig = (hmac.update(thing), hmac.digest('base64'))
    return fromBase64(sig);
  }
}

var bufferEqual;
var timingSafeEqual = 'timingSafeEqual' in crypto ? function timingSafeEqual(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  return crypto.timingSafeEqual(a, b)
} : function timingSafeEqual(a, b) {
  if (!bufferEqual) {
    bufferEqual = __webpack_require__("../../node_modules/.pnpm/buffer-equal-constant-time@1.0.1/node_modules/buffer-equal-constant-time/index.js");
  }

  return bufferEqual(a, b)
}

function createHmacVerifier(bits) {
  return function verify(thing, signature, secret) {
    var computedSig = createHmacSigner(bits)(thing, secret);
    return timingSafeEqual(Buffer.from(signature), Buffer.from(computedSig));
  }
}

function createKeySigner(bits) {
 return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    // Even though we are specifying "RSA" here, this works with ECDSA
    // keys as well.
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
    return fromBase64(sig);
  }
}

function createKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify(publicKey, signature, 'base64');
  }
}

function createPSSKeySigner(bits) {
  return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign({
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, 'base64'));
    return fromBase64(sig);
  }
}

function createPSSKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify({
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, signature, 'base64');
  }
}

function createECDSASigner(bits) {
  var inner = createKeySigner(bits);
  return function sign() {
    var signature = inner.apply(null, arguments);
    signature = formatEcdsa.derToJose(signature, 'ES' + bits);
    return signature;
  };
}

function createECDSAVerifer(bits) {
  var inner = createKeyVerifier(bits);
  return function verify(thing, signature, publicKey) {
    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
    var result = inner(thing, signature, publicKey);
    return result;
  };
}

function createNoneSigner() {
  return function sign() {
    return '';
  }
}

function createNoneVerifier() {
  return function verify(thing, signature) {
    return signature === '';
  }
}

module.exports = function jwa(algorithm) {
  var signerFactories = {
    hs: createHmacSigner,
    rs: createKeySigner,
    ps: createPSSKeySigner,
    es: createECDSASigner,
    none: createNoneSigner,
  }
  var verifierFactories = {
    hs: createHmacVerifier,
    rs: createKeyVerifier,
    ps: createPSSKeyVerifier,
    es: createECDSAVerifer,
    none: createNoneVerifier,
  }
  var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
  if (!match)
    throw typeError(MSG_INVALID_ALGORITHM, algorithm);
  var algo = (match[1] || match[3]).toLowerCase();
  var bits = match[2];

  return {
    sign: signerFactories[algo](bits),
    verify: verifierFactories[algo](bits),
  }
};


},
"../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/index.js"(__unused_rspack_module, exports, __webpack_require__) {
/*global exports*/
var SignStream = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/sign-stream.js");
var VerifyStream = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/verify-stream.js");

var ALGORITHMS = [
  'HS256', 'HS384', 'HS512',
  'RS256', 'RS384', 'RS512',
  'PS256', 'PS384', 'PS512',
  'ES256', 'ES384', 'ES512'
];

exports.ALGORITHMS = ALGORITHMS;
exports.sign = SignStream.sign;
exports.verify = VerifyStream.verify;
exports.decode = VerifyStream.decode;
exports.isValid = VerifyStream.isValid;
exports.createSign = function createSign(opts) {
  return new SignStream(opts);
};
exports.createVerify = function createVerify(opts) {
  return new VerifyStream(opts);
};


},
"../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/data-stream.js"(module, __unused_rspack_exports, __webpack_require__) {
/*global module, process*/
var Buffer = (__webpack_require__("../../node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js")/* .Buffer */.Buffer);
var Stream = __webpack_require__("stream");
var util = __webpack_require__("util");

function DataStream(data) {
  this.buffer = null;
  this.writable = true;
  this.readable = true;

  // No input
  if (!data) {
    this.buffer = Buffer.alloc(0);
    return this;
  }

  // Stream
  if (typeof data.pipe === 'function') {
    this.buffer = Buffer.alloc(0);
    data.pipe(this);
    return this;
  }

  // Buffer or String
  // or Object (assumedly a passworded key)
  if (data.length || typeof data === 'object') {
    this.buffer = data;
    this.writable = false;
    process.nextTick(function () {
      this.emit('end', data);
      this.readable = false;
      this.emit('close');
    }.bind(this));
    return this;
  }

  throw new TypeError('Unexpected data type ('+ typeof data + ')');
}
util.inherits(DataStream, Stream);

DataStream.prototype.write = function write(data) {
  this.buffer = Buffer.concat([this.buffer, Buffer.from(data)]);
  this.emit('data', data);
};

DataStream.prototype.end = function end(data) {
  if (data)
    this.write(data);
  this.emit('end', data);
  this.emit('close');
  this.writable = false;
  this.readable = false;
};

module.exports = DataStream;


},
"../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/sign-stream.js"(module, __unused_rspack_exports, __webpack_require__) {
/*global module*/
var Buffer = (__webpack_require__("../../node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js")/* .Buffer */.Buffer);
var DataStream = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/data-stream.js");
var jwa = __webpack_require__("../../node_modules/.pnpm/jwa@2.0.1/node_modules/jwa/index.js");
var Stream = __webpack_require__("stream");
var toString = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/tostring.js");
var util = __webpack_require__("util");

function base64url(string, encoding) {
  return Buffer
    .from(string, encoding)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function jwsSecuredInput(header, payload, encoding) {
  encoding = encoding || 'utf8';
  var encodedHeader = base64url(toString(header), 'binary');
  var encodedPayload = base64url(toString(payload), encoding);
  return util.format('%s.%s', encodedHeader, encodedPayload);
}

function jwsSign(opts) {
  var header = opts.header;
  var payload = opts.payload;
  var secretOrKey = opts.secret || opts.privateKey;
  var encoding = opts.encoding;
  var algo = jwa(header.alg);
  var securedInput = jwsSecuredInput(header, payload, encoding);
  var signature = algo.sign(securedInput, secretOrKey);
  return util.format('%s.%s', securedInput, signature);
}

function SignStream(opts) {
  var secret = opts.secret;
  secret = secret == null ? opts.privateKey : secret;
  secret = secret == null ? opts.key : secret;
  if (/^hs/i.test(opts.header.alg) === true && secret == null) {
    throw new TypeError('secret must be a string or buffer or a KeyObject')
  }
  var secretStream = new DataStream(secret);
  this.readable = true;
  this.header = opts.header;
  this.encoding = opts.encoding;
  this.secret = this.privateKey = this.key = secretStream;
  this.payload = new DataStream(opts.payload);
  this.secret.once('close', function () {
    if (!this.payload.writable && this.readable)
      this.sign();
  }.bind(this));

  this.payload.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.sign();
  }.bind(this));
}
util.inherits(SignStream, Stream);

SignStream.prototype.sign = function sign() {
  try {
    var signature = jwsSign({
      header: this.header,
      payload: this.payload.buffer,
      secret: this.secret.buffer,
      encoding: this.encoding
    });
    this.emit('done', signature);
    this.emit('data', signature);
    this.emit('end');
    this.readable = false;
    return signature;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

SignStream.sign = jwsSign;

module.exports = SignStream;


},
"../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/tostring.js"(module, __unused_rspack_exports, __webpack_require__) {
/*global module*/
var Buffer = (__webpack_require__("buffer")/* .Buffer */.Buffer);

module.exports = function toString(obj) {
  if (typeof obj === 'string')
    return obj;
  if (typeof obj === 'number' || Buffer.isBuffer(obj))
    return obj.toString();
  return JSON.stringify(obj);
};


},
"../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/verify-stream.js"(module, __unused_rspack_exports, __webpack_require__) {
/*global module*/
var Buffer = (__webpack_require__("../../node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js")/* .Buffer */.Buffer);
var DataStream = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/data-stream.js");
var jwa = __webpack_require__("../../node_modules/.pnpm/jwa@2.0.1/node_modules/jwa/index.js");
var Stream = __webpack_require__("stream");
var toString = __webpack_require__("../../node_modules/.pnpm/jws@4.0.1/node_modules/jws/lib/tostring.js");
var util = __webpack_require__("util");
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function isObject(thing) {
  return Object.prototype.toString.call(thing) === '[object Object]';
}

function safeJsonParse(thing) {
  if (isObject(thing))
    return thing;
  try { return JSON.parse(thing); }
  catch (e) { return undefined; }
}

function headerFromJWS(jwsSig) {
  var encodedHeader = jwsSig.split('.', 1)[0];
  return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));
}

function securedInputFromJWS(jwsSig) {
  return jwsSig.split('.', 2).join('.');
}

function signatureFromJWS(jwsSig) {
  return jwsSig.split('.')[2];
}

function payloadFromJWS(jwsSig, encoding) {
  encoding = encoding || 'utf8';
  var payload = jwsSig.split('.')[1];
  return Buffer.from(payload, 'base64').toString(encoding);
}

function isValidJws(string) {
  return JWS_REGEX.test(string) && !!headerFromJWS(string);
}

function jwsVerify(jwsSig, algorithm, secretOrKey) {
  if (!algorithm) {
    var err = new Error("Missing algorithm parameter for jws.verify");
    err.code = "MISSING_ALGORITHM";
    throw err;
  }
  jwsSig = toString(jwsSig);
  var signature = signatureFromJWS(jwsSig);
  var securedInput = securedInputFromJWS(jwsSig);
  var algo = jwa(algorithm);
  return algo.verify(securedInput, signature, secretOrKey);
}

function jwsDecode(jwsSig, opts) {
  opts = opts || {};
  jwsSig = toString(jwsSig);

  if (!isValidJws(jwsSig))
    return null;

  var header = headerFromJWS(jwsSig);

  if (!header)
    return null;

  var payload = payloadFromJWS(jwsSig);
  if (header.typ === 'JWT' || opts.json)
    payload = JSON.parse(payload, opts.encoding);

  return {
    header: header,
    payload: payload,
    signature: signatureFromJWS(jwsSig)
  };
}

function VerifyStream(opts) {
  opts = opts || {};
  var secretOrKey = opts.secret;
  secretOrKey = secretOrKey == null ? opts.publicKey : secretOrKey;
  secretOrKey = secretOrKey == null ? opts.key : secretOrKey;
  if (/^hs/i.test(opts.algorithm) === true && secretOrKey == null) {
    throw new TypeError('secret must be a string or buffer or a KeyObject')
  }
  var secretStream = new DataStream(secretOrKey);
  this.readable = true;
  this.algorithm = opts.algorithm;
  this.encoding = opts.encoding;
  this.secret = this.publicKey = this.key = secretStream;
  this.signature = new DataStream(opts.signature);
  this.secret.once('close', function () {
    if (!this.signature.writable && this.readable)
      this.verify();
  }.bind(this));

  this.signature.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.verify();
  }.bind(this));
}
util.inherits(VerifyStream, Stream);
VerifyStream.prototype.verify = function verify() {
  try {
    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
    var obj = jwsDecode(this.signature.buffer, this.encoding);
    this.emit('done', valid, obj);
    this.emit('data', valid);
    this.emit('end');
    this.readable = false;
    return valid;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

VerifyStream.decode = jwsDecode;
VerifyStream.isValid = isValidJws;
VerifyStream.verify = jwsVerify;

module.exports = VerifyStream;


},
"../../node_modules/.pnpm/lodash.includes@4.3.0/node_modules/lodash.includes/index.js"(module) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = includes;


},
"../../node_modules/.pnpm/lodash.isboolean@3.0.3/node_modules/lodash.isboolean/index.js"(module) {
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && objectToString.call(value) == boolTag);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isBoolean;


},
"../../node_modules/.pnpm/lodash.isinteger@4.0.4/node_modules/lodash.isinteger/index.js"(module) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = isInteger;


},
"../../node_modules/.pnpm/lodash.isnumber@3.0.3/node_modules/lodash.isnumber/index.js"(module) {
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && objectToString.call(value) == numberTag);
}

module.exports = isNumber;


},
"../../node_modules/.pnpm/lodash.isplainobject@4.0.6/node_modules/lodash.isplainobject/index.js"(module) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;


},
"../../node_modules/.pnpm/lodash.isstring@4.0.1/node_modules/lodash.isstring/index.js"(module) {
/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;


},
"../../node_modules/.pnpm/lodash.once@4.1.1/node_modules/lodash.once/index.js"(module) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


},
"../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"(module) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


},
"../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/auth_header.js"(module) {
"use strict";


var re = /(\S+)\s+(\S+)/;



function parseAuthHeader(hdrValue) {
    if (typeof hdrValue !== 'string') {
        return null;
    }
    var matches = hdrValue.match(re);
    return matches && { scheme: matches[1], value: matches[2] };
}



module.exports = {
    parse: parseAuthHeader
};


},
"../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/extract_jwt.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


var url = __webpack_require__("url"),
    auth_hdr = __webpack_require__("../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/auth_header.js");

// Note: express http converts all headers
// to lower case.
var AUTH_HEADER = "authorization",
    LEGACY_AUTH_SCHEME = "JWT", 
    BEARER_AUTH_SCHEME = 'bearer';


var extractors = {};


extractors.fromHeader = function (header_name) {
    return function (request) {
        var token = null;
        if (request.headers[header_name]) {
            token = request.headers[header_name];
        }
        return token;
    };
};



extractors.fromBodyField = function (field_name) {
    return function (request) {
        var token = null;
        if (request.body && Object.prototype.hasOwnProperty.call(request.body, field_name)) {
            token = request.body[field_name];
        }
        return token;
    };
};



extractors.fromUrlQueryParameter = function (param_name) {
    return function (request) {
        var token = null,
            parsed_url = url.parse(request.url, true);
        if (parsed_url.query && Object.prototype.hasOwnProperty.call(parsed_url.query, param_name)) {
            token = parsed_url.query[param_name];
        }
        return token;
    };
};



extractors.fromAuthHeaderWithScheme = function (auth_scheme) {
    var auth_scheme_lower = auth_scheme.toLowerCase();
    return function (request) {

        var token = null;
        if (request.headers[AUTH_HEADER]) {
            var auth_params = auth_hdr.parse(request.headers[AUTH_HEADER]);
            if (auth_params && auth_scheme_lower === auth_params.scheme.toLowerCase()) {
                token = auth_params.value;
            }
        }
        return token;
    };
};



extractors.fromAuthHeaderAsBearerToken = function () {
    return extractors.fromAuthHeaderWithScheme(BEARER_AUTH_SCHEME);
};


extractors.fromExtractors = function(extractors) {
    if (!Array.isArray(extractors)) {
        throw new TypeError('extractors.fromExtractors expects an array')
    }
    
    return function (request) {
        var token = null;
        var index = 0;
        while(!token && index < extractors.length) {
            token = extractors[index].call(this, request);
            index ++;
        }
        return token;
    }
};


/**
 * This extractor mimics the behavior of the v1.*.* extraction logic.
 *
 * This extractor exists only to provide an easy transition from the v1.*.* API to the v2.0.0
 * API.
 *
 * This extractor first checks the auth header, if it doesn't find a token there then it checks the 
 * specified body field and finally the url query parameters.
 * 
 * @param options
 *          authScheme: Expected scheme when JWT can be found in HTTP Authorize header. Default is JWT. 
 *          tokenBodyField: Field in request body containing token. Default is auth_token.
 *          tokenQueryParameterName: Query parameter name containing the token. Default is auth_token.
 */
extractors.versionOneCompatibility = function (options) {
    var authScheme = options.authScheme || LEGACY_AUTH_SCHEME,
        bodyField = options.tokenBodyField || 'auth_token',
        queryParam = options.tokenQueryParameterName || 'auth_token';

    return function (request) {
        var authHeaderExtractor = extractors.fromAuthHeaderWithScheme(authScheme);
        var token =  authHeaderExtractor(request);
        
        if (!token) {
            var bodyExtractor = extractors.fromBodyField(bodyField);
            token = bodyExtractor(request);
        }

        if (!token) {
            var queryExtractor = extractors.fromUrlQueryParameter(queryParam);
            token = queryExtractor(request);
        }

        return token;
    };
}



/**
 * Export the Jwt extraction functions
 */
module.exports = extractors;


},
"../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/helpers/assign.js"(module) {
// note: This is a polyfill to Object.assign to support old nodejs versions (0.10 / 0.12) where
// Object.assign doesn't exist.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
module.exports = function(target, varArgs) {
  if (target == null) { // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) { // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
};


},
"../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


var Strategy = __webpack_require__("../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/strategy.js"),
    ExtractJwt = __webpack_require__("../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/extract_jwt.js");


module.exports = {
    Strategy: Strategy,
    ExtractJwt : ExtractJwt
};


},
"../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/strategy.js"(module, __unused_rspack_exports, __webpack_require__) {
var passport = __webpack_require__("../../node_modules/.pnpm/passport-strategy@1.0.0/node_modules/passport-strategy/lib/index.js")
    , auth_hdr = __webpack_require__("../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/auth_header.js")
    , util = __webpack_require__("util")
    , url = __webpack_require__("url")
    , assign = __webpack_require__("../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/helpers/assign.js");



/**
 * Strategy constructor
 *
 * @param options
 *          secretOrKey: String or buffer containing the secret or PEM-encoded public key. Required unless secretOrKeyProvider is provided.
 *          secretOrKeyProvider: callback in the format secretOrKeyProvider(request, rawJwtToken, done)`,
 *                               which should call done with a secret or PEM-encoded public key
 *                               (asymmetric) for the given undecoded jwt token string and  request
 *                               combination. done has the signature function done(err, secret).
 *                               REQUIRED unless `secretOrKey` is provided.
 *          jwtFromRequest: (REQUIRED) Function that accepts a request as the only parameter and returns the either JWT as a string or null
 *          issuer: If defined issuer will be verified against this value
 *          audience: If defined audience will be verified against this value
 *          algorithms: List of strings with the names of the allowed algorithms. For instance, ["HS256", "HS384"].
 *          ignoreExpiration: if true do not validate the expiration of the token.
 *          passReqToCallback: If true the verify callback will be called with args (request, jwt_payload, done_callback).
 * @param verify - Verify callback with args (jwt_payload, done_callback) if passReqToCallback is false,
 *                 (request, jwt_payload, done_callback) if true.
 */
function JwtStrategy(options, verify) {

    passport.Strategy.call(this);
    this.name = 'jwt';

    this._secretOrKeyProvider = options.secretOrKeyProvider;

    if (options.secretOrKey) {
        if (this._secretOrKeyProvider) {
          	throw new TypeError('JwtStrategy has been given both a secretOrKey and a secretOrKeyProvider');
        }
        this._secretOrKeyProvider = function (request, rawJwtToken, done) {
            done(null, options.secretOrKey)
        };
    }

    if (!this._secretOrKeyProvider) {
        throw new TypeError('JwtStrategy requires a secret or key');
    }

    this._verify = verify;
    if (!this._verify) {
        throw new TypeError('JwtStrategy requires a verify callback');
    }

    this._jwtFromRequest = options.jwtFromRequest;
    if (!this._jwtFromRequest) {
        throw new TypeError('JwtStrategy requires a function to retrieve jwt from requests (see option jwtFromRequest)');
    }

    this._passReqToCallback = options.passReqToCallback;
    var jsonWebTokenOptions = options.jsonWebTokenOptions || {};
    //for backwards compatibility, still allowing you to pass
    //audience / issuer / algorithms / ignoreExpiration
    //on the options.
    this._verifOpts = assign({}, jsonWebTokenOptions, {
      audience: options.audience,
      issuer: options.issuer,
      algorithms: options.algorithms,
      ignoreExpiration: !!options.ignoreExpiration
    });

}
util.inherits(JwtStrategy, passport.Strategy);



/**
 * Allow for injection of JWT Verifier.
 *
 * This improves testability by allowing tests to cleanly isolate failures in the JWT Verification
 * process from failures in the passport related mechanics of authentication.
 *
 * Note that this should only be replaced in tests.
 */
JwtStrategy.JwtVerifier = __webpack_require__("../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/verify_jwt.js");



/**
 * Authenticate request based on JWT obtained from header or post body
 */
JwtStrategy.prototype.authenticate = function(req, options) {
    var self = this;

    var token = self._jwtFromRequest(req);

    if (!token) {
        return self.fail(new Error("No auth token"));
    }

    this._secretOrKeyProvider(req, token, function(secretOrKeyError, secretOrKey) {
        if (secretOrKeyError) {
            self.fail(secretOrKeyError)
        } else {
            // Verify the JWT
            JwtStrategy.JwtVerifier(token, secretOrKey, self._verifOpts, function(jwt_err, payload) {
                if (jwt_err) {
                    return self.fail(jwt_err);
                } else {
                    // Pass the parsed token to the user
                    var verified = function(err, user, info) {
                        if(err) {
                            return self.error(err);
                        } else if (!user) {
                            return self.fail(info);
                        } else {
                            return self.success(user, info);
                        }
                    };

                    try {
                        if (self._passReqToCallback) {
                            self._verify(req, payload, verified);
                        } else {
                            self._verify(payload, verified);
                        }
                    } catch(ex) {
                        self.error(ex);
                    }
                }
            });
        }
    });
};



/**
 * Export the Jwt Strategy
 */
 module.exports = JwtStrategy;


},
"../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/verify_jwt.js"(module, __unused_rspack_exports, __webpack_require__) {
var jwt = __webpack_require__("../../node_modules/.pnpm/jsonwebtoken@9.0.3/node_modules/jsonwebtoken/index.js");

module.exports  = function(token, secretOrKey, options, callback) {
    return jwt.verify(token, secretOrKey, options, callback);
};


},
"../../node_modules/.pnpm/passport-strategy@1.0.0/node_modules/passport-strategy/lib/index.js"(module, exports, __webpack_require__) {
/**
 * Module dependencies.
 */
var Strategy = __webpack_require__("../../node_modules/.pnpm/passport-strategy@1.0.0/node_modules/passport-strategy/lib/strategy.js");


/**
 * Expose `Strategy` directly from package.
 */
exports = module.exports = Strategy;

/**
 * Export constructors.
 */
exports.Strategy = Strategy;


},
"../../node_modules/.pnpm/passport-strategy@1.0.0/node_modules/passport-strategy/lib/strategy.js"(module) {
/**
 * Creates an instance of `Strategy`.
 *
 * @constructor
 * @api public
 */
function Strategy() {
}

/**
 * Authenticate request.
 *
 * This function must be overridden by subclasses.  In abstract form, it always
 * throws an exception.
 *
 * @param {Object} req The request to authenticate.
 * @param {Object} [options] Strategy-specific options.
 * @api public
 */
Strategy.prototype.authenticate = function(req, options) {
  throw new Error('Strategy#authenticate must be overridden by subclass');
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;


},
"../../node_modules/.pnpm/pg-cloudflare@1.3.0/node_modules/pg-cloudflare/dist/empty.js"(__unused_rspack_module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// This is an empty module that is served up when outside of a workerd environment
// See the `exports` field in package.json
exports["default"] = {};
//# sourceMappingURL=empty.js.map

},
"../../node_modules/.pnpm/pg-connection-string@2.11.0/node_modules/pg-connection-string/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


//Parse method copied from https://github.com/brianc/node-postgres
//Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)
//MIT License

//parses a connection string
function parse(str, options = {}) {
  //unix socket
  if (str.charAt(0) === '/') {
    const config = str.split(' ')
    return { host: config[0], database: config[1] }
  }

  // Check for empty host in URL

  const config = {}
  let result
  let dummyHost = false
  if (/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {
    // Ensure spaces are encoded as %20
    str = encodeURI(str).replace(/%25(\d\d)/g, '%$1')
  }

  try {
    try {
      result = new URL(str, 'postgres://base')
    } catch (e) {
      // The URL is invalid so try again with a dummy host
      result = new URL(str.replace('@/', '@___DUMMY___/'), 'postgres://base')
      dummyHost = true
    }
  } catch (err) {
    // Remove the input from the error message to avoid leaking sensitive information
    err.input && (err.input = '*****REDACTED*****')
    throw err
  }

  // We'd like to use Object.fromEntries() here but Node.js 10 does not support it
  for (const entry of result.searchParams.entries()) {
    config[entry[0]] = entry[1]
  }

  config.user = config.user || decodeURIComponent(result.username)
  config.password = config.password || decodeURIComponent(result.password)

  if (result.protocol == 'socket:') {
    config.host = decodeURI(result.pathname)
    config.database = result.searchParams.get('db')
    config.client_encoding = result.searchParams.get('encoding')
    return config
  }
  const hostname = dummyHost ? '' : result.hostname
  if (!config.host) {
    // Only set the host if there is no equivalent query param.
    config.host = decodeURIComponent(hostname)
  } else if (hostname && /^%2f/i.test(hostname)) {
    // Only prepend the hostname to the pathname if it is not a URL encoded Unix socket host.
    result.pathname = hostname + result.pathname
  }
  if (!config.port) {
    // Only set the port if there is no equivalent query param.
    config.port = result.port
  }

  const pathname = result.pathname.slice(1) || null
  config.database = pathname ? decodeURI(pathname) : null

  if (config.ssl === 'true' || config.ssl === '1') {
    config.ssl = true
  }

  if (config.ssl === '0') {
    config.ssl = false
  }

  if (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) {
    config.ssl = {}
  }

  // Only try to load fs if we expect to read from the disk
  const fs = config.sslcert || config.sslkey || config.sslrootcert ? __webpack_require__("fs") : null

  if (config.sslcert) {
    config.ssl.cert = fs.readFileSync(config.sslcert).toString()
  }

  if (config.sslkey) {
    config.ssl.key = fs.readFileSync(config.sslkey).toString()
  }

  if (config.sslrootcert) {
    config.ssl.ca = fs.readFileSync(config.sslrootcert).toString()
  }

  if (options.useLibpqCompat && config.uselibpqcompat) {
    throw new Error('Both useLibpqCompat and uselibpqcompat are set. Please use only one of them.')
  }

  if (config.uselibpqcompat === 'true' || options.useLibpqCompat) {
    switch (config.sslmode) {
      case 'disable': {
        config.ssl = false
        break
      }
      case 'prefer': {
        config.ssl.rejectUnauthorized = false
        break
      }
      case 'require': {
        if (config.sslrootcert) {
          // If a root CA is specified, behavior of `sslmode=require` will be the same as that of `verify-ca`
          config.ssl.checkServerIdentity = function () {}
        } else {
          config.ssl.rejectUnauthorized = false
        }
        break
      }
      case 'verify-ca': {
        if (!config.ssl.ca) {
          throw new Error(
            'SECURITY WARNING: Using sslmode=verify-ca requires specifying a CA with sslrootcert. If a public CA is used, verify-ca allows connections to a server that somebody else may have registered with the CA, making you vulnerable to Man-in-the-Middle attacks. Either specify a custom CA certificate with sslrootcert parameter or use sslmode=verify-full for proper security.'
          )
        }
        config.ssl.checkServerIdentity = function () {}
        break
      }
      case 'verify-full': {
        break
      }
    }
  } else {
    switch (config.sslmode) {
      case 'disable': {
        config.ssl = false
        break
      }
      case 'prefer':
      case 'require':
      case 'verify-ca':
      case 'verify-full': {
        if (config.sslmode !== 'verify-full') {
          deprecatedSslModeWarning(config.sslmode)
        }
        break
      }
      case 'no-verify': {
        config.ssl.rejectUnauthorized = false
        break
      }
    }
  }

  return config
}

// convert pg-connection-string ssl config to a ClientConfig.ConnectionOptions
function toConnectionOptions(sslConfig) {
  const connectionOptions = Object.entries(sslConfig).reduce((c, [key, value]) => {
    // we explicitly check for undefined and null instead of `if (value)` because some
    // options accept falsy values. Example: `ssl.rejectUnauthorized = false`
    if (value !== undefined && value !== null) {
      c[key] = value
    }

    return c
  }, {})

  return connectionOptions
}

// convert pg-connection-string config to a ClientConfig
function toClientConfig(config) {
  const poolConfig = Object.entries(config).reduce((c, [key, value]) => {
    if (key === 'ssl') {
      const sslConfig = value

      if (typeof sslConfig === 'boolean') {
        c[key] = sslConfig
      }

      if (typeof sslConfig === 'object') {
        c[key] = toConnectionOptions(sslConfig)
      }
    } else if (value !== undefined && value !== null) {
      if (key === 'port') {
        // when port is not specified, it is converted into an empty string
        // we want to avoid NaN or empty string as a values in ClientConfig
        if (value !== '') {
          const v = parseInt(value, 10)
          if (isNaN(v)) {
            throw new Error(`Invalid ${key}: ${value}`)
          }

          c[key] = v
        }
      } else {
        c[key] = value
      }
    }

    return c
  }, {})

  return poolConfig
}

// parses a connection string into ClientConfig
function parseIntoClientConfig(str) {
  return toClientConfig(parse(str))
}

function deprecatedSslModeWarning(sslmode) {
  if (!deprecatedSslModeWarning.warned && typeof process !== 'undefined' && process.emitWarning) {
    deprecatedSslModeWarning.warned = true
    process.emitWarning(`SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

To prepare for this change:
- If you want the current behavior, explicitly use 'sslmode=verify-full'
- If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=${sslmode}'

See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.`)
  }
}

module.exports = parse

parse.parse = parse
parse.toClientConfig = toClientConfig
parse.parseIntoClientConfig = parseIntoClientConfig


},
"../../node_modules/.pnpm/pg-int8@1.0.1/node_modules/pg-int8/index.js"(module) {
"use strict";


// selected so (BASE - 1) * 0x100000000 + 0xffffffff is a safe integer
var BASE = 1000000;

function readInt8(buffer) {
	var high = buffer.readInt32BE(0);
	var low = buffer.readUInt32BE(4);
	var sign = '';

	if (high < 0) {
		high = ~high + (low === 0);
		low = (~low + 1) >>> 0;
		sign = '-';
	}

	var result = '';
	var carry;
	var t;
	var digits;
	var pad;
	var l;
	var i;

	{
		carry = high % BASE;
		high = high / BASE >>> 0;

		t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		pad = '';
		l = 6 - digits.length;

		for (i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		carry = high % BASE;
		high = high / BASE >>> 0;

		t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		pad = '';
		l = 6 - digits.length;

		for (i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		carry = high % BASE;
		high = high / BASE >>> 0;

		t = 0x100000000 * carry + low;
		low = t / BASE >>> 0;
		digits = '' + (t - BASE * low);

		if (low === 0 && high === 0) {
			return sign + digits + result;
		}

		pad = '';
		l = 6 - digits.length;

		for (i = 0; i < l; i++) {
			pad += '0';
		}

		result = pad + digits + result;
	}

	{
		carry = high % BASE;
		t = 0x100000000 * carry + low;
		digits = '' + t % BASE;

		return sign + digits + result;
	}
}

module.exports = readInt8;


},
"../../node_modules/.pnpm/pg-pool@3.11.0_pg@8.18.0/node_modules/pg-pool/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";

const EventEmitter = (__webpack_require__("events")/* .EventEmitter */.EventEmitter)

const NOOP = function () {}

const removeWhere = (list, predicate) => {
  const i = list.findIndex(predicate)

  return i === -1 ? undefined : list.splice(i, 1)[0]
}

class IdleItem {
  constructor(client, idleListener, timeoutId) {
    this.client = client
    this.idleListener = idleListener
    this.timeoutId = timeoutId
  }
}

class PendingItem {
  constructor(callback) {
    this.callback = callback
  }
}

function throwOnDoubleRelease() {
  throw new Error('Release called on client which has already been released to the pool.')
}

function promisify(Promise, callback) {
  if (callback) {
    return { callback: callback, result: undefined }
  }
  let rej
  let res
  const cb = function (err, client) {
    err ? rej(err) : res(client)
  }
  const result = new Promise(function (resolve, reject) {
    res = resolve
    rej = reject
  }).catch((err) => {
    // replace the stack trace that leads to `TCP.onStreamRead` with one that leads back to the
    // application that created the query
    Error.captureStackTrace(err)
    throw err
  })
  return { callback: cb, result: result }
}

function makeIdleListener(pool, client) {
  return function idleListener(err) {
    err.client = client

    client.removeListener('error', idleListener)
    client.on('error', () => {
      pool.log('additional client error after disconnection due to error', err)
    })
    pool._remove(client)
    // TODO - document that once the pool emits an error
    // the client has already been closed & purged and is unusable
    pool.emit('error', err, client)
  }
}

class Pool extends EventEmitter {
  constructor(options, Client) {
    super()
    this.options = Object.assign({}, options)

    if (options != null && 'password' in options) {
      // "hiding" the password so it doesn't show up in stack traces
      // or if the client is console.logged
      Object.defineProperty(this.options, 'password', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: options.password,
      })
    }
    if (options != null && options.ssl && options.ssl.key) {
      // "hiding" the ssl->key so it doesn't show up in stack traces
      // or if the client is console.logged
      Object.defineProperty(this.options.ssl, 'key', {
        enumerable: false,
      })
    }

    this.options.max = this.options.max || this.options.poolSize || 10
    this.options.min = this.options.min || 0
    this.options.maxUses = this.options.maxUses || Infinity
    this.options.allowExitOnIdle = this.options.allowExitOnIdle || false
    this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0
    this.log = this.options.log || function () {}
    this.Client = this.options.Client || Client || (__webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/index.js")/* .Client */.Client)
    this.Promise = this.options.Promise || global.Promise

    if (typeof this.options.idleTimeoutMillis === 'undefined') {
      this.options.idleTimeoutMillis = 10000
    }

    this._clients = []
    this._idle = []
    this._expired = new WeakSet()
    this._pendingQueue = []
    this._endCallback = undefined
    this.ending = false
    this.ended = false
  }

  _isFull() {
    return this._clients.length >= this.options.max
  }

  _isAboveMin() {
    return this._clients.length > this.options.min
  }

  _pulseQueue() {
    this.log('pulse queue')
    if (this.ended) {
      this.log('pulse queue ended')
      return
    }
    if (this.ending) {
      this.log('pulse queue on ending')
      if (this._idle.length) {
        this._idle.slice().map((item) => {
          this._remove(item.client)
        })
      }
      if (!this._clients.length) {
        this.ended = true
        this._endCallback()
      }
      return
    }

    // if we don't have any waiting, do nothing
    if (!this._pendingQueue.length) {
      this.log('no queued requests')
      return
    }
    // if we don't have any idle clients and we have no more room do nothing
    if (!this._idle.length && this._isFull()) {
      return
    }
    const pendingItem = this._pendingQueue.shift()
    if (this._idle.length) {
      const idleItem = this._idle.pop()
      clearTimeout(idleItem.timeoutId)
      const client = idleItem.client
      client.ref && client.ref()
      const idleListener = idleItem.idleListener

      return this._acquireClient(client, pendingItem, idleListener, false)
    }
    if (!this._isFull()) {
      return this.newClient(pendingItem)
    }
    throw new Error('unexpected condition')
  }

  _remove(client, callback) {
    const removed = removeWhere(this._idle, (item) => item.client === client)

    if (removed !== undefined) {
      clearTimeout(removed.timeoutId)
    }

    this._clients = this._clients.filter((c) => c !== client)
    const context = this
    client.end(() => {
      context.emit('remove', client)

      if (typeof callback === 'function') {
        callback()
      }
    })
  }

  connect(cb) {
    if (this.ending) {
      const err = new Error('Cannot use a pool after calling end on the pool')
      return cb ? cb(err) : this.Promise.reject(err)
    }

    const response = promisify(this.Promise, cb)
    const result = response.result

    // if we don't have to connect a new client, don't do so
    if (this._isFull() || this._idle.length) {
      // if we have idle clients schedule a pulse immediately
      if (this._idle.length) {
        process.nextTick(() => this._pulseQueue())
      }

      if (!this.options.connectionTimeoutMillis) {
        this._pendingQueue.push(new PendingItem(response.callback))
        return result
      }

      const queueCallback = (err, res, done) => {
        clearTimeout(tid)
        response.callback(err, res, done)
      }

      const pendingItem = new PendingItem(queueCallback)

      // set connection timeout on checking out an existing client
      const tid = setTimeout(() => {
        // remove the callback from pending waiters because
        // we're going to call it with a timeout error
        removeWhere(this._pendingQueue, (i) => i.callback === queueCallback)
        pendingItem.timedOut = true
        response.callback(new Error('timeout exceeded when trying to connect'))
      }, this.options.connectionTimeoutMillis)

      if (tid.unref) {
        tid.unref()
      }

      this._pendingQueue.push(pendingItem)
      return result
    }

    this.newClient(new PendingItem(response.callback))

    return result
  }

  newClient(pendingItem) {
    const client = new this.Client(this.options)
    this._clients.push(client)
    const idleListener = makeIdleListener(this, client)

    this.log('checking client timeout')

    // connection timeout logic
    let tid
    let timeoutHit = false
    if (this.options.connectionTimeoutMillis) {
      tid = setTimeout(() => {
        this.log('ending client due to timeout')
        timeoutHit = true
        // force kill the node driver, and let libpq do its teardown
        client.connection ? client.connection.stream.destroy() : client.end()
      }, this.options.connectionTimeoutMillis)
    }

    this.log('connecting new client')
    client.connect((err) => {
      if (tid) {
        clearTimeout(tid)
      }
      client.on('error', idleListener)
      if (err) {
        this.log('client failed to connect', err)
        // remove the dead client from our list of clients
        this._clients = this._clients.filter((c) => c !== client)
        if (timeoutHit) {
          err = new Error('Connection terminated due to connection timeout', { cause: err })
        }

        // this client won’t be released, so move on immediately
        this._pulseQueue()

        if (!pendingItem.timedOut) {
          pendingItem.callback(err, undefined, NOOP)
        }
      } else {
        this.log('new client connected')

        if (this.options.maxLifetimeSeconds !== 0) {
          const maxLifetimeTimeout = setTimeout(() => {
            this.log('ending client due to expired lifetime')
            this._expired.add(client)
            const idleIndex = this._idle.findIndex((idleItem) => idleItem.client === client)
            if (idleIndex !== -1) {
              this._acquireClient(
                client,
                new PendingItem((err, client, clientRelease) => clientRelease()),
                idleListener,
                false
              )
            }
          }, this.options.maxLifetimeSeconds * 1000)

          maxLifetimeTimeout.unref()
          client.once('end', () => clearTimeout(maxLifetimeTimeout))
        }

        return this._acquireClient(client, pendingItem, idleListener, true)
      }
    })
  }

  // acquire a client for a pending work item
  _acquireClient(client, pendingItem, idleListener, isNew) {
    if (isNew) {
      this.emit('connect', client)
    }

    this.emit('acquire', client)

    client.release = this._releaseOnce(client, idleListener)

    client.removeListener('error', idleListener)

    if (!pendingItem.timedOut) {
      if (isNew && this.options.verify) {
        this.options.verify(client, (err) => {
          if (err) {
            client.release(err)
            return pendingItem.callback(err, undefined, NOOP)
          }

          pendingItem.callback(undefined, client, client.release)
        })
      } else {
        pendingItem.callback(undefined, client, client.release)
      }
    } else {
      if (isNew && this.options.verify) {
        this.options.verify(client, client.release)
      } else {
        client.release()
      }
    }
  }

  // returns a function that wraps _release and throws if called more than once
  _releaseOnce(client, idleListener) {
    let released = false

    return (err) => {
      if (released) {
        throwOnDoubleRelease()
      }

      released = true
      this._release(client, idleListener, err)
    }
  }

  // release a client back to the poll, include an error
  // to remove it from the pool
  _release(client, idleListener, err) {
    client.on('error', idleListener)

    client._poolUseCount = (client._poolUseCount || 0) + 1

    this.emit('release', err, client)

    // TODO(bmc): expose a proper, public interface _queryable and _ending
    if (err || this.ending || !client._queryable || client._ending || client._poolUseCount >= this.options.maxUses) {
      if (client._poolUseCount >= this.options.maxUses) {
        this.log('remove expended client')
      }

      return this._remove(client, this._pulseQueue.bind(this))
    }

    const isExpired = this._expired.has(client)
    if (isExpired) {
      this.log('remove expired client')
      this._expired.delete(client)
      return this._remove(client, this._pulseQueue.bind(this))
    }

    // idle timeout
    let tid
    if (this.options.idleTimeoutMillis && this._isAboveMin()) {
      tid = setTimeout(() => {
        if (this._isAboveMin()) {
          this.log('remove idle client')
          this._remove(client, this._pulseQueue.bind(this))
        }
      }, this.options.idleTimeoutMillis)

      if (this.options.allowExitOnIdle) {
        // allow Node to exit if this is all that's left
        tid.unref()
      }
    }

    if (this.options.allowExitOnIdle) {
      client.unref()
    }

    this._idle.push(new IdleItem(client, idleListener, tid))
    this._pulseQueue()
  }

  query(text, values, cb) {
    // guard clause against passing a function as the first parameter
    if (typeof text === 'function') {
      const response = promisify(this.Promise, text)
      setImmediate(function () {
        return response.callback(new Error('Passing a function as the first parameter to pool.query is not supported'))
      })
      return response.result
    }

    // allow plain text query without values
    if (typeof values === 'function') {
      cb = values
      values = undefined
    }
    const response = promisify(this.Promise, cb)
    cb = response.callback

    this.connect((err, client) => {
      if (err) {
        return cb(err)
      }

      let clientReleased = false
      const onError = (err) => {
        if (clientReleased) {
          return
        }
        clientReleased = true
        client.release(err)
        cb(err)
      }

      client.once('error', onError)
      this.log('dispatching query')
      try {
        client.query(text, values, (err, res) => {
          this.log('query dispatched')
          client.removeListener('error', onError)
          if (clientReleased) {
            return
          }
          clientReleased = true
          client.release(err)
          if (err) {
            return cb(err)
          }
          return cb(undefined, res)
        })
      } catch (err) {
        client.release(err)
        return cb(err)
      }
    })
    return response.result
  }

  end(cb) {
    this.log('ending')
    if (this.ending) {
      const err = new Error('Called end on pool more than once')
      return cb ? cb(err) : this.Promise.reject(err)
    }
    this.ending = true
    const promised = promisify(this.Promise, cb)
    this._endCallback = promised.callback
    this._pulseQueue()
    return promised.result
  }

  get waitingCount() {
    return this._pendingQueue.length
  }

  get idleCount() {
    return this._idle.length
  }

  get expiredCount() {
    return this._clients.reduce((acc, client) => acc + (this._expired.has(client) ? 1 : 0), 0)
  }

  get totalCount() {
    return this._clients.length
  }
}
module.exports = Pool


},
"../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/buffer-reader.js"(__unused_rspack_module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BufferReader = void 0;
const emptyBuffer = Buffer.allocUnsafe(0);
class BufferReader {
    constructor(offset = 0) {
        this.offset = offset;
        this.buffer = emptyBuffer;
        // TODO(bmc): support non-utf8 encoding?
        this.encoding = 'utf-8';
    }
    setBuffer(offset, buffer) {
        this.offset = offset;
        this.buffer = buffer;
    }
    int16() {
        const result = this.buffer.readInt16BE(this.offset);
        this.offset += 2;
        return result;
    }
    byte() {
        const result = this.buffer[this.offset];
        this.offset++;
        return result;
    }
    int32() {
        const result = this.buffer.readInt32BE(this.offset);
        this.offset += 4;
        return result;
    }
    uint32() {
        const result = this.buffer.readUInt32BE(this.offset);
        this.offset += 4;
        return result;
    }
    string(length) {
        const result = this.buffer.toString(this.encoding, this.offset, this.offset + length);
        this.offset += length;
        return result;
    }
    cstring() {
        const start = this.offset;
        let end = start;
        // eslint-disable-next-line no-empty
        while (this.buffer[end++] !== 0) { }
        this.offset = end;
        return this.buffer.toString(this.encoding, start, end - 1);
    }
    bytes(length) {
        const result = this.buffer.slice(this.offset, this.offset + length);
        this.offset += length;
        return result;
    }
}
exports.BufferReader = BufferReader;
//# sourceMappingURL=buffer-reader.js.map

},
"../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/buffer-writer.js"(__unused_rspack_module, exports) {
"use strict";

//binary data writer tuned for encoding binary specific to the postgres binary protocol
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Writer = void 0;
class Writer {
    constructor(size = 256) {
        this.size = size;
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.allocUnsafe(size);
    }
    ensure(size) {
        const remaining = this.buffer.length - this.offset;
        if (remaining < size) {
            const oldBuffer = this.buffer;
            // exponential growth factor of around ~ 1.5
            // https://stackoverflow.com/questions/2269063/buffer-growth-strategy
            const newSize = oldBuffer.length + (oldBuffer.length >> 1) + size;
            this.buffer = Buffer.allocUnsafe(newSize);
            oldBuffer.copy(this.buffer);
        }
    }
    addInt32(num) {
        this.ensure(4);
        this.buffer[this.offset++] = (num >>> 24) & 0xff;
        this.buffer[this.offset++] = (num >>> 16) & 0xff;
        this.buffer[this.offset++] = (num >>> 8) & 0xff;
        this.buffer[this.offset++] = (num >>> 0) & 0xff;
        return this;
    }
    addInt16(num) {
        this.ensure(2);
        this.buffer[this.offset++] = (num >>> 8) & 0xff;
        this.buffer[this.offset++] = (num >>> 0) & 0xff;
        return this;
    }
    addCString(string) {
        if (!string) {
            this.ensure(1);
        }
        else {
            const len = Buffer.byteLength(string);
            this.ensure(len + 1); // +1 for null terminator
            this.buffer.write(string, this.offset, 'utf-8');
            this.offset += len;
        }
        this.buffer[this.offset++] = 0; // null terminator
        return this;
    }
    addString(string = '') {
        const len = Buffer.byteLength(string);
        this.ensure(len);
        this.buffer.write(string, this.offset);
        this.offset += len;
        return this;
    }
    add(otherBuffer) {
        this.ensure(otherBuffer.length);
        otherBuffer.copy(this.buffer, this.offset);
        this.offset += otherBuffer.length;
        return this;
    }
    join(code) {
        if (code) {
            this.buffer[this.headerPosition] = code;
            //length is everything in this packet minus the code
            const length = this.offset - (this.headerPosition + 1);
            this.buffer.writeInt32BE(length, this.headerPosition + 1);
        }
        return this.buffer.slice(code ? 0 : 5, this.offset);
    }
    flush(code) {
        const result = this.join(code);
        this.offset = 5;
        this.headerPosition = 0;
        this.buffer = Buffer.allocUnsafe(this.size);
        return result;
    }
}
exports.Writer = Writer;
//# sourceMappingURL=buffer-writer.js.map

},
"../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/index.js"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseError = exports.serialize = exports.parse = void 0;
const messages_1 = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/messages.js");
Object.defineProperty(exports, "DatabaseError", ({ enumerable: true, get: function () { return messages_1.DatabaseError; } }));
const serializer_1 = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/serializer.js");
Object.defineProperty(exports, "serialize", ({ enumerable: true, get: function () { return serializer_1.serialize; } }));
const parser_1 = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/parser.js");
function parse(stream, callback) {
    const parser = new parser_1.Parser();
    stream.on('data', (buffer) => parser.parse(buffer, callback));
    return new Promise((resolve) => stream.on('end', () => resolve()));
}
exports.parse = parse;
//# sourceMappingURL=index.js.map

},
"../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/messages.js"(__unused_rspack_module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoticeMessage = exports.DataRowMessage = exports.CommandCompleteMessage = exports.ReadyForQueryMessage = exports.NotificationResponseMessage = exports.BackendKeyDataMessage = exports.AuthenticationMD5Password = exports.ParameterStatusMessage = exports.ParameterDescriptionMessage = exports.RowDescriptionMessage = exports.Field = exports.CopyResponse = exports.CopyDataMessage = exports.DatabaseError = exports.copyDone = exports.emptyQuery = exports.replicationStart = exports.portalSuspended = exports.noData = exports.closeComplete = exports.bindComplete = exports.parseComplete = void 0;
exports.parseComplete = {
    name: 'parseComplete',
    length: 5,
};
exports.bindComplete = {
    name: 'bindComplete',
    length: 5,
};
exports.closeComplete = {
    name: 'closeComplete',
    length: 5,
};
exports.noData = {
    name: 'noData',
    length: 5,
};
exports.portalSuspended = {
    name: 'portalSuspended',
    length: 5,
};
exports.replicationStart = {
    name: 'replicationStart',
    length: 4,
};
exports.emptyQuery = {
    name: 'emptyQuery',
    length: 4,
};
exports.copyDone = {
    name: 'copyDone',
    length: 4,
};
class DatabaseError extends Error {
    constructor(message, length, name) {
        super(message);
        this.length = length;
        this.name = name;
    }
}
exports.DatabaseError = DatabaseError;
class CopyDataMessage {
    constructor(length, chunk) {
        this.length = length;
        this.chunk = chunk;
        this.name = 'copyData';
    }
}
exports.CopyDataMessage = CopyDataMessage;
class CopyResponse {
    constructor(length, name, binary, columnCount) {
        this.length = length;
        this.name = name;
        this.binary = binary;
        this.columnTypes = new Array(columnCount);
    }
}
exports.CopyResponse = CopyResponse;
class Field {
    constructor(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, format) {
        this.name = name;
        this.tableID = tableID;
        this.columnID = columnID;
        this.dataTypeID = dataTypeID;
        this.dataTypeSize = dataTypeSize;
        this.dataTypeModifier = dataTypeModifier;
        this.format = format;
    }
}
exports.Field = Field;
class RowDescriptionMessage {
    constructor(length, fieldCount) {
        this.length = length;
        this.fieldCount = fieldCount;
        this.name = 'rowDescription';
        this.fields = new Array(this.fieldCount);
    }
}
exports.RowDescriptionMessage = RowDescriptionMessage;
class ParameterDescriptionMessage {
    constructor(length, parameterCount) {
        this.length = length;
        this.parameterCount = parameterCount;
        this.name = 'parameterDescription';
        this.dataTypeIDs = new Array(this.parameterCount);
    }
}
exports.ParameterDescriptionMessage = ParameterDescriptionMessage;
class ParameterStatusMessage {
    constructor(length, parameterName, parameterValue) {
        this.length = length;
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
        this.name = 'parameterStatus';
    }
}
exports.ParameterStatusMessage = ParameterStatusMessage;
class AuthenticationMD5Password {
    constructor(length, salt) {
        this.length = length;
        this.salt = salt;
        this.name = 'authenticationMD5Password';
    }
}
exports.AuthenticationMD5Password = AuthenticationMD5Password;
class BackendKeyDataMessage {
    constructor(length, processID, secretKey) {
        this.length = length;
        this.processID = processID;
        this.secretKey = secretKey;
        this.name = 'backendKeyData';
    }
}
exports.BackendKeyDataMessage = BackendKeyDataMessage;
class NotificationResponseMessage {
    constructor(length, processId, channel, payload) {
        this.length = length;
        this.processId = processId;
        this.channel = channel;
        this.payload = payload;
        this.name = 'notification';
    }
}
exports.NotificationResponseMessage = NotificationResponseMessage;
class ReadyForQueryMessage {
    constructor(length, status) {
        this.length = length;
        this.status = status;
        this.name = 'readyForQuery';
    }
}
exports.ReadyForQueryMessage = ReadyForQueryMessage;
class CommandCompleteMessage {
    constructor(length, text) {
        this.length = length;
        this.text = text;
        this.name = 'commandComplete';
    }
}
exports.CommandCompleteMessage = CommandCompleteMessage;
class DataRowMessage {
    constructor(length, fields) {
        this.length = length;
        this.fields = fields;
        this.name = 'dataRow';
        this.fieldCount = fields.length;
    }
}
exports.DataRowMessage = DataRowMessage;
class NoticeMessage {
    constructor(length, message) {
        this.length = length;
        this.message = message;
        this.name = 'notice';
    }
}
exports.NoticeMessage = NoticeMessage;
//# sourceMappingURL=messages.js.map

},
"../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/parser.js"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parser = void 0;
const messages_1 = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/messages.js");
const buffer_reader_1 = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/buffer-reader.js");
// every message is prefixed with a single bye
const CODE_LENGTH = 1;
// every message has an int32 length which includes itself but does
// NOT include the code in the length
const LEN_LENGTH = 4;
const HEADER_LENGTH = CODE_LENGTH + LEN_LENGTH;
// A placeholder for a `BackendMessage`’s length value that will be set after construction.
const LATEINIT_LENGTH = -1;
const emptyBuffer = Buffer.allocUnsafe(0);
class Parser {
    constructor(opts) {
        this.buffer = emptyBuffer;
        this.bufferLength = 0;
        this.bufferOffset = 0;
        this.reader = new buffer_reader_1.BufferReader();
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === 'binary') {
            throw new Error('Binary mode not supported yet');
        }
        this.mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || 'text';
    }
    parse(buffer, callback) {
        this.mergeBuffer(buffer);
        const bufferFullLength = this.bufferOffset + this.bufferLength;
        let offset = this.bufferOffset;
        while (offset + HEADER_LENGTH <= bufferFullLength) {
            // code is 1 byte long - it identifies the message type
            const code = this.buffer[offset];
            // length is 1 Uint32BE - it is the length of the message EXCLUDING the code
            const length = this.buffer.readUInt32BE(offset + CODE_LENGTH);
            const fullMessageLength = CODE_LENGTH + length;
            if (fullMessageLength + offset <= bufferFullLength) {
                const message = this.handlePacket(offset + HEADER_LENGTH, code, length, this.buffer);
                callback(message);
                offset += fullMessageLength;
            }
            else {
                break;
            }
        }
        if (offset === bufferFullLength) {
            // No more use for the buffer
            this.buffer = emptyBuffer;
            this.bufferLength = 0;
            this.bufferOffset = 0;
        }
        else {
            // Adjust the cursors of remainingBuffer
            this.bufferLength = bufferFullLength - offset;
            this.bufferOffset = offset;
        }
    }
    mergeBuffer(buffer) {
        if (this.bufferLength > 0) {
            const newLength = this.bufferLength + buffer.byteLength;
            const newFullLength = newLength + this.bufferOffset;
            if (newFullLength > this.buffer.byteLength) {
                // We can't concat the new buffer with the remaining one
                let newBuffer;
                if (newLength <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) {
                    // We can move the relevant part to the beginning of the buffer instead of allocating a new buffer
                    newBuffer = this.buffer;
                }
                else {
                    // Allocate a new larger buffer
                    let newBufferLength = this.buffer.byteLength * 2;
                    while (newLength >= newBufferLength) {
                        newBufferLength *= 2;
                    }
                    newBuffer = Buffer.allocUnsafe(newBufferLength);
                }
                // Move the remaining buffer to the new one
                this.buffer.copy(newBuffer, 0, this.bufferOffset, this.bufferOffset + this.bufferLength);
                this.buffer = newBuffer;
                this.bufferOffset = 0;
            }
            // Concat the new buffer with the remaining one
            buffer.copy(this.buffer, this.bufferOffset + this.bufferLength);
            this.bufferLength = newLength;
        }
        else {
            this.buffer = buffer;
            this.bufferOffset = 0;
            this.bufferLength = buffer.byteLength;
        }
    }
    handlePacket(offset, code, length, bytes) {
        const { reader } = this;
        // NOTE: This undesirably retains the buffer in `this.reader` if the `parse*Message` calls below throw. However, those should only throw in the case of a protocol error, which normally results in the reader being discarded.
        reader.setBuffer(offset, bytes);
        let message;
        switch (code) {
            case 50 /* MessageCodes.BindComplete */:
                message = messages_1.bindComplete;
                break;
            case 49 /* MessageCodes.ParseComplete */:
                message = messages_1.parseComplete;
                break;
            case 51 /* MessageCodes.CloseComplete */:
                message = messages_1.closeComplete;
                break;
            case 110 /* MessageCodes.NoData */:
                message = messages_1.noData;
                break;
            case 115 /* MessageCodes.PortalSuspended */:
                message = messages_1.portalSuspended;
                break;
            case 99 /* MessageCodes.CopyDone */:
                message = messages_1.copyDone;
                break;
            case 87 /* MessageCodes.ReplicationStart */:
                message = messages_1.replicationStart;
                break;
            case 73 /* MessageCodes.EmptyQuery */:
                message = messages_1.emptyQuery;
                break;
            case 68 /* MessageCodes.DataRow */:
                message = parseDataRowMessage(reader);
                break;
            case 67 /* MessageCodes.CommandComplete */:
                message = parseCommandCompleteMessage(reader);
                break;
            case 90 /* MessageCodes.ReadyForQuery */:
                message = parseReadyForQueryMessage(reader);
                break;
            case 65 /* MessageCodes.NotificationResponse */:
                message = parseNotificationMessage(reader);
                break;
            case 82 /* MessageCodes.AuthenticationResponse */:
                message = parseAuthenticationResponse(reader, length);
                break;
            case 83 /* MessageCodes.ParameterStatus */:
                message = parseParameterStatusMessage(reader);
                break;
            case 75 /* MessageCodes.BackendKeyData */:
                message = parseBackendKeyData(reader);
                break;
            case 69 /* MessageCodes.ErrorMessage */:
                message = parseErrorMessage(reader, 'error');
                break;
            case 78 /* MessageCodes.NoticeMessage */:
                message = parseErrorMessage(reader, 'notice');
                break;
            case 84 /* MessageCodes.RowDescriptionMessage */:
                message = parseRowDescriptionMessage(reader);
                break;
            case 116 /* MessageCodes.ParameterDescriptionMessage */:
                message = parseParameterDescriptionMessage(reader);
                break;
            case 71 /* MessageCodes.CopyIn */:
                message = parseCopyInMessage(reader);
                break;
            case 72 /* MessageCodes.CopyOut */:
                message = parseCopyOutMessage(reader);
                break;
            case 100 /* MessageCodes.CopyData */:
                message = parseCopyData(reader, length);
                break;
            default:
                return new messages_1.DatabaseError('received invalid response: ' + code.toString(16), length, 'error');
        }
        reader.setBuffer(0, emptyBuffer);
        message.length = length;
        return message;
    }
}
exports.Parser = Parser;
const parseReadyForQueryMessage = (reader) => {
    const status = reader.string(1);
    return new messages_1.ReadyForQueryMessage(LATEINIT_LENGTH, status);
};
const parseCommandCompleteMessage = (reader) => {
    const text = reader.cstring();
    return new messages_1.CommandCompleteMessage(LATEINIT_LENGTH, text);
};
const parseCopyData = (reader, length) => {
    const chunk = reader.bytes(length - 4);
    return new messages_1.CopyDataMessage(LATEINIT_LENGTH, chunk);
};
const parseCopyInMessage = (reader) => parseCopyMessage(reader, 'copyInResponse');
const parseCopyOutMessage = (reader) => parseCopyMessage(reader, 'copyOutResponse');
const parseCopyMessage = (reader, messageName) => {
    const isBinary = reader.byte() !== 0;
    const columnCount = reader.int16();
    const message = new messages_1.CopyResponse(LATEINIT_LENGTH, messageName, isBinary, columnCount);
    for (let i = 0; i < columnCount; i++) {
        message.columnTypes[i] = reader.int16();
    }
    return message;
};
const parseNotificationMessage = (reader) => {
    const processId = reader.int32();
    const channel = reader.cstring();
    const payload = reader.cstring();
    return new messages_1.NotificationResponseMessage(LATEINIT_LENGTH, processId, channel, payload);
};
const parseRowDescriptionMessage = (reader) => {
    const fieldCount = reader.int16();
    const message = new messages_1.RowDescriptionMessage(LATEINIT_LENGTH, fieldCount);
    for (let i = 0; i < fieldCount; i++) {
        message.fields[i] = parseField(reader);
    }
    return message;
};
const parseField = (reader) => {
    const name = reader.cstring();
    const tableID = reader.uint32();
    const columnID = reader.int16();
    const dataTypeID = reader.uint32();
    const dataTypeSize = reader.int16();
    const dataTypeModifier = reader.int32();
    const mode = reader.int16() === 0 ? 'text' : 'binary';
    return new messages_1.Field(name, tableID, columnID, dataTypeID, dataTypeSize, dataTypeModifier, mode);
};
const parseParameterDescriptionMessage = (reader) => {
    const parameterCount = reader.int16();
    const message = new messages_1.ParameterDescriptionMessage(LATEINIT_LENGTH, parameterCount);
    for (let i = 0; i < parameterCount; i++) {
        message.dataTypeIDs[i] = reader.int32();
    }
    return message;
};
const parseDataRowMessage = (reader) => {
    const fieldCount = reader.int16();
    const fields = new Array(fieldCount);
    for (let i = 0; i < fieldCount; i++) {
        const len = reader.int32();
        // a -1 for length means the value of the field is null
        fields[i] = len === -1 ? null : reader.string(len);
    }
    return new messages_1.DataRowMessage(LATEINIT_LENGTH, fields);
};
const parseParameterStatusMessage = (reader) => {
    const name = reader.cstring();
    const value = reader.cstring();
    return new messages_1.ParameterStatusMessage(LATEINIT_LENGTH, name, value);
};
const parseBackendKeyData = (reader) => {
    const processID = reader.int32();
    const secretKey = reader.int32();
    return new messages_1.BackendKeyDataMessage(LATEINIT_LENGTH, processID, secretKey);
};
const parseAuthenticationResponse = (reader, length) => {
    const code = reader.int32();
    // TODO(bmc): maybe better types here
    const message = {
        name: 'authenticationOk',
        length,
    };
    switch (code) {
        case 0: // AuthenticationOk
            break;
        case 3: // AuthenticationCleartextPassword
            if (message.length === 8) {
                message.name = 'authenticationCleartextPassword';
            }
            break;
        case 5: // AuthenticationMD5Password
            if (message.length === 12) {
                message.name = 'authenticationMD5Password';
                const salt = reader.bytes(4);
                return new messages_1.AuthenticationMD5Password(LATEINIT_LENGTH, salt);
            }
            break;
        case 10: // AuthenticationSASL
            {
                message.name = 'authenticationSASL';
                message.mechanisms = [];
                let mechanism;
                do {
                    mechanism = reader.cstring();
                    if (mechanism) {
                        message.mechanisms.push(mechanism);
                    }
                } while (mechanism);
            }
            break;
        case 11: // AuthenticationSASLContinue
            message.name = 'authenticationSASLContinue';
            message.data = reader.string(length - 8);
            break;
        case 12: // AuthenticationSASLFinal
            message.name = 'authenticationSASLFinal';
            message.data = reader.string(length - 8);
            break;
        default:
            throw new Error('Unknown authenticationOk message type ' + code);
    }
    return message;
};
const parseErrorMessage = (reader, name) => {
    const fields = {};
    let fieldType = reader.string(1);
    while (fieldType !== '\0') {
        fields[fieldType] = reader.cstring();
        fieldType = reader.string(1);
    }
    const messageValue = fields.M;
    const message = name === 'notice'
        ? new messages_1.NoticeMessage(LATEINIT_LENGTH, messageValue)
        : new messages_1.DatabaseError(messageValue, LATEINIT_LENGTH, name);
    message.severity = fields.S;
    message.code = fields.C;
    message.detail = fields.D;
    message.hint = fields.H;
    message.position = fields.P;
    message.internalPosition = fields.p;
    message.internalQuery = fields.q;
    message.where = fields.W;
    message.schema = fields.s;
    message.table = fields.t;
    message.column = fields.c;
    message.dataType = fields.d;
    message.constraint = fields.n;
    message.file = fields.F;
    message.line = fields.L;
    message.routine = fields.R;
    return message;
};
//# sourceMappingURL=parser.js.map

},
"../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/serializer.js"(__unused_rspack_module, exports, __webpack_require__) {
"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serialize = void 0;
const buffer_writer_1 = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/buffer-writer.js");
const writer = new buffer_writer_1.Writer();
const startup = (opts) => {
    // protocol version
    writer.addInt16(3).addInt16(0);
    for (const key of Object.keys(opts)) {
        writer.addCString(key).addCString(opts[key]);
    }
    writer.addCString('client_encoding').addCString('UTF8');
    const bodyBuffer = writer.addCString('').flush();
    // this message is sent without a code
    const length = bodyBuffer.length + 4;
    return new buffer_writer_1.Writer().addInt32(length).add(bodyBuffer).flush();
};
const requestSsl = () => {
    const response = Buffer.allocUnsafe(8);
    response.writeInt32BE(8, 0);
    response.writeInt32BE(80877103, 4);
    return response;
};
const password = (password) => {
    return writer.addCString(password).flush(112 /* code.startup */);
};
const sendSASLInitialResponseMessage = function (mechanism, initialResponse) {
    // 0x70 = 'p'
    writer.addCString(mechanism).addInt32(Buffer.byteLength(initialResponse)).addString(initialResponse);
    return writer.flush(112 /* code.startup */);
};
const sendSCRAMClientFinalMessage = function (additionalData) {
    return writer.addString(additionalData).flush(112 /* code.startup */);
};
const query = (text) => {
    return writer.addCString(text).flush(81 /* code.query */);
};
const emptyArray = [];
const parse = (query) => {
    // expect something like this:
    // { name: 'queryName',
    //   text: 'select * from blah',
    //   types: ['int8', 'bool'] }
    // normalize missing query names to allow for null
    const name = query.name || '';
    if (name.length > 63) {
        console.error('Warning! Postgres only supports 63 characters for query names.');
        console.error('You supplied %s (%s)', name, name.length);
        console.error('This can cause conflicts and silent errors executing queries');
    }
    const types = query.types || emptyArray;
    const len = types.length;
    const buffer = writer
        .addCString(name) // name of query
        .addCString(query.text) // actual query text
        .addInt16(len);
    for (let i = 0; i < len; i++) {
        buffer.addInt32(types[i]);
    }
    return writer.flush(80 /* code.parse */);
};
const paramWriter = new buffer_writer_1.Writer();
const writeValues = function (values, valueMapper) {
    for (let i = 0; i < values.length; i++) {
        const mappedVal = valueMapper ? valueMapper(values[i], i) : values[i];
        if (mappedVal == null) {
            // add the param type (string) to the writer
            writer.addInt16(0 /* ParamType.STRING */);
            // write -1 to the param writer to indicate null
            paramWriter.addInt32(-1);
        }
        else if (mappedVal instanceof Buffer) {
            // add the param type (binary) to the writer
            writer.addInt16(1 /* ParamType.BINARY */);
            // add the buffer to the param writer
            paramWriter.addInt32(mappedVal.length);
            paramWriter.add(mappedVal);
        }
        else {
            // add the param type (string) to the writer
            writer.addInt16(0 /* ParamType.STRING */);
            paramWriter.addInt32(Buffer.byteLength(mappedVal));
            paramWriter.addString(mappedVal);
        }
    }
};
const bind = (config = {}) => {
    // normalize config
    const portal = config.portal || '';
    const statement = config.statement || '';
    const binary = config.binary || false;
    const values = config.values || emptyArray;
    const len = values.length;
    writer.addCString(portal).addCString(statement);
    writer.addInt16(len);
    writeValues(values, config.valueMapper);
    writer.addInt16(len);
    writer.add(paramWriter.flush());
    // all results use the same format code
    writer.addInt16(1);
    // format code
    writer.addInt16(binary ? 1 /* ParamType.BINARY */ : 0 /* ParamType.STRING */);
    return writer.flush(66 /* code.bind */);
};
const emptyExecute = Buffer.from([69 /* code.execute */, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00]);
const execute = (config) => {
    // this is the happy path for most queries
    if (!config || (!config.portal && !config.rows)) {
        return emptyExecute;
    }
    const portal = config.portal || '';
    const rows = config.rows || 0;
    const portalLength = Buffer.byteLength(portal);
    const len = 4 + portalLength + 1 + 4;
    // one extra bit for code
    const buff = Buffer.allocUnsafe(1 + len);
    buff[0] = 69 /* code.execute */;
    buff.writeInt32BE(len, 1);
    buff.write(portal, 5, 'utf-8');
    buff[portalLength + 5] = 0; // null terminate portal cString
    buff.writeUInt32BE(rows, buff.length - 4);
    return buff;
};
const cancel = (processID, secretKey) => {
    const buffer = Buffer.allocUnsafe(16);
    buffer.writeInt32BE(16, 0);
    buffer.writeInt16BE(1234, 4);
    buffer.writeInt16BE(5678, 6);
    buffer.writeInt32BE(processID, 8);
    buffer.writeInt32BE(secretKey, 12);
    return buffer;
};
const cstringMessage = (code, string) => {
    const stringLen = Buffer.byteLength(string);
    const len = 4 + stringLen + 1;
    // one extra bit for code
    const buffer = Buffer.allocUnsafe(1 + len);
    buffer[0] = code;
    buffer.writeInt32BE(len, 1);
    buffer.write(string, 5, 'utf-8');
    buffer[len] = 0; // null terminate cString
    return buffer;
};
const emptyDescribePortal = writer.addCString('P').flush(68 /* code.describe */);
const emptyDescribeStatement = writer.addCString('S').flush(68 /* code.describe */);
const describe = (msg) => {
    return msg.name
        ? cstringMessage(68 /* code.describe */, `${msg.type}${msg.name || ''}`)
        : msg.type === 'P'
            ? emptyDescribePortal
            : emptyDescribeStatement;
};
const close = (msg) => {
    const text = `${msg.type}${msg.name || ''}`;
    return cstringMessage(67 /* code.close */, text);
};
const copyData = (chunk) => {
    return writer.add(chunk).flush(100 /* code.copyFromChunk */);
};
const copyFail = (message) => {
    return cstringMessage(102 /* code.copyFail */, message);
};
const codeOnlyBuffer = (code) => Buffer.from([code, 0x00, 0x00, 0x00, 0x04]);
const flushBuffer = codeOnlyBuffer(72 /* code.flush */);
const syncBuffer = codeOnlyBuffer(83 /* code.sync */);
const endBuffer = codeOnlyBuffer(88 /* code.end */);
const copyDoneBuffer = codeOnlyBuffer(99 /* code.copyDone */);
const serialize = {
    startup,
    password,
    requestSsl,
    sendSASLInitialResponseMessage,
    sendSCRAMClientFinalMessage,
    query,
    parse,
    bind,
    execute,
    describe,
    close,
    flush: () => flushBuffer,
    sync: () => syncBuffer,
    end: () => endBuffer,
    copyData,
    copyDone: () => copyDoneBuffer,
    copyFail,
    cancel,
};
exports.serialize = serialize;
//# sourceMappingURL=serializer.js.map

},
"../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/index.js"(__unused_rspack_module, exports, __webpack_require__) {
var textParsers = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/textParsers.js");
var binaryParsers = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/binaryParsers.js");
var arrayParser = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/arrayParser.js");
var builtinTypes = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/builtins.js");

exports.getTypeParser = getTypeParser;
exports.setTypeParser = setTypeParser;
exports.arrayParser = arrayParser;
exports.builtins = builtinTypes;

var typeParsers = {
  text: {},
  binary: {}
};

//the empty parse function
function noParse (val) {
  return String(val);
};

//returns a function used to convert a specific type (specified by
//oid) into a result javascript type
//note: the oid can be obtained via the following sql query:
//SELECT oid FROM pg_type WHERE typname = 'TYPE_NAME_HERE';
function getTypeParser (oid, format) {
  format = format || 'text';
  if (!typeParsers[format]) {
    return noParse;
  }
  return typeParsers[format][oid] || noParse;
};

function setTypeParser (oid, format, parseFn) {
  if(typeof format == 'function') {
    parseFn = format;
    format = 'text';
  }
  typeParsers[format][oid] = parseFn;
};

textParsers.init(function(oid, converter) {
  typeParsers.text[oid] = converter;
});

binaryParsers.init(function(oid, converter) {
  typeParsers.binary[oid] = converter;
});


},
"../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/arrayParser.js"(module, __unused_rspack_exports, __webpack_require__) {
var array = __webpack_require__("../../node_modules/.pnpm/postgres-array@2.0.0/node_modules/postgres-array/index.js");

module.exports = {
  create: function (source, transform) {
    return {
      parse: function() {
        return array.parse(source, transform);
      }
    };
  }
};


},
"../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/binaryParsers.js"(module, __unused_rspack_exports, __webpack_require__) {
var parseInt64 = __webpack_require__("../../node_modules/.pnpm/pg-int8@1.0.1/node_modules/pg-int8/index.js");

var parseBits = function(data, bits, offset, invert, callback) {
  offset = offset || 0;
  invert = invert || false;
  callback = callback || function(lastValue, newValue, bits) { return (lastValue * Math.pow(2, bits)) + newValue; };
  var offsetBytes = offset >> 3;

  var inv = function(value) {
    if (invert) {
      return ~value & 0xff;
    }

    return value;
  };

  // read first (maybe partial) byte
  var mask = 0xff;
  var firstBits = 8 - (offset % 8);
  if (bits < firstBits) {
    mask = (0xff << (8 - bits)) & 0xff;
    firstBits = bits;
  }

  if (offset) {
    mask = mask >> (offset % 8);
  }

  var result = 0;
  if ((offset % 8) + bits >= 8) {
    result = callback(0, inv(data[offsetBytes]) & mask, firstBits);
  }

  // read bytes
  var bytes = (bits + offset) >> 3;
  for (var i = offsetBytes + 1; i < bytes; i++) {
    result = callback(result, inv(data[i]), 8);
  }

  // bits to read, that are not a complete byte
  var lastBits = (bits + offset) % 8;
  if (lastBits > 0) {
    result = callback(result, inv(data[bytes]) >> (8 - lastBits), lastBits);
  }

  return result;
};

var parseFloatFromBits = function(data, precisionBits, exponentBits) {
  var bias = Math.pow(2, exponentBits - 1) - 1;
  var sign = parseBits(data, 1);
  var exponent = parseBits(data, exponentBits, 1);

  if (exponent === 0) {
    return 0;
  }

  // parse mantissa
  var precisionBitsCounter = 1;
  var parsePrecisionBits = function(lastValue, newValue, bits) {
    if (lastValue === 0) {
      lastValue = 1;
    }

    for (var i = 1; i <= bits; i++) {
      precisionBitsCounter /= 2;
      if ((newValue & (0x1 << (bits - i))) > 0) {
        lastValue += precisionBitsCounter;
      }
    }

    return lastValue;
  };

  var mantissa = parseBits(data, precisionBits, exponentBits + 1, false, parsePrecisionBits);

  // special cases
  if (exponent == (Math.pow(2, exponentBits + 1) - 1)) {
    if (mantissa === 0) {
      return (sign === 0) ? Infinity : -Infinity;
    }

    return NaN;
  }

  // normale number
  return ((sign === 0) ? 1 : -1) * Math.pow(2, exponent - bias) * mantissa;
};

var parseInt16 = function(value) {
  if (parseBits(value, 1) == 1) {
    return -1 * (parseBits(value, 15, 1, true) + 1);
  }

  return parseBits(value, 15, 1);
};

var parseInt32 = function(value) {
  if (parseBits(value, 1) == 1) {
    return -1 * (parseBits(value, 31, 1, true) + 1);
  }

  return parseBits(value, 31, 1);
};

var parseFloat32 = function(value) {
  return parseFloatFromBits(value, 23, 8);
};

var parseFloat64 = function(value) {
  return parseFloatFromBits(value, 52, 11);
};

var parseNumeric = function(value) {
  var sign = parseBits(value, 16, 32);
  if (sign == 0xc000) {
    return NaN;
  }

  var weight = Math.pow(10000, parseBits(value, 16, 16));
  var result = 0;

  var digits = [];
  var ndigits = parseBits(value, 16);
  for (var i = 0; i < ndigits; i++) {
    result += parseBits(value, 16, 64 + (16 * i)) * weight;
    weight /= 10000;
  }

  var scale = Math.pow(10, parseBits(value, 16, 48));
  return ((sign === 0) ? 1 : -1) * Math.round(result * scale) / scale;
};

var parseDate = function(isUTC, value) {
  var sign = parseBits(value, 1);
  var rawValue = parseBits(value, 63, 1);

  // discard usecs and shift from 2000 to 1970
  var result = new Date((((sign === 0) ? 1 : -1) * rawValue / 1000) + 946684800000);

  if (!isUTC) {
    result.setTime(result.getTime() + result.getTimezoneOffset() * 60000);
  }

  // add microseconds to the date
  result.usec = rawValue % 1000;
  result.getMicroSeconds = function() {
    return this.usec;
  };
  result.setMicroSeconds = function(value) {
    this.usec = value;
  };
  result.getUTCMicroSeconds = function() {
    return this.usec;
  };

  return result;
};

var parseArray = function(value) {
  var dim = parseBits(value, 32);

  var flags = parseBits(value, 32, 32);
  var elementType = parseBits(value, 32, 64);

  var offset = 96;
  var dims = [];
  for (var i = 0; i < dim; i++) {
    // parse dimension
    dims[i] = parseBits(value, 32, offset);
    offset += 32;

    // ignore lower bounds
    offset += 32;
  }

  var parseElement = function(elementType) {
    // parse content length
    var length = parseBits(value, 32, offset);
    offset += 32;

    // parse null values
    if (length == 0xffffffff) {
      return null;
    }

    var result;
    if ((elementType == 0x17) || (elementType == 0x14)) {
      // int/bigint
      result = parseBits(value, length * 8, offset);
      offset += length * 8;
      return result;
    }
    else if (elementType == 0x19) {
      // string
      result = value.toString(this.encoding, offset >> 3, (offset += (length << 3)) >> 3);
      return result;
    }
    else {
      console.log("ERROR: ElementType not implemented: " + elementType);
    }
  };

  var parse = function(dimension, elementType) {
    var array = [];
    var i;

    if (dimension.length > 1) {
      var count = dimension.shift();
      for (i = 0; i < count; i++) {
        array[i] = parse(dimension, elementType);
      }
      dimension.unshift(count);
    }
    else {
      for (i = 0; i < dimension[0]; i++) {
        array[i] = parseElement(elementType);
      }
    }

    return array;
  };

  return parse(dims, elementType);
};

var parseText = function(value) {
  return value.toString('utf8');
};

var parseBool = function(value) {
  if(value === null) return null;
  return (parseBits(value, 8) > 0);
};

var init = function(register) {
  register(20, parseInt64);
  register(21, parseInt16);
  register(23, parseInt32);
  register(26, parseInt32);
  register(1700, parseNumeric);
  register(700, parseFloat32);
  register(701, parseFloat64);
  register(16, parseBool);
  register(1114, parseDate.bind(null, false));
  register(1184, parseDate.bind(null, true));
  register(1000, parseArray);
  register(1007, parseArray);
  register(1016, parseArray);
  register(1008, parseArray);
  register(1009, parseArray);
  register(25, parseText);
};

module.exports = {
  init: init
};


},
"../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/builtins.js"(module) {
/**
 * Following query was used to generate this file:

 SELECT json_object_agg(UPPER(PT.typname), PT.oid::int4 ORDER BY pt.oid)
 FROM pg_type PT
 WHERE typnamespace = (SELECT pgn.oid FROM pg_namespace pgn WHERE nspname = 'pg_catalog') -- Take only builting Postgres types with stable OID (extension types are not guaranted to be stable)
 AND typtype = 'b' -- Only basic types
 AND typelem = 0 -- Ignore aliases
 AND typisdefined -- Ignore undefined types
 */

module.exports = {
    BOOL: 16,
    BYTEA: 17,
    CHAR: 18,
    INT8: 20,
    INT2: 21,
    INT4: 23,
    REGPROC: 24,
    TEXT: 25,
    OID: 26,
    TID: 27,
    XID: 28,
    CID: 29,
    JSON: 114,
    XML: 142,
    PG_NODE_TREE: 194,
    SMGR: 210,
    PATH: 602,
    POLYGON: 604,
    CIDR: 650,
    FLOAT4: 700,
    FLOAT8: 701,
    ABSTIME: 702,
    RELTIME: 703,
    TINTERVAL: 704,
    CIRCLE: 718,
    MACADDR8: 774,
    MONEY: 790,
    MACADDR: 829,
    INET: 869,
    ACLITEM: 1033,
    BPCHAR: 1042,
    VARCHAR: 1043,
    DATE: 1082,
    TIME: 1083,
    TIMESTAMP: 1114,
    TIMESTAMPTZ: 1184,
    INTERVAL: 1186,
    TIMETZ: 1266,
    BIT: 1560,
    VARBIT: 1562,
    NUMERIC: 1700,
    REFCURSOR: 1790,
    REGPROCEDURE: 2202,
    REGOPER: 2203,
    REGOPERATOR: 2204,
    REGCLASS: 2205,
    REGTYPE: 2206,
    UUID: 2950,
    TXID_SNAPSHOT: 2970,
    PG_LSN: 3220,
    PG_NDISTINCT: 3361,
    PG_DEPENDENCIES: 3402,
    TSVECTOR: 3614,
    TSQUERY: 3615,
    GTSVECTOR: 3642,
    REGCONFIG: 3734,
    REGDICTIONARY: 3769,
    JSONB: 3802,
    REGNAMESPACE: 4089,
    REGROLE: 4096
};


},
"../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/textParsers.js"(module, __unused_rspack_exports, __webpack_require__) {
var array = __webpack_require__("../../node_modules/.pnpm/postgres-array@2.0.0/node_modules/postgres-array/index.js")
var arrayParser = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/lib/arrayParser.js");
var parseDate = __webpack_require__("../../node_modules/.pnpm/postgres-date@1.0.7/node_modules/postgres-date/index.js");
var parseInterval = __webpack_require__("../../node_modules/.pnpm/postgres-interval@1.2.0/node_modules/postgres-interval/index.js");
var parseByteA = __webpack_require__("../../node_modules/.pnpm/postgres-bytea@1.0.1/node_modules/postgres-bytea/index.js");

function allowNull (fn) {
  return function nullAllowed (value) {
    if (value === null) return value
    return fn(value)
  }
}

function parseBool (value) {
  if (value === null) return value
  return value === 'TRUE' ||
    value === 't' ||
    value === 'true' ||
    value === 'y' ||
    value === 'yes' ||
    value === 'on' ||
    value === '1';
}

function parseBoolArray (value) {
  if (!value) return null
  return array.parse(value, parseBool)
}

function parseBaseTenInt (string) {
  return parseInt(string, 10)
}

function parseIntegerArray (value) {
  if (!value) return null
  return array.parse(value, allowNull(parseBaseTenInt))
}

function parseBigIntegerArray (value) {
  if (!value) return null
  return array.parse(value, allowNull(function (entry) {
    return parseBigInteger(entry).trim()
  }))
}

var parsePointArray = function(value) {
  if(!value) { return null; }
  var p = arrayParser.create(value, function(entry) {
    if(entry !== null) {
      entry = parsePoint(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseFloatArray = function(value) {
  if(!value) { return null; }
  var p = arrayParser.create(value, function(entry) {
    if(entry !== null) {
      entry = parseFloat(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseStringArray = function(value) {
  if(!value) { return null; }

  var p = arrayParser.create(value);
  return p.parse();
};

var parseDateArray = function(value) {
  if (!value) { return null; }

  var p = arrayParser.create(value, function(entry) {
    if (entry !== null) {
      entry = parseDate(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseIntervalArray = function(value) {
  if (!value) { return null; }

  var p = arrayParser.create(value, function(entry) {
    if (entry !== null) {
      entry = parseInterval(entry);
    }
    return entry;
  });

  return p.parse();
};

var parseByteAArray = function(value) {
  if (!value) { return null; }

  return array.parse(value, allowNull(parseByteA));
};

var parseInteger = function(value) {
  return parseInt(value, 10);
};

var parseBigInteger = function(value) {
  var valStr = String(value);
  if (/^\d+$/.test(valStr)) { return valStr; }
  return value;
};

var parseJsonArray = function(value) {
  if (!value) { return null; }

  return array.parse(value, allowNull(JSON.parse));
};

var parsePoint = function(value) {
  if (value[0] !== '(') { return null; }

  value = value.substring( 1, value.length - 1 ).split(',');

  return {
    x: parseFloat(value[0])
  , y: parseFloat(value[1])
  };
};

var parseCircle = function(value) {
  if (value[0] !== '<' && value[1] !== '(') { return null; }

  var point = '(';
  var radius = '';
  var pointParsed = false;
  for (var i = 2; i < value.length - 1; i++){
    if (!pointParsed) {
      point += value[i];
    }

    if (value[i] === ')') {
      pointParsed = true;
      continue;
    } else if (!pointParsed) {
      continue;
    }

    if (value[i] === ','){
      continue;
    }

    radius += value[i];
  }
  var result = parsePoint(point);
  result.radius = parseFloat(radius);

  return result;
};

var init = function(register) {
  register(20, parseBigInteger); // int8
  register(21, parseInteger); // int2
  register(23, parseInteger); // int4
  register(26, parseInteger); // oid
  register(700, parseFloat); // float4/real
  register(701, parseFloat); // float8/double
  register(16, parseBool);
  register(1082, parseDate); // date
  register(1114, parseDate); // timestamp without timezone
  register(1184, parseDate); // timestamp
  register(600, parsePoint); // point
  register(651, parseStringArray); // cidr[]
  register(718, parseCircle); // circle
  register(1000, parseBoolArray);
  register(1001, parseByteAArray);
  register(1005, parseIntegerArray); // _int2
  register(1007, parseIntegerArray); // _int4
  register(1028, parseIntegerArray); // oid[]
  register(1016, parseBigIntegerArray); // _int8
  register(1017, parsePointArray); // point[]
  register(1021, parseFloatArray); // _float4
  register(1022, parseFloatArray); // _float8
  register(1231, parseFloatArray); // _numeric
  register(1014, parseStringArray); //char
  register(1015, parseStringArray); //varchar
  register(1008, parseStringArray);
  register(1009, parseStringArray);
  register(1040, parseStringArray); // macaddr[]
  register(1041, parseStringArray); // inet[]
  register(1115, parseDateArray); // timestamp without time zone[]
  register(1182, parseDateArray); // _date
  register(1185, parseDateArray); // timestamp with time zone[]
  register(1186, parseInterval);
  register(1187, parseIntervalArray);
  register(17, parseByteA);
  register(114, JSON.parse.bind(JSON)); // json
  register(3802, JSON.parse.bind(JSON)); // jsonb
  register(199, parseJsonArray); // json[]
  register(3807, parseJsonArray); // jsonb[]
  register(3907, parseStringArray); // numrange[]
  register(2951, parseStringArray); // uuid[]
  register(791, parseStringArray); // money[]
  register(1183, parseStringArray); // time[]
  register(1270, parseStringArray); // timetz[]
};

module.exports = {
  init: init
};


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/client.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const EventEmitter = (__webpack_require__("events")/* .EventEmitter */.EventEmitter)
const utils = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/utils.js")
const nodeUtils = __webpack_require__("util")
const sasl = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/sasl.js")
const TypeOverrides = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/type-overrides.js")

const ConnectionParameters = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/connection-parameters.js")
const Query = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/query.js")
const defaults = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/defaults.js")
const Connection = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/connection.js")
const crypto = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/utils.js")

const activeQueryDeprecationNotice = nodeUtils.deprecate(
  () => {},
  'Client.activeQuery is deprecated and will be removed in a future version.'
)

const queryQueueDeprecationNotice = nodeUtils.deprecate(
  () => {},
  'Client.queryQueue is deprecated and will be removed in a future version.'
)

const pgPassDeprecationNotice = nodeUtils.deprecate(
  () => {},
  'pgpass support is deprecated and will be removed in a future version. ' +
    'You can provide an async function as the password property to the Client/Pool constructor that returns a password instead. Within this funciton you can call the pgpass module in your own code.'
)

const byoPromiseDeprecationNotice = nodeUtils.deprecate(
  () => {},
  'Passing a custom Promise implementation to the Client/Pool constructor is deprecated and will be removed in a future version.'
)

class Client extends EventEmitter {
  constructor(config) {
    super()

    this.connectionParameters = new ConnectionParameters(config)
    this.user = this.connectionParameters.user
    this.database = this.connectionParameters.database
    this.port = this.connectionParameters.port
    this.host = this.connectionParameters.host

    // "hiding" the password so it doesn't show up in stack traces
    // or if the client is console.logged
    Object.defineProperty(this, 'password', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: this.connectionParameters.password,
    })

    this.replication = this.connectionParameters.replication

    const c = config || {}

    if (c.Promise) {
      byoPromiseDeprecationNotice()
    }
    this._Promise = c.Promise || global.Promise
    this._types = new TypeOverrides(c.types)
    this._ending = false
    this._ended = false
    this._connecting = false
    this._connected = false
    this._connectionError = false
    this._queryable = true
    this._activeQuery = null

    this.enableChannelBinding = Boolean(c.enableChannelBinding) // set true to use SCRAM-SHA-256-PLUS when offered
    this.connection =
      c.connection ||
      new Connection({
        stream: c.stream,
        ssl: this.connectionParameters.ssl,
        keepAlive: c.keepAlive || false,
        keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
        encoding: this.connectionParameters.client_encoding || 'utf8',
      })
    this._queryQueue = []
    this.binary = c.binary || defaults.binary
    this.processID = null
    this.secretKey = null
    this.ssl = this.connectionParameters.ssl || false
    // As with Password, make SSL->Key (the private key) non-enumerable.
    // It won't show up in stack traces
    // or if the client is console.logged
    if (this.ssl && this.ssl.key) {
      Object.defineProperty(this.ssl, 'key', {
        enumerable: false,
      })
    }

    this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0
  }

  get activeQuery() {
    activeQueryDeprecationNotice()
    return this._activeQuery
  }

  set activeQuery(val) {
    activeQueryDeprecationNotice()
    this._activeQuery = val
  }

  _getActiveQuery() {
    return this._activeQuery
  }

  _errorAllQueries(err) {
    const enqueueError = (query) => {
      process.nextTick(() => {
        query.handleError(err, this.connection)
      })
    }

    const activeQuery = this._getActiveQuery()
    if (activeQuery) {
      enqueueError(activeQuery)
      this._activeQuery = null
    }

    this._queryQueue.forEach(enqueueError)
    this._queryQueue.length = 0
  }

  _connect(callback) {
    const self = this
    const con = this.connection
    this._connectionCallback = callback

    if (this._connecting || this._connected) {
      const err = new Error('Client has already been connected. You cannot reuse a client.')
      process.nextTick(() => {
        callback(err)
      })
      return
    }
    this._connecting = true

    if (this._connectionTimeoutMillis > 0) {
      this.connectionTimeoutHandle = setTimeout(() => {
        con._ending = true
        con.stream.destroy(new Error('timeout expired'))
      }, this._connectionTimeoutMillis)

      if (this.connectionTimeoutHandle.unref) {
        this.connectionTimeoutHandle.unref()
      }
    }

    if (this.host && this.host.indexOf('/') === 0) {
      con.connect(this.host + '/.s.PGSQL.' + this.port)
    } else {
      con.connect(this.port, this.host)
    }

    // once connection is established send startup message
    con.on('connect', function () {
      if (self.ssl) {
        con.requestSsl()
      } else {
        con.startup(self.getStartupConf())
      }
    })

    con.on('sslconnect', function () {
      con.startup(self.getStartupConf())
    })

    this._attachListeners(con)

    con.once('end', () => {
      const error = this._ending ? new Error('Connection terminated') : new Error('Connection terminated unexpectedly')

      clearTimeout(this.connectionTimeoutHandle)
      this._errorAllQueries(error)
      this._ended = true

      if (!this._ending) {
        // if the connection is ended without us calling .end()
        // on this client then we have an unexpected disconnection
        // treat this as an error unless we've already emitted an error
        // during connection.
        if (this._connecting && !this._connectionError) {
          if (this._connectionCallback) {
            this._connectionCallback(error)
          } else {
            this._handleErrorEvent(error)
          }
        } else if (!this._connectionError) {
          this._handleErrorEvent(error)
        }
      }

      process.nextTick(() => {
        this.emit('end')
      })
    })
  }

  connect(callback) {
    if (callback) {
      this._connect(callback)
      return
    }

    return new this._Promise((resolve, reject) => {
      this._connect((error) => {
        if (error) {
          reject(error)
        } else {
          resolve(this)
        }
      })
    })
  }

  _attachListeners(con) {
    // password request handling
    con.on('authenticationCleartextPassword', this._handleAuthCleartextPassword.bind(this))
    // password request handling
    con.on('authenticationMD5Password', this._handleAuthMD5Password.bind(this))
    // password request handling (SASL)
    con.on('authenticationSASL', this._handleAuthSASL.bind(this))
    con.on('authenticationSASLContinue', this._handleAuthSASLContinue.bind(this))
    con.on('authenticationSASLFinal', this._handleAuthSASLFinal.bind(this))
    con.on('backendKeyData', this._handleBackendKeyData.bind(this))
    con.on('error', this._handleErrorEvent.bind(this))
    con.on('errorMessage', this._handleErrorMessage.bind(this))
    con.on('readyForQuery', this._handleReadyForQuery.bind(this))
    con.on('notice', this._handleNotice.bind(this))
    con.on('rowDescription', this._handleRowDescription.bind(this))
    con.on('dataRow', this._handleDataRow.bind(this))
    con.on('portalSuspended', this._handlePortalSuspended.bind(this))
    con.on('emptyQuery', this._handleEmptyQuery.bind(this))
    con.on('commandComplete', this._handleCommandComplete.bind(this))
    con.on('parseComplete', this._handleParseComplete.bind(this))
    con.on('copyInResponse', this._handleCopyInResponse.bind(this))
    con.on('copyData', this._handleCopyData.bind(this))
    con.on('notification', this._handleNotification.bind(this))
  }

  _getPassword(cb) {
    const con = this.connection
    if (typeof this.password === 'function') {
      this._Promise
        .resolve()
        .then(() => this.password())
        .then((pass) => {
          if (pass !== undefined) {
            if (typeof pass !== 'string') {
              con.emit('error', new TypeError('Password must be a string'))
              return
            }
            this.connectionParameters.password = this.password = pass
          } else {
            this.connectionParameters.password = this.password = null
          }
          cb()
        })
        .catch((err) => {
          con.emit('error', err)
        })
    } else if (this.password !== null) {
      cb()
    } else {
      try {
        const pgPass = __webpack_require__("../../node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/index.js")
        pgPass(this.connectionParameters, (pass) => {
          if (undefined !== pass) {
            pgPassDeprecationNotice()
            this.connectionParameters.password = this.password = pass
          }
          cb()
        })
      } catch (e) {
        this.emit('error', e)
      }
    }
  }

  _handleAuthCleartextPassword(msg) {
    this._getPassword(() => {
      this.connection.password(this.password)
    })
  }

  _handleAuthMD5Password(msg) {
    this._getPassword(async () => {
      try {
        const hashedPassword = await crypto.postgresMd5PasswordHash(this.user, this.password, msg.salt)
        this.connection.password(hashedPassword)
      } catch (e) {
        this.emit('error', e)
      }
    })
  }

  _handleAuthSASL(msg) {
    this._getPassword(() => {
      try {
        this.saslSession = sasl.startSession(msg.mechanisms, this.enableChannelBinding && this.connection.stream)
        this.connection.sendSASLInitialResponseMessage(this.saslSession.mechanism, this.saslSession.response)
      } catch (err) {
        this.connection.emit('error', err)
      }
    })
  }

  async _handleAuthSASLContinue(msg) {
    try {
      await sasl.continueSession(
        this.saslSession,
        this.password,
        msg.data,
        this.enableChannelBinding && this.connection.stream
      )
      this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)
    } catch (err) {
      this.connection.emit('error', err)
    }
  }

  _handleAuthSASLFinal(msg) {
    try {
      sasl.finalizeSession(this.saslSession, msg.data)
      this.saslSession = null
    } catch (err) {
      this.connection.emit('error', err)
    }
  }

  _handleBackendKeyData(msg) {
    this.processID = msg.processID
    this.secretKey = msg.secretKey
  }

  _handleReadyForQuery(msg) {
    if (this._connecting) {
      this._connecting = false
      this._connected = true
      clearTimeout(this.connectionTimeoutHandle)

      // process possible callback argument to Client#connect
      if (this._connectionCallback) {
        this._connectionCallback(null, this)
        // remove callback for proper error handling
        // after the connect event
        this._connectionCallback = null
      }
      this.emit('connect')
    }
    const activeQuery = this._getActiveQuery()
    this._activeQuery = null
    this.readyForQuery = true
    if (activeQuery) {
      activeQuery.handleReadyForQuery(this.connection)
    }
    this._pulseQueryQueue()
  }

  // if we receive an error event or error message
  // during the connection process we handle it here
  _handleErrorWhileConnecting(err) {
    if (this._connectionError) {
      // TODO(bmc): this is swallowing errors - we shouldn't do this
      return
    }
    this._connectionError = true
    clearTimeout(this.connectionTimeoutHandle)
    if (this._connectionCallback) {
      return this._connectionCallback(err)
    }
    this.emit('error', err)
  }

  // if we're connected and we receive an error event from the connection
  // this means the socket is dead - do a hard abort of all queries and emit
  // the socket error on the client as well
  _handleErrorEvent(err) {
    if (this._connecting) {
      return this._handleErrorWhileConnecting(err)
    }
    this._queryable = false
    this._errorAllQueries(err)
    this.emit('error', err)
  }

  // handle error messages from the postgres backend
  _handleErrorMessage(msg) {
    if (this._connecting) {
      return this._handleErrorWhileConnecting(msg)
    }
    const activeQuery = this._getActiveQuery()

    if (!activeQuery) {
      this._handleErrorEvent(msg)
      return
    }

    this._activeQuery = null
    activeQuery.handleError(msg, this.connection)
  }

  _handleRowDescription(msg) {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected rowDescription message from backend.')
      this._handleErrorEvent(error)
      return
    }
    // delegate rowDescription to active query
    activeQuery.handleRowDescription(msg)
  }

  _handleDataRow(msg) {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected dataRow message from backend.')
      this._handleErrorEvent(error)
      return
    }
    // delegate dataRow to active query
    activeQuery.handleDataRow(msg)
  }

  _handlePortalSuspended(msg) {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected portalSuspended message from backend.')
      this._handleErrorEvent(error)
      return
    }
    // delegate portalSuspended to active query
    activeQuery.handlePortalSuspended(this.connection)
  }

  _handleEmptyQuery(msg) {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected emptyQuery message from backend.')
      this._handleErrorEvent(error)
      return
    }
    // delegate emptyQuery to active query
    activeQuery.handleEmptyQuery(this.connection)
  }

  _handleCommandComplete(msg) {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected commandComplete message from backend.')
      this._handleErrorEvent(error)
      return
    }
    // delegate commandComplete to active query
    activeQuery.handleCommandComplete(msg, this.connection)
  }

  _handleParseComplete() {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected parseComplete message from backend.')
      this._handleErrorEvent(error)
      return
    }
    // if a prepared statement has a name and properly parses
    // we track that its already been executed so we don't parse
    // it again on the same client
    if (activeQuery.name) {
      this.connection.parsedStatements[activeQuery.name] = activeQuery.text
    }
  }

  _handleCopyInResponse(msg) {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected copyInResponse message from backend.')
      this._handleErrorEvent(error)
      return
    }
    activeQuery.handleCopyInResponse(this.connection)
  }

  _handleCopyData(msg) {
    const activeQuery = this._getActiveQuery()
    if (activeQuery == null) {
      const error = new Error('Received unexpected copyData message from backend.')
      this._handleErrorEvent(error)
      return
    }
    activeQuery.handleCopyData(msg, this.connection)
  }

  _handleNotification(msg) {
    this.emit('notification', msg)
  }

  _handleNotice(msg) {
    this.emit('notice', msg)
  }

  getStartupConf() {
    const params = this.connectionParameters

    const data = {
      user: params.user,
      database: params.database,
    }

    const appName = params.application_name || params.fallback_application_name
    if (appName) {
      data.application_name = appName
    }
    if (params.replication) {
      data.replication = '' + params.replication
    }
    if (params.statement_timeout) {
      data.statement_timeout = String(parseInt(params.statement_timeout, 10))
    }
    if (params.lock_timeout) {
      data.lock_timeout = String(parseInt(params.lock_timeout, 10))
    }
    if (params.idle_in_transaction_session_timeout) {
      data.idle_in_transaction_session_timeout = String(parseInt(params.idle_in_transaction_session_timeout, 10))
    }
    if (params.options) {
      data.options = params.options
    }

    return data
  }

  cancel(client, query) {
    if (client.activeQuery === query) {
      const con = this.connection

      if (this.host && this.host.indexOf('/') === 0) {
        con.connect(this.host + '/.s.PGSQL.' + this.port)
      } else {
        con.connect(this.port, this.host)
      }

      // once connection is established send cancel message
      con.on('connect', function () {
        con.cancel(client.processID, client.secretKey)
      })
    } else if (client._queryQueue.indexOf(query) !== -1) {
      client._queryQueue.splice(client._queryQueue.indexOf(query), 1)
    }
  }

  setTypeParser(oid, format, parseFn) {
    return this._types.setTypeParser(oid, format, parseFn)
  }

  getTypeParser(oid, format) {
    return this._types.getTypeParser(oid, format)
  }

  // escapeIdentifier and escapeLiteral moved to utility functions & exported
  // on PG
  // re-exported here for backwards compatibility
  escapeIdentifier(str) {
    return utils.escapeIdentifier(str)
  }

  escapeLiteral(str) {
    return utils.escapeLiteral(str)
  }

  _pulseQueryQueue() {
    if (this.readyForQuery === true) {
      this._activeQuery = this._queryQueue.shift()
      const activeQuery = this._getActiveQuery()
      if (activeQuery) {
        this.readyForQuery = false
        this.hasExecuted = true

        const queryError = activeQuery.submit(this.connection)
        if (queryError) {
          process.nextTick(() => {
            activeQuery.handleError(queryError, this.connection)
            this.readyForQuery = true
            this._pulseQueryQueue()
          })
        }
      } else if (this.hasExecuted) {
        this._activeQuery = null
        this.emit('drain')
      }
    }
  }

  query(config, values, callback) {
    // can take in strings, config object or query object
    let query
    let result
    let readTimeout
    let readTimeoutTimer
    let queryCallback

    if (config === null || config === undefined) {
      throw new TypeError('Client was passed a null or undefined query')
    } else if (typeof config.submit === 'function') {
      readTimeout = config.query_timeout || this.connectionParameters.query_timeout
      result = query = config
      if (typeof values === 'function') {
        query.callback = query.callback || values
      }
    } else {
      readTimeout = config.query_timeout || this.connectionParameters.query_timeout
      query = new Query(config, values, callback)
      if (!query.callback) {
        result = new this._Promise((resolve, reject) => {
          query.callback = (err, res) => (err ? reject(err) : resolve(res))
        }).catch((err) => {
          // replace the stack trace that leads to `TCP.onStreamRead` with one that leads back to the
          // application that created the query
          Error.captureStackTrace(err)
          throw err
        })
      }
    }

    if (readTimeout) {
      queryCallback = query.callback

      readTimeoutTimer = setTimeout(() => {
        const error = new Error('Query read timeout')

        process.nextTick(() => {
          query.handleError(error, this.connection)
        })

        queryCallback(error)

        // we already returned an error,
        // just do nothing if query completes
        query.callback = () => {}

        // Remove from queue
        const index = this._queryQueue.indexOf(query)
        if (index > -1) {
          this._queryQueue.splice(index, 1)
        }

        this._pulseQueryQueue()
      }, readTimeout)

      query.callback = (err, res) => {
        clearTimeout(readTimeoutTimer)
        queryCallback(err, res)
      }
    }

    if (this.binary && !query.binary) {
      query.binary = true
    }

    if (query._result && !query._result._types) {
      query._result._types = this._types
    }

    if (!this._queryable) {
      process.nextTick(() => {
        query.handleError(new Error('Client has encountered a connection error and is not queryable'), this.connection)
      })
      return result
    }

    if (this._ending) {
      process.nextTick(() => {
        query.handleError(new Error('Client was closed and is not queryable'), this.connection)
      })
      return result
    }

    this._queryQueue.push(query)
    this._pulseQueryQueue()
    return result
  }

  ref() {
    this.connection.ref()
  }

  unref() {
    this.connection.unref()
  }

  end(cb) {
    this._ending = true

    // if we have never connected, then end is a noop, callback immediately
    if (!this.connection._connecting || this._ended) {
      if (cb) {
        cb()
      } else {
        return this._Promise.resolve()
      }
    }

    if (this._getActiveQuery() || !this._queryable) {
      // if we have an active query we need to force a disconnect
      // on the socket - otherwise a hung query could block end forever
      this.connection.stream.destroy()
    } else {
      this.connection.end()
    }

    if (cb) {
      this.connection.once('end', cb)
    } else {
      return new this._Promise((resolve) => {
        this.connection.once('end', resolve)
      })
    }
  }
  get queryQueue() {
    queryQueueDeprecationNotice()
    return this._queryQueue
  }
}

// expose a Query constructor
Client.Query = Query

module.exports = Client


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/connection-parameters.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const dns = __webpack_require__("dns")

const defaults = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/defaults.js")

const parse = (__webpack_require__("../../node_modules/.pnpm/pg-connection-string@2.11.0/node_modules/pg-connection-string/index.js")/* .parse */.parse) // parses a connection string

const val = function (key, config, envVar) {
  if (config[key]) {
    return config[key]
  }

  if (envVar === undefined) {
    envVar = process.env['PG' + key.toUpperCase()]
  } else if (envVar === false) {
    // do nothing ... use false
  } else {
    envVar = process.env[envVar]
  }

  return envVar || defaults[key]
}

const readSSLConfigFromEnvironment = function () {
  switch (process.env.PGSSLMODE) {
    case 'disable':
      return false
    case 'prefer':
    case 'require':
    case 'verify-ca':
    case 'verify-full':
      return true
    case 'no-verify':
      return { rejectUnauthorized: false }
  }
  return defaults.ssl
}

// Convert arg to a string, surround in single quotes, and escape single quotes and backslashes
const quoteParamValue = function (value) {
  return "'" + ('' + value).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"
}

const add = function (params, config, paramName) {
  const value = config[paramName]
  if (value !== undefined && value !== null) {
    params.push(paramName + '=' + quoteParamValue(value))
  }
}

class ConnectionParameters {
  constructor(config) {
    // if a string is passed, it is a raw connection string so we parse it into a config
    config = typeof config === 'string' ? parse(config) : config || {}

    // if the config has a connectionString defined, parse IT into the config we use
    // this will override other default values with what is stored in connectionString
    if (config.connectionString) {
      config = Object.assign({}, config, parse(config.connectionString))
    }

    this.user = val('user', config)
    this.database = val('database', config)

    if (this.database === undefined) {
      this.database = this.user
    }

    this.port = parseInt(val('port', config), 10)
    this.host = val('host', config)

    // "hiding" the password so it doesn't show up in stack traces
    // or if the client is console.logged
    Object.defineProperty(this, 'password', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: val('password', config),
    })

    this.binary = val('binary', config)
    this.options = val('options', config)

    this.ssl = typeof config.ssl === 'undefined' ? readSSLConfigFromEnvironment() : config.ssl

    if (typeof this.ssl === 'string') {
      if (this.ssl === 'true') {
        this.ssl = true
      }
    }
    // support passing in ssl=no-verify via connection string
    if (this.ssl === 'no-verify') {
      this.ssl = { rejectUnauthorized: false }
    }
    if (this.ssl && this.ssl.key) {
      Object.defineProperty(this.ssl, 'key', {
        enumerable: false,
      })
    }

    this.client_encoding = val('client_encoding', config)
    this.replication = val('replication', config)
    // a domain socket begins with '/'
    this.isDomainSocket = !(this.host || '').indexOf('/')

    this.application_name = val('application_name', config, 'PGAPPNAME')
    this.fallback_application_name = val('fallback_application_name', config, false)
    this.statement_timeout = val('statement_timeout', config, false)
    this.lock_timeout = val('lock_timeout', config, false)
    this.idle_in_transaction_session_timeout = val('idle_in_transaction_session_timeout', config, false)
    this.query_timeout = val('query_timeout', config, false)

    if (config.connectionTimeoutMillis === undefined) {
      this.connect_timeout = process.env.PGCONNECT_TIMEOUT || 0
    } else {
      this.connect_timeout = Math.floor(config.connectionTimeoutMillis / 1000)
    }

    if (config.keepAlive === false) {
      this.keepalives = 0
    } else if (config.keepAlive === true) {
      this.keepalives = 1
    }

    if (typeof config.keepAliveInitialDelayMillis === 'number') {
      this.keepalives_idle = Math.floor(config.keepAliveInitialDelayMillis / 1000)
    }
  }

  getLibpqConnectionString(cb) {
    const params = []
    add(params, this, 'user')
    add(params, this, 'password')
    add(params, this, 'port')
    add(params, this, 'application_name')
    add(params, this, 'fallback_application_name')
    add(params, this, 'connect_timeout')
    add(params, this, 'options')

    const ssl = typeof this.ssl === 'object' ? this.ssl : this.ssl ? { sslmode: this.ssl } : {}
    add(params, ssl, 'sslmode')
    add(params, ssl, 'sslca')
    add(params, ssl, 'sslkey')
    add(params, ssl, 'sslcert')
    add(params, ssl, 'sslrootcert')

    if (this.database) {
      params.push('dbname=' + quoteParamValue(this.database))
    }
    if (this.replication) {
      params.push('replication=' + quoteParamValue(this.replication))
    }
    if (this.host) {
      params.push('host=' + quoteParamValue(this.host))
    }
    if (this.isDomainSocket) {
      return cb(null, params.join(' '))
    }
    if (this.client_encoding) {
      params.push('client_encoding=' + quoteParamValue(this.client_encoding))
    }
    dns.lookup(this.host, function (err, address) {
      if (err) return cb(err, null)
      params.push('hostaddr=' + quoteParamValue(address))
      return cb(null, params.join(' '))
    })
  }
}

module.exports = ConnectionParameters


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/connection.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const EventEmitter = (__webpack_require__("events")/* .EventEmitter */.EventEmitter)

const { parse, serialize } = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/index.js")
const { getStream, getSecureStream } = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/stream.js")

const flushBuffer = serialize.flush()
const syncBuffer = serialize.sync()
const endBuffer = serialize.end()

// TODO(bmc) support binary mode at some point
class Connection extends EventEmitter {
  constructor(config) {
    super()
    config = config || {}

    this.stream = config.stream || getStream(config.ssl)
    if (typeof this.stream === 'function') {
      this.stream = this.stream(config)
    }

    this._keepAlive = config.keepAlive
    this._keepAliveInitialDelayMillis = config.keepAliveInitialDelayMillis
    this.parsedStatements = {}
    this.ssl = config.ssl || false
    this._ending = false
    this._emitMessage = false
    const self = this
    this.on('newListener', function (eventName) {
      if (eventName === 'message') {
        self._emitMessage = true
      }
    })
  }

  connect(port, host) {
    const self = this

    this._connecting = true
    this.stream.setNoDelay(true)
    this.stream.connect(port, host)

    this.stream.once('connect', function () {
      if (self._keepAlive) {
        self.stream.setKeepAlive(true, self._keepAliveInitialDelayMillis)
      }
      self.emit('connect')
    })

    const reportStreamError = function (error) {
      // errors about disconnections should be ignored during disconnect
      if (self._ending && (error.code === 'ECONNRESET' || error.code === 'EPIPE')) {
        return
      }
      self.emit('error', error)
    }
    this.stream.on('error', reportStreamError)

    this.stream.on('close', function () {
      self.emit('end')
    })

    if (!this.ssl) {
      return this.attachListeners(this.stream)
    }

    this.stream.once('data', function (buffer) {
      const responseCode = buffer.toString('utf8')
      switch (responseCode) {
        case 'S': // Server supports SSL connections, continue with a secure connection
          break
        case 'N': // Server does not support SSL connections
          self.stream.end()
          return self.emit('error', new Error('The server does not support SSL connections'))
        default:
          // Any other response byte, including 'E' (ErrorResponse) indicating a server error
          self.stream.end()
          return self.emit('error', new Error('There was an error establishing an SSL connection'))
      }
      const options = {
        socket: self.stream,
      }

      if (self.ssl !== true) {
        Object.assign(options, self.ssl)

        if ('key' in self.ssl) {
          options.key = self.ssl.key
        }
      }

      const net = __webpack_require__("net")
      if (net.isIP && net.isIP(host) === 0) {
        options.servername = host
      }
      try {
        self.stream = getSecureStream(options)
      } catch (err) {
        return self.emit('error', err)
      }
      self.attachListeners(self.stream)
      self.stream.on('error', reportStreamError)

      self.emit('sslconnect')
    })
  }

  attachListeners(stream) {
    parse(stream, (msg) => {
      const eventName = msg.name === 'error' ? 'errorMessage' : msg.name
      if (this._emitMessage) {
        this.emit('message', msg)
      }
      this.emit(eventName, msg)
    })
  }

  requestSsl() {
    this.stream.write(serialize.requestSsl())
  }

  startup(config) {
    this.stream.write(serialize.startup(config))
  }

  cancel(processID, secretKey) {
    this._send(serialize.cancel(processID, secretKey))
  }

  password(password) {
    this._send(serialize.password(password))
  }

  sendSASLInitialResponseMessage(mechanism, initialResponse) {
    this._send(serialize.sendSASLInitialResponseMessage(mechanism, initialResponse))
  }

  sendSCRAMClientFinalMessage(additionalData) {
    this._send(serialize.sendSCRAMClientFinalMessage(additionalData))
  }

  _send(buffer) {
    if (!this.stream.writable) {
      return false
    }
    return this.stream.write(buffer)
  }

  query(text) {
    this._send(serialize.query(text))
  }

  // send parse message
  parse(query) {
    this._send(serialize.parse(query))
  }

  // send bind message
  bind(config) {
    this._send(serialize.bind(config))
  }

  // send execute message
  execute(config) {
    this._send(serialize.execute(config))
  }

  flush() {
    if (this.stream.writable) {
      this.stream.write(flushBuffer)
    }
  }

  sync() {
    this._ending = true
    this._send(syncBuffer)
  }

  ref() {
    this.stream.ref()
  }

  unref() {
    this.stream.unref()
  }

  end() {
    // 0x58 = 'X'
    this._ending = true
    if (!this._connecting || !this.stream.writable) {
      this.stream.end()
      return
    }
    return this.stream.write(endBuffer, () => {
      this.stream.end()
    })
  }

  close(msg) {
    this._send(serialize.close(msg))
  }

  describe(msg) {
    this._send(serialize.describe(msg))
  }

  sendCopyFromChunk(chunk) {
    this._send(serialize.copyData(chunk))
  }

  endCopyFrom() {
    this._send(serialize.copyDone())
  }

  sendCopyFail(msg) {
    this._send(serialize.copyFail(msg))
  }
}

module.exports = Connection


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/cert-signatures.js"(module) {
function x509Error(msg, cert) {
  return new Error('SASL channel binding: ' + msg + ' when parsing public certificate ' + cert.toString('base64'))
}

function readASN1Length(data, index) {
  let length = data[index++]
  if (length < 0x80) return { length, index }

  const lengthBytes = length & 0x7f
  if (lengthBytes > 4) throw x509Error('bad length', data)

  length = 0
  for (let i = 0; i < lengthBytes; i++) {
    length = (length << 8) | data[index++]
  }

  return { length, index }
}

function readASN1OID(data, index) {
  if (data[index++] !== 0x6) throw x509Error('non-OID data', data) // 6 = OID

  const { length: OIDLength, index: indexAfterOIDLength } = readASN1Length(data, index)
  index = indexAfterOIDLength
  const lastIndex = index + OIDLength

  const byte1 = data[index++]
  let oid = ((byte1 / 40) >> 0) + '.' + (byte1 % 40)

  while (index < lastIndex) {
    // loop over numbers in OID
    let value = 0
    while (index < lastIndex) {
      // loop over bytes in number
      const nextByte = data[index++]
      value = (value << 7) | (nextByte & 0x7f)
      if (nextByte < 0x80) break
    }
    oid += '.' + value
  }

  return { oid, index }
}

function expectASN1Seq(data, index) {
  if (data[index++] !== 0x30) throw x509Error('non-sequence data', data) // 30 = Sequence
  return readASN1Length(data, index)
}

function signatureAlgorithmHashFromCertificate(data, index) {
  // read this thread: https://www.postgresql.org/message-id/17760-b6c61e752ec07060%40postgresql.org
  if (index === undefined) index = 0
  index = expectASN1Seq(data, index).index
  const { length: certInfoLength, index: indexAfterCertInfoLength } = expectASN1Seq(data, index)
  index = indexAfterCertInfoLength + certInfoLength // skip over certificate info
  index = expectASN1Seq(data, index).index // skip over signature length field
  const { oid, index: indexAfterOID } = readASN1OID(data, index)
  switch (oid) {
    // RSA
    case '1.2.840.113549.1.1.4':
      return 'MD5'
    case '1.2.840.113549.1.1.5':
      return 'SHA-1'
    case '1.2.840.113549.1.1.11':
      return 'SHA-256'
    case '1.2.840.113549.1.1.12':
      return 'SHA-384'
    case '1.2.840.113549.1.1.13':
      return 'SHA-512'
    case '1.2.840.113549.1.1.14':
      return 'SHA-224'
    case '1.2.840.113549.1.1.15':
      return 'SHA512-224'
    case '1.2.840.113549.1.1.16':
      return 'SHA512-256'
    // ECDSA
    case '1.2.840.10045.4.1':
      return 'SHA-1'
    case '1.2.840.10045.4.3.1':
      return 'SHA-224'
    case '1.2.840.10045.4.3.2':
      return 'SHA-256'
    case '1.2.840.10045.4.3.3':
      return 'SHA-384'
    case '1.2.840.10045.4.3.4':
      return 'SHA-512'
    // RSASSA-PSS: hash is indicated separately
    case '1.2.840.113549.1.1.10': {
      index = indexAfterOID
      index = expectASN1Seq(data, index).index
      if (data[index++] !== 0xa0) throw x509Error('non-tag data', data) // a0 = constructed tag 0
      index = readASN1Length(data, index).index // skip over tag length field
      index = expectASN1Seq(data, index).index // skip over sequence length field
      const { oid: hashOID } = readASN1OID(data, index)
      switch (hashOID) {
        // standalone hash OIDs
        case '1.2.840.113549.2.5':
          return 'MD5'
        case '1.3.14.3.2.26':
          return 'SHA-1'
        case '2.16.840.1.101.3.4.2.1':
          return 'SHA-256'
        case '2.16.840.1.101.3.4.2.2':
          return 'SHA-384'
        case '2.16.840.1.101.3.4.2.3':
          return 'SHA-512'
      }
      throw x509Error('unknown hash OID ' + hashOID, data)
    }
    // Ed25519 -- see https: return//github.com/openssl/openssl/issues/15477
    case '1.3.101.110':
    case '1.3.101.112': // ph
      return 'SHA-512'
    // Ed448 -- still not in pg 17.2 (if supported, digest would be SHAKE256 x 64 bytes)
    case '1.3.101.111':
    case '1.3.101.113': // ph
      throw x509Error('Ed448 certificate channel binding is not currently supported by Postgres')
  }
  throw x509Error('unknown OID ' + oid, data)
}

module.exports = { signatureAlgorithmHashFromCertificate }


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/sasl.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";

const crypto = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/utils.js")
const { signatureAlgorithmHashFromCertificate } = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/cert-signatures.js")

function startSession(mechanisms, stream) {
  const candidates = ['SCRAM-SHA-256']
  if (stream) candidates.unshift('SCRAM-SHA-256-PLUS') // higher-priority, so placed first

  const mechanism = candidates.find((candidate) => mechanisms.includes(candidate))

  if (!mechanism) {
    throw new Error('SASL: Only mechanism(s) ' + candidates.join(' and ') + ' are supported')
  }

  if (mechanism === 'SCRAM-SHA-256-PLUS' && typeof stream.getPeerCertificate !== 'function') {
    // this should never happen if we are really talking to a Postgres server
    throw new Error('SASL: Mechanism SCRAM-SHA-256-PLUS requires a certificate')
  }

  const clientNonce = crypto.randomBytes(18).toString('base64')
  const gs2Header = mechanism === 'SCRAM-SHA-256-PLUS' ? 'p=tls-server-end-point' : stream ? 'y' : 'n'

  return {
    mechanism,
    clientNonce,
    response: gs2Header + ',,n=*,r=' + clientNonce,
    message: 'SASLInitialResponse',
  }
}

async function continueSession(session, password, serverData, stream) {
  if (session.message !== 'SASLInitialResponse') {
    throw new Error('SASL: Last message was not SASLInitialResponse')
  }
  if (typeof password !== 'string') {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string')
  }
  if (password === '') {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a non-empty string')
  }
  if (typeof serverData !== 'string') {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string')
  }

  const sv = parseServerFirstMessage(serverData)

  if (!sv.nonce.startsWith(session.clientNonce)) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce')
  } else if (sv.nonce.length === session.clientNonce.length) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short')
  }

  const clientFirstMessageBare = 'n=*,r=' + session.clientNonce
  const serverFirstMessage = 'r=' + sv.nonce + ',s=' + sv.salt + ',i=' + sv.iteration

  // without channel binding:
  let channelBinding = stream ? 'eSws' : 'biws' // 'y,,' or 'n,,', base64-encoded

  // override if channel binding is in use:
  if (session.mechanism === 'SCRAM-SHA-256-PLUS') {
    const peerCert = stream.getPeerCertificate().raw
    let hashName = signatureAlgorithmHashFromCertificate(peerCert)
    if (hashName === 'MD5' || hashName === 'SHA-1') hashName = 'SHA-256'
    const certHash = await crypto.hashByName(hashName, peerCert)
    const bindingData = Buffer.concat([Buffer.from('p=tls-server-end-point,,'), Buffer.from(certHash)])
    channelBinding = bindingData.toString('base64')
  }

  const clientFinalMessageWithoutProof = 'c=' + channelBinding + ',r=' + sv.nonce
  const authMessage = clientFirstMessageBare + ',' + serverFirstMessage + ',' + clientFinalMessageWithoutProof

  const saltBytes = Buffer.from(sv.salt, 'base64')
  const saltedPassword = await crypto.deriveKey(password, saltBytes, sv.iteration)
  const clientKey = await crypto.hmacSha256(saltedPassword, 'Client Key')
  const storedKey = await crypto.sha256(clientKey)
  const clientSignature = await crypto.hmacSha256(storedKey, authMessage)
  const clientProof = xorBuffers(Buffer.from(clientKey), Buffer.from(clientSignature)).toString('base64')
  const serverKey = await crypto.hmacSha256(saltedPassword, 'Server Key')
  const serverSignatureBytes = await crypto.hmacSha256(serverKey, authMessage)

  session.message = 'SASLResponse'
  session.serverSignature = Buffer.from(serverSignatureBytes).toString('base64')
  session.response = clientFinalMessageWithoutProof + ',p=' + clientProof
}

function finalizeSession(session, serverData) {
  if (session.message !== 'SASLResponse') {
    throw new Error('SASL: Last message was not SASLResponse')
  }
  if (typeof serverData !== 'string') {
    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string')
  }

  const { serverSignature } = parseServerFinalMessage(serverData)

  if (serverSignature !== session.serverSignature) {
    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match')
  }
}

/**
 * printable       = %x21-2B / %x2D-7E
 *                   ;; Printable ASCII except ",".
 *                   ;; Note that any "printable" is also
 *                   ;; a valid "value".
 */
function isPrintableChars(text) {
  if (typeof text !== 'string') {
    throw new TypeError('SASL: text must be a string')
  }
  return text
    .split('')
    .map((_, i) => text.charCodeAt(i))
    .every((c) => (c >= 0x21 && c <= 0x2b) || (c >= 0x2d && c <= 0x7e))
}

/**
 * base64-char     = ALPHA / DIGIT / "/" / "+"
 *
 * base64-4        = 4base64-char
 *
 * base64-3        = 3base64-char "="
 *
 * base64-2        = 2base64-char "=="
 *
 * base64          = *base64-4 [base64-3 / base64-2]
 */
function isBase64(text) {
  return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(text)
}

function parseAttributePairs(text) {
  if (typeof text !== 'string') {
    throw new TypeError('SASL: attribute pairs text must be a string')
  }

  return new Map(
    text.split(',').map((attrValue) => {
      if (!/^.=/.test(attrValue)) {
        throw new Error('SASL: Invalid attribute pair entry')
      }
      const name = attrValue[0]
      const value = attrValue.substring(2)
      return [name, value]
    })
  )
}

function parseServerFirstMessage(data) {
  const attrPairs = parseAttributePairs(data)

  const nonce = attrPairs.get('r')
  if (!nonce) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing')
  } else if (!isPrintableChars(nonce)) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters')
  }
  const salt = attrPairs.get('s')
  if (!salt) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing')
  } else if (!isBase64(salt)) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64')
  }
  const iterationText = attrPairs.get('i')
  if (!iterationText) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing')
  } else if (!/^[1-9][0-9]*$/.test(iterationText)) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count')
  }
  const iteration = parseInt(iterationText, 10)

  return {
    nonce,
    salt,
    iteration,
  }
}

function parseServerFinalMessage(serverData) {
  const attrPairs = parseAttributePairs(serverData)
  const serverSignature = attrPairs.get('v')
  if (!serverSignature) {
    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing')
  } else if (!isBase64(serverSignature)) {
    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64')
  }
  return {
    serverSignature,
  }
}

function xorBuffers(a, b) {
  if (!Buffer.isBuffer(a)) {
    throw new TypeError('first argument must be a Buffer')
  }
  if (!Buffer.isBuffer(b)) {
    throw new TypeError('second argument must be a Buffer')
  }
  if (a.length !== b.length) {
    throw new Error('Buffer lengths must match')
  }
  if (a.length === 0) {
    throw new Error('Buffers cannot be empty')
  }
  return Buffer.from(a.map((_, i) => a[i] ^ b[i]))
}

module.exports = {
  startSession,
  continueSession,
  finalizeSession,
}


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/utils-legacy.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";

// This file contains crypto utility functions for versions of Node.js < 15.0.0,
// which does not support the WebCrypto.subtle API.

const nodeCrypto = __webpack_require__("crypto")

function md5(string) {
  return nodeCrypto.createHash('md5').update(string, 'utf-8').digest('hex')
}

// See AuthenticationMD5Password at https://www.postgresql.org/docs/current/static/protocol-flow.html
function postgresMd5PasswordHash(user, password, salt) {
  const inner = md5(password + user)
  const outer = md5(Buffer.concat([Buffer.from(inner), salt]))
  return 'md5' + outer
}

function sha256(text) {
  return nodeCrypto.createHash('sha256').update(text).digest()
}

function hashByName(hashName, text) {
  hashName = hashName.replace(/(\D)-/, '$1') // e.g. SHA-256 -> SHA256
  return nodeCrypto.createHash(hashName).update(text).digest()
}

function hmacSha256(key, msg) {
  return nodeCrypto.createHmac('sha256', key).update(msg).digest()
}

async function deriveKey(password, salt, iterations) {
  return nodeCrypto.pbkdf2Sync(password, salt, iterations, 32, 'sha256')
}

module.exports = {
  postgresMd5PasswordHash,
  randomBytes: nodeCrypto.randomBytes,
  deriveKey,
  sha256,
  hashByName,
  hmacSha256,
  md5,
}


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/utils-webcrypto.js"(module, __unused_rspack_exports, __webpack_require__) {
const nodeCrypto = __webpack_require__("crypto")

module.exports = {
  postgresMd5PasswordHash,
  randomBytes,
  deriveKey,
  sha256,
  hashByName,
  hmacSha256,
  md5,
}

/**
 * The Web Crypto API - grabbed from the Node.js library or the global
 * @type Crypto
 */
// eslint-disable-next-line no-undef
const webCrypto = nodeCrypto.webcrypto || globalThis.crypto
/**
 * The SubtleCrypto API for low level crypto operations.
 * @type SubtleCrypto
 */
const subtleCrypto = webCrypto.subtle
const textEncoder = new TextEncoder()

/**
 *
 * @param {*} length
 * @returns
 */
function randomBytes(length) {
  return webCrypto.getRandomValues(Buffer.alloc(length))
}

async function md5(string) {
  try {
    return nodeCrypto.createHash('md5').update(string, 'utf-8').digest('hex')
  } catch (e) {
    // `createHash()` failed so we are probably not in Node.js, use the WebCrypto API instead.
    // Note that the MD5 algorithm on WebCrypto is not available in Node.js.
    // This is why we cannot just use WebCrypto in all environments.
    const data = typeof string === 'string' ? textEncoder.encode(string) : string
    const hash = await subtleCrypto.digest('MD5', data)
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  }
}

// See AuthenticationMD5Password at https://www.postgresql.org/docs/current/static/protocol-flow.html
async function postgresMd5PasswordHash(user, password, salt) {
  const inner = await md5(password + user)
  const outer = await md5(Buffer.concat([Buffer.from(inner), salt]))
  return 'md5' + outer
}

/**
 * Create a SHA-256 digest of the given data
 * @param {Buffer} data
 */
async function sha256(text) {
  return await subtleCrypto.digest('SHA-256', text)
}

async function hashByName(hashName, text) {
  return await subtleCrypto.digest(hashName, text)
}

/**
 * Sign the message with the given key
 * @param {ArrayBuffer} keyBuffer
 * @param {string} msg
 */
async function hmacSha256(keyBuffer, msg) {
  const key = await subtleCrypto.importKey('raw', keyBuffer, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  return await subtleCrypto.sign('HMAC', key, textEncoder.encode(msg))
}

/**
 * Derive a key from the password and salt
 * @param {string} password
 * @param {Uint8Array} salt
 * @param {number} iterations
 */
async function deriveKey(password, salt, iterations) {
  const key = await subtleCrypto.importKey('raw', textEncoder.encode(password), 'PBKDF2', false, ['deriveBits'])
  const params = { name: 'PBKDF2', hash: 'SHA-256', salt: salt, iterations: iterations }
  return await subtleCrypto.deriveBits(params, key, 32 * 8, ['deriveBits'])
}


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/utils.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const useLegacyCrypto = parseInt(process.versions && process.versions.node && process.versions.node.split('.')[0]) < 15
if (useLegacyCrypto) {
  // We are on an old version of Node.js that requires legacy crypto utilities.
  module.exports = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/utils-legacy.js")
} else {
  module.exports = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/crypto/utils-webcrypto.js")
}


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/defaults.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


let user
try {
  user = process.platform === 'win32' ? process.env.USERNAME : process.env.USER
} catch {
  // ignore, e.g., Deno without --allow-env
}

module.exports = {
  // database host. defaults to localhost
  host: 'localhost',

  // database user's name
  user,

  // name of database to connect
  database: undefined,

  // database user's password
  password: null,

  // a Postgres connection string to be used instead of setting individual connection items
  // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
  // in the defaults object.
  connectionString: undefined,

  // database port
  port: 5432,

  // number of rows to return at a time from a prepared statement's
  // portal. 0 will return all rows at once
  rows: 0,

  // binary result mode
  binary: false,

  // Connection pool options - see https://github.com/brianc/node-pg-pool

  // number of connections to use in connection pool
  // 0 will disable connection pooling
  max: 10,

  // max milliseconds a client can go unused before it is removed
  // from the pool and destroyed
  idleTimeoutMillis: 30000,

  client_encoding: '',

  ssl: false,

  application_name: undefined,

  fallback_application_name: undefined,

  options: undefined,

  parseInputDatesAsUTC: false,

  // max milliseconds any query using this connection will execute for before timing out in error.
  // false=unlimited
  statement_timeout: false,

  // Abort any statement that waits longer than the specified duration in milliseconds while attempting to acquire a lock.
  // false=unlimited
  lock_timeout: false,

  // Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
  // false=unlimited
  idle_in_transaction_session_timeout: false,

  // max milliseconds to wait for query to complete (client side)
  query_timeout: false,

  connect_timeout: 0,

  keepalives: 1,

  keepalives_idle: 0,
}

const pgTypes = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/index.js")
// save default parsers
const parseBigInteger = pgTypes.getTypeParser(20, 'text')
const parseBigIntegerArray = pgTypes.getTypeParser(1016, 'text')

// parse int8 so you can get your count values as actual numbers
module.exports.__defineSetter__('parseInt8', function (val) {
  pgTypes.setTypeParser(20, 'text', val ? pgTypes.getTypeParser(23, 'text') : parseBigInteger)
  pgTypes.setTypeParser(1016, 'text', val ? pgTypes.getTypeParser(1007, 'text') : parseBigIntegerArray)
})


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const Client = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/client.js")
const defaults = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/defaults.js")
const Connection = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/connection.js")
const Result = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/result.js")
const utils = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/utils.js")
const Pool = __webpack_require__("../../node_modules/.pnpm/pg-pool@3.11.0_pg@8.18.0/node_modules/pg-pool/index.js")
const TypeOverrides = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/type-overrides.js")
const { DatabaseError } = __webpack_require__("../../node_modules/.pnpm/pg-protocol@1.11.0/node_modules/pg-protocol/dist/index.js")
const { escapeIdentifier, escapeLiteral } = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/utils.js")

const poolFactory = (Client) => {
  return class BoundPool extends Pool {
    constructor(options) {
      super(options, Client)
    }
  }
}

const PG = function (clientConstructor) {
  this.defaults = defaults
  this.Client = clientConstructor
  this.Query = this.Client.Query
  this.Pool = poolFactory(this.Client)
  this._pools = []
  this.Connection = Connection
  this.types = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/index.js")
  this.DatabaseError = DatabaseError
  this.TypeOverrides = TypeOverrides
  this.escapeIdentifier = escapeIdentifier
  this.escapeLiteral = escapeLiteral
  this.Result = Result
  this.utils = utils
}

let clientConstructor = Client

let forceNative = false
try {
  forceNative = !!process.env.NODE_PG_FORCE_NATIVE
} catch {
  // ignore, e.g., Deno without --allow-env
}

if (forceNative) {
  clientConstructor = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/native/index.js")
}

module.exports = new PG(clientConstructor)

// lazy require native module...the native module may not have installed
Object.defineProperty(module.exports, "native", ({
  configurable: true,
  enumerable: false,
  get() {
    let native = null
    try {
      native = new PG(__webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/native/index.js"))
    } catch (err) {
      if (err.code !== 'MODULE_NOT_FOUND') {
        throw err
      }
    }

    // overwrite module.exports.native so that getter is never called again
    Object.defineProperty(module.exports, "native", ({
      value: native,
    }))

    return native
  },
}))


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/native/client.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


// eslint-disable-next-line
var Native
// eslint-disable-next-line no-useless-catch
try {
  // Wrap this `require()` in a try-catch to avoid upstream bundlers from complaining that this might not be available since it is an optional import
  Native = __webpack_require__("?3bd2")
} catch (e) {
  throw e
}
const TypeOverrides = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/type-overrides.js")
const EventEmitter = (__webpack_require__("events")/* .EventEmitter */.EventEmitter)
const util = __webpack_require__("util")
const ConnectionParameters = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/connection-parameters.js")

const NativeQuery = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/native/query.js")

const Client = (module.exports = function (config) {
  EventEmitter.call(this)
  config = config || {}

  this._Promise = config.Promise || global.Promise
  this._types = new TypeOverrides(config.types)

  this.native = new Native({
    types: this._types,
  })

  this._queryQueue = []
  this._ending = false
  this._connecting = false
  this._connected = false
  this._queryable = true

  // keep these on the object for legacy reasons
  // for the time being. TODO: deprecate all this jazz
  const cp = (this.connectionParameters = new ConnectionParameters(config))
  if (config.nativeConnectionString) cp.nativeConnectionString = config.nativeConnectionString
  this.user = cp.user

  // "hiding" the password so it doesn't show up in stack traces
  // or if the client is console.logged
  Object.defineProperty(this, 'password', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: cp.password,
  })
  this.database = cp.database
  this.host = cp.host
  this.port = cp.port

  // a hash to hold named queries
  this.namedQueries = {}
})

Client.Query = NativeQuery

util.inherits(Client, EventEmitter)

Client.prototype._errorAllQueries = function (err) {
  const enqueueError = (query) => {
    process.nextTick(() => {
      query.native = this.native
      query.handleError(err)
    })
  }

  if (this._hasActiveQuery()) {
    enqueueError(this._activeQuery)
    this._activeQuery = null
  }

  this._queryQueue.forEach(enqueueError)
  this._queryQueue.length = 0
}

// connect to the backend
// pass an optional callback to be called once connected
// or with an error if there was a connection error
Client.prototype._connect = function (cb) {
  const self = this

  if (this._connecting) {
    process.nextTick(() => cb(new Error('Client has already been connected. You cannot reuse a client.')))
    return
  }

  this._connecting = true

  this.connectionParameters.getLibpqConnectionString(function (err, conString) {
    if (self.connectionParameters.nativeConnectionString) conString = self.connectionParameters.nativeConnectionString
    if (err) return cb(err)
    self.native.connect(conString, function (err) {
      if (err) {
        self.native.end()
        return cb(err)
      }

      // set internal states to connected
      self._connected = true

      // handle connection errors from the native layer
      self.native.on('error', function (err) {
        self._queryable = false
        self._errorAllQueries(err)
        self.emit('error', err)
      })

      self.native.on('notification', function (msg) {
        self.emit('notification', {
          channel: msg.relname,
          payload: msg.extra,
        })
      })

      // signal we are connected now
      self.emit('connect')
      self._pulseQueryQueue(true)

      cb(null, this)
    })
  })
}

Client.prototype.connect = function (callback) {
  if (callback) {
    this._connect(callback)
    return
  }

  return new this._Promise((resolve, reject) => {
    this._connect((error) => {
      if (error) {
        reject(error)
      } else {
        resolve(this)
      }
    })
  })
}

// send a query to the server
// this method is highly overloaded to take
// 1) string query, optional array of parameters, optional function callback
// 2) object query with {
//    string query
//    optional array values,
//    optional function callback instead of as a separate parameter
//    optional string name to name & cache the query plan
//    optional string rowMode = 'array' for an array of results
//  }
Client.prototype.query = function (config, values, callback) {
  let query
  let result
  let readTimeout
  let readTimeoutTimer
  let queryCallback

  if (config === null || config === undefined) {
    throw new TypeError('Client was passed a null or undefined query')
  } else if (typeof config.submit === 'function') {
    readTimeout = config.query_timeout || this.connectionParameters.query_timeout
    result = query = config
    // accept query(new Query(...), (err, res) => { }) style
    if (typeof values === 'function') {
      config.callback = values
    }
  } else {
    readTimeout = config.query_timeout || this.connectionParameters.query_timeout
    query = new NativeQuery(config, values, callback)
    if (!query.callback) {
      let resolveOut, rejectOut
      result = new this._Promise((resolve, reject) => {
        resolveOut = resolve
        rejectOut = reject
      }).catch((err) => {
        Error.captureStackTrace(err)
        throw err
      })
      query.callback = (err, res) => (err ? rejectOut(err) : resolveOut(res))
    }
  }

  if (readTimeout) {
    queryCallback = query.callback

    readTimeoutTimer = setTimeout(() => {
      const error = new Error('Query read timeout')

      process.nextTick(() => {
        query.handleError(error, this.connection)
      })

      queryCallback(error)

      // we already returned an error,
      // just do nothing if query completes
      query.callback = () => {}

      // Remove from queue
      const index = this._queryQueue.indexOf(query)
      if (index > -1) {
        this._queryQueue.splice(index, 1)
      }

      this._pulseQueryQueue()
    }, readTimeout)

    query.callback = (err, res) => {
      clearTimeout(readTimeoutTimer)
      queryCallback(err, res)
    }
  }

  if (!this._queryable) {
    query.native = this.native
    process.nextTick(() => {
      query.handleError(new Error('Client has encountered a connection error and is not queryable'))
    })
    return result
  }

  if (this._ending) {
    query.native = this.native
    process.nextTick(() => {
      query.handleError(new Error('Client was closed and is not queryable'))
    })
    return result
  }

  this._queryQueue.push(query)
  this._pulseQueryQueue()
  return result
}

// disconnect from the backend server
Client.prototype.end = function (cb) {
  const self = this

  this._ending = true

  if (!this._connected) {
    this.once('connect', this.end.bind(this, cb))
  }
  let result
  if (!cb) {
    result = new this._Promise(function (resolve, reject) {
      cb = (err) => (err ? reject(err) : resolve())
    })
  }
  this.native.end(function () {
    self._errorAllQueries(new Error('Connection terminated'))

    process.nextTick(() => {
      self.emit('end')
      if (cb) cb()
    })
  })
  return result
}

Client.prototype._hasActiveQuery = function () {
  return this._activeQuery && this._activeQuery.state !== 'error' && this._activeQuery.state !== 'end'
}

Client.prototype._pulseQueryQueue = function (initialConnection) {
  if (!this._connected) {
    return
  }
  if (this._hasActiveQuery()) {
    return
  }
  const query = this._queryQueue.shift()
  if (!query) {
    if (!initialConnection) {
      this.emit('drain')
    }
    return
  }
  this._activeQuery = query
  query.submit(this)
  const self = this
  query.once('_done', function () {
    self._pulseQueryQueue()
  })
}

// attempt to cancel an in-progress query
Client.prototype.cancel = function (query) {
  if (this._activeQuery === query) {
    this.native.cancel(function () {})
  } else if (this._queryQueue.indexOf(query) !== -1) {
    this._queryQueue.splice(this._queryQueue.indexOf(query), 1)
  }
}

Client.prototype.ref = function () {}
Client.prototype.unref = function () {}

Client.prototype.setTypeParser = function (oid, format, parseFn) {
  return this._types.setTypeParser(oid, format, parseFn)
}

Client.prototype.getTypeParser = function (oid, format) {
  return this._types.getTypeParser(oid, format)
}


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/native/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";

module.exports = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/native/client.js")


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/native/query.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const EventEmitter = (__webpack_require__("events")/* .EventEmitter */.EventEmitter)
const util = __webpack_require__("util")
const utils = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/utils.js")

const NativeQuery = (module.exports = function (config, values, callback) {
  EventEmitter.call(this)
  config = utils.normalizeQueryConfig(config, values, callback)
  this.text = config.text
  this.values = config.values
  this.name = config.name
  this.queryMode = config.queryMode
  this.callback = config.callback
  this.state = 'new'
  this._arrayMode = config.rowMode === 'array'

  // if the 'row' event is listened for
  // then emit them as they come in
  // without setting singleRowMode to true
  // this has almost no meaning because libpq
  // reads all rows into memory before returning any
  this._emitRowEvents = false
  this.on(
    'newListener',
    function (event) {
      if (event === 'row') this._emitRowEvents = true
    }.bind(this)
  )
})

util.inherits(NativeQuery, EventEmitter)

const errorFieldMap = {
  sqlState: 'code',
  statementPosition: 'position',
  messagePrimary: 'message',
  context: 'where',
  schemaName: 'schema',
  tableName: 'table',
  columnName: 'column',
  dataTypeName: 'dataType',
  constraintName: 'constraint',
  sourceFile: 'file',
  sourceLine: 'line',
  sourceFunction: 'routine',
}

NativeQuery.prototype.handleError = function (err) {
  // copy pq error fields into the error object
  const fields = this.native.pq.resultErrorFields()
  if (fields) {
    for (const key in fields) {
      const normalizedFieldName = errorFieldMap[key] || key
      err[normalizedFieldName] = fields[key]
    }
  }
  if (this.callback) {
    this.callback(err)
  } else {
    this.emit('error', err)
  }
  this.state = 'error'
}

NativeQuery.prototype.then = function (onSuccess, onFailure) {
  return this._getPromise().then(onSuccess, onFailure)
}

NativeQuery.prototype.catch = function (callback) {
  return this._getPromise().catch(callback)
}

NativeQuery.prototype._getPromise = function () {
  if (this._promise) return this._promise
  this._promise = new Promise(
    function (resolve, reject) {
      this._once('end', resolve)
      this._once('error', reject)
    }.bind(this)
  )
  return this._promise
}

NativeQuery.prototype.submit = function (client) {
  this.state = 'running'
  const self = this
  this.native = client.native
  client.native.arrayMode = this._arrayMode

  let after = function (err, rows, results) {
    client.native.arrayMode = false
    setImmediate(function () {
      self.emit('_done')
    })

    // handle possible query error
    if (err) {
      return self.handleError(err)
    }

    // emit row events for each row in the result
    if (self._emitRowEvents) {
      if (results.length > 1) {
        rows.forEach((rowOfRows, i) => {
          rowOfRows.forEach((row) => {
            self.emit('row', row, results[i])
          })
        })
      } else {
        rows.forEach(function (row) {
          self.emit('row', row, results)
        })
      }
    }

    // handle successful result
    self.state = 'end'
    self.emit('end', results)
    if (self.callback) {
      self.callback(null, results)
    }
  }

  if (process.domain) {
    after = process.domain.bind(after)
  }

  // named query
  if (this.name) {
    if (this.name.length > 63) {
      console.error('Warning! Postgres only supports 63 characters for query names.')
      console.error('You supplied %s (%s)', this.name, this.name.length)
      console.error('This can cause conflicts and silent errors executing queries')
    }
    const values = (this.values || []).map(utils.prepareValue)

    // check if the client has already executed this named query
    // if so...just execute it again - skip the planning phase
    if (client.namedQueries[this.name]) {
      if (this.text && client.namedQueries[this.name] !== this.text) {
        const err = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`)
        return after(err)
      }
      return client.native.execute(this.name, values, after)
    }
    // plan the named query the first time, then execute it
    return client.native.prepare(this.name, this.text, values.length, function (err) {
      if (err) return after(err)
      client.namedQueries[self.name] = self.text
      return self.native.execute(self.name, values, after)
    })
  } else if (this.values) {
    if (!Array.isArray(this.values)) {
      const err = new Error('Query values must be an array')
      return after(err)
    }
    const vals = this.values.map(utils.prepareValue)
    client.native.query(this.text, vals, after)
  } else if (this.queryMode === 'extended') {
    client.native.query(this.text, [], after)
  } else {
    client.native.query(this.text, after)
  }
}


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/query.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const { EventEmitter } = __webpack_require__("events")

const Result = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/result.js")
const utils = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/utils.js")

class Query extends EventEmitter {
  constructor(config, values, callback) {
    super()

    config = utils.normalizeQueryConfig(config, values, callback)

    this.text = config.text
    this.values = config.values
    this.rows = config.rows
    this.types = config.types
    this.name = config.name
    this.queryMode = config.queryMode
    this.binary = config.binary
    // use unique portal name each time
    this.portal = config.portal || ''
    this.callback = config.callback
    this._rowMode = config.rowMode
    if (process.domain && config.callback) {
      this.callback = process.domain.bind(config.callback)
    }
    this._result = new Result(this._rowMode, this.types)

    // potential for multiple results
    this._results = this._result
    this._canceledDueToError = false
  }

  requiresPreparation() {
    if (this.queryMode === 'extended') {
      return true
    }

    // named queries must always be prepared
    if (this.name) {
      return true
    }
    // always prepare if there are max number of rows expected per
    // portal execution
    if (this.rows) {
      return true
    }
    // don't prepare empty text queries
    if (!this.text) {
      return false
    }
    // prepare if there are values
    if (!this.values) {
      return false
    }
    return this.values.length > 0
  }

  _checkForMultirow() {
    // if we already have a result with a command property
    // then we've already executed one query in a multi-statement simple query
    // turn our results into an array of results
    if (this._result.command) {
      if (!Array.isArray(this._results)) {
        this._results = [this._result]
      }
      this._result = new Result(this._rowMode, this._result._types)
      this._results.push(this._result)
    }
  }

  // associates row metadata from the supplied
  // message with this query object
  // metadata used when parsing row results
  handleRowDescription(msg) {
    this._checkForMultirow()
    this._result.addFields(msg.fields)
    this._accumulateRows = this.callback || !this.listeners('row').length
  }

  handleDataRow(msg) {
    let row

    if (this._canceledDueToError) {
      return
    }

    try {
      row = this._result.parseRow(msg.fields)
    } catch (err) {
      this._canceledDueToError = err
      return
    }

    this.emit('row', row, this._result)
    if (this._accumulateRows) {
      this._result.addRow(row)
    }
  }

  handleCommandComplete(msg, connection) {
    this._checkForMultirow()
    this._result.addCommandComplete(msg)
    // need to sync after each command complete of a prepared statement
    // if we were using a row count which results in multiple calls to _getRows
    if (this.rows) {
      connection.sync()
    }
  }

  // if a named prepared statement is created with empty query text
  // the backend will send an emptyQuery message but *not* a command complete message
  // since we pipeline sync immediately after execute we don't need to do anything here
  // unless we have rows specified, in which case we did not pipeline the initial sync call
  handleEmptyQuery(connection) {
    if (this.rows) {
      connection.sync()
    }
  }

  handleError(err, connection) {
    // need to sync after error during a prepared statement
    if (this._canceledDueToError) {
      err = this._canceledDueToError
      this._canceledDueToError = false
    }
    // if callback supplied do not emit error event as uncaught error
    // events will bubble up to node process
    if (this.callback) {
      return this.callback(err)
    }
    this.emit('error', err)
  }

  handleReadyForQuery(con) {
    if (this._canceledDueToError) {
      return this.handleError(this._canceledDueToError, con)
    }
    if (this.callback) {
      try {
        this.callback(null, this._results)
      } catch (err) {
        process.nextTick(() => {
          throw err
        })
      }
    }
    this.emit('end', this._results)
  }

  submit(connection) {
    if (typeof this.text !== 'string' && typeof this.name !== 'string') {
      return new Error('A query must have either text or a name. Supplying neither is unsupported.')
    }
    const previous = connection.parsedStatements[this.name]
    if (this.text && previous && this.text !== previous) {
      return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`)
    }
    if (this.values && !Array.isArray(this.values)) {
      return new Error('Query values must be an array')
    }
    if (this.requiresPreparation()) {
      // If we're using the extended query protocol we fire off several separate commands
      // to the backend. On some versions of node & some operating system versions
      // the network stack writes each message separately instead of buffering them together
      // causing the client & network to send more slowly. Corking & uncorking the stream
      // allows node to buffer up the messages internally before sending them all off at once.
      // note: we're checking for existence of cork/uncork because some versions of streams
      // might not have this (cloudflare?)
      connection.stream.cork && connection.stream.cork()
      try {
        this.prepare(connection)
      } finally {
        // while unlikely for this.prepare to throw, if it does & we don't uncork this stream
        // this client becomes unresponsive, so put in finally block "just in case"
        connection.stream.uncork && connection.stream.uncork()
      }
    } else {
      connection.query(this.text)
    }
    return null
  }

  hasBeenParsed(connection) {
    return this.name && connection.parsedStatements[this.name]
  }

  handlePortalSuspended(connection) {
    this._getRows(connection, this.rows)
  }

  _getRows(connection, rows) {
    connection.execute({
      portal: this.portal,
      rows: rows,
    })
    // if we're not reading pages of rows send the sync command
    // to indicate the pipeline is finished
    if (!rows) {
      connection.sync()
    } else {
      // otherwise flush the call out to read more rows
      connection.flush()
    }
  }

  // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
  prepare(connection) {
    // TODO refactor this poor encapsulation
    if (!this.hasBeenParsed(connection)) {
      connection.parse({
        text: this.text,
        name: this.name,
        types: this.types,
      })
    }

    // because we're mapping user supplied values to
    // postgres wire protocol compatible values it could
    // throw an exception, so try/catch this section
    try {
      connection.bind({
        portal: this.portal,
        statement: this.name,
        values: this.values,
        binary: this.binary,
        valueMapper: utils.prepareValue,
      })
    } catch (err) {
      this.handleError(err, connection)
      return
    }

    connection.describe({
      type: 'P',
      name: this.portal || '',
    })

    this._getRows(connection, this.rows)
  }

  handleCopyInResponse(connection) {
    connection.sendCopyFail('No source stream defined')
  }

  handleCopyData(msg, connection) {
    // noop
  }
}

module.exports = Query


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/result.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const types = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/index.js")

const matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/

// result object returned from query
// in the 'end' event and also
// passed as second argument to provided callback
class Result {
  constructor(rowMode, types) {
    this.command = null
    this.rowCount = null
    this.oid = null
    this.rows = []
    this.fields = []
    this._parsers = undefined
    this._types = types
    this.RowCtor = null
    this.rowAsArray = rowMode === 'array'
    if (this.rowAsArray) {
      this.parseRow = this._parseRowAsArray
    }
    this._prebuiltEmptyResultObject = null
  }

  // adds a command complete message
  addCommandComplete(msg) {
    let match
    if (msg.text) {
      // pure javascript
      match = matchRegexp.exec(msg.text)
    } else {
      // native bindings
      match = matchRegexp.exec(msg.command)
    }
    if (match) {
      this.command = match[1]
      if (match[3]) {
        // COMMAND OID ROWS
        this.oid = parseInt(match[2], 10)
        this.rowCount = parseInt(match[3], 10)
      } else if (match[2]) {
        // COMMAND ROWS
        this.rowCount = parseInt(match[2], 10)
      }
    }
  }

  _parseRowAsArray(rowData) {
    const row = new Array(rowData.length)
    for (let i = 0, len = rowData.length; i < len; i++) {
      const rawValue = rowData[i]
      if (rawValue !== null) {
        row[i] = this._parsers[i](rawValue)
      } else {
        row[i] = null
      }
    }
    return row
  }

  parseRow(rowData) {
    const row = { ...this._prebuiltEmptyResultObject }
    for (let i = 0, len = rowData.length; i < len; i++) {
      const rawValue = rowData[i]
      const field = this.fields[i].name
      if (rawValue !== null) {
        const v = this.fields[i].format === 'binary' ? Buffer.from(rawValue) : rawValue
        row[field] = this._parsers[i](v)
      } else {
        row[field] = null
      }
    }
    return row
  }

  addRow(row) {
    this.rows.push(row)
  }

  addFields(fieldDescriptions) {
    // clears field definitions
    // multiple query statements in 1 action can result in multiple sets
    // of rowDescriptions...eg: 'select NOW(); select 1::int;'
    // you need to reset the fields
    this.fields = fieldDescriptions
    if (this.fields.length) {
      this._parsers = new Array(fieldDescriptions.length)
    }

    const row = {}

    for (let i = 0; i < fieldDescriptions.length; i++) {
      const desc = fieldDescriptions[i]
      row[desc.name] = null

      if (this._types) {
        this._parsers[i] = this._types.getTypeParser(desc.dataTypeID, desc.format || 'text')
      } else {
        this._parsers[i] = types.getTypeParser(desc.dataTypeID, desc.format || 'text')
      }
    }

    this._prebuiltEmptyResultObject = { ...row }
  }
}

module.exports = Result


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/stream.js"(module, __unused_rspack_exports, __webpack_require__) {
const { getStream, getSecureStream } = getStreamFuncs()

module.exports = {
  /**
   * Get a socket stream compatible with the current runtime environment.
   * @returns {Duplex}
   */
  getStream,
  /**
   * Get a TLS secured socket, compatible with the current environment,
   * using the socket and other settings given in `options`.
   * @returns {Duplex}
   */
  getSecureStream,
}

/**
 * The stream functions that work in Node.js
 */
function getNodejsStreamFuncs() {
  function getStream(ssl) {
    const net = __webpack_require__("net")
    return new net.Socket()
  }

  function getSecureStream(options) {
    const tls = __webpack_require__("tls")
    return tls.connect(options)
  }
  return {
    getStream,
    getSecureStream,
  }
}

/**
 * The stream functions that work in Cloudflare Workers
 */
function getCloudflareStreamFuncs() {
  function getStream(ssl) {
    const { CloudflareSocket } = __webpack_require__("../../node_modules/.pnpm/pg-cloudflare@1.3.0/node_modules/pg-cloudflare/dist/empty.js")
    return new CloudflareSocket(ssl)
  }

  function getSecureStream(options) {
    options.socket.startTls(options)
    return options.socket
  }
  return {
    getStream,
    getSecureStream,
  }
}

/**
 * Are we running in a Cloudflare Worker?
 *
 * @returns true if the code is currently running inside a Cloudflare Worker.
 */
function isCloudflareRuntime() {
  // Since 2022-03-21 the `global_navigator` compatibility flag is on for Cloudflare Workers
  // which means that `navigator.userAgent` will be defined.
  // eslint-disable-next-line no-undef
  if (typeof navigator === 'object' && navigator !== null && typeof navigator.userAgent === 'string') {
    // eslint-disable-next-line no-undef
    return navigator.userAgent === 'Cloudflare-Workers'
  }
  // In case `navigator` or `navigator.userAgent` is not defined then try a more sneaky approach
  if (typeof Response === 'function') {
    const resp = new Response(null, { cf: { thing: true } })
    if (typeof resp.cf === 'object' && resp.cf !== null && resp.cf.thing) {
      return true
    }
  }
  return false
}

function getStreamFuncs() {
  if (isCloudflareRuntime()) {
    return getCloudflareStreamFuncs()
  }
  return getNodejsStreamFuncs()
}


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/type-overrides.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const types = __webpack_require__("../../node_modules/.pnpm/pg-types@2.2.0/node_modules/pg-types/index.js")

function TypeOverrides(userTypes) {
  this._types = userTypes || types
  this.text = {}
  this.binary = {}
}

TypeOverrides.prototype.getOverrides = function (format) {
  switch (format) {
    case 'text':
      return this.text
    case 'binary':
      return this.binary
    default:
      return {}
  }
}

TypeOverrides.prototype.setTypeParser = function (oid, format, parseFn) {
  if (typeof format === 'function') {
    parseFn = format
    format = 'text'
  }
  this.getOverrides(format)[oid] = parseFn
}

TypeOverrides.prototype.getTypeParser = function (oid, format) {
  format = format || 'text'
  return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format)
}

module.exports = TypeOverrides


},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/utils.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const defaults = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/defaults.js")

const util = __webpack_require__("util")
const { isDate } = util.types || util // Node 8 doesn't have `util.types`

function escapeElement(elementRepresentation) {
  const escaped = elementRepresentation.replace(/\\/g, '\\\\').replace(/"/g, '\\"')

  return '"' + escaped + '"'
}

// convert a JS array to a postgres array literal
// uses comma separator so won't work for types like box that use
// a different array separator.
function arrayString(val) {
  let result = '{'
  for (let i = 0; i < val.length; i++) {
    if (i > 0) {
      result = result + ','
    }
    if (val[i] === null || typeof val[i] === 'undefined') {
      result = result + 'NULL'
    } else if (Array.isArray(val[i])) {
      result = result + arrayString(val[i])
    } else if (ArrayBuffer.isView(val[i])) {
      let item = val[i]
      if (!(item instanceof Buffer)) {
        const buf = Buffer.from(item.buffer, item.byteOffset, item.byteLength)
        if (buf.length === item.byteLength) {
          item = buf
        } else {
          item = buf.slice(item.byteOffset, item.byteOffset + item.byteLength)
        }
      }
      result += '\\\\x' + item.toString('hex')
    } else {
      result += escapeElement(prepareValue(val[i]))
    }
  }
  result = result + '}'
  return result
}

// converts values from javascript types
// to their 'raw' counterparts for use as a postgres parameter
// note: you can override this function to provide your own conversion mechanism
// for complex types, etc...
const prepareValue = function (val, seen) {
  // null and undefined are both null for postgres
  if (val == null) {
    return null
  }
  if (typeof val === 'object') {
    if (val instanceof Buffer) {
      return val
    }
    if (ArrayBuffer.isView(val)) {
      const buf = Buffer.from(val.buffer, val.byteOffset, val.byteLength)
      if (buf.length === val.byteLength) {
        return buf
      }
      return buf.slice(val.byteOffset, val.byteOffset + val.byteLength) // Node.js v4 does not support those Buffer.from params
    }
    if (isDate(val)) {
      if (defaults.parseInputDatesAsUTC) {
        return dateToStringUTC(val)
      } else {
        return dateToString(val)
      }
    }
    if (Array.isArray(val)) {
      return arrayString(val)
    }

    return prepareObject(val, seen)
  }
  return val.toString()
}

function prepareObject(val, seen) {
  if (val && typeof val.toPostgres === 'function') {
    seen = seen || []
    if (seen.indexOf(val) !== -1) {
      throw new Error('circular reference detected while preparing "' + val + '" for query')
    }
    seen.push(val)

    return prepareValue(val.toPostgres(prepareValue), seen)
  }
  return JSON.stringify(val)
}

function dateToString(date) {
  let offset = -date.getTimezoneOffset()

  let year = date.getFullYear()
  const isBCYear = year < 1
  if (isBCYear) year = Math.abs(year) + 1 // negative years are 1 off their BC representation

  let ret =
    String(year).padStart(4, '0') +
    '-' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(date.getDate()).padStart(2, '0') +
    'T' +
    String(date.getHours()).padStart(2, '0') +
    ':' +
    String(date.getMinutes()).padStart(2, '0') +
    ':' +
    String(date.getSeconds()).padStart(2, '0') +
    '.' +
    String(date.getMilliseconds()).padStart(3, '0')

  if (offset < 0) {
    ret += '-'
    offset *= -1
  } else {
    ret += '+'
  }

  ret += String(Math.floor(offset / 60)).padStart(2, '0') + ':' + String(offset % 60).padStart(2, '0')
  if (isBCYear) ret += ' BC'
  return ret
}

function dateToStringUTC(date) {
  let year = date.getUTCFullYear()
  const isBCYear = year < 1
  if (isBCYear) year = Math.abs(year) + 1 // negative years are 1 off their BC representation

  let ret =
    String(year).padStart(4, '0') +
    '-' +
    String(date.getUTCMonth() + 1).padStart(2, '0') +
    '-' +
    String(date.getUTCDate()).padStart(2, '0') +
    'T' +
    String(date.getUTCHours()).padStart(2, '0') +
    ':' +
    String(date.getUTCMinutes()).padStart(2, '0') +
    ':' +
    String(date.getUTCSeconds()).padStart(2, '0') +
    '.' +
    String(date.getUTCMilliseconds()).padStart(3, '0')

  ret += '+00:00'
  if (isBCYear) ret += ' BC'
  return ret
}

function normalizeQueryConfig(config, values, callback) {
  // can take in strings or config objects
  config = typeof config === 'string' ? { text: config } : config
  if (values) {
    if (typeof values === 'function') {
      config.callback = values
    } else {
      config.values = values
    }
  }
  if (callback) {
    config.callback = callback
  }
  return config
}

// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
const escapeIdentifier = function (str) {
  return '"' + str.replace(/"/g, '""') + '"'
}

const escapeLiteral = function (str) {
  let hasBackslash = false
  let escaped = "'"

  if (str == null) {
    return "''"
  }

  if (typeof str !== 'string') {
    return "''"
  }

  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    if (c === "'") {
      escaped += c + c
    } else if (c === '\\') {
      escaped += c + c
      hasBackslash = true
    } else {
      escaped += c
    }
  }

  escaped += "'"

  if (hasBackslash === true) {
    escaped = ' E' + escaped
  }

  return escaped
}

module.exports = {
  prepareValue: function prepareValueWrapper(value) {
    // this ensures that extra arguments do not get passed into prepareValue
    // by accident, eg: from calling values.map(utils.prepareValue)
    return prepareValue(value)
  },
  normalizeQueryConfig,
  escapeIdentifier,
  escapeLiteral,
}


},
"../../node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/helper.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


var path = __webpack_require__("path")
  , Stream = (__webpack_require__("stream")/* .Stream */.Stream)
  , split = __webpack_require__("../../node_modules/.pnpm/split2@4.2.0/node_modules/split2/index.js")
  , util = __webpack_require__("util")
  , defaultPort = 5432
  , isWin = (process.platform === 'win32')
  , warnStream = process.stderr
;


var S_IRWXG = 56     //    00070(8)
  , S_IRWXO = 7      //    00007(8)
  , S_IFMT  = 61440  // 00170000(8)
  , S_IFREG = 32768  //  0100000(8)
;
function isRegFile(mode) {
    return ((mode & S_IFMT) == S_IFREG);
}

var fieldNames = [ 'host', 'port', 'database', 'user', 'password' ];
var nrOfFields = fieldNames.length;
var passKey = fieldNames[ nrOfFields -1 ];


function warn() {
    var isWritable = (
        warnStream instanceof Stream &&
          true === warnStream.writable
    );

    if (isWritable) {
        var args = Array.prototype.slice.call(arguments).concat("\n");
        warnStream.write( util.format.apply(util, args) );
    }
}


Object.defineProperty(module.exports, "isWin", ({
    get : function() {
        return isWin;
    } ,
    set : function(val) {
        isWin = val;
    }
}));


module.exports.warnTo = function(stream) {
    var old = warnStream;
    warnStream = stream;
    return old;
};

module.exports.getFileName = function(rawEnv){
    var env = rawEnv || process.env;
    var file = env.PGPASSFILE || (
        isWin ?
          path.join( env.APPDATA || './' , 'postgresql', 'pgpass.conf' ) :
          path.join( env.HOME || './', '.pgpass' )
    );
    return file;
};

module.exports.usePgPass = function(stats, fname) {
    if (Object.prototype.hasOwnProperty.call(process.env, 'PGPASSWORD')) {
        return false;
    }

    if (isWin) {
        return true;
    }

    fname = fname || '<unkn>';

    if (! isRegFile(stats.mode)) {
        warn('WARNING: password file "%s" is not a plain file', fname);
        return false;
    }

    if (stats.mode & (S_IRWXG | S_IRWXO)) {
        /* If password file is insecure, alert the user and ignore it. */
        warn('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', fname);
        return false;
    }

    return true;
};


var matcher = module.exports.match = function(connInfo, entry) {
    return fieldNames.slice(0, -1).reduce(function(prev, field, idx){
        if (idx == 1) {
            // the port
            if ( Number( connInfo[field] || defaultPort ) === Number( entry[field] ) ) {
                return prev && true;
            }
        }
        return prev && (
            entry[field] === '*' ||
              entry[field] === connInfo[field]
        );
    }, true);
};


module.exports.getPassword = function(connInfo, stream, cb) {
    var pass;
    var lineStream = stream.pipe(split());

    function onLine(line) {
        var entry = parseLine(line);
        if (entry && isValidEntry(entry) && matcher(connInfo, entry)) {
            pass = entry[passKey];
            lineStream.end(); // -> calls onEnd(), but pass is set now
        }
    }

    var onEnd = function() {
        stream.destroy();
        cb(pass);
    };

    var onErr = function(err) {
        stream.destroy();
        warn('WARNING: error on reading file: %s', err);
        cb(undefined);
    };

    stream.on('error', onErr);
    lineStream
        .on('data', onLine)
        .on('end', onEnd)
        .on('error', onErr)
    ;

};


var parseLine = module.exports.parseLine = function(line) {
    if (line.length < 11 || line.match(/^\s+#/)) {
        return null;
    }

    var curChar = '';
    var prevChar = '';
    var fieldIdx = 0;
    var startIdx = 0;
    var endIdx = 0;
    var obj = {};
    var isLastField = false;
    var addToObj = function(idx, i0, i1) {
        var field = line.substring(i0, i1);

        if (! Object.hasOwnProperty.call(process.env, 'PGPASS_NO_DEESCAPE')) {
            field = field.replace(/\\([:\\])/g, '$1');
        }

        obj[ fieldNames[idx] ] = field;
    };

    for (var i = 0 ; i < line.length-1 ; i += 1) {
        curChar = line.charAt(i+1);
        prevChar = line.charAt(i);

        isLastField = (fieldIdx == nrOfFields-1);

        if (isLastField) {
            addToObj(fieldIdx, startIdx);
            break;
        }

        if (i >= 0 && curChar == ':' && prevChar !== '\\') {
            addToObj(fieldIdx, startIdx, i+1);

            startIdx = i+2;
            fieldIdx += 1;
        }
    }

    obj = ( Object.keys(obj).length === nrOfFields ) ? obj : null;

    return obj;
};


var isValidEntry = module.exports.isValidEntry = function(entry){
    var rules = {
        // host
        0 : function(x){
            return x.length > 0;
        } ,
        // port
        1 : function(x){
            if (x === '*') {
                return true;
            }
            x = Number(x);
            return (
                isFinite(x) &&
                  x > 0 &&
                  x < 9007199254740992 &&
                  Math.floor(x) === x
            );
        } ,
        // database
        2 : function(x){
            return x.length > 0;
        } ,
        // username
        3 : function(x){
            return x.length > 0;
        } ,
        // password
        4 : function(x){
            return x.length > 0;
        }
    };

    for (var idx = 0 ; idx < fieldNames.length ; idx += 1) {
        var rule = rules[idx];
        var value = entry[ fieldNames[idx] ] || '';

        var res = rule(value);
        if (!res) {
            return false;
        }
    }

    return true;
};



},
"../../node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


var path = __webpack_require__("path")
  , fs = __webpack_require__("fs")
  , helper = __webpack_require__("../../node_modules/.pnpm/pgpass@1.0.5/node_modules/pgpass/lib/helper.js")
;


module.exports = function(connInfo, cb) {
    var file = helper.getFileName();
    
    fs.stat(file, function(err, stat){
        if (err || !helper.usePgPass(stat, file)) {
            return cb(undefined);
        }

        var st = fs.createReadStream(file);

        helper.getPassword(connInfo, st, cb);
    });
};

module.exports.warnTo = helper.warnTo;


},
"../../node_modules/.pnpm/postgres-array@2.0.0/node_modules/postgres-array/index.js"(__unused_rspack_module, exports) {
"use strict";


exports.parse = function (source, transform) {
  return new ArrayParser(source, transform).parse()
}

class ArrayParser {
  constructor (source, transform) {
    this.source = source
    this.transform = transform || identity
    this.position = 0
    this.entries = []
    this.recorded = []
    this.dimension = 0
  }

  isEof () {
    return this.position >= this.source.length
  }

  nextCharacter () {
    var character = this.source[this.position++]
    if (character === '\\') {
      return {
        value: this.source[this.position++],
        escaped: true
      }
    }
    return {
      value: character,
      escaped: false
    }
  }

  record (character) {
    this.recorded.push(character)
  }

  newEntry (includeEmpty) {
    var entry
    if (this.recorded.length > 0 || includeEmpty) {
      entry = this.recorded.join('')
      if (entry === 'NULL' && !includeEmpty) {
        entry = null
      }
      if (entry !== null) entry = this.transform(entry)
      this.entries.push(entry)
      this.recorded = []
    }
  }

  consumeDimensions () {
    if (this.source[0] === '[') {
      while (!this.isEof()) {
        var char = this.nextCharacter()
        if (char.value === '=') break
      }
    }
  }

  parse (nested) {
    var character, parser, quote
    this.consumeDimensions()
    while (!this.isEof()) {
      character = this.nextCharacter()
      if (character.value === '{' && !quote) {
        this.dimension++
        if (this.dimension > 1) {
          parser = new ArrayParser(this.source.substr(this.position - 1), this.transform)
          this.entries.push(parser.parse(true))
          this.position += parser.position - 2
        }
      } else if (character.value === '}' && !quote) {
        this.dimension--
        if (!this.dimension) {
          this.newEntry()
          if (nested) return this.entries
        }
      } else if (character.value === '"' && !character.escaped) {
        if (quote) this.newEntry(true)
        quote = !quote
      } else if (character.value === ',' && !quote) {
        this.newEntry()
      } else {
        this.record(character.value)
      }
    }
    if (this.dimension !== 0) {
      throw new Error('array dimension not balanced')
    }
    return this.entries
  }
}

function identity (value) {
  return value
}


},
"../../node_modules/.pnpm/postgres-array@3.0.4/node_modules/postgres-array/index.js"(__unused_rspack_module, exports) {
"use strict";


const BACKSLASH = '\\'
const DQUOT = '"'
const LBRACE = '{'
const RBRACE = '}'
const LBRACKET = '['
const EQUALS = '='
const COMMA = ','

/** When the raw value is this, it means a literal `null` */
const NULL_STRING = 'NULL'

/**
 * Parses an array according to
 * https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
 *
 * Trusts the data (mostly), so only hook up to trusted Postgres servers.
 */
function makeParseArrayWithTransform (transform) {
  const haveTransform = transform != null
  return function parseArray (str) {
    const rbraceIndex = str.length - 1
    if (rbraceIndex === 1) {
      return []
    }
    if (str[rbraceIndex] !== RBRACE) {
      throw new Error('Invalid array text - must end with }')
    }

    // If starts with `[`, it is specifying the index boundas. Skip past first `=`.
    let position = 0
    if (str[position] === LBRACKET) {
      position = str.indexOf(EQUALS) + 1
    }

    if (str[position++] !== LBRACE) {
      throw new Error('Invalid array text - must start with {')
    }
    const output = []
    let current = output
    const stack = []

    let currentStringStart = position
    let currentString = ''
    let expectValue = true

    for (; position < rbraceIndex; ++position) {
      let char = str[position]
      // > The array output routine will put double quotes around element values if
      // > they are empty strings, contain curly braces, delimiter characters, double
      // > quotes, backslashes, or white space, or match the word NULL. Double quotes
      // > and backslashes embedded in element values will be backslash-escaped.
      if (char === DQUOT) {
        // It's escaped
        currentStringStart = ++position
        let dquot = str.indexOf(DQUOT, currentStringStart)
        let backSlash = str.indexOf(BACKSLASH, currentStringStart)
        while (backSlash !== -1 && backSlash < dquot) {
          position = backSlash
          const part = str.slice(currentStringStart, position)
          currentString += part
          currentStringStart = ++position
          if (dquot === position++) {
            // This was an escaped doublequote; find the next one!
            dquot = str.indexOf(DQUOT, position)
          }
          // Either way, find the next backslash
          backSlash = str.indexOf(BACKSLASH, position)
        }
        position = dquot
        const part = str.slice(currentStringStart, position)
        currentString += part
        current.push(haveTransform ? transform(currentString) : currentString)
        currentString = ''
        expectValue = false
      } else if (char === LBRACE) {
        const newArray = []
        current.push(newArray)
        stack.push(current)
        current = newArray
        currentStringStart = position + 1
        expectValue = true
      } else if (char === COMMA) {
        expectValue = true
      } else if (char === RBRACE) {
        expectValue = false
        const arr = stack.pop()
        if (arr === undefined) {
          throw new Error("Invalid array text - too many '}'")
        }
        current = arr
      } else if (expectValue) {
        currentStringStart = position
        while (
          (char = str[position]) !== COMMA &&
          char !== RBRACE &&
          position < rbraceIndex
        ) {
          ++position
        }
        const part = str.slice(currentStringStart, position--)
        current.push(
          part === NULL_STRING ? null : haveTransform ? transform(part) : part
        )
        expectValue = false
      } else {
        throw new Error('Was expecting delimeter')
      }
    }

    return output
  }
}

const parseArray = makeParseArrayWithTransform()

exports.parse = (source, transform) =>
  transform != null
    ? makeParseArrayWithTransform(transform)(source)
    : parseArray(source)


},
"../../node_modules/.pnpm/postgres-bytea@1.0.1/node_modules/postgres-bytea/index.js"(module) {
"use strict";


var bufferFrom = Buffer.from || Buffer

module.exports = function parseBytea (input) {
  if (/^\\x/.test(input)) {
    // new 'hex' style response (pg >9.0)
    return bufferFrom(input.substr(2), 'hex')
  }
  var output = ''
  var i = 0
  while (i < input.length) {
    if (input[i] !== '\\') {
      output += input[i]
      ++i
    } else {
      if (/[0-7]{3}/.test(input.substr(i + 1, 3))) {
        output += String.fromCharCode(parseInt(input.substr(i + 1, 3), 8))
        i += 4
      } else {
        var backslashes = 1
        while (i + backslashes < input.length && input[i + backslashes] === '\\') {
          backslashes++
        }
        for (var k = 0; k < Math.floor(backslashes / 2); ++k) {
          output += '\\'
        }
        i += Math.floor(backslashes / 2) * 2
      }
    }
  }
  return bufferFrom(output, 'binary')
}


},
"../../node_modules/.pnpm/postgres-date@1.0.7/node_modules/postgres-date/index.js"(module) {
"use strict";


var DATE_TIME = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/
var DATE = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/
var TIME_ZONE = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/
var INFINITY = /^-?infinity$/

module.exports = function parseDate (isoDate) {
  if (INFINITY.test(isoDate)) {
    // Capitalize to Infinity before passing to Number
    return Number(isoDate.replace('i', 'I'))
  }
  var matches = DATE_TIME.exec(isoDate)

  if (!matches) {
    // Force YYYY-MM-DD dates to be parsed as local time
    return getDate(isoDate) || null
  }

  var isBC = !!matches[8]
  var year = parseInt(matches[1], 10)
  if (isBC) {
    year = bcYearToNegativeYear(year)
  }

  var month = parseInt(matches[2], 10) - 1
  var day = matches[3]
  var hour = parseInt(matches[4], 10)
  var minute = parseInt(matches[5], 10)
  var second = parseInt(matches[6], 10)

  var ms = matches[7]
  ms = ms ? 1000 * parseFloat(ms) : 0

  var date
  var offset = timeZoneOffset(isoDate)
  if (offset != null) {
    date = new Date(Date.UTC(year, month, day, hour, minute, second, ms))

    // Account for years from 0 to 99 being interpreted as 1900-1999
    // by Date.UTC / the multi-argument form of the Date constructor
    if (is0To99(year)) {
      date.setUTCFullYear(year)
    }

    if (offset !== 0) {
      date.setTime(date.getTime() - offset)
    }
  } else {
    date = new Date(year, month, day, hour, minute, second, ms)

    if (is0To99(year)) {
      date.setFullYear(year)
    }
  }

  return date
}

function getDate (isoDate) {
  var matches = DATE.exec(isoDate)
  if (!matches) {
    return
  }

  var year = parseInt(matches[1], 10)
  var isBC = !!matches[4]
  if (isBC) {
    year = bcYearToNegativeYear(year)
  }

  var month = parseInt(matches[2], 10) - 1
  var day = matches[3]
  // YYYY-MM-DD will be parsed as local time
  var date = new Date(year, month, day)

  if (is0To99(year)) {
    date.setFullYear(year)
  }

  return date
}

// match timezones:
// Z (UTC)
// -05
// +06:30
function timeZoneOffset (isoDate) {
  if (isoDate.endsWith('+00')) {
    return 0
  }

  var zone = TIME_ZONE.exec(isoDate.split(' ')[1])
  if (!zone) return
  var type = zone[1]

  if (type === 'Z') {
    return 0
  }
  var sign = type === '-' ? -1 : 1
  var offset = parseInt(zone[2], 10) * 3600 +
    parseInt(zone[3] || 0, 10) * 60 +
    parseInt(zone[4] || 0, 10)

  return offset * sign * 1000
}

function bcYearToNegativeYear (year) {
  // Account for numerical difference between representations of BC years
  // See: https://github.com/bendrucker/postgres-date/issues/5
  return -(year - 1)
}

function is0To99 (num) {
  return num >= 0 && num < 100
}


},
"../../node_modules/.pnpm/postgres-interval@1.2.0/node_modules/postgres-interval/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


var extend = __webpack_require__("../../node_modules/.pnpm/xtend@4.0.2/node_modules/xtend/mutable.js")

module.exports = PostgresInterval

function PostgresInterval (raw) {
  if (!(this instanceof PostgresInterval)) {
    return new PostgresInterval(raw)
  }
  extend(this, parse(raw))
}
var properties = ['seconds', 'minutes', 'hours', 'days', 'months', 'years']
PostgresInterval.prototype.toPostgres = function () {
  var filtered = properties.filter(this.hasOwnProperty, this)

  // In addition to `properties`, we need to account for fractions of seconds.
  if (this.milliseconds && filtered.indexOf('seconds') < 0) {
    filtered.push('seconds')
  }

  if (filtered.length === 0) return '0'
  return filtered
    .map(function (property) {
      var value = this[property] || 0

      // Account for fractional part of seconds,
      // remove trailing zeroes.
      if (property === 'seconds' && this.milliseconds) {
        value = (value + this.milliseconds / 1000).toFixed(6).replace(/\.?0+$/, '')
      }

      return value + ' ' + property
    }, this)
    .join(' ')
}

var propertiesISOEquivalent = {
  years: 'Y',
  months: 'M',
  days: 'D',
  hours: 'H',
  minutes: 'M',
  seconds: 'S'
}
var dateProperties = ['years', 'months', 'days']
var timeProperties = ['hours', 'minutes', 'seconds']
// according to ISO 8601
PostgresInterval.prototype.toISOString = PostgresInterval.prototype.toISO = function () {
  var datePart = dateProperties
    .map(buildProperty, this)
    .join('')

  var timePart = timeProperties
    .map(buildProperty, this)
    .join('')

  return 'P' + datePart + 'T' + timePart

  function buildProperty (property) {
    var value = this[property] || 0

    // Account for fractional part of seconds,
    // remove trailing zeroes.
    if (property === 'seconds' && this.milliseconds) {
      value = (value + this.milliseconds / 1000).toFixed(6).replace(/0+$/, '')
    }

    return value + propertiesISOEquivalent[property]
  }
}

var NUMBER = '([+-]?\\d+)'
var YEAR = NUMBER + '\\s+years?'
var MONTH = NUMBER + '\\s+mons?'
var DAY = NUMBER + '\\s+days?'
var TIME = '([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?'
var INTERVAL = new RegExp([YEAR, MONTH, DAY, TIME].map(function (regexString) {
  return '(' + regexString + ')?'
})
  .join('\\s*'))

// Positions of values in regex match
var positions = {
  years: 2,
  months: 4,
  days: 6,
  hours: 9,
  minutes: 10,
  seconds: 11,
  milliseconds: 12
}
// We can use negative time
var negatives = ['hours', 'minutes', 'seconds', 'milliseconds']

function parseMilliseconds (fraction) {
  // add omitted zeroes
  var microseconds = fraction + '000000'.slice(fraction.length)
  return parseInt(microseconds, 10) / 1000
}

function parse (interval) {
  if (!interval) return {}
  var matches = INTERVAL.exec(interval)
  var isNegative = matches[8] === '-'
  return Object.keys(positions)
    .reduce(function (parsed, property) {
      var position = positions[property]
      var value = matches[position]
      // no empty string
      if (!value) return parsed
      // milliseconds are actually microseconds (up to 6 digits)
      // with omitted trailing zeroes.
      value = property === 'milliseconds'
        ? parseMilliseconds(value)
        : parseInt(value, 10)
      // no zeros
      if (!value) return parsed
      if (isNegative && ~negatives.indexOf(property)) {
        value *= -1
      }
      parsed[property] = value
      return parsed
    }, {})
}


},
"../../node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js"(module, exports, __webpack_require__) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__("buffer")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/comparator.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }

  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    comp = comp.trim().split(/\s+/).join(' ')
    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    options = parseOptions(options)

    // Special cases where nothing can possibly be lower
    if (options.includePrerelease &&
      (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
      return false
    }
    if (!options.includePrerelease &&
      (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
      return false
    }

    // Same direction increasing (> or >=)
    if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
      return true
    }
    // Same direction decreasing (< or <=)
    if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
      return true
    }
    // same SemVer and both sides are inclusive (<= or >=)
    if (
      (this.semver.version === comp.semver.version) &&
      this.operator.includes('=') && comp.operator.includes('=')) {
      return true
    }
    // opposite directions less than
    if (cmp(this.semver, '<', comp.semver, options) &&
      this.operator.startsWith('>') && comp.operator.startsWith('<')) {
      return true
    }
    // opposite directions greater than
    if (cmp(this.semver, '>', comp.semver, options) &&
      this.operator.startsWith('<') && comp.operator.startsWith('>')) {
      return true
    }
    return false
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/parse-options.js")
const { safeRe: re, t } = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/re.js")
const cmp = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/cmp.js")
const debug = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SPACE_CHARACTERS = /\s+/g

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.formatted = undefined
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First reduce all whitespace as much as possible so we do not have to rely
    // on potentially slow regexes like \s*. This is then stored and used for
    // future error messages as well.
    this.raw = range.trim().replace(SPACE_CHARACTERS, ' ')

    // First, split on ||
    this.set = this.raw
      .split('||')
      // map the range to a 2d array of comparators
      .map(r => this.parseRange(r.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${this.raw}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0) {
        this.set = [first]
      } else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.formatted = undefined
  }

  get range () {
    if (this.formatted === undefined) {
      this.formatted = ''
      for (let i = 0; i < this.set.length; i++) {
        if (i > 0) {
          this.formatted += '||'
        }
        const comps = this.set[i]
        for (let k = 0; k < comps.length; k++) {
          if (k > 0) {
            this.formatted += ' '
          }
          this.formatted += comps[k].toString().trim()
        }
      }
    }
    return this.formatted
  }

  format () {
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts =
      (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) |
      (this.options.loose && FLAG_LOOSE)
    const memoKey = memoOpts + ':' + range
    const cached = cache.get(memoKey)
    if (cached) {
      return cached
    }

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)

    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range)

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)
    debug('tilde trim', range)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)
    debug('caret trim', range)

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    let rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))

    if (loose) {
      // in loose mode, throw out any that are not valid comparators
      rangeList = rangeList.filter(comp => {
        debug('loose invalid filter', comp, this.options)
        return !!comp.match(re[t.COMPARATORLOOSE])
      })
    }
    debug('range list', rangeList)

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const rangeMap = new Map()
    const comparators = rangeList.map(comp => new Comparator(comp, this.options))
    for (const comp of comparators) {
      if (isNullSet(comp)) {
        return [comp]
      }
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has('')) {
      rangeMap.delete('')
    }

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}

module.exports = Range

const LRU = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/lrucache.js")
const cache = new LRU()

const parseOptions = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/parse-options.js")
const Comparator = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/comparator.js")
const debug = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const {
  safeRe: re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace,
} = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/re.js")
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/constants.js")

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  comp = comp.replace(re[t.BUILD], '')
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options) => {
  return comp
    .trim()
    .split(/\s+/)
    .map((c) => replaceTilde(c, options))
    .join(' ')
}

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options) => {
  return comp
    .trim()
    .split(/\s+/)
    .map((c) => replaceCaret(c, options))
    .join(' ')
}

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp
    .split(/\s+/)
    .map((c) => replaceXRange(c, options))
    .join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<') {
        pr = '-0'
      }

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp
    .trim()
    .replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp
    .trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return `${from} ${to}`.trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const debug = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/constants.js")
const { safeRe: re, t } = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
        version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    if (this.major < other.major) {
      return -1
    }
    if (this.major > other.major) {
      return 1
    }
    if (this.minor < other.minor) {
      return -1
    }
    if (this.minor > other.minor) {
      return 1
    }
    if (this.patch < other.patch) {
      return -1
    }
    if (this.patch > other.patch) {
      return 1
    }
    return 0
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('build compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    if (release.startsWith('pre')) {
      if (!identifier && identifierBase === false) {
        throw new Error('invalid increment argument: identifier is empty')
      }
      // Avoid an invalid semver results
      if (identifier) {
        const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE])
        if (!match || match[1] !== identifier) {
          throw new Error(`invalid identifier: ${identifier}`)
        }
      }
    }

    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier, identifierBase)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier, identifierBase)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier, identifierBase)
        this.inc('pre', identifier, identifierBase)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase)
        }
        this.inc('pre', identifier, identifierBase)
        break
      case 'release':
        if (this.prerelease.length === 0) {
          throw new Error(`version ${this.raw} is not a prerelease`)
        }
        this.prerelease.length = 0
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0

        if (this.prerelease.length === 0) {
          this.prerelease = [base]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base]
          if (identifierBase === false) {
            prerelease = [identifier]
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease
            }
          } else {
            this.prerelease = prerelease
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format()
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`
    }
    return this
  }
}

module.exports = SemVer


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/clean.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const parse = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/parse.js")
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/cmp.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const eq = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/eq.js")
const neq = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/neq.js")
const gt = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gt.js")
const gte = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gte.js")
const lt = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lt.js")
const lte = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a === b

    case '!==':
      if (typeof a === 'object') {
        a = a.version
      }
      if (typeof b === 'object') {
        b = b.version
      }
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/coerce.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const parse = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/parse.js")
const { safeRe: re, t } = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/re.js")

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL]
    let next
    while ((next = coerceRtlRegex.exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    coerceRtlRegex.lastIndex = -1
  }

  if (match === null) {
    return null
  }

  const major = match[2]
  const minor = match[3] || '0'
  const patch = match[4] || '0'
  const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : ''
  const build = options.includePrerelease && match[6] ? `+${match[6]}` : ''

  return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options)
}
module.exports = coerce


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare-build.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare-loose.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/diff.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const parse = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/parse.js")

const diff = (version1, version2) => {
  const v1 = parse(version1, null, true)
  const v2 = parse(version2, null, true)
  const comparison = v1.compare(v2)

  if (comparison === 0) {
    return null
  }

  const v1Higher = comparison > 0
  const highVersion = v1Higher ? v1 : v2
  const lowVersion = v1Higher ? v2 : v1
  const highHasPre = !!highVersion.prerelease.length
  const lowHasPre = !!lowVersion.prerelease.length

  if (lowHasPre && !highHasPre) {
    // Going from prerelease -> no prerelease requires some special casing

    // If the low version has only a major, then it will always be a major
    // Some examples:
    // 1.0.0-1 -> 1.0.0
    // 1.0.0-1 -> 1.1.1
    // 1.0.0-1 -> 2.0.0
    if (!lowVersion.patch && !lowVersion.minor) {
      return 'major'
    }

    // If the main part has no difference
    if (lowVersion.compareMain(highVersion) === 0) {
      if (lowVersion.minor && !lowVersion.patch) {
        return 'minor'
      }
      return 'patch'
    }
  }

  // add the `pre` prefix if we are going to a prerelease version
  const prefix = highHasPre ? 'pre' : ''

  if (v1.major !== v2.major) {
    return prefix + 'major'
  }

  if (v1.minor !== v2.minor) {
    return prefix + 'minor'
  }

  if (v1.patch !== v2.patch) {
    return prefix + 'patch'
  }

  // high and low are preleases
  return 'prerelease'
}

module.exports = diff


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/eq.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gt.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gte.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/inc.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")

const inc = (version, release, options, identifier, identifierBase) => {
  if (typeof (options) === 'string') {
    identifierBase = identifier
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(
      version instanceof SemVer ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version
  } catch (er) {
    return null
  }
}
module.exports = inc


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lt.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lte.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/major.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/minor.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/neq.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/parse.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
}

module.exports = parse


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/patch.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/prerelease.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const parse = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/parse.js")
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/rcompare.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/rsort.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compareBuild = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare-build.js")
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/satisfies.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/sort.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const compareBuild = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare-build.js")
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/valid.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const parse = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/re.js")
const constants = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/constants.js")
const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const identifiers = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/identifiers.js")
const parse = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/parse.js")
const valid = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/valid.js")
const clean = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/clean.js")
const inc = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/inc.js")
const diff = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/diff.js")
const major = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/major.js")
const minor = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/minor.js")
const patch = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/patch.js")
const prerelease = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/prerelease.js")
const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
const rcompare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/rcompare.js")
const compareLoose = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare-loose.js")
const compareBuild = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare-build.js")
const sort = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/sort.js")
const rsort = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/rsort.js")
const gt = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gt.js")
const lt = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lt.js")
const eq = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/eq.js")
const neq = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/neq.js")
const gte = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gte.js")
const lte = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lte.js")
const cmp = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/cmp.js")
const coerce = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/coerce.js")
const Comparator = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/comparator.js")
const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const satisfies = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/satisfies.js")
const toComparators = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/to-comparators.js")
const maxSatisfying = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/max-satisfying.js")
const minSatisfying = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/min-satisfying.js")
const minVersion = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/min-version.js")
const validRange = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/valid.js")
const outside = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/outside.js")
const gtr = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/gtr.js")
const ltr = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/ltr.js")
const intersects = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/intersects.js")
const simplifyRange = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/simplify.js")
const subset = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/subset.js")
module.exports = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
}


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/constants.js"(module) {
"use strict";


// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
]

module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
}


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/debug.js"(module) {
"use strict";


const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/identifiers.js"(module) {
"use strict";


const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a === b ? 0 : a < b ? -1 : 1
  }

  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/lrucache.js"(module) {
"use strict";


class LRUCache {
  constructor () {
    this.max = 1000
    this.map = new Map()
  }

  get (key) {
    const value = this.map.get(key)
    if (value === undefined) {
      return undefined
    } else {
      // Remove the key from the map and add it to the end
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }
  }

  delete (key) {
    return this.map.delete(key)
  }

  set (key, value) {
    const deleted = this.delete(key)

    if (!deleted && value !== undefined) {
      // If cache is full, delete the least recently used item
      if (this.map.size >= this.max) {
        const firstKey = this.map.keys().next().value
        this.delete(firstKey)
      }

      this.map.set(key, value)
    }

    return this
  }
}

module.exports = LRUCache


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/parse-options.js"(module) {
"use strict";


// parse out just the options we care about
const looseOption = Object.freeze({ loose: true })
const emptyOpts = Object.freeze({ })
const parseOptions = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
}
module.exports = parseOptions


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/re.js"(module, exports, __webpack_require__) {
"use strict";


const {
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_LENGTH,
} = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/constants.js")
const debug = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const safeRe = exports.safeRe = []
const src = exports.src = []
const safeSrc = exports.safeSrc = []
const t = exports.t = {}
let R = 0

const LETTERDASHNUMBER = '[a-zA-Z0-9-]'

// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
  ['\\s', 1],
  ['\\d', MAX_LENGTH],
  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
]

const makeSafeRegex = (value) => {
  for (const [token, max] of safeRegexReplacements) {
    value = value
      .split(`${token}*`).join(`${token}{0,${max}}`)
      .split(`${token}+`).join(`${token}{1,${max}}`)
  }
  return value
}

const createToken = (name, value, isGlobal) => {
  const safe = makeSafeRegex(value)
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  safeSrc[index] = safe
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '\\d+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`)

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numberic identifiers include numberic identifiers but can be longer.
// Therefore non-numberic identifiers must go first.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]
}|${src[t.NUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]
}|${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`)

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`)
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`)
createToken('COERCEFULL', src[t.COERCEPLAIN] +
              `(?:${src[t.PRERELEASE]})?` +
              `(?:${src[t.BUILD]})?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)
createToken('COERCERTLFULL', src[t.COERCEFULL], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/gtr.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/outside.js")
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/intersects.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2, options)
}
module.exports = intersects


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/ltr.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const outside = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/outside.js")
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/max-satisfying.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/min-satisfying.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/min-version.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const gt = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gt.js")

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin))) {
      minver = setMin
    }
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/outside.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const SemVer = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/semver.js")
const Comparator = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const satisfies = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/satisfies.js")
const gt = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gt.js")
const lt = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lt.js")
const lte = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/lte.js")
const gte = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/gte.js")

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/simplify.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")
module.exports = (versions, range, options) => {
  const set = []
  let first = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!first) {
        first = version
      }
    } else {
      if (prev) {
        set.push([first, prev])
      }
      prev = null
      first = null
    }
  }
  if (first) {
    set.push([first, null])
  }

  const ranges = []
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min)
    } else if (!max && min === v[0]) {
      ranges.push('*')
    } else if (!max) {
      ranges.push(`>=${min}`)
    } else if (min === v[0]) {
      ranges.push(`<=${max}`)
    } else {
      ranges.push(`${min} - ${max}`)
    }
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/subset.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const Comparator = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const satisfies = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/functions/compare.js")

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true
  }

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub) {
        continue OUTER
      }
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull) {
      return false
    }
  }
  return true
}

const minimumVersionWithPreRelease = [new Comparator('>=0.0.0-0')]
const minimumVersion = [new Comparator('>=0.0.0')]

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true
  }

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease
    } else {
      sub = minimumVersion
    }
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true
    } else {
      dom = minimumVersion
    }
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') {
      gt = higherGT(gt, c, options)
    } else if (c.operator === '<' || c.operator === '<=') {
      lt = lowerLT(lt, c, options)
    } else {
      eqSet.add(c.semver)
    }
  }

  if (eqSet.size > 1) {
    return null
  }

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0) {
      return null
    } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
      return null
    }
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options)) {
      return null
    }

    if (lt && !satisfies(eq, String(lt), options)) {
      return null
    }

    for (const c of dom) {
      if (!satisfies(eq, String(c), options)) {
        return false
      }
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt) {
          return false
        }
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
        return false
      }
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt) {
          return false
        }
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
        return false
      }
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0) {
      return false
    }
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0) {
    return false
  }

  if (lt && hasDomGT && !gt && gtltComp !== 0) {
    return false
  }

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre) {
    return false
  }

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a) {
    return b
  }
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/to-comparators.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


},
"../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/ranges/valid.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";


const Range = __webpack_require__("../../node_modules/.pnpm/semver@7.7.3/node_modules/semver/classes/range.js")
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


},
"../../node_modules/.pnpm/split2@4.2.0/node_modules/split2/index.js"(module, __unused_rspack_exports, __webpack_require__) {
"use strict";
/*
Copyright (c) 2014-2021, Matteo Collina <hello@matteocollina.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/



const { Transform } = __webpack_require__("stream")
const { StringDecoder } = __webpack_require__("string_decoder")
const kLast = Symbol('last')
const kDecoder = Symbol('decoder')

function transform (chunk, enc, cb) {
  let list
  if (this.overflow) { // Line buffer is full. Skip to start of next line.
    const buf = this[kDecoder].write(chunk)
    list = buf.split(this.matcher)

    if (list.length === 1) return cb() // Line ending not found. Discard entire chunk.

    // Line ending found. Discard trailing fragment of previous line and reset overflow state.
    list.shift()
    this.overflow = false
  } else {
    this[kLast] += this[kDecoder].write(chunk)
    list = this[kLast].split(this.matcher)
  }

  this[kLast] = list.pop()

  for (let i = 0; i < list.length; i++) {
    try {
      push(this, this.mapper(list[i]))
    } catch (error) {
      return cb(error)
    }
  }

  this.overflow = this[kLast].length > this.maxLength
  if (this.overflow && !this.skipOverflow) {
    cb(new Error('maximum buffer reached'))
    return
  }

  cb()
}

function flush (cb) {
  // forward any gibberish left in there
  this[kLast] += this[kDecoder].end()

  if (this[kLast]) {
    try {
      push(this, this.mapper(this[kLast]))
    } catch (error) {
      return cb(error)
    }
  }

  cb()
}

function push (self, val) {
  if (val !== undefined) {
    self.push(val)
  }
}

function noop (incoming) {
  return incoming
}

function split (matcher, mapper, options) {
  // Set defaults for any arguments not supplied.
  matcher = matcher || /\r?\n/
  mapper = mapper || noop
  options = options || {}

  // Test arguments explicitly.
  switch (arguments.length) {
    case 1:
      // If mapper is only argument.
      if (typeof matcher === 'function') {
        mapper = matcher
        matcher = /\r?\n/
      // If options is only argument.
      } else if (typeof matcher === 'object' && !(matcher instanceof RegExp) && !matcher[Symbol.split]) {
        options = matcher
        matcher = /\r?\n/
      }
      break

    case 2:
      // If mapper and options are arguments.
      if (typeof matcher === 'function') {
        options = mapper
        mapper = matcher
        matcher = /\r?\n/
      // If matcher and options are arguments.
      } else if (typeof mapper === 'object') {
        options = mapper
        mapper = noop
      }
  }

  options = Object.assign({}, options)
  options.autoDestroy = true
  options.transform = transform
  options.flush = flush
  options.readableObjectMode = true

  const stream = new Transform(options)

  stream[kLast] = ''
  stream[kDecoder] = new StringDecoder('utf8')
  stream.matcher = matcher
  stream.mapper = mapper
  stream.maxLength = options.maxLength
  stream.skipOverflow = options.skipOverflow || false
  stream.overflow = false
  stream._destroy = function (err, cb) {
    // Weird Node v12 bug that we need to work around
    this._writableState.errorEmitted = false
    cb(err)
  }

  return stream
}

module.exports = split


},
"../../node_modules/.pnpm/xtend@4.0.2/node_modules/xtend/mutable.js"(module) {
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


},
"./prisma/generated/client.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  $Enums: () => (/* reexport module object */ _enums__rspack_import_2),
  Prisma: () => (/* reexport module object */ _internal_prismaNamespace__rspack_import_1),
  PrismaClient: () => (PrismaClient)
});
/* import */ var _internal_class__rspack_import_0 = __webpack_require__("./prisma/generated/internal/class.ts");
/* import */ var _internal_prismaNamespace__rspack_import_1 = __webpack_require__("./prisma/generated/internal/prismaNamespace.ts");
/* import */ var _enums__rspack_import_2 = __webpack_require__("./prisma/generated/enums.ts");
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */ 




/**
 * ## Prisma Client
 * 
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 * 
 * Read more in our [docs](https://pris.ly/d/client).
 */ var PrismaClient = _internal_class__rspack_import_0.getPrismaClientClass();



},
"./prisma/generated/enums.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
* This file exports all enum related types from the schema.
*
* 🟢 You can import this file directly.
*/ // This file is empty because there are no enums in the schema.



},
"./prisma/generated/internal/class.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getPrismaClientClass: () => (getPrismaClientClass)
});
/* import */ var _prisma_client_runtime_client__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/@prisma+client@7.4.1_prisma@7.4.1_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__r_8e53772b4f7db0920d7f3afa4e50fe46/node_modules/@prisma/client/runtime/client.js");
/* import */ var _prisma_client_runtime_client__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_prisma_client_runtime_client__rspack_import_0);
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
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */ 
var config = {
    "previewFeatures": [],
    "clientVersion": "7.4.1",
    "engineVersion": "55ae170b1ced7fc6ed07a15f110549408c501bb3",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"./generated\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id        String   @id @default(uuid())\n  email     String   @unique\n  password  String\n  name      String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"email\",\"password\",\"name\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\"]"),
    graph: "MAkQCRoAACYAMBsAAAQAEBwAACYAMB0BAAAAAR4BAAAAAR8BACcAISABACgAISFAACkAISJAACkAIQEAAAABACABAAAAAQAgCRoAACYAMBsAAAQAEBwAACYAMB0BACcAIR4BACcAIR8BACcAISABACgAISFAACkAISJAACkAIQEgAAAqACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAGHQEAAAABHgEAAAABHwEAAAABIAEAAAABIUAAAAABIkAAAAABAQgAAAkAIAYdAQAAAAEeAQAAAAEfAQAAAAEgAQAAAAEhQAAAAAEiQAAAAAEBCAAACwAwAQgAAAsAMAYdAQAuACEeAQAuACEfAQAuACEgAQAvACEhQAAwACEiQAAwACECAAAAAQAgCAAADgAgBh0BAC4AIR4BAC4AIR8BAC4AISABAC8AISFAADAAISJAADAAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBBUAACsAIBYAAC0AIBcAACwAICAAACoAIAkaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAcACEhQAAdACEiQAAdACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAkaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAcACEhQAAdACEiQAAdACEOFQAAHwAgFgAAJQAgFwAAJQAgIwEAAAABJAEAAAAEJQEAAAAEJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAJAAhKwEAAAABLAEAAAABLQEAAAABDhUAACIAIBYAACMAIBcAACMAICMBAAAAASQBAAAABSUBAAAABSYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBACEAISsBAAAAASwBAAAAAS0BAAAAAQsVAAAfACAWAAAgACAXAAAgACAjQAAAAAEkQAAAAAQlQAAAAAQmQAAAAAEnQAAAAAEoQAAAAAEpQAAAAAEqQAAeACELFQAAHwAgFgAAIAAgFwAAIAAgI0AAAAABJEAAAAAEJUAAAAAEJkAAAAABJ0AAAAABKEAAAAABKUAAAAABKkAAHgAhCCMCAAAAASQCAAAABCUCAAAABCYCAAAAAScCAAAAASgCAAAAASkCAAAAASoCAB8AIQgjQAAAAAEkQAAAAAQlQAAAAAQmQAAAAAEnQAAAAAEoQAAAAAEpQAAAAAEqQAAgACEOFQAAIgAgFgAAIwAgFwAAIwAgIwEAAAABJAEAAAAFJQEAAAAFJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAIQAhKwEAAAABLAEAAAABLQEAAAABCCMCAAAAASQCAAAABSUCAAAABSYCAAAAAScCAAAAASgCAAAAASkCAAAAASoCACIAIQsjAQAAAAEkAQAAAAUlAQAAAAUmAQAAAAEnAQAAAAEoAQAAAAEpAQAAAAEqAQAjACErAQAAAAEsAQAAAAEtAQAAAAEOFQAAHwAgFgAAJQAgFwAAJQAgIwEAAAABJAEAAAAEJQEAAAAEJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAJAAhKwEAAAABLAEAAAABLQEAAAABCyMBAAAAASQBAAAABCUBAAAABCYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBACUAISsBAAAAASwBAAAAAS0BAAAAAQkaAAAmADAbAAAEABAcAAAmADAdAQAnACEeAQAnACEfAQAnACEgAQAoACEhQAApACEiQAApACELIwEAAAABJAEAAAAEJQEAAAAEJgEAAAABJwEAAAABKAEAAAABKQEAAAABKgEAJQAhKwEAAAABLAEAAAABLQEAAAABCyMBAAAAASQBAAAABSUBAAAABSYBAAAAAScBAAAAASgBAAAAASkBAAAAASoBACMAISsBAAAAASwBAAAAAS0BAAAAAQgjQAAAAAEkQAAAAAQlQAAAAAQmQAAAAAEnQAAAAAEoQAAAAAEpQAAAAAEqQAAgACEAAAAAAS4BAAAAAQEuAQAAAAEBLkAAAAABAAAAAAMVAAYWAAcXAAgAAAADFQAGFgAHFwAIAQIBAgMBBQYBBgcBBwgBCQoBCgwCCw0DDA8BDRECDhIEERMBEhQBExUCGBgFGRkJ"
};
function decodeBase64AsWasm(wasmBase64) {
    return _async_to_generator(function() {
        var Buffer, wasmArray;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, "node:buffer", 23))
                    ];
                case 1:
                    Buffer = _state.sent().Buffer;
                    wasmArray = Buffer.from(wasmBase64, 'base64');
                    return [
                        2,
                        new WebAssembly.Module(wasmArray)
                    ];
            }
        });
    })();
}
config.compilerWasm = {
    getRuntime: function() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            __webpack_require__.e(/* import() */ "node_modules_pnpm_prisma_client_7_4_1_prisma_7_4_1__types_react_19_2_14_react-dom_19_2_4_reac-7e3419").then(__webpack_require__.t.bind(__webpack_require__, "../../node_modules/.pnpm/@prisma+client@7.4.1_prisma@7.4.1_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__r_8e53772b4f7db0920d7f3afa4e50fe46/node_modules/@prisma/client/runtime/query_compiler_fast_bg.postgresql.js", 23))
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        })();
    },
    getQueryCompilerWasmModule: function() {
        return _async_to_generator(function() {
            var wasm;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            __webpack_require__.e(/* import() */ "vendors-node_modules_pnpm_prisma_client_7_4_1_prisma_7_4_1__types_react_19_2_14_react-dom_19_-2a3621").then(__webpack_require__.t.bind(__webpack_require__, "../../node_modules/.pnpm/@prisma+client@7.4.1_prisma@7.4.1_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__r_8e53772b4f7db0920d7f3afa4e50fe46/node_modules/@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js", 23))
                        ];
                    case 1:
                        wasm = _state.sent().wasm;
                        return [
                            4,
                            decodeBase64AsWasm(wasm)
                        ];
                    case 2:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        })();
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return _prisma_client_runtime_client__rspack_import_0.getPrismaClient(config);
}


},
"./prisma/generated/internal/prismaNamespace.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnyNull: () => (AnyNull),
  DbNull: () => (DbNull),
  Decimal: () => (Decimal),
  JsonNull: () => (JsonNull),
  ModelName: () => (ModelName),
  NullTypes: () => (NullTypes),
  NullsOrder: () => (NullsOrder),
  PrismaClientInitializationError: () => (PrismaClientInitializationError),
  PrismaClientKnownRequestError: () => (PrismaClientKnownRequestError),
  PrismaClientRustPanicError: () => (PrismaClientRustPanicError),
  PrismaClientUnknownRequestError: () => (PrismaClientUnknownRequestError),
  PrismaClientValidationError: () => (PrismaClientValidationError),
  QueryMode: () => (QueryMode),
  SortOrder: () => (SortOrder),
  Sql: () => (Sql),
  TransactionIsolationLevel: () => (TransactionIsolationLevel),
  UserScalarFieldEnum: () => (UserScalarFieldEnum),
  defineExtension: () => (defineExtension),
  empty: () => (empty),
  getExtensionContext: () => (getExtensionContext),
  join: () => (join),
  prismaVersion: () => (prismaVersion),
  raw: () => (raw),
  sql: () => (sql)
});
/* import */ var _prisma_client_runtime_client__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/@prisma+client@7.4.1_prisma@7.4.1_@types+react@19.2.14_react-dom@19.2.4_react@19.2.4__r_8e53772b4f7db0920d7f3afa4e50fe46/node_modules/@prisma/client/runtime/client.js");
/* import */ var _prisma_client_runtime_client__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_prisma_client_runtime_client__rspack_import_0);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */ 
/**
 * Prisma Errors
 */ var PrismaClientKnownRequestError = _prisma_client_runtime_client__rspack_import_0.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError = _prisma_client_runtime_client__rspack_import_0.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError = _prisma_client_runtime_client__rspack_import_0.PrismaClientRustPanicError;
var PrismaClientInitializationError = _prisma_client_runtime_client__rspack_import_0.PrismaClientInitializationError;
var PrismaClientValidationError = _prisma_client_runtime_client__rspack_import_0.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */ var sql = _prisma_client_runtime_client__rspack_import_0.sqltag;
var empty = _prisma_client_runtime_client__rspack_import_0.empty;
var join = _prisma_client_runtime_client__rspack_import_0.join;
var raw = _prisma_client_runtime_client__rspack_import_0.raw;
var Sql = _prisma_client_runtime_client__rspack_import_0.Sql;
/**
 * Decimal.js
 */ var Decimal = _prisma_client_runtime_client__rspack_import_0.Decimal;
var getExtensionContext = _prisma_client_runtime_client__rspack_import_0.Extensions.getExtensionContext;
/**
 * Prisma Client JS version: 7.4.1
 * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
 */ var prismaVersion = {
    client: "7.4.1",
    engine: "55ae170b1ced7fc6ed07a15f110549408c501bb3"
};
var NullTypes = {
    DbNull: _prisma_client_runtime_client__rspack_import_0.NullTypes.DbNull,
    JsonNull: _prisma_client_runtime_client__rspack_import_0.NullTypes.JsonNull,
    AnyNull: _prisma_client_runtime_client__rspack_import_0.NullTypes.AnyNull
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */ var DbNull = _prisma_client_runtime_client__rspack_import_0.DbNull;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */ var JsonNull = _prisma_client_runtime_client__rspack_import_0.JsonNull;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */ var AnyNull = _prisma_client_runtime_client__rspack_import_0.AnyNull;
var ModelName = {
    User: 'User'
};
/**
 * Enums
 */ var TransactionIsolationLevel = _prisma_client_runtime_client__rspack_import_0.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
var UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
var SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
var QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
var NullsOrder = {
    first: 'first',
    last: 'last'
};
var defineExtension = _prisma_client_runtime_client__rspack_import_0.Extensions.defineExtension;


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
"./src/auth/auth.module.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthModule: () => (AuthModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_passport__rspack_import_1 = __webpack_require__("@nestjs/passport");
/* import */ var _nestjs_passport__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__rspack_import_1);
/* import */ var _jwt_token_strategy__rspack_import_2 = __webpack_require__("./src/auth/jwt-token.strategy.ts");
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



var AuthModule = function AuthModule() {
    "use strict";
    _class_call_check(this, AuthModule);
};
AuthModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Module)({
        imports: [
            _nestjs_passport__rspack_import_1.PassportModule
        ],
        providers: [
            _jwt_token_strategy__rspack_import_2.JwtTokenStrategy
        ],
        exports: [
            _nestjs_passport__rspack_import_1.PassportModule
        ]
    })
], AuthModule);


},
"./src/auth/jwt-token.strategy.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JwtTokenStrategy: () => (JwtTokenStrategy)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_config__rspack_import_1 = __webpack_require__("@nestjs/config");
/* import */ var _nestjs_config__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__rspack_import_1);
/* import */ var _nestjs_passport__rspack_import_2 = __webpack_require__("@nestjs/passport");
/* import */ var _nestjs_passport__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__rspack_import_2);
/* import */ var passport_jwt__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/passport-jwt@4.0.1/node_modules/passport-jwt/lib/index.js");
/* import */ var passport_jwt__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(passport_jwt__rspack_import_3);
/* import */ var _common_enum_environment__rspack_import_4 = __webpack_require__("./src/common/enum/environment.ts");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}





var JwtTokenStrategy = /*#__PURE__*/ function(_PassportStrategy) {
    "use strict";
    _inherits(JwtTokenStrategy, _PassportStrategy);
    function JwtTokenStrategy(configService) {
        _class_call_check(this, JwtTokenStrategy);
        var _this;
        var secret = configService.get(_common_enum_environment__rspack_import_4.ENVIRONMENT.JWT_SECRET);
        _this = _call_super(this, JwtTokenStrategy, [
            {
                jwtFromRequest: passport_jwt__rspack_import_3.ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey: secret
            }
        ]), _define_property(_this, "configService", void 0), _this.configService = configService;
        return _this;
    }
    _create_class(JwtTokenStrategy, [
        {
            key: "validate",
            value: function validate(payload) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (!payload || !payload.user_id || !payload.roles || !payload.organization_id) {
                            throw new _nestjs_common__rspack_import_0.UnauthorizedException('Invalid token payload');
                        }
                        return [
                            2,
                            payload
                        ];
                    });
                })();
            }
        }
    ]);
    return JwtTokenStrategy;
}((0,_nestjs_passport__rspack_import_2.PassportStrategy)(passport_jwt__rspack_import_3.Strategy, 'jwt-token'));
JwtTokenStrategy = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_config__rspack_import_1.ConfigService === "undefined" ? Object : _nestjs_config__rspack_import_1.ConfigService
    ])
], JwtTokenStrategy);


},
"./src/common/enum/environment.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ENVIRONMENT: () => (ENVIRONMENT)
});
var ENVIRONMENT = {
    SERVICE_PREFIX: 'SERVICE_PREFIX',
    PORT: 'PORT',
    CORS_ORIGIN: 'CORS_ORIGIN',
    CORS_ORIGIN_REGEX: 'CORS_ORIGIN_REGEX',
    DATABASE_URL: 'DATABASE_URL',
    JWT_SECRET: 'JWT_SECRET',
    JWT_EXPIRES_IN: 'JWT_EXPIRES_IN',
    JWT_REFRESH_SECRET: 'JWT_REFRESH_SECRET',
    JWT_REFRESH_EXPIRES_IN: 'JWT_REFRESH_EXPIRES_IN'
};


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
"./src/prisma.module.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaModule: () => (PrismaModule)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _prisma_service__rspack_import_1 = __webpack_require__("./src/prisma.service.ts");
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


var PrismaModule = function PrismaModule() {
    "use strict";
    _class_call_check(this, PrismaModule);
};
PrismaModule = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Global)(),
    (0,_nestjs_common__rspack_import_0.Module)({
        providers: [
            _prisma_service__rspack_import_1.PrismaService
        ],
        exports: [
            _prisma_service__rspack_import_1.PrismaService
        ]
    })
], PrismaModule);


},
"./src/prisma.service.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaService: () => (PrismaService)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _prisma_generated_client__rspack_import_1 = __webpack_require__("./prisma/generated/client.ts");
/* import */ var _prisma_adapter_pg__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/@prisma+adapter-pg@7.4.1/node_modules/@prisma/adapter-pg/dist/index.mjs");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}



var PrismaService = /*#__PURE__*/ function(PrismaClient) {
    "use strict";
    _inherits(PrismaService, PrismaClient);
    function PrismaService() {
        _class_call_check(this, PrismaService);
        var pool = new _prisma_adapter_pg__rspack_import_2.PrismaPg({
            connectionString: process.env.DATABASE_URL
        });
        return _call_super(this, PrismaService, [
            {
                adapter: pool
            }
        ]);
    }
    _create_class(PrismaService, [
        {
            key: "onModuleInit",
            value: function onModuleInit() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.$connect()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return PrismaService;
}(_prisma_generated_client__rspack_import_1.PrismaClient);
PrismaService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], PrismaService);


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
/* import */ var _nestjs_passport__rspack_import_4 = __webpack_require__("@nestjs/passport");
/* import */ var _nestjs_passport__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__rspack_import_4);
/* import */ var _app_auth_utilities__rspack_import_5 = __webpack_require__("../../libs/auth-utilities/src/index.ts");
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
            key: "getProfile",
            value: function getProfile(user) {
                return this.userService.getProfile(user);
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
    (0,_nestjs_common__rspack_import_0.Get)('profile'),
    (0,_nestjs_common__rspack_import_0.Version)('1'),
    (0,_nestjs_swagger__rspack_import_2.ApiOperation)({
        summary: 'Get user profile',
        description: "Retrieve the current user's profile"
    }),
    (0,_nestjs_swagger__rspack_import_2.ApiOkResponse)({
        description: 'Profile retrieved successfully'
    }),
    (0,_nestjs_common__rspack_import_0.UseGuards)((0,_nestjs_passport__rspack_import_4.AuthGuard)('jwt-token')),
    _ts_param(0, (0,_app_auth_utilities__rspack_import_5.AuthUser)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof JwtPayloadDto === "undefined" ? Object : JwtPayloadDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UsersController.prototype, "getProfile", null);
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
/* import */ var _prisma_service__rspack_import_3 = __webpack_require__("./src/prisma.service.ts");
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}




var UsersService = /*#__PURE__*/ function() {
    "use strict";
    function UsersService(prisma) {
        _class_call_check(this, UsersService);
        _define_property(this, "prisma", void 0);
        this.prisma = prisma;
    }
    _create_class(UsersService, [
        {
            key: "createUser",
            value: function createUser(createUserDto) {
                return _async_to_generator(function() {
                    var user;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.prisma.user.create({
                                        data: createUserDto
                                    })
                                ];
                            case 1:
                                user = _state.sent();
                                return [
                                    2,
                                    {
                                        message: 'User created',
                                        user: user
                                    }
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "findUsers",
            value: function findUsers(queryUserDto) {
                return _async_to_generator(function() {
                    var data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.prisma.user.findMany()
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        query: queryUserDto
                                    }
                                ];
                        }
                    });
                }).call(this);
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
    _ts_metadata("design:returntype", Promise)
], UsersService.prototype, "createUser", null);
_ts_decorate([
    (0,_app_app_logger__rspack_import_2.LogActivity)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dto__rspack_import_1.QueryUserDto === "undefined" ? Object : _dto__rspack_import_1.QueryUserDto
    ]),
    _ts_metadata("design:returntype", Promise)
], UsersService.prototype, "findUsers", null);
UsersService = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prisma_service__rspack_import_3.PrismaService === "undefined" ? Object : _prisma_service__rspack_import_3.PrismaService
    ])
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
"../../libs/auth-utilities/src/index.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AuthUser: () => (AuthUser),
  ROLES_KEY: () => (ROLES_KEY),
  Roles: () => (Roles),
  RolesGuard: () => (RolesGuard),
  hashPassword: () => (/* reexport safe */ _password__rspack_import_2.hashPassword),
  verifyPassword: () => (/* reexport safe */ _password__rspack_import_2.verifyPassword)
});
/* import */ var _nestjs_common__rspack_import_0 = __webpack_require__("@nestjs/common");
/* import */ var _nestjs_common__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__rspack_import_0);
/* import */ var _nestjs_core__rspack_import_1 = __webpack_require__("@nestjs/core");
/* import */ var _nestjs_core__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__rspack_import_1);
/* import */ var _password__rspack_import_2 = __webpack_require__("../../libs/auth-utilities/src/password.ts");
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


var AuthUser = (0,_nestjs_common__rspack_import_0.createParamDecorator)(function(data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user;
});
var ROLES_KEY = 'roles';
var Roles = function() {
    for(var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++){
        roles[_key] = arguments[_key];
    }
    return (0,_nestjs_common__rspack_import_0.SetMetadata)(ROLES_KEY, roles);
};
var RolesGuard = /*#__PURE__*/ function() {
    "use strict";
    function RolesGuard(reflector) {
        _class_call_check(this, RolesGuard);
        _define_property(this, "reflector", void 0);
        this.reflector = reflector;
    }
    _create_class(RolesGuard, [
        {
            key: "canActivate",
            value: function canActivate(context) {
                var requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
                    context.getHandler(),
                    context.getClass()
                ]);
                if (!requiredRoles) {
                    return true;
                }
                var user = context.switchToHttp().getRequest().user;
                if (!user || !user.roles) {
                    return false;
                }
                return requiredRoles.some(function(role) {
                    var _user_roles;
                    return (_user_roles = user.roles) === null || _user_roles === void 0 ? void 0 : _user_roles.includes(role);
                });
            }
        }
    ]);
    return RolesGuard;
}();
RolesGuard = _ts_decorate([
    (0,_nestjs_common__rspack_import_0.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjs_core__rspack_import_1.Reflector === "undefined" ? Object : _nestjs_core__rspack_import_1.Reflector
    ])
], RolesGuard);



},
"../../libs/auth-utilities/src/password.ts"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  hashPassword: () => (hashPassword),
  verifyPassword: () => (verifyPassword)
});
/* import */ var crypto__rspack_import_0 = __webpack_require__("crypto");
/* import */ var crypto__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(crypto__rspack_import_0);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/**
 * Hash a password using PBKDF2 with SHA-512
 * @param password The plain text password to hash
 * @returns A string in format "salt:hash"
 */ function hashPassword(password) {
    var salt = crypto__rspack_import_0.randomBytes(16).toString('hex');
    var hash = crypto__rspack_import_0.pbkdf2Sync(password, salt, 310000, 64, 'sha512').toString('hex');
    return "".concat(salt, ":").concat(hash);
}
/**
 * Verify a plain text password against a hashed password
 * @param password The plain text password to verify
 * @param hashedPassword The hashed password (in format "salt:hash")
 * @returns True if the password matches, false otherwise
 */ function verifyPassword(password, hashedPassword) {
    var _hashedPassword_split = _sliced_to_array(hashedPassword.split(':'), 2), salt = _hashedPassword_split[0], hash = _hashedPassword_split[1];
    var verifyHash = crypto__rspack_import_0.pbkdf2Sync(password, salt, 310000, 64, 'sha512').toString('hex');
    return hash === verifyHash;
}


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
"@nestjs/passport"(module) {
"use strict";
module.exports = require("@nestjs/passport");

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
"buffer"(module) {
"use strict";
module.exports = require("buffer");

},
"crypto"(module) {
"use strict";
module.exports = require("crypto");

},
"dns"(module) {
"use strict";
module.exports = require("dns");

},
"events"(module) {
"use strict";
module.exports = require("events");

},
"fs"(module) {
"use strict";
module.exports = require("fs");

},
"net"(module) {
"use strict";
module.exports = require("net");

},
"node:async_hooks"(module) {
"use strict";
module.exports = require("node:async_hooks");

},
"node:buffer"(module) {
"use strict";
module.exports = require("node:buffer");

},
"node:crypto"(module) {
"use strict";
module.exports = require("node:crypto");

},
"node:events"(module) {
"use strict";
module.exports = require("node:events");

},
"node:fs"(module) {
"use strict";
module.exports = require("node:fs");

},
"node:os"(module) {
"use strict";
module.exports = require("node:os");

},
"node:path"(module) {
"use strict";
module.exports = require("node:path");

},
"path"(module) {
"use strict";
module.exports = require("path");

},
"stream"(module) {
"use strict";
module.exports = require("stream");

},
"string_decoder"(module) {
"use strict";
module.exports = require("string_decoder");

},
"tls"(module) {
"use strict";
module.exports = require("tls");

},
"url"(module) {
"use strict";
module.exports = require("url");

},
"util"(module) {
"use strict";
module.exports = require("util");

},
"?3bd2"() {
"use strict";
/* (ignored) */

},
"../../node_modules/.pnpm/@prisma+adapter-pg@7.4.1/node_modules/@prisma/adapter-pg/dist/index.mjs"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PrismaPg: () => (PrismaPgAdapterFactory)
});
/* import */ var _prisma_driver_adapter_utils__rspack_import_3 = __webpack_require__("../../node_modules/.pnpm/@prisma+debug@7.4.1/node_modules/@prisma/debug/dist/index.mjs");
/* import */ var _prisma_driver_adapter_utils__rspack_import_2 = __webpack_require__("../../node_modules/.pnpm/@prisma+driver-adapter-utils@7.4.1/node_modules/@prisma/driver-adapter-utils/dist/index.mjs");
/* import */ var pg__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/esm/index.mjs");
/* import */ var postgres_array__rspack_import_1 = __webpack_require__("../../node_modules/.pnpm/postgres-array@3.0.4/node_modules/postgres-array/index.js");
// src/pg.ts



// package.json
var name = "@prisma/adapter-pg";

// src/constants.ts
var FIRST_NORMAL_OBJECT_ID = 16384;

// src/conversion.ts



var { types } = pg__rspack_import_0["default"];
var { builtins: ScalarColumnType, getTypeParser } = types;
var AdditionalScalarColumnType = {
  NAME: 19
};
var ArrayColumnType = {
  BIT_ARRAY: 1561,
  BOOL_ARRAY: 1e3,
  BYTEA_ARRAY: 1001,
  BPCHAR_ARRAY: 1014,
  CHAR_ARRAY: 1002,
  CIDR_ARRAY: 651,
  DATE_ARRAY: 1182,
  FLOAT4_ARRAY: 1021,
  FLOAT8_ARRAY: 1022,
  INET_ARRAY: 1041,
  INT2_ARRAY: 1005,
  INT4_ARRAY: 1007,
  INT8_ARRAY: 1016,
  JSONB_ARRAY: 3807,
  JSON_ARRAY: 199,
  MONEY_ARRAY: 791,
  NUMERIC_ARRAY: 1231,
  OID_ARRAY: 1028,
  TEXT_ARRAY: 1009,
  TIMESTAMP_ARRAY: 1115,
  TIMESTAMPTZ_ARRAY: 1185,
  TIME_ARRAY: 1183,
  UUID_ARRAY: 2951,
  VARBIT_ARRAY: 1563,
  VARCHAR_ARRAY: 1015,
  XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
  // map of type codes to type names
  static typeNames = {
    16: "bool",
    17: "bytea",
    18: "char",
    19: "name",
    20: "int8",
    21: "int2",
    22: "int2vector",
    23: "int4",
    24: "regproc",
    25: "text",
    26: "oid",
    27: "tid",
    28: "xid",
    29: "cid",
    30: "oidvector",
    32: "pg_ddl_command",
    71: "pg_type",
    75: "pg_attribute",
    81: "pg_proc",
    83: "pg_class",
    114: "json",
    142: "xml",
    194: "pg_node_tree",
    269: "table_am_handler",
    325: "index_am_handler",
    600: "point",
    601: "lseg",
    602: "path",
    603: "box",
    604: "polygon",
    628: "line",
    650: "cidr",
    700: "float4",
    701: "float8",
    705: "unknown",
    718: "circle",
    774: "macaddr8",
    790: "money",
    829: "macaddr",
    869: "inet",
    1033: "aclitem",
    1042: "bpchar",
    1043: "varchar",
    1082: "date",
    1083: "time",
    1114: "timestamp",
    1184: "timestamptz",
    1186: "interval",
    1266: "timetz",
    1560: "bit",
    1562: "varbit",
    1700: "numeric",
    1790: "refcursor",
    2202: "regprocedure",
    2203: "regoper",
    2204: "regoperator",
    2205: "regclass",
    2206: "regtype",
    2249: "record",
    2275: "cstring",
    2276: "any",
    2277: "anyarray",
    2278: "void",
    2279: "trigger",
    2280: "language_handler",
    2281: "internal",
    2283: "anyelement",
    2287: "_record",
    2776: "anynonarray",
    2950: "uuid",
    2970: "txid_snapshot",
    3115: "fdw_handler",
    3220: "pg_lsn",
    3310: "tsm_handler",
    3361: "pg_ndistinct",
    3402: "pg_dependencies",
    3500: "anyenum",
    3614: "tsvector",
    3615: "tsquery",
    3642: "gtsvector",
    3734: "regconfig",
    3769: "regdictionary",
    3802: "jsonb",
    3831: "anyrange",
    3838: "event_trigger",
    3904: "int4range",
    3906: "numrange",
    3908: "tsrange",
    3910: "tstzrange",
    3912: "daterange",
    3926: "int8range",
    4072: "jsonpath",
    4089: "regnamespace",
    4096: "regrole",
    4191: "regcollation",
    4451: "int4multirange",
    4532: "nummultirange",
    4533: "tsmultirange",
    4534: "tstzmultirange",
    4535: "datemultirange",
    4536: "int8multirange",
    4537: "anymultirange",
    4538: "anycompatiblemultirange",
    4600: "pg_brin_bloom_summary",
    4601: "pg_brin_minmax_multi_summary",
    5017: "pg_mcv_list",
    5038: "pg_snapshot",
    5069: "xid8",
    5077: "anycompatible",
    5078: "anycompatiblearray",
    5079: "anycompatiblenonarray",
    5080: "anycompatiblerange"
  };
  type;
  constructor(code) {
    super();
    this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
    this.message = `Unsupported column type ${this.type}`;
  }
};
function fieldToColumnType(fieldTypeId) {
  switch (fieldTypeId) {
    case ScalarColumnType.INT2:
    case ScalarColumnType.INT4:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Int32;
    case ScalarColumnType.INT8:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Int64;
    case ScalarColumnType.FLOAT4:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Float;
    case ScalarColumnType.FLOAT8:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Double;
    case ScalarColumnType.BOOL:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Boolean;
    case ScalarColumnType.DATE:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Date;
    case ScalarColumnType.TIME:
    case ScalarColumnType.TIMETZ:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Time;
    case ScalarColumnType.TIMESTAMP:
    case ScalarColumnType.TIMESTAMPTZ:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.DateTime;
    case ScalarColumnType.NUMERIC:
    case ScalarColumnType.MONEY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Numeric;
    case ScalarColumnType.JSON:
    case ScalarColumnType.JSONB:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Json;
    case ScalarColumnType.UUID:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Uuid;
    case ScalarColumnType.OID:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Int64;
    case ScalarColumnType.BPCHAR:
    case ScalarColumnType.TEXT:
    case ScalarColumnType.VARCHAR:
    case ScalarColumnType.BIT:
    case ScalarColumnType.VARBIT:
    case ScalarColumnType.INET:
    case ScalarColumnType.CIDR:
    case ScalarColumnType.XML:
    case AdditionalScalarColumnType.NAME:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Text;
    case ScalarColumnType.BYTEA:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Bytes;
    case ArrayColumnType.INT2_ARRAY:
    case ArrayColumnType.INT4_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Int32Array;
    case ArrayColumnType.FLOAT4_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.FloatArray;
    case ArrayColumnType.FLOAT8_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.DoubleArray;
    case ArrayColumnType.NUMERIC_ARRAY:
    case ArrayColumnType.MONEY_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.NumericArray;
    case ArrayColumnType.BOOL_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.BooleanArray;
    case ArrayColumnType.CHAR_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.CharacterArray;
    case ArrayColumnType.BPCHAR_ARRAY:
    case ArrayColumnType.TEXT_ARRAY:
    case ArrayColumnType.VARCHAR_ARRAY:
    case ArrayColumnType.VARBIT_ARRAY:
    case ArrayColumnType.BIT_ARRAY:
    case ArrayColumnType.INET_ARRAY:
    case ArrayColumnType.CIDR_ARRAY:
    case ArrayColumnType.XML_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.TextArray;
    case ArrayColumnType.DATE_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.DateArray;
    case ArrayColumnType.TIME_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.TimeArray;
    case ArrayColumnType.TIMESTAMP_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.DateTimeArray;
    case ArrayColumnType.TIMESTAMPTZ_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.DateTimeArray;
    case ArrayColumnType.JSON_ARRAY:
    case ArrayColumnType.JSONB_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.JsonArray;
    case ArrayColumnType.BYTEA_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.BytesArray;
    case ArrayColumnType.UUID_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.UuidArray;
    case ArrayColumnType.INT8_ARRAY:
    case ArrayColumnType.OID_ARRAY:
      return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Int64Array;
    default:
      if (fieldTypeId >= FIRST_NORMAL_OBJECT_ID) {
        return _prisma_driver_adapter_utils__rspack_import_2.ColumnTypeEnum.Text;
      }
      throw new UnsupportedNativeDataType(fieldTypeId);
  }
}
function normalize_array(element_normalizer) {
  return (str) => (0,postgres_array__rspack_import_1.parse)(str, element_normalizer);
}
function normalize_numeric(numeric) {
  return numeric;
}
function normalize_date(date) {
  return date;
}
function normalize_timestamp(time) {
  return `${time.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(time) {
  return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(time) {
  return time;
}
function normalize_timez(time) {
  return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
function normalize_money(money) {
  return money.slice(1);
}
function normalize_xml(xml) {
  return xml;
}
function toJson(json) {
  return json;
}
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
  return parsePgBytes(serializedBytes);
}
function normalizeBit(bit) {
  return bit;
}
var customParsers = {
  [ScalarColumnType.NUMERIC]: normalize_numeric,
  [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
  [ScalarColumnType.TIME]: normalize_time,
  [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
  [ScalarColumnType.TIMETZ]: normalize_timez,
  [ScalarColumnType.DATE]: normalize_date,
  [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
  [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
  [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
  [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
  [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
  [ScalarColumnType.MONEY]: normalize_money,
  [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
  [ScalarColumnType.JSON]: toJson,
  [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
  [ScalarColumnType.JSONB]: toJson,
  [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
  [ScalarColumnType.BYTEA]: convertBytes,
  [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
  [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
  [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
  [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
  if (arg === null) {
    return null;
  }
  if (Array.isArray(arg) && argType.arity === "list") {
    return arg.map((value) => mapArg(value, argType));
  }
  if (typeof arg === "string" && argType.scalarType === "datetime") {
    arg = new Date(arg);
  }
  if (arg instanceof Date) {
    switch (argType.dbType) {
      case "TIME":
      case "TIMETZ":
        return formatTime(arg);
      case "DATE":
        return formatDate(arg);
      default:
        return formatDateTime(arg);
    }
  }
  if (typeof arg === "string" && argType.scalarType === "bytes") {
    return Buffer.from(arg, "base64");
  }
  if (ArrayBuffer.isView(arg)) {
    return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
  }
  return arg;
}
function formatDateTime(date) {
  const pad = (n, z = 2) => String(n).padStart(z, "0");
  const ms = date.getUTCMilliseconds();
  return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
function formatDate(date) {
  const pad = (n, z = 2) => String(n).padStart(z, "0");
  return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
function formatTime(date) {
  const pad = (n, z = 2) => String(n).padStart(z, "0");
  const ms = date.getUTCMilliseconds();
  return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}

// src/errors.ts
var TLS_ERRORS = /* @__PURE__ */ new Set([
  "UNABLE_TO_GET_ISSUER_CERT",
  "UNABLE_TO_GET_CRL",
  "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
  "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
  "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
  "CERT_SIGNATURE_FAILURE",
  "CRL_SIGNATURE_FAILURE",
  "CERT_NOT_YET_VALID",
  "CERT_HAS_EXPIRED",
  "CRL_NOT_YET_VALID",
  "CRL_HAS_EXPIRED",
  "ERROR_IN_CERT_NOT_BEFORE_FIELD",
  "ERROR_IN_CERT_NOT_AFTER_FIELD",
  "ERROR_IN_CRL_LAST_UPDATE_FIELD",
  "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_CHAIN_TOO_LONG",
  "CERT_REVOKED",
  "INVALID_CA",
  "INVALID_PURPOSE",
  "CERT_UNTRUSTED",
  "CERT_REJECTED",
  "HOSTNAME_MISMATCH",
  "ERR_TLS_CERT_ALTNAME_FORMAT",
  "ERR_TLS_CERT_ALTNAME_INVALID"
]);
var SOCKET_ERRORS = /* @__PURE__ */ new Set(["ENOTFOUND", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT"]);
function convertDriverError(error) {
  if (isSocketError(error)) {
    return mapSocketError(error);
  }
  if (isTlsError(error)) {
    return {
      kind: "TlsConnectionError",
      reason: error.message
    };
  }
  if (isDriverError(error)) {
    return {
      originalCode: error.code,
      originalMessage: error.message,
      ...mapDriverError(error)
    };
  }
  throw error;
}
function mapDriverError(error) {
  switch (error.code) {
    case "22001":
      return {
        kind: "LengthMismatch",
        column: error.column
      };
    case "22003":
      return {
        kind: "ValueOutOfRange",
        cause: error.message
      };
    case "22P02":
      return {
        kind: "InvalidInputValue",
        message: error.message
      };
    case "23505": {
      const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
      return {
        kind: "UniqueConstraintViolation",
        constraint: fields !== void 0 ? { fields } : void 0
      };
    }
    case "23502": {
      const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
      return {
        kind: "NullConstraintViolation",
        constraint: fields !== void 0 ? { fields } : void 0
      };
    }
    case "23503": {
      let constraint;
      if (error.column) {
        constraint = { fields: [error.column] };
      } else if (error.constraint) {
        constraint = { index: error.constraint };
      }
      return {
        kind: "ForeignKeyConstraintViolation",
        constraint
      };
    }
    case "3D000":
      return {
        kind: "DatabaseDoesNotExist",
        db: error.message.split(" ").at(1)?.split('"').at(1)
      };
    case "28000":
      return {
        kind: "DatabaseAccessDenied",
        db: error.message.split(",").find((s) => s.startsWith(" database"))?.split('"').at(1)
      };
    case "28P01":
      return {
        kind: "AuthenticationFailed",
        user: error.message.split(" ").pop()?.split('"').at(1)
      };
    case "40001":
      return {
        kind: "TransactionWriteConflict"
      };
    case "42P01":
      return {
        kind: "TableDoesNotExist",
        table: error.message.split(" ").at(1)?.split('"').at(1)
      };
    case "42703":
      return {
        kind: "ColumnNotFound",
        column: error.message.split(" ").at(1)?.split('"').at(1)
      };
    case "42P04":
      return {
        kind: "DatabaseAlreadyExists",
        db: error.message.split(" ").at(1)?.split('"').at(1)
      };
    case "53300":
      return {
        kind: "TooManyConnections",
        cause: error.message
      };
    default:
      return {
        kind: "postgres",
        code: error.code ?? "N/A",
        severity: error.severity ?? "N/A",
        message: error.message,
        detail: error.detail,
        column: error.column,
        hint: error.hint
      };
  }
}
function isDriverError(error) {
  return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
function mapSocketError(error) {
  switch (error.code) {
    case "ENOTFOUND":
    case "ECONNREFUSED":
      return {
        kind: "DatabaseNotReachable",
        host: error.address ?? error.hostname,
        port: error.port
      };
    case "ECONNRESET":
      return {
        kind: "ConnectionClosed"
      };
    case "ETIMEDOUT":
      return {
        kind: "SocketTimeout"
      };
  }
}
function isSocketError(error) {
  return typeof error.code === "string" && typeof error.syscall === "string" && typeof error.errno === "number" && SOCKET_ERRORS.has(error.code);
}
function isTlsError(error) {
  if (typeof error.code === "string") {
    return TLS_ERRORS.has(error.code);
  }
  switch (error.message) {
    case "The server does not support SSL connections":
    case "There was an error establishing an SSL connection":
      return true;
  }
  return false;
}

// src/pg.ts
var types2 = pg__rspack_import_0["default"].types;
var debug = (0,_prisma_driver_adapter_utils__rspack_import_3.Debug)("prisma:driver-adapter:pg");
var PgQueryable = class {
  constructor(client, pgOptions) {
    this.client = client;
    this.pgOptions = pgOptions;
  }
  provider = "postgres";
  adapterName = name;
  /**
   * Execute a query given as SQL, interpolating the given parameters.
   */
  async queryRaw(query) {
    const tag = "[js::query_raw]";
    debug(`${tag} %O`, query);
    const { fields, rows } = await this.performIO(query);
    const columnNames = fields.map((field) => field.name);
    let columnTypes = [];
    try {
      columnTypes = fields.map((field) => fieldToColumnType(field.dataTypeID));
    } catch (e) {
      if (e instanceof UnsupportedNativeDataType) {
        throw new _prisma_driver_adapter_utils__rspack_import_2.DriverAdapterError({
          kind: "UnsupportedNativeDataType",
          type: e.type
        });
      }
      throw e;
    }
    const udtParser = this.pgOptions?.userDefinedTypeParser;
    if (udtParser) {
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        if (field.dataTypeID >= FIRST_NORMAL_OBJECT_ID && !Object.hasOwn(customParsers, field.dataTypeID)) {
          for (let j = 0; j < rows.length; j++) {
            rows[j][i] = await udtParser(field.dataTypeID, rows[j][i], this);
          }
        }
      }
    }
    return {
      columnNames,
      columnTypes,
      rows
    };
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */
  async executeRaw(query) {
    const tag = "[js::execute_raw]";
    debug(`${tag} %O`, query);
    return (await this.performIO(query)).rowCount ?? 0;
  }
  /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */
  async performIO(query) {
    const { sql, args } = query;
    const values = args.map((arg, i) => mapArg(arg, query.argTypes[i]));
    try {
      const result = await this.client.query(
        {
          text: sql,
          values,
          rowMode: "array",
          types: {
            // This is the error expected:
            // No overload matches this call.
            // The last overload gave the following error.
            // Type '(oid: number, format?: any) => (json: string) => unknown' is not assignable to type '{ <T>(oid: number): TypeParser<string, string | T>; <T>(oid: number, format: "text"): TypeParser<string, string | T>; <T>(oid: number, format: "binary"): TypeParser<...>; }'.
            //   Type '(json: string) => unknown' is not assignable to type 'TypeParser<Buffer, any>'.
            //     Types of parameters 'json' and 'value' are incompatible.
            //       Type 'Buffer' is not assignable to type 'string'.ts(2769)
            //
            // Because pg-types types expect us to handle both binary and text protocol versions,
            // where as far we can see, pg will ever pass only text version.
            //
            // @ts-expect-error
            getTypeParser: (oid, format) => {
              if (format === "text" && customParsers[oid]) {
                return customParsers[oid];
              }
              return types2.getTypeParser(oid, format);
            }
          }
        },
        values
      );
      return result;
    } catch (e) {
      this.onError(e);
    }
  }
  onError(error) {
    debug("Error in performIO: %O", error);
    throw new _prisma_driver_adapter_utils__rspack_import_2.DriverAdapterError(convertDriverError(error));
  }
};
var PgTransaction = class extends PgQueryable {
  constructor(client, options, pgOptions, cleanup) {
    super(client, pgOptions);
    this.options = options;
    this.pgOptions = pgOptions;
    this.cleanup = cleanup;
  }
  async commit() {
    debug(`[js::commit]`);
    this.cleanup?.();
    this.client.release();
  }
  async rollback() {
    debug(`[js::rollback]`);
    this.cleanup?.();
    this.client.release();
  }
};
var PrismaPgAdapter = class extends PgQueryable {
  constructor(client, pgOptions, release) {
    super(client);
    this.pgOptions = pgOptions;
    this.release = release;
  }
  async startTransaction(isolationLevel) {
    const options = {
      usePhantomQuery: false
    };
    const tag = "[js::startTransaction]";
    debug("%s options: %O", tag, options);
    const conn = await this.client.connect().catch((error) => this.onError(error));
    const onError = (err) => {
      debug(`Error from pool connection: ${err.message} %O`, err);
      this.pgOptions?.onConnectionError?.(err);
    };
    conn.on("error", onError);
    const cleanup = () => {
      conn.removeListener("error", onError);
    };
    try {
      const tx = new PgTransaction(conn, options, this.pgOptions, cleanup);
      await tx.executeRaw({ sql: "BEGIN", args: [], argTypes: [] });
      if (isolationLevel) {
        await tx.executeRaw({
          sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
          args: [],
          argTypes: []
        });
      }
      return tx;
    } catch (error) {
      cleanup();
      conn.release(error);
      this.onError(error);
    }
  }
  async executeScript(script) {
    const statements = script.split(";").map((stmt) => stmt.trim()).filter((stmt) => stmt.length > 0);
    for (const stmt of statements) {
      try {
        await this.client.query(stmt);
      } catch (error) {
        this.onError(error);
      }
    }
  }
  getConnectionInfo() {
    return {
      schemaName: this.pgOptions?.schema,
      supportsRelationJoins: true
    };
  }
  async dispose() {
    return this.release?.();
  }
  underlyingDriver() {
    return this.client;
  }
};
var PrismaPgAdapterFactory = class {
  constructor(poolOrConfig, options) {
    this.options = options;
    if (poolOrConfig instanceof pg__rspack_import_0["default"].Pool) {
      this.externalPool = poolOrConfig;
      this.config = poolOrConfig.options;
    } else {
      this.externalPool = null;
      this.config = poolOrConfig;
    }
  }
  provider = "postgres";
  adapterName = name;
  config;
  externalPool;
  async connect() {
    const client = this.externalPool ?? new pg__rspack_import_0["default"].Pool(this.config);
    const onIdleClientError = (err) => {
      debug(`Error from idle pool client: ${err.message} %O`, err);
      this.options?.onPoolError?.(err);
    };
    client.on("error", onIdleClientError);
    return new PrismaPgAdapter(client, this.options, async () => {
      if (this.externalPool) {
        if (this.options?.disposeExternalPool) {
          await this.externalPool.end();
          this.externalPool = null;
        } else {
          this.externalPool.removeListener("error", onIdleClientError);
        }
      } else {
        await client.end();
      }
    });
  }
  async connectToShadowDb() {
    const conn = await this.connect();
    const database = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
    await conn.executeScript(`CREATE DATABASE "${database}"`);
    const client = new pg__rspack_import_0["default"].Pool({ ...this.config, database });
    return new PrismaPgAdapter(client, void 0, async () => {
      await conn.executeScript(`DROP DATABASE "${database}"`);
      await client.end();
    });
  }
};



},
"../../node_modules/.pnpm/@prisma+debug@7.4.1/node_modules/@prisma/debug/dist/index.mjs"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Debug: () => (Debug),
  clearLogs: () => (clearLogs),
  "default": () => (index_default),
  getLogs: () => (getLogs)
});
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
  $: () => $,
  bgBlack: () => bgBlack,
  bgBlue: () => bgBlue,
  bgCyan: () => bgCyan,
  bgGreen: () => bgGreen,
  bgMagenta: () => bgMagenta,
  bgRed: () => bgRed,
  bgWhite: () => bgWhite,
  bgYellow: () => bgYellow,
  black: () => black,
  blue: () => blue,
  bold: () => bold,
  cyan: () => cyan,
  dim: () => dim,
  gray: () => gray,
  green: () => green,
  grey: () => grey,
  hidden: () => hidden,
  inverse: () => inverse,
  italic: () => italic,
  magenta: () => magenta,
  red: () => red,
  reset: () => reset,
  strikethrough: () => strikethrough,
  underline: () => underline,
  white: () => white,
  yellow: () => yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);

// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
  enable(namespace) {
    if (typeof namespace === "string") {
      globalThis.DEBUG = namespace;
    }
  },
  disable() {
    const prev = globalThis.DEBUG;
    globalThis.DEBUG = "";
    return prev;
  },
  // this is the core logic to check if logging should happen or not
  enabled(namespace) {
    const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
      return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    });
    const isListened = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
      return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
    });
    const isExcluded = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
      return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
    });
    return isListened && !isExcluded;
  },
  log: (...args) => {
    const [namespace, format, ...rest] = args;
    const logWithFormatting = console.warn ?? console.log;
    logWithFormatting(`${namespace} ${format}`, ...rest);
  },
  formatters: {}
  // not implemented
};
function debugCreate(namespace) {
  const instanceProps = {
    color: COLORS[lastColor++ % COLORS.length],
    enabled: topProps.enabled(namespace),
    namespace,
    log: topProps.log,
    extend: () => {
    }
    // not implemented
  };
  const debugCall = (...args) => {
    const { enabled, namespace: namespace2, color, log } = instanceProps;
    if (args.length !== 0) {
      argsHistory.push([namespace2, ...args]);
    }
    if (argsHistory.length > MAX_ARGS_HISTORY) {
      argsHistory.shift();
    }
    if (topProps.enabled(namespace2) || enabled) {
      const stringArgs = args.map((arg) => {
        if (typeof arg === "string") {
          return arg;
        }
        return safeStringify(arg);
      });
      const ms = `+${Date.now() - lastTimestamp}ms`;
      lastTimestamp = Date.now();
      if (globalThis.DEBUG_COLORS) {
        log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
      } else {
        log(namespace2, ...stringArgs, ms);
      }
    }
  };
  return new Proxy(debugCall, {
    get: (_, prop) => instanceProps[prop],
    set: (_, prop, value) => instanceProps[prop] = value
  });
}
var Debug = new Proxy(debugCreate, {
  get: (_, prop) => topProps[prop],
  set: (_, prop, value) => topProps[prop] = value
});
function safeStringify(value, indent = 2) {
  const cache = /* @__PURE__ */ new Set();
  return JSON.stringify(
    value,
    (key, value2) => {
      if (typeof value2 === "object" && value2 !== null) {
        if (cache.has(value2)) {
          return `[Circular *]`;
        }
        cache.add(value2);
      } else if (typeof value2 === "bigint") {
        return value2.toString();
      }
      return value2;
    },
    indent
  );
}
function getLogs(numChars = 7500) {
  const logs = argsHistory.map(([namespace, ...args]) => {
    return `${namespace} ${args.map((arg) => {
      if (typeof arg === "string") {
        return arg;
      } else {
        return JSON.stringify(arg);
      }
    }).join(" ")}`;
  }).join("\n");
  if (logs.length < numChars) {
    return logs;
  }
  return logs.slice(-numChars);
}
function clearLogs() {
  argsHistory.length = 0;
}
var index_default = Debug;



},
"../../node_modules/.pnpm/@prisma+driver-adapter-utils@7.4.1/node_modules/@prisma/driver-adapter-utils/dist/index.mjs"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ColumnTypeEnum: () => (ColumnTypeEnum),
  Debug: () => (/* reexport safe */ _prisma_debug__rspack_import_0.Debug),
  DriverAdapterError: () => (DriverAdapterError),
  bindAdapter: () => (bindAdapter),
  bindMigrationAwareSqlAdapterFactory: () => (bindMigrationAwareSqlAdapterFactory),
  bindSqlAdapterFactory: () => (bindSqlAdapterFactory),
  err: () => (err),
  isDriverAdapterError: () => (isDriverAdapterError),
  mockAdapter: () => (mockAdapter),
  mockAdapterErrors: () => (mockAdapterErrors),
  mockAdapterFactory: () => (mockAdapterFactory),
  mockMigrationAwareAdapterFactory: () => (mockMigrationAwareAdapterFactory),
  ok: () => (ok)
});
/* import */ var _prisma_debug__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/@prisma+debug@7.4.1/node_modules/@prisma/debug/dist/index.mjs");
// src/debug.ts


// src/error.ts
var DriverAdapterError = class extends Error {
  name = "DriverAdapterError";
  cause;
  constructor(payload) {
    super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
    this.cause = payload;
  }
};
function isDriverAdapterError(error) {
  return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}

// src/result.ts
function ok(value) {
  return {
    ok: true,
    value,
    map(fn) {
      return ok(fn(value));
    },
    flatMap(fn) {
      return fn(value);
    }
  };
}
function err(error) {
  return {
    ok: false,
    error,
    map() {
      return err(error);
    },
    flatMap() {
      return err(error);
    }
  };
}

// src/binder.ts
var debug = (0,_prisma_debug__rspack_import_0.Debug)("driver-adapter-utils");
var ErrorRegistryInternal = class {
  registeredErrors = [];
  consumeError(id) {
    return this.registeredErrors[id];
  }
  registerNewError(error) {
    let i = 0;
    while (this.registeredErrors[i] !== void 0) {
      i++;
    }
    this.registeredErrors[i] = { error };
    return i;
  }
};
function copySymbolsFromSource(source, target) {
  const symbols = Object.getOwnPropertySymbols(source);
  const symbolObject = Object.fromEntries(symbols.map((symbol) => [symbol, true]));
  Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory) => {
  const errorRegistry = new ErrorRegistryInternal();
  const boundFactory = {
    adapterName: adapterFactory.adapterName,
    provider: adapterFactory.provider,
    errorRegistry,
    connect: async (...args) => {
      const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
      return ctx.map((ctx2) => bindAdapter(ctx2, errorRegistry));
    },
    connectToShadowDb: async (...args) => {
      const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
      return ctx.map((ctx2) => bindAdapter(ctx2, errorRegistry));
    }
  };
  copySymbolsFromSource(adapterFactory, boundFactory);
  return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory) => {
  const errorRegistry = new ErrorRegistryInternal();
  const boundFactory = {
    adapterName: adapterFactory.adapterName,
    provider: adapterFactory.provider,
    errorRegistry,
    connect: async (...args) => {
      const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
      return ctx.map((ctx2) => bindAdapter(ctx2, errorRegistry));
    }
  };
  copySymbolsFromSource(adapterFactory, boundFactory);
  return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal()) => {
  const boundAdapter = {
    adapterName: adapter.adapterName,
    errorRegistry,
    queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
    executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
    executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
    dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
    provider: adapter.provider,
    startTransaction: async (...args) => {
      const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
      return ctx.map((ctx2) => bindTransaction(errorRegistry, ctx2));
    }
  };
  if (adapter.getConnectionInfo) {
    boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
  }
  return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction) => {
  return {
    adapterName: transaction.adapterName,
    provider: transaction.provider,
    options: transaction.options,
    queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
    executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
    commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
    rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
  };
};
function wrapAsync(registry, fn) {
  return async (...args) => {
    try {
      return ok(await fn(...args));
    } catch (error) {
      debug("[error@wrapAsync]", error);
      if (isDriverAdapterError(error)) {
        return err(error.cause);
      }
      const id = registry.registerNewError(error);
      return err({ kind: "GenericJs", id });
    }
  };
}
function wrapSync(registry, fn) {
  return (...args) => {
    try {
      return ok(fn(...args));
    } catch (error) {
      debug("[error@wrapSync]", error);
      if (isDriverAdapterError(error)) {
        return err(error.cause);
      }
      const id = registry.registerNewError(error);
      return err({ kind: "GenericJs", id });
    }
  };
}

// src/const.ts
var ColumnTypeEnum = {
  // Scalars
  Int32: 0,
  Int64: 1,
  Float: 2,
  Double: 3,
  Numeric: 4,
  Boolean: 5,
  Character: 6,
  Text: 7,
  Date: 8,
  Time: 9,
  DateTime: 10,
  Json: 11,
  Enum: 12,
  Bytes: 13,
  Set: 14,
  Uuid: 15,
  // Arrays
  Int32Array: 64,
  Int64Array: 65,
  FloatArray: 66,
  DoubleArray: 67,
  NumericArray: 68,
  BooleanArray: 69,
  CharacterArray: 70,
  TextArray: 71,
  DateArray: 72,
  TimeArray: 73,
  DateTimeArray: 74,
  JsonArray: 75,
  EnumArray: 76,
  BytesArray: 77,
  UuidArray: 78,
  // Custom
  UnknownNumber: 128
};

// src/mock.ts
var mockAdapterErrors = {
  queryRaw: new Error("Not implemented: queryRaw"),
  executeRaw: new Error("Not implemented: executeRaw"),
  startTransaction: new Error("Not implemented: startTransaction"),
  executeScript: new Error("Not implemented: executeScript"),
  dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
  return {
    provider,
    adapterName: "@prisma/adapter-mock",
    queryRaw: () => Promise.reject(mockAdapterErrors.queryRaw),
    executeRaw: () => Promise.reject(mockAdapterErrors.executeRaw),
    startTransaction: () => Promise.reject(mockAdapterErrors.startTransaction),
    executeScript: () => Promise.reject(mockAdapterErrors.executeScript),
    dispose: () => Promise.reject(mockAdapterErrors.dispose),
    [Symbol.for("adapter.mockAdapter")]: true
  };
}
function mockAdapterFactory(provider) {
  return {
    provider,
    adapterName: "@prisma/adapter-mock",
    connect: () => Promise.resolve(mockAdapter(provider)),
    [Symbol.for("adapter.mockAdapterFactory")]: true
  };
}
function mockMigrationAwareAdapterFactory(provider) {
  return {
    provider,
    adapterName: "@prisma/adapter-mock",
    connect: () => Promise.resolve(mockAdapter(provider)),
    connectToShadowDb: () => Promise.resolve(mockAdapter(provider)),
    [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
  };
}



},
"../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/esm/index.mjs"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Client: () => (Client),
  Connection: () => (Connection),
  DatabaseError: () => (DatabaseError),
  Pool: () => (Pool),
  Query: () => (Query),
  Result: () => (Result),
  TypeOverrides: () => (TypeOverrides),
  "default": () => (__rspack_default_export),
  defaults: () => (defaults),
  escapeIdentifier: () => (escapeIdentifier),
  escapeLiteral: () => (escapeLiteral),
  types: () => (types)
});
/* import */ var _lib_index_js__rspack_import_0 = __webpack_require__("../../node_modules/.pnpm/pg@8.18.0/node_modules/pg/lib/index.js");
// ESM wrapper for pg


// Re-export all the properties
const Client = _lib_index_js__rspack_import_0.Client
const Pool = _lib_index_js__rspack_import_0.Pool
const Connection = _lib_index_js__rspack_import_0.Connection
const types = _lib_index_js__rspack_import_0.types
const Query = _lib_index_js__rspack_import_0.Query
const DatabaseError = _lib_index_js__rspack_import_0.DatabaseError
const escapeIdentifier = _lib_index_js__rspack_import_0.escapeIdentifier
const escapeLiteral = _lib_index_js__rspack_import_0.escapeLiteral
const Result = _lib_index_js__rspack_import_0.Result
const TypeOverrides = _lib_index_js__rspack_import_0.TypeOverrides

// Also export the defaults
const defaults = _lib_index_js__rspack_import_0.defaults

// Re-export the default
/* export default */ const __rspack_default_export = (_lib_index_js__rspack_import_0);


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
// webpack/runtime/create_fake_namespace_object
(() => {
var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
var leafPrototypes;
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 16: return value when it's Promise-like
// mode & 8|1: behave like require
__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = this(value);
	if(mode & 8) return value;
	if(typeof value === 'object' && value) {
		if((mode & 4) && value.__esModule) return value;
		if((mode & 16) && typeof value.then === 'function') return value;
	}
	var ns = Object.create(null);
  __webpack_require__.r(ns);
	var def = {};
	leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
	for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
		Object.getOwnPropertyNames(current).forEach((key) => { def[key] = () => (value[key]) });
	}
	def['default'] = () => (value);
	__webpack_require__.d(ns, def);
	return ns;
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
// webpack/runtime/ensure_chunk
(() => {
__webpack_require__.f = {};
// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = (chunkId) => {
	return Promise.all(
		Object.keys(__webpack_require__.f).reduce((promises, key) => {
			__webpack_require__.f[key](chunkId, promises);
			return promises;
		}, [])
	);
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
// webpack/runtime/get javascript chunk filename
(() => {
// This function allow to reference chunks
__webpack_require__.u = (chunkId) => {
  // return url for filenames not based on template
  
  // return url for filenames based on template
  return "" + chunkId + ".js"
}
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("126c624b34d76fa3")
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
// object to store loaded chunks
// "1" means "loaded", otherwise not loaded yet
var installChunk = (chunk) => {
	var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
		 __webpack_require__.m[moduleId] = moreModules[moduleId];
		}
	}
	if (runtime) runtime(__webpack_require__);
	for (var i = 0; i < chunkIds.length; i++) installedChunks[chunkIds[i]] = 1;
	
};// require() chunk loading for javascript
__webpack_require__.f.require = (chunkId, promises) => {
	// "1" is the signal for "already loaded"
	if (!installedChunks[chunkId]) {
		if (true) {
			installChunk(require("./" + __webpack_require__.u(chunkId)));
		} else installedChunks[chunkId] = 1;
	}
};function loadUpdateChunk(chunkId, updatedModulesList) {
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