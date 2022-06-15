const os = require("os");
const { execSync } = require("child_process");
const pjson = require("../package.json");

if(os.userInfo().username == "vukky" && process.platform == "linux" && os.release().includes("arch")) {
    execSync(`cd ~/Documents/Git/saladbind-aur && git pull && sed -i -E 's/pkgver=.+\..+\..+/pkgver=${pjson.version}/' PKGBUILD && updpkgsums && rm v${pjson.version}.tar.gz && makepkg --printsrcinfo > .SRCINFO && git add PKGBUILD .SRCINFO && git commit -m "Update to ${pjson.version}" && git push`);
} else {
    console.log("You're not Vukky, skipping AUR.")
}