package com.example.atv.notgenerator.controller;

import com.alibaba.fastjson.JSON;

import com.example.atv.notgenerator.constant.Result;
import com.example.atv.generatetor.entity.Community;
import com.example.atv.generatetor.service.ICommunityBasicService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@AllArgsConstructor
@CrossOrigin
@Controller
@RequestMapping("/api")
public class MainController {

    private final ICommunityBasicService communityBasicMapper;
    private final CommunityMapper communityMapper;

    private final CourtBasicMapper courtBasicMapperl;
    private final IndicatorMapper indicatorMapper;
    private final IndicatorValueMapper indicatorValueMapper;
    private UserMapper userMapper;



    /**
     * 测试接口
     * @return string
     */
    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test() {
        log.debug("test-GET:info");
        return "hello world";
    }



    /**
     * commiunity信息查询
     */
    @ResponseBody
    @RequestMapping(value = "/commiunityInfo", method = RequestMethod.GET)
    public Result commiunityInfo(@RequestParam(name = "communityId",required = false) String communityId) {

        List<Community> communityList=communityMapper.list();

        return Result.success(communityList);
    }



    /**
     * 社区基本信息查询
     */
    @ResponseBody
    @RequestMapping(value = "/indicatorInfo", method = RequestMethod.GET)
    public Result indicatorInfo(@RequestParam(name = "indicatorId") String indicatorId) {

        Indicator indicator=indicatorMapper.getById(indicatorId);
        IndicatorValue indicatorValue=indicatorValueMapper.getById(indicatorId);

        Map<Object,Object> res=new HashMap<>();
        res.put("indicator",indicator);
        res.put("indicatorValue",indicatorValue);
        return Result.success(res);
    }



    /**
     * 小区基本信息暂存/提交
     */
    @ResponseBody
    @RequestMapping(value = "/communitySave", method = RequestMethod.POST)
    public Result communitySave(@RequestBody Map map) {

        Community community = JSON.parseObject(JSON.toJSONString(map),Community.class);
        CommunityBasic communityBasic = JSON.parseObject(JSON.toJSONString(map),CommunityBasic.class);
        communityBasicMapper.save(communityBasic);

        CourtBasic courtBasic  = JSON.parseObject(JSON.toJSONString(map),CourtBasic.class);


        return Result.success();
    }



    /**
     * 小区具体信息暂存/提交
     */
    @ResponseBody
    @RequestMapping(value = "/communityBaseSave", method = RequestMethod.POST)
    public String communityBaseSave() {
        return "hello world";
    }



    /**
     * 社区基本信息暂存/提交
     */
    @ResponseBody
    @RequestMapping(value = "/indicatorSave", method = RequestMethod.POST)
    public String indicatorSave() {
        return "hello world";
    }



    /**
     * 社区具体信息暂存/提交
     */
    @ResponseBody
    @RequestMapping(value = "/indicatorValueSave", method = RequestMethod.POST)
    public String indicatorValueSave() {
        return "hello world";
    }



    /**
     * 登陆
     */
    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public Result login(
            @RequestParam(name = "userName") String userName,
            @RequestParam(name = "password") String password
    ) {
        //根据userName查询是否存在
        User user=userMapper.getById(userName);
        if(user==null){
            return Result.fail("用户不存在！");
        }
        //查看密码是否匹配
        if(!user.getPassword().equals(password)){
            return Result.fail("密码错误！");
        }
        return Result.success("登陆成功");
    }

    /**
     * 退出登陆
     */

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
        User user=userMapper.getById(userName);
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
        userMapper.updateById(user_new);

        return Result.success("修改成功");
    }


}
