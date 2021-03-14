const satPriceBtn = document.createElement('button')
satPriceBtn.innerText = 'PRICE IN SATS'
satPriceBtn.id = "first"
var t = '';
// const second = document.createElement('button')
// second.innerText = 'SHOUTOUT TO BACKEND'
// second.id = "second"

const input = document.createElement('input')
input.type = "text";
input.id = 'input';

document.querySelector('body').appendChild(satPriceBtn);
// document.querySelector('body').appendChild(second);
document.querySelector('body').appendChild(input);



//send input to backend
//have backend fetch sat price adn convert to usd
//send back in repsonse

satPriceBtn.addEventListener('click', () => {
  // chrome.storage.local.set({"input": t})
  // chrome.runtime.sendMessage({message: t})
  // console.log("i sent the value input from frontend!")

  document.getElementById('input').value = Number(t) + 100;
})

chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  console.log('RECEIVED MESSAGE FRO BACKEND!', req)
})



function gText(e) {
    t = (document.all) ? document.selection.createRange().text : document.getSelection();

    document.getElementById('input').value = t;
}

document.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
