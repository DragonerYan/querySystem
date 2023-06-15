package com.example.atv.controller;

import antlr.StringUtils;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.atv.constant.Result;
import com.example.atv.dao.mapper.AtvService;
import com.example.atv.generatetor.entity.*;
import com.example.atv.generatetor.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@Api(description = "atv接口")
@Slf4j
@AllArgsConstructor
@CrossOrigin
@Controller
@RequestMapping("/api")
public class AtvController {

    private final ICommunityBasicService iCommunityBasicService;
    private final ICommunityService iCommunityService;
    private final ICourtBasicService iCourtBasicService;
    private final IIndicatorService iIndicatorService;
    private final IIndicatorValueService iIndicatorValueService;
    private final IUserService iUserService;
    private final AtvService atvService;



    /**
     * 测试接口
     * @return string
     */
    @ApiOperation(value = "测试接口")
    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        log.debug("test-GET:info");
        return "hello world";
    }



    /**
     * commiunity信息查询
     */
    @ApiOperation(value = "community列表信息查询接口")
    @ResponseBody
    @RequestMapping(value = "/commiunityInfo", method = RequestMethod.GET)
    public Result commiunityInfo(@RequestParam(name = "communityId",required = false) String communityId) {

        List<Community> communityList;

        try{
            communityList=iCommunityService.list();
            return Result.success(communityList);
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail(e.getMessage());
        }

    }



    /**
     * 社区基本信息查询
     */
    @ApiOperation(value = "社区基本信息查询")
    @ResponseBody
    @RequestMapping(value = "/communityBasicInfo", method = RequestMethod.GET)
    public Result communityBasicInfo(@RequestParam(name = "communityId",required = false) String communityId,
                                     @RequestParam(name = "province",required = false) String province,
                                     @RequestParam(name = "city",required = false) String city,
                                     @RequestParam(name = "country",required = false) String country,
                                     @RequestParam(name = "street",required = false) String street,
                                     @RequestParam(name = "state",required = false) String state,
                                     @RequestParam(name = "userName",required = false) String userName,
                                     @RequestParam(name = "isPc",required = false) String isPc
                                     ) {

        QueryWrapper<CommunityBasic> wrapper=new QueryWrapper<>();
        if(province!=null && !Objects.equals(province,"")){
            wrapper.eq("province",province);
        }
        if(city!=null && !Objects.equals(city,"")){
            wrapper.eq("city",city);
        }
        if(country!=null && !Objects.equals(country,"")){
            wrapper.eq("country",country);
        }
        if(street!=null && !Objects.equals(street,"")){
            wrapper.eq("street",street);
        }
        if(state!=null && !Objects.equals(state,"")){
            wrapper.eq("state",state);
        }
        //在pc端列表界面增加，状态筛选和排序
        if(Objects.equals(isPc, "1")){
            wrapper.ne("state","0");
            wrapper.lambda().orderByAsc(CommunityBasic::getState);
        }

        if(userName!=null && !Objects.equals(userName,"")){
            wrapper.eq("user_id",userName);
        }
        if(communityId!=null && !Objects.equals(communityId,"")){
            wrapper.eq("community_id",communityId);
        }

        List<CommunityBasic> communityBasicList=iCommunityBasicService.list(wrapper);

        return Result.success(communityBasicList);
    }

    /**
     * 小区基本信息查询
     */
    @ApiOperation(value = "小区基本信息查询")
    @ResponseBody
    @RequestMapping(value = "/courtBasicInfo", method = RequestMethod.GET)
    public Result courtBasicInfo(@RequestParam(name = "indicatorId",required = false) String indicatorId,
                                 @RequestParam(name = "province",required = false) String province,
                                 @RequestParam(name = "city",required = false) String city,
                                 @RequestParam(name = "country",required = false) String country,
                                 @RequestParam(name = "street",required = false) String street,
                                 @RequestParam(name = "state",required = false) String state,
                                 @RequestParam(name = "userName",required = false) String userName,
                                 @RequestParam(name = "communityId",required = false) String communityId,
                                 @RequestParam(name = "isPc",required = false) String isPc
    ) {
        QueryWrapper<CourtBasic> wrapper=new QueryWrapper<>();

        if(province!=null && !Objects.equals(province,"")){
            wrapper.eq("province",province);
        }
        if(city!=null && !Objects.equals(city,"")){
            wrapper.eq("city",city);
        }
        if(country!=null && !Objects.equals(country,"")){
            wrapper.eq("country",country);
        }
        if(street!=null && !Objects.equals(street,"")){
            wrapper.eq("street",street);
        }
        if(state!=null && !Objects.equals(state,"")){
            wrapper.eq("state",state);
        }

        //在pc端列表界面增加，状态筛选和排序
        if(Objects.equals(isPc, "1")){
            wrapper.ne("state","0");
            wrapper.lambda().orderByAsc(CourtBasic::getState);
        }

        if(userName!=null && !Objects.equals(userName,"")){
            wrapper.eq("user_id",userName);
        }
        if(communityId!=null && !Objects.equals(communityId,"")){
            wrapper.eq("community_id",communityId);
        }

        List<CourtBasic> courtBasicList=iCourtBasicService.list(wrapper);

        return Result.success(courtBasicList);
    }

    /**
     * 根据community_id或者court_name获取基本信息和详细信息
     */
    @ApiOperation(value = "基本和详细信息查询")
    @ResponseBody
    @RequestMapping(value = "/allInfo", method = RequestMethod.GET)
    public Result allInfo(@RequestParam(name = "communityId",required = true) String communityId
                        ,@RequestParam(name = "courtName",required = true) String courtName) {

        try{
            Map<Object,Object> map=new HashMap<>();

            //如果courtname=="" 社区信息查询
            // 否则 小区信息查询
            if(Objects.equals(courtName, "")){
                QueryWrapper<CommunityBasic> wrapper_base=new QueryWrapper<>();
                wrapper_base.eq("community_id",communityId);
                CommunityBasic communityBasic=iCommunityBasicService.getOne(wrapper_base);
                map.put("basicInfo",communityBasic);
            }else{
                QueryWrapper<CourtBasic> wrapper_base=new QueryWrapper<>();
                wrapper_base.eq("community_id",communityId);
                wrapper_base.eq("court_name",courtName);
                CourtBasic courtBasic=iCourtBasicService.getOne(wrapper_base);
                map.put("basicInfo",courtBasic);
            }

            QueryWrapper<IndicatorValue> wrapper_indicator_value=new QueryWrapper<>();
            wrapper_indicator_value.eq("community_id",communityId);
            wrapper_indicator_value.eq("court_name",courtName);
            List<IndicatorValue> indicatorValueList=iIndicatorValueService.list(wrapper_indicator_value);

            map.put("indicatorValueList",indicatorValueList);
            return Result.success(map);

        }catch (Exception e){
            return Result.fail(e.getMessage());
        }
    }




    /**
     * 社区基本信息暂存/提交
     */
    @ApiOperation(value = "社区基本信息保存")
    @ResponseBody
    @RequestMapping(value = "/communityBaseSave", method = RequestMethod.POST)
    public Result communityBaseSave(@RequestBody CommunityBasic communityBasic) {
        try{
            //手写保存修改
            QueryWrapper<CommunityBasic> wrapper=new QueryWrapper<>();
            wrapper.eq("community_id",communityBasic.getCommunityId())
                    .eq("report_year",communityBasic.getReportYear());
            CommunityBasic communityBasic_query=iCommunityBasicService.getOne(wrapper);

            if(communityBasic_query==null){
                communityBasic.setDateTime(LocalDateTime.now());
                iCommunityBasicService.save(communityBasic);
            }else{
                communityBasic.setDateTime(communityBasic_query.getDateTime());
                iCommunityBasicService.update(communityBasic,wrapper);
            }

            return Result.success("插入成功");
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail(e.getMessage());
        }
    }



    /**
     * 小区基本信息暂存/提交
     */
    @ApiOperation(value = "小区基本信息保存")
    @ResponseBody
    @RequestMapping(value = "/courtBasicSave", method = RequestMethod.POST)
    public Result courtBasicSave(@RequestBody CourtBasic courtBasic) {

        try{

            //手写保存修改
            QueryWrapper<CourtBasic> wrapper=new QueryWrapper<>();
            wrapper.eq("community_id",courtBasic.getCommunityId())
                    .eq("court_name",courtBasic.getCourtName())
                    .eq("report_year",courtBasic.getReportYear());
            CourtBasic courtBasic_query=iCourtBasicService.getOne(wrapper);

            if(courtBasic_query==null){
                courtBasic.setDateTime(LocalDateTime.now());
                iCourtBasicService.save(courtBasic);
            }else{
                courtBasic.setDateTime(courtBasic_query.getDateTime());
                iCourtBasicService.update(courtBasic,wrapper);
            }
            return Result.success("插入成功");
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail(e.getMessage());
        }
    }



    /**
     * 具体信息暂存/提交
     */
    @ApiOperation(value = "具体信息保存")
    @ResponseBody
    @RequestMapping(value = "/indicatorValueSave", method = RequestMethod.POST)
    public Result indicatorValueSave(@RequestBody List<IndicatorValue> indicatorValueList) {


        try{
            //手写保存修改
            indicatorValueList.forEach(indicatorValue -> {
                QueryWrapper<IndicatorValue> wrapper=new QueryWrapper<>();
                wrapper.eq("community_id",indicatorValue.getCommunityId())
                        .eq("report_year",indicatorValue.getReportYear())
                        .eq("court_name",indicatorValue.getCourtName())
                        .eq("indicator_id",indicatorValue.getIndicatorId());
                IndicatorValue indicatorValue_query=iIndicatorValueService.getOne(wrapper);
                if(indicatorValue_query==null){
                    iIndicatorValueService.save(indicatorValue);
                }else {
                    iIndicatorValueService.update(indicatorValue,wrapper);
                }
            });
            return Result.success("插入成功");
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail(e.getMessage());
        }
    }




    /**
     * 登陆
     */
    @ApiOperation(value = "登陆")
    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public Result login(
            @RequestParam(name = "province",required = false,defaultValue = "") String province,
            @RequestParam(name = "city",required = false,defaultValue = "-") String city,
            @RequestParam(name = "county",required = false,defaultValue = "-") String county,
            @RequestParam(name = "street",required = false,defaultValue = "-") String street,
            @RequestParam(name = "communityId",required = false) String communityId,
            @RequestParam(name = "userName") String userName,
            @RequestParam(name = "password") String password
    ) {
        //根据userName查询是否存在
        QueryWrapper<User> wrapper=new QueryWrapper<>();

        wrapper.eq("province",province);
        wrapper.eq("city",city);
        wrapper.eq("county",county);
        wrapper.eq("street",street);
//        if(communityId!=null && !Objects.equals(communityId,"")) {
//            wrapper.eq("community_id",communityId);
//        }
        wrapper.eq("username",userName);

        User user=iUserService.getOne(wrapper);
        if(user==null){
            return Result.fail("无对应用户存在");
        }
        //查看密码是否匹配
        if(!user.getPassword().equals(password)){
            return Result.fail("密码错误！");
        }
        Map<String,String> map=new HashMap<>();
        map.put("userId",user.getUserId());
        map.put("userName",user.getUsername());
        map.put("communityId",user.getCommunityId());
        return Result.success("登陆成功！",map);
    }


    /**
     * 街道填报情况
     */
    @ApiOperation(value = "街道填报情况")
    @ResponseBody
    @RequestMapping(value = "/streetFillInfo", method = RequestMethod.GET)
    public Result streetFillInfo(
            @RequestParam(name = "province",required = false) String province,
            @RequestParam(name = "city",required = false) String city,
            @RequestParam(name = "county",required = false) String county
    ) {
        Map<String,String> map=new HashMap<>();
        map.put("county",county);
        List<Map<String,Object>> res=atvService.streetFillInfo(map);
        return Result.success("查询成功！",res);
    }



    /**
     * 社区填报情况
     */
    @ApiOperation(value = "社区填报情况")
    @ResponseBody
    @RequestMapping(value = "/communityFillInfo", method = RequestMethod.GET)
    public Result communityFillInfo(
            @RequestParam(name = "province",required = false) String province,
            @RequestParam(name = "city",required = false) String city,
            @RequestParam(name = "county",required = false) String county
    ) {
        Map<String,String> map=new HashMap<>();
        map.put("county",county);
        List<Map<String,Object>> resList=atvService.communityFillInfo(map);

        //拿出结果数据中的street属性，单独去重存取
        List<Object> streetList=resList.stream().map(x->x.get("street")).distinct().collect(Collectors.toList());

        Map<Object,Object> resMap=new HashMap<>();
        resMap.put("streetList",streetList);
        resMap.put("resList",resList);
        return Result.success("查询成功",resMap);
    }



    /**
     * 修改密码
     */
    @ApiOperation(value = "修改密码")
    @ResponseBody
    @RequestMapping(value = "/updateUserInfo", method = RequestMethod.POST)
    public Result updateUserInfo(
            @RequestParam(name = "userName") String userName,
            @RequestParam(name = "oldPassword") String oldPassword,
            @RequestParam(name = "password") String password
    ) {
        //根据userName查询是否存在
        QueryWrapper<User> wrapper=new QueryWrapper<>();
        wrapper.eq("userName",userName);
        User user=iUserService.getOne(wrapper);
        if(user==null){
            return Result.fail("用户不存在！");
        }
        // 检查旧密码是否正确
        if(!Objects.equals(user.getPassword(), oldPassword)){
            return Result.fail("旧密码错误！");
        }
        //查看新密码和旧密码是否重复
        if(user.getPassword().equals(password)){
            return Result.fail("密码重复");
        }

        User user_new=new User();
        user_new.setPassword(password);
        iUserService.update(user_new,wrapper);

        return Result.success("修改成功");
    }




}
