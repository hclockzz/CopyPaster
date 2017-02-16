chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var div1 = document.getElementById('pagetitle');
    var div2 = document.getElementById('pageurl');
    var title = tabs[0].title;
  	var url = tabs[0].url;
    div1.innerHTML = title;
    div2.innerHTML = url;
});