function CheckIfAprilFools(): boolean {
    const today: Date   = new Date();
    const day:   number = today.getDate();
    const month: number = today.getMonth();

    // years are 0-11
    return month === 3 && day === 1;
}

export const AprilFoolsBool: boolean = CheckIfAprilFools();


export function AprilFoolsMsg(): string {
    interface EmojiObj {
        zany: string;
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

