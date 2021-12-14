var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standart"] = 1] = "Standart";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var mem1 = MemberShip.Simple;
console.log(mem1);
var memReverse1 = MemberShip[2];
console.log(memReverse1);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["FB"] = "FaceBook";
    SocialMedia["Gl"] = "Google";
})(SocialMedia || (SocialMedia = {}));
var social1 = SocialMedia.FB;
console.log(social1);
