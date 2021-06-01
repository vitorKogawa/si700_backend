"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var User_1 = require("../entity/User");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.store = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, _a, firstName, lastName, email, password, isEnabled, userExists, newUser, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        userRepository = typeorm_1.getRepository(User_1.User);
                        _a = request.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, isEnabled = _a.isEnabled;
                        return [4 /*yield*/, userRepository.findOne({ where: { email: email } })];
                    case 1:
                        userExists = _b.sent();
                        if (!userExists) return [3 /*break*/, 2];
                        return [2 /*return*/, response.sendStatus(400)];
                    case 2:
                        newUser = {
                            id: uuid_1.v4(),
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password,
                            isEnabled: isEnabled ? isEnabled : false,
                        };
                        return [4 /*yield*/, userRepository.save(userRepository.create(newUser))];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, response.sendStatus(200)];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [2 /*return*/, response.sendStatus(500)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.findAll = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userRepository = typeorm_1.getRepository(User_1.User);
                        return [4 /*yield*/, userRepository
                                .createQueryBuilder("user")
                                .select(["user.id", "user.firstName", "user.lastName", "user.email", "user.isEnabled"])
                                .orderBy("user.id", "DESC")
                                .getMany()];
                    case 1:
                        users = _a.sent();
                        if (users.length !== 0) {
                            return [2 /*return*/, response.status(200).json(users)];
                        }
                        else {
                            return [2 /*return*/, response
                                    .status(200)
                                    .json({ message: "Nenhum usuário cadastrado na base de dados." })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, response.sendStatus(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.findByID = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.params.id)
                            return [2 /*return*/, response.status(400).json({ message: "Nenhum id informado." })];
                        userRepository = typeorm_1.getRepository(User_1.User);
                        return [4 /*yield*/, userRepository
                                .createQueryBuilder("user")
                                .select(["user.id", "user.firstName", "user.lastName", "user.email", "user.isEnabled"])
                                .where("user.id = :id", { id: request.params.id })
                                .getOne()];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, response.status(200).json(user)];
                        }
                        else {
                            return [2 /*return*/, response.status(400).json({
                                    message: "Usu\u00E1rio de id " + request.params.id + " n\u00E3o foi encontrado.",
                                })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [2 /*return*/, response.sendStatus(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.enableUserByID = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.params.id)
                            return [2 /*return*/, response
                                    .status(400)
                                    .json({ message: "Nenhum id foi informado." })];
                        userRepository = typeorm_1.getRepository(User_1.User);
                        return [4 /*yield*/, userRepository
                                .createQueryBuilder()
                                .update("User")
                                .set({ isEnabled: true })
                                .where("id = :id", { id: request.params.id })
                                .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.sendStatus(200)];
                    case 2:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [2 /*return*/, response.sendStatus(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.disableUserByID = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.params.id)
                            return [2 /*return*/, response
                                    .status(400)
                                    .json({ message: "Nenhum id foi informado." })];
                        userRepository = typeorm_1.getRepository(User_1.User);
                        return [4 /*yield*/, userRepository
                                .createQueryBuilder()
                                .update("User")
                                .set({ isEnabled: false })
                                .where("id = :id", { id: request.params.id })
                                .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.sendStatus(200)];
                    case 2:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [2 /*return*/, response.sendStatus(500)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map