         var bg = document.getElementById("bg");
         var moon = document.getElementById("moon");
         var mountain = document.getElementById("mountain");
         var road = document.getElementById("road");
         var mainpgt = document.getElementById("mainpgt");
         window.addEventListener('scroll', function(){
            var value= window.scrollY;
            bg.style.top = value * 0.5 + 'px';
            moon.style.left = value * 0.5 + 'px';
            mountain.style.top = value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            mainpgt.style.top = value * 0.8 + 'px';})