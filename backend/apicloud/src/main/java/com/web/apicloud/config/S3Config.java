package com.web.apicloud.config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class S3Config {

    @Value("${cloud.aws.credentials.accessKey}")
    public String accessKey;
    @Value("${cloud.aws.credentials.secretKey}")
    public String secretKey;
    @Value("${cloud.aws.region.static}")
    public String region;

    @Bean
    @Primary
    public BasicAWSCredentials awsCredentialsProvider() {
        BasicAWSCredentials basicAWSCredentials = new BasicAWSCredentials(accessKey, secretKey);
        return basicAWSCredentials;
    }

    @Bean
    public AmazonS3 amazonS3() {
        AmazonS3 s3Builder = AmazonS3ClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentialsProvider()))
                .build();
        return s3Builder;
    }

    @Bean
    public TransferManager transferManager() {
        TransferManager transferManager = TransferManagerBuilder.standard()
                .withS3Client(amazonS3())
                .build();
        return transferManager;
    }
}
