function createAndSendDocument() {
  var doc = DocumentApp.create('Hello, world!');

  doc.getBody().appendParagraph('Automate your Tasks using Functions in App Script');
  
  var url = doc.getUrl();
  
  var email = Session.getActiveUser().getEmail();
  
  var subject = doc.getName();
  
  var body = 'Link to your doc: ' + url;
  
  GmailApp.sendEmail(email, subject, body);

}
