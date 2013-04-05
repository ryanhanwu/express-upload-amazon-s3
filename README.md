Express-upload-amazon-s3
========================

Sample project for demonstrating how to upload file from web through express to Amazon S3 (Simple Storage Service) by aws-sdk


## Demo

	coming soon…
    

## Setup
##### 1.Download Project
```bash
git clone git@github.com:flyworld/express-upload-amazon-s3.git
```
##### 2.Install required packages
```bash
npm install
```

##### 3.Update Amazon Crenditials

* Edit ```/config.json```

```json
{
    "accessKeyId": "XXXXXXXXXXXXXXXXXXX",
    "secretAccessKey": 	"XXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

##### 4.Update Bucket Name 
* Edit ```/routes/upload.js```, update the **Bucket Name** to yours

```javascript
s3.client.putObject({	 
    Bucket: 'XXXXX Bucket Name', //S3 Bucket Name
    Key: file.name, //Upload File Name, Default the original name
    Body: data
}, this);
```

##### 5.Start server
	node app.js
	
Now check [http://localhost:3000](http://localhost:3000)

## Reference
* Document From Amazon
  * [Security Credentials](https://portal.aws.amazon.com/gp/aws/securityCredentials)
  * [AWS JavaScript SDK - S3 Client](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/Client.html#putObject-property)

## License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).
