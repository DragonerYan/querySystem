package com.example.smokeManagement.audit.controller;

import com.example.smokeManagement.audit.constant.Result;
import com.example.smokeManagement.audit.dao.mapper.*;
import com.example.smokeManagement.audit.entity.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@CrossOrigin
@Controller
@RequestMapping("/api")
public class MainController {

    private final CommunityBasicMapper communityBasicMapper;
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
        return "hello world";
    }



    /**
     * 小区基本信息查询
     */
    @ResponseBody
    @RequestMapping(value = "/commiunityInfo", method = RequestMethod.GET)
    public Result commiunityInfo(@RequestParam(name = "communityId") String communityId) {

        Community community=communityMapper.selectById(communityId);
        CommunityBasic communityBasic=communityBasicMapper.selectById(communityId);
        CourtBasic courtBasic=courtBasicMapperl.selectById(communityId);

        Map<Object,Object> res=new HashMap<>();
        res.put("community",community);
        res.put("communityBasic",communityBasic);
        res.put("courtBasic",courtBasic);

        return Result.success(res);
    }



    /**
     * 社区基本信息查询
     */
    @ResponseBody
    @RequestMapping(value = "/indicatorInfo", method = RequestMethod.GET)
    public Result indicatorInfo(@RequestParam(name = "indicatorId") String indicatorId) {

        Indicator indicator=indicatorMapper.selectById(indicatorId);
        IndicatorValue indicatorValue=indicatorValueMapper.selectById(indicatorId);

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
    public String communitySave() {
        return "hello world";
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
        User user=userMapper.selectById(userName);
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
        User user=userMapper.selectById(userName);
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
