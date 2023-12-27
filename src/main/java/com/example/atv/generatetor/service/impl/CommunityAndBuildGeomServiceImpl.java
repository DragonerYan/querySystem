package com.example.atv.generatetor.service.impl;

import com.example.atv.config.datasource.DataSourceContextHolder;
import com.example.atv.config.datasource.DataSourceSet;
import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.SearchParams;
import com.example.atv.generatetor.mapper.CommunityAndBuildGeomMapper;
import com.example.atv.generatetor.service.CommunityAndBuildGeomService;
import net.sf.json.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @ProjectName: querySystem
 * @ClassName: com.example.atv.generatetor.service.impl.CommunityAndBuildGeomServiceImpl
 * @Description:
 * @Author: ZHANG MIAO
 * @Date: 2023/12/19 16:48
 **/
@Service
public class CommunityAndBuildGeomServiceImpl implements CommunityAndBuildGeomService {
    @Autowired
    CommunityAndBuildGeomMapper communityAndBuildGeomMapper;

    @Override
//    @DataSourceSet("slave")
    public Result selectAllCommunityGeom(SearchParams searchParams) {
        //手动设置数据源
        DataSourceContextHolder.setDataSource("slave");

        List<JSONObject> communityList = communityAndBuildGeomMapper.selectAllCommunityGeom(searchParams);
        if (communityList.size() == 0)
            return Result.success("数据为空", null);

        List<JSONObject> countyGeomInfoList =
                communityAndBuildGeomMapper.selectAllCountyGeom(searchParams.getProvince(), searchParams.getCity());
        int max = 0;
        for (JSONObject countyGeomInfo : countyGeomInfoList) {
            List temp = new ArrayList();

            for (JSONObject communityJson : communityList) {

                if (countyGeomInfo.get("county").equals(communityJson.get("county"))) {
                    temp.add(communityJson);
                }
            }
            countyGeomInfo.put("communityInfoList", temp);
            max = max >= temp.size() ? max : temp.size();
            countyGeomInfo.put("countNum", temp.size());
        }
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("data", countyGeomInfoList);
        List<Object> table = new ArrayList<>();
        NumberFormat format = NumberFormat.getNumberInstance();
        format.setMaximumFractionDigits(2);
        table.add(Double.parseDouble(format.format(max * 0.2)));
        table.add(Double.parseDouble(format.format(max * 0.4)));
        table.add(Double.parseDouble(format.format(max * 0.6)));
        table.add(Double.parseDouble(format.format(max * 0.8)));
        table.add(max);
        resultMap.put("table", table);
        return Result.success(resultMap);
    }

    @Override
    @DataSourceSet("master")
    public Result communityIndicatorDiagnosisGeom(SearchParams searchParams) {
        Result result = null;
        List<String> communityIndicatorIds = searchParams.getCommunityIndicatorIds();
        for (String indicatorId : communityIndicatorIds) {
            List<Map<String, Object>> questionCommuntiyList = null;
            switch (indicatorId) {
                case "3.1.1":
                    //获取问题社区清单
                    questionCommuntiyList = communityAndBuildGeomMapper.communityIndicator_311(searchParams);

                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);
                    break;
                case "3.1.2":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_312(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);
                    break;
                case "3.1.3":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_313(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);
                    break;
                case "3.1.4":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_314(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);
                    break;
                case "3.1.5":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_315(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);
                    break;
                case "3.1.6":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_316(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);
                    break;
                case "3.2.7":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_327(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);

                    break;
                case "3.2.8":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_328(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);
                    break;
                case "3.2.9":
                    questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_329(searchParams);
                    result = dataFormatInfo_community(searchParams, questionCommuntiyList, result, indicatorId);

                    break;
                default:
                    break;
            }
        }
        return result;
    }

    /**
     * 通用社区指标诊断地图信息战术数据处理方法
     *
     * @param searchParams
     * @param result
     * @return
     */
    private Result dataFormatInfo_community(SearchParams searchParams, List<Map<String, Object>> questionCommuntiyList,
                                            Result result, String indicatorId) {
        List<String> communityIds = new ArrayList();
        questionCommuntiyList.forEach(qc -> {
            communityIds.add(qc.get("communityId").toString());
        });
        searchParams.setCommunitiesIds(communityIds);
        DataSourceContextHolder.setDataSource("slave");
        //获取问题社区边界和区县边界
        List<JSONObject> communityList = communityAndBuildGeomMapper.selectAllCommunityGeom(searchParams);

        List<JSONObject> countyGeomInfoList =
                communityAndBuildGeomMapper.selectAllCountyGeom(searchParams.getProvince(),
                        searchParams.getCity());
        //以下2个指标不是求的个数
        double indicator_value_max = 0;
        if (!StringUtils.isBlank(indicatorId) && indicatorId.equals("3.2.8")
//                || indicatorId.equals("3.2.7")
        ) {
            questionCommuntiyList.forEach(qc -> {
                communityList.forEach(c -> {
                    if (c.getString("community_id").equals(qc.get("communityId"))) {
                        c.put("indicator_value", qc.get("indicator_value"));
                    }
                });
                countyGeomInfoList.forEach(cg -> {
                    if (cg.getString("county").equals(qc.get("county").toString())) {
                        if (cg.containsKey("indicator_value")) {
                            cg.put("indicator_value", cg.getDouble("indicator_value") + Double.parseDouble(qc.get(
                                    "indicator_value").toString()));
                        } else {
                            cg.put("indicator_value", Double.parseDouble(qc.get("indicator_value").toString()));
                        }
                    }

                });
            });
        }

        double max = 0;
        for (JSONObject countyGeomInfo : countyGeomInfoList) {
            List temp = new ArrayList();
            for (JSONObject communityJson : communityList) {
                if (countyGeomInfo.get("county").equals(communityJson.get("county"))) {
                    temp.add(communityJson);
                }
            }
            double tempNum = 0;
            for (Map questionCommuntiy : questionCommuntiyList) {
                if (countyGeomInfo.get("county").equals(questionCommuntiy.get("county"))) {
                    tempNum++;
                }
            }
            countyGeomInfo.put("communityInfoList", temp);
            if (!StringUtils.isBlank(indicatorId) && indicatorId.equals("3.2.8")
//                    || indicatorId.equals("3.2.7")
            ) {
                if (countyGeomInfo.containsKey("indicator_value")) {
                    max = max >= Double.parseDouble(countyGeomInfo.getString("indicator_value").toString()) ? max :
                            Double.parseDouble(countyGeomInfo.getString("indicator_value").toString());
                    countyGeomInfo.put("countNum", countyGeomInfo.getDouble("indicator_value"));
                } else {
                    countyGeomInfo.put("countNum", 0);
                }
            } else {
                max = max >= tempNum ? max : tempNum;
                countyGeomInfo.put("countNum", tempNum);
            }
        }
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("data", countyGeomInfoList);
        List<Object> table = new ArrayList<>();
        NumberFormat format = NumberFormat.getNumberInstance();
        format.setMaximumFractionDigits(2);
        table.add(Double.parseDouble(format.format(max * 0.2)));
        table.add(Double.parseDouble(format.format(max * 0.4)));
        table.add(Double.parseDouble(format.format(max * 0.6)));
        table.add(Double.parseDouble(format.format(max * 0.8)));
        table.add(max);
        resultMap.put("table", table);
        result = Result.success(resultMap);
        DataSourceContextHolder.removeDataSource();
        return result;
    }

    @Override
    @DataSourceSet("master")
    public Result buildIndicatorDiagnosis(SearchParams searchParams) {
        List<String> buildIndicatorIds = searchParams.getBuildIndicatorIds();
        Result result = null;
        for (String indicator : buildIndicatorIds) {
            //获取所有问题楼栋的坐标等信息数据
            List<JSONObject> buildGeomInfoList =
                    communityAndBuildGeomMapper.buildIndicatorDiagnosis(searchParams.getProvince(),
                            searchParams.getCity(), indicator, searchParams.getYear());
            List<String> communityIds = new ArrayList<>();
            buildGeomInfoList.forEach(bg -> {
                communityIds.add(bg.getString("community_id"));
            });
            searchParams.setCommunitiesIds(communityIds);
            //通过问题楼栋所在的社区id获取社区信息
            result = dataFormatInfo_build(buildGeomInfoList, searchParams, result);
        }
        return result;
    }

    @Override
    public Result buildGeomInfo(List<Map> buildSimpleInfo, String year) {
        Result result = null;
        if (buildSimpleInfo == null || buildSimpleInfo.size() == 0)
            return Result.fail("查询楼栋为空，无数据");
        DataSourceContextHolder.setDataSource("master");
        List<JSONObject> buildGeomInfoList = communityAndBuildGeomMapper.buildGeomInfo(buildSimpleInfo, year);
        List<String> communitIdList =
                buildGeomInfoList.stream().map(build -> build.getString("community_id")).collect(Collectors.toList());
        SearchParams searchParams = new SearchParams();
        searchParams.setCommunitiesIds(communitIdList);

        result = dataFormatInfo_build(buildGeomInfoList, searchParams, result);
        DataSourceContextHolder.removeDataSource();
        return result;
    }

    private Result dataFormatInfo_build(List<JSONObject> buildGeomInfoList, SearchParams searchParams, Result result) {
        DataSourceContextHolder.setDataSource("slave");
        if (buildGeomInfoList == null || buildGeomInfoList.size() == 0)
            return Result.success("数据为空", null);
        List<JSONObject> communityGeomList = communityAndBuildGeomMapper.selectAllCommunityGeom(searchParams);
        //每个社区的问题楼栋，及数量，封装
        double max = 0;
        for (JSONObject communityJson : communityGeomList) {
            List<JSONObject> temp = new ArrayList<>();
            Iterator<JSONObject> buildGeomInfoIterator = buildGeomInfoList.iterator();
            while (buildGeomInfoIterator.hasNext()) {
                JSONObject buildJson = buildGeomInfoIterator.next();
                if (buildJson.getString("community_id").equals(communityJson.getString("community_id"))) {
                    temp.add(buildJson);
                    buildGeomInfoIterator.remove();
                }
            }
            communityJson.put("buildGeomInfoList", temp);
            communityJson.put("countNum", temp.size());
            max = max >= temp.size() ? max : temp.size();
        }
        Map<String, Object> resultMap = new HashMap<>();
        //没有社区匹配的楼栋点位
        if (buildGeomInfoList.size() > 0) {
            JSONObject communityJsonNull = new JSONObject();
            communityJsonNull.put("street", "其他");
            communityJsonNull.put("community_name", "其他");
            communityJsonNull.put("community_id", "其他");
            communityJsonNull.put("county", "其他");
            communityJsonNull.put("community_geom", "");
            communityJsonNull.put("buildGeomInfoList", buildGeomInfoList);
            communityGeomList.add(communityJsonNull);
        }
        resultMap.put("data", communityGeomList);
        result = Result.success(resultMap);
        List<Object> table = new ArrayList<>();
        NumberFormat format = NumberFormat.getNumberInstance();
        format.setMaximumFractionDigits(2);
        table.add(Double.parseDouble(format.format(max * 0.2)));
        table.add(Double.parseDouble(format.format(max * 0.4)));
        table.add(Double.parseDouble(format.format(max * 0.6)));
        table.add(Double.parseDouble(format.format(max * 0.8)));
        table.add(max);
        resultMap.put("table", table);
        DataSourceContextHolder.removeDataSource();
        return result;
    }

    /**
     * 辅助图层
     *
     * @param province
     * @return
     */
    @Override
    @DataSourceSet("slave")
    public Result selectAuxiliaryLayer(String province, String city) {
        List<Map<String, Object>> maps = communityAndBuildGeomMapper.selectAuxiliaryLayer(province, city);
        return Result.success(maps);
    }

    @Override
    @DataSourceSet("slave")
    public Result getCountyCenterPoint(String province, String city) {
        List<JSONObject> countyCenterPoint = communityAndBuildGeomMapper.getCountyCenterPoint(province, city);
        return Result.success(countyCenterPoint);
    }
}
