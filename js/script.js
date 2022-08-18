document.getElementById('btn-apply').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value= '';
    let products = document.getElementsByClassName('product-price');
    for(const product of products){
        productPrice = product.innerText;
        if(inputText === 'dom'){
            discountValue = productPrice * 0.7;
            product.innerText = discountValue;
        }
        else{
            document.getElementById('btn-apply').setAttribute('disabled',true);
        }
    }
    
});