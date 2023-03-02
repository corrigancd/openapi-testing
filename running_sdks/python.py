import openapi_client
from pprint import pprint
from openapi_client.apis.tags import default_api
from openapi_client.model.pick_user_email_or_name_or_phone_numbers import PickUserEmailOrNameOrPhoneNumbers
from openapi_client.model.saved_search1320 import SavedSearch1320

from openapi_client.model.user import User

from openapi_client.model.saved_object_versions import SavedObjectVersions
from openapi_client.model.editable_fields_mode import EditableFieldsMode
from openapi_client.model.exclude_enumerate999_enumerate0 import ExcludeEnumerate999Enumerate0
from openapi_client.model.global_search_settings import GlobalSearchSettings
from openapi_client.model.index_pattern_attributes import IndexPatternAttributes
from openapi_client.model.indexing_scope_string import IndexingScopeString
from openapi_client.model.revision_filter_modes import RevisionFilterModes
from openapi_client.model.revision_settings import RevisionSettings
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host="http://localhost:3000",
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration, header_name="Content-Type", header_value="text/html") as api_client:
    # Create an instance of the API class
    api_instance = default_api.DefaultApi(api_client)
    saved_search1320 = SavedSearch1320(
        version="version_example",
        isGlobal=True,
        attributes=dict(
            version=SavedObjectVersions("13.2.0"),
            siren=dict(
                templateScripts=dict(
                    scriptIds=[
                        "script_ids_example"
                    ],
                ),
                globalSearch=GlobalSearchSettings(
                    enabled=True,
                    boost=3.14,
                ),
                highlight=dict(
                    fields="fields_example",
                ),
                revision=RevisionSettings(
                    index="index_example",
                    isEditable=True,
                    primaryKey="primary_key_example",
                    editableFieldsMode=EditableFieldsMode("whitelist"),
                    filteringMode=RevisionFilterModes("filter-by-index-join"),
                    editableFieldsExceptions=['test'],
                    indexingScope=IndexingScopeString("G:S"),
                    copyToFields=dict(),
                ),
                limits=dict(
                    maxJoinCardinalityApplyToTarget=True,
                    maxJoinCardinalityApplyToSource=True,
                    maxJoinCardinalityUnit="max_join_cardinality_unit_example",
                    maxJoinCardinality=3.14,
                    maxJoinCardinalityEnabled=True,
                    maxCardinalityUnit="max_cardinality_unit_example",
                    maxCardinality=3.14,
                    maxCardinalityEnabled=True,
                    maxTimeRangeUnit="max_time_range_unit_example",
                    maxTimeRange=3.14,
                    maxTimeRangeEnabled=True,
                ),
                ui=dict(
                    instanceImageValue="instance_image_value_example",
                    instanceImageType="instance_image_type_example",
                    instanceLabelValue="instance_label_value_example",
                    instanceLabelType="instance_label_type_example",
                    shortDescription="short_description_example",
                    color="color_example",
                    icon="icon_example",
                ),
                samplingScriptId="sampling_script_id_example",
                indexingScope=IndexingScopeString("G:S"),
                parentId="parent_id_example",
            ),
            indexPattern=IndexPatternAttributes(
                error=None,
                fieldFormatMap="field_format_map_example",
                excludeIndices=True,
                sourceFilters="source_filters_example",
                fields="fields_example",
                intervalName="interval_name_example",
                timeFieldName="time_field_name_example",
                pattern="pattern_example",
            ),
            kibanaSavedObjectMeta=dict(
                searchSourceJSON="search_source_json_example",
            ),
            sort="sort_example",
            columns="columns_example",
            hits=ExcludeEnumerate999Enumerate0(0),
            description="description_example",
            title="title_example",
        ),
    )  # SavedSearch1320 |

# content_type

    # try:
    #     api_response = api_instance.call_1320(saved_search1320)
    #     pprint(api_response)
    # except openapi_client.ApiException as e:
    #     print("Exception when calling DefaultApi->call_1320: %s\n" % e)

    try:
        api_response = api_instance.call_1320(
            body=saved_search1320,
            accept_content_types=('application/json', 'text/html'),
            # content_type="application/json; charset=utf-8"
        )
        print('test1')
        pprint(api_response.body)
    except openapi_client.ApiException as e:
        print('test2')
        print("Exception when calling DefaultApi->call_1320: %s\n" % e)


