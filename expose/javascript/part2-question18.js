function clocktime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(clocktime,1000);