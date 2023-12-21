package com.example.atv.generatetor.service.impl;

import com.example.atv.config.datasource.DataSourceContextHolder;
import com.example.atv.config.datasource.DataSourceSet;
import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.SearchParams;
import com.example.atv.generatetor.mapper.CommunityAndBuildGeomMapper;
import com.example.atv.generatetor.service.CommunityAndBuildGeomService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.NumberFormat;
import java.util.*;

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
            max = max > temp.size() ? max : temp.size();
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
    public Result communityIndicatorDiagnosisGeom(SearchParams searchParams) {
        Result result = null;
        List<String> communityIndicatorIds = searchParams.getCommunityIndicatorIds();
        for (String indicatorId : communityIndicatorIds) {
            switch (indicatorId) {
                case "3.1.1":
                    //获取问题社区清单
                    List<Map<String, Object>> questionCommuntiyList =
                            communityAndBuildGeomMapper.communityIndicator_311(searchParams);
                    result = DataFormatInfo(searchParams, questionCommuntiyList, result);
                    break;
                case "3.1.2":

                    break;
                case "3.1.3":

                    break;
                case "3.1.4":

                    break;
                case "3.1.5":

                    break;
                case "3.1.6":

                    break;
                case "3.2.7":

                    break;
                case "3.2.8":

                    break;
                case "3.2.9":

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
    private Result DataFormatInfo(SearchParams searchParams, List<Map<String, Object>> questionCommuntiyList,
                                  Result result) {
        List<String> communtiyIds = new ArrayList();
        questionCommuntiyList.forEach(qc -> {
            communtiyIds.add(qc.get("communityId").toString());
        });
        searchParams.setCommunitiesIds(communtiyIds);
        DataSourceContextHolder.setDataSource("slave");
        //获取问题社区边界和区县边界
        List<JSONObject> communityList = communityAndBuildGeomMapper.selectAllCommunityGeom(searchParams);
        List<JSONObject> countyGeomInfoList =
                communityAndBuildGeomMapper.selectAllCountyGeom(searchParams.getProvince(),
                        searchParams.getCity());
        double max = 0;
        for (JSONObject countyGeomInfo : countyGeomInfoList) {
            List temp = new ArrayList();
            for (JSONObject communityJson : communityList) {
                if (countyGeomInfo.get("county").equals(communityJson.get("county"))) {
                    temp.add(communityJson);
                }
            }
            countyGeomInfo.put("communityInfoList", temp);
            max = max > temp.size() ? max : temp.size();
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
        result = Result.success(resultMap);
        return result;
    }

    @Override
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
                communityIds.add(bg.getString("commuityId"));
            });
            DataSourceContextHolder.setDataSource("slave");
            searchParams.setCommunitiesIds(communityIds);
            //通过问题楼栋所在的社区id获取社区信息
            List<JSONObject> communityGeomList = communityAndBuildGeomMapper.selectAllCommunityGeom(searchParams);
            //每个社区的问题楼栋，及数量，封装
            double max = 0;
            for (JSONObject communityJson : communityGeomList) {
                List<JSONObject> temp = new ArrayList<>();

                Iterator<JSONObject> buildGeomInfoIterator = buildGeomInfoList.iterator();
                while (buildGeomInfoIterator.hasNext()) {
                    JSONObject buildJson = buildGeomInfoIterator.next();
                    if (buildJson.getString("commuityId").equals(communityJson.getString("community_id"))) {
                        temp.add(buildJson);
                        buildGeomInfoIterator.remove();
                    }
                }
                communityJson.put("buildGeomInfoList", temp);
                max = max >= temp.size() ? max : temp.size();
            }
            Map<String, Object> resultMap = new HashMap<>();
            //没有社区匹配的楼栋点位
            JSONObject communityJsonNull = new JSONObject();
            communityJsonNull.put("street", "");
            communityJsonNull.put("community_name", "");
            communityJsonNull.put("community_id", "");
            communityJsonNull.put("county", "");
            communityJsonNull.put("community_geom", "");
            communityJsonNull.put("buildGeomInfoList", buildGeomInfoList);
            communityGeomList.add(communityJsonNull);
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
        }
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
}
