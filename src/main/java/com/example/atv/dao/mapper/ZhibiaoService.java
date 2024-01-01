package com.example.atv.dao.mapper;

import java.util.List;
import java.util.Map;

public interface ZhibiaoService {
    /*
     * 下面的接口用于计算小区指标计算
     */

    //1，未达标配建的养老服务设施数量
    int compute3_1_1(String city,String reportYear,String communityId);
    //2，未达标配建的婴幼儿照护服务设施数量
    int compute3_1_2(String city,String reportYear,String communityId);
    //3，未达标配建的幼儿园数量
    int compute3_1_3(String city,String reportYear,String communityId);
    //4，小学学位缺口数
    Object compute3_1_4(String city,String reportYear,String communityId);
    //5，停车泊位缺口数
    Object compute3_1_5(String city,String reportYear,String communityId);
    //6，新能源充电桩缺口数
    Object compute3_1_6(String city,String reportYear,String communityId);
    //7，未达标公共活动场地数量
    int compute3_2_7(String city,String reportYear,String communityId);
    //8，不达标步行道长度
    Object compute3_2_8(String city,String reportYear,String communityId);
    //9，未实施生活垃圾分类的小区数量
    Object compute3_2_9(String city,String reportYear,String communityId);


    /*
     * 下面的接口用于计算每个市下面的各个区有问题的社区占整个市中有问题的百分比
     */
    //1，未达标配建的养老服务设施数量
    List<Map<String,Object>> computeCounty3_1_1(String city,String reportYear,String  county);
    //2，未达标配建的婴幼儿照护服务设施数量
    List<Map<String,Object>> computeCounty3_1_2(String city,String reportYear,String county);
    //3，未达标配建的幼儿园数量
    List<Map<String,Object>> computeCounty3_1_3(String city,String reportYear,String county);
    //4，小学学位缺口数
    List<Map<String,Object>> computeCounty3_1_4(String city,String reportYear,String county);
    //5，停车泊位缺口数
    List<Map<String,Object>> computeCounty3_1_5(String city,String reportYear,String county);
    //6，新能源充电桩缺口数
    List<Map<String,Object>> computeCounty3_1_6(String city,String reportYear,String county);
    //7，未达标公共活动场地数量
    List<Map<String,Object>> computeCounty3_2_7(String city,String reportYear,String county);
    //8，不达标步行道长度
    List<Map<String,Object>> computeCounty3_2_8(String city,String reportYear,String county);
    //9，未实施生活垃圾分类的小区数量
    List<Map<String,Object>> computeCounty3_2_9(String city,String reportYear,String county);

    /*
     * 每个区下面的各个街道有问题的社区占整个区中有问题的百分比
     */
    //1，未达标配建的养老服务设施数量
    List<Map<String,Object>> computeStreet3_1_1(String city,String reportYear,String  county);
    //2，未达标配建的婴幼儿照护服务设施数量
    List<Map<String,Object>> computeStreet3_1_2(String city,String reportYear,String county);
    //3，未达标配建的幼儿园数量
    List<Map<String,Object>> computeStreet3_1_3(String city,String reportYear,String county);
    //4，小学学位缺口数
    List<Map<String,Object>> computeStreet3_1_4(String city,String reportYear,String county);
    //5，停车泊位缺口数
    List<Map<String,Object>> computeStreet3_1_5(String city,String reportYear,String county);
    //6，新能源充电桩缺口数
    List<Map<String,Object>> computeStreet3_1_6(String city,String reportYear,String county);
    //7，未达标公共活动场地数量
    List<Map<String,Object>> computeStreet3_2_7(String city,String reportYear,String county);
    //8，不达标步行道长度
    List<Map<String,Object>> computeStreet3_2_8(String city,String reportYear,String county);
    //9，未实施生活垃圾分类的小区数量
    List<Map<String,Object>> computeStreet3_2_9(String city,String reportYear,String county);

    /*
    查询存在问题的社区
     */
    List<Map<String,Object>> problemCommunity(String city,String county,String street,String reportYear,String communityId);

    /*
     * 下面的接口用于查询社区问题清单中详细问题的查询
     */
    Map<String,Object> communityProblemDetail3_1_1(String communityId,String reportYear);

    Map<String,Object> communityProblemDetail3_1_2(String communityId,String reportYear);
    Map<String,Object> communityProblemDetail3_1_3(String communityId,String reportYear);

    Map<String,Object> communityProblemDetail3_1_5(String communityId,String reportYear);
    Map<String,Object> communityProblemDetail3_1_6(String communityId,String reportYear);
    Map<String,Object> communityProblemDetail3_2_7(String communityId,String reportYear);
    Map<String,Object> communityProblemDetail3_2_8(String communityId,String reportYear);
    Map<String,Object> communityProblemDetail3_2_9(String communityId,String reportYear);


    List<Map<String,Object>> problemCourtReal(String city,String county,String street,String communityId,String communityName,
                                                String courtType,String remodel,String management,
                                              String bTime,String eTime,
                                              String bPeople,String ePeople,
                                              String b60People,String e60People,String reportYear);

}
