const arrow = document.querySelector('.arrow');
const rotateArrow = document.querySelector('.rotateArrow');
const section2 = document.querySelector('.section2');
const htmlPer = document.querySelector('.htmlPer');
const cssPer = document.querySelector('.cssPer');
const jsPer = document.querySelector('.jsPer');
const tailwindPer = document.querySelector('.tailwindPer');
const reactPer = document.querySelector('.reactPer');

let interval;
let interval2;
let interval3;
let interval4;
let interval5;

arrow.addEventListener('click', () => {
    if(!section2.classList.contains('show-section-2')) {
        section2.classList.add('show-section-2');
        section2.classList.remove('hide-section-2');
        rotateArrow.classList.add('arrow-rotate');
        rotateArrow.classList.remove('rotate-back');
        htmlPer.classList.add('html-per');
        cssPer.classList.add('css-per');
        jsPer.classList.add('js-per');
        tailwindPer.classList.add('tailwind-per');
        reactPer.classList.add('react-per');

        let count1 = 0; 
        clearInterval(interval);
         
        // it is used for html
         interval = setInterval(() => {
            if(count1 >= 95) {
                clearInterval(interval);
            } else {
                count1++;
                htmlPer.innerText = `${count1}%`;
            }

        },20);

        // it is used for css
        let count2 = 0;
        clearInterval(interval2);
         interval2 = setInterval(() => {
            if(count2 >= 85) {
                clearInterval(interval2);
            } else {
                count2++;
                cssPer.innerText = `${count2}%`;
            }

        }, 20);

        // it is used for javascript
        let count3 = 0;
        clearInterval(interval3);
        interval3 = setInterval(() => {

            if(count3 >= 75) {
                clearInterval(interval3);
            } else {
                count3++;
                jsPer.innerText = `${count3}%`;
            }
        }, 20);
        
        // it is used for tailwind
        let count4 = 0;
        clearInterval(interval4);
        interval4 = setInterval(() => {

            if(count4 >= 95) {
                clearInterval(interval4);
            } else {
                count4++;
                tailwindPer.innerText = `${count4}%`;
            }
        }, 20);

        // it is used for react
        let count5 = 0;
        clearInterval(interval5);
        interval5 = setInterval(() => {

            if(count5 >= 60) {
                clearInterval(interval5);
            } else {
                count5++;
                reactPer.innerText = `${count5}%`;
            }
        }, 20);
        
    } 
    else {
        section2.classList.remove('show-section-2');
        section2.classList.add('hide-section-2');
        rotateArrow.classList.add('rotate-back');
        rotateArrow.classList.remove('arrow-rotate');
        htmlPer.classList.remove('html-per');
        cssPer.classList.remove('css-per');
        jsPer.classList.remove('js-per');
        tailwindPer.classList.remove('tailwind-per');
        reactPer.classList.remove('react-per');

        htmlPer.innerText = `${0}%`;
        cssPer.innerText = `${0}%`;
        jsPer.innerText = `${0}%`;
        tailwindPer.innerText = `${0}%`;
        reactPer.innerText = `${0}%`;
        clearInterval(interval);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
        clearInterval(interval5);
    }
});