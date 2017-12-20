function createAndSendDocument() {
  var doc = DocumentApp.create('Hello, world!');

  doc.getBody().appendParagraph('Automate your Tasks using Functions in App Script');
  
  var url = doc.getUrl();
  
  var email = Session.getActiveUser().getEmail();
  
  var subject = doc.getName();
  
  var body = 'Link to your doc: ' + url;
  
  GmailApp.sendEmail(email, subject, body);

}


____
DeDuplicate Function to replace paying for the plugin... 


function removeDuplicates() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var newData = new Array();
  for(i in data){
    var row = data[i];
    var duplicate = false;
    for(j in newData){
      if(row.join() == newData[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData.push(row);
    }
  }
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}

//
//function removeDuplicates() {
//  var sheet = SpreadsheetApp.getActiveSheet();
//  var data = sheet.getDataRange().getValues();
//  var newData = new Array();
//  for(i in data){
//    var row = data[i];
//    var duplicate = false;
//    for(j in newData){
//      if(row[0] == newData[j][0] && row[1] == newData[j][1]){
//  duplicate = true;
//}
//    }
//    if(!duplicate){
//      newData.push(row);
//    }
//  }
//  sheet.clearContents();
//  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
//}
