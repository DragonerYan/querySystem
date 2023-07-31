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
}
