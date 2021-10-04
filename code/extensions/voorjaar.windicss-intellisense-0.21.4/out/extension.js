'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vscode = require('vscode');
var fs = require('fs');
var path = require('path');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray$3(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$2 = function(d, b) {
    extendStatics$2 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics$2(d, b);
};

function __extends$2(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$2(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __spreadArray$2(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function toArray$2(v) {
    if (Array.isArray(v))
        return v;
    return [v];
}
function indent$2(code, tab) {
    if (tab === void 0) { tab = 2; }
    var spaces = Array(tab).fill(' ').join('');
    return code
        .split('\n')
        .map(function (line) { return spaces + line; })
        .join('\n');
}
function wrapit$2(code, start, end, tab, minify) {
    if (start === void 0) { start = '{'; }
    if (end === void 0) { end = '}'; }
    if (tab === void 0) { tab = 2; }
    if (minify === void 0) { minify = false; }
    if (minify)
        return "" + start + code + end;
    return start + "\n" + indent$2(code, tab) + "\n" + end;
}
function isSpace(str) {
    return /^\s*$/.test(str);
}
function camelToDash$2(str) {
    // Use exact the same regex as Post CSS
    return str.replace(/([A-Z])/g, '-$1').replace(/^ms-/, '-ms-').toLowerCase();
}
function searchFrom$2(text, target, startIndex, endIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    // search from partial of string
    var subText = text.substring(startIndex, endIndex);
    var relativeIndex = subText.search(target);
    return relativeIndex === -1 ? -1 : startIndex + relativeIndex;
}
function connectList$3(a, b, append) {
    if (append === void 0) { append = true; }
    return append ? __spreadArray$2(__spreadArray$2([], (a !== null && a !== void 0 ? a : [])), (b !== null && b !== void 0 ? b : [])) : __spreadArray$2(__spreadArray$2([], (b !== null && b !== void 0 ? b : [])), (a !== null && a !== void 0 ? a : []));
}
function deepCopy$2(source) {
    return Array.isArray(source)
        ? source.map(function (item) { return deepCopy$2(item); })
        : source instanceof Date
            ? new Date(source.getTime())
            : source && typeof source === 'object'
                ? Object.getOwnPropertyNames(source).reduce(function (o, prop) {
                    var descriptor = Object.getOwnPropertyDescriptor(source, prop);
                    if (descriptor) {
                        Object.defineProperty(o, prop, descriptor);
                        if (source && typeof source === 'object') {
                            o[prop] = deepCopy$2(source[prop]);
                        }
                    }
                    return o;
                }, Object.create(Object.getPrototypeOf(source)))
                : source;
}
function isTagName$2(name) {
    return ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embd', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'].includes(name);
}
function searchPropEnd$2(text, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var index = startIndex;
    var output = -1;
    var openSingleQuote = false;
    var openDoubleQuote = false;
    var openBracket = false;
    var isEscaped = false;
    while (index < text.length) {
        switch (text.charAt(index)) {
            case '\\':
                isEscaped = !isEscaped;
                break;
            case '\'':
                if (!openDoubleQuote && !openBracket && !isEscaped)
                    openSingleQuote = !openSingleQuote;
                isEscaped = false;
                break;
            case '"':
                if (!openSingleQuote && !openBracket && !isEscaped)
                    openDoubleQuote = !openDoubleQuote;
                isEscaped = false;
                break;
            case '(':
                if (!openBracket && !openSingleQuote && !openDoubleQuote && !isEscaped)
                    openBracket = true;
                isEscaped = false;
                break;
            case ')':
                if (openBracket && !isEscaped)
                    openBracket = false;
                isEscaped = false;
                break;
            case ';':
                if (!isEscaped && !openSingleQuote && !openDoubleQuote && !openBracket)
                    output = index;
                isEscaped = false;
                break;
            default:
                isEscaped = false;
                break;
        }
        if (output !== -1)
            break;
        index++;
    }
    return output;
}

var Property$2 = /** @class */ (function () {
    function Property(name, value, comment, important) {
        if (important === void 0) { important = false; }
        this.meta = { type: 'utilities', group: 'plugin', order: 0, offset: 0, corePlugin: false };
        this.name = name;
        this.value = value;
        this.comment = comment;
        this.important = important;
    }
    Property._singleParse = function (css) {
        css = css.trim();
        if (!css)
            return;
        if (css.charAt(0) === '@')
            return InlineAtRule$2.parse(css);
        var split = css.search(':');
        var end = searchPropEnd$2(css);
        if (split === -1)
            return;
        var important = false;
        var prop = css.substring(split + 1, end === -1 ? undefined : end).trim();
        if (/!important;?$/.test(prop)) {
            important = true;
            prop = prop.replace(/!important/, '').trimRight();
        }
        return new Property(css.substring(0, split).trim(), prop, undefined, important);
    };
    Property.parse = function (css) {
        if (!/;\s*$/.test(css))
            css += ';'; // Fix for the situation where the last semicolon is omitted
        var properties = [];
        var index = 0;
        var end = searchPropEnd$2(css, index);
        while (end !== -1) {
            var parsed = this._singleParse(css.substring(searchFrom$2(css, /\S/, index), end + 1));
            if (parsed)
                properties.push(parsed);
            index = end + 1;
            end = searchPropEnd$2(css, index);
        }
        var count = properties.length;
        if (count > 1)
            return properties;
        if (count === 1)
            return properties[0];
    };
    Property.prototype.clone = function () {
        return deepCopy$2(this);
    };
    Property.prototype.toStyle = function (selector) {
        var style = new Style$2(selector, this, this.important);
        style.meta = this.meta;
        return style;
    };
    Property.prototype.build = function (minify) {
        var _this = this;
        if (minify === void 0) { minify = false; }
        var createProperty = function (name, value) {
            if (minify) {
                return name + ":" + value + (_this.important ? '!important' : '') + ";";
            }
            else {
                var p = name + ": " + value + (_this.important ? ' !important' : '') + ";";
                return _this.comment ? p + (" /* " + _this.comment + " */") : p;
            }
        };
        if (!this.value)
            return '';
        return typeof this.name === 'string'
            ? createProperty(this.name, this.value)
            : this.name
                .map(function (i) { return createProperty(i, _this.value); })
                .join(minify ? '' : '\n');
    };
    Property.prototype.updateMeta = function (type, group, order, offset, corePlugin) {
        if (offset === void 0) { offset = 0; }
        if (corePlugin === void 0) { corePlugin = false; }
        this.meta = {
            type: type,
            group: group,
            order: order,
            offset: offset,
            corePlugin: corePlugin,
        };
        return this;
    };
    return Property;
}());
var InlineAtRule$2 = /** @class */ (function (_super) {
    __extends$2(InlineAtRule, _super);
    function InlineAtRule(name, value, important) {
        if (important === void 0) { important = false; }
        var _this = _super.call(this, name, value, undefined, important) || this;
        _this.name = name;
        return _this;
    }
    InlineAtRule.parse = function (css) {
        var _a;
        var matchName = css.match(/@[^\s;{}]+/);
        if (matchName) {
            var name_1 = matchName[0].substring(1);
            var important = false;
            var expression = matchName.index !== undefined
                ? (_a = css
                    .substring(matchName.index + name_1.length + 1)
                    .match(/(?:(['"]).*?\1|[^;])*/)) === null || _a === void 0 ? void 0 : _a[0].trim()
                : undefined;
            if (expression && /!important;?$/.test(expression)) {
                important = true;
                expression = expression.replace(/!important/, '').trimRight();
            }
            return new InlineAtRule(name_1, expression === '' ? undefined : expression, important);
        }
    };
    InlineAtRule.prototype.build = function () {
        return this.value
            ? "@" + this.name + " " + this.value + (this.important ? ' !important' : '') + ";"
            : "@" + this.name + (this.important ? ' !important' : '') + ";";
    };
    return InlineAtRule;
}(Property$2));
var Style$2 = /** @class */ (function () {
    function Style(selector, property, important) {
        if (important === void 0) { important = false; }
        this.meta = { type: 'components', group: 'plugin', order: 0, offset: 0, corePlugin: false };
        this.selector = selector;
        this.important = important;
        this.property = toArray$2(property || []);
    }
    Object.defineProperty(Style.prototype, "rule", {
        get: function () {
            var _this = this;
            var _a, _b, _c;
            var selectors = ((_a = this.selector) !== null && _a !== void 0 ? _a : '').trim().split(/\s*,\s*/g);
            this._parentSelectors && (selectors = selectors.map(function (i) { var _a; return ((_a = _this._parentSelectors) === null || _a === void 0 ? void 0 : _a.join(' ')) + " " + i; }));
            ((_b = this._wrapSelectors) !== null && _b !== void 0 ? _b : []).forEach(function (func) { return (selectors = selectors.map(function (i) { return func(i); })); });
            this._pseudoClasses && (selectors = selectors.map(function (i) { var _a; return i + (":" + ((_a = _this._pseudoClasses) === null || _a === void 0 ? void 0 : _a.join(':'))); }));
            this._pseudoElements && (selectors = selectors.map(function (i) { var _a; return i + ("::" + ((_a = _this._pseudoElements) === null || _a === void 0 ? void 0 : _a.join('::'))); }));
            this._brotherSelectors && (selectors = selectors.map(function (i) { var _a; return i + ("." + ((_a = _this._brotherSelectors) === null || _a === void 0 ? void 0 : _a.join('.'))); }));
            this._childSelectors && (selectors = selectors.map(function (i) { var _a; return i + (" " + ((_a = _this._childSelectors) === null || _a === void 0 ? void 0 : _a.join(' '))); }));
            ((_c = this._wrapRules) !== null && _c !== void 0 ? _c : []).forEach(function (func) { return (selectors = selectors.map(function (i) { return func(i); })); });
            return selectors.join(', ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "pseudoClasses", {
        get: function () {
            return this._pseudoClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "pseudoElements", {
        get: function () {
            return this._pseudoElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "parentSelectors", {
        get: function () {
            return this._parentSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "childSelectors", {
        get: function () {
            return this._childSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "brotherSelectors", {
        get: function () {
            return this._brotherSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapProperties", {
        get: function () {
            return this._wrapProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapSelectors", {
        get: function () {
            return this._wrapSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapRules", {
        get: function () {
            return this._wrapRules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "simple", {
        get: function () {
            // is this style only has property and no wrap?
            return !(this.atRules || this._pseudoClasses || this._pseudoElements || this._parentSelectors || this._childSelectors || this._brotherSelectors || this._wrapProperties || this._wrapSelectors || this._wrapRules);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "isAtrule", {
        get: function () {
            return !(this.atRules === undefined || this.atRules.length === 0);
        },
        enumerable: false,
        configurable: true
    });
    Style.generate = function (parent, property, root) {
        if (!root)
            root = (parent === null || parent === void 0 ? void 0 : parent.startsWith('@'))
                ? new Style().atRule(parent)
                : new Style(parent);
        var output = [];
        var _loop_1 = function (key, value) {
            if (typeof value === 'string') {
                root.add(new Property$2(camelToDash$2(key), value));
            }
            else if (Array.isArray(value)) {
                value.map(function (i) { return root === null || root === void 0 ? void 0 : root.add(new Property$2(camelToDash$2(key), i)); });
            }
            else {
                var wrap = deepCopy$2(root);
                wrap.property = [];
                var child = void 0;
                if (key.startsWith('@')) {
                    child = wrap.atRule(key, false);
                }
                else {
                    if (wrap.selector === undefined) {
                        wrap.selector = key;
                        child = wrap;
                    }
                    else {
                        if (/^[a-z]+$/.test(key) && !isTagName$2(key)) {
                            wrap.wrapProperty(function (property) { return key + "-" + property; });
                            child = wrap;
                        }
                        else {
                            var _hKey_1 = function (selector, key) { return (/&/.test(key) ? key : "& " + key).replace('&', selector); };
                            wrap.wrapSelector(function (selector) {
                                return selector
                                    .trim()
                                    .split(/\s*,\s*/g)
                                    .map(function (s) {
                                    return key
                                        .split(/\s*,\s*/g)
                                        .map(function (i) { return _hKey_1(s, i); })
                                        .join(', ');
                                })
                                    .join(', ');
                            });
                            child = wrap;
                        }
                    }
                }
                output = output.concat(Style.generate(key.startsWith('@') ? undefined : key, value, child));
            }
        };
        for (var _i = 0, _a = Object.entries(property !== null && property !== void 0 ? property : {}); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            _loop_1(key, value);
        }
        if (root.property.length > 0)
            output.unshift(root);
        return output;
    };
    Style.prototype.atRule = function (atrule, append) {
        if (append === void 0) { append = true; }
        if (!atrule)
            return this;
        if (this.atRules) {
            append ? this.atRules.push(atrule) : this.atRules.unshift(atrule);
        }
        else {
            this.atRules = [atrule];
        }
        return this;
    };
    Style.prototype.pseudoClass = function (string) {
        if (this._pseudoClasses) {
            this._pseudoClasses.push(string);
        }
        else {
            this._pseudoClasses = [string];
        }
        return this;
    };
    Style.prototype.pseudoElement = function (string) {
        if (this._pseudoElements) {
            this._pseudoElements.push(string);
        }
        else {
            this._pseudoElements = [string];
        }
        return this;
    };
    Style.prototype.brother = function (string) {
        if (this._brotherSelectors) {
            this._brotherSelectors.push(string);
        }
        else {
            this._brotherSelectors = [string];
        }
        return this;
    };
    Style.prototype.parent = function (string) {
        if (this._parentSelectors) {
            this._parentSelectors.push(string);
        }
        else {
            this._parentSelectors = [string];
        }
        return this;
    };
    Style.prototype.child = function (string) {
        if (this._childSelectors) {
            this._childSelectors.push(string);
        }
        else {
            this._childSelectors = [string];
        }
        return this;
    };
    Style.prototype.wrapProperty = function (func) {
        if (this._wrapProperties) {
            this._wrapProperties.push(func);
        }
        else {
            this._wrapProperties = [func];
        }
        return this;
    };
    Style.prototype.wrapSelector = function (func) {
        if (this._wrapSelectors) {
            this._wrapSelectors.push(func);
        }
        else {
            this._wrapSelectors = [func];
        }
        return this;
    };
    Style.prototype.wrapRule = function (func) {
        if (this._wrapRules) {
            this._wrapRules.push(func);
        }
        else {
            this._wrapRules = [func];
        }
        return this;
    };
    Style.prototype.add = function (item) {
        item = toArray$2(item);
        if (this.important)
            item.forEach(function (i) { return (i.important = true); });
        this.property = __spreadArray$2(__spreadArray$2([], this.property), item);
        return this;
    };
    Style.prototype.extend = function (item, onlyProperty, append) {
        if (onlyProperty === void 0) { onlyProperty = false; }
        if (append === void 0) { append = true; }
        if (!item)
            return this;
        if (item.wrapProperties) {
            var props_1 = [];
            item.property.forEach(function (p) {
                var _a;
                var pc = new Property$2(p.name, p.value, p.comment);
                (_a = item.wrapProperties) === null || _a === void 0 ? void 0 : _a.forEach(function (wrap) {
                    pc.name = Array.isArray(pc.name)
                        ? pc.name.map(function (i) { return wrap(i); })
                        : wrap(pc.name);
                });
                if (item.important)
                    pc.important = true;
                props_1.push(pc);
            });
            this.property = connectList$3(this.property, props_1, append);
        }
        else {
            if (item.important)
                item.property.forEach(function (i) { return (i.important = true); });
            this.property = connectList$3(this.property, item.property, append);
        }
        if (onlyProperty)
            return this;
        item.selector && (this.selector = item.selector);
        this.meta = item.meta;
        item.atRules &&
            (this.atRules = connectList$3(item.atRules, this.atRules, append)); // atrule is build in reverse
        item._brotherSelectors &&
            (this._brotherSelectors = connectList$3(this._brotherSelectors, item._brotherSelectors, append));
        item._childSelectors &&
            (this._childSelectors = connectList$3(this._childSelectors, item._childSelectors, append));
        item._parentSelectors &&
            (this._parentSelectors = connectList$3(this._parentSelectors, item._parentSelectors, append));
        item._pseudoClasses &&
            (this._pseudoClasses = connectList$3(this._pseudoClasses, item._pseudoClasses, append));
        item._pseudoElements &&
            (this._pseudoElements = connectList$3(this._pseudoElements, item._pseudoElements, append));
        item._wrapRules &&
            (this._wrapRules = connectList$3(this._wrapRules, item._wrapRules, append));
        item._wrapSelectors &&
            (this._wrapSelectors = connectList$3(this._wrapSelectors, item._wrapSelectors, append));
        return this;
    };
    Style.prototype.clean = function () {
        // remove duplicated property
        var property = [];
        var cache = [];
        this.property.forEach(function (i) {
            var inline = i.build();
            if (!cache.includes(inline)) {
                cache.push(inline);
                property.push(i);
            }
        });
        this.property = property;
        return this;
    };
    Style.prototype.flat = function () {
        var properties = [];
        this.property.forEach(function (p) {
            if (Array.isArray(p.name)) {
                p.name.forEach(function (i) {
                    properties.push(new Property$2(i, p.value, p.comment));
                });
            }
            else {
                properties.push(p);
            }
        });
        this.property = properties;
        return this;
    };
    Style.prototype.clone = function (selector, property) {
        var newStyle = deepCopy$2(this);
        if (selector)
            newStyle.selector = selector;
        if (property)
            newStyle.property = Array.isArray(property) ? property : [property];
        return newStyle;
    };
    Style.prototype.sort = function () {
        // sort property
        this.property = this.property.sort(function (a, b) {
            return ("" + a.name).substring(0, 2) > ("" + b.name).substring(0, 2) ? 1 : -1;
        });
        return this;
    };
    Style.prototype.build = function (minify, prefixer) {
        var _this = this;
        if (minify === void 0) { minify = false; }
        if (prefixer === void 0) { prefixer = true; }
        var properties = this.property;
        if (!prefixer)
            properties = properties.filter(function (p) {
                if (p.value && /-(webkit|ms|moz|o)-/.test(p.value))
                    return false;
                if (Array.isArray(p.name)) {
                    p.name = p.name.filter(function (i) { return !/^-(webkit|ms|moz|o)-/.test(i); });
                    return true;
                }
                return !/^-(webkit|ms|moz|o)-/.test(p.name);
            });
        var result = properties.map(function (p) {
            if (_this._wrapProperties) {
                var name_2 = p.name;
                _this._wrapProperties.forEach(function (w) { return (name_2 = Array.isArray(name_2) ? name_2.map(function (n) { return w(n); }) : w(name_2)); });
                return new Property$2(name_2, p.value, p.comment, _this.important ? true : p.important).build(minify);
            }
            return _this.important ? new Property$2(p.name, p.value, p.comment, true).build(minify) : p.build(minify);
        }).join(minify ? '' : '\n');
        if (!this.selector && !this.atRules)
            return result.replace(/;}/g, '}');
        if (this.selector)
            result = (minify ? this.rule.replace(/,\s/g, ',') : this.rule + ' ') + wrapit$2(result, undefined, undefined, undefined, result !== '' ? minify : true);
        if (this.atRules) {
            for (var _i = 0, _a = this.atRules; _i < _a.length; _i++) {
                var rule = _a[_i];
                result = minify ? "" + rule.replace(/\s/g, '') + wrapit$2(result, undefined, undefined, undefined, minify) : rule + " " + wrapit$2(result, undefined, undefined, undefined, result !== '' ? minify : true);
            }
        }
        return minify ? result.replace(/;}/g, '}') : result;
    };
    Style.prototype.updateMeta = function (type, group, order, offset, corePlugin, respectSelector) {
        if (offset === void 0) { offset = 0; }
        if (corePlugin === void 0) { corePlugin = false; }
        if (respectSelector === void 0) { respectSelector = false; }
        this.meta = {
            type: type,
            group: group,
            order: order,
            offset: offset,
            corePlugin: corePlugin,
            respectSelector: respectSelector,
        };
        return this;
    };
    return Style;
}());
/** @class */ ((function (_super) {
    __extends$2(GlobalStyle, _super);
    function GlobalStyle(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    return GlobalStyle;
})(Style$2));
/** @class */ ((function (_super) {
    __extends$2(Keyframes, _super);
    function Keyframes(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    // root param only for consist with style
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Keyframes.generate = function (name, children, root, prefixer) {
        if (prefixer === void 0) { prefixer = true; }
        var styles = [];
        var webkitStyles = [];
        for (var _i = 0, _a = Object.entries(children); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var style = new Keyframes(key).atRule("@keyframes " + name);
            var webkitStyle = new Keyframes(key).atRule("@-webkit-keyframes " + name);
            for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                var _e = _d[_c], pkey = _e[0], pvalue = _e[1];
                var prop = pkey;
                if (pkey === 'transform') {
                    prop = prefixer ? ['-webkit-transform', 'transform'] : 'transform';
                }
                else if (['animationTimingFunction', 'animation-timing-function'].includes(pkey)) {
                    prop = prefixer ? [
                        '-webkit-animation-timing-function',
                        'animation-timing-function',
                    ] : 'animation-timing-function';
                }
                style.add(new Property$2(prop, pvalue));
                webkitStyle.add(new Property$2(prop, pvalue));
            }
            styles.push(style);
            if (prefixer)
                webkitStyles.push(webkitStyle);
        }
        return __spreadArray$2(__spreadArray$2([], styles), webkitStyles);
    };
    return Keyframes;
})(Style$2));
/** @class */ ((function (_super) {
    __extends$2(Container, _super);
    function Container(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    return Container;
})(Style$2));

var layerOrder;
(function (layerOrder) {
    layerOrder[layerOrder["base"] = 10] = "base";
    layerOrder[layerOrder["components"] = 150] = "components";
    layerOrder[layerOrder["shortcuts"] = 160] = "shortcuts";
    layerOrder[layerOrder["utilities"] = 20000] = "utilities";
})(layerOrder || (layerOrder = {}));
var pluginOrder;
(function (pluginOrder) {
    pluginOrder[pluginOrder["container"] = 100] = "container";
    pluginOrder[pluginOrder["space"] = 200] = "space";
    pluginOrder[pluginOrder["divideWidth"] = 300] = "divideWidth";
    pluginOrder[pluginOrder["divideColor"] = 400] = "divideColor";
    pluginOrder[pluginOrder["divideStyle"] = 500] = "divideStyle";
    pluginOrder[pluginOrder["divideOpacity"] = 600] = "divideOpacity";
    pluginOrder[pluginOrder["accessibility"] = 700] = "accessibility";
    pluginOrder[pluginOrder["appearance"] = 800] = "appearance";
    pluginOrder[pluginOrder["backgroundAttachment"] = 900] = "backgroundAttachment";
    pluginOrder[pluginOrder["backgroundClip"] = 1000] = "backgroundClip";
    pluginOrder[pluginOrder["backgroundColor"] = 1100] = "backgroundColor";
    pluginOrder[pluginOrder["backgroundImage"] = 1200] = "backgroundImage";
    pluginOrder[pluginOrder["gradientColorStops"] = 1300] = "gradientColorStops";
    pluginOrder[pluginOrder["backgroundOpacity"] = 1400] = "backgroundOpacity";
    pluginOrder[pluginOrder["backgroundPosition"] = 1500] = "backgroundPosition";
    pluginOrder[pluginOrder["backgroundRepeat"] = 1600] = "backgroundRepeat";
    pluginOrder[pluginOrder["backgroundSize"] = 1700] = "backgroundSize";
    pluginOrder[pluginOrder["backgroundOrigin"] = 1750] = "backgroundOrigin";
    pluginOrder[pluginOrder["borderCollapse"] = 1800] = "borderCollapse";
    pluginOrder[pluginOrder["borderColor"] = 1900] = "borderColor";
    pluginOrder[pluginOrder["borderOpacity"] = 2000] = "borderOpacity";
    pluginOrder[pluginOrder["borderRadius"] = 2100] = "borderRadius";
    pluginOrder[pluginOrder["borderStyle"] = 2200] = "borderStyle";
    pluginOrder[pluginOrder["borderWidth"] = 2300] = "borderWidth";
    pluginOrder[pluginOrder["boxDecorationBreak"] = 2350] = "boxDecorationBreak";
    pluginOrder[pluginOrder["boxSizing"] = 2400] = "boxSizing";
    pluginOrder[pluginOrder["cursor"] = 2500] = "cursor";
    pluginOrder[pluginOrder["captionSide"] = 2550] = "captionSide";
    pluginOrder[pluginOrder["emptyCells"] = 2560] = "emptyCells";
    pluginOrder[pluginOrder["display"] = 2600] = "display";
    pluginOrder[pluginOrder["flexDirection"] = 2700] = "flexDirection";
    pluginOrder[pluginOrder["flexWrap"] = 2800] = "flexWrap";
    pluginOrder[pluginOrder["placeItems"] = 2900] = "placeItems";
    pluginOrder[pluginOrder["placeContent"] = 3000] = "placeContent";
    pluginOrder[pluginOrder["placeSelf"] = 3100] = "placeSelf";
    pluginOrder[pluginOrder["alignItems"] = 3200] = "alignItems";
    pluginOrder[pluginOrder["alignContent"] = 3300] = "alignContent";
    pluginOrder[pluginOrder["alignSelf"] = 3400] = "alignSelf";
    pluginOrder[pluginOrder["justifyItems"] = 3500] = "justifyItems";
    pluginOrder[pluginOrder["justifyContent"] = 3600] = "justifyContent";
    pluginOrder[pluginOrder["justifySelf"] = 3700] = "justifySelf";
    pluginOrder[pluginOrder["flex"] = 3800] = "flex";
    pluginOrder[pluginOrder["flexGrow"] = 3900] = "flexGrow";
    pluginOrder[pluginOrder["flexShrink"] = 4000] = "flexShrink";
    pluginOrder[pluginOrder["order"] = 4100] = "order";
    pluginOrder[pluginOrder["float"] = 4200] = "float";
    pluginOrder[pluginOrder["clear"] = 4300] = "clear";
    pluginOrder[pluginOrder["fontFamily"] = 4400] = "fontFamily";
    pluginOrder[pluginOrder["fontWeight"] = 4500] = "fontWeight";
    pluginOrder[pluginOrder["height"] = 4600] = "height";
    pluginOrder[pluginOrder["fontSize"] = 4700] = "fontSize";
    pluginOrder[pluginOrder["lineHeight"] = 4800] = "lineHeight";
    pluginOrder[pluginOrder["listStylePosition"] = 4900] = "listStylePosition";
    pluginOrder[pluginOrder["listStyleType"] = 5000] = "listStyleType";
    pluginOrder[pluginOrder["margin"] = 5100] = "margin";
    pluginOrder[pluginOrder["maxHeight"] = 5200] = "maxHeight";
    pluginOrder[pluginOrder["maxWidth"] = 5300] = "maxWidth";
    pluginOrder[pluginOrder["minHeight"] = 5400] = "minHeight";
    pluginOrder[pluginOrder["minWidth"] = 5500] = "minWidth";
    pluginOrder[pluginOrder["objectFit"] = 5600] = "objectFit";
    pluginOrder[pluginOrder["objectPosition"] = 5700] = "objectPosition";
    pluginOrder[pluginOrder["opacity"] = 5800] = "opacity";
    pluginOrder[pluginOrder["outline"] = 5900] = "outline";
    pluginOrder[pluginOrder["overflow"] = 6000] = "overflow";
    pluginOrder[pluginOrder["overscrollBehavior"] = 6100] = "overscrollBehavior";
    pluginOrder[pluginOrder["padding"] = 6200] = "padding";
    pluginOrder[pluginOrder["placeholderColor"] = 6300] = "placeholderColor";
    pluginOrder[pluginOrder["placeholderOpacity"] = 6400] = "placeholderOpacity";
    pluginOrder[pluginOrder["caretColor"] = 6450] = "caretColor";
    pluginOrder[pluginOrder["caretOpacity"] = 6460] = "caretOpacity";
    pluginOrder[pluginOrder["tabSize"] = 6470] = "tabSize";
    pluginOrder[pluginOrder["pointerEvents"] = 6500] = "pointerEvents";
    pluginOrder[pluginOrder["position"] = 6600] = "position";
    pluginOrder[pluginOrder["inset"] = 6700] = "inset";
    pluginOrder[pluginOrder["resize"] = 6800] = "resize";
    pluginOrder[pluginOrder["boxShadow"] = 6900] = "boxShadow";
    pluginOrder[pluginOrder["boxShadowColor"] = 6950] = "boxShadowColor";
    pluginOrder[pluginOrder["ringWidth"] = 7000] = "ringWidth";
    pluginOrder[pluginOrder["ringOffsetColor"] = 7100] = "ringOffsetColor";
    pluginOrder[pluginOrder["ringOffsetWidth"] = 7200] = "ringOffsetWidth";
    pluginOrder[pluginOrder["ringColor"] = 7300] = "ringColor";
    pluginOrder[pluginOrder["ringOpacity"] = 7400] = "ringOpacity";
    pluginOrder[pluginOrder["fill"] = 7500] = "fill";
    pluginOrder[pluginOrder["stroke"] = 7600] = "stroke";
    pluginOrder[pluginOrder["strokeWidth"] = 7700] = "strokeWidth";
    pluginOrder[pluginOrder["strokeDashArray"] = 7750] = "strokeDashArray";
    pluginOrder[pluginOrder["strokeDashOffset"] = 7760] = "strokeDashOffset";
    pluginOrder[pluginOrder["tableLayout"] = 7800] = "tableLayout";
    pluginOrder[pluginOrder["textAlign"] = 7900] = "textAlign";
    pluginOrder[pluginOrder["textColor"] = 8000] = "textColor";
    pluginOrder[pluginOrder["textOpacity"] = 8100] = "textOpacity";
    pluginOrder[pluginOrder["textOverflow"] = 8200] = "textOverflow";
    pluginOrder[pluginOrder["textShadow"] = 8250] = "textShadow";
    pluginOrder[pluginOrder["fontStyle"] = 8300] = "fontStyle";
    pluginOrder[pluginOrder["textTransform"] = 8400] = "textTransform";
    pluginOrder[pluginOrder["textDecorationStyle"] = 8450] = "textDecorationStyle";
    pluginOrder[pluginOrder["textDecorationLength"] = 8455] = "textDecorationLength";
    pluginOrder[pluginOrder["textDecorationColor"] = 8460] = "textDecorationColor";
    pluginOrder[pluginOrder["textDecorationOpacity"] = 8470] = "textDecorationOpacity";
    pluginOrder[pluginOrder["textDecorationOffset"] = 8480] = "textDecorationOffset";
    pluginOrder[pluginOrder["textDecoration"] = 8500] = "textDecoration";
    pluginOrder[pluginOrder["textIndent"] = 8550] = "textIndent";
    pluginOrder[pluginOrder["textStrokeColor"] = 8560] = "textStrokeColor";
    pluginOrder[pluginOrder["textStrokeWidth"] = 8570] = "textStrokeWidth";
    pluginOrder[pluginOrder["content"] = 8580] = "content";
    pluginOrder[pluginOrder["fontSmoothing"] = 8600] = "fontSmoothing";
    pluginOrder[pluginOrder["fontVariantNumeric"] = 8700] = "fontVariantNumeric";
    pluginOrder[pluginOrder["letterSpacing"] = 8800] = "letterSpacing";
    pluginOrder[pluginOrder["userSelect"] = 8900] = "userSelect";
    pluginOrder[pluginOrder["verticalAlign"] = 9000] = "verticalAlign";
    pluginOrder[pluginOrder["visibility"] = 9100] = "visibility";
    pluginOrder[pluginOrder["backfaceVisibility"] = 9150] = "backfaceVisibility";
    pluginOrder[pluginOrder["whitespace"] = 9200] = "whitespace";
    pluginOrder[pluginOrder["wordBreak"] = 9300] = "wordBreak";
    pluginOrder[pluginOrder["writingMode"] = 9340] = "writingMode";
    pluginOrder[pluginOrder["hyphens"] = 9350] = "hyphens";
    pluginOrder[pluginOrder["width"] = 9400] = "width";
    pluginOrder[pluginOrder["zIndex"] = 9500] = "zIndex";
    pluginOrder[pluginOrder["isolation"] = 9550] = "isolation";
    pluginOrder[pluginOrder["gap"] = 9600] = "gap";
    pluginOrder[pluginOrder["gridAutoFlow"] = 9700] = "gridAutoFlow";
    pluginOrder[pluginOrder["gridTemplateColumns"] = 9800] = "gridTemplateColumns";
    pluginOrder[pluginOrder["gridAutoColumns"] = 9900] = "gridAutoColumns";
    pluginOrder[pluginOrder["gridColumn"] = 10000] = "gridColumn";
    pluginOrder[pluginOrder["gridColumnStart"] = 10100] = "gridColumnStart";
    pluginOrder[pluginOrder["gridColumnEnd"] = 10200] = "gridColumnEnd";
    pluginOrder[pluginOrder["gridTemplateRows"] = 10300] = "gridTemplateRows";
    pluginOrder[pluginOrder["gridAutoRows"] = 10400] = "gridAutoRows";
    pluginOrder[pluginOrder["gridRow"] = 10500] = "gridRow";
    pluginOrder[pluginOrder["gridRowStart"] = 10600] = "gridRowStart";
    pluginOrder[pluginOrder["gridRowEnd"] = 10700] = "gridRowEnd";
    pluginOrder[pluginOrder["transform"] = 10800] = "transform";
    pluginOrder[pluginOrder["transformOrigin"] = 10900] = "transformOrigin";
    pluginOrder[pluginOrder["scale"] = 11000] = "scale";
    pluginOrder[pluginOrder["rotate"] = 11100] = "rotate";
    pluginOrder[pluginOrder["translate"] = 11200] = "translate";
    pluginOrder[pluginOrder["skew"] = 11300] = "skew";
    pluginOrder[pluginOrder["perspective"] = 11350] = "perspective";
    pluginOrder[pluginOrder["perspectiveOrigin"] = 11360] = "perspectiveOrigin";
    pluginOrder[pluginOrder["transitionProperty"] = 11400] = "transitionProperty";
    pluginOrder[pluginOrder["transitionTimingFunction"] = 11500] = "transitionTimingFunction";
    pluginOrder[pluginOrder["transitionDuration"] = 11600] = "transitionDuration";
    pluginOrder[pluginOrder["transitionDelay"] = 11700] = "transitionDelay";
    pluginOrder[pluginOrder["keyframes"] = 11800] = "keyframes";
    pluginOrder[pluginOrder["animation"] = 11900] = "animation";
    pluginOrder[pluginOrder["imageRendering"] = 11950] = "imageRendering";
    pluginOrder[pluginOrder["mixBlendMode"] = 12000] = "mixBlendMode";
    pluginOrder[pluginOrder["backgroundBlendMode"] = 12100] = "backgroundBlendMode";
    pluginOrder[pluginOrder["filter"] = 12200] = "filter";
    pluginOrder[pluginOrder["blur"] = 12300] = "blur";
    pluginOrder[pluginOrder["brightness"] = 12400] = "brightness";
    pluginOrder[pluginOrder["contrast"] = 12500] = "contrast";
    pluginOrder[pluginOrder["dropShadow"] = 12600] = "dropShadow";
    pluginOrder[pluginOrder["grayscale"] = 12700] = "grayscale";
    pluginOrder[pluginOrder["hueRotate"] = 12800] = "hueRotate";
    pluginOrder[pluginOrder["invert"] = 12900] = "invert";
    pluginOrder[pluginOrder["saturate"] = 13000] = "saturate";
    pluginOrder[pluginOrder["sepia"] = 13100] = "sepia";
    pluginOrder[pluginOrder["backdropFilter"] = 13200] = "backdropFilter";
    pluginOrder[pluginOrder["backdropBlur"] = 13300] = "backdropBlur";
    pluginOrder[pluginOrder["backdropBrightness"] = 13400] = "backdropBrightness";
    pluginOrder[pluginOrder["backdropContrast"] = 13500] = "backdropContrast";
    pluginOrder[pluginOrder["backdropGrayscale"] = 13600] = "backdropGrayscale";
    pluginOrder[pluginOrder["backdropHueRotate"] = 13700] = "backdropHueRotate";
    pluginOrder[pluginOrder["backdropInvert"] = 13800] = "backdropInvert";
    pluginOrder[pluginOrder["backdropOpacity"] = 13900] = "backdropOpacity";
    pluginOrder[pluginOrder["backdropSaturate"] = 14000] = "backdropSaturate";
    pluginOrder[pluginOrder["backdropSepia"] = 14100] = "backdropSepia";
})(pluginOrder || (pluginOrder = {}));

var ClassParser = /** @class */ (function () {
    function ClassParser(classNames, separator, variants) {
        if (separator === void 0) { separator = ':'; }
        this.classNames = classNames;
        this.separator = separator;
        this.variants = variants || [];
        this.index = 0;
    }
    ClassParser.prototype._handle_group = function (removeDuplicated) {
        if (removeDuplicated === void 0) { removeDuplicated = true; }
        if (!this.classNames)
            return [];
        var preChar;
        var char;
        var group;
        var func;
        var variant;
        var variants = [];
        var variantStart = this.index + 1;
        var classStart = this.index + 1;
        var groupStart = this.index + 1;
        var important = false;
        var ignoreSpace = false;
        var ignoreBracket = false;
        var insideSquareBracket = false;
        var sepLength = this.separator.length;
        var parts = [];
        var length = this.classNames.length;
        while (this.index < length) {
            this.index++;
            char = this.classNames.charAt(this.index);
            // ignore parsing and leave content inside square brackets as-is
            if (insideSquareBracket) {
                if (' \n\t\r'.includes(char)) {
                    insideSquareBracket = false;
                }
                else {
                    if (char === ']')
                        insideSquareBracket = false;
                    continue;
                }
            }
            // handle chars
            switch (char) {
                case '!':
                    important = true;
                    break;
                case this.separator[0]:
                    if (this.classNames.slice(this.index, this.index + sepLength) === this.separator) {
                        variant = this.classNames.slice(variantStart, this.index);
                        if (variant.charAt(0) === '!')
                            variant = variant.slice(1);
                        if (this.variants.includes(variant)) {
                            variants.push(variant);
                            this.index += sepLength - 1;
                            variantStart = this.index + 1;
                            ignoreSpace = true;
                        }
                    }
                    break;
                case '[':
                    insideSquareBracket = true;
                    break;
                case '(':
                    preChar = this.classNames.charAt(this.index - 1);
                    if (preChar === '-' || (!ignoreSpace && preChar === ' ')) {
                        ignoreBracket = true;
                    }
                    else if (ignoreSpace) {
                        group = this._handle_group();
                    }
                    else {
                        func = this.classNames.slice(groupStart, this.index);
                        while (!isSpace(this.classNames.charAt(this.index))) {
                            this.index++;
                        }
                        this.index--;
                    }
                    ignoreSpace = false;
                    break;
                case '"':
                case '`':
                case '\'':
                case ')':
                case ' ':
                case '\n':
                case '\t':
                case '\r':
                    if (!ignoreSpace) {
                        if (groupStart !== this.index) {
                            var raw = this.classNames.slice(classStart, this.index);
                            var start = classStart - 1;
                            var end = this.index - 1;
                            if (Array.isArray(group)) {
                                parts.push({ raw: raw, start: start, end: end, variants: variants, content: group, type: 'group', important: important });
                                group = undefined;
                            }
                            else if (func) {
                                var utility = this.classNames.slice(variantStart, this.index);
                                parts.push({ raw: raw, start: start, end: end, variants: variants, content: utility, type: 'utility', important: important });
                                func = undefined;
                            }
                            else if (ignoreBracket && char === ')') {
                                // utility with bracket
                                var utility = this.classNames.slice(variantStart, this.index + 1);
                                parts.push({ raw: raw + ')', start: start, end: this.index, variants: variants, content: important ? utility.slice(1) : utility, type: 'utility', important: important });
                            }
                            else {
                                var utility = this.classNames.slice(variantStart, this.index);
                                if (utility.charAt(0) === '*') {
                                    parts.push({ raw: raw, start: start, end: end, variants: variants, content: utility.slice(1), type: 'alias', important: important });
                                }
                                else {
                                    parts.push({ raw: raw, start: start, end: end, variants: variants, content: utility.charAt(0) === '!' ? utility.slice(1) : utility, type: 'utility', important: important });
                                }
                            }
                            variants = [];
                            important = false;
                        }
                        groupStart = this.index + 1;
                        classStart = this.index + 1;
                    }
                    variantStart = this.index + 1;
                    break;
                default:
                    ignoreSpace = false;
            }
            if (char === ')') {
                if (!ignoreBracket)
                    break; // end group
                ignoreBracket = false;
            }
        }
        if (removeDuplicated) {
            var newParts_1 = [];
            var cache_1 = [];
            parts.forEach(function (item) {
                if (!cache_1.includes(item.raw)) {
                    cache_1.push(item.raw);
                    newParts_1.push(item);
                }
            });
            return newParts_1;
        }
        return parts;
    };
    ClassParser.prototype.parse = function (removeDuplicated) {
        if (removeDuplicated === void 0) { removeDuplicated = true; }
        if (!this.classNames)
            return [];
        // Turn classes into group;
        this.classNames = '(' + this.classNames + ')';
        var elements = this._handle_group(removeDuplicated);
        // Initialization, convenient for next call
        this.index = 0;
        this.classNames = this.classNames.slice(1, -1);
        return elements;
    };
    return ClassParser;
}());

var keyOrder = {
    container: 201,
    space: 202,
    divide: 203,
    bg: 204,
    from: 205,
    via: 206,
    to: 207,
    border: 208,
    rounded: 209,
    cursor: 210,
    flex: 211,
    order: 212,
    font: 213,
    h: 214,
    list: 215,
    m: 216,
    my: 217,
    mx: 218,
    mt: 219,
    mr: 220,
    mb: 221,
    ml: 222,
    min: 223,
    max: 224,
    object: 225,
    opacity: 226,
    outline: 227,
    p: 228,
    py: 229,
    px: 230,
    pt: 231,
    pr: 232,
    pb: 233,
    pl: 234,
    placeholder: 235,
    inset: 236,
    top: 237,
    right: 238,
    bottom: 239,
    left: 240,
    shadow: 241,
    ring: 242,
    fill: 243,
    stroke: 244,
    text: 245,
    leading: 246,
    tracking: 247,
    w: 248,
    z: 249,
    gap: 250,
    auto: 251,
    grid: 252,
    col: 253,
    row: 254,
    transform: 255,
    origin: 256,
    scale: 257,
    rotate: 258,
    translate: 259,
    skew: 260,
    transition: 261,
    ease: 262,
    duration: 263,
    delay: 264,
    animate: 265,
};

function flatColors(colors, head) {
    var flatten = {};
    for (var _i = 0, _a = Object.entries(colors); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value === 'string') {
            flatten[(head && key === 'DEFAULT') ? head : head ? head + "-" + key : key] = value;
        }
        else if (typeof value === 'function') {
            flatten[(head && key === 'DEFAULT') ? head : head ? head + "-" + key : key] = 'currentColor';
        }
        else {
            flatten = __assign(__assign({}, flatten), flatColors(value, head ? head + "-" + key : key));
        }
    }
    return flatten;
}
function hex2RGB(hex) {
    var RGB_HEX = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;
    var _a = String(hex).match(RGB_HEX) || [], short = _a[1], long = _a[2];
    if (long) {
        var value = Number.parseInt(long, 16);
        return [value >> 16, (value >> 8) & 0xff, value & 0xff];
    }
    else if (short) {
        return Array.from(short, function (s) { return Number.parseInt(s, 16); }).map(function (n) { return (n << 4) | n; });
    }
}
function connectList$2(list) {
    return list.reduce(function (previous, current) { return previous.concat(current); }, []);
}
function sortClassNames(classNames, variantsMap) {
    var variantsArray = Object.keys(variantsMap);
    var ast = new ClassParser(classNames, ':', variantsArray).parse();
    return ast.map(function (_a) {
        var _b;
        var raw = _a.raw, variants = _a.variants, important = _a.important;
        var head = variants.join(':') + ':';
        var utility = raw.replace(head, '');
        var key = utility.match(/\w+/);
        var hasDynamicValue = utility.match(/\d+/);
        var offset = variants.map(function (i) { return variantsMap[i] * 100; }).reduce(function (p, c) { return p + c; }, 0) + (important ? 500 : 0) + (hasDynamicValue ? 25 : 0);
        if (key === null)
            return { raw: raw, weight: offset };
        return { raw: raw, weight: ((_b = keyOrder[key[0]]) !== null && _b !== void 0 ? _b : 300) + offset };
    }).sort(function (a, b) { return a.weight - b.weight; }).map(function (i) { return i.raw; });
}
function getAllSeparators(text) {
    var separators = [''];
    var last = '';
    if (!/\s/g.test(text[0])) {
        separators.push('');
    }
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var ch = text_1[_i];
        if (/\s/.test(ch)) {
            separators[separators.length - 1] += ch;
            last = ch;
        }
        else {
            if (/\s/g.test(last)) {
                separators.push('');
                last = ch;
            }
        }
    }
    return separators;
}
function combineSeparators(separators, sortedP) {
    var ret = '';
    var i = 0;
    for (i = 0; i < sortedP.length; i++) {
        ret += separators[i];
        ret += sortedP[i];
    }
    ret += separators[i];
    return ret;
}
function rem2px(str) {
    if (!str)
        return;
    var index = 0;
    var output = [];
    while (index < str.length) {
        var rem = str.slice(index).match(/-?[\d.]+rem;/);
        if (!rem || !rem.index)
            break;
        var px = " /* " + parseFloat(rem[0].slice(0, -4)) * 16 + "px */";
        var end = index + rem.index + rem[0].length;
        output.push(str.slice(index, end));
        output.push(px);
        index = end;
    }
    output.push(str.slice(index));
    return output.join('');
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
function rgb2Hex(r, g, b) {
    return '#' + componentToHex(r * 255) + componentToHex(g * 255) + componentToHex(b * 255);
}
function match(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function isDarkColor(r, g, b) {
    if (match([r, g, b], [20, 184, 166]) || match([r, g, b], [245, 158, 11]) || match([r, g, b], [249, 115, 22]) || match([r, g, b], [217, 70, 239]) || match([r, g, b], [6, 182, 212]) || match([r, g, b], [132, 204, 22]))
        return true;
    // special cases: orange-500 yellow-500 teal-500 fuchsia-500 cyan-500 lime-500, With 500 as the dividing line, the view is better
    var hsp = Math.sqrt(0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b));
    return hsp <= 150;
}
function arrayEqual(array1, array2) {
    return array1.length === array2.length && array1.every(function (value, index) { return value === array2[index]; });
}

var HTMLParser = /** @class */ (function () {
    function HTMLParser(html) {
        this.html = html;
    }
    HTMLParser.prototype.removeComments = function () {
        if (!this.html)
            return [];
        var regex = /\/\*[\s\S]*?\*\/|\/\*[\s\S]*$|([^\\:]|^)\/\/.*|<!--[\s\S]*?-->$/igm;
        var match;
        while ((match = regex.exec(this.html))) {
            if (match) {
                this.html = this.html.slice(0, match.index) + ' '.repeat(regex.lastIndex - match.index) + this.html.slice(regex.lastIndex);
            }
        }
    };
    HTMLParser.prototype.parseAttrs = function () {
        var _a;
        if (!this.html)
            return [];
        var output = [];
        var regex = /\S+\s*=\s*"[^"]+"|\S+\s*=\s*'[^']+'|\S+\s*=\s*[^>\s]+/igm;
        var match;
        while ((match = regex.exec(this.html))) {
            if (match) {
                var raw = match[0];
                var sep = raw.indexOf('=');
                var key = raw.slice(0, sep).trim();
                var value = raw.slice(sep + 1).trim();
                var vstart = match.index + (sep + 1 + (((_a = raw.slice(sep + 1).match(/\S/)) === null || _a === void 0 ? void 0 : _a.index) || 0));
                if (['"', '\''].includes(value.charAt(0))) {
                    vstart++;
                    value = value.slice(1, -1);
                }
                output.push({
                    raw: raw,
                    key: key,
                    value: {
                        raw: value,
                        start: vstart,
                    },
                    start: match.index,
                    end: regex.lastIndex,
                });
            }
        }
        return output;
    };
    HTMLParser.prototype.parseClasses = function () {
        // Match all class properties
        if (!this.html)
            return [];
        var classRegex = /\s(?:class|className|bg|text|hover|border|flex|grid)=(["'])([^{}]+)\1/;
        var quoteRegex = /["']/;
        var classNames = [];
        var _indexStart = 0;
        var _htmlLeft = this.html;
        var propStart = _htmlLeft.search(classRegex);
        while (propStart !== -1) {
            var afterMatch = _htmlLeft.substring(propStart);
            var relativeStart = afterMatch.search(quoteRegex);
            var relativeEnd = afterMatch
                .substring(relativeStart + 1)
                .search(quoteRegex);
            var absoluteStart = propStart + relativeStart + 1;
            var absoluteEnd = absoluteStart + relativeEnd;
            classNames.push({
                start: _indexStart + absoluteStart,
                end: _indexStart + absoluteEnd,
                result: _htmlLeft.substring(absoluteStart, absoluteEnd),
            });
            _htmlLeft = _htmlLeft.substring(absoluteEnd + 2);
            _indexStart += absoluteEnd + 2;
            propStart = _htmlLeft.search(classRegex);
        }
        return classNames;
    };
    HTMLParser.prototype.parseApplies = function () {
        if (!this.html)
            return [];
        var output = [];
        var regex = /(?<=@apply\s+)[^;]+(?=\s+!important)|(?<=@apply\s+)[^;]+(?=;)/igm;
        var match;
        while ((match = regex.exec(this.html))) {
            if (match) {
                output.push({
                    result: this.html.slice(match.index, regex.lastIndex),
                    start: match.index,
                    end: regex.lastIndex,
                });
            }
        }
        return output;
    };
    return HTMLParser;
}());

function highlightCSS(css) {
    if (css) {
        return new vscode.MarkdownString("```css\n" + css + "\n```");
    }
}
function getConfig(key) {
    return vscode.workspace
        .getConfiguration()
        .get(key);
}
function setConfig(key, value, isGlobal) {
    if (isGlobal === void 0) { isGlobal = true; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, vscode.workspace
                        .getConfiguration()
                        .update(key, value, isGlobal)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function toggleConfig(key) {
    var config = getConfig(key);
    setConfig(key, !config);
}
function buildStyle(styleSheet) {
    return styleSheet ? highlightCSS(getConfig('windicss.enableRemToPxPreview') ? rem2px(styleSheet.build()) : styleSheet.build()) : undefined;
}
function buildEmptyStyle(style) {
    return highlightCSS(style.build().replace('{\n  & {}\n}', '{\n  ...\n}').replace('{}', '{\n  ...\n}').replace('...\n}\n}', '  ...\n  }\n}'));
}
function decorateWithLength(index, line, length, color, text) {
    if (length === void 0) { length = 25; }
    if (color === void 0) { color = '#AED0A4'; }
    if (text === void 0) { text = '...'; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new HTMLParser(line).parseClasses().filter(function (_a) {
                    var result = _a.result;
                    return result.length > length;
                }).map(function (_a) {
                    var start = _a.start, end = _a.end, result = _a.result;
                    return {
                        range: new vscode.Range(new vscode.Position(index, start + length), new vscode.Position(index, end)),
                        renderOptions: {
                            after: {
                                color: color,
                                contentText: text,
                            },
                        },
                        hoverMessage: result.slice(length),
                    };
                })];
        });
    });
}
function decorateWithCount(index, line, count, color, text) {
    if (count === void 0) { count = 3; }
    if (color === void 0) { color = '#AED0A4'; }
    if (text === void 0) { text = ' ...'; }
    return __awaiter(this, void 0, void 0, function () {
        var decorations;
        return __generator(this, function (_a) {
            decorations = [];
            new HTMLParser(line).parseClasses().forEach(function (_a) {
                var start = _a.start, end = _a.end, result = _a.result;
                var classes = new ClassParser(result).parse();
                if (classes[count]) {
                    decorations.push({
                        range: new vscode.Range(new vscode.Position(index, start + classes[count].start), new vscode.Position(index, end)),
                        renderOptions: {
                            after: {
                                color: color,
                                contentText: text,
                            },
                        },
                        hoverMessage: result.slice(classes[count].start),
                    });
                }
            });
            return [2 /*return*/, decorations];
        });
    });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __spreadArray$1(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function toArray$1(v) {
    if (Array.isArray(v))
        return v;
    return [v];
}
function hash(str) {
    str = str.replace(/\r/g, '');
    var hash = 5381;
    var i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return (hash >>> 0).toString(36);
}
function indent$1(code, tab) {
    if (tab === void 0) { tab = 2; }
    var spaces = Array(tab).fill(' ').join('');
    return code
        .split('\n')
        .map(function (line) { return spaces + line; })
        .join('\n');
}
function wrapit$1(code, start, end, tab, minify) {
    if (start === void 0) { start = '{'; }
    if (end === void 0) { end = '}'; }
    if (tab === void 0) { tab = 2; }
    if (minify === void 0) { minify = false; }
    if (minify)
        return "" + start + code + end;
    return start + "\n" + indent$1(code, tab) + "\n" + end;
}
function camelToDash$1(str) {
    // Use exact the same regex as Post CSS
    return str.replace(/([A-Z])/g, '-$1').replace(/^ms-/, '-ms-').toLowerCase();
}
function searchFrom$1(text, target, startIndex, endIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    // search from partial of string
    var subText = text.substring(startIndex, endIndex);
    var relativeIndex = subText.search(target);
    return relativeIndex === -1 ? -1 : startIndex + relativeIndex;
}
function connectList$1(a, b, append) {
    if (append === void 0) { append = true; }
    return append ? __spreadArray$1(__spreadArray$1([], (a !== null && a !== void 0 ? a : [])), (b !== null && b !== void 0 ? b : [])) : __spreadArray$1(__spreadArray$1([], (b !== null && b !== void 0 ? b : [])), (a !== null && a !== void 0 ? a : []));
}
function deepCopy$1(source) {
    return Array.isArray(source)
        ? source.map(function (item) { return deepCopy$1(item); })
        : source instanceof Date
            ? new Date(source.getTime())
            : source && typeof source === 'object'
                ? Object.getOwnPropertyNames(source).reduce(function (o, prop) {
                    var descriptor = Object.getOwnPropertyDescriptor(source, prop);
                    if (descriptor) {
                        Object.defineProperty(o, prop, descriptor);
                        if (source && typeof source === 'object') {
                            o[prop] = deepCopy$1(source[prop]);
                        }
                    }
                    return o;
                }, Object.create(Object.getPrototypeOf(source)))
                : source;
}
function isTagName$1(name) {
    return ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embd', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'].includes(name);
}
function searchPropEnd$1(text, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var index = startIndex;
    var output = -1;
    var openSingleQuote = false;
    var openDoubleQuote = false;
    var openBracket = false;
    var isEscaped = false;
    while (index < text.length) {
        switch (text.charAt(index)) {
            case '\\':
                isEscaped = !isEscaped;
                break;
            case '\'':
                if (!openDoubleQuote && !openBracket && !isEscaped)
                    openSingleQuote = !openSingleQuote;
                isEscaped = false;
                break;
            case '"':
                if (!openSingleQuote && !openBracket && !isEscaped)
                    openDoubleQuote = !openDoubleQuote;
                isEscaped = false;
                break;
            case '(':
                if (!openBracket && !openSingleQuote && !openDoubleQuote && !isEscaped)
                    openBracket = true;
                isEscaped = false;
                break;
            case ')':
                if (openBracket && !isEscaped)
                    openBracket = false;
                isEscaped = false;
                break;
            case ';':
                if (!isEscaped && !openSingleQuote && !openDoubleQuote && !openBracket)
                    output = index;
                isEscaped = false;
                break;
            default:
                isEscaped = false;
                break;
        }
        if (output !== -1)
            break;
        index++;
    }
    return output;
}

var Property$1 = /** @class */ (function () {
    function Property(name, value, comment, important) {
        if (important === void 0) { important = false; }
        this.meta = { type: 'utilities', group: 'plugin', order: 0, offset: 0, corePlugin: false };
        this.name = name;
        this.value = value;
        this.comment = comment;
        this.important = important;
    }
    Property._singleParse = function (css) {
        css = css.trim();
        if (!css)
            return;
        if (css.charAt(0) === '@')
            return InlineAtRule$1.parse(css);
        var split = css.search(':');
        var end = searchPropEnd$1(css);
        if (split === -1)
            return;
        var important = false;
        var prop = css.substring(split + 1, end === -1 ? undefined : end).trim();
        if (/!important;?$/.test(prop)) {
            important = true;
            prop = prop.replace(/!important/, '').trimRight();
        }
        return new Property(css.substring(0, split).trim(), prop, undefined, important);
    };
    Property.parse = function (css) {
        if (!/;\s*$/.test(css))
            css += ';'; // Fix for the situation where the last semicolon is omitted
        var properties = [];
        var index = 0;
        var end = searchPropEnd$1(css, index);
        while (end !== -1) {
            var parsed = this._singleParse(css.substring(searchFrom$1(css, /\S/, index), end + 1));
            if (parsed)
                properties.push(parsed);
            index = end + 1;
            end = searchPropEnd$1(css, index);
        }
        var count = properties.length;
        if (count > 1)
            return properties;
        if (count === 1)
            return properties[0];
    };
    Property.prototype.clone = function () {
        return deepCopy$1(this);
    };
    Property.prototype.toStyle = function (selector) {
        var style = new Style$1(selector, this, this.important);
        style.meta = this.meta;
        return style;
    };
    Property.prototype.build = function (minify) {
        var _this = this;
        if (minify === void 0) { minify = false; }
        var createProperty = function (name, value) {
            if (minify) {
                return name + ":" + value + (_this.important ? '!important' : '') + ";";
            }
            else {
                var p = name + ": " + value + (_this.important ? ' !important' : '') + ";";
                return _this.comment ? p + (" /* " + _this.comment + " */") : p;
            }
        };
        if (!this.value)
            return '';
        return typeof this.name === 'string'
            ? createProperty(this.name, this.value)
            : this.name
                .map(function (i) { return createProperty(i, _this.value); })
                .join(minify ? '' : '\n');
    };
    Property.prototype.updateMeta = function (type, group, order, offset, corePlugin) {
        if (offset === void 0) { offset = 0; }
        if (corePlugin === void 0) { corePlugin = false; }
        this.meta = {
            type: type,
            group: group,
            order: order,
            offset: offset,
            corePlugin: corePlugin,
        };
        return this;
    };
    return Property;
}());
var InlineAtRule$1 = /** @class */ (function (_super) {
    __extends$1(InlineAtRule, _super);
    function InlineAtRule(name, value, important) {
        if (important === void 0) { important = false; }
        var _this = _super.call(this, name, value, undefined, important) || this;
        _this.name = name;
        return _this;
    }
    InlineAtRule.parse = function (css) {
        var _a;
        var matchName = css.match(/@[^\s;{}]+/);
        if (matchName) {
            var name_1 = matchName[0].substring(1);
            var important = false;
            var expression = matchName.index !== undefined
                ? (_a = css
                    .substring(matchName.index + name_1.length + 1)
                    .match(/(?:(['"]).*?\1|[^;])*/)) === null || _a === void 0 ? void 0 : _a[0].trim()
                : undefined;
            if (expression && /!important;?$/.test(expression)) {
                important = true;
                expression = expression.replace(/!important/, '').trimRight();
            }
            return new InlineAtRule(name_1, expression === '' ? undefined : expression, important);
        }
    };
    InlineAtRule.prototype.build = function () {
        return this.value
            ? "@" + this.name + " " + this.value + (this.important ? ' !important' : '') + ";"
            : "@" + this.name + (this.important ? ' !important' : '') + ";";
    };
    return InlineAtRule;
}(Property$1));
var Style$1 = /** @class */ (function () {
    function Style(selector, property, important) {
        if (important === void 0) { important = false; }
        this.meta = { type: 'components', group: 'plugin', order: 0, offset: 0, corePlugin: false };
        this.selector = selector;
        this.important = important;
        this.property = toArray$1(property || []);
    }
    Object.defineProperty(Style.prototype, "rule", {
        get: function () {
            var _this = this;
            var _a, _b, _c;
            var selectors = ((_a = this.selector) !== null && _a !== void 0 ? _a : '').trim().split(/\s*,\s*/g);
            this._parentSelectors && (selectors = selectors.map(function (i) { var _a; return ((_a = _this._parentSelectors) === null || _a === void 0 ? void 0 : _a.join(' ')) + " " + i; }));
            ((_b = this._wrapSelectors) !== null && _b !== void 0 ? _b : []).forEach(function (func) { return (selectors = selectors.map(function (i) { return func(i); })); });
            this._pseudoClasses && (selectors = selectors.map(function (i) { var _a; return i + (":" + ((_a = _this._pseudoClasses) === null || _a === void 0 ? void 0 : _a.join(':'))); }));
            this._pseudoElements && (selectors = selectors.map(function (i) { var _a; return i + ("::" + ((_a = _this._pseudoElements) === null || _a === void 0 ? void 0 : _a.join('::'))); }));
            this._brotherSelectors && (selectors = selectors.map(function (i) { var _a; return i + ("." + ((_a = _this._brotherSelectors) === null || _a === void 0 ? void 0 : _a.join('.'))); }));
            this._childSelectors && (selectors = selectors.map(function (i) { var _a; return i + (" " + ((_a = _this._childSelectors) === null || _a === void 0 ? void 0 : _a.join(' '))); }));
            ((_c = this._wrapRules) !== null && _c !== void 0 ? _c : []).forEach(function (func) { return (selectors = selectors.map(function (i) { return func(i); })); });
            return selectors.join(', ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "pseudoClasses", {
        get: function () {
            return this._pseudoClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "pseudoElements", {
        get: function () {
            return this._pseudoElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "parentSelectors", {
        get: function () {
            return this._parentSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "childSelectors", {
        get: function () {
            return this._childSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "brotherSelectors", {
        get: function () {
            return this._brotherSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapProperties", {
        get: function () {
            return this._wrapProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapSelectors", {
        get: function () {
            return this._wrapSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapRules", {
        get: function () {
            return this._wrapRules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "simple", {
        get: function () {
            // is this style only has property and no wrap?
            return !(this.atRules || this._pseudoClasses || this._pseudoElements || this._parentSelectors || this._childSelectors || this._brotherSelectors || this._wrapProperties || this._wrapSelectors || this._wrapRules);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "isAtrule", {
        get: function () {
            return !(this.atRules === undefined || this.atRules.length === 0);
        },
        enumerable: false,
        configurable: true
    });
    Style.generate = function (parent, property, root) {
        if (!root)
            root = (parent === null || parent === void 0 ? void 0 : parent.startsWith('@'))
                ? new Style().atRule(parent)
                : new Style(parent);
        var output = [];
        var _loop_1 = function (key, value) {
            if (typeof value === 'string') {
                root.add(new Property$1(camelToDash$1(key), value));
            }
            else if (Array.isArray(value)) {
                value.map(function (i) { return root === null || root === void 0 ? void 0 : root.add(new Property$1(camelToDash$1(key), i)); });
            }
            else {
                var wrap = deepCopy$1(root);
                wrap.property = [];
                var child = void 0;
                if (key.startsWith('@')) {
                    child = wrap.atRule(key, false);
                }
                else {
                    if (wrap.selector === undefined) {
                        wrap.selector = key;
                        child = wrap;
                    }
                    else {
                        if (/^[a-z]+$/.test(key) && !isTagName$1(key)) {
                            wrap.wrapProperty(function (property) { return key + "-" + property; });
                            child = wrap;
                        }
                        else {
                            var _hKey_1 = function (selector, key) { return (/&/.test(key) ? key : "& " + key).replace('&', selector); };
                            wrap.wrapSelector(function (selector) {
                                return selector
                                    .trim()
                                    .split(/\s*,\s*/g)
                                    .map(function (s) {
                                    return key
                                        .split(/\s*,\s*/g)
                                        .map(function (i) { return _hKey_1(s, i); })
                                        .join(', ');
                                })
                                    .join(', ');
                            });
                            child = wrap;
                        }
                    }
                }
                output = output.concat(Style.generate(key.startsWith('@') ? undefined : key, value, child));
            }
        };
        for (var _i = 0, _a = Object.entries(property !== null && property !== void 0 ? property : {}); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            _loop_1(key, value);
        }
        if (root.property.length > 0)
            output.unshift(root);
        return output;
    };
    Style.prototype.atRule = function (atrule, append) {
        if (append === void 0) { append = true; }
        if (!atrule)
            return this;
        if (this.atRules) {
            append ? this.atRules.push(atrule) : this.atRules.unshift(atrule);
        }
        else {
            this.atRules = [atrule];
        }
        return this;
    };
    Style.prototype.pseudoClass = function (string) {
        if (this._pseudoClasses) {
            this._pseudoClasses.push(string);
        }
        else {
            this._pseudoClasses = [string];
        }
        return this;
    };
    Style.prototype.pseudoElement = function (string) {
        if (this._pseudoElements) {
            this._pseudoElements.push(string);
        }
        else {
            this._pseudoElements = [string];
        }
        return this;
    };
    Style.prototype.brother = function (string) {
        if (this._brotherSelectors) {
            this._brotherSelectors.push(string);
        }
        else {
            this._brotherSelectors = [string];
        }
        return this;
    };
    Style.prototype.parent = function (string) {
        if (this._parentSelectors) {
            this._parentSelectors.push(string);
        }
        else {
            this._parentSelectors = [string];
        }
        return this;
    };
    Style.prototype.child = function (string) {
        if (this._childSelectors) {
            this._childSelectors.push(string);
        }
        else {
            this._childSelectors = [string];
        }
        return this;
    };
    Style.prototype.wrapProperty = function (func) {
        if (this._wrapProperties) {
            this._wrapProperties.push(func);
        }
        else {
            this._wrapProperties = [func];
        }
        return this;
    };
    Style.prototype.wrapSelector = function (func) {
        if (this._wrapSelectors) {
            this._wrapSelectors.push(func);
        }
        else {
            this._wrapSelectors = [func];
        }
        return this;
    };
    Style.prototype.wrapRule = function (func) {
        if (this._wrapRules) {
            this._wrapRules.push(func);
        }
        else {
            this._wrapRules = [func];
        }
        return this;
    };
    Style.prototype.add = function (item) {
        item = toArray$1(item);
        if (this.important)
            item.forEach(function (i) { return (i.important = true); });
        this.property = __spreadArray$1(__spreadArray$1([], this.property), item);
        return this;
    };
    Style.prototype.extend = function (item, onlyProperty, append) {
        if (onlyProperty === void 0) { onlyProperty = false; }
        if (append === void 0) { append = true; }
        if (!item)
            return this;
        if (item.wrapProperties) {
            var props_1 = [];
            item.property.forEach(function (p) {
                var _a;
                var pc = new Property$1(p.name, p.value, p.comment);
                (_a = item.wrapProperties) === null || _a === void 0 ? void 0 : _a.forEach(function (wrap) {
                    pc.name = Array.isArray(pc.name)
                        ? pc.name.map(function (i) { return wrap(i); })
                        : wrap(pc.name);
                });
                if (item.important)
                    pc.important = true;
                props_1.push(pc);
            });
            this.property = connectList$1(this.property, props_1, append);
        }
        else {
            if (item.important)
                item.property.forEach(function (i) { return (i.important = true); });
            this.property = connectList$1(this.property, item.property, append);
        }
        if (onlyProperty)
            return this;
        item.selector && (this.selector = item.selector);
        this.meta = item.meta;
        item.atRules &&
            (this.atRules = connectList$1(item.atRules, this.atRules, append)); // atrule is build in reverse
        item._brotherSelectors &&
            (this._brotherSelectors = connectList$1(this._brotherSelectors, item._brotherSelectors, append));
        item._childSelectors &&
            (this._childSelectors = connectList$1(this._childSelectors, item._childSelectors, append));
        item._parentSelectors &&
            (this._parentSelectors = connectList$1(this._parentSelectors, item._parentSelectors, append));
        item._pseudoClasses &&
            (this._pseudoClasses = connectList$1(this._pseudoClasses, item._pseudoClasses, append));
        item._pseudoElements &&
            (this._pseudoElements = connectList$1(this._pseudoElements, item._pseudoElements, append));
        item._wrapRules &&
            (this._wrapRules = connectList$1(this._wrapRules, item._wrapRules, append));
        item._wrapSelectors &&
            (this._wrapSelectors = connectList$1(this._wrapSelectors, item._wrapSelectors, append));
        return this;
    };
    Style.prototype.clean = function () {
        // remove duplicated property
        var property = [];
        var cache = [];
        this.property.forEach(function (i) {
            var inline = i.build();
            if (!cache.includes(inline)) {
                cache.push(inline);
                property.push(i);
            }
        });
        this.property = property;
        return this;
    };
    Style.prototype.flat = function () {
        var properties = [];
        this.property.forEach(function (p) {
            if (Array.isArray(p.name)) {
                p.name.forEach(function (i) {
                    properties.push(new Property$1(i, p.value, p.comment));
                });
            }
            else {
                properties.push(p);
            }
        });
        this.property = properties;
        return this;
    };
    Style.prototype.clone = function (selector, property) {
        var newStyle = deepCopy$1(this);
        if (selector)
            newStyle.selector = selector;
        if (property)
            newStyle.property = Array.isArray(property) ? property : [property];
        return newStyle;
    };
    Style.prototype.sort = function () {
        // sort property
        this.property = this.property.sort(function (a, b) {
            return ("" + a.name).substring(0, 2) > ("" + b.name).substring(0, 2) ? 1 : -1;
        });
        return this;
    };
    Style.prototype.build = function (minify, prefixer) {
        var _this = this;
        if (minify === void 0) { minify = false; }
        if (prefixer === void 0) { prefixer = true; }
        var properties = this.property;
        if (!prefixer)
            properties = properties.filter(function (p) {
                if (p.value && /-(webkit|ms|moz|o)-/.test(p.value))
                    return false;
                if (Array.isArray(p.name)) {
                    p.name = p.name.filter(function (i) { return !/^-(webkit|ms|moz|o)-/.test(i); });
                    return true;
                }
                return !/^-(webkit|ms|moz|o)-/.test(p.name);
            });
        var result = properties.map(function (p) {
            if (_this._wrapProperties) {
                var name_2 = p.name;
                _this._wrapProperties.forEach(function (w) { return (name_2 = Array.isArray(name_2) ? name_2.map(function (n) { return w(n); }) : w(name_2)); });
                return new Property$1(name_2, p.value, p.comment, _this.important ? true : p.important).build(minify);
            }
            return _this.important ? new Property$1(p.name, p.value, p.comment, true).build(minify) : p.build(minify);
        }).join(minify ? '' : '\n');
        if (!this.selector && !this.atRules)
            return result.replace(/;}/g, '}');
        if (this.selector)
            result = (minify ? this.rule.replace(/,\s/g, ',') : this.rule + ' ') + wrapit$1(result, undefined, undefined, undefined, result !== '' ? minify : true);
        if (this.atRules) {
            for (var _i = 0, _a = this.atRules; _i < _a.length; _i++) {
                var rule = _a[_i];
                result = minify ? "" + rule.replace(/\s/g, '') + wrapit$1(result, undefined, undefined, undefined, minify) : rule + " " + wrapit$1(result, undefined, undefined, undefined, result !== '' ? minify : true);
            }
        }
        return minify ? result.replace(/;}/g, '}') : result;
    };
    Style.prototype.updateMeta = function (type, group, order, offset, corePlugin, respectSelector) {
        if (offset === void 0) { offset = 0; }
        if (corePlugin === void 0) { corePlugin = false; }
        if (respectSelector === void 0) { respectSelector = false; }
        this.meta = {
            type: type,
            group: group,
            order: order,
            offset: offset,
            corePlugin: corePlugin,
            respectSelector: respectSelector,
        };
        return this;
    };
    return Style;
}());
/** @class */ ((function (_super) {
    __extends$1(GlobalStyle, _super);
    function GlobalStyle(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    return GlobalStyle;
})(Style$1));
/** @class */ ((function (_super) {
    __extends$1(Keyframes, _super);
    function Keyframes(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    // root param only for consist with style
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Keyframes.generate = function (name, children, root, prefixer) {
        if (prefixer === void 0) { prefixer = true; }
        var styles = [];
        var webkitStyles = [];
        for (var _i = 0, _a = Object.entries(children); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var style = new Keyframes(key).atRule("@keyframes " + name);
            var webkitStyle = new Keyframes(key).atRule("@-webkit-keyframes " + name);
            for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                var _e = _d[_c], pkey = _e[0], pvalue = _e[1];
                var prop = pkey;
                if (pkey === 'transform') {
                    prop = prefixer ? ['-webkit-transform', 'transform'] : 'transform';
                }
                else if (['animationTimingFunction', 'animation-timing-function'].includes(pkey)) {
                    prop = prefixer ? [
                        '-webkit-animation-timing-function',
                        'animation-timing-function',
                    ] : 'animation-timing-function';
                }
                style.add(new Property$1(prop, pvalue));
                webkitStyle.add(new Property$1(prop, pvalue));
            }
            styles.push(style);
            if (prefixer)
                webkitStyles.push(webkitStyle);
        }
        return __spreadArray$1(__spreadArray$1([], styles), webkitStyles);
    };
    return Keyframes;
})(Style$1));
/** @class */ ((function (_super) {
    __extends$1(Container, _super);
    function Container(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    return Container;
})(Style$1));

var minMaxWidth = /(!?\(\s*min(-device-)?-width).+\(\s*max(-device)?-width/i;
var minWidth = /\(\s*min(-device)?-width/i;
var maxMinWidth = /(!?\(\s*max(-device)?-width).+\(\s*min(-device)?-width/i;
var maxWidth = /\(\s*max(-device)?-width/i;
var isMinWidth = _testQuery(minMaxWidth, maxMinWidth, minWidth);
var isMaxWidth = _testQuery(maxMinWidth, minMaxWidth, maxWidth);
var minMaxHeight = /(!?\(\s*min(-device)?-height).+\(\s*max(-device)?-height/i;
var minHeight = /\(\s*min(-device)?-height/i;
var maxMinHeight = /(!?\(\s*max(-device)?-height).+\(\s*min(-device)?-height/i;
var maxHeight = /\(\s*max(-device)?-height/i;
var isMinHeight = _testQuery(minMaxHeight, maxMinHeight, minHeight);
var isMaxHeight = _testQuery(maxMinHeight, minMaxHeight, maxHeight);
var isPrint = /print/i;
var isPrintOnly = /^print\$/i;
var isAtRule = /^\s*@/i;
var isMedia = /^\s*@media/i;
var maxValue = Number.MAX_VALUE;
function _getQueryLength(length) {
    var result = /(-?\d*\.?\d+)(ch|em|ex|px|rpx|rem)/.exec(length);
    if (result === null) {
        return maxValue;
    }
    var number = result[1];
    var unit = result[2];
    switch (unit) {
        case 'ch':
            return parseFloat(number) * 8.8984375;
        case 'em':
        case 'rem':
            return parseFloat(number) * 16;
        case 'ex':
            return parseFloat(number) * 8.296875;
        case 'px':
        case 'rpx':
            return parseFloat(number);
    }
    return +number;
}
function _testQuery(doubleTestTrue, doubleTestFalse, singleTest) {
    return function (query) {
        if (doubleTestTrue.test(query)) {
            return true;
        }
        else if (doubleTestFalse.test(query)) {
            return false;
        }
        return singleTest.test(query);
    };
}
function _testAtRule(a, b) {
    var isMediaA = isMedia.test(a);
    var isMediaB = isMedia.test(b);
    if (isMediaA && isMediaB)
        return null;
    var isAtRuleA = isAtRule.test(a);
    var isAtRuleB = isAtRule.test(b);
    if (isAtRuleA)
        return 1;
    if (isAtRuleB)
        return -1;
    return 0; // don't sort selector name, may cause overwrite bug.
}
function _testIsPrint(a, b) {
    var isPrintA = isPrint.test(a);
    var isPrintOnlyA = isPrintOnly.test(a);
    var isPrintB = isPrint.test(b);
    var isPrintOnlyB = isPrintOnly.test(b);
    if (isPrintA && isPrintB) {
        if (!isPrintOnlyA && isPrintOnlyB) {
            return 1;
        }
        if (isPrintOnlyA && !isPrintOnlyB) {
            return -1;
        }
        return a.localeCompare(b);
    }
    if (isPrintA) {
        return 1;
    }
    if (isPrintB) {
        return -1;
    }
    return null;
}
function sortMediaQuery(a, b) {
    var testAtRule = _testAtRule(a, b);
    if (testAtRule !== null)
        return testAtRule;
    var testIsPrint = _testIsPrint(a, b);
    if (testIsPrint !== null)
        return testIsPrint;
    var minA = isMinWidth(a) || isMinHeight(a);
    var maxA = isMaxWidth(a) || isMaxHeight(a);
    var minB = isMinWidth(b) || isMinHeight(b);
    var maxB = isMaxWidth(b) || isMaxHeight(b);
    if (minA && maxB) {
        return -1;
    }
    if (maxA && minB) {
        return 1;
    }
    var lengthA = _getQueryLength(a);
    var lengthB = _getQueryLength(b);
    if (lengthA === maxValue && lengthB === maxValue) {
        return a.localeCompare(b);
    }
    else if (lengthA === maxValue) {
        return 1;
    }
    else if (lengthB === maxValue) {
        return -1;
    }
    if (lengthA > lengthB) {
        if (maxA) {
            return -1;
        }
        return 1;
    }
    if (lengthA < lengthB) {
        if (maxA) {
            return 1;
        }
        return -1;
    }
    return a.localeCompare(b);
}

function getWeights(a) {
    var first = a.charAt(0);
    var second = a.charAt(1);
    if (first === ':' && second === ':')
        return 59; // ::moz ...
    if (first === '#')
        return 500; // #id ...
    if (first !== '.')
        return first.charCodeAt(0); // html, body ...
    return 499;
}
function sortMeta(a, b) {
    var _a, _b, _c, _d;
    if (a.meta.type === 'base' && b.meta.type === 'base')
        return getWeights((_a = a.selector) !== null && _a !== void 0 ? _a : '') - getWeights((_b = b.selector) !== null && _b !== void 0 ? _b : '');
    return sortMediaQuery(((_c = a.meta.variants) === null || _c === void 0 ? void 0 : _c[0]) || '', ((_d = b.meta.variants) === null || _d === void 0 ? void 0 : _d[0]) || '') || (a.meta.order - b.meta.order) || (a.meta.offset - b.meta.offset) || +b.meta.corePlugin - +a.meta.corePlugin;
}

function _buildAtrule(atrule, children, minify, prefixer) {
    if (minify === void 0) { minify = false; }
    if (prefixer === void 0) { prefixer = true; }
    return "" + atrule + (minify ? '' : ' ') + wrapit$1(_buildStyleList(children, minify, prefixer), undefined, undefined, undefined, minify);
}
function _buildStyleList(styleList, minify, prefixer) {
    if (minify === void 0) { minify = false; }
    if (prefixer === void 0) { prefixer = true; }
    var currentAtrule;
    var currentStyle;
    var styleStack = [];
    var output = [];
    var _loop_1 = function (style) {
        if (style.isAtrule) {
            if (currentStyle) {
                output.push(currentStyle.clean().build(minify, prefixer));
                currentStyle = undefined;
            }
            var newAtrule = style.atRules.pop();
            if (currentAtrule) {
                if (currentAtrule === newAtrule && newAtrule !== '@font-face') { // @font-face shouldn't been combined
                    styleStack.push(style);
                }
                else {
                    output.push(_buildAtrule(currentAtrule, styleStack, minify, prefixer));
                    currentAtrule = newAtrule;
                    styleStack = [style];
                }
            }
            else {
                currentAtrule = newAtrule;
                styleStack = [style];
            }
        }
        else {
            if (currentAtrule) {
                output.push(_buildAtrule(currentAtrule, styleStack, minify, prefixer));
                currentAtrule = undefined;
                styleStack = [];
            }
            if (currentStyle) {
                if (style.rule === currentStyle.rule) {
                    if (style.important)
                        style.property.forEach(function (p) { return p.important = true; });
                    if (style.wrapProperties)
                        style.property.forEach(function (p) { var _a; return (_a = style.wrapProperties) === null || _a === void 0 ? void 0 : _a.forEach(function (wrap) { return p.name = Array.isArray(p.name) ? p.name.map(function (i) { return wrap(i); }) : wrap(p.name); }); });
                    currentStyle.add(style.property);
                }
                else {
                    output.push(currentStyle.clean().build(minify, prefixer));
                    currentStyle = style;
                }
            }
            else {
                currentStyle = style;
            }
        }
    };
    for (var _i = 0, styleList_1 = styleList; _i < styleList_1.length; _i++) {
        var style = styleList_1[_i];
        _loop_1(style);
    }
    if (currentAtrule)
        output.push(_buildAtrule(currentAtrule, styleStack, minify, prefixer));
    if (currentStyle)
        output.push(currentStyle.clean().build(minify, prefixer));
    return output.join(minify ? '' : '\n');
}
function compileStyleSheet (styleList, minify, prefixer) {
    if (minify === void 0) { minify = false; }
    if (prefixer === void 0) { prefixer = true; }
    return _buildStyleList(deepCopy$1(styleList), minify, prefixer);
}

var StyleSheet = /** @class */ (function () {
    function StyleSheet(children) {
        this.prefixer = true;
        this.children = children || [];
    }
    StyleSheet.prototype.add = function (item) {
        if (!item)
            return this;
        if (Array.isArray(item)) {
            this.children = __spreadArray$1(__spreadArray$1([], this.children), item);
        }
        else {
            this.children.push(item);
        }
        return this;
    };
    StyleSheet.prototype.extend = function (styleSheet, append, dedup) {
        if (append === void 0) { append = true; }
        if (dedup === void 0) { dedup = false; }
        if (styleSheet) {
            var extended = styleSheet.children;
            if (dedup) {
                var hashes_1 = extended.map(function (i) { return hash(i.build()); });
                extended = extended.filter(function (i) { return !hashes_1.includes(hash(i.build())); });
            }
            this.prefixer = styleSheet.prefixer;
            this.children = append ? __spreadArray$1(__spreadArray$1([], this.children), extended) : __spreadArray$1(__spreadArray$1([], extended), this.children);
        }
        return this;
    };
    StyleSheet.prototype.combine = function () {
        var styleMap = {};
        this.children.forEach(function (style, index) {
            var _a;
            var hashValue = hash(style.atRules + style.rule);
            if (hashValue in styleMap) {
                if ((_a = style.atRules) === null || _a === void 0 ? void 0 : _a.includes('@font-face')) {
                    // keeps multiple @font-face
                    styleMap[hashValue + index] = style;
                }
                else {
                    styleMap[hashValue] = styleMap[hashValue].extend(style, true);
                }
            }
            else {
                styleMap[hashValue] = style;
            }
        });
        this.children = Object.values(styleMap).map(function (i) { return i.clean(); });
        return this;
    };
    StyleSheet.prototype.layer = function (type) {
        var styleSheet = new StyleSheet(this.children.filter(function (i) { return i.meta.type === type; }));
        styleSheet.prefixer = this.prefixer;
        return styleSheet;
    };
    StyleSheet.prototype.split = function () {
        return {
            base: this.layer('base'),
            components: this.layer('components'),
            utilities: this.layer('utilities'),
        };
    };
    StyleSheet.prototype.clone = function () {
        return deepCopy$1(this);
    };
    StyleSheet.prototype.sort = function () {
        this.children = this.children.sort(sortMeta);
        return this;
    };
    StyleSheet.prototype.sortby = function (compareFn) {
        this.children = this.children.sort(compareFn);
        return this;
    };
    StyleSheet.prototype.build = function (minify) {
        if (minify === void 0) { minify = false; }
        return compileStyleSheet(this.children, minify, this.prefixer);
    };
    return StyleSheet;
}());

function connect(strings) {
    return Array.isArray(strings) ? new RegExp(strings.map(function (i) { return "(" + i + ")"; }).join('|')) : new RegExp(strings);
}
function allowAttr(type) {
    // check if file type allow attributes
    return type ? ['html', 'js'].includes(type) : true;
}
var classPattern = String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["(s+class(Name)?s*=s*{?s*[\"'`])[^\"'`]*$"], ["(\\s+class(Name)?\\s*=\\s*{?\\s*[\"'\\`])[^\"'\\`]*$"])));
var emmetPattern = String.raw(templateObject_2 || (templateObject_2 = __makeTemplateObject([".S*$"], ["\\.\\S*$"])));
var applyPattern = String.raw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["@applys+[^;]*$"], ["@apply\\s+[^;]*$"])));
var windiPattern = String.raw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Wwindi`[^`]*$"], ["\\Wwindi\\`[^\\`]*$"])));
var htmlPattern = getConfig('windicss.enableEmmetCompletion') ? [classPattern, applyPattern, emmetPattern, windiPattern] : [classPattern, applyPattern, windiPattern];
var applyRegex = new RegExp(applyPattern);
var patterns = {
    'html': connect(htmlPattern),
    'js': connect(htmlPattern),
    'css': connect(applyPattern),
};
var fileTypes = {
    'css': {
        type: 'css',
    },
    'scss': {
        type: 'css',
    },
    'sass': {
        type: 'css',
    },
    'less': {
        type: 'css',
    },
    'javascript': {
        type: 'js',
    },
    'javascriptreact': {
        type: 'js',
    },
    'typescriptreact': {
        type: 'js',
    },
    'html': {
        type: 'html',
    },
    'php': {
        type: 'html',
    },
    'vue': {
        type: 'html',
        pattern: /(\s+(v-bind)?:class\s*=\s*["][{[][^"]*$)|(\s+(v-bind)?:class\s*=\s*['][{[][^']*$)/,
    },
    'svelte': {
        type: 'html',
        pattern: /(\s+class:\S*$)|((\s+class\s*=\s*["]\s*{?\s*)[^"]*$)|((\s+class\s*=\s*[']\s*{?\s*)[^']*$)|((\s+class\s*=\s*[`]\s*{?\s*)[^`]*$)/,
    },
};
if (getConfig('windicss.includeLanguages')) {
    // "windicss.includeLanguages": {
    //   "rust": "html", // css // js
    //   "abc": {
    //      "type": "html"
    //   }
    //   "def": {
    //      "type": "html",
    //      "patterns": ["(class(Name)?\\s*=\\s*\\S?\\s*["'\\`])[^\"'\\`]*$", "..."],
    //   }>
    // }
    var config = getConfig('windicss.includeLanguages');
    if (config) {
        Object.entries(config).map(function (_a) {
            var key = _a[0], value = _a[1];
            if (typeof value === 'string') {
                fileTypes[key] = { type: value in patterns ? value : 'css' };
            }
            else {
                var pattern = (value.patterns === undefined || value.patterns.length === 0) ? undefined : value.patterns;
                if (key in fileTypes) {
                    fileTypes[key] = { type: value.type || fileTypes[key].type, pattern: fileTypes[key].pattern ? pattern ? connect(__spreadArray$3([fileTypes[key].pattern.source], pattern)) : fileTypes[key].pattern : pattern ? connect(__spreadArray$3([], pattern)) : undefined };
                }
                else if (value.type && value.type in fileTypes) {
                    fileTypes[key] = {
                        type: value.type || fileTypes[value.type].type,
                        pattern: fileTypes[value.type].pattern ? pattern ? connect(__spreadArray$3([fileTypes[value.type].pattern.source], pattern)) : fileTypes[value.type].pattern : pattern ? connect(__spreadArray$3([], pattern)) : undefined
                    };
                }
            }
        });
    }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var utilities = {
    animation: [
        'animate-{static}',
    ],
    animationDelay: [
        'animate-delay-{static}',
        'animate-delay-{int}',
        'animate-delay-{time}',
        'animate-delay-${var}',
        'animate-delay-[1.3s]',
    ],
    animationDuration: [
        'animate-duration-{static}',
        'animate-duration-{int}',
        'animate-duration-{time}',
        'animate-duration-${var}',
        'animate-duration-[1.3s]',
    ],
    animationIterationCount: [
        'animate-{static}',
        'animate-repeat-{int}',
        'animate-repeat-[23]',
    ],
    animationTimingFunction: [
        'animate-ease-{static}',
        'animate-ease-[cubic-bezier(0.25,0.1,0.25,1)]',
    ],
    backdropBlur: [
        'backdrop-blur-{static}',
        'backdrop-blur-[11px]',
    ],
    backdropBrightness: [
        'backdrop-brightness-{static}',
        'backdrop-brightness-[1.23]',
    ],
    backdropContrast: [
        'backdrop-contrast-{static}',
        'backdrop-contrast-[0.87]',
    ],
    backdropGrayscale: [
        'backdrop-grayscale-{static}',
        'backdrop-grayscale-[0.42]',
    ],
    backdropHueRotate: [
        'backdrop-hue-rotate-{static}',
        'backdrop-hue-rotate-[1.57rad]',
    ],
    backdropInvert: [
        'backdrop-invert-{static}',
        'backdrop-invert-[0.66]',
    ],
    backdropOpacity: [
        'backdrop-opacity-{static}',
        'backdrop-opacity-[22%]',
    ],
    backdropSaturate: [
        'backdrop-saturate-{static}',
        'backdrop-saturate-[144%]',
    ],
    backdropSepia: [
        'backdrop-sepia-{static}',
        'backdrop-sepia-[0.38]',
    ],
    backgroundColor: [
        'bg-{color}',
        'bg-${var}',
        'bg-[#0f0]',
        'bg-[#ff0000]',
        'bg-[#0000ffcc]',
        'bg-[rgb(123,123,123)]',
        'bg-[rgba(123,123,123,0.5)]',
        'bg-[hsl(0,100%,50%)]',
        'bg-[hsla(0,100%,50%,0.3)]',
    ],
    backgroundImage: [
        'bg-{static}',
    ],
    backgroundOpacity: [
        'bg-opacity-{static}',
        'bg-opacity-{int}',
        'bg-opacity-${var}',
        'bg-opacity-[0.11]',
        'bg-opacity-[var(--value)]',
    ],
    backgroundPosition: [
        'bg-{static}',
    ],
    backgroundSize: [
        'bg-{static}',
    ],
    blur: [
        'blur-{static}',
        'blur-{int}',
        'blur-{size}',
        'blur-[15px]',
    ],
    borderColor: [
        'border-{color}',
        'border-${var}',
        'border-[#f00]',
        'border-t-{color}',
        'border-l-{color}',
        'border-b-{color}',
        'border-r-{color}',
    ],
    borderOpacity: [
        'border-opacity-{static}',
        'border-opacity-{int}',
        'border-opacity-${var}',
    ],
    borderRadius: [
        'rounded-{static}',
        'rounded-t-{static}',
        'rounded-l-{static}',
        'rounded-r-{static}',
        'rounded-b-{static}',
        'rounded-${var}',
        'rounded-t-${var}',
        'rounded-l-${var}',
        'rounded-r-${var}',
        'rounded-b-${var}',
        'rounded-[11px]',
        'rounded-t-[var(--radius)]',
        'rounded-r-[var(--radius)]',
        'rounded-b-[var(--radius)]',
        'rounded-l-[var(--radius)]',
        'rounded-tr-[var(--radius)]',
        'rounded-br-[var(--radius)]',
        'rounded-bl-[var(--radius)]',
        'rounded-tl-[var(--radius)]',
        'rounded-tl-{static}',
        'rounded-tr-{static}',
        'rounded-br-{static}',
        'rounded-bl-{static}',
        'rounded-{nxl}',
        'rounded-{size}',
        'rounded-t-{nxl}',
        'rounded-t-{size}',
        'rounded-l-{nxl}',
        'rounded-l-{size}',
        'rounded-r-{nxl}',
        'rounded-r-{size}',
        'rounded-b-{nxl}',
        'rounded-b-{size}',
        'rounded-tl-{nxl}',
        'rounded-tl-{size}',
        'rounded-tr-{nxl}',
        'rounded-tr-{size}',
        'rounded-br-{nxl}',
        'rounded-br-{size}',
        'rounded-bl-{nxl}',
        'rounded-bl-{size}',
    ],
    borderWidth: [
        'border-{static}',
        'border-{int}',
        'border-{size}',
        'border-[2.5px]',
        'border-t-{static}',
        'border-t-{int}',
        'border-t-{size}',
        'border-r-{static}',
        'border-r-{int}',
        'border-r-{size}',
        'border-b-{static}',
        'border-b-{int}',
        'border-b-{size}',
        'border-l-{static}',
        'border-l-{int}',
        'border-l-{size}',
        'border-width-${var}',
        'border-t-width-${var}',
        'border-l-width-${var}',
        'border-r-width-${var}',
        'border-b-width-${var}',
    ],
    boxShadow: [
        'shadow-{static}',
    ],
    boxShadowColor: [
        'shadow-{color}',
        'shadow-${var}',
    ],
    brightness: [
        'brightness-{static}',
        'brightness-[300%]',
    ],
    caretColor: [
        'caret-{color}',
        'caret-${var}',
    ],
    caretOpacity: [
        'caret-opacity-{static}',
        'caret-opacity-${var}',
    ],
    content: [
        'content-{static}',
        'content-{string}',
        'content-${var}',
        'content-[\'👍\']',
        'content-[attr(data-content)]',
    ],
    container: [
        'container',
    ],
    contrast: [
        'contrast-{static}',
        'contrast-[2.4]',
    ],
    cursor: [
        'cursor-{static}',
    ],
    divideColor: [
        'divide-{color}',
        'divide-${var}',
    ],
    divideOpacity: [
        'divide-opacity-{static}',
        'divide-opacity-{int}',
        'divide-opacity-${var}',
    ],
    divideWidth: [
        'divide-y-{static}',
        'divide-x-{static}',
        'divide-y-reverse',
        'divide-x-reverse',
        'divide-y-{int}',
        'divide-x-{int}',
        'divide-y-${var}',
        'divide-x-${var}',
    ],
    dropShadow: [
        'drop-shadow-{static}',
    ],
    fill: [
        'fill-{color}',
        'fill-${var}',
        'fill-[#1c1c1e]',
        'fill-[var(--color)]',
    ],
    flex: [
        'flex-{static}',
        'flex-[var(--flex)]',
    ],
    flexGrow: [
        'flex-grow-{static}',
        'flex-grow-[var(--grow)]',
    ],
    flexShrink: [
        'flex-shrink-{static}',
        'flex-shrink-[var(--shrink)]',
    ],
    fontFamily: [
        'font-{static}',
        'font-${var}',
    ],
    fontSize: [
        'text-{static}',
        'text-{nxl}',
        'text-size-${var}',
        'text-[2.23rem]',
    ],
    fontWeight: [
        'font-{static}',
        'font-{int}',
    ],
    gap: [
        'gap-{static}',
        'gap-x-{static}',
        'gap-y-{static}',
        'gap-{float}',
        'gap-x-{float}',
        'gap-y-{float}',
        'gap-{size}',
        'gap-x-{size}',
        'gap-y-{size}',
        'gap-${var}',
        'gap-x-${var}',
        'gap-y-${var}',
    ],
    gradientColorStops: [
        'from-{color}',
        'from-${var}',
        'from-[#da5b66]',
        'from-[var(--color)]',
        'via-{color}',
        'via-${var}',
        'via-[#da5b66]',
        'via-[var(--color)]',
        'to-{color}',
        'to-${var}',
        'to-[#da5b66]',
        'to-[var(--color)]',
    ],
    grayscale: [
        'grayscale-{static}',
        'grayscale-[0.55]',
    ],
    gridAutoColumns: [
        'auto-cols-{static}',
    ],
    gridAutoRows: [
        'auto-rows-{static}',
    ],
    gridColumn: [
        'col-{static}',
        'col-span-{int}',
        'col-${var}',
        'col-[7]',
    ],
    gridColumnEnd: [
        'col-end-{static}',
        'col-end-{int}',
        'col-end-${var}',
        'col-end-[7]',
    ],
    gridColumnStart: [
        'col-start-{static}',
        'col-start-{int}',
        'col-start-${var}',
        'col-start-[7]',
    ],
    gridRow: [
        'row-{static}',
        'row-span-{int}',
        'row-${var}',
        'row-[7]',
    ],
    gridRowEnd: [
        'row-end-{static}',
        'row-end-{int}',
        'row-end-${var}',
        'row-end-[7]',
    ],
    gridRowStart: [
        'row-start-{static}',
        'row-start-{int}',
        'row-start-${var}',
        'row-start-[7]',
    ],
    gridTemplateColumns: [
        'grid-cols-{static}',
        'grid-cols-{int}',
        'grid-cols-${var}',
        'grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px]',
    ],
    gridTemplateRows: [
        'grid-rows-{static}',
        'grid-rows-{int}',
        'grid-rows-${var}',
        'grid-rows-[200px,repeat(auto-fill,minmax(15%,100px)),300px]',
    ],
    height: [
        'h-{static}',
        'h-{float}',
        'h-{fraction}',
        'h-{nxl}',
        'h-{size}',
        'h-${var}',
        'h-[3.23rem]',
        'h-[calc(100%+1rem)]',
        'h-[var(--width)]',
    ],
    hueRotate: [
        'hue-rotate-{static}',
        'hue-rotate-[0.8turn]',
    ],
    inset: [
        'inset-{static}',
        'inset-{float}',
        'inset-{fraction}',
        'inset-{size}',
        'inset-${var}',
        'inset-[11px]',
        'inset-y-{static}',
        'inset-y-{float}',
        'inset-y-{fraction}',
        'inset-y-{size}',
        'inset-y-${var}',
        'inset-x-{static}',
        'inset-x-{float}',
        'inset-x-{fraction}',
        'inset-x-{size}',
        'inset-x-${var}',
        'top-{static}',
        'top-{float}',
        'top-{fraction}',
        'top-{size}',
        'top-${var}',
        'right-{static}',
        'right-{float}',
        'right-{fraction}',
        'right-{size}',
        'right-${var}',
        'bottom-{static}',
        'bottom-{float}',
        'bottom-{fraction}',
        'bottom-{size}',
        'bottom-${var}',
        'left-{static}',
        'left-{float}',
        'left-{fraction}',
        'left-{size}',
        'left-${var}',
    ],
    invert: [
        'invert-{static}',
        'invert-[0.75]',
    ],
    letterSpacing: [
        'tracking-{static}',
        'tracking-{size}',
        'tracking-${var}',
        'tracking-[var(--tracking)]',
    ],
    lineHeight: [
        'leading-{static}',
        'leading-{int}',
        'leading-{size}',
        'leading-${var}',
        'leading-[var(--leading)]',
    ],
    listStyleType: [
        'list-{static}',
    ],
    margin: [
        'm-{static}',
        'my-{static}',
        'mx-{static}',
        'mt-{static}',
        'mr-{static}',
        'mb-{static}',
        'ml-{static}',
        'm-{float}',
        'my-{float}',
        'mx-{float}',
        'mt-{float}',
        'mr-{float}',
        'mb-{float}',
        'ml-{float}',
        'm-{size}',
        'my-{size}',
        'mx-{size}',
        'mt-{size}',
        'mr-{size}',
        'mb-{size}',
        'ml-{size}',
        'm-${var}',
        'my-${var}',
        'mx-${var}',
        'mt-${var}',
        'mr-${var}',
        'mb-${var}',
        'ml-${var}',
        'm-[7px]',
        'my-[7px]',
        'mx-[7px]',
        'mt-[7px]',
        'mr-[7px]',
        'mb-[7px]',
        'ml-[7px]',
        'mt-[clamp(30px,100px)]',
    ],
    maxHeight: [
        'max-h-{static}',
        'max-h-{float}',
        'max-h-{fraction}',
        'max-h-{nxl}',
        'max-h-{size}',
        'max-h-${var}',
        'max-h-[3.23rem]',
        'max-h-[calc(100%+1rem)]',
        'max-h-[var(--width)]',
    ],
    maxWidth: [
        'max-w-{static}',
        'max-w-{float}',
        'max-w-{fraction}',
        'max-w-{nxl}',
        'max-w-{size}',
        'max-w-${var}',
        'max-w-[3.23rem]',
        'max-w-[calc(100%+1rem)]',
        'max-w-[var(--width)]',
    ],
    minHeight: [
        'min-h-{static}',
        'min-h-{float}',
        'min-h-{fraction}',
        'min-h-{nxl}',
        'min-h-{size}',
        'min-h-${var}',
        'min-h-[3.23rem]',
        'min-h-[calc(100%+1rem)]',
        'min-h-[var(--width)]',
    ],
    minWidth: [
        'min-w-{static}',
        'min-w-{float}',
        'min-w-{fraction}',
        'min-w-{nxl}',
        'min-w-{size}',
        'min-w-${var}',
        'min-w-[3.23rem]',
        'min-w-[calc(100%+1rem)]',
        'min-w-[var(--width)]',
    ],
    objectPosition: [
        'object-{static}',
    ],
    opacity: [
        'opacity-{static}',
        'opacity-{int}',
        'opacity-${var}',
        'opacity-[var(--opacity)]',
    ],
    order: [
        'order-{static}',
        'order-{int}',
        'order-${var}',
    ],
    outline: [
        'outline-{static}',
        'outline-[var(--outline)]',
    ],
    outlineColor: [
        'outline-{color}',
        'outline-${var}',
        'outline-solid-{color}',
        'outline-dotted-{color}',
    ],
    padding: [
        'p-{static}',
        'p-[var(--app-padding)]',
        'py-{static}',
        'px-{static}',
        'pt-{static}',
        'pr-{static}',
        'pb-{static}',
        'pl-{static}',
        'p-{float}',
        'py-{float}',
        'px-{float}',
        'pt-{float}',
        'pr-{float}',
        'pb-{float}',
        'pl-{float}',
        'p-{size}',
        'py-{size}',
        'px-{size}',
        'pt-{size}',
        'pr-{size}',
        'pb-{size}',
        'pl-{size}',
        'p-${var}',
        'py-${var}',
        'px-${var}',
        'pt-${var}',
        'pr-${var}',
        'pb-${var}',
        'pl-${var}',
    ],
    perspective: [
        'perspect-{static}',
    ],
    perspectiveOrigin: [
        'perspect-origin-{static}',
    ],
    placeholderColor: [
        'placeholder-{color}',
        'placeholder-${var}',
        'placeholder-[var(--placeholder)]',
    ],
    placeholderOpacity: [
        'placeholder-opacity-{static}',
        'placeholder-opacity-{int}',
        'placeholder-opacity-${var}',
        'placeholder-opacity-[var(--placeholder)]',
    ],
    ringColor: [
        'ring-{color}',
        'ring-${var}',
        'ring-[#76ad65]',
    ],
    ringOffsetColor: [
        'ring-offset-{color}',
        'ring-offset-${var}',
        'ring-offset-[#76ad65]',
    ],
    ringOffsetWidth: [
        'ring-offset-{static}',
        'ring-offset-{int}',
        'ring-offset-${var}',
        'ring-offset-[10px]',
    ],
    ringOpacity: [
        'ring-opacity-{static}',
        'ring-opacity-{int}',
        'ring-opacity-${var}',
        'ring-opacity-[var(--ring-opacity)]',
    ],
    ringWidth: [
        'ring-inset',
        'ring-{static}',
        'ring-{int}',
        'ring-width-${var}',
        'ring-[10px]',
    ],
    rotate: [
        'rotate-{static}',
        'rotate-{float}',
        'rotate-${var}',
        'rotate-x-{static}',
        'rotate-x-{float}',
        'rotate-x-${var}',
        'rotate-y-{static}',
        'rotate-y-{float}',
        'rotate-y-${var}',
        'rotate-z-{static}',
        'rotate-z-{float}',
        'rotate-z-${var}',
        'rotate-[23deg]',
        'rotate-[2.3rad]',
        'rotate-[401grad]',
        'rotate-[1.5turn]',
    ],
    saturate: [
        'saturate-{static}',
        'saturate-[180%]',
    ],
    scale: [
        'scale-{static}',
        'scale-{int}',
        'scale-${var}',
        'scale-x-{static}',
        'scale-x-{int}',
        'scale-x-${var}',
        'scale-y-{static}',
        'scale-y-{int}',
        'scale-y-${var}',
        'scale-z-{static}',
        'scale-z-{int}',
        'scale-z-${var}',
    ],
    sepia: [
        'sepia-{static}',
        'sepia-[0.2]',
    ],
    skew: [
        'skew-x-{static}',
        'skew-x-{float}',
        'skew-x-${var}',
        'skew-x-[3px]',
        'skew-y-{static}',
        'skew-y-{float}',
        'skew-y-${var}',
        'skew-y-[3px]',
    ],
    space: [
        'space-y-{static}',
        'space-y-reverse',
        'space-x-{static}',
        'space-x-reverse',
        'space-y-{float}',
        'space-x-{float}',
        'space-y-${var}',
        'space-x-${var}',
        'space-x-[20cm]',
        'space-x-[calc(20%-1cm)]',
    ],
    stroke: [
        'stroke-{color}',
        'stroke-${var}',
        'stroke-[#da5b66]',
    ],
    strokeWidth: [
        'stroke-{static}',
        'stroke-{int}',
        'stroke-width-${var}',
    ],
    strokeDashArray: [
        'stroke-dash-{static}',
        'stroke-dash-{int}',
    ],
    strokeDashOffset: [
        'stroke-offset-{static}',
        'stroke-offset-{int}',
    ],
    tabSize: [
        'tab-{static}',
    ],
    textColor: [
        'text-{color}',
        'text-${var}',
    ],
    textOpacity: [
        'text-opacity-{static}',
        'text-opacity-{int}',
        'text-opacity-${var}',
    ],
    textShadow: [
        'text-shadow-{static}',
    ],
    textDecorationColor: [
        'underline-{color}',
        'underline-${var}',
    ],
    textDecorationOpacity: [
        'underline-opacity-{static}',
        'underline-opacity-{int}',
        'underline-opacity-${var}',
    ],
    textDecorationLength: [
        'underline-{static}',
        'underline-{int}',
        'underline-{size}',
    ],
    textDecorationOffset: [
        'underline-offset-{static}',
        'underline-offset-{int}',
        'underline-offset-{size}',
    ],
    textIndent: [
        'indent-{static}',
        'indent-{size}',
    ],
    textStrokeColor: [
        'text-stroke-{color}',
        'text-stroke-${var}',
    ],
    textStrokeWidth: [
        'text-stroke-{static}',
        'text-stroke-{size}',
    ],
    transformOrigin: [
        'origin-{static}',
    ],
    transitionDuration: [
        'duration-{static}',
        'duration-{int}',
        'duration-{time}',
        'duration-${var}',
        'duration-[2s]',
    ],
    transitionDelay: [
        'delay-{static}',
        'delay-{int}',
        'delay-{time}',
        'delay-${var}',
        'delay-[2s]',
    ],
    transitionProperty: [
        'transition-{static}',
    ],
    transitionTimingFunction: [
        'ease-{static}',
    ],
    translate: [
        'translate-{static}',
        'translate-{float}',
        'translate-{fraction}',
        'translate-{size}',
        'translate-${var}',
        'translate-x-{static}',
        'translate-x-{float}',
        'translate-x-{fraction}',
        'translate-x-{size}',
        'translate-x-${var}',
        'translate-y-{static}',
        'translate-y-{float}',
        'translate-y-{fraction}',
        'translate-y-{size}',
        'translate-y-${var}',
        'translate-z-{static}',
        'translate-z-{float}',
        'translate-z-{fraction}',
        'translate-z-{size}',
        'translate-z-${var}',
    ],
    width: [
        'w-{static}',
        'w-{float}',
        'w-{fraction}',
        'w-{nxl}',
        'w-{size}',
        'w-${var}',
        'w-[3.23rem]',
        'w-[calc(100%+1rem)]',
        'w-[calc(var(--10-10px,calc(-20px-(-30px--40px)))-50px)]',
        'w-[var(--width)]',
        'w-[var(--width,calc(100%+1rem))]',
        'w-[calc(100%/3-1rem*2)]',
    ],
    zIndex: [
        'z-{static}',
        'z-{int}',
        'z-${var}',
    ],
};
var negative = {
    inset: true,
    zIndex: true,
    order: true,
    margin: true,
    space: true,
    letterSpacing: true,
    rotate: true,
    translate: true,
    skew: true,
};

function generateCompletions(processor, colors, attributify, prefix) {
    var _a;
    if (attributify === void 0) { attributify = true; }
    if (prefix === void 0) { prefix = ''; }
    var completions = {
        static: [],
        color: [],
        bracket: [],
        dynamic: [],
        attr: {
            static: {},
            color: {},
            bracket: {},
            dynamic: {},
        },
    };
    var staticUtilities = processor.resolveStaticUtilities(true);
    // generate normal utilities completions
    for (var _i = 0, _b = Object.entries(__assign(__assign({}, utilities), processor._plugin.completions)); _i < _b.length; _i++) {
        var _c = _b[_i], config = _c[0], list = _c[1];
        for (var _d = 0, list_1 = list; _d < list_1.length; _d++) {
            var utility = list_1[_d];
            var bracket = utility.indexOf('[');
            if (bracket !== -1) {
                completions.bracket.push(utility);
                continue;
            }
            var mark = utility.indexOf('{');
            if (mark === -1) {
                completions.static.push(utility);
            }
            else {
                var key = prefix + utility.slice(0, mark - 1);
                var suffix = utility.slice(mark);
                switch (suffix) {
                    case '{static}':
                        for (var _e = 0, _f = Object.keys(processor.theme(config, {})); _e < _f.length; _e++) {
                            var i = _f[_e];
                            if (i === 'DEFAULT' && key === 'animate')
                                continue; // animate not an available utility
                            completions.static.push(i === 'DEFAULT' ? key : i.charAt(0) === '-' ? "-" + key + i : key + "-" + i);
                        }
                        break;
                    case '{color}':
                        for (var _g = 0, _h = Object.entries(flatColors(processor.theme(config, colors))); _g < _h.length; _g++) {
                            var _j = _h[_g], k = _j[0], v = _j[1];
                            if (k === 'DEFAULT')
                                continue;
                            completions.color.push({
                                label: key + "-" + k,
                                doc: v,
                            });
                        }
                        break;
                    default:
                        completions.dynamic.push({
                            label: prefix + utility,
                            pos: utility.length - mark,
                        });
                        if (config in negative) {
                            completions.dynamic.push({
                                label: prefix + ("-" + utility),
                                pos: utility.length + 1 - mark,
                            });
                        }
                        break;
                }
            }
        }
    }
    // generate attributify completions
    var attr = { static: {}, color: {}, bracket: {}, dynamic: {} };
    if (attributify) {
        var attrDisable_1 = processor.config('attributify.disable');
        var addAttr = function (key, value, type) {
            if (type === void 0) { type = 'static'; }
            if (attrDisable_1 && attrDisable_1.includes(key))
                return;
            key in attr[type] ? attr[type][key].push(value) : attr[type][key] = [value];
        };
        addAttr('flex', '~');
        addAttr('flex', 'inline');
        addAttr('grid', '~');
        addAttr('grid', 'inline');
        addAttr('gradient', 'none');
        addAttr('underline', '~');
        addAttr('underline', 'line-through');
        addAttr('underline', 'none');
        addAttr('filter', '~');
        addAttr('filter', 'none');
        addAttr('backdrop', '~');
        addAttr('backdrop', 'none');
        for (var _k = 0, _l = Object.entries(staticUtilities); _k < _l.length; _k++) {
            var _m = _l[_k], key = _m[0], style = _m[1];
            if (!style[0])
                continue;
            switch (style[0].meta.group) {
                case 'fontStyle':
                case 'fontSmoothing':
                case 'fontVariantNumeric':
                    addAttr('font', key);
                    break;
                case 'textAlign':
                    addAttr('text', key.slice(5)); // text-
                    break;
                case 'verticalAlign':
                    addAttr('text', key.slice(6)); // align-
                    break;
                case 'textDecoration':
                    addAttr('text', key);
                    break;
                case 'textTransform':
                case 'textOverflow':
                case 'wordBreak':
                case 'writingMode':
                case 'writingOrientation':
                case 'hyphens':
                    addAttr('text', key);
                    break;
                case 'whitespace':
                    addAttr('text', key.slice(5)); // whitespace -> space
                    break;
                case 'listStylePosition':
                    addAttr('list', key.slice(5)); // list-
                    break;
                case 'backgroundAttachment':
                case 'backgroundRepeat':
                case 'backgroundClip':
                case 'backgroundOrigin':
                case 'backgroundBlendMode':
                    addAttr('bg', key.slice(3)); // bg-
                    break;
                case 'borderStyle':
                    addAttr('border', key.slice(7)); // border-
                    addAttr('divide', key.slice(7)); // border-
                    break;
                case 'borderCollapse':
                    addAttr('border', key.slice(7)); // border-
                    break;
                case 'strokeDashArray':
                case 'strokeDashOffset':
                case 'stroke':
                    addAttr('icon', key);
                    break;
                case 'flexWrap':
                case 'flexDirection':
                    addAttr('flex', key.slice(5)); // flex-
                    break;
                case 'gridAutoFlow':
                    addAttr('grid', key.slice(5)); // grid-
                    break;
                case 'display':
                    if (key.startsWith('table') || key === 'inline-table') {
                        addAttr('table', key.replace(/-?table-?/, '') || '~');
                    }
                    else {
                        addAttr('display', key);
                    }
                    break;
                case 'position':
                case 'float':
                case 'clear':
                    addAttr('pos', key);
                    break;
                case 'isolation':
                    addAttr('pos', key);
                    addAttr('isolation', key.replace('isolation-', ''));
                    break;
                case 'visibility':
                case 'backfaceVisibility':
                    addAttr('display', key);
                    break;
                case 'tableLayout':
                    addAttr('table', key.slice(6)); // table-
                    break;
                case 'captionSide':
                case 'emptyCells':
                    addAttr('table', key);
                    break;
                case 'alignContent':
                case 'alignItems':
                case 'alignSelf':
                    addAttr('align', key);
                    break;
                case 'justifyContent':
                case 'justifyItems':
                case 'justifySelf':
                case 'placeContent':
                case 'placeItems':
                case 'placeSelf':
                case 'userSelect':
                case 'resize':
                case 'overflow':
                case 'appearance':
                case 'textDecorationStyle':
                case 'overscrollBehavior':
                    var splits = split(key);
                    if (!splits.key)
                        break;
                    addAttr(splits.key, splits.body);
                    break;
                case 'boxDecorationBreak':
                    addAttr('box', key);
                    break;
                case 'boxSizing':
                    addAttr('box', key.slice(4)); // box-
                    break;
                case 'objectFit':
                    addAttr('object', key.slice(7)); // object-
                    break;
                case 'transform':
                    if (key.startsWith('preserve')) {
                        addAttr('transform', key);
                    }
                    else {
                        addAttr('transform', key.slice(10) || '~'); // transform-
                    }
                    break;
                case 'perspectOrigin':
                    addAttr('transform', key);
                    break;
                case 'pointerEvents':
                    addAttr('pointer', key.slice(15)); // pointer-events-
                    break;
                case 'mixBlendMode':
                    addAttr('blend', key.slice(10)); // mix-blend-
                    break;
                case 'accessibility':
                    addAttr('sr', key.replace(/sr-/, ''));
                    break;
            }
        }
        for (var _o = 0, _p = completions.static; _o < _p.length; _o++) {
            var utility = _p[_o];
            var _q = split(utility), key = _q.key, body = _q.body;
            if (key) {
                if (key === 'underline')
                    addAttr('text', utility);
                addAttr(key, body);
            }
        }
        for (var _r = 0, _s = completions.color; _r < _s.length; _r++) {
            var _t = _s[_r], label = _t.label, doc = _t.doc;
            var _u = split(label), key = _u.key, body = _u.body;
            if (key) {
                addAttr(key, { label: body, doc: doc }, 'color');
                if (key === 'underline')
                    addAttr('text', { label: label, doc: doc }, 'color');
            }
        }
        for (var _v = 0, _w = completions.bracket; _v < _w.length; _v++) {
            var utility = _w[_v];
            var _x = split(utility), key = _x.key, body = _x.body;
            if (key)
                addAttr(key, body, 'bracket');
        }
        for (var _y = 0, _z = completions.dynamic; _y < _z.length; _y++) {
            var _0 = _z[_y], label = _0.label, pos = _0.pos;
            var _1 = split(label), key = _1.key, body = _1.body;
            if (key)
                addAttr(key, { label: body, pos: pos }, 'dynamic');
        }
    }
    (_a = completions.static).push.apply(_a, Object.keys(staticUtilities));
    completions.attr = attr;
    return completions;
}
function split(utility) {
    var _a, _b;
    if (utility.startsWith('bg-gradient'))
        return { key: 'gradient', body: utility.replace(/^bg-gradient-/, '') };
    if (utility === 'w-min')
        return { key: 'w', body: 'min-content' };
    if (utility === 'w-max')
        return { key: 'w', body: 'max-content' };
    if (utility === 'h-min')
        return { key: 'h', body: 'min-content' };
    if (utility === 'h-max')
        return { key: 'h', body: 'max-content' };
    if (utility.startsWith('min-w'))
        return { key: 'w', body: utility.replace(/^min-w-/, 'min-') };
    if (utility.startsWith('max-w'))
        return { key: 'w', body: utility.replace(/^max-w-/, 'max-') };
    if (utility.startsWith('min-h'))
        return { key: 'h', body: utility.replace(/^min-h-/, 'min-') };
    if (utility.startsWith('max-h'))
        return { key: 'h', body: utility.replace(/^max-h-/, 'max-') };
    var key = (_a = utility.match(/[^-]+/)) === null || _a === void 0 ? void 0 : _a[0];
    if (key) {
        if (['duration', 'ease', 'delay'].includes(key))
            return { key: 'transition', body: utility };
        if (['scale', 'rotate', 'translate', 'skew', 'origin', 'perspect'].includes(key))
            return { key: 'transform', body: utility };
        if (['blur', 'brightness', 'contrast', 'drop', 'grayscale', 'hue', 'invert', 'saturate', 'sepia'].includes(key))
            return { key: 'filter', body: utility };
        if (['inset', 'top', 'left', 'bottom', 'right'].includes(key))
            return { key: 'pos', body: utility };
        if (['py', 'px', 'pt', 'pl', 'pb', 'pr'].includes(key))
            return { key: 'p', body: utility.slice(1) };
        if (['my', 'mx', 'mt', 'ml', 'mb', 'mr'].includes(key))
            return { key: 'm', body: utility.charAt(0) === '-' ? '-' + utility.slice(2) : utility.slice(1) };
        if (['stroke', 'fill'].includes(key))
            return { key: 'icon', body: utility };
        if (['from', 'via', 'to'].includes(key))
            return { key: 'gradient', body: utility };
        if (['tracking', 'leading'].includes(key))
            return { key: 'font', body: utility };
        if (['tab', 'indent'].includes(key))
            return { key: 'text', body: utility };
        if (['col', 'row', 'auto', 'gap'].includes(key))
            return { key: 'grid', body: utility };
        if (key === 'placeholder')
            return { key: 'text', body: utility };
        if (key === 'rounded')
            return { key: 'border', body: utility };
    }
    var negative = utility.charAt(0) === '-';
    var body = ((_b = (negative ? utility.slice(1) : utility).match(/-.+/)) === null || _b === void 0 ? void 0 : _b[0].slice(1)) || '~';
    return { key: key, body: negative ? '-' + body : body };
}

var Completions = /** @class */ (function () {
    function Completions(extension, processor) {
        this.processor = processor;
        this.extension = extension;
        this.separator = processor.config('separator', ':');
        this.completions = generateCompletions(processor, this.extension.colors, true, processor.config('prefix', ''));
        this.extension.attrs = this.completions.attr.static;
    }
    // register suggestions in class = ... | className = ... | @apply ... | sm = ... | hover = ...
    Completions.prototype.registerUtilities = function (ext, type, pattern, enableUtility, enableVariant, enableDynamic, enableBracket, enableEmmet) {
        var _this = this;
        if (enableUtility === void 0) { enableUtility = true; }
        if (enableVariant === void 0) { enableVariant = true; }
        if (enableDynamic === void 0) { enableDynamic = true; }
        if (enableBracket === void 0) { enableBracket = true; }
        if (enableEmmet === void 0) { enableEmmet = false; }
        return vscode.languages.registerCompletionItemProvider.apply(vscode.languages, __spreadArray$3([ext,
            {
                provideCompletionItems: function (document, position) {
                    var _a;
                    var text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
                    if ((!pattern || text.match(pattern) === null) && text.match(patterns[type]) === null) {
                        var key = (_a = text.match(/\S+(?=\s*=\s*["']?[^"']*$)/)) === null || _a === void 0 ? void 0 : _a[0];
                        if ((!key) || !(allowAttr(type) && _this.extension.isAttrVariant(key)))
                            return [];
                    }
                    var completions = [];
                    if (enableUtility && text.endsWith('/')) {
                        var utility_1 = text.match(/[\w-:!<@]+(?=\/$)/);
                        if (!utility_1)
                            return [];
                        return Object.keys(_this.processor.theme('opacity', {})).map(function (opacity, index) {
                            var item = new vscode.CompletionItem(opacity, vscode.CompletionItemKind.Unit);
                            item.detail = utility_1[0];
                            item.sortText = '1-' + index.toString().padStart(8, '0');
                            return item;
                        });
                    }
                    if (enableUtility) {
                        completions = completions.concat(_this.completions.static.map(function (classItem, index) {
                            var item = new vscode.CompletionItem(classItem, vscode.CompletionItemKind.Constant);
                            item.sortText = '1-' + index.toString().padStart(8, '0');
                            return item;
                        }));
                    }
                    if (enableVariant) {
                        completions = completions.concat(Object.keys(_this.extension.variants).map(function (variant, index) {
                            var item = new vscode.CompletionItem(variant + _this.separator, vscode.CompletionItemKind.Module);
                            item.detail = variant;
                            item.sortText = '2-' + index.toString().padStart(8, '0');
                            // register suggestion after select variant
                            item.command = {
                                command: 'editor.action.triggerSuggest',
                                title: variant,
                            };
                            return item;
                        })).concat(_this.completions.color.map(function (_a, index) {
                            var label = _a.label, doc = _a.doc;
                            var color = new vscode.CompletionItem(label, vscode.CompletionItemKind.Color);
                            color.sortText = '0-' + index.toString().padStart(8, '0');
                            color.documentation = doc;
                            return color;
                        }));
                    }
                    if (enableBracket) {
                        completions = completions.concat(_this.completions.bracket.map(function (label, index) {
                            var item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Struct);
                            item.sortText = '3-' + index.toString().padStart(8, '0');
                            return item;
                        }));
                    }
                    if (enableDynamic) {
                        completions = completions.concat(_this.completions.dynamic.map(function (_a, index) {
                            var label = _a.label; _a.pos;
                            var item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Variable);
                            item.sortText = '4-' + index.toString().padStart(8, '0');
                            return item;
                        }));
                    }
                    return completions;
                },
                resolveCompletionItem: function (item) {
                    var _a;
                    switch (item.kind) {
                        case vscode.CompletionItemKind.Constant:
                            item.documentation = buildStyle(_this.processor.interpret(item.label).styleSheet);
                            break;
                        case vscode.CompletionItemKind.Module:
                            item.documentation = _this.buildVariantDoc(item.detail);
                            item.detail = undefined;
                            break;
                        case vscode.CompletionItemKind.Struct:
                            item.documentation = buildStyle(_this.processor.interpret(item.label).styleSheet);
                            item.insertText = new vscode.SnippetString(item.label.replace('-[', '-[${1:').slice(0, -1) + "}]");
                            break;
                        case vscode.CompletionItemKind.Variable:
                            _this.generateDynamicInfo(item, false);
                            break;
                        case vscode.CompletionItemKind.Color:
                            var color = (item.documentation || 'currentColor');
                            item.documentation = ['transparent', 'currentColor'].includes(color) ? color : "rgb(" + ((_a = hex2RGB(color)) === null || _a === void 0 ? void 0 : _a.join(', ')) + ")";
                            item.detail = _this.processor.interpret(item.label).styleSheet.build();
                            break;
                        case vscode.CompletionItemKind.Unit:
                            item.documentation = item.detail ? buildStyle(_this.processor.interpret(item.detail + "/" + item.label).styleSheet) : undefined;
                            item.detail = undefined;
                            break;
                    }
                    return item;
                },
            },
            '"',
            '\'',
            '/',
            ':',
            '!',
            '(',
            ' '], (enableEmmet ? ['.'] : [])));
    };
    // register suggestion for bg, text, sm, hover ...
    Completions.prototype.registerAttrKeys = function (ext, enableUtility, enableVariant) {
        var _this = this;
        if (enableUtility === void 0) { enableUtility = true; }
        if (enableVariant === void 0) { enableVariant = true; }
        return vscode.languages.registerCompletionItemProvider(ext, {
            provideCompletionItems: function (document, position) {
                var text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
                if (text.match(/(<\w+\s*)[^>]*$/) !== null) {
                    if (!text.match(/\S+(?=\s*=\s*["']?[^"']*$)/) || text.match(/<\w+\s+$/)) {
                        var completions = [];
                        var prefix_1 = _this.processor.config('attributify.prefix');
                        var disable_1 = _this.processor.config('attributify.disable');
                        var prevKey = undefined;
                        if (text.endsWith(':')) {
                            prevKey = document.getText(document.getWordRangeAtPosition(new vscode.Position(position.line, position.character - 1), /[^:\s]+/));
                        }
                        if (!prevKey || (prevKey && (prevKey in _this.extension.variants || _this.extension.isAttrVariant(prevKey)))) {
                            if (enableUtility) {
                                completions = completions.concat(Object.keys(_this.completions.attr.static).map(function (label) { return attrKey(prefix_1 && !text.endsWith(':') ? prefix_1 + label : label, vscode.CompletionItemKind.Field, 0); }));
                            }
                            if (enableVariant) {
                                var variants = disable_1 ? Object.keys(_this.extension.variants).filter(function (i) { return !disable_1.includes(i); }) : Object.keys(_this.extension.variants);
                                completions = completions.concat(variants.map(function (label) { return attrKey(prefix_1 && !text.endsWith(':') ? prefix_1 + label : label, vscode.CompletionItemKind.Module, 1); }));
                            }
                        }
                        return completions;
                    }
                }
                return [];
            },
            resolveCompletionItem: function (item) {
                switch (item.kind) {
                    case vscode.CompletionItemKind.Field:
                        item.documentation = _this.buildAttrDoc(item.label);
                        break;
                    case vscode.CompletionItemKind.Module:
                        item.documentation = _this.buildVariantDoc(item.label, true);
                        break;
                }
                return item;
            },
        }, ':');
    };
    Completions.prototype.registerAttrValues = function (ext, enableUtility, enableVariant, enableDynamic, enableBracket) {
        var _this = this;
        if (enableUtility === void 0) { enableUtility = true; }
        if (enableVariant === void 0) { enableVariant = true; }
        if (enableDynamic === void 0) { enableDynamic = true; }
        if (enableBracket === void 0) { enableBracket = true; }
        return vscode.languages.registerCompletionItemProvider(ext, {
            provideCompletionItems: function (document, position) {
                var _a;
                var text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
                if (text.match(/(<\w+\s*)[^>]*$/) !== null) {
                    var key_1 = _this.extension.isAttrUtility((_a = text.match(/\S+(?=\s*=\s*["']?[^"']*$)/)) === null || _a === void 0 ? void 0 : _a[0]);
                    if (!key_1)
                        return [];
                    var completions = [];
                    if (enableUtility && text.endsWith('/')) {
                        var utility_2 = text.match(/[\w-:!<@]+(?=\/$)/);
                        if (!utility_2)
                            return [];
                        return Object.keys(_this.processor.theme('opacity', {})).map(function (opacity, index) {
                            var item = new vscode.CompletionItem(opacity, vscode.CompletionItemKind.Unit);
                            item.detail = [key_1, utility_2[0]].join('____');
                            item.sortText = '1-' + index.toString().padStart(8, '0');
                            return item;
                        });
                    }
                    if (enableUtility) {
                        completions = completions.concat(_this.completions.attr.static[key_1].map(function (label, index) {
                            var item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Constant);
                            item.detail = key_1;
                            item.sortText = '1-' + index.toString().padStart(8, '0');
                            return item;
                        })).concat(key_1 in _this.completions.attr.color ? _this.completions.attr.color[key_1].map(function (_a, index) {
                            var label = _a.label, doc = _a.doc;
                            var color = new vscode.CompletionItem(label, vscode.CompletionItemKind.Color);
                            color.sortText = '0-' + index.toString().padStart(8, '0');
                            color.detail = key_1;
                            color.documentation = doc;
                            return color;
                        }) : []);
                    }
                    if (enableVariant) {
                        completions = completions.concat(Object.keys(_this.extension.variants).map(function (variant, index) {
                            var item = new vscode.CompletionItem(variant + _this.separator, vscode.CompletionItemKind.Module);
                            item.detail = key_1 + ',' + variant;
                            item.sortText = '2-' + index.toString().padStart(8, '0');
                            item.command = {
                                command: 'editor.action.triggerSuggest',
                                title: variant,
                            };
                            return item;
                        }));
                    }
                    if (enableBracket && key_1 in _this.completions.attr.bracket) {
                        completions = completions.concat(_this.completions.attr.bracket[key_1].map(function (label, index) {
                            var item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Struct);
                            item.detail = key_1;
                            item.sortText = '3-' + index.toString().padStart(8, '0');
                            return item;
                        }));
                    }
                    if (enableDynamic && key_1 in _this.completions.attr.dynamic) {
                        completions = completions.concat(_this.completions.attr.dynamic[key_1].map(function (_a, index) {
                            var label = _a.label; _a.pos;
                            var item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Variable);
                            item.detail = key_1;
                            item.sortText = '4-' + index.toString().padStart(8, '0');
                            return item;
                        }));
                    }
                    return completions;
                }
            },
            resolveCompletionItem: function (item) {
                var _a, _b, _c, _d;
                var _e, _f, _g, _h, _j, _k;
                switch (item.kind) {
                    case vscode.CompletionItemKind.Constant:
                        item.documentation = buildStyle(_this.processor.attributify((_a = {}, _a[(_e = item.detail) !== null && _e !== void 0 ? _e : ''] = [item.label], _a)).styleSheet);
                        item.detail = undefined;
                        break;
                    case vscode.CompletionItemKind.Module:
                        var _l = ((_f = item.detail) === null || _f === void 0 ? void 0 : _f.split(',')) || [], attr = _l[0], variant = _l[1];
                        item.documentation = _this.buildAttrDoc(attr, variant, _this.separator);
                        item.detail = undefined;
                        break;
                    case vscode.CompletionItemKind.Struct:
                        item.documentation = buildStyle(_this.processor.attributify((_b = {}, _b[(_g = item.detail) !== null && _g !== void 0 ? _g : ''] = [item.label], _b)).styleSheet);
                        item.insertText = new vscode.SnippetString(item.label.replace('[', '[${1:').slice(0, -1) + "}]");
                        item.detail = undefined;
                        break;
                    case vscode.CompletionItemKind.Variable:
                        _this.generateDynamicInfo(item, true);
                        break;
                    case vscode.CompletionItemKind.Color:
                        var color = (item.documentation || 'currentColor');
                        item.documentation = ['transparent', 'currentColor'].includes(color) ? color : "rgb(" + ((_h = hex2RGB(color)) === null || _h === void 0 ? void 0 : _h.join(', ')) + ")";
                        item.detail = _this.processor.attributify((_c = {}, _c[(_j = item.detail) !== null && _j !== void 0 ? _j : ''] = [item.label], _c)).styleSheet.build();
                        break;
                    case vscode.CompletionItemKind.Unit:
                        var _m = ((_k = item.detail) === null || _k === void 0 ? void 0 : _k.split('____')) || [], key = _m[0], utility = _m[1];
                        item.documentation = buildStyle(_this.processor.attributify((_d = {}, _d[key] = [utility + "/" + item.label], _d)).styleSheet);
                        item.detail = undefined;
                        break;
                }
                return item;
            },
        }, '"', '\'', ':', '/', ' ');
    };
    Completions.prototype.generateDynamicInfo = function (item, attributify) {
        if (attributify === void 0) { attributify = false; }
        var match = item.label.match(/{\w+}$/);
        if (!match)
            return;
        switch (match[0]) {
            case '{int}':
                this.setDynamicInfo(item, 'int', '99', attributify);
                break;
            case '{float}':
                this.setDynamicInfo(item, 'float', '5.21', attributify);
                break;
            case '{fraction}':
                this.setDynamicInfo(item, 'fraction', '13/14', attributify);
                break;
            case '{time}':
                this.setDynamicInfo(item, 'time', '1.25s', attributify);
                break;
            case '{size}':
                this.setDynamicInfo(item, 'size', '25px', attributify);
                break;
            case '{string}':
                this.setDynamicInfo(item, 'string', 'i-love-u', attributify);
                break;
            case '{nxl}':
                this.setDynamicInfo(item, 'nxl', '9xl', attributify);
                break;
            case '{var}':
                this.setDynamicInfo(item, 'var', 'forever-and-ever', attributify);
                break;
        }
    };
    Completions.prototype.setDynamicInfo = function (item, type, example, attributify) {
        var _a;
        var _b;
        if (attributify === void 0) { attributify = false; }
        var regex = new RegExp("{" + type + "}$");
        item.documentation = buildStyle(attributify ? this.processor.attributify((_a = {}, _a[(_b = item.detail) !== null && _b !== void 0 ? _b : ''] = [item.label.replace(regex, example)], _a)).styleSheet : this.processor.interpret(item.label.replace(regex, example)).styleSheet);
        item.detail = "type." + type + "(" + example + ")";
        item.insertText = new vscode.SnippetString(item.label.replace(regex, "${1:" + example + "}"));
    };
    Completions.prototype.buildAttrDoc = function (attr, variant, separator) {
        var _a, _b;
        var style;
        if (variant) {
            style = this.extension.variants[variant]();
            style.selector = "[" + ((_a = this.processor) === null || _a === void 0 ? void 0 : _a.e(attr)) + "~=\"" + variant + separator + "&\"]";
        }
        else {
            style = new Style$1("[" + ((_b = this.processor) === null || _b === void 0 ? void 0 : _b.e(attr)) + "~=\"&\"]");
        }
        return buildEmptyStyle(style);
    };
    Completions.prototype.buildVariantDoc = function (variant, attributify) {
        var _a;
        if (attributify === void 0) { attributify = false; }
        if (!variant)
            return '';
        var style = this.extension.variants[variant]();
        if (attributify) {
            style.selector = "[" + ((_a = this.processor) === null || _a === void 0 ? void 0 : _a.e(variant)) + "~=\"&\"]";
        }
        else {
            style.selector = '&';
        }
        return buildEmptyStyle(style);
    };
    return Completions;
}());
function attrKey(label, kind, order) {
    var item = new vscode.CompletionItem(label, kind);
    item.sortText = order + "-" + label;
    item.insertText = new vscode.SnippetString(label + "=\"$1\"");
    item.command = {
        command: 'editor.action.triggerSuggest',
        title: label,
    };
    return item;
}

var EXT_NAME = 'WindiCSS IntelliSense';

var Log = /** @class */ (function () {
    function Log() {
    }
    Object.defineProperty(Log, "outputChannel", {
        get: function () {
            if (!this._channel)
                this._channel = vscode.window.createOutputChannel(EXT_NAME);
            return this._channel;
        },
        enumerable: false,
        configurable: true
    });
    Log.raw = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.outputChannel.appendLine(values.map(function (i) { return i.toString(); }).join(' '));
    };
    Log.info = function (message, intend) {
        if (intend === void 0) { intend = 0; }
        this.outputChannel.appendLine("" + '\t'.repeat(intend) + message);
    };
    Log.warning = function (message, prompt, intend) {
        if (prompt === void 0) { prompt = false; }
        if (intend === void 0) { intend = 0; }
        if (prompt)
            vscode.window.showWarningMessage(message);
        Log.info("\u26A0 WARN: " + message, intend);
    };
    Log.error = function (err, prompt, intend) {
        if (err === void 0) { err = {}; }
        if (prompt === void 0) { prompt = true; }
        if (intend === void 0) { intend = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var openOutputButton, message, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof err !== 'string')
                            Log.info("\uD83D\uDC1B ERROR: " + err.name + ": " + err.message + "\n" + err.stack, intend);
                        if (!prompt) return [3 /*break*/, 2];
                        openOutputButton = 'Error Log';
                        message = typeof err === 'string' ? err : EXT_NAME + " Error: " + err.toString();
                        return [4 /*yield*/, vscode.window.showErrorMessage(message, openOutputButton)];
                    case 1:
                        result = _a.sent();
                        if (result === openOutputButton)
                            this.show();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Log.show = function () {
        this._channel.show();
    };
    Log.divider = function () {
        this.outputChannel.appendLine('\n――――――\n');
    };
    return Log;
}());

var Commands = /** @class */ (function () {
    function Commands(processor) {
        this.processor = processor;
    }
    Commands.prototype.register = function (ctx) {
        return [
            this.interpret(),
            this.compile(),
            this.sort(),
            this.toggleFolding(),
            this.toggleDecorators(),
            this.togglePreview(),
            this.toggleCompletion(),
            this.toggleDynamicCompletion(),
            this.runAnalysis(ctx),
        ];
    };
    Commands.prototype.interpret = function () {
        var _this = this;
        return vscode.commands.registerTextEditorCommand('windicss.interpret', function (textEditor) {
            if (!_this.processor)
                return;
            var text = textEditor.document.getText();
            var parser = new HTMLParser(text);
            var preflights = _this.processor.preflight(text);
            var utilities = _this.processor.interpret(parser.parseClasses().map(function (i) { return i.result; }).join(' ')).styleSheet;
            fs.writeFileSync(path.join(path.dirname(textEditor.document.uri.fsPath), 'windi.css'), [preflights.build(), utilities.build()].join('\n'));
        });
    };
    Commands.prototype.compile = function () {
        var _this = this;
        return vscode.commands.registerTextEditorCommand('windicss.compile', function (textEditor, textEdit) {
            if (!_this.processor)
                return;
            var text = textEditor.document.getText();
            var parser = new HTMLParser(text);
            var preflights = _this.processor.preflight(text);
            var outputHTML = [];
            var outputCSS = [];
            var indexStart = 0;
            for (var _i = 0, _a = parser.parseClasses(); _i < _a.length; _i++) {
                var p = _a[_i];
                outputHTML.push(text.substring(indexStart, p.start));
                var result = _this.processor.compile(p.result, 'windi-', true);
                outputCSS.push(result.styleSheet);
                outputHTML.push(__spreadArray$3([result.className], result.ignored).join(' '));
                indexStart = p.end;
            }
            outputHTML.push(text.substring(indexStart));
            var utilities = outputCSS.reduce(function (previousValue, currentValue) { return previousValue.extend(currentValue); }, new StyleSheet()).combine();
            textEdit.replace(new vscode.Range(new vscode.Position(0, 0), textEditor.document.lineAt(textEditor.document.lineCount - 1).range.end), outputHTML.join(''));
            fs.writeFileSync(path.join(path.dirname(textEditor.document.uri.fsPath), 'windi.css'), [preflights.build(), utilities.build()].join('\n'));
        });
    };
    Commands.prototype.sort = function () {
        var _this = this;
        return vscode.commands.registerTextEditorCommand('windicss.sort', function (textEditor, textEdit) {
            var _a, _b;
            var text = textEditor.document.getText();
            var parser = new HTMLParser(text);
            var toSort = [];
            var classes = parser.parseClasses();
            var applies = parser.parseApplies();
            toSort = __spreadArray$3(__spreadArray$3([], classes), applies);
            var variants = Object.keys((_b = (_a = _this.processor) === null || _a === void 0 ? void 0 : _a.resolveVariants()) !== null && _b !== void 0 ? _b : {});
            var variantsMap = Object.assign.apply(Object, __spreadArray$3([{}], variants.map(function (value, index) {
                var _a;
                return (_a = {}, _a[value] = index + 1, _a);
            })));
            for (var _i = 0, toSort_1 = toSort; _i < toSort_1.length; _i++) {
                var p = toSort_1[_i];
                var sortedP = sortClassNames(p.result, variantsMap);
                var separators = getAllSeparators(p.result);
                var toReplace = combineSeparators(separators, sortedP);
                textEdit.replace(new vscode.Range(textEditor.document.positionAt(p.start), textEditor.document.positionAt(p.end)), toReplace);
            }
        });
    };
    Commands.prototype.sortOnSave = function () {
        return vscode.workspace.onWillSaveTextDocument(function () {
            vscode.commands.executeCommand('windicss.sort');
        });
    };
    Commands.prototype.toggleFolding = function () {
        return vscode.commands.registerCommand('windicss.toggle-folding', function () { return toggleConfig('windicss.enableCodeFolding'); });
    };
    Commands.prototype.toggleDecorators = function () {
        return vscode.commands.registerCommand('windicss.toggle-decorators', function () {
            toggleConfig('windicss.enableColorDecorators');
        });
    };
    Commands.prototype.togglePreview = function () {
        return vscode.commands.registerCommand('windicss.toggle-preview', function () {
            toggleConfig('windicss.enableHoverPreview');
        });
    };
    Commands.prototype.toggleCompletion = function () {
        return vscode.commands.registerCommand('windicss.toggle-completion', function () {
            toggleConfig('windicss.enableCodeCompletion');
        });
    };
    Commands.prototype.toggleDynamicCompletion = function () {
        return vscode.commands.registerCommand('windicss.toggle-dynamic-completion', function () {
            toggleConfig('enableDynamicCompletion');
        });
    };
    Commands.prototype.runAnalysis = function (ctx) {
        var _this = this;
        return vscode.commands.registerCommand('windicss.run-analysis', function () { return __awaiter(_this, void 0, void 0, function () {
            var panel_1, runAnalysis, result, isDark, theme, analyzerPath_1, htmlPath, html, headScript, error_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        panel_1 = vscode.window.createWebviewPanel('windicss', // Identifies the type of the webview. Used internally
                        'WindiCSS Analysis', // Title of the panel displayed to the user
                        vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
                        {
                            enableScripts: true,
                            retainContextWhenHidden: true,
                        });
                        runAnalysis = require('./dependencies.js').runAnalysis;
                        return [4 /*yield*/, runAnalysis({
                                root: (_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0].uri.fsPath,
                            }, { interpretUtilities: true })];
                    case 1:
                        result = (_b.sent()).result;
                        isDark = true;
                        theme = vscode.workspace.getConfiguration()
                            .get('workbench.colorTheme', '');
                        // must be dark
                        if (theme.match(/dark|black/i) != null) {
                            isDark = true;
                        }
                        // must be light
                        if (theme.match(/light/i) != null) {
                            isDark = false;
                        }
                        analyzerPath_1 = path.join(ctx.extensionPath, 'out/analyzer');
                        htmlPath = path.join(analyzerPath_1, 'index.html');
                        html = fs.readFileSync(htmlPath, 'utf-8').toString();
                        headScript = "\n        localStorage.setItem('vueuse-color-scheme', " + (isDark ? '"dark"' : '"light"') + ");\n        window.__windicss_analysis_static = true;\n        window.__windicss_analysis_report = " + JSON.stringify(result) + "\n        ";
                        html = html.replace('<head>', "<head><script>" + headScript + "</script>");
                        html = html.replace(/(src|href)="([^h]*?)"/g, function (_, tag, url) { return tag + "=\"" + panel_1.webview.asWebviewUri(vscode.Uri.file(path.join(analyzerPath_1, url.slice(1)))) + "\""; });
                        panel_1.webview.html = html;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        Log.warning(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    return Commands;
}());

var Hovers = /** @class */ (function () {
    function Hovers(extension, processor) {
        this.extension = extension;
        this.processor = processor;
    }
    Hovers.prototype.register = function (ext) {
        var _this = this;
        return vscode.languages.registerHoverProvider(ext, {
            provideHover: function (document, position) {
                var _a, _b;
                var _c, _d;
                var range = document.getWordRangeAtPosition(position, /[^\s();{}'"=`]+/);
                var word = document.getText(range);
                if (!range || !word)
                    return;
                // hover class or className, e.g. class= className=
                if (['class', 'className'].includes(word)) {
                    var text_1 = document.getText(new vscode.Range(range.end, document.lineAt(document.lineCount - 1).range.end));
                    var match = text_1.match(/((?<=^=\s*["'])[^"']*(?=["']))|((?<=^=\s*)[^"'>\s]+)/);
                    if (match) {
                        var css = buildStyle(_this.processor.interpret(match[0]).styleSheet);
                        if (css)
                            return new vscode.Hover(css, range);
                    }
                }
                // hover attr, e.g. bg= sm:bg=
                if (_this.extension.isAttr(word)) {
                    var text_2 = document.getText(new vscode.Range(range.end, document.lineAt(document.lineCount - 1).range.end));
                    var match = text_2.match(/((?<=^=\s*["'])[^"']*(?=["']))|((?<=^=\s*)[^"'>\s]+)/);
                    if (match) {
                        var css = buildStyle(_this.processor.attributify((_a = {}, _a[word] = match[0].trim().split(/\s/).filter(function (i) { return i; }), _a)).styleSheet);
                        if (css)
                            return new vscode.Hover(css, range);
                    }
                }
                // hover attr value or class value, e.g. class="bg-red-500 ..."  bg="red-500 ..."
                var text = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
                var key = (_d = (_c = text.match(/\S+(?=\s*(=|:)\s*["']?[^"']*$)/)) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : '';
                var style = _this.extension.isAttr(key) ? _this.processor.attributify((_b = {}, _b[key] = [word], _b)) : ['className', 'class'].includes(key) || text.match(applyRegex) ? _this.processor.interpret(word) : undefined;
                if (style && style.ignored.length === 0) {
                    var css = buildStyle(style.styleSheet);
                    if (css)
                        return new vscode.Hover(css, range);
                }
            },
        });
    };
    return Hovers;
}());

var CodeFolding = /** @class */ (function () {
    function CodeFolding() {
        this.decorations = {};
        this.prev_line = 0;
        this.prev_count = 0;
        this.placeholder = vscode.window.createTextEditorDecorationType({
            textDecoration: 'none; display: none;',
        });
    }
    CodeFolding.prototype.create = function (editor) {
        return __awaiter(this, void 0, void 0, function () {
            var document, _i, _a, index, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.editor = editor !== null && editor !== void 0 ? editor : vscode.window.activeTextEditor;
                        this.decorations = {};
                        if (!this.editor)
                            return [2 /*return*/];
                        document = this.editor.document;
                        _i = 0, _a = Array.from(Array(document.lineCount).keys());
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        index = _a[_i];
                        if (!getConfig('windicss.foldByLength')) return [3 /*break*/, 3];
                        _b = this.decorations;
                        _c = index;
                        return [4 /*yield*/, decorateWithLength(index, document.lineAt(index).text, getConfig('windicss.foldLength'), getConfig('windicss.hiddenTextColor'), getConfig('windicss.hiddenText'))];
                    case 2:
                        _b[_c] = _f.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        _d = this.decorations;
                        _e = index;
                        return [4 /*yield*/, decorateWithCount(index, document.lineAt(index).text, getConfig('windicss.foldCount'), getConfig('windicss.hiddenTextColor'), getConfig('windicss.hiddenText'))];
                    case 4:
                        _d[_e] = _f.sent();
                        _f.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.prev_count = this.editor.document.lineCount;
                        this.editor.setDecorations(this.placeholder, connectList$2(Object.values(this.decorations)));
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeFolding.prototype.update = function (editor) {
        return __awaiter(this, void 0, void 0, function () {
            var index, count, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!editor)
                            return [2 /*return*/];
                        this.editor = editor;
                        index = this.editor.document.lineAt(this.editor.selection.active).lineNumber;
                        count = this.editor.document.lineCount;
                        if (!(Math.abs(count - this.prev_count) <= 1)) return [3 /*break*/, 3];
                        this.editor.setDecorations(this.placeholder, connectList$2(Object.values(this.decorations).filter(function (_, id) { return id !== index; })));
                        if (!this.prev_line) return [3 /*break*/, 2];
                        _a = this.decorations;
                        _b = this.prev_line;
                        return [4 /*yield*/, decorateWithCount(this.prev_line, this.editor.document.lineAt(this.prev_line).text)];
                    case 1:
                        _a[_b] = _c.sent(); // update prev focus line
                        _c.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        this.create(editor);
                        _c.label = 4;
                    case 4:
                        this.prev_count = count;
                        this.prev_line = index;
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeFolding.prototype.remove = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.editor = vscode.window.activeTextEditor;
                if (!this.editor)
                    return [2 /*return*/];
                this.decorations = [];
                this.editor.setDecorations(this.placeholder, []);
                return [2 /*return*/];
            });
        });
    };
    return CodeFolding;
}());

var Diagnostics = /** @class */ (function () {
    function Diagnostics(processor) {
        this.processor = processor;
        this.collection = vscode.languages.createDiagnosticCollection('windi');
    }
    Diagnostics.prototype.register = function () {
        var _this = this;
        if (this.processor) {
            if (vscode.window.activeTextEditor)
                this.update(vscode.window.activeTextEditor.document);
            return [
                this.collection,
                vscode.window.onDidChangeActiveTextEditor(function (editor) {
                    if (editor)
                        _this.update(editor.document);
                }),
                vscode.workspace.onDidChangeTextDocument(function (editor) { return _this.update(editor.document); }),
                vscode.workspace.onDidCloseTextDocument(function (doc) { return _this.collection.delete(doc.uri); }),
            ];
        }
        return [];
    };
    Diagnostics.prototype.update = function (doc) {
        var diagnostics = [];
        for (var lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
            var lineOfText = doc.lineAt(lineIndex);
            var seperator = '@apply:';
            if (lineOfText.text.includes(seperator)) {
                var diag = _createDiagnostic(doc, lineOfText, lineIndex, seperator, vscode.DiagnosticSeverity.Error, 'When you use @apply, seperator is not supported.', 'windi_unsupported-seperator');
                if (diag !== undefined) {
                    diagnostics.push(diag);
                }
            }
            else {
                var match = lineOfText.text.match(/(?<=[^/*]\s@apply\s*)\S(.*)(?=\s*;)/);
                if (match && match.index && this.processor) {
                    var utilities = match[0].replace(/!important$/, '');
                    for (var _i = 0, _a = this.processor.validate(utilities).ignored; _i < _a.length; _i++) {
                        var utility = _a[_i];
                        var range = new vscode.Range(lineIndex, match.index + utility.start, lineIndex, match.index + utility.end);
                        var diagnostic = new vscode.Diagnostic(range, utility.className + " is not valid windi css class", vscode.DiagnosticSeverity.Error);
                        diagnostic.code = 'windi_invalid-class';
                        diagnostics.push(diagnostic);
                    }
                }
            }
        }
        this.collection.set(doc.uri, diagnostics);
    };
    return Diagnostics;
}());
function _createDiagnostic(doc, lineOfText, lineIndex, word, severity, description, code) {
    // find where in the line of thet the 'emoji' is mentioned
    var startIndex = lineOfText.text.indexOf(word);
    // create range that represents, where in the document the word is
    var range = new vscode.Range(lineIndex, startIndex, lineIndex, startIndex + word.length);
    var diagnostic = new vscode.Diagnostic(range, description, severity);
    diagnostic.code = code;
    return diagnostic;
}

var DECORATIONS = {};
var CUBE = vscode.window.createTextEditorDecorationType({
    before: {
        width: '0.8em',
        height: '0.8em',
        contentText: ' ',
        border: '0.1em solid',
        margin: '0.1em 0.2em 0',
    },
    dark: {
        before: {
            borderColor: '#eeeeee',
        },
    },
    light: {
        before: {
            borderColor: '#000000',
        },
    },
});
var Decorations = /** @class */ (function () {
    function Decorations(extension, processor) {
        this.extension = extension;
        this.processor = processor;
    }
    Decorations.prototype.provideColors = function (document, type) {
        if (type === void 0) { type = 'cube'; }
        var colors = [];
        var provider = type === 'cube' ? this.createColorCube : type === 'picker' ? this.createColorInfo : type === 'bg' ? this.createColorBg : this.createColorBorder;
        var documentText = document.getText();
        var parser = new HTMLParser(documentText);
        parser.removeComments();
        for (var _i = 0, _a = parser.parseAttrs(); _i < _a.length; _i++) {
            var attr = _a[_i];
            if (this.extension.isAttrUtility(attr.key)) {
                // insert decoration in bg|text|... = "..."
                var regex = /[^\s/]+/igm;
                var data = attr.value.raw;
                var match = void 0;
                while ((match = regex.exec(data))) {
                    if (match) {
                        var color = void 0;
                        if (match[0] in this.extension.colors) {
                            color = hex2RGB(this.extension.colors[match[0]]);
                        }
                        else if (match[0].startsWith('hex-')) {
                            color = hex2RGB(match[0].replace(/^hex-/, '#'));
                        }
                        if (color)
                            colors.push(provider(document, attr.value.start, match.index, match[0], color));
                    }
                }
            }
            else if (['class', 'className'].includes(attr.key) || this.extension.isAttrVariant(attr.key)) {
                // insert decoration in class|className|sm|hover|... = "..."
                var elements = new ClassParser(attr.value.raw, this.processor.config('separator', ':'), Object.keys(this.extension.variants)).parse(false);
                for (var _b = 0, elements_1 = elements; _b < elements_1.length; _b++) {
                    var element = elements_1[_b];
                    if (element.type === 'group' && Array.isArray(element.content)) {
                        for (var _c = 0, _d = element.content; _c < _d.length; _c++) {
                            var e = _d[_c];
                            var color_1 = this.extension.isValidColor(e.raw);
                            if (color_1.color)
                                colors.push(provider(document, attr.value.start, e.start, e.raw, color_1.color));
                        }
                    }
                    var color = element.type === 'utility' && this.extension.isValidColor(element.raw);
                    if (color && color.color)
                        colors.push(provider(document, attr.value.start, element.start, element.raw, color.color));
                }
            }
        }
        // insert decoration in @apply ...
        for (var _e = 0, _f = parser.parseApplies(); _e < _f.length; _e++) {
            var className = _f[_e];
            var elements = new ClassParser(className.result, this.processor.config('separator', ':'), Object.keys(this.extension.variants)).parse(false);
            for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                var element = elements_2[_g];
                if (element.type === 'group' && Array.isArray(element.content)) {
                    for (var _h = 0, _j = element.content; _h < _j.length; _h++) {
                        var e = _j[_h];
                        var color_2 = this.extension.isValidColor(e.raw);
                        if (color_2 && color_2.color)
                            colors.push(provider(document, className.start, e.start, e.raw, color_2.color));
                    }
                }
                var color = element.type === 'utility' && this.extension.isValidColor(element.raw);
                if (color && color.color)
                    colors.push(provider(document, className.start, element.start, element.raw, color.color));
            }
        }
        return colors;
    };
    Decorations.prototype.registerColorPicker = function (ext) {
        var _this = this;
        return vscode.languages.registerColorProvider(ext, {
            // insert color before class
            provideDocumentColors: function (document) { return _this.provideColors(document, 'picker'); },
            provideColorPresentations: function (color, context) {
                var editor = vscode.window.activeTextEditor;
                if (editor) {
                    var document = editor.document;
                    var range = context.document.getWordRangeAtPosition(context.range.end, /[@<:-\w]+/);
                    var utility = document.getText(range);
                    var vcolor = _this.extension.isValidColor(utility);
                    if (!arrayEqual(vcolor.color, [color.red * 255, color.green * 255, color.blue * 255]) && range) {
                        var vrange_1 = new vscode.Range(new vscode.Position(range.start.line, range.start.character + utility.indexOf(vcolor.key)), range.end);
                        editor.edit(function (editBuilder) {
                            editBuilder.replace(vrange_1, "hex-" + rgb2Hex(color.red, color.green, color.blue).slice(1));
                        });
                    }
                }
                return [];
            },
        });
    };
    Decorations.prototype.registerColorBlock = function (editor, type) {
        var _this = this;
        if (type === void 0) { type = 'cube'; }
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
        this.timeout = setTimeout(function () {
            if (type === 'cube') {
                var colors = _this.provideColors(editor.document, type);
                editor.setDecorations(CUBE, colors);
            }
            else {
                var colors_1 = {};
                _this.provideColors(editor.document, type).forEach(function (_a) {
                    var decoration = _a.decoration, option = _a.option, id = _a.id;
                    if (id in colors_1) {
                        colors_1[id].options.push(option);
                    }
                    else {
                        colors_1[id] = { decoration: decoration, options: [option] };
                    }
                });
                Object.values(colors_1).forEach(function (_a) {
                    var decoration = _a.decoration, options = _a.options;
                    return editor.setDecorations(decoration, options);
                });
            }
        }, 200);
        return Object.values(DECORATIONS);
    };
    Decorations.prototype.createColorInfo = function (document, start, offset, raw, color) {
        return new vscode.ColorInformation(new vscode.Range(document.positionAt(start + offset), document.positionAt(start + offset + 1)), new vscode.Color(color[0] / 255, color[1] / 255, color[2] / 255, 1));
    };
    Decorations.prototype.createColorCube = function (document, start, offset, raw, color) {
        return { range: new vscode.Range(document.positionAt(start + offset), document.positionAt(start + offset + raw.length)), renderOptions: { before: { backgroundColor: "rgba(" + color.join(', ') + ", 1)" } } };
    };
    Decorations.prototype.createColorBorder = function (document, start, offset, raw, color) {
        var borderColor = "rgba(" + color.join(', ') + ", 1)";
        var decoration;
        if (borderColor in DECORATIONS) {
            decoration = DECORATIONS[borderColor];
        }
        else {
            decoration = vscode.window.createTextEditorDecorationType({
                borderColor: borderColor,
                borderStyle: 'solid',
                borderWidth: '1px',
            });
            DECORATIONS[borderColor] = decoration;
        }
        return { decoration: decoration, option: { range: new vscode.Range(document.positionAt(start + offset), document.positionAt(start + offset + raw.length)) }, id: decoration.key };
    };
    Decorations.prototype.createColorBg = function (document, start, offset, raw, color) {
        var bgColor = "rgba(" + color.join(', ') + ", 1)";
        var decoration;
        if (bgColor in DECORATIONS) {
            decoration = DECORATIONS[bgColor];
        }
        else {
            decoration = vscode.window.createTextEditorDecorationType({
                backgroundColor: bgColor,
                color: isDarkColor(color[0], color[1], color[2]) ? '#eeeeee' : '#000000',
            });
            DECORATIONS[bgColor] = decoration;
        }
        return { decoration: decoration, option: { range: new vscode.Range(document.positionAt(start + offset), document.positionAt(start + offset + raw.length)) }, id: decoration.key };
    };
    return Decorations;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function toArray(v) {
    if (Array.isArray(v))
        return v;
    return [v];
}
function indent(code, tab) {
    if (tab === void 0) { tab = 2; }
    var spaces = Array(tab).fill(' ').join('');
    return code
        .split('\n')
        .map(function (line) { return spaces + line; })
        .join('\n');
}
function wrapit(code, start, end, tab, minify) {
    if (start === void 0) { start = '{'; }
    if (end === void 0) { end = '}'; }
    if (tab === void 0) { tab = 2; }
    if (minify === void 0) { minify = false; }
    if (minify)
        return "" + start + code + end;
    return start + "\n" + indent(code, tab) + "\n" + end;
}
function camelToDash(str) {
    // Use exact the same regex as Post CSS
    return str.replace(/([A-Z])/g, '-$1').replace(/^ms-/, '-ms-').toLowerCase();
}
function searchFrom(text, target, startIndex, endIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    // search from partial of string
    var subText = text.substring(startIndex, endIndex);
    var relativeIndex = subText.search(target);
    return relativeIndex === -1 ? -1 : startIndex + relativeIndex;
}
function connectList(a, b, append) {
    if (append === void 0) { append = true; }
    return append ? __spreadArray(__spreadArray([], (a !== null && a !== void 0 ? a : [])), (b !== null && b !== void 0 ? b : [])) : __spreadArray(__spreadArray([], (b !== null && b !== void 0 ? b : [])), (a !== null && a !== void 0 ? a : []));
}
function deepCopy(source) {
    return Array.isArray(source)
        ? source.map(function (item) { return deepCopy(item); })
        : source instanceof Date
            ? new Date(source.getTime())
            : source && typeof source === 'object'
                ? Object.getOwnPropertyNames(source).reduce(function (o, prop) {
                    var descriptor = Object.getOwnPropertyDescriptor(source, prop);
                    if (descriptor) {
                        Object.defineProperty(o, prop, descriptor);
                        if (source && typeof source === 'object') {
                            o[prop] = deepCopy(source[prop]);
                        }
                    }
                    return o;
                }, Object.create(Object.getPrototypeOf(source)))
                : source;
}
function isTagName(name) {
    return ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embd', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'].includes(name);
}
function searchPropEnd(text, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var index = startIndex;
    var output = -1;
    var openSingleQuote = false;
    var openDoubleQuote = false;
    var openBracket = false;
    var isEscaped = false;
    while (index < text.length) {
        switch (text.charAt(index)) {
            case '\\':
                isEscaped = !isEscaped;
                break;
            case '\'':
                if (!openDoubleQuote && !openBracket && !isEscaped)
                    openSingleQuote = !openSingleQuote;
                isEscaped = false;
                break;
            case '"':
                if (!openSingleQuote && !openBracket && !isEscaped)
                    openDoubleQuote = !openDoubleQuote;
                isEscaped = false;
                break;
            case '(':
                if (!openBracket && !openSingleQuote && !openDoubleQuote && !isEscaped)
                    openBracket = true;
                isEscaped = false;
                break;
            case ')':
                if (openBracket && !isEscaped)
                    openBracket = false;
                isEscaped = false;
                break;
            case ';':
                if (!isEscaped && !openSingleQuote && !openDoubleQuote && !openBracket)
                    output = index;
                isEscaped = false;
                break;
            default:
                isEscaped = false;
                break;
        }
        if (output !== -1)
            break;
        index++;
    }
    return output;
}

var Property = /** @class */ (function () {
    function Property(name, value, comment, important) {
        if (important === void 0) { important = false; }
        this.meta = { type: 'utilities', group: 'plugin', order: 0, offset: 0, corePlugin: false };
        this.name = name;
        this.value = value;
        this.comment = comment;
        this.important = important;
    }
    Property._singleParse = function (css) {
        css = css.trim();
        if (!css)
            return;
        if (css.charAt(0) === '@')
            return InlineAtRule.parse(css);
        var split = css.search(':');
        var end = searchPropEnd(css);
        if (split === -1)
            return;
        var important = false;
        var prop = css.substring(split + 1, end === -1 ? undefined : end).trim();
        if (/!important;?$/.test(prop)) {
            important = true;
            prop = prop.replace(/!important/, '').trimRight();
        }
        return new Property(css.substring(0, split).trim(), prop, undefined, important);
    };
    Property.parse = function (css) {
        if (!/;\s*$/.test(css))
            css += ';'; // Fix for the situation where the last semicolon is omitted
        var properties = [];
        var index = 0;
        var end = searchPropEnd(css, index);
        while (end !== -1) {
            var parsed = this._singleParse(css.substring(searchFrom(css, /\S/, index), end + 1));
            if (parsed)
                properties.push(parsed);
            index = end + 1;
            end = searchPropEnd(css, index);
        }
        var count = properties.length;
        if (count > 1)
            return properties;
        if (count === 1)
            return properties[0];
    };
    Property.prototype.clone = function () {
        return deepCopy(this);
    };
    Property.prototype.toStyle = function (selector) {
        var style = new Style(selector, this, this.important);
        style.meta = this.meta;
        return style;
    };
    Property.prototype.build = function (minify) {
        var _this = this;
        if (minify === void 0) { minify = false; }
        var createProperty = function (name, value) {
            if (minify) {
                return name + ":" + value + (_this.important ? '!important' : '') + ";";
            }
            else {
                var p = name + ": " + value + (_this.important ? ' !important' : '') + ";";
                return _this.comment ? p + (" /* " + _this.comment + " */") : p;
            }
        };
        if (!this.value)
            return '';
        return typeof this.name === 'string'
            ? createProperty(this.name, this.value)
            : this.name
                .map(function (i) { return createProperty(i, _this.value); })
                .join(minify ? '' : '\n');
    };
    Property.prototype.updateMeta = function (type, group, order, offset, corePlugin) {
        if (offset === void 0) { offset = 0; }
        if (corePlugin === void 0) { corePlugin = false; }
        this.meta = {
            type: type,
            group: group,
            order: order,
            offset: offset,
            corePlugin: corePlugin,
        };
        return this;
    };
    return Property;
}());
var InlineAtRule = /** @class */ (function (_super) {
    __extends(InlineAtRule, _super);
    function InlineAtRule(name, value, important) {
        if (important === void 0) { important = false; }
        var _this = _super.call(this, name, value, undefined, important) || this;
        _this.name = name;
        return _this;
    }
    InlineAtRule.parse = function (css) {
        var _a;
        var matchName = css.match(/@[^\s;{}]+/);
        if (matchName) {
            var name_1 = matchName[0].substring(1);
            var important = false;
            var expression = matchName.index !== undefined
                ? (_a = css
                    .substring(matchName.index + name_1.length + 1)
                    .match(/(?:(['"]).*?\1|[^;])*/)) === null || _a === void 0 ? void 0 : _a[0].trim()
                : undefined;
            if (expression && /!important;?$/.test(expression)) {
                important = true;
                expression = expression.replace(/!important/, '').trimRight();
            }
            return new InlineAtRule(name_1, expression === '' ? undefined : expression, important);
        }
    };
    InlineAtRule.prototype.build = function () {
        return this.value
            ? "@" + this.name + " " + this.value + (this.important ? ' !important' : '') + ";"
            : "@" + this.name + (this.important ? ' !important' : '') + ";";
    };
    return InlineAtRule;
}(Property));
var Style = /** @class */ (function () {
    function Style(selector, property, important) {
        if (important === void 0) { important = false; }
        this.meta = { type: 'components', group: 'plugin', order: 0, offset: 0, corePlugin: false };
        this.selector = selector;
        this.important = important;
        this.property = toArray(property || []);
    }
    Object.defineProperty(Style.prototype, "rule", {
        get: function () {
            var _this = this;
            var _a, _b, _c;
            var selectors = ((_a = this.selector) !== null && _a !== void 0 ? _a : '').trim().split(/\s*,\s*/g);
            this._parentSelectors && (selectors = selectors.map(function (i) { var _a; return ((_a = _this._parentSelectors) === null || _a === void 0 ? void 0 : _a.join(' ')) + " " + i; }));
            ((_b = this._wrapSelectors) !== null && _b !== void 0 ? _b : []).forEach(function (func) { return (selectors = selectors.map(function (i) { return func(i); })); });
            this._pseudoClasses && (selectors = selectors.map(function (i) { var _a; return i + (":" + ((_a = _this._pseudoClasses) === null || _a === void 0 ? void 0 : _a.join(':'))); }));
            this._pseudoElements && (selectors = selectors.map(function (i) { var _a; return i + ("::" + ((_a = _this._pseudoElements) === null || _a === void 0 ? void 0 : _a.join('::'))); }));
            this._brotherSelectors && (selectors = selectors.map(function (i) { var _a; return i + ("." + ((_a = _this._brotherSelectors) === null || _a === void 0 ? void 0 : _a.join('.'))); }));
            this._childSelectors && (selectors = selectors.map(function (i) { var _a; return i + (" " + ((_a = _this._childSelectors) === null || _a === void 0 ? void 0 : _a.join(' '))); }));
            ((_c = this._wrapRules) !== null && _c !== void 0 ? _c : []).forEach(function (func) { return (selectors = selectors.map(function (i) { return func(i); })); });
            return selectors.join(', ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "pseudoClasses", {
        get: function () {
            return this._pseudoClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "pseudoElements", {
        get: function () {
            return this._pseudoElements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "parentSelectors", {
        get: function () {
            return this._parentSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "childSelectors", {
        get: function () {
            return this._childSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "brotherSelectors", {
        get: function () {
            return this._brotherSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapProperties", {
        get: function () {
            return this._wrapProperties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapSelectors", {
        get: function () {
            return this._wrapSelectors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "wrapRules", {
        get: function () {
            return this._wrapRules;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "simple", {
        get: function () {
            // is this style only has property and no wrap?
            return !(this.atRules || this._pseudoClasses || this._pseudoElements || this._parentSelectors || this._childSelectors || this._brotherSelectors || this._wrapProperties || this._wrapSelectors || this._wrapRules);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Style.prototype, "isAtrule", {
        get: function () {
            return !(this.atRules === undefined || this.atRules.length === 0);
        },
        enumerable: false,
        configurable: true
    });
    Style.generate = function (parent, property, root) {
        if (!root)
            root = (parent === null || parent === void 0 ? void 0 : parent.startsWith('@'))
                ? new Style().atRule(parent)
                : new Style(parent);
        var output = [];
        var _loop_1 = function (key, value) {
            if (typeof value === 'string') {
                root.add(new Property(camelToDash(key), value));
            }
            else if (Array.isArray(value)) {
                value.map(function (i) { return root === null || root === void 0 ? void 0 : root.add(new Property(camelToDash(key), i)); });
            }
            else {
                var wrap = deepCopy(root);
                wrap.property = [];
                var child = void 0;
                if (key.startsWith('@')) {
                    child = wrap.atRule(key, false);
                }
                else {
                    if (wrap.selector === undefined) {
                        wrap.selector = key;
                        child = wrap;
                    }
                    else {
                        if (/^[a-z]+$/.test(key) && !isTagName(key)) {
                            wrap.wrapProperty(function (property) { return key + "-" + property; });
                            child = wrap;
                        }
                        else {
                            var _hKey_1 = function (selector, key) { return (/&/.test(key) ? key : "& " + key).replace('&', selector); };
                            wrap.wrapSelector(function (selector) {
                                return selector
                                    .trim()
                                    .split(/\s*,\s*/g)
                                    .map(function (s) {
                                    return key
                                        .split(/\s*,\s*/g)
                                        .map(function (i) { return _hKey_1(s, i); })
                                        .join(', ');
                                })
                                    .join(', ');
                            });
                            child = wrap;
                        }
                    }
                }
                output = output.concat(Style.generate(key.startsWith('@') ? undefined : key, value, child));
            }
        };
        for (var _i = 0, _a = Object.entries(property !== null && property !== void 0 ? property : {}); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            _loop_1(key, value);
        }
        if (root.property.length > 0)
            output.unshift(root);
        return output;
    };
    Style.prototype.atRule = function (atrule, append) {
        if (append === void 0) { append = true; }
        if (!atrule)
            return this;
        if (this.atRules) {
            append ? this.atRules.push(atrule) : this.atRules.unshift(atrule);
        }
        else {
            this.atRules = [atrule];
        }
        return this;
    };
    Style.prototype.pseudoClass = function (string) {
        if (this._pseudoClasses) {
            this._pseudoClasses.push(string);
        }
        else {
            this._pseudoClasses = [string];
        }
        return this;
    };
    Style.prototype.pseudoElement = function (string) {
        if (this._pseudoElements) {
            this._pseudoElements.push(string);
        }
        else {
            this._pseudoElements = [string];
        }
        return this;
    };
    Style.prototype.brother = function (string) {
        if (this._brotherSelectors) {
            this._brotherSelectors.push(string);
        }
        else {
            this._brotherSelectors = [string];
        }
        return this;
    };
    Style.prototype.parent = function (string) {
        if (this._parentSelectors) {
            this._parentSelectors.push(string);
        }
        else {
            this._parentSelectors = [string];
        }
        return this;
    };
    Style.prototype.child = function (string) {
        if (this._childSelectors) {
            this._childSelectors.push(string);
        }
        else {
            this._childSelectors = [string];
        }
        return this;
    };
    Style.prototype.wrapProperty = function (func) {
        if (this._wrapProperties) {
            this._wrapProperties.push(func);
        }
        else {
            this._wrapProperties = [func];
        }
        return this;
    };
    Style.prototype.wrapSelector = function (func) {
        if (this._wrapSelectors) {
            this._wrapSelectors.push(func);
        }
        else {
            this._wrapSelectors = [func];
        }
        return this;
    };
    Style.prototype.wrapRule = function (func) {
        if (this._wrapRules) {
            this._wrapRules.push(func);
        }
        else {
            this._wrapRules = [func];
        }
        return this;
    };
    Style.prototype.add = function (item) {
        item = toArray(item);
        if (this.important)
            item.forEach(function (i) { return (i.important = true); });
        this.property = __spreadArray(__spreadArray([], this.property), item);
        return this;
    };
    Style.prototype.extend = function (item, onlyProperty, append) {
        if (onlyProperty === void 0) { onlyProperty = false; }
        if (append === void 0) { append = true; }
        if (!item)
            return this;
        if (item.wrapProperties) {
            var props_1 = [];
            item.property.forEach(function (p) {
                var _a;
                var pc = new Property(p.name, p.value, p.comment);
                (_a = item.wrapProperties) === null || _a === void 0 ? void 0 : _a.forEach(function (wrap) {
                    pc.name = Array.isArray(pc.name)
                        ? pc.name.map(function (i) { return wrap(i); })
                        : wrap(pc.name);
                });
                if (item.important)
                    pc.important = true;
                props_1.push(pc);
            });
            this.property = connectList(this.property, props_1, append);
        }
        else {
            if (item.important)
                item.property.forEach(function (i) { return (i.important = true); });
            this.property = connectList(this.property, item.property, append);
        }
        if (onlyProperty)
            return this;
        item.selector && (this.selector = item.selector);
        this.meta = item.meta;
        item.atRules &&
            (this.atRules = connectList(item.atRules, this.atRules, append)); // atrule is build in reverse
        item._brotherSelectors &&
            (this._brotherSelectors = connectList(this._brotherSelectors, item._brotherSelectors, append));
        item._childSelectors &&
            (this._childSelectors = connectList(this._childSelectors, item._childSelectors, append));
        item._parentSelectors &&
            (this._parentSelectors = connectList(this._parentSelectors, item._parentSelectors, append));
        item._pseudoClasses &&
            (this._pseudoClasses = connectList(this._pseudoClasses, item._pseudoClasses, append));
        item._pseudoElements &&
            (this._pseudoElements = connectList(this._pseudoElements, item._pseudoElements, append));
        item._wrapRules &&
            (this._wrapRules = connectList(this._wrapRules, item._wrapRules, append));
        item._wrapSelectors &&
            (this._wrapSelectors = connectList(this._wrapSelectors, item._wrapSelectors, append));
        return this;
    };
    Style.prototype.clean = function () {
        // remove duplicated property
        var property = [];
        var cache = [];
        this.property.forEach(function (i) {
            var inline = i.build();
            if (!cache.includes(inline)) {
                cache.push(inline);
                property.push(i);
            }
        });
        this.property = property;
        return this;
    };
    Style.prototype.flat = function () {
        var properties = [];
        this.property.forEach(function (p) {
            if (Array.isArray(p.name)) {
                p.name.forEach(function (i) {
                    properties.push(new Property(i, p.value, p.comment));
                });
            }
            else {
                properties.push(p);
            }
        });
        this.property = properties;
        return this;
    };
    Style.prototype.clone = function (selector, property) {
        var newStyle = deepCopy(this);
        if (selector)
            newStyle.selector = selector;
        if (property)
            newStyle.property = Array.isArray(property) ? property : [property];
        return newStyle;
    };
    Style.prototype.sort = function () {
        // sort property
        this.property = this.property.sort(function (a, b) {
            return ("" + a.name).substring(0, 2) > ("" + b.name).substring(0, 2) ? 1 : -1;
        });
        return this;
    };
    Style.prototype.build = function (minify, prefixer) {
        var _this = this;
        if (minify === void 0) { minify = false; }
        if (prefixer === void 0) { prefixer = true; }
        var properties = this.property;
        if (!prefixer)
            properties = properties.filter(function (p) {
                if (p.value && /-(webkit|ms|moz|o)-/.test(p.value))
                    return false;
                if (Array.isArray(p.name)) {
                    p.name = p.name.filter(function (i) { return !/^-(webkit|ms|moz|o)-/.test(i); });
                    return true;
                }
                return !/^-(webkit|ms|moz|o)-/.test(p.name);
            });
        var result = properties.map(function (p) {
            if (_this._wrapProperties) {
                var name_2 = p.name;
                _this._wrapProperties.forEach(function (w) { return (name_2 = Array.isArray(name_2) ? name_2.map(function (n) { return w(n); }) : w(name_2)); });
                return new Property(name_2, p.value, p.comment, _this.important ? true : p.important).build(minify);
            }
            return _this.important ? new Property(p.name, p.value, p.comment, true).build(minify) : p.build(minify);
        }).join(minify ? '' : '\n');
        if (!this.selector && !this.atRules)
            return result.replace(/;}/g, '}');
        if (this.selector)
            result = (minify ? this.rule.replace(/,\s/g, ',') : this.rule + ' ') + wrapit(result, undefined, undefined, undefined, result !== '' ? minify : true);
        if (this.atRules) {
            for (var _i = 0, _a = this.atRules; _i < _a.length; _i++) {
                var rule = _a[_i];
                result = minify ? "" + rule.replace(/\s/g, '') + wrapit(result, undefined, undefined, undefined, minify) : rule + " " + wrapit(result, undefined, undefined, undefined, result !== '' ? minify : true);
            }
        }
        return minify ? result.replace(/;}/g, '}') : result;
    };
    Style.prototype.updateMeta = function (type, group, order, offset, corePlugin, respectSelector) {
        if (offset === void 0) { offset = 0; }
        if (corePlugin === void 0) { corePlugin = false; }
        if (respectSelector === void 0) { respectSelector = false; }
        this.meta = {
            type: type,
            group: group,
            order: order,
            offset: offset,
            corePlugin: corePlugin,
            respectSelector: respectSelector,
        };
        return this;
    };
    return Style;
}());
/** @class */ ((function (_super) {
    __extends(GlobalStyle, _super);
    function GlobalStyle(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    return GlobalStyle;
})(Style));
/** @class */ ((function (_super) {
    __extends(Keyframes, _super);
    function Keyframes(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    // root param only for consist with style
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Keyframes.generate = function (name, children, root, prefixer) {
        if (prefixer === void 0) { prefixer = true; }
        var styles = [];
        var webkitStyles = [];
        for (var _i = 0, _a = Object.entries(children); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var style = new Keyframes(key).atRule("@keyframes " + name);
            var webkitStyle = new Keyframes(key).atRule("@-webkit-keyframes " + name);
            for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                var _e = _d[_c], pkey = _e[0], pvalue = _e[1];
                var prop = pkey;
                if (pkey === 'transform') {
                    prop = prefixer ? ['-webkit-transform', 'transform'] : 'transform';
                }
                else if (['animationTimingFunction', 'animation-timing-function'].includes(pkey)) {
                    prop = prefixer ? [
                        '-webkit-animation-timing-function',
                        'animation-timing-function',
                    ] : 'animation-timing-function';
                }
                style.add(new Property(prop, pvalue));
                webkitStyle.add(new Property(prop, pvalue));
            }
            styles.push(style);
            if (prefixer)
                webkitStyles.push(webkitStyle);
        }
        return __spreadArray(__spreadArray([], styles), webkitStyles);
    };
    return Keyframes;
})(Style));
/** @class */ ((function (_super) {
    __extends(Container, _super);
    function Container(selector, property, important) {
        return _super.call(this, selector, property, important) || this;
    }
    return Container;
})(Style));

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

/* MIT license */

var colorString = createCommonjsModule(function (module) {
var reverseNames = {};

// create a list of reverse color names
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorName[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});

function hsl2rgb(h, s, l) {
    s = s / 100,
        l = l / 100;
    if (h >= 360)
        h %= 360;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs((h / 60) % 2 - 1));
    var m = l - c / 2;
    var r = 0;
    var g = 0;
    var b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return [r, g, b];
}
function hwb2rgb(h, w, b) {
    var rgb = hsl2rgb(h, 100, 50);
    for (var i = 0; i < 3; ++i) {
        var c = rgb[i] / 255;
        c *= 1 - w / 100 - b / 100;
        c += w / 100;
        rgb[i] = Math.round(c * 255);
    }
    return rgb;
}
function toRGBA(color) {
    var _a;
    if (/^hsla?/.test(color)) {
        var colorTuple = colorString.get.hsl(color);
        if (!colorTuple)
            return;
        return __spreadArray(__spreadArray([], hsl2rgb(colorTuple[0], colorTuple[1], colorTuple[2])), [colorTuple[3]]);
    }
    else if (/^rgba?/.test(color)) {
        var colorTuple = colorString.get.rgb(color);
        if (!colorTuple)
            return;
        return colorTuple;
    }
    else if (color.startsWith('hwb')) {
        var colorTuple = colorString.get.hwb(color);
        if (!colorTuple)
            return;
        return __spreadArray(__spreadArray([], hwb2rgb(colorTuple[0], colorTuple[1], colorTuple[2])), [colorTuple[3]]);
    }
    return (_a = colorString.get(color)) === null || _a === void 0 ? void 0 : _a.value;
}

var Extension = /** @class */ (function () {
    function Extension(ctx, pattern) {
        this.ctx = ctx;
        this.attrPrefix = undefined;
        this.pattern = pattern;
        this.colors = {};
        this.attrs = {};
        this.variants = {};
        this.disposables = [];
    }
    Extension.prototype.init = function () {
        var _this = this;
        try {
            vscode.workspace.findFiles(this.pattern, '**​/node_modules/**').then(function (files) {
                var _a = require('./dependencies.js'), jiti = _a.jiti, Processor = _a.Processor;
                _this.jiti = jiti(__filename);
                _this.configFile = files[0] ? files[0].fsPath : undefined;
                _this.processor = new Processor(_this.loadConfig(_this.configFile));
                _this.attrPrefix = _this.processor.config('attributify.prefix');
                _this.variants = _this.processor.resolveVariants();
                _this.colors = flatColors(_this.processor.theme('colors', {}));
                _this.register();
            });
        }
        catch (error) {
            Log.warning(error);
        }
    };
    Extension.prototype.register = function () {
        var _a, _b;
        var disposables = __spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3([], this.registerDecorations()), this.registerCompletions()), this.registerDiagnostics()), this.registerCommands()), this.registerHovers());
        (_a = this.ctx.subscriptions).push.apply(_a, disposables);
        (_b = this.disposables).push.apply(_b, disposables);
    };
    Extension.prototype.loadConfig = function (file) {
        if (!file || !this.jiti) {
            Log.info('Loading Default Config');
            return;
        }
        var path$1 = path.resolve(file);
        if (path$1 in this.jiti.cache)
            delete this.jiti.cache[path$1];
        var exports = this.jiti(path$1);
        var config = exports.__esModule ? exports.default : exports;
        Log.info("Loading Config File: " + file);
        return config;
    };
    Extension.prototype.update = function (uri) {
        var Processor = require('./dependencies.js').Processor;
        this.disposables.forEach(function (i) { return i.dispose(); });
        this.disposables.length = 0;
        this.processor = new Processor(this.loadConfig(uri ? uri.fsPath : this.configFile));
        this.variants = this.processor.resolveVariants();
        this.colors = flatColors(this.processor.theme('colors', {}));
        this.register();
    };
    Extension.prototype.get = function (key) {
        return getConfig("windicss." + key);
    };
    Extension.prototype.watch = function () {
        var _this = this;
        var watcher = vscode.workspace.createFileSystemWatcher("" + this.pattern);
        // Changes configuration should invalidate above cache
        watcher.onDidChange(function (e) {
            Log.info("Config File: " + e.fsPath + " Changed, Reloading...");
            _this.update(e);
        });
        // This handles the case where the project didn't have config file
        // but was created after VS Code was initialized
        watcher.onDidCreate(function (e) {
            Log.info("Found New Config File: " + e.fsPath + ", Reloading...");
            _this.configFile = e.fsPath;
            _this.update(e);
        });
        // If the config is deleted, utilities&variants should be regenerated
        watcher.onDidDelete(function (e) {
            Log.info("Config File " + e.fsPath + " Has Been Deleted, Reloading...");
            _this.configFile = undefined;
            _this.update();
        });
        // when change vscode configuration should regenerate disposables
        vscode.workspace.onDidChangeConfiguration(function () {
            Log.info('Global Configuration Changed, Reloading...');
            _this.update();
        }, null, this.ctx.subscriptions);
    };
    Extension.prototype.registerCommands = function () {
        var commands = new Commands(this.processor);
        var disposables = commands.register(this.ctx);
        if (this.get('sortOnSave'))
            disposables.push(commands.sortOnSave());
        return disposables;
    };
    Extension.prototype.registerDiagnostics = function () {
        var diagnostics = new Diagnostics(this.processor);
        var disposables = diagnostics.register();
        return disposables;
    };
    Extension.prototype.registerCompletions = function () {
        if (!this.processor)
            return [];
        var completions = new Completions(this, this.processor);
        var disposables = [];
        var config = {
            enableUtilty: this.get('enableUtilityCompletion'),
            enableVariant: this.get('enableVariantCompletion'),
            enableDynamic: this.get('enableDynamicCompletion'),
            enableBracket: this.get('enableBracketCompletion'),
            enableEmmet: this.get('enableEmmetCompletion'),
            enableAttrUtility: this.get('enableAttrUtilityCompletion'),
            enableAttrVariant: this.get('enableAttrVariantCompletion'),
        };
        for (var _i = 0, _a = Object.entries(fileTypes); _i < _a.length; _i++) {
            var _b = _a[_i], ext = _b[0], _c = _b[1], type = _c.type, pattern = _c.pattern;
            disposables.push(completions.registerUtilities(ext, type, pattern, config.enableUtilty, config.enableVariant, config.enableDynamic, config.enableBracket, config.enableEmmet));
            allowAttr(type) && disposables.push(completions.registerAttrKeys(ext, config.enableAttrUtility, config.enableAttrVariant));
            allowAttr(type) && disposables.push(completions.registerAttrValues(ext, config.enableAttrUtility, config.enableVariant, config.enableDynamic, config.enableBracket));
        }
        // trigger suggestion when using raw html class completion with tab
        disposables.push(vscode.window.onDidChangeTextEditorSelection(function (e) {
            if (e.kind === undefined) {
                if (['class=""', 'className=""'].includes(e.textEditor.document.getText(e.textEditor.document.getWordRangeAtPosition(e.textEditor.selection.active, /[\w"=]+/)))) {
                    vscode.commands.executeCommand('editor.action.triggerSuggest');
                }
            }
        }));
        return disposables;
    };
    Extension.prototype.registerCodeFolding = function () {
        var _this = this;
        if (!this.get('enableCodeFolding'))
            return;
        var codeFolding = new CodeFolding();
        vscode.window.visibleTextEditors.forEach(function (editor) { return codeFolding.create(editor); });
        vscode.window.onDidChangeTextEditorSelection(function () { return codeFolding.update(vscode.window.activeTextEditor); });
        vscode.workspace.onDidChangeTextDocument(function (e) {
            if (vscode.window.activeTextEditor && e.document === vscode.window.activeTextEditor.document)
                codeFolding.update(vscode.window.activeTextEditor);
        }, null, this.ctx.subscriptions);
        vscode.window.onDidChangeActiveTextEditor(function () {
            codeFolding.create();
        }, null, this.ctx.subscriptions);
        vscode.window.onDidChangeVisibleTextEditors(function () { return codeFolding.update(vscode.window.activeTextEditor); });
        vscode.workspace.onDidChangeConfiguration(function () {
            if (_this.get('enableCodeFolding')) {
                codeFolding.create();
            }
            else {
                codeFolding.remove();
            }
        }, null, this.ctx.subscriptions);
    };
    Extension.prototype.registerDecorations = function () {
        if (!this.processor || !this.get('enableColorDecorators'))
            return [];
        var disposables = [];
        var type = this.get('colorDecoratorsType');
        var decoration = new Decorations(this, this.processor);
        if (type === 'picker') {
            for (var _i = 0, _a = Object.entries(fileTypes); _i < _a.length; _i++) {
                var ext = _a[_i][0];
                disposables.push(decoration.registerColorPicker(ext));
            }
        }
        else {
            var activeEditor_1 = vscode.window.activeTextEditor;
            if (activeEditor_1) {
                decoration.registerColorBlock(activeEditor_1, type);
            }
            disposables.push(vscode.window.onDidChangeActiveTextEditor(function (editor) {
                activeEditor_1 = editor;
                if (editor) {
                    decoration.registerColorBlock(editor, type);
                }
            }, null, this.ctx.subscriptions));
            disposables.push(vscode.workspace.onDidChangeTextDocument(function (event) {
                if (activeEditor_1 && event.document === activeEditor_1.document) {
                    decoration.registerColorBlock(activeEditor_1, type);
                }
            }, null, this.ctx.subscriptions));
        }
        return disposables;
    };
    Extension.prototype.registerHovers = function () {
        if (!this.processor)
            return [];
        var disposables = [];
        var decoration = new Hovers(this, this.processor);
        for (var _i = 0, _a = Object.entries(fileTypes); _i < _a.length; _i++) {
            var ext = _a[_i][0];
            disposables.push(decoration.register(ext));
        }
        return disposables;
    };
    // utils
    Extension.prototype.isAttr = function (word) {
        var _a;
        var lastKey = ((_a = word.match(/[^:-]+$/)) === null || _a === void 0 ? void 0 : _a[0]) || word;
        return (getConfig('windicss.enableAttrVariantCompletion') && lastKey in this.variants) || (getConfig('windicss.enableAttrUtilityCompletion') && lastKey in this.attrs);
    };
    Extension.prototype.isAttrVariant = function (word) {
        var _a;
        if (this.attrPrefix) {
            if (!word.startsWith(this.attrPrefix))
                return false;
            word = word.slice(this.attrPrefix.length);
        }
        var lastKey = ((_a = word.match(/[^:-]+$/)) === null || _a === void 0 ? void 0 : _a[0]) || word;
        return getConfig('windicss.enableAttrVariantCompletion') && lastKey in this.variants;
    };
    Extension.prototype.isAttrUtility = function (word) {
        var _a;
        if (!word)
            return;
        if (this.attrPrefix) {
            if (!word.startsWith(this.attrPrefix))
                return;
            word = word.slice(this.attrPrefix.length);
        }
        var lastKey = ((_a = word.match(/[^:-]+$/)) === null || _a === void 0 ? void 0 : _a[0]) || word;
        return getConfig('windicss.enableAttrUtilityCompletion') && lastKey in this.attrs ? lastKey : undefined;
    };
    Extension.prototype.isValidColor = function (utility, type) {
        if (type === void 0) { type = 'hex'; }
        var sep = utility.search('/');
        if (sep !== -1)
            utility = utility.slice(0, sep);
        if (/hex-?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/.test(utility)) {
            var hex = utility.replace(/^\S*hex-/, '');
            return { color: (type === 'hex' ? hex2RGB : toRGBA)('#' + hex), key: 'hex-' + hex };
        }
        for (var _i = 0, _a = Object.entries(this.colors); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (utility.endsWith(key)) {
                return { color: (type === 'hex' ? hex2RGB : toRGBA)(Array.isArray(value) ? value[0] : value), key: key };
            }
        }
        return {};
    };
    return Extension;
}());

var CONFIG_FILE_GLOB = '{tailwind,windi}.config.{js,cjs,mjs,ts}';
function activate(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var extension;
        return __generator(this, function (_b) {
            extension = new Extension(ctx, new vscode.RelativePattern((_a = vscode.workspace.workspaceFolders) === null || _a === void 0 ? void 0 : _a[0].uri.fsPath, "**/" + CONFIG_FILE_GLOB));
            extension.init();
            extension.watch();
            extension.registerCodeFolding();
            Log.info('Windi CSS Intellisense Is Now Active!');
            return [2 /*return*/];
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() { }

exports.activate = activate;
exports.deactivate = deactivate;
