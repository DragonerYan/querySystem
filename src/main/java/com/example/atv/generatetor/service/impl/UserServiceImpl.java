package com.example.atv.generatetor.service.impl;

import com.example.atv.generatetor.entity.User;
import com.example.atv.generatetor.mapper.UserMapper;
import com.example.atv.generatetor.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author yxz
 * @since 2023-06-10
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

}
