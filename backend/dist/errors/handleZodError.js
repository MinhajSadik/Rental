"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (errors) => {
    const simplifiedErrors = errors.issues.map((error) => {
        return { path: error.path[1], message: error.message };
    });
    return simplifiedErrors;
};
exports.default = handleZodError;
