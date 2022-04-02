/**
 * `NOTE:` not exported, therefore hidden from users!
 * 
 * Returns `true`/`false` depending on whether
 * today is April Fool's (April 1st)
 * 
 * @returns boolean
 */
function CheckIfAprilFools(): boolean {
    const today: Date   = new Date();
    const day:   number = today.getDate();
    const month: number = today.getMonth();

    // years are 0-11
    return month === 3 && day === 1;
}


/**
 * Constant used to encapsulate `CheckIfAprilFools()`
 * 
 * @type boolean
 */
export const AprilFoolsBool: boolean = CheckIfAprilFools();

/**
 * Cleaner shorthand alternative to `AprilFoolsBool`
 * 
 * @type boolean
 */
export const IsToday: boolean = CheckIfAprilFools();


/**
 * Returns one of two possible strings
 * depending on the value of `AprilFoolsBool`
 * 
 * @returns string
 */
export function AprilFoolsMsg(): string {
    interface EmojiObj {
        zany:     string;
        facepalm: string;
    }
    const emoji: EmojiObj = {
        zany:     "\uD83E\uDD2A",  // 🤪
        facepalm: "\uD83E\uDD26"   // 🤦
    }

    let result: string;

    if (AprilFoolsBool as boolean) {
        result = `Fool or be fooled! ${emoji.zany}`;
    } else {
        result = `You fool! It's not April Fool's! ${emoji.facepalm}`;
    }

    return result;
}
