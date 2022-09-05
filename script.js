const billingType = document.getElementById('billing-type');
const basicPlanPrice = document.getElementById('basic-plan-price');
const professionalPlanPrice = document.getElementById('professional-plan-price');
const masterPlanPrice = document.getElementById('master-plan-price');

billingType.addEventListener('input', () => {
    if(billingType.checked) {
        basicPlanPrice.innerText = '199.99';
        professionalPlanPrice.innerText = '249.99';
        masterPlanPrice.innerText = '399.99';
    }else {
        basicPlanPrice.innerText = '19.99';
        professionalPlanPrice.innerText = '24.99';
        masterPlanPrice.innerText = '39.99';
    }
}) 
window.addEventListener('DOMContentLoaded', () => {
    if(billingType.checked) {
        basicPlanPrice.innerText = '199.99';
        professionalPlanPrice.innerText = '249.99';
        masterPlanPrice.innerText = '399.99';
    }else {
        basicPlanPrice.innerText = '19.99';
        professionalPlanPrice.innerText = '24.99';
        masterPlanPrice.innerText = '39.99';
    }
})