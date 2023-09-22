// 引入mock
import Mock from 'mockjs';
// 引入json数据
import floor from './floor.json';
import banner from './banner.json';

Mock.mock('/mock/banner',{code:200,data:banner});//模拟首页轮播图数据
Mock.mock('/mock/floor',{code:200,data:floor}); //模拟