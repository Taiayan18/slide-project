let images=document.querySelector("#images")
let next=document.querySelector("#next")
let prv=document.querySelector("#prv")

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


next.addEventListener("click",()=>{
count ++ 

if(count === img.length)
count =0


show()
})


prv.addEventListener("click",()=>{


if(count === 0)
count =img.length

count --

show()
})





setInterval(()=>{
    count ++
    if(count === img.length)
        count = 0
    show()
},3000)


let connect=document.getElementById("connect")
let btn=document.getElementById("btn")


setTimeout(()=>{
    connect.style.display="flex"
},5000)

btn.addEventListener("click",()=>{
    connect.style.display="none"
})



