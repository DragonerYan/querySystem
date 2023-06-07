package com.example.smokeManagement.audit.controller;

import org.springframework.stereotype.Controller;
import com.example.smokeManagement.audit.dao.mapper.AuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.*;


@CrossOrigin
@Controller
@RequestMapping("/oldapi")
public class SmokeController{

    @Autowired
    AuditService auditService;

    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public List<Map<String, Object>> test() {
        return auditService.test();
    }

    @ResponseBody
    @RequestMapping(value = "/test_1", method = RequestMethod.GET)
    public String test_1() {
        return "hello world";
    }

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public boolean login(
            @RequestParam(name = "userName") String userName,
            @RequestParam(name = "password") String password
    ) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("userName", userName);
        return password.equals(auditService.login(objectMap));
    }

    //根据卷烟名查询卷烟库存信息，卷烟粗细，卷烟长度等信息，
    //	       若查询条件为空，则查出所有的卷烟列表信息
    @ResponseBody
    @RequestMapping(value = "/smokeInquiry", method = RequestMethod.GET)
    public List<Map<String, Object>> smokeInquiry(
            @RequestParam(name = "smokeName",required = false) String smokeName
    ) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("smokeName", smokeName);
        return auditService.smokeInquiry(objectMap);
    }

    //根绝卷烟名和日期查询出该省每个市的卷烟销量
    //查看
    @ResponseBody
    @RequestMapping(value = "/smokeInquirySales", method = RequestMethod.GET)
    public List<Map<String, Object>> smokeInquirySales(
            @RequestParam(name = "smokeName") String smokeName,
            @RequestParam(name = "date",required = false) String date
    ) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("smokeName", smokeName);
        objectMap.put("date", date);
        List<Map<String,Object>> re=auditService.smokeInquirySales(objectMap);
        return re;
    }

    //根据地市名和时间查询出该地市下销售所有卷烟的的销量列表
    //查看
    @ResponseBody
    @RequestMapping(value = "/smokeInquirySalesByCity", method = RequestMethod.GET)
    public List<Map<String, Object>> smokeInquirySalesByCity(
            @RequestParam(name = "cityName") String cityName,
            @RequestParam(name = "date",required = false) String date
    ) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("cityName", cityName);
        objectMap.put("date", date);
        return auditService.smokeInquirySalesByCity(objectMap);
    }

    //全部销量数据的按日排序
    @ResponseBody
    @RequestMapping(value = "/inquirySaleOrderByDay", method = RequestMethod.GET)
    public List<Map<String, Object>> inquirySaleOrderByDay(
            @RequestParam(name = "day",required = false) String day
    ) {
        Map<String, Object> objectMap = new HashMap<>();
        day = "2022.10." + day;
        objectMap.put("day", day);
        List<Map<String, Object>> results = auditService.inquirySaleOrderByDay(objectMap);
        results.sort(new Comparator<Map<String, Object>>() {
            @Override
            public int compare(Map<String, Object> o1, Map<String, Object> o2) {
                int a = Integer.parseInt(o1.get("day").toString().substring(8));
                int b =  Integer.parseInt(o2.get("day").toString().substring(8));
                return a-b;
            }
        });

        return results;
    }

    //用户登陆的信息记录记录
    @ResponseBody
    @RequestMapping(value = "/loginRecord", method = RequestMethod.POST)
    public boolean loginRecord(
            @RequestBody Map map
    ) {
        String userName=(String)map.get("userName");
        String date=(String)map.get("date");
        String location=(String)map.get("location");
//        boolean isAbnormal=(boolean )map.get("isAbnormal");
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("userName", userName);
        objectMap.put("date", date);
        objectMap.put("location", location);
        objectMap.put("isAbnormal", false);
        auditService.loginRecord(objectMap);
        return true;
    }

    @ResponseBody
    @RequestMapping(value = "/inquiryLoginRecord", method = RequestMethod.GET)
    public List<Map<String, Object>> inquiryLoginRecord() {
        return auditService.inquiryLoginRecord();
    }

    //查询每个地市的销量总和
    //有问题
    @ResponseBody
    @RequestMapping(value = "/inquiryAllSaleByCity", method = RequestMethod.GET)
    public List<Map<String, Object>> inquiryAllSaleByCity(
    ) {
        return auditService.inquiryAllSaleByCity();
    }

    //检验是否连接数据库
    //插入Sale表数据
    @ResponseBody
    @RequestMapping(value = "/insertIntoSale", method = RequestMethod.POST)
    public boolean insertIntoSale(
            @RequestBody Map map
    ) {
        String name=(String)map.get("name");
        String sale_num=(String)map.get("sale_num");
        String day=(String)map.get("day");
        String shop_name=(String)map.get("shop_name");

        Map<String, Object> objectMap = new HashMap<>();
        String id = inquirySmokeId(name);
        String shop_id = inquiryShopId(shop_name);
        objectMap.put("id", id);
        objectMap.put("sale_num", sale_num);
        objectMap.put("day", day);
        objectMap.put("shop_id", shop_id);
        auditService.insertIntoSale(objectMap);
        return true;
    }

    @ResponseBody
    @RequestMapping(value = "/insertIntoShop", method = RequestMethod.POST)
    public boolean insertIntoShop(
            @RequestBody Map map
    ) {
        String shop_name=(String)map.get("shop_name");
        String owner_name=(String)map.get("owner_name");
        String tel=(String)map.get("tel");
        String city_name=(String)map.get("city_name");

        Map<String, Object> objectMap = new HashMap<>();
        Integer resId = 0;
        List<Map<String,BigInteger>> m_shop_ids = inquiryMaxShopId();
        for (Map<String, BigInteger> m_shop_id : m_shop_ids) {
            if(m_shop_id.get("maxId").intValue() > resId) {
                resId = m_shop_id.get("maxId").intValue();
            }
        }
        String shop_id = Integer.toString(resId);
        String city_id = inquiryCityId(city_name);

        objectMap.put("shop_id", shop_id);
        objectMap.put("shop_name", shop_name);
        objectMap.put("owner_name", owner_name);
        objectMap.put("tel", tel);
        objectMap.put("city_id", city_id);
        auditService.insertIntoShop(objectMap);
        return true;
    }

    //检验是否连接数据库
    //插入Smoke表数据
    @ResponseBody
    @RequestMapping(value = "/insertIntoSmoke", method = RequestMethod.POST)
    public boolean insertIntoSmoke(
            @RequestBody Map map
    ) {
        String name =(String)map.get("name");
        String num=(String)map.get("num");
        String height=(String)map.get("height");
        String width=(String)map.get("width");

        Map<String, Object> objectMap = new HashMap<>();
        String id = Integer.toString(inquiryId());
        objectMap.put("id", id);
        objectMap.put("name", name);
        objectMap.put("num", num);
        String is_sale = "1";
        objectMap.put("is_sale", is_sale);
        objectMap.put("height", height);
        objectMap.put("width", width);
        auditService.insertIntoSmoke(objectMap);
        return true;
    }

    public List<Map<String,BigInteger>> inquiryMaxShopId() {
        return auditService.inquiryMaxShopId();
    }

    public String inquiryCityId(String city_name) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("city_name", city_name);
        return auditService.inquiryCityId(objectMap);
    }

    public int inquiryId() {
        return auditService.inquiryId();
    }

    public String inquirySmokeId(String name) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("name", name);
        return auditService.inquirySmokeId(objectMap);
    }
    public String inquiryShopId(String shop_name) {
        Map<String, Object> objectMap = new HashMap<>();
        objectMap.put("shop_name", shop_name);
        return auditService.inquiryShopId(objectMap);
    }
}
