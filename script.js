const result = document.getElementById('result');
const danBtn = document.getElementById('danBtn');
const cntBtn = document.getElementById('cntBtn');
const danArea = document.getElementById('dan');
const cntArea = document.getElementById('cnt');
const reset = document.getElementById('reset');
const danValue = document.getElementById('danValue');
const cntValue = document.getElementById('cntValue');

let dan = null;
let cnt = null;

danBtn.addEventListener('click', function(){
  dan = danArea.value;
  //여기서 cnt버튼 보이게 block
  // cntArea.value = null;
  danValue.innerHTML = dan + '단';
  result.innerHTML = null;
  cntValue.innerHTML = null;   
});

cntBtn.addEventListener('click', function(){
  if(dan != null){
    cnt = cntArea.value;
    cntValue.innerHTML = cnt + '줄';
    let resultValue = '';
    let i = 0;
    for(i = 0; i<cnt; i++){
      resultValue += String(dan) + ' * ' + (i + 1) + ' = ' + String(dan * (i+1)) + '<br/>'
      result.innerHTML = resultValue;
    }
  }else{
    alert('단을 먼저 입력해주세요.');
    cntArea.value = null;
  }
});

reset.addEventListener('click', function(){
    dan = null;
    cnt = null;
    danArea.value = null;
    cntArea.value = null;
    result.innerHTML = null;
    danValue.innerHTML = null;
    cntValue.innerHTML = null;
});

// ver2
const result_2 = document.getElementById('result_2');
const danArea_2 = document.getElementById('dan_2');
const cntArea_2 = document.getElementById('cnt_2');
const reset_2 = document.getElementById('reset_2');

let res = '';
let danVal = '';
let cntVal = '';

danArea_2.onkeyup = function() {
    result_2.innerHTML = '';
    danVal = this.value;
    cntArea_2.value = null;
};

cntArea_2.onkeyup = function() {
    res = '';
    cntVal = this.value;
    let i = 0;
    if( danVal != 0 ){
        for(i = 0; i<cntVal; i++){
        res += String(danVal) + ' * ' + (i + 1) + ' = ' + String(danVal * (i+1)) + '<br/>'
        result_2.innerHTML = res;
      } 
    };
};

reset_2.addEventListener('click', function(){
    result_2.innerHTML = null;
    danArea_2.value = null;
    cntArea_2.value = null;
});