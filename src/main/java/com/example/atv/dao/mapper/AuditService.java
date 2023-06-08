package com.example.atv.notgenerator.dao.mapper;


import java.math.BigInteger;
import java.util.List;
import java.util.Map;

public interface AuditService {

    List<Map<String, Object>> test();

    String login(Map objectMap);

    List<Map<String, Object>> smokeInquiry(Map objectMap);

    List<Map<String, Object>> smokeInquirySales(Map objectMap);

    List<Map<String, Object>> smokeInquirySalesByCity(Map objectMap);

    void insertIntoSale(Map objectMap);

    void insertIntoSmoke(Map objectMap);

    List<Map<String, Object>> inquiryAllSaleByCity();

    void loginRecord(Map objectMap);

    List<Map<String, Object>> inquiryLoginRecord();

    List<Map<String, Object>> inquirySaleOrderByDay(Map objectMap);

    void insertIntoShop(Map objectMap);

    int inquiryId();

    String inquirySmokeId(Map objectMap);

    String inquiryShopId(Map objectMap);

    List<Map<String, BigInteger>> inquiryMaxShopId();

    String inquiryCityId(Map objectMap);

}
