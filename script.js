
function paraHideView1(ag){
    let b = document.getElementById(ag);
    if(b.classList.contains('view')){
        b.classList.remove('view');
    }else{
        b.classList.add('view');
    }
}

window.addEventListener('scroll', (e)=>{
    let a = document.getElementById('head1')
    let b = document.body;
    console.log(e);
    console.log(a.offsetTop);
    console.log(b.offsetHeight);   
    console.log(b.offset); 
})
// if(b.offsetHeight)