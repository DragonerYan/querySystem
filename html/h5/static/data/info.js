export const houerType= [
	{
		value:"1",
		text:"商品房"
	},
	{
		value:"2",
		text:"保障房"
	},
	{
		value:"3",
		text:"历史文化街区"
	},
	{
		value:"0",
		text:"其他"
	},
	]
	const currentYear = new Date().getFullYear();
export const years = Array.from({ length: 100 }, (_, index) => currentYear - index+'');

export const remodels =[
	{
		value:"1",
		text:"未开展"
	},
	{
		value:"2",
		text:"进行中"
	},
	{
		value:"3",
		text:"已完成"
	},
	
]
export const managements=[
	{
		value:"0",
		text:"有"
	},
	{
		value:"1",
		text:"无"
	},
	
]

export const selectArr=[
	{
		value:"1",
		text:"是"
	},
	{
		value:"0",
		text:"否"
	},
	
]

export const healthyArr=[
	{
		value:"3.1.1.3.1",
		text:"生活照料"
	},
	{
		value:"3.1.1.3.2",
		text:"康复护理"
	},
	{
		value:"3.1.1.3.3",
		text:"助餐助行"
	},
	{
		value:"3.1.1.3.4",
		text:"上门照护"
	},
	{
		value:"3.1.1.3.5",
		text:"文化娱乐"
	},
	{
		value:"3.1.1.3.6",
		text:"其他"
	},
	
]



export const parking=[
	
	{
		value:"3.1.5.2.1",
		text:"占用消防通道"
	},
	{
		value:"3.1.5.2.2",
		text:"其他"
	},
]
export const energy=[
	
	{
		value:"3.1.6.2.1",
		text:"存在的消防安全隐患"
	},
	{
		value:"3.1.6.2.2",
		text:"其他"
	},
]
export const equipment=[
	
	{
		value:"3.2.7.3.1",
		text:"儿童娱乐"
	},
	{
		value:"3.2.7.3.2",
		text:"老年活动"
	},
	{
		value:"3.2.7.3.3",
		text:"体育健身"
	},
]
export const sidewalk=[
	
	{
		value:"3.2.8.1.1",
		text:"路面破损"
	},
	{
		value:"3.2.8.1.2",
		text:"宽度不足"
	},
	{
		value:"3.2.8.1.3",
		text:"雨后积水"
	},
	{
		value:"3.2.8.1.4",
		text:"铺装不防滑 "
	},
	{
		value:"3.2.8.1.5",
		text:"不能联贯住宅和各类服务设施"
	},
	{
		value:"3.2.8.1.6",
		text:"不符合无障碍设计要求"
	},
	{
		value:"3.2.8.1.7",
		text:"其他"
	},
	
	
]

export const rubbish=[
	
	{
		value:"3.2.9.1.1",
		text:"没有实行垃圾分类制度 "
	},
	{
		value:"3.2.9.1.2",
		text:"未建立分类投放、分类收集、分类运输、分类处理系统  "
	},
	{
		value:"3.2.9.1.3",
		text:"其他"
	},
]

export const property=[
	
	{
		value:"3.3.10.1.1",
		text:"没有实施专业化物业管理"
	},
	{
		value:"3.3.10.1.2",
		text:"党建引领要求落实不到位"
	},
	{
		value:"3.3.10.1.3",
		text:"没有按照物业服务合同约定对房屋及配套设施设备进行维修、养护和管理"
	},
	{
		value:"3.3.10.1.4",
		text:"不能及时处理居民报修、求助、投诉等各类信息"
	},
	{
		value:"3.3.10.1.5",
		text:"秩序维护和环境卫生服务不到位"
	},
	{
		value:"3.3.10.1.6",
		text:"其他"
	},
]


export const pwisdom=[
	
	{
		value:"3.3.11.1.1",
		text:"未安装智能信包箱、智能快递柜格口数量不足"
	},
	{
		value:"3.3.11.1.2",
		text:"智能安防设施及系统建设不完善"
	},
	{
		value:"3.3.11.1.3",
		text:"其他"
	},
]
export const hwisdom=[
	{
		value:"3.3.11.2.1",
		text:"智慧社区综合信息平台建设"
	},
	{
		value:"3.3.11.2.2",
		text:"社区政务服务、公共服务等数字生活场景应用"
	},
	{
		value:"3.3.11.2.3",
		text:"智慧电网、水网、气网和热网布局建设"
	},
	{
		value:"3.3.11.2.4",
		text:"智能感知设施建设"
	},
	
	{
		value:"3.3.11.2.5",
		text:"其他"
	},
]



export const allIndicatorValue={
	'3.1.1.3':[...healthyArr],
	'3.1.5.2':[...parking],
	'3.1.6.2':[...energy],
	'3.2.7.3':[...equipment],
	'3.2.8.1':[...sidewalk],
	'3.2.9.1':[...rubbish],
	'3.3.10.1':[...property],
	'3.3.11.1':[...pwisdom],
	'3.3.11.2':[...hwisdom]
}