<!-- Generator: Widdershins v4.0.1 -->

<h1 id="openapi">openapi v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="/">/</a>

Email: <a href="mailto:edwin.corrigan@siren.io">edwin.corrigan@siren.io </a> 
 License: MIT

# Authentication

<h1 id="openapi-default">Default</h1>

## GetUser

<a id="opIdGetUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /users/{userId} \
  -H 'Accept: application/json'

```

```http
GET /users/{userId} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/users/{userId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/users/{userId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/users/{userId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/users/{userId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/users/{userId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/users/{userId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{userId}`

<h3 id="getuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|number(double)|true|none|
|name|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "email": "string",
  "name": "string",
  "status": "Happy",
  "phoneNumbers": [
    "string"
  ]
}
```

<h3 id="getuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Ok|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /users \
  -H 'Content-Type: application/json'

```

```http
POST /users HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "email": "string",
  "name": "string",
  "phoneNumbers": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /users`

> Body parameter

```json
{
  "email": "string",
  "name": "string",
  "phoneNumbers": [
    "string"
  ]
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserCreationParams](#schemausercreationparams)|true|none|

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 0,
  "email": "string",
  "name": "string",
  "status": "Happy",
  "phoneNumbers": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number(double)|true|none|none|
|email|string|true|none|none|
|name|string|true|none|none|
|status|string|false|none|none|
|phoneNumbers|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Happy|
|status|Sad|

<h2 id="tocS_Pick_User.email-or-name-or-phoneNumbers_">Pick_User.email-or-name-or-phoneNumbers_</h2>
<!-- backwards compatibility -->
<a id="schemapick_user.email-or-name-or-phonenumbers_"></a>
<a id="schema_Pick_User.email-or-name-or-phoneNumbers_"></a>
<a id="tocSpick_user.email-or-name-or-phonenumbers_"></a>
<a id="tocspick_user.email-or-name-or-phonenumbers_"></a>

```json
{
  "email": "string",
  "name": "string",
  "phoneNumbers": [
    "string"
  ]
}

```

From T, pick a set of properties whose keys are in the union K

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|name|string|true|none|none|
|phoneNumbers|[string]|true|none|none|

<h2 id="tocS_UserCreationParams">UserCreationParams</h2>
<!-- backwards compatibility -->
<a id="schemausercreationparams"></a>
<a id="schema_UserCreationParams"></a>
<a id="tocSusercreationparams"></a>
<a id="tocsusercreationparams"></a>

```json
{
  "email": "string",
  "name": "string",
  "phoneNumbers": [
    "string"
  ]
}

```

### Properties

*None*

