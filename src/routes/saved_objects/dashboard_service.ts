import { Dashboard_13_2_0 } from './saved_object_types/dashboard';

const exampleDashboard: any = {
  "attributes": {
    "title": "Open API Testing - Dashboard",
    "hits": 0,
    "description": "",
    "panelsJSON": "[{\"col\":5,\"id\":\"visualization:860098be-c598-495a-8f44-abe0d9139f64\",\"panelIndex\":2,\"row\":1,\"size_x\":6,\"size_y\":2,\"type\":\"visualization\",\"title\":\"Companies by Foundation Year\"},{\"col\":11,\"id\":\"visualization:621a7633-0a47-41c4-964e-770e00b31c61\",\"panelIndex\":4,\"row\":1,\"size_x\":2,\"size_y\":5,\"type\":\"visualization\",\"title\":\"Companies by Country\"},{\"col\":1,\"id\":\"visualization:5ce25dd5-fa19-42c7-8f52-ad85c80a3018\",\"panelIndex\":5,\"row\":9,\"size_x\":12,\"size_y\":5,\"type\":\"visualization\",\"title\":\"Companies Table\"},{\"size_x\":6,\"size_y\":3,\"panelIndex\":9,\"type\":\"visualization\",\"id\":\"visualization:8483cc8b-3f9e-4860-86ba-108f4f71b241\",\"col\":7,\"row\":6,\"title\":\"Total amounts of employees per top sector/country\"},{\"size_x\":10,\"size_y\":3,\"panelIndex\":11,\"type\":\"visualization\",\"id\":\"visualization:f667adf9-ed79-41fb-b41b-4defaa9fc5b9\",\"col\":1,\"row\":3,\"title\":\"Map of Companies (enhanced)\"},{\"size_x\":6,\"size_y\":3,\"panelIndex\":12,\"type\":\"visualization\",\"id\":\"visualization:6e688f5e-adba-4d65-a2cb-ba8cbba63d4d\"},{\"size_x\":6,\"size_y\":3,\"panelIndex\":13,\"type\":\"visualization\",\"id\":\"visualization:f9e1816f-0785-4866-87e4-774538b67195\"},{\"size_x\":6,\"size_y\":3,\"panelIndex\":14,\"type\":\"visualization\",\"id\":\"visualization:860098be-c598-495a-8f44-abe0d9139f64\"}]",
    "optionsJSON": "{\"darkTheme\":false,\"showTimePicker\":true,\"useFlexLayout\":true}",
    "uiStateJSON": "{\"P-4\":{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}},\"P-2\":{\"vis\":{\"legendOpen\":false}},\"P-9\":{\"vis\":{\"defaultColors\":{\"0 - 100,708\":\"rgb(255,255,204)\",\"100,708 - 201,415\":\"rgb(255,241,170)\",\"201,415 - 302,123\":\"rgb(254,225,135)\",\"302,123 - 402,830\":\"rgb(254,201,101)\",\"402,830 - 503,537\":\"rgb(254,171,73)\",\"503,537 - 604,245\":\"rgb(253,141,60)\",\"604,245 - 704,952\":\"rgb(252,91,46)\",\"704,952 - 805,660\":\"rgb(237,47,34)\",\"805,660 - 906,367\":\"rgb(212,16,32)\",\"906,367 - 1,007,074\":\"rgb(176,0,38)\"}}},\"P-11\":{\"mapCenter\":[0,0],\"mapZoom\":2,\"Aggregation\":true},\"expandedPanelIndex\":null}",
    "timeRestore": true,
    "flexLayoutJSON": "{\"root\":{\"type\":\"row\",\"content\":[{\"type\":\"column\",\"content\":[{\"type\":\"stack\",\"content\":[{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:f9e1816f-0785-4866-87e4-774538b67195\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Company Wordcloud\",\"componentType\":\"visualization\",\"componentState\":{\"size_x\":6,\"size_y\":3,\"panelIndex\":13,\"type\":\"visualization\",\"id\":\"visualization:f9e1816f-0785-4866-87e4-774538b67195\"}},{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:f667adf9-ed79-41fb-b41b-4defaa9fc5b9\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Map of Companies (enhanced)\",\"componentType\":\"visualization\",\"componentState\":{\"size_x\":10,\"size_y\":3,\"panelIndex\":11,\"type\":\"visualization\",\"id\":\"visualization:f667adf9-ed79-41fb-b41b-4defaa9fc5b9\",\"col\":1,\"row\":3,\"title\":\"Map of Companies (enhanced)\"}},{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:6e688f5e-adba-4d65-a2cb-ba8cbba63d4d\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Relational Navigator\",\"componentType\":\"visualization\",\"componentState\":{\"size_x\":6,\"size_y\":3,\"panelIndex\":12,\"type\":\"visualization\",\"id\":\"visualization:6e688f5e-adba-4d65-a2cb-ba8cbba63d4d\"}},{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:8483cc8b-3f9e-4860-86ba-108f4f71b241\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Total amounts of employees per top sector/country\",\"componentType\":\"visualization\",\"componentState\":{\"size_x\":6,\"size_y\":3,\"panelIndex\":9,\"type\":\"visualization\",\"id\":\"visualization:8483cc8b-3f9e-4860-86ba-108f4f71b241\",\"col\":7,\"row\":6,\"title\":\"Total amounts of employees per top sector/country\"}}],\"width\":40.87426768814781,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"stack:54682210-ae0a-11ed-a0eb-6da5418ebcb7\",\"isClosable\":true,\"maximised\":false,\"activeItemIndex\":0},{\"type\":\"stack\",\"content\":[{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:860098be-c598-495a-8f44-abe0d9139f64\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Companies by Foundation Year\",\"componentType\":\"visualization\",\"componentState\":{\"col\":5,\"id\":\"visualization:860098be-c598-495a-8f44-abe0d9139f64\",\"panelIndex\":2,\"row\":1,\"size_x\":6,\"size_y\":2,\"type\":\"visualization\",\"title\":\"Companies by Foundation Year\"}},{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:5ce25dd5-fa19-42c7-8f52-ad85c80a3018\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Companies Table\",\"componentType\":\"visualization\",\"componentState\":{\"col\":1,\"id\":\"visualization:5ce25dd5-fa19-42c7-8f52-ad85c80a3018\",\"panelIndex\":5,\"row\":9,\"size_x\":12,\"size_y\":5,\"type\":\"visualization\",\"title\":\"Companies Table\"}}],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"stack:54689740-ae0a-11ed-a0eb-6da5418ebcb7\",\"isClosable\":true,\"maximised\":false,\"activeItemIndex\":1}],\"width\":40.87426768814781,\"minWidth\":40.87426768814781,\"height\":50,\"minHeight\":50,\"id\":\"\",\"isClosable\":true},{\"type\":\"stack\",\"content\":[{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:621a7633-0a47-41c4-964e-770e00b31c61\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Companies by Country\",\"componentType\":\"visualization\",\"componentState\":{\"col\":11,\"id\":\"visualization:621a7633-0a47-41c4-964e-770e00b31c61\",\"panelIndex\":4,\"row\":1,\"size_x\":2,\"size_y\":5,\"type\":\"visualization\",\"title\":\"Companies by Country\"}},{\"type\":\"component\",\"content\":[],\"width\":50,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"visualization:860098be-c598-495a-8f44-abe0d9139f64\",\"maximised\":false,\"isClosable\":true,\"reorderEnabled\":true,\"title\":\"Companies by Foundation Year\",\"componentType\":\"visualization\",\"componentState\":{\"size_x\":6,\"size_y\":3,\"panelIndex\":14,\"type\":\"visualization\",\"id\":\"visualization:860098be-c598-495a-8f44-abe0d9139f64\"}}],\"width\":59.12573231185219,\"minWidth\":0,\"height\":50,\"minHeight\":0,\"id\":\"stack:5468be50-ae0a-11ed-a0eb-6da5418ebcb7\",\"isClosable\":true,\"maximised\":false,\"activeItemIndex\":0}],\"width\":50,\"minWidth\":50,\"height\":50,\"minHeight\":50,\"id\":\"\",\"isClosable\":true},\"openPopouts\":[],\"settings\":{\"constrainDragToContainer\":true,\"reorderEnabled\":true,\"popoutWholeStack\":false,\"blockedPopoutsThrowError\":true,\"closePopoutsOnUnload\":true,\"responsiveMode\":\"none\",\"tabOverlapAllowance\":0,\"reorderOnTabMenuClick\":true,\"tabControlOffset\":10,\"popInOnClose\":false},\"dimensions\":{\"borderWidth\":5,\"borderGrabWidth\":5,\"minItemHeight\":10,\"minItemWidth\":10,\"headerHeight\":24,\"dragProxyWidth\":300,\"dragProxyHeight\":200},\"header\":{\"show\":\"top\",\"popout\":false,\"dock\":\"dock\",\"close\":\"close\",\"maximise\":\"maximise\",\"minimise\":\"minimise\",\"tabDropdown\":\"additional tabs\"},\"resolved\":true}",
    "timeMode": "relative",
    "timeTo": "now",
    "timeFrom": "now-150y",
    "refreshInterval": {
        "display": "Off",
        "pause": false,
        "value": 0
    },
    "coatJSON": "{\"datamodelType\":\"SINGLE_SEARCH\",\"items\":[{\"id\":\"40409e12-95fa-11e9-930a-4be260be8b6f\",\"type\":\"node\",\"d\":{\"isRoot\":true,\"entity\":{\"id\":\"search:5aae8ddd-d77e-476e-98ec-60bfd58dee9e\",\"useGlobalTimeFilter\":true}},\"x\":300,\"y\":150}],\"viewSettings\":{\"width\":1107,\"height\":400,\"zoom\":1.2,\"offsetX\":600,\"offsetY\":340}}",
    "scriptIds": [],
    "kibanaSavedObjectMeta": {
        "searchSourceJSON": "{\"filter\":[],\"highlightAll\":true,\"version\":true,\"query\":{\"match_all\":{}}}"
    },
    "version": "14.0.0",
  },
  "type": "dashboard",
  "version": "WzE4NjEsMjld"
};

export class DashboardService {
  public create(dashboard: Dashboard_13_2_0): Dashboard_13_2_0 {
    return dashboard;
  }
}
