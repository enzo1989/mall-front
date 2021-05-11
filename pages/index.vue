<template>
  <div>
    <!-- 顶部导航 start -->
    <div class="topnav">
      <div class="topnav_bd w1210 bc">
        <div class="topnav_left">
          
        </div>
        <div class="topnav_right fr">
          <ul>
            <li>您好，欢迎来到商城！[<a href="login.html">登录</a>] [<a href="register.html">免费注册</a>] </li>
            <li class="line">|</li>
            <li>我的订单</li>
            <li class="line">|</li>
            <li>客户服务</li>

          </ul>
        </div>
      </div>
    </div>
    <!-- 顶部导航 end -->
    
    <div style="clear:both;"></div>

    <!-- 头部 start -->
    <div class="header w1210 bc mt15">
      <!-- 头部上半部分 start 包括 logo、搜索、用户中心和购物车结算 -->
      <div class="logo w1210">
        <h1 class="fl"><a href="index.html"><img src="images/logo.png" alt="商城"></a></h1>
        <!-- 头部搜索 start -->
        <div class="search fl">
          <div class="search_form">
            <div class="form_left fl"></div>
            <form action="" name="serarch" method="get" class="fl">
              <input type="text" class="txt" value="请输入商品关键字"><input type="submit" class="btn" value="搜索">
            </form>
            <div class="form_right fl"></div>
          </div>
          
          <div style="clear:both;"></div>

          <div class="hot_search">
            <strong>热门搜索:</strong>
            <a href="">D-Link无线路由</a>
            <a href="">休闲男鞋</a>
            <a href="">TCL空调</a>
            <a href="">耐克篮球鞋</a>
          </div>
        </div>
        <!-- 头部搜索 end -->

        <!-- 用户中心 start-->
        <div class="user fl">
          <dl>
            <dt>
              <em></em>
              <a href="">用户中心</a>
              <b></b>
            </dt>
            <dd>
              <div class="prompt">
                您好，请<a href="">登录</a>
              </div>
              <div class="uclist mt10">
                <ul class="list1 fl">
                  <li><a href="">用户信息&gt;</a></li>
                  <li><a href="">我的订单&gt;</a></li>
                  <li><a href="">收货地址&gt;</a></li>
                  <li><a href="">我的收藏&gt;</a></li>
                </ul>

                <ul class="fl">
                  <li><a href="">我的留言&gt;</a></li>
                  <li><a href="">我的红包&gt;</a></li>
                  <li><a href="">我的评论&gt;</a></li>
                  <li><a href="">资金管理&gt;</a></li>
                </ul>

              </div>
              <div style="clear:both;"></div>
              <div class="viewlist mt10">
                <h3>最近浏览的商品：</h3>
                <ul>
                  <li><a href=""><img src="images/view_list1.jpg" alt=""></a></li>
                  <li><a href=""><img src="images/view_list2.jpg" alt=""></a></li>
                  <li><a href=""><img src="images/view_list3.jpg" alt=""></a></li>
                </ul>
              </div>
            </dd>
          </dl>
        </div>
        <!-- 用户中心 end-->

        <!-- 购物车 start -->
        <div class="cart fl">
          <dl>
            <dt>
              <a href="">去购物车结算</a>
              <b></b>
            </dt>
            <dd>
              <div class="prompt">
                购物车中还没有商品，赶紧选购吧！
              </div>
            </dd>
          </dl>
        </div>
        <!-- 购物车 end -->
      </div>
      <!-- 头部上半部分 end -->
      
      <div style="clear:both;"></div>

      <!-- 导航条部分 start -->
      <div class="nav w1210 bc mt10">
        <!--  商品分类部分 start-->
        <div class="category fl"> <!-- 非首页，需要添加cat1类 -->
          <div class="cat_hd">  <!-- 注意，首页在此div上只需要添加cat_hd类，非首页，默认收缩分类时添加上off类，鼠标滑过时展开菜单则将off类换成on类 -->
            <h2>全部商品分类</h2>
            <em></em>
          </div>
          
          <div class="cat_bd">
             <!--遍历顶级父分类-->
            <div v-for="(v,k) in categorys" :key="k" :class="{cat:true, item1:k==0}">
              <h3><a href="">{{v.cat_name}}</a> <b></b></h3>
              <div class="cat_detail">
                <dl v-for="(v1,k1) in v.children" :key="k1"  :class="{dl_1st:k1==0}">
                  <dt><a href="">{{v1.cat_name}}</a></dt>
                  <dd>
                    <a v-for="(v2,k2) in v1.children" :key="k2">{{v2.cat_name}}</a>					
                  </dd>
                </dl>
              </div>
            </div>


          </div>

        </div>
        <!--  商品分类部分 end--> 

        <div class="navitems fl">
          <ul class="fl">
            <li class="current"><a href="">首页</a></li>
            <li><a href="">电脑频道</a></li>
            <li><a href="">家用电器</a></li>
            <li><a href="">品牌大全</a></li>
            <li><a href="">团购</a></li>
            <li><a href="">积分商城</a></li>
            <li><a href="">夺宝奇兵</a></li>
          </ul>
          <div class="right_corner fl"></div>
        </div>
      </div>
      <!-- 导航条部分 end -->
    </div>
    <!-- 头部 end-->
    
    <div style="clear:both;"></div>
    
    <!-- 综合区域 start 包括幻灯展示，商城快报 -->
    <div class="colligate w1210 bc mt10">
      <!-- 幻灯区域 start -->
      <div class="slide fl">
        <div class="area">
          <div class="slide_items">
            <ul>
              <li><a href=""><img src="images/index_slide1.jpg" alt=""></a></li>
              <li><a href=""><img src="images/index_slide2.jpg" alt=""></a></li>
              <li><a href=""><img src="images/index_slide3.jpg" alt=""></a></li>
              <li><a href=""><img src="images/index_slide4.jpg" alt=""></a></li>
              <li><a href=""><img src="images/index_slide5.jpg" alt=""></a></li>
              <li><a href=""><img src="images/index_slide6.jpg" alt=""></a></li>
            </ul>
          </div>
          <div class="slide_controls">
            <ul>
              <li class="on">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 幻灯区域 end-->
    
      <!-- 快报区域 start-->
      <div class="coll_right fl ml10">
        <div class="ad"><a href=""><img src="images/ad.jpg" alt=""></a></div>
        
        <div class="news mt10">
          <h2><a href="">更多快报&nbsp;&gt;</a><strong>网站快报</strong></h2>
          <ul>
            <li v-for="(v,k) in topNews" :key="k" v-bind:class="{odd:k%2==0}">{{v.title}}</li>
          </ul>
          <!--ul>
            <li class="odd"><a href="">电脑数码双11爆品抢不停</a></li>
            <li><a href="">买茶叶送武夷山旅游大奖</a></li>
            <li class="odd"><a href="">爆款手机最高直降1000</a></li>
            <li><a href="">新鲜褚橙全面包邮开售！</a></li>
            <li class="odd"><a href="">家具家装全场低至3折</a></li>
            <li><a href="">买韩束，志玲邀您看电影</a></li> 
            <li class="odd"><a href="">美的先行惠双11快抢悦</a></li>
            <li><a href="">享生活 疯狂周期购！</a></li>
          </!--ul-->

        </div>
        
        <div class="service mt10">
          <h2>
            <span class="title1 on"><a href="">话费</a></span>
            <span><a href="">旅行</a></span>
            <span><a href="">彩票</a></span>
            <span class="title4"><a href="">游戏</a></span>
          </h2>
          <div class="service_wrap">
            <!-- 话费 start -->
            <div class="fare">
              <form action="">
                <ul>
                  <li>
                    <label for="">手机号：</label>
                    <input type="text" name="phone" value="请输入手机号" class="phone">
                    <p class="msg">支持移动、联通、电信</p>
                  </li>
                  <li>
                    <label for="">面值：</label>
                    <select name="" id="">
                      <option value="">10元</option>
                      <option value="">20元</option>
                      <option value="">30元</option>
                      <option value="">50元</option>
                      <option value="" selected="">100元</option> 
                      <option value="">200元</option>
                      <option value="">300元</option>
                      <option value="">400元</option>
                      <option value="">500元</option>
                    </select>
                    <strong>98.60-99.60</strong>
                  </li>
                  <li>
                    <label for="">&nbsp;</label>
                    <input type="submit" value="点击充值" class="fare_btn"> <span><a href="">北京青春怒放独家套票</a></span>
                  </li>
                </ul>
              </form>
            </div>
            <!-- 话费 start -->
    
            <!-- 旅行 start -->
            <div class="travel none">
              <ul>
                <li>
                  <a href=""><img src="images/holiday.jpg" alt=""></a>
                  <a href="" class="button">度假查询</a>
                </li>
                <li>
                  <a href=""><img src="images/scenic.jpg" alt=""></a>
                  <a href="" class="button">景点查询</a>
                </li>
              </ul>
            </div>
            <!-- 旅行 end -->
              
            <!-- 彩票 start -->
            <div class="lottery none">
              <p><img src="images/lottery.jpg" alt=""></p>
            </div>
            <!-- 彩票 end -->

            <!-- 游戏 start -->
            <div class="game none">
              <ul>
                <li><a href=""><img src="images/sanguo.jpg" alt=""></a></li>
                <li><a href=""><img src="images/taohua.jpg" alt=""></a></li>
                <li><a href=""><img src="images/wulin.jpg" alt=""></a></li>
              </ul>
            </div>
            <!-- 游戏 end -->
          </div>
        </div>

      </div>
      <!-- 快报区域 end-->
    </div>
    <!-- -综合区域 end -->
    
    <div style="clear:both;"></div>

    <!-- 导购区域 start -->
    <div class="guide w1210 bc mt15">
      <!-- 导购左边区域 start -->
      <div class="guide_content fl">
        <h2>
          <span class="on">疯狂抢购</span>
          <span>热卖商品</span>
          <span>推荐商品</span>
          <span>新品上架</span>
          <span class="last">猜您喜欢</span>
        </h2>
        
        <div class="guide_wrap">
          <!-- 疯狂抢购 start-->
          <div class="crazy">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="images/crazy1.jpg" alt=""></a></dt>
                  <dd><a href="">惠普G4-1332TX 14英寸</a></dd>
                  <dd><span>售价：</span><strong> ￥2999.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/crazy2.jpg" alt=""></a></dt>
                  <dd><a href="">直降100元！TCL118升冰箱</a></dd>
                  <dd><span>售价：</span><strong> ￥800.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/crazy3.jpg" alt=""></a></dt>
                  <dd><a href="">康佳液晶37寸电视机</a></dd>
                  <dd><span>售价：</span><strong> ￥2799.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/crazy4.jpg" alt=""></a></dt>
                  <dd><a href="">梨子平板电脑7.9寸</a></dd>
                  <dd><span>售价：</span><strong> ￥1999.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/crazy5.jpg" alt=""></a></dt>
                  <dd><a href="">好声音耳机</a></dd>
                  <dd><span>售价：</span><strong> ￥199.00</strong></dd>
                </dl>
              </li>
            </ul>	
          </div>
          <!-- 疯狂抢购 end-->

          <!-- 热卖商品 start -->
          <div class="hot none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="images/hot1.jpg" alt=""></a></dt>
                  <dd><a href="">索尼双核五英寸四核手机！</a></dd>
                  <dd><span>售价：</span><strong> ￥1386.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/hot2.jpg" alt=""></a></dt>
                  <dd><a href="">华为通话平板仅需969元！</a></dd>
                  <dd><span>售价：</span><strong> ￥969.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/hot3.jpg" alt=""></a></dt>
                  <dd><a href="">卡姿兰明星单品7件彩妆套装</a></dd>
                  <dd><span>售价：</span><strong> ￥169.00</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 热卖商品 end -->

          <!-- 推荐商品 atart -->
          <div class="recommend none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="images/recommend1.jpg" alt=""></a></dt>
                  <dd><a href="">黄飞红麻辣花生整箱特惠装</a></dd>
                  <dd><span>售价：</span><strong> ￥139.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/recommend2.jpg" alt=""></a></dt>
                  <dd><a href="">戴尔IN1940MW 19英寸LE</a></dd>
                  <dd><span>售价：</span><strong> ￥679.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/recommend3.jpg" alt=""></a></dt>
                  <dd><a href="">罗辑思维音频车载CD</a></dd>
                  <dd><span>售价：</span><strong> ￥24.80</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 推荐商品 end -->
        
          <!-- 新品上架 start-->
          <div class="new none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="images/new1.jpg" alt=""></a></dt>
                  <dd><a href="">E路航T70超薄GPS 7寸大屏！</a></dd>
                  <dd><span>售价：</span><strong> ￥369.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/new2.jpg" alt=""></a></dt>
                  <dd><a href="">乐和居 爆品 特价疯狂抢</a></dd>
                  <dd><span>售价：</span><strong> ￥2799.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/new3.jpg" alt=""></a></dt>
                  <dd><a href="">北欧 套装 抄底再续最后几小时</a></dd>
                  <dd><span>售价：</span><strong> ￥999.00</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 新品上架 end-->

          <!-- 猜您喜欢 start -->
          <div class="guess none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="images/guess1.jpg" alt=""></a></dt>
                  <dd><a href="">Thinkpad USB光电鼠标</a></dd>
                  <dd><span>售价：</span><strong> ￥39.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/guess2.jpg" alt=""></a></dt>
                  <dd><a href="">宜客莱（ECOLA）电脑散热器</a></dd>
                  <dd><span>售价：</span><strong> ￥89.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="images/guess3.jpg" alt=""></a></dt>
                  <dd><a href="">巴黎欧莱雅男士洁面膏 100ml</a></dd>
                  <dd><span>售价：</span><strong> ￥30.00</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 猜您喜欢 end -->

        </div>

      </div>
      <!-- 导购左边区域 end -->
      
      <!-- 侧栏 网站首发 start-->
      <div class="sidebar fl ml10">
        <h2><strong>网站首发</strong></h2>
        <div class="sidebar_wrap">
          <dl class="first">
            <dt class="fl"><a href=""><img src="images/viewsonic.jpg" alt=""></a></dt>
            <dd><strong><a href="">ViewSonic优派N710 </a></strong> <em>首发</em></dd>
            <dd>苹果iphone 5免费送！攀高作为全球智能语音血压计领导品牌，新推出的黑金刚高端智能电子血压计，改变传统测量方式让血压测量迈入一体化时代。</dd>
          </dl>

          <dl>
            <dt class="fr"><a href=""><img src="images/samsung.jpg" alt=""></a></dt>
            <dd><strong><a href="">Samsung三星Galaxy</a></strong> <em>首发</em></dd>
            <dd>电视百科全书，360°无死角操控，感受智能新体验！双核CPU+双核GPU+MEMC运动防抖，58寸大屏打造全新视听盛宴！</dd>
          </dl>
        </div>
        

      </div>
      <!-- 侧栏 网站首发 end -->
      
    </div>
    <!-- 导购区域 end -->
    
    <div style="clear:both;"></div>

    <!--1F 电脑办公 start -->
    <div v-for="(v,kv) in floors" :key="kv" class="floor1 floor w1210 bc mt10">
      <!-- 1F 左侧 start -->
      <div class="floor_left fl">
        <!-- 商品分类信息 start-->
        <div class="cate fl">
          <h2>{{v.floor_name}}</h2>
          <div class="cate_wrap">
            <ul>
              <li v-for="(sc, ksc) in v.sub_categorys" :key="ksc" ><a href=""><b>.</b>{{sc.cat_name}}</a></li>
            </ul>
            <p><a :href="v.left_ad.link"><img :src="v.left_ad.img" alt=""></a></p>
          </div>
          

        </div>
        <!-- 商品分类信息 end-->

        <!-- 商品列表信息 start-->
        <div class="goodslist fl">
          <h2>
            <span class="on">推荐商品</span>
            <span v-for="(rc,krc) in v.rec_categorys" :key="krc">{{rc.cat_name}}</span>
          </h2>
          <div class="goodslist_wrap">
            <div >
              <ul>
                <li v-for="(rg,krg) in v.rec_goods" :key="krg">
                  <dl>
                    <dt><a :href="'/goods/'+rg.id"><img :src="rg.logo" alt=""></a></dt>
                    <dd><a :href="'/goods/'+rg.id">{{rg.goods_name}}</a></dd>
                    <dd><span>售价：</span> <strong>￥{{rg.price}}</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>
             
            <div v-for="(rc,krc) in v.rec_categorys" :key="krc" class="none">
              <ul>
                <li  v-for="(g,kg) in rc.goods" :key="kg">
                  <dl>
                    <dt><a :href="'/goods/'+g.id"><img :src="g.log" alt=""></a></dt>
                    <dd><a :href="'/goods/'+g.id">{{g.goods_name}}</a></dd>
                    <dd><span>售价：</span> <strong>￥{{g.price}}</strong></dd>
                  </dl>
                </li>
                
              </ul>
            </div>


          </div>
        </div>
        <!-- 商品列表信息 end-->
      </div>
      <!-- 1F 左侧 end -->
      
      <!-- 右侧 start -->
      <div class="sidebar fl ml10">
        <!-- 品牌旗舰店 start -->
        <div class="brand">
          <h2><a href="">更多品牌&nbsp;&gt;</a><strong>品牌旗舰店</strong></h2>
          <div class="sidebar_wrap">
            <ul>
              <li v-for="(br,kbr) in v.brands" :key="kbr"><a href=""><img :src="br.logo" alt=""></a></li>
            </ul>
          </div>
        </div>
        <!-- 品牌旗舰店 end -->
        
        <!-- 分类资讯 start -->
        <div class="info mt10">
          <h2><strong>分类资讯</strong></h2>
          <div class="sidebar_wrap">
            <ul>
              <li v-for="(n,kn) in v.news" :key="kn"><a href=""><b>.</b>{{n.title}}</a></li>
            </ul>
          </div>
          
        </div>
        <!-- 分类资讯 end -->
        
        <!-- 广告 start -->
        <div class="ads mt10">
          <a :href="v.right_ad.link"><img :src="v.right_ad.img" alt=""></a>
        </div>
        <!-- 广告 end -->
      </div>
      <!-- 右侧 end -->

    </div>
    <!--1F 电脑办公 start -->


    
    <div style="clear:both;"></div>

    <!-- 底部导航 start -->
    <div class="bottomnav w1210 bc mt10">
      <div class="bnav1">
        <h3><b></b> <em>购物指南</em></h3>
        <ul>
          <li><a href="">购物流程</a></li>
          <li><a href="">会员介绍</a></li>
          <li><a href="">团购/机票/充值/点卡</a></li>
          <li><a href="">常见问题</a></li>
          <li><a href="">大家电</a></li>
          <li><a href="">联系客服</a></li>
        </ul>
      </div>
      
      <div class="bnav2">
        <h3><b></b> <em>配送方式</em></h3>
        <ul>
          <li><a href="">上门自提</a></li>
          <li><a href="">快速运输</a></li>
          <li><a href="">特快专递（EMS）</a></li>
          <li><a href="">如何送礼</a></li>
          <li><a href="">海外购物</a></li>
        </ul>
      </div>

      
      <div class="bnav3">
        <h3><b></b> <em>支付方式</em></h3>
        <ul>
          <li><a href="">货到付款</a></li>
          <li><a href="">在线支付</a></li>
          <li><a href="">分期付款</a></li>
          <li><a href="">邮局汇款</a></li>
          <li><a href="">公司转账</a></li>
        </ul>
      </div>

      <div class="bnav4">
        <h3><b></b> <em>售后服务</em></h3>
        <ul>
          <li><a href="">退换货政策</a></li>
          <li><a href="">退换货流程</a></li>
          <li><a href="">价格保护</a></li>
          <li><a href="">退款说明</a></li>
          <li><a href="">返修/退换货</a></li>
          <li><a href="">退款申请</a></li>
        </ul>
      </div>

      <div class="bnav5">
        <h3><b></b> <em>特色服务</em></h3>
        <ul>
          <li><a href="">夺宝岛</a></li>
          <li><a href="">DIY装机</a></li>
          <li><a href="">延保服务</a></li>
          <li><a href="">家电下乡</a></li>
          <li><a href="">京东礼品卡</a></li>
          <li><a href="">能效补贴</a></li>
        </ul>
      </div>
    </div>
    <!-- 底部导航 end -->

  </div>
</template>

<script>
//import $ from 'jquery'
export default {
  data() {
    return {
      //topNews:[]
      categorys:[]
    }
  },
  //layout : 'loginAndRegist',
  //layout: 'default'  此行可省略 ，默认default
  // 网站初始化的时候加载网站快报
  // before_create created  nuet,客户端和服务端个执行一次
  // before_mount/mounted
  // before_update/updated
  // before_destory/destoyed
  /*
   async mounted(){
    let {data} = await this.$axios.$get("/web-service/news",{
      params:{
        limit:8,
        sort_by:"id",
        sort_way:"desc",
        page : 1,
        per_page: 8
      }
    })
    console.log(data);
    this.topNews = data.data
    console.log(this.topNews);

  } */
  /**
   * 获取分类数据
   
  
  async mounted() {
    let {data} = await this.$axios.$get("/web-service/categorys")
    //console.log(data.data);
    this.categorys = data.data
  },
  */
  // 为了SEO asyncData一定在服务器端执行
  
  // mounted 用updated
  // asyncData 用 mounted
  mounted  (){
    //导航菜单效果
    $(".cat").hover(function(){
      $(this).find(".cat_detail").show();
      $(this).find("h3").addClass("on");
    },function(){
      $(this).find(".cat_detail").hide();
      $(this).find("h3").removeClass("on");
    });

    //各楼层区域切换
    $(".goodslist h2 span").mouseover(function(){
      $(this).addClass("on").siblings().removeClass("on");
      $(this).parent().next(".goodslist_wrap").find("div").hide().eq($(this).index()).show();

    });
  },
  async asyncData({$axios}){
    let{data:data} = await $axios.$get("/web-service/news",{
      params: {
        limit:8,
        sort_by:"id",
        sort_way:"desc",
        page : 1,
        per_page: 8
      }
    })
    let {data:categorysData} = await $axios.$get("/web-service/categorys")
    let {data:floorData} = await $axios.$get("http://localhost:7300/mock/607768b02fe289b320b5422e/mallmock/web-service/floors")
    console.log(floorData.data[0].sub_categorys)
    return {
      topNews:data.data,
      categorys:categorysData.data,
      floors:floorData.data}
  },
}

</script>

<style> 
</style>
