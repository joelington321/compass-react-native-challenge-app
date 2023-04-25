"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_elements_1 = require("react-native-elements");
const react_native_1 = require("react-native");
const PrimaryButton = ({ title, onPress }) => {
    return (react_1.default.createElement(react_native_elements_1.Button, { title: title, onPress: onPress, buttonStyle: styles.buttonStyle, containerStyle: { marginVertical: 10 } }));
};
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#D78F3C',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
exports.default = PrimaryButton;
//# sourceMappingURL=PrimaryButton.js.map