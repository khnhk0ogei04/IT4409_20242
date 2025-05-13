var mail = 0;
      const CLIENT_ID = '620970880848-evcne7itnmt97d65skdi3d8kq4ukoep8.apps.googleusercontent.com';
      const API_KEY = 'AIzaSyBh-UAu4syRX684x35kRdMAF-OBJqkIXyE';
      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send';

      let tokenClient;
      let gapiInited = false;
      let gisInited = false;
      function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
      }
      async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
      }
      function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', 
        });
        gisInited = true;
        maybeEnableButtons();
      }

      function maybeEnableButtons() {
        if (gapiInited && gisInited) {
          document.getElementById('btn_signin').style.visibility = 'visible';
        }
      }

      function hop_thu() {
        document.getElementById('hop_thu').style.display = 'block';
        document.getElementById('soan_thu').style.display = 'none';
        document.getElementById('detail').style.display = 'none';
        document.getElementById('more').style.display = 'block';
        
        // Destroy TinyMCE instance if it exists
        if (tinymce.get('email-message')) {
          tinymce.get('email-message').remove();
        }
      }

      function handleAuthClick() {
        tokenClient.callback = async (resp) => {
          if (resp.error !== undefined) {
            throw (resp);
          }

          document.querySelector('.info-exercise').style.display = 'none';
          document.querySelector('.logo-hust').style.display = 'none';
          document.querySelector('.login-container').style.display = 'none';

          document.getElementById('mail-container').style.display = 'block';
          document.getElementById('btn_signout').style.visibility = 'visible';
          document.getElementById('btn_mail').style.visibility = 'visible';
          document.getElementById('btn_sendmail').style.visibility = 'visible';

          document.getElementById('hop_thu').classList.add('active');
          document.getElementById('more').style.display = 'block';
          document.getElementById('btn_signin').style.visibility = 'hidden';
        
          await listMail();
        };

        if (gapi.client.getToken() === null) {
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          tokenClient.requestAccessToken({prompt: ''});
        }
      }

      function soan_thu() {
        document.getElementById('hop_thu').style.display = 'none';
        document.getElementById('soan_thu').style.display = 'block';
        document.getElementById('detail').style.display = 'none';
        document.getElementById('more').style.display = 'none';
        
        // reinit tinymce
        if (tinymce.get('email-message')) {
          tinymce.get('email-message').remove();
        }
        
        setTimeout(function() {
          tinymce.init({
            selector: '#email-message',
            height: 300,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          });
        }, 100);
      }

      function returnMail() {
        document.getElementById('hop_thu').style.display = 'block';
        document.getElementById('detail').style.display = 'none';
        document.getElementById('soan_thu').style.display = 'none';
        document.getElementById('more').style.display = 'block';
        
        // destroy TinyMCE instance if it exists
        if (tinymce.get('email-message')) {
          tinymce.get('email-message').remove();
        }
      }


      function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');

          document.querySelector(".info-exercise").style.display = 'block';
          document.querySelector(".logo-hust").style.display = 'block';
          document.querySelector(".login-container").style.display = 'block';

          document.getElementById('mail-container').style.display = 'none';
          document.getElementById('btn_signout').style.visibility = 'hidden';
          document.getElementById('btn_mail').style.visibility = 'hidden';
          document.getElementById('btn_sendmail').style.visibility = 'hidden';
          document.getElementById('hop_thu').classList.remove('active');
          document.getElementById('more').style.visibility = 'hidden';
          document.getElementById('soan_thu').style.visibility = 'hidden';
          document.getElementById('btn_signin').style.visibility = 'visible';
          document.getElementById('hop_thu').innerText = '';
        }
      }

      async function listMail() {
        const response = await gapi.client.gmail.users.messages.list({
          'userId': 'me',
        });

        const messages = response.result.messages;

        if (!messages || messages.length == 0) {
          console.log('No messages found.');
          return;
        }

        var cur_mail = (mail + 24) <= messages.length ? (mail + 24) : messages.length;
        for (let i = mail; i < cur_mail; i++) {
          const message = messages[i];
          const messageResponse = await gapi.client.gmail.users.messages.get({
            'userId': 'me',
            'id': message.id,
          });

          mail = cur_mail;

          const messageData = messageResponse.result;
          var doc = document.getElementById("hop_thu");
          var div = document.createElement("div");
          div.setAttribute('class', 'mail_element');
          var h_2 = document.createElement("pre");
          var p = document.createElement("p");
          p.setAttribute("class", "h2");

          var timeElement = document.createElement("span");
          timeElement.setAttribute("class", "mail-time");

          const fromHeader = messageData.payload.headers.find(header => header.name === 'From' || header.name === 'from');
          let senderName = '';
          let senderEmail = '';

          if (fromHeader) {
            const emailMatch = fromHeader.value.match(/<([^>]*)>/);
            
            if (emailMatch && emailMatch[1]) {
              senderEmail = emailMatch[1];      
              const namePart = fromHeader.value.split('<')[0].trim();
              senderName = namePart || senderEmail.split('@')[0];
            } else {
              senderEmail = fromHeader.value;
              senderName = senderEmail.split('@')[0];
            }
            
            if (senderEmail.includes('gmail.com') || senderEmail.includes('googlemail.com')) {
              if (!senderName || senderName === senderEmail.split('@')[0]) {
                senderName = senderEmail.split('@')[0];
                if (senderName) {
                  senderName = senderName.slice(0);
                } else {
                  senderName = 'Gmail User';
                }
              }
            }
          }

          if (senderName.length > 15) {
            senderName = senderName.substr(0, 15) + '...';
          } else if (!senderName) {
            senderName = 'Unknown';
          }

          h_2.textContent = senderName;
          const text = messageData.payload.headers.find(header => header.name === 'Subject').value +" " +  messageData.snippet;
          p.innerHTML = text.substr(0,60).trim() + "...";

          const dateHeader = messageData.payload.headers.find(header => header.name === 'Date');
          if (dateHeader) {
            const emailDate = new Date(dateHeader.value);
            const now = new Date();
            
            let timeText;
            if (emailDate.toDateString() === now.toDateString()) {
              timeText = emailDate.getHours().toString().padStart(2, '0') + ':' + 
                        emailDate.getMinutes().toString().padStart(2, '0');
            } else if (now - emailDate < 7 * 24 * 60 * 60 * 1000) {
              const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
              timeText = days[emailDate.getDay()];
            } else {
              timeText = emailDate.getDate() + '/' + (emailDate.getMonth() + 1);
            }
            
            timeElement.textContent = timeText;
          }

          div.appendChild(h_2);
          div.appendChild(p);
          div.appendChild(timeElement);
          doc.appendChild(div);
          div.onclick = function(){
            detailMailShow(messageData.id);
          }
        }
        document.getElementById('hop_thu').style.height = 'auto';
      }

      function showMoreMail(){
        mail = mail;
        listMail();
      }

      function detailMailShow(emailId) {
        document.getElementById('hop_thu').style.display = 'none';
        document.getElementById('soan_thu').style.display = 'none';
        document.getElementById('detail').style.display = 'block';
        document.getElementById('more').style.display = 'none';
        loadEmailContent(emailId);
      }

      async function loadEmailContent(emailId) {
        const response = await gapi.client.gmail.users.messages.get({
          'userId': 'me',
          'id': emailId
        });

        const messageData = response.result;
        const fromHeader = messageData.payload.headers.find(header => header.name === 'From' || header.name === 'from');
        let senderName = '';
        let senderEmail = '';

        if (fromHeader) {
          const emailMatch = fromHeader.value.match(/<([^>]*)>/);
          
          if (emailMatch && emailMatch[1]) {
            senderEmail = emailMatch[1];
            const namePart = fromHeader.value.split('<')[0].trim();
            senderName = namePart || senderEmail.split('@')[0];
          } else {
            senderEmail = fromHeader.value;
            senderName = senderEmail.split('@')[0];
          }
        }
        
        const dateHeader = messageData.payload.headers.find(header => header.name === 'Date');
        let formattedDate = '';
        
        if (dateHeader) {
          const emailDate = new Date(dateHeader.value);
          formattedDate = emailDate.toLocaleString('vi-VN', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        }
        
        const subject = messageData.payload.headers.find(header => header.name === 'Subject').value;

        let emailBody = '';
        
        if (messageData.payload.parts) {
          const htmlPart = messageData.payload.parts.find(part => part.mimeType === 'text/html');
          const textPart = messageData.payload.parts.find(part => part.mimeType === 'text/plain');
          
          if (htmlPart && htmlPart.body.data) {
            emailBody = window.atob(htmlPart.body.data.replace(/-/g, '+').replace(/_/g, '/'));
          } else if (textPart && textPart.body.data) {
            const plainText = window.atob(textPart.body.data.replace(/-/g, '+').replace(/_/g, '/'));
            emailBody = `<div style="white-space: pre-wrap;">${plainText}</div>`;
          }
        } else if (messageData.payload.body.data) {
          emailBody = window.atob(messageData.payload.body.data.replace(/-/g, '+').replace(/_/g, '/'));
        }
        document.getElementById('subject_text').textContent = subject;
        document.getElementById('sender-name').textContent = senderName;
        document.getElementById('sender-email').textContent = `<${senderEmail}>`;
        document.getElementById('email-date').textContent = formattedDate;
        document.getElementById('detail_text').innerHTML = emailBody;
        const firstLetter = senderName.charAt(0).toUpperCase();
        const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50'];
        const colorIndex = senderEmail.charCodeAt(0) % colors.length;
        const avatarColor = colors[colorIndex];
        
        const avatarElement = document.getElementById('sender-avatar');
        avatarElement.src = 'https://freelogopng.com/images/all_img/1657906274logo-gmail-png.png';
        avatarElement.style.backgroundColor = avatarColor;
        avatarElement.style.color = 'white';
        avatarElement.style.textAlign = 'center';
        avatarElement.style.fontWeight = 'bold';
        avatarElement.style.fontSize = '20px';
        avatarElement.style.lineHeight = '40px';
        avatarElement.textContent = firstLetter;
      }

      function sendEmail(event){
        event.preventDefault();
        send();
      }

// read base64 file
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

async function send() {
  try {
    const response = await gapi.client.gmail.users.getProfile({
      userId: 'me'
    });

    const email = response.result.emailAddress;
    let body;
    if (tinymce.get('email-message')) {
      body = tinymce.get('email-message').getContent();
    } else {
      body = document.getElementById('email-message').value;
    }
    
    const to = document.getElementById('input_to').value;
    const subject = document.getElementById('email-subject').value;
    const messageParts = [];
    messageParts.push(`From: ${email}`);
    messageParts.push(`To: ${to}`);
    messageParts.push(`Subject: ${subject}`);
    const boundary = `boundary${Math.random().toString().substr(2)}`;
    messageParts.push(`MIME-Version: 1.0`);
    messageParts.push(`Content-Type: multipart/mixed; boundary="${boundary}"`);
    messageParts.push('');
    messageParts.push(`--${boundary}`);
    messageParts.push(`Content-Type: text/html; charset=UTF-8`);
    messageParts.push(`Content-Transfer-Encoding: 7bit`);
    messageParts.push('');
    messageParts.push(body);

    // handle file attachment
    const fileInput = document.getElementById('email-attachment');
    if (fileInput.files && fileInput.files.length > 0) {
      for(let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        const base64Data = await readFileAsBase64(file);
        
        messageParts.push(`--${boundary}`);
        messageParts.push(`Content-Type: ${file.type || 'application/octet-stream'}; name="${file.name}"`);
        messageParts.push(`Content-Disposition: attachment; filename="${file.name}"`);
        messageParts.push(`Content-Transfer-Encoding: base64`);
        messageParts.push('');
      
        const base64Lines = [];
        for (let j = 0; j < base64Data.length; j += 76) {
          base64Lines.push(base64Data.substr(j, 76));
        }
        messageParts.push(base64Lines.join('\r\n'));
      }
    }
    
    messageParts.push(`--${boundary}--`);
    
    const message = messageParts.join('\r\n');
    
    const sendRequest = gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {
        'raw': btoa(unescape(encodeURIComponent(message)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '')
      }
    });

    sendRequest.execute(response => {
      console.log('Response:', response);
      if (response.id) {
        console.log('Email sent successfully!');
        alert('Send email successfully!');
        document.getElementById('input_to').value = "";
        document.getElementById('email-subject').value = "";
        document.getElementById('email-attachment').value = "";
        document.getElementById('file-list').innerHTML = "";
        if (tinymce.get('email-message')) {
          tinymce.get('email-message').setContent("");
        } else {
          document.getElementById('email-message').value = "";
        }
      } else {
        console.error('Failed to send email:', response);
        alert('Error. please try again!');
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending email: ' + error.message);
  }
}
      function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.onerror = (error) => {
            reject(error);
          };
          reader.readAsDataURL(file);
        });
      }

      function sendEmailMessage(message, email) {
        const sendRequest = gapi.client.gmail.users.messages.send({
          'userId': 'me',
          'resource': {
            'raw': window.btoa(message).replace(/\+/g, '-').replace(/\//g, '_')
          }
        });

        sendRequest.execute(response => {
          if (response && response.status === 'SENT') {
            console.log(`Email successfully sent to ${email}`);
            alert('Gửi mail thành công!');
          } else {
            console.log(`Failed to send email: ${JSON.stringify(response)}`);
          }
        });
      }

document.getElementById('email-attachment').addEventListener('change', function(event) {
  const fileList = document.getElementById('file-list');
  fileList.innerHTML = '';
  
  if (this.files.length > 0) {
    const fileCount = document.createElement('p');
    fileCount.textContent = `Selected ${this.files.length} file(s):`;
    fileList.appendChild(fileCount);
    
    const list = document.createElement('ul');
    for (let i = 0; i < this.files.length; i++) {
      const item = document.createElement('li');
      item.textContent = this.files[i].name;
      list.appendChild(item);
    }
    fileList.appendChild(list);
  }
});