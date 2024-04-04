let input=document.querySelector('.inp')
let checkBtn=document.querySelector('.btnChck')
let helpBtn=document.querySelector('.btnHlp')
let passBtn=document.querySelector('.btnPss')
let count=document.querySelector('.correct')
let help=document.querySelector('#key')
let colors=['red','green','blue','yellow','orange','black','white','pink','purple','brown']
let random=Math.floor(Math.random() * colors.length)
// console.log(colors[random])
checkBtn.addEventListener('click',function(){
    
    if(colors[random]==input.value.toLowerCase()){
            toastr.success('GOOD JOB');
        count.textContent = parseInt(count.textContent) + 1;
        input.value = '';
        getRandomColor();
          
// console.log(colors[random])
    }else{
        toastr.error('OOPPSSS Try Again');
    }
})
function getRandomColor() {
    random = Math.floor(Math.random() * colors.length);
    help.innerText = '';
}
helpBtn.addEventListener('click',function(){
    help.innerText=`The word has ${colors[random].length} letters and the first letter is ${colors[random][0].toUpperCase()}`

})
passBtn.addEventListener("click", function(){
    getRandomColor();
    input.value = '';
})