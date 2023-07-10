package com.example.atv;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;

public class codeGenerator {

    /**
     * 程序中并未使用，
     * 这里用作自动生成generatetor目录下的代码
     * @param args string
     */
    public static void main(String[] args) {
        String url="jdbc:mysql://127.0.0.1:3306/bjtu_atv?useSSL=false&characterEncoding=UTF-8";
        FastAutoGenerator.create(url, "root", "yxz09179012")
                .globalConfig(builder -> {
                    builder.author("yxz") // 设置作者
                            .enableSwagger() // 开启 swagger 模式
                            .fileOverride() // 覆盖已生成文件
                            .outputDir("/Users/yanxinzhao/Desktop/atv-qu/smokeManagement/src/main/java/"); // 指定输出目录
                })
                .strategyConfig(builder -> {
                    builder.addInclude("user");
                }).strategyConfig(builder->{
                    builder.addInclude("community");
                }).strategyConfig(builder->{
                    builder.addInclude("community_basic");
                }).strategyConfig(builder->{
                    builder.addInclude("court_basic");
                }).strategyConfig(builder->{
                    builder.addInclude("indicator");
                }).strategyConfig(builder->{
                    builder.addInclude("indicator_value");;
                }).strategyConfig(builder->{
                    builder.addInclude("indicator_value_build");
                }).strategyConfig(builder->{
                    builder.addInclude("build_basic");
                })
                .packageConfig(builder -> {
                    builder.parent("com.example.atv") // 设置父包名
                            .moduleName("generatetor"); // 设置父包模块名
                            //.pathInfo(Collections.singletonMap(OutputFile.xml, "/Users/yanxinzhao/Desktop/未命名文件夹/smokeManagement/")); // 设置mapperXml生成路径
                })
                .execute();
    }
}
