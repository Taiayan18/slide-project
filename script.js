let images=document.querySelector("#images")

let img=[
    "https://picsum.photos/id/12/1000/700",
    "https://picsum.photos/id/16/1000/700",
    "https://picsum.photos/id/29/1000/700",
    "https://picsum.photos/id/74/1000/700",
    "https://picsum.photos/id/110/1000/700",
    "https://picsum.photos/id/116/1000/700"
]

let count = 0

function show(){
    images.src=img[count]
}

show()

setInterval(()=>{
    count ++
    if(count === img.length)
        count = 0
    show()
},3000)