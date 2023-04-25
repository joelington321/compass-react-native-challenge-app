"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_status_bar_1 = require("expo-status-bar");
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const Font = __importStar(require("expo-font"));
function App() {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.textTest }, "WELCOME"),
        react_1.default.createElement(react_native_1.Text, { style: styles.textInput }, "First Setup of the APP."),
        react_1.default.createElement(expo_status_bar_1.StatusBar, { style: "auto" })));
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTest: {
        color: '#D78f3C',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Khula'
    },
    textInput: {
        color: '#656262'
    }
});
function loadFonts() {
    return __awaiter(this, void 0, void 0, function* () {
        yield Font.loadAsync({
            'Khula': require('../../assets/fonts/Khula-Regular.ttf'),
        });
    });
}
//# sourceMappingURL=App.js.map