package com.web.apicloud.model.parsing;

import com.web.apicloud.domain.vo.PropertyVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Service
public class ClassParsingServiceImpl implements ClassParsingService {

    private static final String LIST = "List";
    private static final String OBJECT = "Object";
    private static final String[] accessModifier = {"public", "protected", "private", "default", "static"};
    private static final String[] type = {"String", "Long", "long", "Integer", "int", "float", "Float", "Double", "double", "Boolean", "boolean", "Character", "char", "Short", "short", "Byte", "byte", "Byte[]", "byte[]"};

    private static String groupSecretKey = "";
    public static ArrayList<String> useQuery = new ArrayList<>();
    public static ArrayList<String> useRequest = new ArrayList<>();
    public static ArrayList<String> useResponse = new ArrayList<>();

    private final S3Service s3Service;
    private final ParsingService parsingService;

    @Override
    public PropertyVO getBody(String secretKey, String name, String category) throws IOException {
        PropertyVO requestBody = new PropertyVO();

        if (parsingService.KMP(name, LIST) != -1) {
            name = name.substring(5, name.length() - 1);
            requestBody.setCollectionType(LIST);
        }

        for (String type : type) {
            if (type.equals(name)) {
                requestBody.setType(name);
                return requestBody;
            }
        }

        if (name.equals("void")) {
            requestBody.setType("void");
            return requestBody;
        }

        requestBody.setDtoName(name);
        requestBody.setType(OBJECT);
        if (name.equals(OBJECT)) return requestBody;

        if (category.equals("query")) {
            if (useQuery.contains(name)) return requestBody;
            useQuery.add(name);
        } else if (category.equals("request")) {
            if (useRequest.contains(name)) return requestBody;
            useRequest.add(name);
        } else if (category.equals("response")) {
            if (useResponse.contains(name)) return requestBody;
            useResponse.add(name);
        }

        groupSecretKey = secretKey;
        if (groupSecretKey == null || groupSecretKey.equals("")) return null;

        Map<String, List<String>> getFindFile = s3Service.findFile(name + ".java", groupSecretKey);
        if (getFindFile == null) return null;
        List<String> lines = getFindFile.get("code");
        if (lines == null) return null;
        int i = 0;
        while (i < lines.size()) {
            if (parsingService.KMP(lines.get(i++), name) != -1) break;
        }

        while (i < lines.size()) {
            if (!lines.get(i).equals("")) {
                PropertyVO property = getProperty(lines.get(i), category);
                if (property != null) requestBody.getProperties().add(property);
            }
            i++;
        }
        return requestBody;
    }

    public PropertyVO getProperty(String str, String category) throws IOException {
        if (str.charAt(str.length() - 1) != ';') return null;
        str = str.strip();
        str = str.replaceAll(";", "");
        String[] tokens = str.split(" ");
        if (tokens.length <= 1) return null;

        int j = 0;
        boolean accessFlag = false;
        while (j < tokens.length) {
            boolean state = false;
            for (int k = 0; k < accessModifier.length; k++) {
                if (tokens[j].equals(accessModifier[k])) {
                    state = true;
                    accessFlag= true;
                    break;
                }
            }
            if (!state) break;
            j++;
        }

        if (!accessFlag) return null;
        if ((j + 1) >= tokens.length) return null;
        PropertyVO getPropertyVO = getBody(groupSecretKey, tokens[j], category);
        if (getPropertyVO == null) return null;

        return PropertyVO.builder()
                .dtoName(getPropertyVO.getDtoName())
                .name(tokens[j + 1])
                .type(getPropertyVO.getType())
                .collectionType(getPropertyVO.getCollectionType())
                .properties(getPropertyVO.getProperties())
                .required(true).build();
    }
}
