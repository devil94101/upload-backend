# upload-backend

This is backend for upload large files with terminate option.

use POST /signin with 
username : Deepak 
password : deepak123
and get token. Send token to every route for authentication.

Uploaded file stays in the Temp folder of the system until it completely uploads. After completion, it is copied to ‘Uploads’ folder in the root directory of the application.
