"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("dotenv/config");
var _fastify = /*#__PURE__*/ _interop_require_default(require("fastify"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
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
        while(_)try {
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
var server = (0, _fastify.default)();
server.get("/ping", function() {
    var _ref = _async_to_generator(function(request, reply) {
        return _ts_generator(this, function(_state) {
            return [
                2,
                "pong\n"
            ];
        });
    });
    return function(request, reply) {
        return _ref.apply(this, arguments);
    };
}());
server.listen({
    port: Number(process.env.PORT),
    host: "0.0.0.0"
}, function(err, address) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Server listening at ".concat(address));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcclxuaW1wb3J0IGZhc3RpZnkgZnJvbSAnZmFzdGlmeSdcclxuXHJcbmNvbnN0IHNlcnZlciA9IGZhc3RpZnkoKTtcclxuXHJcbnNlcnZlci5nZXQoJy9waW5nJywgYXN5bmMgKHJlcXVlc3QsIHJlcGx5KSA9PiB7XHJcbiAgcmV0dXJuICdwb25nXFxuJ1xyXG59KVxyXG5cclxuc2VydmVyLmxpc3Rlbih7IHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5QT1JUKSwgaG9zdDogJzAuMC4wLjAnIH0sIChlcnIsIGFkZHJlc3MpID0+IHtcclxuICBpZiAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIHByb2Nlc3MuZXhpdCgxKVxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBhdCAke2FkZHJlc3N9YClcclxufSkiXSwibmFtZXMiOlsic2VydmVyIiwiZmFzdGlmeSIsImdldCIsInJlcXVlc3QiLCJyZXBseSIsImxpc3RlbiIsInBvcnQiLCJOdW1iZXIiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImhvc3QiLCJlcnIiLCJhZGRyZXNzIiwiY29uc29sZSIsImVycm9yIiwiZXhpdCIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OztRQUFPOzhEQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQU1BLFNBQVNDLElBQUFBLGdCQUFPO0FBRXRCRCxPQUFPRSxHQUFHLENBQUM7ZUFBUyxvQkFBQSxTQUFPQyxTQUFTQzs7WUFDbEM7O2dCQUFPOzs7SUFDVDtvQkFGMkJELFNBQVNDOzs7O0FBSXBDSixPQUFPSyxNQUFNLENBQUM7SUFBRUMsTUFBTUMsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxJQUFJO0lBQUdDLE1BQU07QUFBVSxHQUFHLFNBQUNDLEtBQUtDO0lBQ3ZFLElBQUlELEtBQUs7UUFDUEUsUUFBUUMsS0FBSyxDQUFDSDtRQUNkSixRQUFRUSxJQUFJLENBQUM7SUFDZjtJQUNBRixRQUFRRyxHQUFHLENBQUMsQUFBQyx1QkFBOEIsT0FBUko7QUFDckMifQ==