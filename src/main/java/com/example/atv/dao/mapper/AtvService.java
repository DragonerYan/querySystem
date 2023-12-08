package com.example.atv.dao.mapper;

import java.util.List;
import java.util.Map;

public interface AtvService {
    List<Map<String, Object>> streetFillInfo(Map map);

    List<Map<String, Object>> communityFillInfo(Map map);

    List<Map<String,Object>> buildSum(Map map);

    void uploadImg(Map  map);
    List<Map<String,Object>> downloadImg(Map  map);

    List<Map<String,Object>> initPhotoData(Map  map);
    List<Map<String,Object>> initLocationData(Map  map);

    void deleteImg(Map map);

    List<Map<String,Object>> compute(String reportYear,String city,String indicator);
    int computeTotal(String reportYear,String city,String indicator);
    List<Map<String,Object>> computeCountyPercent(String reportYear,String city,String indicator);

    List<Map<String,Object>> computeStreetPercent(String reportYear,String city,String county,String indicator);

    int computeCountyTotal(String reportYear,String city,String county,String indicator);

    List<Map<String,Object>> buildProblem(String communityId,String courtName,String indicator,String city,String county,String street,String reportYear);
    List<Map<String,Object>> searchPhoto(String courtName,String indicatorId,String communityId,String buildNumber,String reportYear);
}
