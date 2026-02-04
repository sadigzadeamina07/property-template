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
    const el = document.querySelector(".fade-out");
    setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-20");
        el.classList.add("opacity-100", "translate-y-0");
    }, 900);
})
