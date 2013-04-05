Express-upload-amazon-s3
========================

Sample project for demonstrating how to upload file from web through express to Amazon S3 (Simple Storage Service) by aws-sdk


## Demo

	coming soon…
    

## Setup
##### 1.Update Amazon Crenditials

* Edit ```/config.json```

```json
	{
    	"accessKeyId": "XXXXXXXXXXXXXXXXXXX",
	    "secretAccessKey": 	"XXXXXXXXXXXXXXXXXXXXXXXXX"
	}
```
* Document From Amazon
  * [Security Credentials](https://portal.aws.amazon.com/gp/aws/securityCredentials)	

##### 2.Update Bucket Name 
* Edit ```/routes/upload.js```

```javascript
s3.client.putObject({	 
    Bucket: 'XXXXX Bucket Name', //S3 Bucket Name
    Key: file.name, //Upload File Name, Default the original name
    Body: data
}, this);
```

##### 3.Start server
	node app.js
	
Now check [http://localhost:3000](http://localhost:3000)

## License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).
