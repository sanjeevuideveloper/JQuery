// Click on the button
$('#load-images-btn').click(function() {
    $.ajax({
        method : 'GET',
        // url : 'https://gist.githubusercontent.com/thenaveensaggam/a42591ab5e4e0356c4c08c57af4b71e8/raw/dad36c1d5e40b6870ce61274d970329e1ae1a1b0/10012018.json',
        url : 'https://gist.githubusercontent.com/sanjeevuideveloper/88cbe57fd00156a48e3f45fbaa157e81/raw/7b64d38998ed7eb0bd03571d173f47388fe30f63/11012018.json',
        success : function(text) {
            processData(text);
        }
    });
});

let processData = (text) => {
    let jsonData = JSON.parse(text);
    prepareHTMLTags(jsonData.contacts);
};

let prepareHTMLTags = (contacts) => {
    let imageSelector = '#image';
    let count = 1;
    contacts.forEach((contact) => {
        let imageSource = contact.picture.large;
        let fullName = `${contact.name.first} ${contact.name.last}`;
        $(imageSelector + count).attr('src',imageSource);
        $(imageSelector+count+'_name').text(fullName);
        count++;
    });
};