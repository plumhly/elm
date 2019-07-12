import axios from 'axios';
import {baseUrl} from '../config/env';
import {getStore} from '../config/mUtils';

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

export const accountLogin = (username, password, captcha_code) => axios.post("/v2/login",{username, password, captcha_code}).then(res => res.data)