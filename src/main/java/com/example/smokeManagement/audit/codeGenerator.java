package com.example.smokeManagement.audit;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;

public class codeGenerator {

    /**
     * 程序中并未使用
     * @param args string
     */
    public static void main(String[] args) {
        String url="jdbc:mysql://127.0.0.1:3306/bjtu_atv?useSSL=false&characterEncoding=UTF-8";
        FastAutoGenerator.create(url, "root", "")
                .globalConfig(builder -> {
                    builder.author("baomidou") // 设置作者
                            .enableSwagger() // 开启 swagger 模式
                            .fileOverride() // 覆盖已生成文件
                            .outputDir("/Users/yanxinzhao/Desktop/未命名文件夹/smokeManagement/"); // 指定输出目录
                })
                .strategyConfig(builder -> {
                    builder.addInclude("user").addInclude("community").addInclude("community_basic").addInclude("court_basic").addInclude("indicator").addInclude("indicator_value"); // 设置需要生成的表名
                })
                .execute();
    }
}
