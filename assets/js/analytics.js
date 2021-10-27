let anamaxRetries = 5;
let anaIsTabActive = true;
let startTime = performance.now();
let maxTime = 10 * 60 * 1000;
let pingInterval
let currentTimeInMs = startTime
let maxScroll = 0;

function analyticsMain() {
    // pingInterval = setInterval(()=>{
    //     sendAnalyticsData()
    // }, 5000)
    // urlOpenedCount()
    // document.querySelectorAll("whatever").forEach(elem => elem.adEventListener("input", fn))
    // console.log(document.getElementsByTagName('a'))
    let elems = document.getElementsByTagName('a')
    for(let i = 0; i<elems.length; i++){
        elems[i].addEventListener('click', () => {
           elementClicked()
        });
     }
     urlOpenedCount()
}

document.addEventListener("visibilitychange", () => {
  anaIsTabActive = document.visibilityState === "visible";

});

window.addEventListener('load', function () {
    analyticsMain()
  })

function sendAnalyticsData() {
    currentTimeInMs+=startTime
    if(currentTimeInMs>maxTime){
        clearInterval(pingInterval)
    } else{
        // TODO: send all the data
        console.log("total time ="+ currentTimeInMs)
    }
}


function urlOpenedCount() {
    let url =  window.location.href
    console.log(url+" opened")
    // TODO: call the API to increase the url count
}

function elementClicked(){
    console.log("element clicked")
}

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>maxScroll){
        maxScroll = scroll
        console.log(maxScroll)
    }
    // console.log("scrolled to "+ scroll)
});
