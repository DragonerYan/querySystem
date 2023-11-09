package com.example.atv.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;


@Component
public class RedisUtils {

    /**
     * 如果使用 @Autowired 注解完成自动装配 那么
     * RedisTemplate要么不指定泛型,要么泛型 为<Stirng,String> 或者<Object,Object>
     * 如果你使用其他类型的 比如RedisTemplate<String,Object>
     * 那么请使用 @Resource 注解
     * */
    @Resource
    private RedisTemplate<String,Object> redisTemplate;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());


    /**
     * 将List数据放入Redis缓存，并设置过期时间（单位：秒）
     * @param key 缓存的key
     * @param data List数据
     * @param expireTime 过期时间（单位：秒）
     */
    public void putListToCache(String key, List<?> data, long expireTime) {
        redisTemplate.opsForList().rightPushAll(key, data);
        redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
    }


    /**
     * 缓存value
     */
    public boolean cacheValue(String key, Object value, long time) {
        try {
            ValueOperations<String, Object> valueOperations = redisTemplate.opsForValue();
            System.out.println(redisTemplate.keys("name"));
            valueOperations.set(key, value);
            if (time > 0) {
                // 如果有设置超时时间的话
                redisTemplate.expire(key, time, TimeUnit.SECONDS);
            }
            return true;
        } catch (Throwable e) {
            logger.error("缓存[" + key + "]失败, value[" + value + "] " + e.getMessage());
        }
        return false;
    }

    /**
     * 缓存value，没有设置超时时间
     */
    public boolean cacheValue(String key, Object value) {
        return cacheValue(key, value, -1);
    }

    /**
     * 判断缓存是否存在
     */
    public boolean containsKey(String key) {
        try {
            return Boolean.TRUE.equals(redisTemplate.hasKey(key));
        } catch (Throwable e) {
            logger.error("判断缓存是否存在时失败key[" + key + "]", "err[" + e.getMessage() + "]");
        }
        return false;
    }

    /**
     * 根据key，获取缓存
     */
    public Object getValue(String key) {
        try {
            ValueOperations<String, Object> valueOperations = redisTemplate.opsForValue();
            return valueOperations.get(key);
        } catch (Throwable e) {
            logger.error("获取缓存时失败key[" + key + "]", "err[" + e.getMessage() + "]");
        }
        return null;
    }

    /**
     * 移除缓存
     */
    public boolean removeValue(String key) {
        try {
            redisTemplate.delete(key);
            return true;
        } catch (Throwable e) {
            logger.error("移除缓存时失败key[" + key + "]", "err[" + e.getMessage() + "]");
        }
        return false;
    }

    /**
     * 根据前缀移除所有以传入前缀开头的key-value
     */
    public boolean removeKeys(String pattern) {
        try {
            Set<String> keySet = redisTemplate.keys(pattern + "*");
            redisTemplate.delete(keySet);
            return true;
        } catch (Throwable e) {
            logger.error("移除key[" + pattern + "]前缀的缓存时失败", "err[" + e.getMessage() + "]");
        }
        return false;
    }

}
