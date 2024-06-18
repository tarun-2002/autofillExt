document.getElementById('fillForm').addEventListener('click', function() {
    const jsonData = document.getElementById('jsonData').value.trim();
  
    if (jsonData) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'fillForm', data: jsonData });
      });
    } else {
      alert('Please enter JSON data in the textarea.');
    }
  });
  