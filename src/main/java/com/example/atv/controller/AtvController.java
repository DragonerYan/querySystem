package com.example.atv.controller;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.ExcelWriter;
import com.alibaba.excel.write.builder.ExcelWriterBuilder;
import com.alibaba.excel.write.builder.ExcelWriterSheetBuilder;
import com.alibaba.excel.write.metadata.WriteSheet;
import com.alibaba.excel.write.metadata.fill.FillConfig;
import com.alibaba.excel.write.style.column.LongestMatchColumnWidthStyleStrategy;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.atv.constant.ModelOfExcel;
import com.example.atv.constant.Result;
import com.example.atv.dao.mapper.AtvService;
import com.example.atv.generatetor.entity.*;
import com.example.atv.generatetor.service.*;
import com.example.atv.util.MD5Util;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.sql.rowset.serial.SerialBlob;
import java.io.File;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Api(description = "atv接口")
@Slf4j
@CrossOrigin
@Controller
@RequestMapping("/api")
public class AtvController {

    @Autowired
    private  ICommunityBasicService iCommunityBasicService;
    @Autowired
    private ICommunityService iCommunityService;
    @Autowired
    private ICourtBasicService iCourtBasicService;
    @Autowired
    private IIndicatorService iIndicatorService;
    @Autowired
    private IIndicatorValueService iIndicatorValueService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private IBuildBasicService iBuildBasicService;
    @Autowired
    private IIndicatorValueBuildService iIndicatorValueBuildService;

    @Autowired(required = false)
    private AtvService atvService;

    @Value("${imgPath}")
    private  String imgBasePath;

    @Value("${imgHost}")
    private String imgHost;


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

        wrapper.lambda().orderByAsc(CommunityBasic::getState);
//        //在pc端列表界面增加，状态筛选和排序
//        if(Objects.equals(isPc, "1")){
//            wrapper.ne("state","0");
//
//        }

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

        wrapper.lambda().orderByAsc(CourtBasic::getState);
//        //在pc端列表界面增加，状态筛选和排序
//        if(Objects.equals(isPc, "1")){
//            wrapper.ne("state","0");
//
//        }
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
                                 @RequestParam(name = "problemState",required = false) String problemState,
                                 @RequestParam(name = "pageSize",required = false,defaultValue = "1000000") Long pageSize,
                                 @RequestParam(name = "offset",required = false,defaultValue = "1") Long offset
    ) {
        QueryWrapper<BuildBasic> wrapper=new QueryWrapper<>();

        if(courtName!=null && !Objects.equals(courtName,"")){
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
        if(problemState!=null && !Objects.equals(problemState,"")){
            wrapper.eq("problem_state",problemState);
        }

        wrapper.lambda().orderByAsc(BuildBasic::getState);
//        //在pc端列表界面增加，状态筛选和排序
//        if(Objects.equals(isPc, "1")){
//            wrapper.ne("state","0");
//
//        }
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
    @ApiOperation(value = "社区和小区基本和详细信息查询")
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
     * 楼栋基本信息和详细信息
     */
    @ApiOperation(value = "楼栋基本信息和详细信息")
    @ResponseBody
    @RequestMapping(value = "/buildInfo", method = RequestMethod.GET)
    public Result allInfo(@RequestParam(name = "communityId",required = true) String communityId
            ,@RequestParam(name = "courtName",required = true) String courtName
            ,@RequestParam(name = "buildNumber",required = true) String buildNumber) {

        try{
            Map<Object,Object> map=new HashMap<>();

            QueryWrapper<BuildBasic> wrapper_base=new QueryWrapper<>();
            wrapper_base.eq("community_id",communityId);
            wrapper_base.eq("court_name",courtName);
            wrapper_base.eq("build_number",buildNumber);
            BuildBasic buildBasic=iBuildBasicService.getOne(wrapper_base);
            map.put("basicInfo",buildBasic);


            QueryWrapper<IndicatorValueBuild> wrapper_indicator_value=new QueryWrapper<>();
            wrapper_indicator_value.eq("community_id",communityId);
            wrapper_indicator_value.eq("court_name",courtName);
            wrapper_indicator_value.eq("build_number",buildNumber);
            List<IndicatorValueBuild> indicatorValueBuildList=iIndicatorValueBuildService.list(wrapper_indicator_value);

            map.put("indicatorValueList",indicatorValueBuildList);
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
            QueryWrapper<IndicatorValueBuild> wrapper=new QueryWrapper<>();
            wrapper.eq("community_id",communityId);
            wrapper.eq("court_name",courtName);
            wrapper.eq("indicator_value",1);

            //因为数据固定，这里使用固定序号进行处理
            for(int i=1;i<=10;i++){
                String preStr="2."+i;
                Map<String,Object> map=new HashMap<>();
                switch (i){
                    case 1:
                    case 10:
                    case 8:
                        map=solveProblemBuildUtil(wrapper,preStr,4);
                        break;
                    case 2:
                    case 9:
                        map=solveProblemBuildUtil(wrapper,preStr,0);
                        break;
                    case 3:
                        map=solveProblemBuildUtil(wrapper,preStr,7);
                        break;
                    case 4:
                        map=solveProblemBuildUtil(wrapper,preStr,5);
                        break;
                    case 5:
                    case 7:
                        map=solveProblemBuildUtil(wrapper,preStr,2);
                        break;
                    case 6:
                        map=solveProblemBuildUtil(wrapper,preStr,3);
                        break;
                    default:
                }
                resMap.putAll(map);
            }

            return Result.success(resMap);

        }catch (Exception e){
            return Result.fail(e.getMessage());
        }
    }
    Map<String,Object> solveProblemBuildUtil(QueryWrapper<IndicatorValueBuild> wrapper,String preStr,int count){
        Map<String,Object> resMap=new HashMap<>();
        for(int i=0;i<=count;i++){
            String str=preStr;
            QueryWrapper<IndicatorValueBuild> wrapper_new=new QueryWrapper<>();
            wrapper_new=wrapper.clone();
            //0的话代表高级目录，其余代表下面的子目录
            if(i!=0){
                str=str+"."+i;
            }
            //在进行2.1数量时候，可能和2.10下面的所属问题进行混淆，所以这里在当是2.1高级目录的时候使用2.1.进行左匹配
            if(Objects.equals(preStr, "2.1") && i==0){
                wrapper_new.likeRight("indicator_id",str+".");
            }else{
                wrapper_new.likeRight("indicator_id",str);
            }

            List<IndicatorValueBuild> indicatorValueBuildList=iIndicatorValueBuildService.list(wrapper_new);
            long m=indicatorValueBuildList.stream().map(IndicatorValueBuild::getBuildNumber).distinct().count();
            resMap.put(str,m);
        }
        return resMap;
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
     * 楼栋基本信息删除
     */
    @ApiOperation(value = "楼栋基本信息删除")
    @ResponseBody
    @RequestMapping(value = "/deleteBuildBasic", method = RequestMethod.GET)
    public Result deleteBuildBasic(@RequestParam(name = "communityId",required = false) String communityId,
                                   @RequestParam(name = "courtName",required = false) String courtName,
                                   @RequestParam(name = "buildNumber",required = false) String buildNumber,
                                   @RequestParam(name = "reportYear",required = false) String reportYear
                                   ) {
        try {



            QueryWrapper<BuildBasic> wrapper_delete=new QueryWrapper<>();
            wrapper_delete.eq("community_id",communityId)
                    .eq("court_name",courtName)
                    .eq("report_year",reportYear)
                    .eq("build_number",buildNumber);
            List<BuildBasic> list=iBuildBasicService.list(wrapper_delete);
            if(list.size()==0){
                return Result.fail("数据并未在数据库保存");
            }

            iBuildBasicService.remove(wrapper_delete);
            return Result.success("删除成功");
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail("删除失败");
        }
    }

    /**
     * 楼栋基本信息暂存/提交
     */
    @ApiOperation(value = "楼栋基本信息暂存/提交")
    @ResponseBody
    @RequestMapping(value = "/buildBasicSave", method = RequestMethod.POST)
    public Result buildBasicSave(@RequestBody List<BuildBasic> buildBasicList) {

        try{

            //然后对数据进行新增
            buildBasicList.forEach(buildBasic -> {
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
            });
            //手写保存修改
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
    @RequestMapping(value = "/login", method = RequestMethod.POST)
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
        if(communityId!=null && !Objects.equals(communityId,"")) {
            wrapper.eq("community_id",communityId);
        }
        wrapper.eq("username",userName);

        User user=iUserService.getOne(wrapper);
        if(user==null){
            return Result.fail("无对应用户存在");
        }
        //查看密码是否匹配
        String password_true=MD5Util.string2MD5(user.getPassword());
        if(!password_true.equals(password)){
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
     * excel导出功能
     */
    @ApiOperation(value = "excel导出功能")
    @ResponseBody
    @RequestMapping(value = "/getExcel", method = RequestMethod.POST)
    public void getExcel(HttpServletResponse response,
            @RequestParam(name = "province",required = false) String province
            ,@RequestParam(name = "city",required = false) String city
            ,@RequestParam(name = "county",required = false) String county
            ,@RequestParam(name = "street",required = false) String street
            ,@RequestParam(name = "communityId",required = false) String communityId
            ,@RequestParam(name = "courtName",required = false) String courtName
            ,@RequestParam(name = "buildNumber",required = false) String buildNumber
            ,@RequestParam(name = "state",required = false) String state
            ,@RequestParam(name = "type",required = false) String type
    ) throws IOException {

        try {
            //查询基本信息
            QueryWrapper wrapper_basic=new QueryWrapper<>();
            if(province!=null && !"".equals(province)){
                wrapper_basic.eq("province",province);
            }
            if(city!=null && !"".equals(city)){
                wrapper_basic.eq("city",city);
            }
            if(county!=null && !"".equals(county)){
                wrapper_basic.eq("county",county);
            }
            if(street!=null && !"".equals(street)){
                wrapper_basic.eq("street",street);
            }
            if(buildNumber!=null && !"".equals(buildNumber)){
                wrapper_basic.eq("build_number",buildNumber);
            }
            if(courtName!=null && !"".equals(courtName)){
                wrapper_basic.eq("court_name",courtName);
            }
            if(communityId!=null && !"".equals(communityId)){
                wrapper_basic.eq("community_id",communityId);
            }
            if(state!=null && !"".equals(state)){
                wrapper_basic.eq("state",state);
            }

            List<Map<String,Object>> fillDatas;
            String excelName;
            switch (type){
                case "community":
                    excelName="communityExcel";
                    fillDatas=initCommunityData(wrapper_basic); break;
                case "court":
                    excelName="courtExcel";
                    fillDatas=initCourtData(wrapper_basic); break;
                default:
                    excelName="buildExcel";
                    fillDatas=initBuildData(wrapper_basic);break;

            }

            //设置响应头部信息，格式为附件，文件名为expert.xlsx
            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-Disposition","attachment; filename=" + excelName+".xlsx");
            // 加载模板
            String templateFile=type+"_export.xlsx" ;

            if(Objects.equals(city, "宁波市")){
                templateFile=type+"_export_nb.xlsx" ;
            }
            //templateFile="/home/querySystem/"+templateFile;
            ServletOutputStream outputStream=response.getOutputStream();
            // 使用 EasyExcel 构造 ExcelWriter
            final ExcelWriter writer = EasyExcel.write(outputStream)
                    .withTemplate(templateFile).build();
            // 使用 EasyExcel 构造 WriteSheet
            final WriteSheet sheet =  EasyExcel.writerSheet().build();
            writer.fill(fillDatas, sheet);
            outputStream.flush();
            writer.finish();


        }catch (Exception e){
            log.debug(e.getMessage());
        }


    }
    @ApiOperation(value = "手动excel导出功能")
    @ResponseBody
    @RequestMapping(value = "/Excel", method = RequestMethod.POST)
    void handExport(HttpServletResponse response) throws IOException {
        List<ModelOfExcel> list=new ArrayList<>();
        ModelOfExcel modelOfExcel=new ModelOfExcel();
        modelOfExcel.setAge(1);
        modelOfExcel.setSex("n");
        ModelOfExcel modelOfExcel1=new ModelOfExcel();
        modelOfExcel1.setAge(1);
        modelOfExcel1.setSex("n");
        modelOfExcel1.setName("m");
        list.add(modelOfExcel);
        list.add(modelOfExcel1);
        response.addHeader("Content-Disposition", "attachment;filename=t.xlsx" );
        response.setContentType("application/vnd.ms-excel");
        // 输出 Excel
        ServletOutputStream out = response.getOutputStream();
        ExcelWriterBuilder writeWork = EasyExcel.write(out, ModelOfExcel.class);
        //4、创建表格
        ExcelWriterSheetBuilder sheet = writeWork.sheet();
        //6、写入数据到表格中
        sheet.doWrite(list);
        out.close();



    }

    /**
     * 初始化楼栋导出信息
     */
    private List<Map<String,Object>> initBuildData(QueryWrapper<BuildBasic> wrapper_basic) {

        List<Map<String,Object>> fillDatas = new ArrayList<>();

        List<BuildBasic> buildBasicList=iBuildBasicService.list(wrapper_basic);

        //添加详细信息
        buildBasicList.forEach(buildBasic -> {
            QueryWrapper<IndicatorValueBuild> wrapper_indicator=new QueryWrapper<>();
            wrapper_indicator.eq("community_id",buildBasic.getCommunityId());
            wrapper_indicator.eq("court_name",buildBasic.getCourtName());
            wrapper_indicator.eq("build_number",buildBasic.getBuildNumber());
            List<IndicatorValueBuild> indicatorValueBuildList=iIndicatorValueBuildService.list(wrapper_indicator);

            // 实体类转换为Map
            Map<String,Object> fillData = JSON.parseObject(JSON.toJSONString(buildBasic), Map.class);

            // 先将所有指标信息存进去，所有值均存0
            QueryWrapper<Indicator> queryWrapper_indicator =new QueryWrapper<>();
            queryWrapper_indicator.likeRight("indicator_id","2.");
            List<Indicator> indicatorList=iIndicatorService.list(queryWrapper_indicator);
            indicatorList.forEach(indicator -> {
                fillData.put(indicator.getIndicatorId().trim(),0);
            });

            // 将数据库中记录的数据进行更新
            indicatorValueBuildList.forEach(indicatorValueBuild -> {
                fillData.put(indicatorValueBuild.getIndicatorId(),indicatorValueBuild.getIndicatorValue());
            });


            fillDatas.add(fillData);
        });

        return fillDatas;
    }

    /**
     * 初始化小区导出信息
     */
    private List<Map<String,Object>> initCourtData(QueryWrapper<CourtBasic> wrapper_basic) {

        List<Map<String,Object>> fillDatas = new ArrayList<>();

        List<CourtBasic> courtBasicList=iCourtBasicService.list(wrapper_basic);

        //添加详细信息
        courtBasicList.forEach(courtBasic -> {

            QueryWrapper<IndicatorValue> wrapper_indicator=new QueryWrapper<>();
            wrapper_indicator.eq("community_id",courtBasic.getCommunityId());
            wrapper_indicator.eq("court_name",courtBasic.getCourtName());
            List<IndicatorValue> indicatorValueBuildList=iIndicatorValueService.list(wrapper_indicator);

            // 实体类转换为Map
            Map<String,Object> fillData = JSON.parseObject(JSON.toJSONString(courtBasic), Map.class);

            // 先将所有指标信息存进去，所有值均存0
            QueryWrapper<Indicator> queryWrapper_indicator =new QueryWrapper<>();
            queryWrapper_indicator.likeRight("indicator_id","1.11");
            List<Indicator> indicatorList=iIndicatorService.list(queryWrapper_indicator);
            indicatorList.forEach(indicator -> {
                fillData.put(indicator.getIndicatorId().trim(),0);
            });

            // 将数据库中记录的数据进行更新
            indicatorValueBuildList.forEach(indicatorValueBuild -> {
                fillData.put(indicatorValueBuild.getIndicatorId(),indicatorValueBuild.getIndicatorValue());
            });


            fillDatas.add(fillData);
        });

        return fillDatas;
    }

    /**
     * 初始化社区导出信息
     */
    private List<Map<String,Object>> initCommunityData(QueryWrapper<CommunityBasic> wrapper_basic) {

        List<Map<String,Object>> fillDatas = new ArrayList<>();

        List<CommunityBasic> communityBasicList=iCommunityBasicService.list(wrapper_basic);

        //添加详细信息
        communityBasicList.forEach(communityBasic -> {

            QueryWrapper<IndicatorValue> wrapper_indicator=new QueryWrapper<>();
            wrapper_indicator.eq("community_id",communityBasic.getCommunityId());
            wrapper_indicator.eq("court_name","");
            List<IndicatorValue> indicatorValueBuildList=iIndicatorValueService.list(wrapper_indicator);

            // 实体类转换为Map
            Map<String,Object> fillData = JSON.parseObject(JSON.toJSONString(communityBasic), Map.class);

            // 先将所有指标信息存进去，所有值均存0
            QueryWrapper<Indicator> queryWrapper_indicator =new QueryWrapper<>();
            queryWrapper_indicator.likeRight("indicator_id","3.");
            List<Indicator> indicatorList=iIndicatorService.list(queryWrapper_indicator);
            indicatorList.forEach(indicator -> {
                fillData.put(indicator.getIndicatorId().trim(),0);
            });
            // 将数据库中记录的数据进行更新
            indicatorValueBuildList.forEach(indicatorValueBuild -> {
                fillData.put(indicatorValueBuild.getIndicatorId(),indicatorValueBuild.getIndicatorValue());
            });
            fillDatas.add(fillData);
        });

        return fillDatas;
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
     * 图片上传-手写
     */
    @ApiOperation(value = "图片上传-手写")
    @ResponseBody
    @RequestMapping(value = "/uploadImgHand", method = RequestMethod.POST)
    public Result uploadImgHand(
            @RequestParam(name = "buildNumber") String buildNumber,
            @RequestParam(name = "indicatorId") String indicatorId,
            @RequestParam(name = "courtName") String courtName,
            @RequestParam(name = "communityId") String communityId,
            @RequestParam(name = "photoPath") String photoPath,
            @RequestParam("file") MultipartFile file
    ) throws IOException, SQLException {
        byte[] bytes = file.getBytes();
        Blob blob = new SerialBlob(bytes);

        String photoId= UUID.randomUUID().toString();
        Map<String,Object> map=new HashMap<>();
        map.put("build_number",buildNumber);
        map.put("indicator_id",indicatorId);
        map.put("court_name",courtName);
        map.put("community_id",communityId);
        map.put("photo_path",photoPath);
        map.put("photo_id",photoId);
        map.put("photo_file",blob);

        atvService.uploadImg(map);

        return Result.success("修改成功");
    }

    /**
     * 图片上传-保存到后台服务器
     */
    @ApiOperation(value = "图片上传-保存到后台服务器")
    @ResponseBody
    @RequestMapping(value = "/uploadImageLocal",method = RequestMethod.POST)
    public Result uploadImageLocal(@RequestParam("file") MultipartFile file,
                                   @RequestParam(name = "buildNumber") String buildNumber,
                                   @RequestParam(name = "indicatorId") String indicatorId,
                                   @RequestParam(name = "courtName") String courtName,
                                   @RequestParam(name = "communityId") String communityId,
                                   @RequestParam(name = "photoPath") String photoPath) {

        String photoId= UUID.randomUUID().toString();
        //图片保存路径

        String savePath = imgBasePath+photoId+".jpg";

        System.out.println(savePath);

        File saveFile = new File(savePath);

        try {
            file.transferTo(saveFile);
            //将临时存储的文件移动到真实存储路径下
            Map<String,Object> map=new HashMap<>();
            map.put("photo_id",photoId);
            map.put("build_number",buildNumber);
            map.put("indicator_id",indicatorId);
            map.put("court_name",courtName);
            map.put("community_id",communityId);
            map.put("photo_path",imgHost+photoId+".jpg");
            map.put("photo_file","");

            atvService.uploadImg(map);
        } catch (IOException e) {
            e.printStackTrace();
        }

        Map<String,String> map=new HashMap<>();
        map.put("photoId",photoId);
        map.put("photoPath",photoId+".jpg");
        return Result.success("success",map);
    }

    /**
     * 图片删除-手动
     */
    @ApiOperation(value = "图片删除-手动")
    @ResponseBody
    @RequestMapping(value = "/deleteImgHand", method = RequestMethod.GET)
    public Result deleteImgHand(
            @RequestParam(name = "photoId") String photoId
    ) throws IOException, SQLException {

        Map<String,Object> map=new HashMap<>();
        map.put("photo_id",photoId);
        atvService.deleteImg(map);

        return Result.success("删除成功");
    }


    /**
     * 图片获取-手动
     */
    @ApiOperation(value = "图片获取-手动")
    @ResponseBody
    @RequestMapping(value = "/downloadImgHand", method = RequestMethod.GET)
    public Result downloadImgHand(
            @RequestParam(name = "buildNumber") String buildNumber,
            @RequestParam(name = "indicatorId") String indicatorId,
            @RequestParam(name = "courtName") String courtName,
            @RequestParam(name = "communityId") String communityId
    ) throws IOException, SQLException {

        Map<String,Object> map=new HashMap<>();
        map.put("build_number",buildNumber);
        map.put("indicator_id",indicatorId);
        map.put("court_name",courtName);
        map.put("community_id",communityId);
        List<Map<String,Object>> resmap=atvService.downloadImg(map);

        return Result.success("查询成功",resmap);
    }




}
