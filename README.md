# script-random-wallpaper
A script to update wallpaper randomly with deno (Gnome only).

You need use flag --allow-read to read the content of the directory. The flag --allow-run is to execute a subprocess (gsettings).

```sh
deno run --allow-read --allow-run https://https://github.com/huynhpaul/script-random-wallpaper/blob/master/main.ts /your/wallpaper/path
```