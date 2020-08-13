
let urlString = window.location.href;
urlString = urlString.substring(29);

function redirectStudy() { 
    
     setTimeout(() => {
     window.location.href = "/study" + urlString
 }, 3000)

}

window.addEventListener("load", redirectStudy)