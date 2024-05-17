import { settings } from './settings';

export const DEFAULT_COLOR = '#249cea';
const DEFAULT_BG = require('./assets/images/background.png');

export let color = localStorage.getItem('color') || DEFAULT_COLOR;
getBackground();
export let background = localStorage.getItem('background');
if (window.greeter_comm) {
    greeter_comm.broadcast({
        type: "change-background",
        path: background,
    })
}

export function hook(element, rules) {
    const style = element.style;

    for (const rule of rules) {
        style[rule] = color;
    }
}
document.documentElement.style.setProperty('--primary-color', color)

export function updateColor(hex) {
    color = hex;
    localStorage.setItem('color', color);
    document.documentElement.style.setProperty('--primary-color', color)
}

export function updateBG(bg) {
    background = bg;
    localStorage.setItem('background', bg);
    if (window.greeter_comm) {
        greeter_comm.broadcast({
            type: "change-background",
            path: bg,
        })
    }
}

export function backgrounds() {
    const folder = greeter_config.branding.background_images_dir ||
                    greeter_config.branding.background_images;
    if (!folder) {
        return [DEFAULT_BG];
    }

    const recDirList = (dir) => {
        let result = [];
        let dirlist = [];
        let dirl = theme_utils.dirlist(dir, false, (files) => {
            dirlist = files;
        })
        if (Array.isArray(dirl)) {
            dirlist = dirl;
        }

        for (const file of dirlist) {
            if (!file.includes('.')) { // I didn't find any good ways to do it
                result = [...result, ...recDirList(file)];
            } else if (!file.endsWith('.xml') && !file.endsWith('.stw')) { // Gnome and Arch backgrounds have strange files
                result.push(file);
            }
        }
        return result;
    };

    let result = recDirList(folder);

    if (result.length === 0) {
        localStorage.setItem('background', DEFAULT_BG);
    } else {
        localStorage.setItem('background', result[Math.floor(Math.random()*result.length)]);
    }
}

function getBackground() {
    if(settings.randomizeBG) {
        backgrounds();
    }

    return localStorage.getItem('background') || DEFAULT_BG;
}
