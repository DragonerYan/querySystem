package com.example.atv.controller;

import antlr.StringUtils;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.TypeReference;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.atv.constant.Result;
import com.example.atv.dao.mapper.AtvService;
import com.example.atv.generatetor.entity.*;
import com.example.atv.generatetor.mapper.CommunityBasicMapper;
import com.example.atv.generatetor.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.spring.web.json.Json;

import javax.sql.rowset.serial.SerialBlob;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
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
    private final IBuildBasicService iBuildBasicService;
    private final IIndicatorValueBuildService iIndicatorValueBuildService;
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
                                     @RequestParam(name = "county",required = false) String county,
                                     @RequestParam(name = "street",required = false) String street,
                                     @RequestParam(name = "state",required = false) String state,
                                     @RequestParam(name = "userName",required = false) String userName,
                                     @RequestParam(name = "isPc",required = false) String isPc,
                                     @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
                                     @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset
                                     ) {

        QueryWrapper<CommunityBasic> wrapper=new QueryWrapper<>();
        if(province!=null && !Objects.equals(province,"")){
            wrapper.eq("province",province);
        }
        if(city!=null && !Objects.equals(city,"")){
            wrapper.eq("city",city);
        }
        if(county!=null && !Objects.equals(county,"")){
            wrapper.eq("county",county);
        }
        if(street!=null && !Objects.equals(street,"")){
            wrapper.eq("street",street);
        }
        if(state!=null && !Objects.equals(state,"")){
            wrapper.eq("state",state);
        }

        if(userName!=null && !Objects.equals(userName,"")){
            wrapper.eq("user_id",userName);
        }
        if(communityId!=null && !Objects.equals(communityId,"")){
            wrapper.eq("community_id",communityId);
        }

        //在pc端列表界面增加，状态筛选和排序
        if(Objects.equals(isPc, "1")){
            wrapper.ne("state","0");
            wrapper.lambda().orderByAsc(CommunityBasic::getState);
        }

        //增加分页功能
        Page<CommunityBasic> page=new Page<>(offset,pageSize);
        Page<CommunityBasic> communityBasicList=iCommunityBasicService.page(page,wrapper);

        //pc端返回带分页的信息
        if(Objects.equals(isPc, "1")){
            return Result.success(communityBasicList);
        }
        return Result.success(communityBasicList.getRecords());

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
                                 @RequestParam(name = "county",required = false) String county,
                                 @RequestParam(name = "street",required = false) String street,
                                 @RequestParam(name = "state",required = false) String state,
                                 @RequestParam(name = "userName",required = false) String userName,
                                 @RequestParam(name = "communityId",required = false) String communityId,
                                 @RequestParam(name = "communityName",required = false) String communityName,
                                 @RequestParam(name = "isPc",required = false) String isPc,
                                 @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
                                 @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset
    ) {
        QueryWrapper<CourtBasic> wrapper=new QueryWrapper<>();

        if(province!=null && !Objects.equals(province,"")){
            wrapper.eq("province",province);
        }
        if(city!=null && !Objects.equals(city,"")){
            wrapper.eq("city",city);
        }
        if(county!=null && !Objects.equals(county,"")){
            wrapper.eq("county",county);
        }
        if(street!=null && !Objects.equals(street,"")){
            wrapper.eq("street",street);
        }
        if(state!=null && !Objects.equals(state,"")){
            wrapper.eq("state",state);
        }

        if(userName!=null && !Objects.equals(userName,"")){
            wrapper.eq("user_id",userName);
        }
        if(communityId!=null && !Objects.equals(communityId,"")){
            wrapper.eq("community_id",communityId);
        }
        if(communityName!=null && !Objects.equals(communityName,"")){
            wrapper.eq("community_name",communityName);
        }

        //在pc端列表界面增加，状态筛选和排序
        if(Objects.equals(isPc, "1")){
            wrapper.ne("state","0");
            wrapper.lambda().orderByAsc(CourtBasic::getState);
        }
        //增加分页功能
        Page<CourtBasic> page=new Page<>(offset,pageSize);
        Page<CourtBasic> courtBasicList=iCourtBasicService.page(page,wrapper);

        //pc端返回带分页的信息
        if(Objects.equals(isPc, "1")){
            return Result.success(courtBasicList);
        }
        return Result.success(courtBasicList.getRecords());
    }

    /**
     * 楼栋基本信息查询
     */
    @ApiOperation(value = "楼栋基本信息查询")
    @ResponseBody
    @RequestMapping(value = "/buildBasicInfo", method = RequestMethod.GET)
    public Result buildBasicInfo(@RequestParam(name = "courtName",required = false) String courtName,
                                 @RequestParam(name = "province",required = false) String province,
                                 @RequestParam(name = "city",required = false) String city,
                                 @RequestParam(name = "county",required = false) String county,
                                 @RequestParam(name = "street",required = false) String street,
                                 @RequestParam(name = "state",required = false) String state,
                                 @RequestParam(name = "userName",required = false) String userName,
                                 @RequestParam(name = "communityId",required = false) String communityId,
                                 @RequestParam(name = "communityName",required = false) String communityName,
                                 @RequestParam(name = "isPc",required = false) String isPc,
                                 @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
                                 @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset
    ) {
        QueryWrapper<BuildBasic> wrapper=new QueryWrapper<>();

        if(province!=null && !Objects.equals(province,"")){
            wrapper.eq("court_name",courtName);
        }

        if(province!=null && !Objects.equals(province,"")){
            wrapper.eq("province",province);
        }
        if(city!=null && !Objects.equals(city,"")){
            wrapper.eq("city",city);
        }
        if(county!=null && !Objects.equals(county,"")){
            wrapper.eq("county",county);
        }
        if(street!=null && !Objects.equals(street,"")){
            wrapper.eq("street",street);
        }
        if(state!=null && !Objects.equals(state,"")){
            wrapper.eq("state",state);
        }

        if(userName!=null && !Objects.equals(userName,"")){
            wrapper.eq("user_id",userName);
        }
        if(communityId!=null && !Objects.equals(communityId,"")){
            wrapper.eq("community_id",communityId);
        }
        if(communityName!=null && !Objects.equals(communityName,"")){
            wrapper.eq("community_name",communityName);
        }

        //在pc端列表界面增加，状态筛选和排序
        if(Objects.equals(isPc, "1")){
            wrapper.ne("state","0");
            wrapper.lambda().orderByAsc(BuildBasic::getState);
        }
        //增加分页功能
        Page<BuildBasic> page=new Page<>(offset,pageSize);
        Page<BuildBasic> buildBasicList=iBuildBasicService.page(page,wrapper);

        //pc端返回带分页的信息
        if(Objects.equals(isPc, "1")){
            return Result.success(buildBasicList);
        }
        return Result.success(buildBasicList.getRecords());
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
     * 小区出现问题楼栋查询
     */
    @ApiOperation(value = "小区出现问题楼栋查询")
    @ResponseBody
    @RequestMapping(value = "/problemBuildInfo", method = RequestMethod.GET)
    public Result problemBuildInfo(@RequestParam(name = "communityId",required = true) String communityId
            ,@RequestParam(name = "courtName",required = true) String courtName) {

        try{
            Map<String,Object> resMap=new HashMap<>();

            for(int i=1;i<10;i++){
                String preStr="2."+i;
                QueryWrapper<IndicatorValueBuild> wrapper=new QueryWrapper<>();
                wrapper.eq("community_id",communityId);
                wrapper.eq("court_name",courtName);
                wrapper.likeRight("indicator_id",preStr);
                List<IndicatorValueBuild> indicatorValueBuildList=iIndicatorValueBuildService.list(wrapper);
                long m=indicatorValueBuildList.stream().map(IndicatorValueBuild::getBuildNumber).distinct().count();
                resMap.put(preStr,m);
            }

            return Result.success(resMap);

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
     * 楼栋基本信息暂存/提交
     */
    @ApiOperation(value = "楼栋基本信息暂存/提交")
    @ResponseBody
    @RequestMapping(value = "/buildBasicSave", method = RequestMethod.POST)
    public Result buildBasicSave(@RequestBody BuildBasic buildBasic) {

        try{

            //手写保存修改
            QueryWrapper<BuildBasic> wrapper=new QueryWrapper<>();
            wrapper.eq("community_id",buildBasic.getCommunityId())
                    .eq("court_name",buildBasic.getCourtName())
                    .eq("report_year",buildBasic.getReportYear())
                    .eq("build_number",buildBasic.getBuildNumber());
            BuildBasic buildBasic_query=iBuildBasicService.getOne(wrapper);

            if(buildBasic_query==null){
                buildBasic.setDateTime(LocalDateTime.now());
                iBuildBasicService.save(buildBasic);
            }else{
                buildBasic.setDateTime(buildBasic_query.getDateTime());
                iBuildBasicService.update(buildBasic,wrapper);
            }
            return Result.success("插入成功");
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail(e.getMessage());
        }
    }

    /**
     * 楼栋具体信息暂存/提交
     */
    @ApiOperation(value = "楼栋具体信息保存")
    @ResponseBody
    @RequestMapping(value = "/indicatorValueBuildSave", method = RequestMethod.POST)
    public Result indicatorValueBuildSave(@RequestBody List<IndicatorValueBuild> indicatorValueBuildList) {


        try{
            //手写保存修改
            indicatorValueBuildList.forEach(indicatorValueBuild -> {
                QueryWrapper<IndicatorValueBuild> wrapper=new QueryWrapper<>();
                wrapper.eq("community_id",indicatorValueBuild.getCommunityId())
                        .eq("report_year",indicatorValueBuild.getReportYear())
                        .eq("court_name",indicatorValueBuild.getCourtName())
                        .eq("build_number",indicatorValueBuild.getBuildNumber())
                        .eq("indicator_id",indicatorValueBuild.getIndicatorId());
                IndicatorValueBuild indicatorValueBuild_query=iIndicatorValueBuildService.getOne(wrapper);
                if(indicatorValueBuild_query==null){
                    iIndicatorValueBuildService.save(indicatorValueBuild);
                }else {
                    iIndicatorValueBuildService.update(indicatorValueBuild,wrapper);
                }
            });
            //更新小区详细信息数据

            //根据所属小区名，按照按照指标分组，对楼栋的个数进行计数
            Map<String,String> map=new HashMap<>();
            map.put("communityId",indicatorValueBuildList.get(0).getCommunityId());
            map.put("courtName",indicatorValueBuildList.get(0).getCourtName());
            map.put("reportYear",indicatorValueBuildList.get(0).getReportYear());
            List<Map<String,Object>> buildSum=atvService.buildSum(map);

            List<IndicatorValue> indicatorValueList= JSON.parseObject(JSON.toJSONString(buildSum), new TypeReference<List<IndicatorValue>>() {});

            //调用社区和小区详细信息保存接口
            indicatorValueSave(indicatorValueList);

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

    /**
     * 图片上传
     */
    @ApiOperation(value = "图片上传")
    @ResponseBody
    @RequestMapping(value = "/uploadImg", method = RequestMethod.POST)
    public Result uploadImg(
            @RequestParam(name = "buildNumber") String buildNumber,
            @RequestParam(name = "indicatorId") String indicatorId,
            @RequestParam(name = "courtName") String courtName,
            @RequestParam(name = "communityId") String communityId,
            @RequestParam("file") MultipartFile file
    ) throws IOException, SQLException {
        byte[] bytes = file.getBytes();
        Blob blob = new SerialBlob(bytes);

        IndicatorValueBuild indicatorValueBuild=new IndicatorValueBuild();
        indicatorValueBuild.setBuildNumber(buildNumber);
        indicatorValueBuild.setIndicatorId(indicatorId);
        indicatorValueBuild.setCourtName(courtName);
        indicatorValueBuild.setCommunityId(communityId);
        indicatorValueBuild.setPhotoFile(blob);

        iIndicatorValueBuildService.save(indicatorValueBuild);

        return Result.success("修改成功");
    }

    /**
     * 图片获取
     */
    @ApiOperation(value = "图片获取")
    @ResponseBody
    @RequestMapping(value = "/downloadImg", method = RequestMethod.POST)
    public Result downloadImg(
            @RequestParam(name = "buildNumber") String buildNumber,
            @RequestParam(name = "indicatorId") String indicatorId,
            @RequestParam(name = "courtName") String courtName,
            @RequestParam(name = "communityId") String communityId,
            @RequestParam("file") MultipartFile file
    ) throws IOException, SQLException {

        QueryWrapper<IndicatorValueBuild> wrapper=new QueryWrapper<>();
        wrapper.eq("build_num",buildNumber);
        wrapper.eq("indicator_id",indicatorId);
        wrapper.eq("court_name",courtName);
        wrapper.eq("community_id",communityId);
        IndicatorValueBuild indicatorValueBuild=iIndicatorValueBuildService.getOne(wrapper);

        return Result.success("查询成功",indicatorValueBuild);
    }



}
