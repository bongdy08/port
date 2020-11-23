var dataObj = [
    {
        html: `<div></div>`,
        css: 
        `.sec4 .panel .cont1 div{
    width: 22vw;
    height: 22vw;
    border-radius: 50%;
    box-shadow:
        0 0 1vw #fff,
        -1vw 0 5vw #f0f,
        1vw 0 5vw #0ff,
        inset 0 0 3vw #fff,
        inset 3vw 0 2vw #f0f,
        inset -3vw 0 2vw #0ff,
        inset 3vw 0 10vw #f0f,
        inset -3vw 0 10vw #0ff;
    animation: pulsate 6s linear infinite;
    }
    @keyframes pulsate {
    50% {
        box-shadow:
        0 0 1vw #fff,
        1vw 0 5vw #f0f,
        -1vw 0 5vw #0ff,
        inset 0 0 3vw #fff,
        inset -3vw 0 2vw #f0f,
        inset 3vw 0 2vw #0ff,
        inset -3vw 0 10vw #f0f,
        inset 3vw 0 10vw #0ff;
    }
}`
    },
    {
        html: 
        `<div class="watch-face">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>`,
        css: 
        `.sec4 .panel .cont2 .watch-face {
    height: 8vw;
    width: 8vw;
    animation: pulse 4s cubic-bezier(0.5, 0, 0.5, 1) alternate infinite;
}
.sec4 .panel .cont2 .circle {
    height: 8vw;
    width: 8vw;
    border-radius: 50%;
    position: absolute;
    mix-blend-mode: screen;
    transform: translate(0, 0);
    animation: center 6s infinite;
}
.sec4 .panel .cont2 .circle:nth-child(odd) {background: #61bea2;}
    
.sec4 .panel .cont2 .circle:nth-child(even) {background: #529ca0;}

.sec4 .panel .cont2 .circle:nth-child(1) {
    animation: circle-1 4s ease alternate infinite;
}
.sec4 .panel .cont2 .circle:nth-child(2) {
    animation: circle-2 4s ease alternate infinite;
}
.sec4 .panel .cont2 .circle:nth-child(3) {
    animation: circle-3 4s ease alternate infinite;
}
.sec4 .panel .cont2 .circle:nth-child(4) {
    animation: circle-4 4s ease alternate infinite;
}
.sec4 .panel .cont2 .circle:nth-child(5) {
    animation: circle-5 4s ease alternate infinite;
}
.sec4 .panel .cont2 .circle:nth-child(6) {
    animation: circle-6 4s ease alternate infinite;
}
@keyframes pulse {
    0% {
        transform: scale(.15) rotate(180deg);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes circle-1 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-2vw, -3vw);
    }
}
@keyframes circle-2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(2vw, 3vw);
    }
}
@keyframes circle-3 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-4vw, 0);
    }
}
@keyframes circle-4 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(4vw, 0);
    }
}
@keyframes circle-5 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-2vw, 3vw);
    }
}
@keyframes circle-6 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(2vw, -3vw);
    }
}`
    },
    {
        html: 
        `<svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 612">
    <path class="heart_path" d="M472.08 81.12c-26.96-27.572-63.022-42.757-101.546-42.757-37.93 0-73.593 14.773-100.421 41.602l-13.846 13.855-13.859-13.859c-26.826-26.826-62.482-41.599-100.401-41.599-37.931 0-73.593 14.773-100.417 41.599-26.82 26.819-41.59 62.478-41.59 100.409s14.77 73.59 41.59 100.409l177.482 177.481c10.253 10.251 23.717 15.377 37.184 15.377 13.464-.001 26.931-5.126 37.181-15.376l176.339-176.323c55.385-55.387 56.419-145.472 2.304-200.818zm-20.897 182.226l-176.338 176.325c-10.251 10.25-26.931 10.25-37.181-.001l-177.483-177.484c-21.854-21.853-33.889-50.909-33.889-81.817s12.035-59.964 33.889-81.818c21.858-21.859 50.918-33.897 81.826-33.897 30.896 0 59.95 12.038 81.809 33.897l13.866 13.866-21.233 21.249c-5.132 5.136-5.128 13.459.007 18.591 2.567 2.565 5.929 3.847 9.292 3.847 3.367 0 6.732-1.286 9.299-3.854l53.658-53.7c21.859-21.859 50.918-33.897 81.826-33.897 31.389 0 60.775 12.376 82.747 34.847 44.096 45.097 43.155 118.597-2.095 163.846zM466.29 174.403c-1.445-23.38-11.35-45.366-27.891-61.909-11.712-11.712-26.245-20.222-42.026-24.615-6.995-1.946-14.242 2.147-16.188 9.142-1.946 6.994 2.147 14.242 9.142 16.188 11.427 3.179 21.967 9.36 30.482 17.875 12.004 12.004 19.192 27.963 20.241 44.938.431 6.971 6.218 12.336 13.109 12.336.272 0 .547-.008.823-.026 7.246-.445 12.756-6.682 12.308-13.929z"></path>
</svg>`,
        css:
        `.sec4 .panel .cont3 .heart {
    width: 22vw; height: 22vw;
    margin-top: 13%;
}
.sec4 .panel .cont3 .heart .heart_path {
    fill: transparent;
    stroke: yellow;
    stroke-dasharray: 0;
    stroke-width: 10px;
    animation: groove 6s 3000 alternate;
}
@keyframes groove {
    0%,
        100% {
        stroke-dasharray: 1600;
    }
    25%,
        75% {
        stroke-dasharray: 70;
    }
    50% {
        stroke-dasharray: 150;
    }
} `
    },
    {
        html: 
        `<div class="hero">
    <h1>WOAH!</h1>
</div>`,
        css: 
        `:root {
--x: 0px;
--y: 0px;
}
.sec4 .panel .cont4 .hero {
    font-family: "Roboto Mono", monospace;
    letter-spacing: 2;
    text-transform: lowercase; 
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sec4 .panel .cont4 .hero h1 {
    font-size: 8vw;
    color: rgba(34, 34, 34, 0.9);
    animation: flex 3s ease-in-out alternate infinite;
}
@keyframes flex {
    0% {
        text-shadow: calc(var(--x)*-1) calc(var(--y)*-1) 0 rgba(145, 249, 229, 0.7),
        calc(var(--x)*-1.5) calc(var(--y)*1.5) 0 rgba(118, 247, 191, 0.7),
        calc(var(--y)*-2) calc(var(--x)*-2) 0 rgba(0, 255, 255, .7),
        var(--x) var(--y) 0 rgba(95, 221, 157, 0.7);
    }
    100% {
        text-shadow: var(--x) var(--y) 0 rgba(145, 249, 229, 0.7),
        var(--x) calc(var(--y)*-1) 0 rgba(118, 247, 191, 0.7),
        var(--y) var(--x) 0 rgba(0, 255, 255, .7),
        calc(var(--x)*-2) calc(var(--y)*-2) 0 rgba(95, 221, 157, 0.7);
    }
}`,
        js: 
        `document.querySelector(".hero").addEventListener('mousemove', function(e){
    const hero = document.querySelector(".hero");
    const walk = 100;

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // .hero h1에 마우스 hover했을 경우
    if (hero !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    document.documentElement.style.setProperty(` + "`--x`" + ", `${xWalk}px`" + `);
    document.documentElement.style.setProperty(` + "`--y`" + ", `${yWalk}px`" + `);

});`
    }
]