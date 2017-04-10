/*
 * Deep linking for Foundation 6 Tabs using Javascript
 *
 * We will check if we have a hash in the page url and if so, use it.
 *
 * By Christian Haensel
 * chris@chaensel.de
 * www.chaensel.de
 * @author     Christian Hänsel <chris@chaensel.de>
 * @copyright  Copyright (c) 2016 by Christian Hänsel
 * @license    https://opensource.org/licenses/MIT MIT License
 */
if(window.location.hash) {
    // We have an anchor link in our URL
    var f6dl_url = window.location.hash;
    var f6dl_hash = f6dl_url.substring(f6dl_url.indexOf("#")+1);
    if($('#'+f6dl_hash).length) {
        // Insert id of the <ul> that holds the links to the tabs
        var f6dl_ulid = 'account-tabs';
        $('#' + f6dl_ulid).find('a').each(function(e) {
            var f6dl_href = $(this).attr('href');
            if(f6dl_href == "#"+f6dl_hash) {
                // Click the link to activate the tab
                $(this).click();
            }
        });

    }
}
