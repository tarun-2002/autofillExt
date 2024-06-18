chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'fillForm') {
    try {
      const formData = JSON.parse(request.data);

      for (const field in formData) {
        const element = findElementByCaseInsensitiveIdAndSpecialChars(field);
        if (element) {
          element.value = formData[field];
        }
      }
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }
});

function findElementByCaseInsensitiveIdAndSpecialChars(id) {
  const elements = document.querySelectorAll('[id]');
  for (const element of elements) {
    if (compareIds(element.id, id)) {
      return element;
    }
  }
  return null;
}

function compareIds(id1, id2) {
  // Case-insensitive and special character-aware comparison
  return id1.toLowerCase().replace(/[^a-z0-9]/g, '') === id2.toLowerCase().replace(/[^a-z0-9]/g, '');
}
