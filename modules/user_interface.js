let performance_interface = performance.now()

// mitsuba import
const openTab=function(a){if(!a.hasClass("tab-opened")){var e=a.parent().children(".tab-opened");e.removeClass("tab-opened"),$("#"+e.data("tab-ref")).removeClass("opened"),a.addClass("tab-opened"),$("#"+a.data("tab-ref")).addClass("opened")}};

let settings_container = $("#tab-settings .modal-cont");
let settings_nav = settings_container.find(".modal-nav");

// add tab dummy content
settings_nav.after(`<div id="tab-settings-deluxe" class="tab-content"><h2>Karachan Deluxe 2023</h2></div>`);
let kdeluxe_settings_tab = $("#tab-settings-deluxe");
kdeluxe_settings_tab.css("display", "none");

// add tab button
settings_nav.prepend(
    $(`<li data-tab-ref='tab-settings-deluxe'>KDeluxe 2023</li>`)
    .click(function() {
        openTab($(this));
        return false;
    })
);

// populate settings tab
{
    let last_id = 0;
    const add_settings_checkbox = function(internal_name, label, tooltip) {
        kdeluxe_settings_tab.append(`<input type="checkbox" name="o_kdeluxe_${internal_name}" id="opt_kdeluxe_${last_id}" checked="checked">`);
        kdeluxe_settings_tab.append(`<label for="opt_kdeluxe_${last_id}" title="${tooltip}">${label}</label>`);
        // imageboardSettings.push( { o_kdeluxe_${option}: { desktop: 1, mobile: 1} } );
        last_id++;
    }

    /*
    const add_settings_textbox = function(internal_name, label, placeholder) {
        kdeluxe_settings_tab.append(`<input type="text" name="o_kdeluxe_${internal_name}" id="opt_kdeluxe_${last_id}">`);
        kdeluxe_settings_tab.append(`<label for="opt_kdeluxe_${last_id}" title="${placeholder}">${label}</label>`);

        last_id++;
    }

    const load_text_data = function(element, variable) {
        if (variable) {
            $("#" + element).text(variable);
        }
    }*/

    add_settings_checkbox("autoscroll", "Auto Scroll", "Dodaje opcje automatycznego przewijania freda, którą można w(y)łączyć na samym dole strony");
    add_settings_checkbox("spoiler_revealer", "Spoiler Revealer", "Odkrywa wszystkie spoilery więc nie trzeba na nie najeżdżać");
    add_settings_checkbox("advanced_filters", "Advanced Filters", "Filtry ala ublock ułatwiające korzystanie z czana, w tym heurystyczne");
    add_settings_checkbox("anti_bible", "Anti Bible", "Nie pozwala na załadowanie biblii (htmlshiv.js)");
    add_settings_checkbox("catalog_curb", "Catalog Curb", "Pozwala krawężnikować z poziomu katalogu");
    add_settings_checkbox("uid_curb", "UID Curb", "Pozwala krawężnikować poszczególnych anonów we fredach");
    add_settings_checkbox("better_embed", "Better Embeds", "Zamienia ciężkie embedy na miniaturki z tytułem, które przekierowują do filmu");
    add_settings_checkbox("radioradio_player", "Teoria Chaosu™ Integration", "Wyświetla player radioradio podczas audycji claude'a");
    add_settings_checkbox("lower_def_volume", "Lower Default Volume", "Obniża domyślną głośność w playerze video, przydatne w FF");
    add_settings_checkbox("ban_checker", "Ban Checker", "Wyświetla status bana");
    add_settings_checkbox("password_changer", "Password Changer", "Zmienia hasło na losowe przy każdym załadowaniu strony");
    add_settings_checkbox("fred_dumper", "Fred Dumper", "Pozwala zapisać obecnie otwarty fred jako jpg, dodatkowo pozwala pobrać też obrazki osobno w zipie");
    add_settings_checkbox("auto_follow", "Auto Follow", "Automatycznie obserwuje temat, w którym napiszemy posta (obecnie nie działa z fast reply)");
    add_settings_checkbox("rich_stats", "Rich Statistics", "Dodaje okienko z różnymi statystykami odnośnie twojej aktywności na forum");
    add_settings_checkbox("blind_mode_tts", "Blind Mode (TTS)", "Dodaje obok postów opcję text to speech czyli czytania na głos");
    // TO-DO: fix those below
    //add_settings_checkbox("new_keyframes", "New Keyframe Animations", "Dodaje różne nowe filtry, np. #robercik, #R");
    //add_settings_checkbox("prev_next", "Jump To Post", "Pozwala przechodzić do następnego/poprzedniego postu wybranego użytkownika");
    add_settings_checkbox("image_preview_anti_eyestrain", "Image Preview Anti-Eyestrain", "Dodaje przycisk do powiększonych obrazków, który pomaga oglądać je w nocy");
    add_settings_checkbox("dangerous_bambo", "Dangerous Bambo", "Dodaje biegającego murzynka (bambo) na dole ekranu");
    add_settings_checkbox("smart_boards", "Smart Boards", "Ukrywa /noc/ kiedy nie jest dostępna"); // , a w nocy dodaje lampy na całej stronie i lekko ją przyciemnia
    add_settings_checkbox("external_links", "External Links", "Wszystkie linki otwierają się teraz w nowym oknie");
    //add_settings_checkbox("threadwatcher_sort", "ThreadWatcher Sort", "Sortuje obserwowane fredy tak, że te z nowymi odpowiedziami są na początku");

    //add_settings_textbox("override_board_name", "Własny nagłówek na /b/", "Wpisz nową nazwe deski /b/")
    //load_text_data("override_board_name", localStorage.o_kdeluxe_override_board_name);
}

//// Add ThreadWatcher Position Reset Button
$("#settingsSave").after(`<input type="button" style="margin-left: 5px;" value="Fix ThreadWatcher OOB" id="resetThreadWatcher">`);
$("#resetThreadWatcher").click(function(e) {
    e.preventDefault();
    localStorage.KurahenPremium_WatchedThreads_Left = "10px";
    localStorage.KurahenPremium_WatchedThreads_Top = "10px";
    window.location.reload();
});

console.log(`[KDeluxe] [⏱️] Interface created in ${performance.now() - performance_interface}ms`);
