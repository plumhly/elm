import axios from 'axios';
import {baseUrl} from '../config/env';
import {getStore} from '../config/mUtils';
import { verify } from 'crypto';

axios.defaults.baseURL = baseUrl;
axios.defaults.cert

/**
 * 获取用户信息
 */
export const getUser = () => axios.get('/v1/user',{
    params: {
        user_id: getStore('user_id')
    }
});

/**
 * 获取当地城市
 */
export const cityGuess = () => axios.get('/v1/cities',{
    params: {
        type: 'guess'
    }
});

/**
 * 热门城市
 */
export const hotcity = () => axios.get('/v1/cities',{
    params: {
        type: 'hot'
    }
});

/**
 * 城市列表
 */
export const allCities = () => axios.get("/v1/cities", {
    params: {
        type: 'group'
    }
});

/**
 * 获取图片验证码
 */
export const getCaptchas = () => axios.post("/v1/captchas").then(result => result.data);

/**
 * 登录
 * @param {用户名} username 
 * @param {密码} password 
 * @param {验证码} captcha_code 
 */
export const accountLogin = (username, password, captcha_code) => axios.post("/v2/login",{username, password, captcha_code}).then(res => res.data);

/**
 * 修改密码
 * @param {string} username - 用户名 
 * @param {string} oldpassWord  - 旧密码
 * @param {string} newpassword - 新密码
 * @param {string} confirmpassword - 新密码确认 
 * @param {string} captcha_code - 验证码
 */
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => axios.post("/v2/changepassword",{username, oldpassWord, newpassword, confirmpassword, captcha_code}).then(res => res.data);
