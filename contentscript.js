(()=>{
    let currentvideo ="";
    if(tab.url &&tab.url.includes("https://www.bu.edu/link/bin/uiscgi_studentlink.pl/") && tab.url.includes("ModuleName=reg/option/_start.pl&ViewSem=")){
        const queryParameter = tab.url.split("?");
        const time = queryParameter[1].url.split("&ViewSem=");
        const parameter = new URLSearchParams(queryParameter);
        const finalurl =  queryParameter[0]+ "?ModuleName=reg/graph/_start.pl&ViewSem=" + time[1];
        document.getElementById("mytext").innerHTML = finalurl;
        console.log(parameter);
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: finalurl
        });

    }if(tab.url &&tab.url.includes("https://www.bu.edu/link/bin/uiscgi_studentlink.pl/") && tab.url.includes("ModuleName=reg%2")){
        const queryParameter = tab.url.split("&ViewSem=");
        const firsthalf = tab.url.split("?");
        const finalurl = firsthalf + "ModuleName=reg/graph/_start.pl&ViewSem=" + queryParameter[1];
        const parameter = new URLSearchParams(queryParameter);
        document.getElementById("mytext").value = finalurl;
        console.log(parameter);
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: finalurl
        });
    }
})();