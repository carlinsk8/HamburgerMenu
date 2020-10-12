
const d = document,
ls = localStorage;
export default function DarkTheme(btn, dark){
    const $darkBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
    
    let sun = "☀️",
    moon = "🌙";
  

    const darkmode = () =>{
        $selectors.forEach((el) => el.classList.add(dark));
        $darkBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }
    
    const lightmode = () =>{
        $selectors.forEach((el)=> el.classList.remove(dark));
        $darkBtn.textContent = moon;
        ls.setItem("theme", "light");
    }
    

    d.addEventListener("click", (e) =>{
      if(e.target.matches(btn)){
        if($darkBtn.textContent === moon){
            darkmode();

        }else{
             lightmode();
            
        }
      }
    });




d.addEventListener("DOMContentLoaded", (e)=>{
    if(ls.getItem("theme") === null){
        ls.setItem("theme", "light");

    }
    if(ls.getItem("theme") === "light"){
            lightmode();
        }
        
        if(ls.getItem("theme") === "dark"){
            darkmode();
        }

    });
}

