import axios from 'axios';

let current_tab_id;
chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    current_tab_id = tab.tabId;
    if(/^https:\/\/www\.amazon/.test(current_tab_info.url)){
      chrome.tabs.insertCSS(null, {file: './styles.css'})
     chrome.tabs.executeScript(null, {file: './foreground.js'}, ()=> console.log('foreground injected'))
    }
  })
});

// chrome.runtime.onMessage.addListener((req, sender, sendResp) => {
//   console.log(req.message)
// //   if(req.message){
// //     console.log('receivedMessage in backend')
// //  let valueInSats;
// //   axios.get("/api/data")
// //   .then(response => response.data)
// //   .then(bitData => {
// //     //find data and convert caluclation, store in valueInSats and use sendResp
// //     console.log('SAT PRICE', bitData.satsPerBitcoin)
// //     if(bitData.satsPerBitcoin){sendResp({message:bitData.satsPerBitcoin})}
// //   })
// //   .catch(err => console.log(err))


//     chrome.tabs.sendMessage(current_tab_id, {message: 'HELLO FROM BACKEND'})
//     chrome.storage.local.get("input", value => {
//       console.log(value)
//     })
//   })
