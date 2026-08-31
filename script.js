let arr = [ 
{
        title:"Big Daddy",image:"https://i.pinimg.com/736x/fc/c7/be/fcc7be2bbe00286ebb338de21c92d3d8.jpg"
},
{
        title:"Chrollo Lucilfer",image:"https://i.pinimg.com/1200x/f1/48/ef/f148efe18107624ab40a0870b19019e5.jpg"
},
{
        title:"💜 Mystical Suguru Geto Wallpaper ⛩️",image:"https://i.pinimg.com/736x/c3/64/c1/c364c1301918790ee336e816f317ebf7.jpg"
},
{
        title:"landing Page",image:"https://i.pinimg.com/736x/42/49/0c/42490c88aec3cdb4f241aa8772717216.jpg"
},
{
        title:"SalesMan",image:"https://i.pinimg.com/1200x/37/81/be/3781be9ece4b87c14e28b325e5995af1.jpg"
},
{
        title:"Invincible",image:"https://i.pinimg.com/1200x/90/2a/8f/902a8fdb90cb19bfe61154939f156700.jpg"
},
{
        title:"Ghost",image:"https://i.pinimg.com/736x/77/29/eb/7729eb84d8702733554a4ad9c3df9c21.jpg"
},
{
        title:"Spidey",image:"https://i.pinimg.com/736x/b2/75/51/b2755102ac1167ac0f2da09b026372e6.jpg"
},
{
        title:"Spidey",image:"https://i.pinimg.com/1200x/09/f8/36/09f836d6812b22fe7a3f3a5d213ea456.jpg"
},
{
        title:"land",image:"https://in.pinterest.com/pin/19844054605647636/"
},
{
        title:"Sa",image:"https://i.pinimg.com/1200x/2b/41/52/2b4152c30f7eb33f4325a4b903002136.jpg"
},
{
        title:"Inve",image:"https://i.pinimg.com/736x/c3/26/fd/c326fdc039f6432bb1237e992f266738.jpg"
},
{
        title:"Ght",image:"https://i.pinimg.com/736x/62/fa/88/62fa88ef257c67b904778c023f627711.jpg"
},
{
        title:"Sp",image:"https://i.pinimg.com/736x/af/f9/e3/aff9e343f9998953ce140e8af2cf5385.jpg"
},{
        title:"Spidey",image:"https://i.pinimg.com/1200x/09/f8/36/09f836d6812b22fe7a3f3a5d213ea456.jpg"
}]
let container = document.querySelector('.container');
let cardShow = '';
arr.forEach(function(elem){
        cardShow += `<div class="card">
            <img src="${elem.image}" alt="">
            </div>`
        container.innerHTML = cardShow;
});

let search = document.querySelector('#search')
search.addEventListener('focus',function(){
    container.style.opacity = '0.2'
        
})
search.addEventListener('blur',function(){
    container.style.opacity = '1'
        
})
let suggestion = document.querySelector('.suggestion');
search.addEventListener('input',function(){
         let filteredArr = arr.filter(function(val){
                return val.title.toLowerCase().startsWith(search.value);
             
         })
            let searchSuggestion = '';
                filteredArr.forEach(function(elem){
                        searchSuggestion += `<div class="suggestion">
            <h3>${elem.title}</h3>
        </div>`
                })
                suggestion.style.display = 'block';
                suggestion.innerHTML = searchSuggestion;
})
let card = document.querySelectorAll('.card');
card.forEach(function(imgSect,index){        
        let preview = document.querySelector('.preview')
        let img = document.querySelector('#main-img')
        let title = document.querySelector('#title')
        let description = document.querySelector('#description')
        let secImg = document.querySelector('#second-image')
        imgSect.addEventListener('click',function(){
             let imgShow = arr[index].image;
             let titleShow = arr[index].title;
             img.src = imgShow;
             title.innerHTML = titleShow;
             preview.style.visibility = "visible";
             secImg.src = imgShow;
        })
})