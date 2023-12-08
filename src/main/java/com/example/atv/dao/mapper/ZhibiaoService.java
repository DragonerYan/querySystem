package com.example.atv.dao.mapper;

import java.util.List;
import java.util.Map;

public interface ZhibiaoService {
    /*
     * 下面的接口用于计算小区指标计算
     */

    //1，未达标配建的养老服务设施数量
    int compute3_1_1(String city,String reportYear);
    //2，未达标配建的婴幼儿照护服务设施数量
    int compute3_1_2(String city,String reportYear);
    //3，未达标配建的幼儿园数量
    int compute3_1_3(String city,String reportYear);
    //4，小学学位缺口数
    Object compute3_1_4(String city,String reportYear);
    //5，停车泊位缺口数
    Object compute3_1_5(String city,String reportYear);
    //6，新能源充电桩缺口数
    Object compute3_1_6(String city,String reportYear);
    //7，未达标公共活动场地数量
    int compute3_2_7(String city,String reportYear);
    //8，不达标步行道长度
    Object compute3_2_8(String city,String reportYear);
    //9，未实施生活垃圾分类的小区数量
    Object compute3_2_9(String city,String reportYear);


}
