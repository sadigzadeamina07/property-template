for (let i = 1; i <= 8; i++) {
    document.querySelector('.myswiper2').innerHTML += `
            <div class="swiper-slide ">
                <div class="  w-full p-3 md:p-1 "><img src="img/img_${i}.jpg"  class="h-[40vh]  w-full  object-center  md:object-top object-cover" /></div>
                <div class="p-3 md:p-[20px]">
                    <p class="text-[#005555] font-bold mb-2 border-b-2 w-fit pb-[5px] text-[20px] border-b-[#005555]">$1,291,000</p>
                    <a href="" class="text-[#00000080] mb-2">5232 California Fake, Ave. 21BC</a>
                    <h3 class="font-bold text-[20px] mb-4">California, USA</h3>
                    <div class="flex gap-6  text-[#00000080] mb-[15px]">
                    <div class="flex items-center gap-2">
                    <i class="fa-solid fa-bed"></i>
                    <p>2 beds</p>
                    </div>
                    <div class="flex  gap-2 items-center">
                    <i class="fa-solid fa-bath"></i>
                    <p>2 beds</p>
                    </div>
                    </div>
                    <button class="text-white bg-[#005555]  px-[20px] py-[8px]  rounded-4xl ">See details</button>
                    </div> 
                </div>

            `

}
window.addEventListener("load", () => {
    const el = document.querySelector(".fadeout");
    setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-20");
        el.classList.add("opacity-100", "translate-y-0");
    }, 900);
})
window.addEventListener("scroll", ()=>{
    const fixedheader=document.getElementById('fixedheader')
    if(window.scrollY>120) {
          fixedheader.classList.remove("scale-100");
                fixedheader.classList.add("scale-110");
    }
        else {
            
 fixedheader.classList.remove("scale-110");
 fixedheader.classList.add("scale-100");   }
})
    let menubar=document.querySelector('.menubar')
    let menu=document.querySelector('#menuofbar')
function openthebar(){ 
         menu.classList.remove('hidden') 
      setTimeout(()=>{
             menu.classList.remove('translate-x-full') 
       menu.classList.add('translate-x-0') 
    },500)


    }
function closethebar(){ 
     menu.classList.add('translate-x-full') 
    setTimeout(()=>{
menu.classList.add('hidden')
    },1000)
 }
