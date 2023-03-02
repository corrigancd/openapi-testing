import openapi_client
from openapi_client.apis.tags import default_api
from openapi_client.model.pick_user_email_or_name_or_phone_numbers import PickUserEmailOrNameOrPhoneNumbers
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)

    # example passing only required values which don't have defaults set
    body = PickUserEmailOrNameOrPhoneNumbers(
        email="email_example",
        name="name_example",
        phoneNumbers=[
            "phone_numbers_example"
        ],
    )
    try:
        api_response = api_instance.create_user(
            body=body,
        )
        pprint(api_response.body)
    except openapi_client.ApiException as e:
        print("Exception when calling DefaultApi->create_user: %s\n" % e)