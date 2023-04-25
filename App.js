"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_status_bar_1 = require("expo-status-bar");
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const PrimaryButton_js_1 = __importDefault(require("./src/components/Buttons/PrimaryButton.js"));
function App() {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.textTest }, "WELCOME"),
        react_1.default.createElement(PrimaryButton_js_1.default, { title: 'LOGIN', onPress: function () {
                throw new Error('Function not implemented.');
            } }),
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
    },
    textInput: {
        color: '#656262'
    }
});
//# sourceMappingURL=App.js.map