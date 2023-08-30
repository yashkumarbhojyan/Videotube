const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const main =document.getElementById('main');

toggleBtn.addEventListener('click', () => {
  if (sidebar.style.left === '-250px') {
    sidebar.style.left = '0px';
      // main.style.left ='0px';
      

  } else {
    sidebar.style.left = '-250px';
    // main.style.left ='-211px';
   
    
    
  }
});



function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}




let API ="AIzaSyChIJFgED1diOgVOT5Bqe5woJdW8zdMmvs";
async function mostpopular(){
  let res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&chart=mostPopular&regionCode=IN&key=${API}`);


  let data =await res.json();
  console.log(data);
  // Data(data.items);
  append(data.items);
}

mostpopular();
// const box = document.querySelector(".box");
// let img =document.getElementById("image");
// let title =document.getElementById("title");
// let channel =document.getElementById("channel");
// const Data =(data)=>{

//  data.forEach(({snippet, id:{videoId} })=> {
 

//   box.innerHTML =`<div class="box">
//   <img id="image"src="${snippet.thumbnails.high.url}"/>
//   <h2 id="title">${snippet.title}</h2>
//   <p id="channel">${snippet.channelTitle}</p>
  

//  </div>`
//  });
// }

function append(data){
  let box = document.querySelector(".container");
  data.forEach(({snippet, id:{videoId} })=> {
    let img =snippet.thumbnails.high.url;
    let title =snippet.title;
    let channelTitle =snippet.channelTitle;

    let div =document.createElement("div");
    let image =document.createElement("img");
    image.src=img;
    let name =document.createElement("p");
    name.innerText =title;
    let Cname =document.createElement("p");
    Cname.innerText=channelTitle;
    div.append(image,name,Cname);
    box.append(div);

    let data ={snippet,videoId};

    div.addEventListener("click",function(){
      localStorage.setItem("video",JSON.stringify(data));
      window.location.href="sidebarVideo.html";
    });
});
}


//  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=[YOUR_API_KEY]





//  https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]


