// Smooth scroll
function scrollToSection(id){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
}

// Form validation
function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(data){
    const errors={};
    if(!data.name||data.name.trim().length<2)errors.name='이름을 2글자 이상 입력하세요';
    if(!data.company||data.company.trim().length<2)errors.company='회사명을 2글자 이상 입력하세요';
    if(!data.email||!validateEmail(data.email))errors.email='올바른 이메일을 입력하세요';
    if(!data.phone||data.phone.trim().length<10)errors.phone='올바른 전화번호를 입력하세요';
    return errors;
}

// Form submission
async function submitForm(data){
    try{
        const response=await fetch('/register.php',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        });
        return response.ok?{success:true}:{success:false,error:'서버 오류'};
    }catch(error){
        return{success:false,error:error.message};
    }
}

// Modal functions
function showModal(id){
    document.getElementById(id).style.display='block';
}

function hideModal(id){
    document.getElementById(id).style.display='none';
}

// Initialize
document.addEventListener('DOMContentLoaded',function(){
    const form=document.getElementById('registrationForm');
    const submitBtn=form.querySelector('.submit-button');
    
    form.addEventListener('submit',async function(e){
        e.preventDefault();
        
        const formData={
            name:form.name.value.trim(),
            email:form.email.value.trim(),
            company:form.company.value.trim(),
            phone:form.phone.value.trim(),
            position:form.position?.value||'',
            interests:Array.from(form.querySelectorAll('input[name="interests"]:checked')).map(cb=>cb.value)
        };
        
        const errors=validateForm(formData);
        if(Object.keys(errors).length>0){
            alert(Object.values(errors).join('\n'));
            return;
        }
        
        submitBtn.disabled=true;
        submitBtn.textContent='등록 중...';
        
        const result=await submitForm(formData);
        
        if(result.success){
            showModal('successModal');
            form.reset();
        }else{
            showModal('errorModal');
        }
        
        submitBtn.disabled=false;
        submitBtn.textContent='등록하기';
    });
    
    // Modal close handlers
    document.querySelectorAll('.close').forEach(btn=>{
        btn.addEventListener('click',function(){
            this.closest('.modal').style.display='none';
        });
    });
    
    // Click outside modal to close
    window.addEventListener('click',function(e){
        if(e.target.classList.contains('modal')){
            e.target.style.display='none';
        }
    });
});
