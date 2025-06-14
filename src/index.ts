
let boxes = document.querySelectorAll<HTMLDivElement>('.divs');
let btn = document.querySelector('button') as HTMLButtonElement;
let count:number = 0;

boxes.forEach((element,index)=>{
    element.addEventListener('click',()=>{
            element.innerHTML = '';
            count++
// X styling

        let i = document.createElement("i") as HTMLCanvasElement;
i.className = 'fa-solid fa-xmark';
i.style.fontSize = "70px";
i.style.color = "red"
// O styling

if(count>0 && count%2 !==0){
   i.className = 'fa-solid fa-xmark' 
}else if(count>0 && count % 2 === 0){
i.className ='fa-regular fa-circle'

}
// if(){
  
// i.classList.toggle('fa-regular fa-circle')

// }else if(i.className = 'fa-regular fa-circle'){
//         i.classList.remove('fa-regular fa-circle')
//   i.classList.toggle('fa-solid fa-xmark')

// }

// i.style.fontSize = "70px";
// i.style.color = "red"



//
        element.style.display ='flex';
        element.style.justifyContent = 'center';
        element.style.alignItems = "center"
        console.log('hi',index)
        // let x:(string|null) = '❌'
        // i.textContent = x
        element.appendChild(i)
        

    })
})
btn.addEventListener('click',function(){
    boxes.forEach(e=>{
        e.innerHTML = ''
    }

    )
})