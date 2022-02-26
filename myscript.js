/* <script> */

var check = false;

const array = document.getElementsByClassName("box");
console.log(array);
let store = [];

for (var i = 0; i < array.length; i++) {
    let a1, b1, c1;
    store.push([]);
    a1 = Math.floor(Math.random() * 10000) % 256;
    b1 = Math.floor(Math.random() * 10000) % 256;
    c1 = Math.floor(Math.random() * 10000) % 256;
    array[i].style.backgroundColor = `RGB(${a1} , ${b1} , ${c1})`;
    store[i].push(a1);
    store[i].push(b1);
    store[i].push(c1);
};

var correct_answer = store[Math.floor(Math.random() * 10) % 6];
document.getElementById('top_line2').innerText = `RGB(${correct_answer[0]}, ${correct_answer[1]}, ${correct_answer[2]})`;


let easymode = document.getElementById('easymode');
let hardmode = document.getElementById('hardmode');

let box_group2 = document.getElementsByClassName('box_group2');
let won = true;

easymode.addEventListener('click', function run() {
    easymode.classList.remove('mode-color-other');
    hardmode.classList.remove('mode-color-curr');
    easymode.classList.add('mode-color-curr');
    hardmode.classList.add('mode-color-other');
    box_group2[0].style.display = 'none'; 
    
    if(won===true){
        correct_answer = store[Math.floor(Math.random() * 10) % 3];
        document.getElementById('top_line2').innerText = `RGB(${correct_answer[0]}, ${correct_answer[1]}, ${correct_answer[2]})`;
    }
    else{
        document.getElementById('top_line2').innerText = 'Start Again';    
    }
});

hardmode.addEventListener('click', function run() {
    hardmode.classList.remove('mode-color-other');
    easymode.classList.remove('mode-color-curr');
    hardmode.classList.add('mode-color-curr');
    easymode.classList.add('mode-color-other');
    box_group2[0].style.display = 'flex';
    
    // document.getElementById('top_line2').innerText = `RGB(${correct_answer[0]}, ${correct_answer[1]}, ${correct_answer[2]})`;
    if(won===true){
        correct_answer = store[Math.floor(Math.random() * 10) % 6];
        document.getElementById('top_line2').innerText = `RGB(${correct_answer[0]}, ${correct_answer[1]}, ${correct_answer[2]})`;
    }
    else{
        document.getElementById('top_line2').innerText = 'Start Again';    
    }
});


for (let i = 0; i < 6; i++) {
    if(won===true){
        array[i].addEventListener('click', function run() {
            if (correct_answer === store[i]) {
                won = false;
                document.getElementsByClassName('top')[0].style.backgroundColor = `RGB(${correct_answer[0]} , ${correct_answer[1]} , ${correct_answer[2]})`;
                document.getElementById('middle_container2').innerHTML = `Correct!!`;
                for (let j = 0; j < 6; j++) {
                    array[j].style.visibility = 'visible';
                    array[j].style.backgroundColor = `RGB(${correct_answer[0]}, ${correct_answer[1]}, ${correct_answer[2]})`;
                }
                let middle_container1 = document.getElementById('middle_container1');
                document.getElementById('top_line2').innerText = 'Start Again'; 
                document.getElementById('top_line1').style.visibility = 'hidden'; 
                document.getElementById('top_line3').style.visibility = 'hidden'; 
                middle_container1.innerHTML = `Play Again`;
                // if(won===false){
                //     for(let j=0;j<6;j++){
                //         array[j].removeEventListener('click',run,false);
                //     }
                // }
            }
            else {
                if(won===false){
                    console.log(`you are in else part`);
                    middle_container1.innerHTML = `Play Again`;
                    for(let j=0;j<6;j++){
                        array[j].removeEventListener('click',run,false);
                    }
                }
                else{
                    console.log(`you are in else else part`);
                    document.getElementById('middle_container2').innerHTML = `Wrong! Try Another`;
                    array[i].style.visibility = 'hidden';
                }
            }
        
       });
    }
}


middle_container1.addEventListener('click', function run() {
    location.reload();
});


// </script>