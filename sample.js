(function(){
  const outputEl = document.getElementById('output');
  const historyEl = document.getElementById('history');
  const keys = document.getElementById('keys');

  let current = '0';
  let previous = null;
  let operator = null;
  let waitingForNewNumber = false;

  function updateDisplay(){
    outputEl.textContent = current;
    historyEl.textContent = previous ? `${previous} ${operator || ''}` : '';
  }

  function inputNumber(num){
    if(waitingForNewNumber){
      current = num === '.' ? '0.' : num;
      waitingForNewNumber = false;
    } else {
      if(num === '.' && current.includes('.')) return;
      current = current === '0' && num !== '.' ? num : current + num;
    }
    updateDisplay();
  }

  function inputOperator(op){
    if(operator && !waitingForNewNumber){
      // compute intermediate
      compute();
    }
    previous = previous === null ? current : (previous);
    operator = op;
    waitingForNewNumber = true;
    previous = previous === null ? current : previous;
    updateDisplay();
  }

  function compute(){
    if(operator === null || previous === null) return;
    const a = parseFloat(previous);
    const b = parseFloat(current);
    let result = 0;
    if (isNaN(a) || isNaN(b)) return;
    switch(operator){
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/':
        if (b === 0) {
          alert("Can't divide by 0");
          clearAll();
          return;
        }
        result = a / b; break;
      default: return;
    }
    // limit decimal places reasonably
    result = Math.round((result + Number.EPSILON) * 1e12) / 1e12;
    current = String(result);
    previous = null;
    operator = null;
    waitingForNewNumber = true;
    updateDisplay();
  }

  function clearAll(){
    current = '0';
    previous = null;
    operator = null;
    waitingForNewNumber = false;
    updateDisplay();
  }

  function backspace(){
    if(waitingForNewNumber){
      // nothing to backspace
      return;
    }
    if(current.length <= 1){
      current = '0';
    } else {
      current = current.slice(0, -1);
    }
    updateDisplay();
  }

  keys.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(!btn) return;
    const action = btn.dataset.action;
    const val = btn.dataset.value;

    if(action === 'num'){
      inputNumber(val);
    } else if(action === 'op'){
      inputOperator(val);
    } else if(action === 'equals'){
      compute();
    } else if(action === 'clear'){
      clearAll();
    } else if(action === 'back'){
      backspace();
    }
  });

  // keyboard support
  window.addEventListener('keydown', (e) => {
    if((e.key >= '0' && e.key <= '9') || e.key === '.'){
      e.preventDefault();
      inputNumber(e.key);
      return;
    }
    if(['+','-','*','/'].includes(e.key)){
      e.preventDefault();
      inputOperator(e.key);
      return;
    }
    if(e.key === 'Enter' || e.key === '='){
      e.preventDefault();
      compute();
      return;
    }
    if(e.key === 'Backspace'){
      e.preventDefault();
      backspace();
      return;
    }
    if(e.key === 'Escape'){
      e.preventDefault();
      clearAll();
      return;
    }
  });

  // init
  updateDisplay();
})();