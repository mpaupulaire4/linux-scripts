/*** MY OVERRIDES ***/
user_pref("_user.js.parrot", "overrides section syntax error");

/* override recipe: keep some cookies + other site data on close ***/
user_pref("network.cookie.lifetimePolicy", 2); // 2703
user_pref("privacy.clearOnShutdown.cookies", false); // 2802
// user_pref("privacy.clearOnShutdown.offlineApps", true); // 2802 optional
user_pref("privacy.cpd.cookies", true); // 2803 Ctrl-Shift-Del
// user_pref("privacy.cpd.offlineApps", true); // 2803 Ctrl-Shift-Del optional


/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);



/*** [SECTION 9000]: PERSONAL
   Non-project related but useful. If any interest you, add them to your overrides
***/
/* APPEARANCE ***/
   user_pref("ui.systemUsesDarkTheme", 1); // [FF67+] [HIDDEN PREF]
/* CONTENT BEHAVIOR ***/
   user_pref("accessibility.typeaheadfind", true); // enable "Find As You Type"
/* UX BEHAVIOR ***/
   user_pref("browser.quitShortcut.disabled", true); // disable Ctrl-Q quit shortcut [LINUX] [MAC] [FF87+]
   user_pref("browser.tabs.closeWindowWithLastTab", false);
   user_pref("browser.tabs.loadBookmarksInTabs", true); // open bookmarks in a new tab [FF57+]
/* UX FEATURES ***/
    user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
    user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
/* OTHER ***/
