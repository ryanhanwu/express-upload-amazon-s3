Express-upload-amazon-s3
========================

Sample project for demonstrating how to upload file from web through express to Amazon S3 (Simple Storage Service) by [aws-sdk](https://github.com/aws/aws-sdk-js)

## Setup
##### 1.Download Project
```bash
git clone https://github.com/ryanhanwu/express-upload-amazon-s3.git
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
    "secretAccessKey": 	"XXXXXXXXXXXXXXXXXXXXXXXXX",
    "region": "us-east-1"
}
```

##### 4.Update Bucket Name

* Edit ```/routes/upload.js```, update the value of **Bucket** to your bucket name.

```javascript
s3.putObject({
    Bucket: 'XXXXX Bucket Name', //S3 Bucket Name
    Key: file.originalname, //Upload File Name, Default the original name
    Body: data
}, this);
```

##### 5.Start server
	node app.js

Now check [http://localhost:3000](http://localhost:3000)


## Error Handling

### [S3] PermanentRedirect

```
PermanentRedirect: The bucket you are attempting to access must be addressed using the specified endpoint. Please send all future requests to this endpoint.
```

**Solution**: The region settings might be wrong, please check your ```config.json``` and make sure the ```region``` is correct

### [S3] AccessDenied 403 

```
[AccessDenied: Access Denied]
```

**Solution**: Try update your S3 Bucket's ```CORS Configuration``` to following

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
   <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedHeader>*</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

## Reference

* Document From Amazon
  * [Security Credentials](https://console.aws.amazon.com/iam/home?#security_credential)
  * [AWS JavaScript SDK - S3 Client](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property)

## License

* MIT: [http://ryanwu.mit-license.org](http://ryanwu.mit-license.org).
