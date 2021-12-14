enum MemberShip{
    Simple,
    Standart,
    Premium
}

const mem1: MemberShip = MemberShip.Simple;
console.log(mem1);

const memReverse1 = MemberShip[2];
console.log(memReverse1);

enum SocialMedia{
    FB = "FaceBook",
    Gl = "Google"
}

const social1 = SocialMedia.FB;
console.log(social1);