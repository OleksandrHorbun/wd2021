let Goods = [
    {id:0,title:"blue book",img:"./pictures/blue.jpg",price:100},
    {id:1,title:"red book",img:"./pictures/red.jpg",price:60},
    {id:2,title:"yellow book",img:"./pictures/yellow.jpg",price:50},
    {id:3,title:"green book",img:"./pictures/green.png",price:20},
    {id:4,title:"black book",img:"./pictures/black.jpg",price:10},
    {id:5,title:"purple book",img:"./pictures/purple.jpg",price:200},
]

sessionStorage.setItem('Goods', JSON.stringify(Goods));