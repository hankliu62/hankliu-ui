---
order: 2
title: 基础用法1
---

直接引入组件，并传入相关参数
在上面设置组件 props,打开控制台，点击重新渲染按钮查看效果

```jsx
import { useState } from "react";
import { SimpleMenuSelect } from "@hankliu/hankliu-ui";

const data = [
  {
    "value": 110001,
    "title": "Communication",
    "label": null,
    "children": [
      {
        "value": 110002,
        "title": "CDS",
        "label": null,
        "children": [
          {
            "value": 110003,
            "title": "Content",
            "label": null,
            "children": []
          },
          {
            "value": 110004,
            "title": "Digital/Social Campaign",
            "label": null,
            "children": [
              {
                "value": 110078,
                "title": "非视频",
                "label": null,
                "children": []
              },
              {
                "value": 110079,
                "title": "OV",
                "label": null,
                "children": []
              },
              {
                "value": 110080,
                "title": "App Opening 开屏",
                "label": null,
                "children": []
              },
              {
                "value": 110081,
                "title": "Newsfeed 信息流",
                "label": null,
                "children": []
              },
              {
                "value": 110082,
                "title": "其他类型视频",
                "label": null,
                "children": []
              }
            ]
          },
          {
            "value": 110005,
            "title": "Social 社交素材",
            "label": null,
            "children": [
              {
                "value": 110108,
                "title": "Short Video 短视频",
                "label": null,
                "children": []
              },
              {
                "value": 110007,
                "title": "Seeding Article种草文",
                "label": null,
                "children": []
              },
              {
                "value": 110008,
                "title": "Image图片",
                "label": null,
                "children": []
              },
              {
                "value": 110109,
                "title": "Product demo 实验",
                "label": null,
                "children": []
              },
              {
                "value": 110110,
                "title": "Talking material 话术",
                "label": null,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "value": 110009,
        "title": "Performance Media活动素材",
        "label": null,
        "children": [
          {
            "value": 110010,
            "title": "站内活动",
            "label": null,
            "children": [
              {
                "value": 110011,
                "title": "Ali投放素材",
                "label": null,
                "children": []
              },
              {
                "value": 110012,
                "title": "JD投放素材",
                "label": null,
                "children": []
              },
              {
                "value": 110013,
                "title": "其他平台投放素材",
                "label": null,
                "children": []
              }
            ]
          },
          {
            "value": 110014,
            "title": "站外活动",
            "label": null,
            "children": [
              {
                "value": 110015,
                "title": "Banner",
                "label": null,
                "children": []
              },
              {
                "value": 110016,
                "title": "Newsfeed 信息流",
                "label": null,
                "children": []
              },
              {
                "value": 110017,
                "title": "App Opening 开屏",
                "label": null,
                "children": []
              }
            ]
          },
          {
            "value": 110019,
            "title": "Campaign （促销活动）",
            "label": null,
            "children": [
              {
                "value": 110020,
                "title": "Offline大卖场",
                "label": null,
                "children": []
              },
              {
                "value": 110021,
                "title": "Banner首焦图",
                "label": null,
                "children": []
              },
              {
                "value": 110111,
                "title": "Campaign Page 活动落地页",
                "label": null,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "value": 110023,
        "title": "MSP",
        "label": null,
        "children": [
          {
            "value": 110024,
            "title": "OV-原片",
            "label": null,
            "children": []
          },
          {
            "value": 110025,
            "title": "OV-套框出街版",
            "label": null,
            "children": []
          },
          {
            "value": 110026,
            "title": "App Opening 开屏",
            "label": null,
            "children": []
          },
          {
            "value": 110027,
            "title": "Newsfeed 信息流",
            "label": null,
            "children": []
          },
          {
            "value": 110028,
            "title": "TVC",
            "label": null,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "value": 110098,
    "title": "商品上架素材 Product Assets",
    "label": null,
    "children": [
      {
        "value": 110037,
        "title": "白底图 PackShot",
        "label": null,
        "children": []
      },
      {
        "value": 110038,
        "title": "美化图 Glorified images",
        "label": null,
        "children": []
      },
      {
        "value": 110039,
        "title": "特别要求图 Special Images",
        "label": null,
        "children": []
      },
      {
        "value": 110040,
        "title": "详情页 Content Page",
        "label": null,
        "children": []
      },
      {
        "value": 110042,
        "title": "主图视频 Video-Glorified Images",
        "label": null,
        "children": []
      },
      {
        "value": 110043,
        "title": "详情页视频 Video-Content Page",
        "label": null,
        "children": []
      },
      {
        "value": 110035,
        "title": "黄金大礼包 Golden Box",
        "label": null,
        "children": []
      }
    ]
  },
  {
    "value": 110099,
    "title": "社群素材",
    "label": null,
    "children": [
      {
        "value": 110103,
        "title": "社群视频",
        "label": null,
        "children": []
      },
      {
        "value": 110104,
        "title": "社群图文",
        "label": null,
        "children": []
      }
    ]
  },
  {
    "value": 110100,
    "title": "内容种草 Social Content",
    "label": null,
    "children": [
      {
        "value": 110006,
        "title": "短视频",
        "label": null,
        "children": [
          {
            "value": 110113,
            "title": "阿里满天星视频",
            "label": null,
            "children": []
          },
          {
            "value": 110114,
            "title": "红人学院视频",
            "label": null,
            "children": []
          },
          {
            "value": 110115,
            "title": "其他视频",
            "label": null,
            "children": []
          }
        ]
      },
      {
        "value": 110095,
        "title": "实验视频 Product demo",
        "label": null,
        "children": []
      },
      {
        "value": 110105,
        "title": "种草图文 Seeding Article",
        "label": null,
        "children": []
      },
      {
        "value": 110096,
        "title": "卖点话术 Talking material",
        "label": null,
        "children": []
      }
    ]
  },
  {
    "value": 110101,
    "title": "投放活动素材",
    "label": null,
    "children": [
      {
        "value": 110106,
        "title": "Banner",
        "label": null,
        "children": []
      },
      {
        "value": 110107,
        "title": "首焦图",
        "label": null,
        "children": []
      },
      {
        "value": 110112,
        "title": "KV",
        "label": null,
        "children": []
      },
      {
        "value": 110022,
        "title": "活动落地页 Landing Page",
        "label": null,
        "children": []
      },
      {
        "value": 110117,
        "title": "开机屏霸屏",
        "label": null,
        "children": []
      },
      {
        "value": 110118,
        "title": "其他",
        "label": null,
        "children": []
      }
    ]
  },
  {
    "value": 110097,
    "title": "质检报告",
    "label": null,
    "children": []
  },
  {
    "value": 110077,
    "title": "AI模板素材",
    "label": null,
    "children": []
  },
  {
    "value": 110102,
    "title": "设计源素材",
    "label": null,
    "children": [
      {
        "value": 110031,
        "title": "Model",
        "label": null,
        "children": []
      },
      {
        "value": 110032,
        "title": "3D",
        "label": null,
        "children": []
      },
      {
        "value": 110033,
        "title": "Details",
        "label": null,
        "children": []
      }
    ]
  },
  {
    "value": 110044,
    "title": "PR",
    "label": null,
    "children": [
      {
        "value": 110045,
        "title": "公司介绍",
        "label": null,
        "children": []
      },
      {
        "value": 110046,
        "title": "高层介绍",
        "label": null,
        "children": []
      },
      {
        "value": 110047,
        "title": "品牌活动",
        "label": null,
        "children": []
      },
      {
        "value": 110048,
        "title": "供应链",
        "label": null,
        "children": []
      },
      {
        "value": 110049,
        "title": "研发",
        "label": null,
        "children": []
      },
      {
        "value": 110050,
        "title": "奖项",
        "label": null,
        "children": []
      },
      {
        "value": 110051,
        "title": "公益",
        "label": null,
        "children": [
          {
            "value": 110052,
            "title": "员工志愿者活动",
            "label": null,
            "children": []
          },
          {
            "value": 110053,
            "title": "希望厨房",
            "label": null,
            "children": []
          },
          {
            "value": 110054,
            "title": "希望工程教师培训项目",
            "label": null,
            "children": []
          },
          {
            "value": 110055,
            "title": "与品牌相关公益",
            "label": null,
            "children": []
          }
        ]
      },
      {
        "value": 110056,
        "title": "可持续发展计划",
        "label": null,
        "children": [
          {
            "value": 110057,
            "title": "年度报告",
            "label": null,
            "children": []
          },
          {
            "value": 110058,
            "title": "可持续茶园",
            "label": null,
            "children": []
          },
          {
            "value": 110059,
            "title": "PCR",
            "label": null,
            "children": []
          },
          {
            "value": 110060,
            "title": "力士绿哈达",
            "label": null,
            "children": []
          },
          {
            "value": 110061,
            "title": "多芬自信养成计划",
            "label": null,
            "children": []
          },
          {
            "value": 110062,
            "title": "厨师培训",
            "label": null,
            "children": []
          }
        ]
      },
      {
        "value": 110063,
        "title": "单独项目",
        "label": null,
        "children": [
          {
            "value": 110064,
            "title": "进博会CIIE",
            "label": null,
            "children": []
          },
          {
            "value": 110065,
            "title": "Townhall",
            "label": null,
            "children": []
          },
          {
            "value": 110066,
            "title": "Family Day",
            "label": null,
            "children": []
          },
          {
            "value": 110067,
            "title": "Leadership Forum",
            "label": null,
            "children": []
          },
          {
            "value": 110068,
            "title": "CPAN",
            "label": null,
            "children": []
          },
          {
            "value": 110069,
            "title": "Foundry",
            "label": null,
            "children": []
          },
          {
            "value": 110070,
            "title": "青年创业大奖YEA",
            "label": null,
            "children": []
          },
          {
            "value": 110071,
            "title": "指南针奖Compass Award",
            "label": null,
            "children": []
          },
          {
            "value": 110072,
            "title": "世界经济论坛WEF",
            "label": null,
            "children": []
          },
          {
            "value": 110073,
            "title": "发展中国论坛CDF",
            "label": null,
            "children": []
          }
        ]
      },
      {
        "value": 110074,
        "title": "公司新闻政策相关",
        "label": null,
        "children": []
      },
      {
        "value": 110075,
        "title": "其他",
        "label": null,
        "children": []
      }
    ]
  },
  {
    "value": 110076,
    "title": "UniPurpose",
    "label": null,
    "children": [
      {
        "value": 110090,
        "title": "Product & Package 产品和包装相关",
        "label": null,
        "children": []
      },
      {
        "value": 110091,
        "title": "Brand Campaign 品牌营销相关",
        "label": null,
        "children": []
      },
      {
        "value": 110092,
        "title": "Company PR 公司集团相关",
        "label": null,
        "children": []
      },
      {
        "value": 110093,
        "title": "NGO Activation 非营利性组织相关",
        "label": null,
        "children": []
      }
    ]
  },
  {
    "value": 110116,
    "title": "其他",
    "label": null,
    "children": []
  }
]

function walkTree (tree) {
  tree.forEach(node => {
    if(!node.children || node.children.length === 0 ) {
      node.checkable = true
    } else {
      node.checkable = false
      walkTree(node.children)
    }
  })
}
walkTree(data)
function Demo() {
  const [value, setValue] = useState([]);
  return (
    <>
      <SimpleMenuSelect
        placeholder="请选择"
        options={data}
        value={value}
        onChange={(value, title) => {
          setValue(value)
          console.log(value,  title)
        }}
        dropdownMatchSelectWidth={false}
        showChildSelectedCount
        dropdownContentStyle={{
          height: 305
        }}
      />
    </>
  );
}

ReactDOM.render(<Demo />, mountNode);
```

<style>
  .mb-20{
    margin-bottom: 20px
  }
</style>
