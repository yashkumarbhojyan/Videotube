let data =JSON.parse(localStorage.getItem("video"));
let playVideo = (data)=>{
 let videobox =document.querySelector(".play");
 let iframe =document.createElement("iframe"); 
  iframe.src=`https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1`;

  iframe.width="100%";
  iframe.height="100%";
  iframe.setAttribute=("allowfullsceeen",true);
  iframe.frameBorder="0";
  videobox.append(iframe);
}
console.log(data);
playVideo(data);




