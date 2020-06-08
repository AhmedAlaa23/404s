let isSystemDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;

let currentTheme = localStorage.getItem('theme');

if(isSystemDarkModeEnabled && currentTheme == null){
	switchTheme('dark');
}

function switchTheme(theme){
	if(theme == 'light'){
		document.body.className = 'light';
		document.querySelector('#light-theme-btn').style.display = 'none';
		document.querySelector('#dark-theme-btn').style.display = 'block';
		document.querySelector('#darkest-theme-btn').style.display = 'block';
		localStorage.setItem('theme', 'light');
	}
	else if(theme == 'dark'){
		document.body.className = 'dark';
		document.querySelector('#light-theme-btn').style.display = 'block';
		document.querySelector('#dark-theme-btn').style.display = 'none';
		document.querySelector('#darkest-theme-btn').style.display = 'block';
		localStorage.setItem('theme', 'dark');
	}
	else if(theme == 'darkest'){
		document.body.className = 'darkest';
		document.querySelector('#light-theme-btn').style.display = 'block';
		document.querySelector('#dark-theme-btn').style.display = 'block';
		document.querySelector('#darkest-theme-btn').style.display = 'none';
		localStorage.setItem('theme', 'darkest');
	}
}

switchTheme(currentTheme);