const path: string = Deno.args[0];
const images = [...Deno.readDirSync(path)];
const randomKey = Math.floor(Math.random()*images.length);

const wallpaper = images.find(
    (image, key) => {
        return key === randomKey
    }
)

if(wallpaper) {
    const changeWallpaper = Deno.run({
        cmd: ["gsettings", "set", "org.gnome.desktop.background", "picture-uri", "file://" + path + "/" + wallpaper.name]
    })
    changeWallpaper.status()
} else {
    console.error({wallpaper})
}