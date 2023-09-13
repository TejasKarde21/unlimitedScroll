const accessKey = "wTB0KNF7eqTsesS9MYHcbwlqSw8J-lVrVRmvdNEcvWk";

 const frame = document.getElementById("frame");


 const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=10`;

 const fetchImg = () =>{
   const img = fetch(url);
    img.then((data)=>{
        
        // console.log(data); 
        return data.json();
    }).then((data)=>{
        //   console.log(data);
        
        data.map((ele)=>{
            console.log(ele.urls.small);
            const img = document.createElement("img");
            img.src = ele.urls.small;
            frame.appendChild(img);
        })

    })
 }



window.addEventListener("scroll",()=>{
    console.log(window.innerHeight);

    if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight){
        fetchImg();
    }
});

fetchImg();
