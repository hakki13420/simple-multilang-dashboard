const menus=document.querySelectorAll('.menu-link')

menus.forEach((menu)=>{
    menu.addEventListener('click',()=>{
        //debugger;
                
    
            const sousMenu=document.querySelector('#'+menu.dataset.sous)
            //debugger
            if(sousMenu.classList.contains('none')){
                sousMenu.classList.remove('none')
            }else{
                sousMenu.classList.add('none');
            }           
    

    })
})

//languages switch

const ar=document.getElementById('ar')
const fr=document.getElementById('fr')
ar.addEventListener('click',function(){
    document.body.style.direction="rtl";
})
fr.addEventListener('click',function(){
    document.body.style.direction="ltr";
})