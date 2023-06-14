package com.example.atv.dao.mapper;

import java.util.List;
import java.util.Map;

public interface AtvService {
    List<Map<String, Object>> streetFillInfo(Map map);

    List<Map<String, Object>> communityFillInfo(Map map);
}
