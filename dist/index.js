"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AprilFoolsMsg = exports.IsToday = exports.AprilFoolsBool = void 0;
/**
 * `NOTE:` not exported, therefore hidden from users!
 *
 * Returns `true`/`false` depending on whether
 * today is April Fool's (April 1st)
 *
 * @returns boolean
 */
function CheckIfAprilFools() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    // years are 0-11
    return month === 3 && day === 1;
}
/**
 * Constant used to encapsulate `CheckIfAprilFools()`
 *
 * @type boolean
 */
exports.AprilFoolsBool = CheckIfAprilFools();
/**
 * Cleaner shorthand alternative to `AprilFoolsBool`
 *
 * @type boolean
 */
exports.IsToday = CheckIfAprilFools();
/**
 * Returns one of two possible strings
 * depending on the value of `AprilFoolsBool`
 *
 * @returns string
 */
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
