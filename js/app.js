function NukeAllContacts()
{
  if ("mozContacts" in window.navigator)
  {
    var result = window.confirm(document.webL10n.get('deleteconfirm'));
    if (result)
    {
      var request = window.navigator.mozContacts.clear();
      request.onsuccess = function ()
      { 
        alert(document.webL10n.get('deletesuccess'));
        document.querySelector('#deletebutton').disabled = true;
      }
      request.onerror = function ()
      {
        alert(document.webL10n.get('deleteerror'));
      }
    }
    else
    {
      alert(document.webL10n.get('deleteerror'));
    }
  }
  else
  console.error("mozContacts not supported");
};

document.querySelector('#deletebutton').addEventListener ('click', function () {
  NukeAllContacts();
});

document.querySelector('#closebutton').addEventListener ('click', function () {
  window.close();
});
