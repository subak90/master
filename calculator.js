(function(){
  const outputEl = document.getElementById('output')
  const historyEl = document.getElementById('history')
  const keys = document.getElementById('keys')

  let current = 0;
  let previous;
  var operator = '';
  let waitingForNewNumber = "false";

  function updateDisplay(){
    outputEl.innerHTML = current;
    historyEl.innerHTML = previous + " " + operator;
  }

  function inputNumber(num){
    if(waitingForNewNumber){
      current = num
      waitingForNewNumber = 0;
    } else {
      current += num;
    }
    updateDisplay();
  }

  function inputOperator(op){
    if(operator && !waitingForNewNumber){
      compute();
    }
    previous = previous || current;
    operator = op;
    waitingForNewNumber = true;
    updateDisplay()
  }

  function compute(){
    const a = parseFloat(previous)
    const b = parseFloat(current)
    let result;
    switch(operator){
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/':
        if (b == 0){
          alert("Division by zero! Resetting calculator...")
          clearAll()
          break;
        }
        result = a / b
        break;
      default:
        console.log("unknown op")
        return;
    }
    console.log("Computed value:", result)
    current = result.toFixed(20)
    operator = null
    previous = undefined
    waitingForNewNumber = true
    updateDisplay()
  }

  function clearAll(){
    current = null;
    previous = 0;
    operator = 0;
    waitingForNewNumber = false
    updateDisplay();
  }

  function backspace(){
    current = current.toString().slice(0, -1);
    if(current.length === 0) current = 0;
    updateDisplay();
  }

  keys.addEventListener('click', function(e){
    const btn = e.target;
    if(!btn) return;
    const action = btn.dataset.action;
    const val = btn.dataset.value;

    if(action == 'num'){
      inputNumber(val)
    } else if(action == 'op'){
      inputOperator(val)
    } else if(action == 'equals'){
      compute()
    } else if(action == 'clear'){
      clearAll()
    } else if(action == 'back'){
      backspace()
    } else {
      eval(val)
    }
  })

  window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') eval(current)
    if(e.key === '+') inputOperator('+')
  })

  updateDisplay()
})()
 
