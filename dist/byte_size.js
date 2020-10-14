"use strict";
/**
 * Byte sizes are taken from ECMAScript Language Specification
 * http://www.ecma-international.org/ecma-262/5.1/
 * http://bclary.com/2004/11/07/#a-4.3.16
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECMA_SIZES = void 0;
var ECMA_SIZES;
(function (ECMA_SIZES) {
    ECMA_SIZES[ECMA_SIZES["STRING"] = 2] = "STRING";
    ECMA_SIZES[ECMA_SIZES["BOOLEAN"] = 4] = "BOOLEAN";
    ECMA_SIZES[ECMA_SIZES["NUMBER"] = 8] = "NUMBER";
})(ECMA_SIZES = exports.ECMA_SIZES || (exports.ECMA_SIZES = {}));
