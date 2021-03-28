import menuTemplate from './templates/menu-template.hbs';
import menu from './menu.json';

const menuList = document.querySelector('.menu');

const menuMarkUp = menuTemplate([...menu]);
menuList.insertAdjacentHTML('beforeend', menuMarkUp);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const switcher = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.add(Theme[savedTheme]);
    if (body.classList.contains('dark-theme')) {
        switcher.checked = true;
    }
} else {
    body.classList.add(Theme.LIGHT);
    rememberTheme("LIGHT");
    //console.log(localStorage);
}


switcher.addEventListener('change', onCheckSwitcher);

function onCheckSwitcher() {
    if (body.classList.contains(Theme.LIGHT)) {
        themeSwitcher("LIGHT", "DARK", true);
        return;
    }
    themeSwitcher("DARK", "LIGHT", false);

}

function themeSwitcher(prvTheme, crntTheme, isChecked) {
    body.classList.replace(Theme[prvTheme], Theme[crntTheme]);
    switcher.checked = isChecked;
    //console.log(crntTheme);
    rememberTheme(crntTheme);
}

function rememberTheme(crntTheme) {
    localStorage.setItem('theme', crntTheme);
}

//console.log(menu);

//console.log(menuMarkUp);

//function toCreateMenu(data) {
//    return data.map(item => menuTemplate(item)).join('');
//}