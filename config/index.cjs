/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3daadea022a362b2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8e5911e4854245dbb7fd452a4a95a317',

  PROVINCE: '广东',
  CITY: '广州',
  
    // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,
  },
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '啤先生',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ow_SK5lpRQj_inrEwYqSyC94QR5o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'TnCzU9yqs5_Zh2HXS68uz_UUwaVPWD2_aknPCKxM2iw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-10',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '啤啤', year: '2000', date: '10-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '01-30',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-02-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'TnCzU9yqs5_Zh2HXS68uz_UUwaVPWD2_aknPCKxM2iw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ow_SK5g4riurIZDmJJM0qIWFHU-k',
    }
  ],

}

module.exports = USER_CONFIG

