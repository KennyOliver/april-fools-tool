"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AprilFoolsMsg = exports.AprilFoolsBool = void 0;
function CheckIfAprilFools() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    // years are 0-11
    return month === 3 && day === 1;
}
exports.AprilFoolsBool = CheckIfAprilFools();
function AprilFoolsMsg() {
    var emoji = {
        zany: "\uD83E\uDD2A",
        facepalm: "\uD83E\uDD26" // 🤦
    };
    var result;
    if (exports.AprilFoolsBool) {
        result = "Fool or be fooled! ".concat(emoji.zany);
    }
    else {
        result = "You fool! It's not April Fool's! ".concat(emoji.facepalm);
    }
    return result;
}
exports.AprilFoolsMsg = AprilFoolsMsg;
