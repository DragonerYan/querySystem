package com.example.atv.controller;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.atv.constant.Result;
import com.example.atv.generatetor.entity.*;
import com.example.atv.generatetor.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Api(description = "atv接口")
@Slf4j
@AllArgsConstructor
@CrossOrigin
@Controller
@RequestMapping("/api")
public class MainController {

    private final ICommunityBasicService iCommunityBasicService;
    private final ICommunityService iCommunityService;
    private final ICourtBasicService iCourtBasicService;
    private final IIndicatorService iIndicatorService;
    private final IIndicatorValueService iIndicatorValueService;
    private final IUserService iUserService;



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

        List<Community> communityList=new ArrayList<>();

        try{
            communityList=iCommunityService.list();
        }catch (Exception e){
            log.debug(e.getMessage());
        }

        return Result.success(communityList);
    }



    /**
     * 社区基本信息查询
     */
    @ApiOperation(value = "社区基本信息查询")
    @ResponseBody
    @RequestMapping(value = "/communityBasicInfo", method = RequestMethod.GET)
    public Result communityBasicInfo(@RequestParam(name = "communityId",required = false) String communityId) {

        List<CommunityBasic> communityBasicList=iCommunityBasicService.list();

        return Result.success(communityBasicList);
    }

    /**
     * 小区基本信息查询
     */
    @ApiOperation(value = "社区基本信息查询")
    @ResponseBody
    @RequestMapping(value = "/courtBasicInfo", method = RequestMethod.GET)
    public Result courtBasicInfo(@RequestParam(name = "indicatorId",required = false) String indicatorId) {

        List<CourtBasic> courtBasicList=iCourtBasicService.list();

        return Result.success(courtBasicList);
    }



    /**
     * 小区基本信息暂存/提交
     */
    @ResponseBody
    @RequestMapping(value = "/communitySave", method = RequestMethod.POST)
    public Result communitySave() {

        return Result.success("接口未完成");
    }



    /**
     * 社区具体信息暂存/提交
     */
    @ApiOperation(value = "社区基本信息保存")
    @ResponseBody
    @RequestMapping(value = "/communityBaseSave", method = RequestMethod.POST)
    public Result communityBaseSave(@RequestBody Map map) {
        CommunityBasic communityBasic = JSON.parseObject(JSON.toJSONString(map),CommunityBasic.class);
        try{
            iCommunityBasicService.saveOrUpdate(communityBasic);
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
    public Result courtBasicSave(@RequestBody Map map) {

        CourtBasic courtBasic  = JSON.parseObject(JSON.toJSONString(map),CourtBasic.class);
        try{
            iCourtBasicService.saveOrUpdate(courtBasic);
            return Result.success("插入成功");
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail(e.getMessage());
        }
    }



    /**
     * 具体信息暂存/提交
     */
    @ResponseBody
    @RequestMapping(value = "/indicatorValueSave", method = RequestMethod.POST)
    public Result indicatorValueSave(@RequestBody Map map) {

        IndicatorValue indicatorValue  = JSON.parseObject(JSON.toJSONString(map),IndicatorValue.class);
        try{
            iIndicatorValueService.saveOrUpdate(indicatorValue);
            return Result.success("插入成功");
        }catch (Exception e){
            log.debug(e.getMessage());
            return Result.fail(e.getMessage());
        }
    }




    /**
     * 登陆
     */
    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public Result login(
            @RequestParam(name = "province") String province,
            @RequestParam(name = "city") String city,
            @RequestParam(name = "county") String county,
            @RequestParam(name = "street") String street,
            @RequestParam(name = "communityId") String communityId,
            @RequestParam(name = "userName") String userName,
            @RequestParam(name = "password") String password
    ) {
        //根据userName查询是否存在
        QueryWrapper<User> wrapper=new QueryWrapper<>();
        wrapper.eq("province",province).eq("city",city).eq("county",county)
                .eq("street",street).eq("community_id",communityId).eq("username",userName);
        User user=iUserService.getOne(wrapper);
        if(user==null){
            return Result.fail("无对应用户存在");
        }
        //查看密码是否匹配
        if(!user.getPassword().equals(password)){
            return Result.fail("密码错误！");
        }
        return Result.success("登陆成功");
    }



    /**
     * 修改密码
     */
    @ResponseBody
    @RequestMapping(value = "/updateUserInfo", method = RequestMethod.POST)
    public Result updateUserInfo(
            @RequestParam(name = "userName") String userName,
            @RequestParam(name = "password") String password
    ) {
        //根据userName查询是否存在
        QueryWrapper<User> wrapper=new QueryWrapper<>();
        wrapper.eq("userName",userName);
        User user=iUserService.getOne(wrapper);
        if(user==null){
            return Result.fail("用户不存在！");
        }
        //查看密码是否匹配
        if(user.getPassword().equals(password)){
            return Result.fail("密码重复");
        }

        User user_new=new User();
        user_new.setCommunityId(userName);
        user_new.setPassword(password);
        user_new.setCity(user.getCity());
        iUserService.updateById(user_new);

        return Result.success("修改成功");
    }


}
