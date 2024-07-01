const out = document.getElementById("test");

function walkdog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("you walk the dog");
        } , 1500);
    });
}

function clean(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("clean");
        }, 2000)
    
    });
}

function fight(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("fight");
        } , 4000)
    });
}

walkdog().then(value => {out.textContent = value; return clean()}).
          then(value => out.textContent = value);