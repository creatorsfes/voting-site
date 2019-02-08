package com.creatorsfes.voteserver.config;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	SuccessHandler successHandler;
	
	@Bean
    SuccessHandler successHander() {
        return new SuccessHandler();
    }
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
        	.antMatchers("/*", "/assets/*", "/console/*")
        	.permitAll()
        	.anyRequest().authenticated()
        	.and()
        	.oauth2Login()
//        	.successHandler(successHandler)
        	.and()
        	.logout().logoutUrl("/api/v1/logout");
        http.csrf().disable();
        http.cors();
        http.headers().frameOptions().disable();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        final CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Arrays.asList("*"));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }    

    public class SuccessHandler implements AuthenticationSuccessHandler {
    	@Override
    	public void onAuthenticationSuccess(HttpServletRequest req, HttpServletResponse res, Authentication auth)
    			throws IOException, ServletException {
//    		res.sendRedirect("http://localhost:4200");
    	}
    }
 }