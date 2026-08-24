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
},]
let container = document.querySelector('.container');
let cardShow = '';
arr.forEach(function(elem){
        cardShow += `<div class="card">
            <img src="${elem.image}" alt="">
        </div>`
        container.innerHTML = cardShow;
});
