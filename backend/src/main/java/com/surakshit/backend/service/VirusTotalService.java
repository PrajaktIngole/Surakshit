package com.surakshit.backend.service;

import org.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class VirusTotalService {

    private static final String API_KEY =
            "a3c13aea56fd13bf72c8166ea66242bc0efe9fb5428681be52357da78b46c45a";

    @Autowired
    private RestTemplate restTemplate;

    public JSONObject scanUrl(String url) {

        try {

            // STEP 1 → Submit URL

            String submitEndpoint =
                    "https://www.virustotal.com/api/v3/urls";

            HttpHeaders headers =
                    new HttpHeaders();

            headers.set("x-apikey", API_KEY);

            headers.setContentType(
                    MediaType.APPLICATION_FORM_URLENCODED
            );

            HttpEntity<String> entity =
                    new HttpEntity<>(
                            "url=" + url,
                            headers
                    );

            ResponseEntity<String> submitResponse =
                    restTemplate.exchange(
                            submitEndpoint,
                            HttpMethod.POST,
                            entity,
                            String.class
                    );

            JSONObject submitJson =
                    new JSONObject(
                            submitResponse.getBody()
                    );

            String analysisId =
                    submitJson
                            .getJSONObject("data")
                            .getString("id");

            // WAIT few seconds
            Thread.sleep(30000);

            // STEP 2 → Fetch Result

            String resultEndpoint =
                    "https://www.virustotal.com/api/v3/analyses/"
                            + analysisId;

            HttpEntity<String> resultEntity =
                    new HttpEntity<>(headers);

            ResponseEntity<String> resultResponse =
                    restTemplate.exchange(
                            resultEndpoint,
                            HttpMethod.GET,
                            resultEntity,
                            String.class
                    );

            JSONObject resultJson =
                    new JSONObject(
                            resultResponse.getBody()
                    );

            return resultJson;

        } catch (Exception e) {

            e.printStackTrace();

            return null;
        }
    }
}