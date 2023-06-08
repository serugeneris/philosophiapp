"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
exports.router = (0, express_1.Router)();
exports.router.get('/', controller_1.getIndex);
exports.router.post('/question', controller_1.postQuestion);
