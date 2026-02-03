 for (let i = 1; i <= 8; i++) {
            document.querySelector('.myswiper2').innerHTML+=`
            <div class="swiper-slide">
                <div class="  w-full"><img src="img/img_${i}.jpg"  class="h-[40vh]  w-full  object-top object-cover" /></div>
                <div>
                    <p>$1,291,000</p>
                    <a href="">5232 California Fake, Ave. 21BC</a>
                    <h3>California, USA</h3>
                    <button>See details</button>
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
