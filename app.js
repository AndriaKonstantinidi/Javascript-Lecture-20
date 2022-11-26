// let para = document.querySelector('p');
// console.log(para);

// let allPara = document.querySelectorAll('p');
// console.log(allPara)

// for(let i = 0; i < allPara.length; i++){
//     console.log(allPara[i])
// }

// allPara.forEach(p => console.log(p))

// btn.innerHTML = 'hello world';
// btn.innerText = 'hello world';
// btn.textContent = 'hello world';

// let heading = document.querySelector('h3')
// heading.textContent = '<h5> javasccript </h5>'

// let btn =  document.querySelector('button');
// btn.addEventListener('click',function(){
//     console.log('button was clicked');
// })

let allBtns = document.querySelectorAll('button');

allBtns.forEach(btn =>{
    btn.addEventListener('click',function(){
        btn.innerHTML = Math.round(Math.random()* 1000)
    })
})