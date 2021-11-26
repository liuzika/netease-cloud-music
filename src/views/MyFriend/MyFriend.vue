<template>
  <div class="friend-container container">
    <!-- 未登录显示 -->
    <NotLogin :showWhich='friend' v-if="!isLogin"></NotLogin>
    <div class="main-friend" v-else>
      <div class="mn-left">
        <div class="mn-wrap">
          <PubHeader title="动态" height='40px' fSize='24px' lineHeight='32px'>
            <template v-slot:right>
              <span class="pub-event-btn f-fr" title="发动态"></span>
              <span class="pub-video-btn f-fr" title="发布视频"></span>
            </template>
          </PubHeader>

          <a class="m-dynamicbar f-ff1" href="#" id="newTrackLink" style="display:none;" hidefocus="true"><em>0</em>条新动态<i class="u-icn u-icn-63"></i></a>
          <div class="action-list">
            <a data-action="pull" class="m-dynamicbar f-ff1 j-flag" style="display:none;" href="javascript:;"></a>
            <div class="m-timeline">
              <ul class="m-dlist j-flag">
                <li class="itm" id="auto-id-U81oZ4bvmOxOaMpU">
                  <div class="gface">
                    <a href="/user/home?id=330293944" class="ficon"><img class="j-flag" src="http://p1.music.126.net/pVptwn0wRkMLLmjIdtGr7Q==/109951165973320454.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-SuvKToCTEViCTmBT">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=330293944" class="s-fc7">二笑倾心丶</a><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=20225889131&amp;uid=330293944">8分钟前</a><!-- <a class="s-fc4" href="/event?id=20225889131&uid=330293944">8分钟前</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">123</div>
                      <div class="j-flag">
                        <div id="auto-id-v2FUT1xFsoR40TS5">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p3.music.126.net/T8NN9mGSxJL8GhtCpJjL7w==/109951166336905015.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="20225889131" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="512376326"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=512376326" class="s-fc1" data-log="event" data-event-id="20225889131">阿衣莫</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=12031075" title="阿吉太组合" class="s-fc3" data-log="event" data-event-id="20225889131">阿吉太组合</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-4"></i><span class="j-flag " data-count="1">(1)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag f-hide" data-count="0">(0)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag f-hide" data-count="0">(0)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display: block;" data-action="unfold" title="动态管理">
                        <ul class="mng j-flag">
                          <li><a href="javascript:" class="li f-fl s-fc3" data-action="delete"><i class="icn u-dicn u-dicn-27 f-fl"></i>删除</a></li>
                        </ul>
                      </div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-e6N3ag6xKyVThR2X">
                  <div class="gface">
                    <a href="/user/home?id=29879272" class="ficon"><img class="j-flag" src="http://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-tXfbisX4AMpoLlBy">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=29879272" class="s-fc7">张惠妹aMEI</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享歌单</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=16443697&amp;uid=29879272">2014年7月7日</a><!-- <a class="s-fc4" href="/event?id=16443697&uid=29879272">2014年7月7日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">大家好~我是a MEI，這是我No.17 作品『偏執面』，喜歡的朋友，進來聽聽吧<img src="http://s1.music.126.net/style/web2/emt/emoji_86.png"></div>
                      <div class="j-flag">
                        <div id="auto-id-dfNRpzTQICKfdEyz">
                          <div class="src f-cb">
                            <div class="cover"><span class="lnk"><img src="http://p4.music.126.net/TTZOfZYy7mfDI-RUlkd2HQ==/5920870115914277.jpg?param=40y40&amp;quality=100" alt=""><span class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="13" data-res-id="20591637" data-log="event" data-event-id="16443697"></span></span></div>
                            <div class="scnt">
                              <h3 class="tit f-thide s-fc1 f-fs1"><span class="tag u-dtag">歌单<i class="rt"></i></span><a href="/playlist?id=20591637" class="s-fc1" data-log="event" data-event-id="16443697">你看不見的『偏執面』</a></h3>
                              <h4 class="from f-thide s-fc3">by <a href="/user/home?id=29879272" class="s-fc3" data-log="event" data-event-id="16443697">张惠妹aMEI</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="6775">(6775)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag " data-count="16">(16)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="785">(785)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                      <div class="m-dynamic" id="auto-id-l87NLx08SLFKtQtM">
                        <div class="dbox dbox-cmt">
                          <span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span>
                          <div class="m-cmmt m-cmmt-s">
                            <div class="iptarea j-flag">
                              <div>
                                <div class="m-cmmtipt f-cb f-pr">
                                  <div class="u-txtwrap holder-parent f-pr" style="display: block;"><textarea class="u-txt area j-flag" placeholder="评论" id="auto-id-tpTkMZDRdKcIBaVi"></textarea></div>
                                  <div class="btns f-cb f-pr"><i class="icn u-icn u-icn-36 j-flag" id="auto-id-KWkyvr1GLaavRxV2"></i><i class="icn u-icn u-icn-41 j-flag" id="auto-id-qtgw5ha7JctEJaHs"></i><a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)" id="auto-id-IMvlsHl29Z3qG8y8">评论</a><span class="zs s-fc4 j-flag">140</span></div>
                                </div>
                              </div>
                            </div>
                            <div class="cmmts">
                              <div class="j-flag" id="auto-id-uJFIZO6xQszT3c98">
                                <h3 class="u-hd4">精彩评论</h3>
                                <div id="3175458311637897757963" class="itm" data-id="317545831">
                                  <div class="head"><a href="/user/home?id=335712274"><img src="https://p1.music.126.net/n5IRrjawqCyONHv1_pRjmw==/109951164283170405.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=335712274" class="s-fc7">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2017年2月25日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="317545831" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="317545831" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (1017)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="317545831" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="10498457231637897757963" class="itm" data-id="1049845723">
                                  <div class="head"><a href="/user/home?id=529329557"><img src="https://p2.music.126.net/6bhWqUj3dtTal-SYFIkVTw==/109951165485201983.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=529329557" class="s-fc7">思巨行矮</a>：又一位忘记网易云密码的艺人<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png"></div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2018年3月11日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="1049845723" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="1049845723" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (686)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="1049845723" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="2136275861637897757963" class="itm" data-id="213627586">
                                  <div class="head"><a href="/user/home?id=135880935"><img src="https://p2.music.126.net/Xt_Ox_4-2ZajScCx1gGdog==/3298534893982137.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=135880935" class="s-fc7">让音乐起舞</a>：～阿妹&nbsp;我最喜欢的女歌手&nbsp;妹力四射&nbsp;激情四射&nbsp;听你的快歌很嗨&nbsp;慢歌也很有感觉&nbsp;谢谢你带给大家这么多好歌&nbsp;永远爱你<img src="http://s1.music.126.net/style/web2/emt/emoji_363.png"><img src="http://s1.music.126.net/style/web2/emt/emoji_363.png"><img src="http://s1.music.126.net/style/web2/emt/emoji_363.png"></div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2016年9月12日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="213627586" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="213627586" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (281)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="213627586" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="453361011637897757963" class="itm" data-id="45336101">
                                  <div class="head"><a href="/user/home?id=9126783"><img src="https://p2.music.126.net/zWQgb4QhZGaYsWKZYqjI4Q==/109951165245432307.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=9126783" class="s-fc7">NOinterestatall</a><img src="//p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923094/81eb/9288/68a5/a427a0dbf899d616c3f715272a71ee59.png" class="brand-tag brand-vip">：夜深了，吃一碗偏执面</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2015年11月7日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="45336101" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="45336101" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (238)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="45336101" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="13580732351637897757963" class="itm" data-id="1358073235">
                                  <div class="head"><a href="/user/home?id=390694418"><img src="https://p2.music.126.net/nenlcP0DdYjj7kTVtnxw2Q==/109951163925800633.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=390694418" class="s-fc7">与我常在_wln</a><img src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922817/9124/a83c/7eb7/6d7d81b608bfb56d7fb286bd8eb72346.png" class="brand-tag brand-vip">：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经五年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">2019年1月15日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="1358073235" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="1358073235" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (160)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="1358073235" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="41621321637897757963" class="itm" data-id="4162132">
                                  <div class="head"><a href="/user/home?id=35095111"><img src="https://p2.music.126.net/bTIoFKFaE1-JQpgN3OynGg==/1986817511391283.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=35095111" class="s-fc7">帐号已注销</a>：都很好听，而且风格各异。以前都听你的情歌，比如这里的三月简单的曲词单被你唱出来好有感觉。还有自虐，和偏执面，挺震撼人心，MV也是惊呆我了<img src="http://s1.music.126.net/style/web2/emt/emoji_86.png"></div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2014年9月6日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="4162132" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="4162132" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (117)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="4162132" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="13411439891637897757963" class="itm" data-id="1341143989">
                                  <div class="head"><a href="/user/home?id=267521500"><img src="https://p2.music.126.net/TEGkn2-Fj0VF0cNP1lTTGw==/109951165348141574.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=267521500" class="s-fc7">北极熊爱吃肉肉</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经四年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">2018年12月29日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="1341143989" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="1341143989" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (85)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="1341143989" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="1559854051637897757963" class="itm" data-id="155985405">
                                  <div class="head"><a href="/user/home?id=75396878"><img src="https://p2.music.126.net/IryXErrehYKNF77gihWCFA==/19215065207465489.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=75396878" class="s-fc7">Wings-can-fly</a>：a&nbsp;MEI&nbsp;越来越喜欢你了&nbsp;怎么办</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2016年5月17日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="155985405" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="155985405" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (80)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="155985405" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="4774613501637897757963" class="itm" data-id="477461350">
                                  <div class="head"><a href="/user/home?id=424794722"><img src="https://p2.music.126.net/y3_2riP4vh-Pcm-kiqcz1A==/18819241023041753.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=424794722" class="s-fc7">oh0-Ou</a>：最早听她的歌是日出，然后还看但她撑同志，唱了彩虹，赞</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2017年7月19日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="477461350" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="477461350" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (76)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="477461350" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="1959888361637897757963" class="itm" data-id="195988836">
                                  <div class="head"><a href="/user/home?id=114914067"><img src="https://p2.music.126.net/dAFe4ZDSGWjL8B6pH-0xGg==/109951164662608950.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=114914067" class="s-fc7">boss顾</a>：张小姐，生日快乐<img src="http://s1.music.126.net/style/web2/emt/emoji_337.png"></div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2016年8月9日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="195988836" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="195988836" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (60)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="195988836" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="7141454071637897757963" class="itm" data-id="714145407">
                                  <div class="head"><a href="/user/home?id=1379227663"><img src="https://p2.music.126.net/Mc66CDksm_NehIoJS_4LBQ==/109951164831785037.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=1379227663" class="s-fc7">我们万-岁</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经四年了</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2018年2月22日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="714145407" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="714145407" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (57)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="714145407" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="3369860081637897757963" class="itm" data-id="336986008">
                                  <div class="head"><a href="/user/home?id=443086511"><img src="https://p2.music.126.net/vNwSvP4j0mSdFU13u4C49Q==/109951162883559470.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=443086511" class="s-fc7">Huxinapple</a>：喜欢你10年了，会一直继续喜欢你，好好的。</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2017年3月23日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="336986008" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="336986008" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (51)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="336986008" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="225395161637897757963" class="itm" data-id="22539516">
                                  <div class="head"><a href="/user/home?id=75325325"><img src="https://p2.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=75325325" class="s-fc7">大甲华</a>：阿妹你好，喜欢你和你的歌这么多年了，支持你到底。</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2015年6月17日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="22539516" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="22539516" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (41)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="22539516" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="226045041637897757963" class="itm" data-id="22604504">
                                  <div class="head"><a href="/user/home?id=72199186"><img src="https://p2.music.126.net/4AQTPGABoqf8_m7okK5sog==/7793338418796749.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=72199186" class="s-fc7">抹去le色彩</a>：我在听你的偏执面❤️❤️</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2015年6月18日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="22604504" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="22604504" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (26)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="22604504" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="4449209931637897757963" class="itm" data-id="444920993">
                                  <div class="head"><a href="/user/home?id=28630563"><img src="https://p2.music.126.net/DstsgF2_eD_IhI4vQbGDUA==/109951162950831361.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=28630563" class="s-fc7">音乐的喜怒哀乐</a>：啊妹你唱歌真的好棒啊！<img src="http://s1.music.126.net/style/web2/emt/emoji_13.png"><img src="http://s1.music.126.net/style/web2/emt/emoji_13.png"><img src="http://s1.music.126.net/style/web2/emt/emoji_13.png"></div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">2017年6月20日</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="444920993" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="444920993" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (23)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="444920993" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div><br><br>
                                <h3 class="u-hd4">最新评论(785)</h3>
                                <div id="54641943081637897757963" class="itm" data-id="5464194308">
                                  <div class="head"><a href="/user/home?id=1435706244"><img src="https://p1.music.126.net/va9k6pJgC7QKpFzLyRCu_Q==/109951166644570511.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=1435706244" class="s-fc7">蟑螂验尸报告</a>：七年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">11月21日 16:30</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5464194308" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5464194308" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5464194308" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54576733421637897757963" class="itm" data-id="5457673342">
                                  <div class="head"><a href="/user/home?id=1458457872"><img src="https://p1.music.126.net/UY3Pnjpa_RV9XoR8t4JzIQ==/109951165831859252.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=1458457872" class="s-fc7">荒岛停靠</a><img src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922957/d393/4206/8928/a082dd9a7e7bb69e84b138b8df7bbcd0.png" class="brand-tag brand-vip">：快八年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">11月13日 03:19</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5457673342" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5457673342" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5457673342" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54516193991637897757963" class="itm" data-id="5451619399">
                                  <div class="head"><a href="/user/home?id=1884725043"><img src="https://p1.music.126.net/vqQwNugI3kLDMh6JzuXWCQ==/109951166527701867.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=1884725043" class="s-fc7">丑小瑶</a><img src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922817/9124/a83c/7eb7/6d7d81b608bfb56d7fb286bd8eb72346.png" class="brand-tag brand-vip">：七年了</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">11月4日 18:08</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5451619399" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5451619399" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (1)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5451619399" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54511634881637897757963" class="itm" data-id="5451163488">
                                  <div class="head"><a href="/user/home?id=533965602"><img src="https://p1.music.126.net/AzpOSNeSGiLlIetgpdtHbA==/109951166466908252.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=533965602" class="s-fc7">Aolclbh</a><img src="//p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922900/5a1b/446b/b722/ec5a532c258824e8b59a45c166195e90.png" class="brand-tag brand-vip">：已经七年了…</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">11月3日 21:23</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5451163488" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5451163488" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (1)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5451163488" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54509120101637897757963" class="itm" data-id="5450912010">
                                  <div class="head"><a href="/user/home?id=75637419"><img src="https://p1.music.126.net/UmIBwnpnBpDBkXXIM_7HoQ==/109951165953431059.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=75637419" class="s-fc7">手儿心怀宇宙</a>：7年了</div>
                                    </div>
                                    <div class="rp">
                                      <div class="time s-fc4">11月3日 12:06</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5450912010" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5450912010" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> (2)</a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5450912010" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54482222691637897757963" class="itm" data-id="5448222269">
                                  <div class="head"><a href="/user/home?id=3325738124"><img src="https://p1.music.126.net/5h1Ef3TleIKIiTo6WM0dQw==/109951165801007817.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=3325738124" class="s-fc7">重启者5代</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经六年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">10月30日 14:16</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5448222269" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5448222269" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5448222269" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54389224661637897757963" class="itm" data-id="5438922466">
                                  <div class="head"><a href="/user/home?id=613254012"><img src="https://p1.music.126.net/idUWEpZEPUn2WwGWL9tu0Q==/109951166578664592.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=613254012" class="s-fc7">AL小黑星</a><img src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923065/dc4e/2b9c/7677/20a6644c6e3a093d7accce919ae7b169.png" class="brand-tag brand-vip">：已经七年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">10月16日 22:32</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5438922466" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5438922466" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5438922466" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54355886871637897757963" class="itm" data-id="5435588687">
                                  <div class="head"><a href="/user/home?id=1381515332"><img src="https://p1.music.126.net/UnHypi4NPaa4khcRzaZesw==/109951166650576247.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=1381515332" class="s-fc7">头头头不疼</a>：七年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=390694418">与我常在_wln</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经五年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">10月11日 07:04</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5435588687" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5435588687" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5435588687" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54291456211637897757963" class="itm" data-id="5429145621">
                                  <div class="head"><a href="/user/home?id=491238583"><img src="https://p1.music.126.net/gewFcCDXFQtUmL_exYvZxQ==/109951166528761441.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=491238583" class="s-fc7">蓝色呔</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经七年了</div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">10月2日 13:29</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5429145621" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5429145621" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5429145621" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                                <div id="54267402301637897757963" class="itm" data-id="5426740230">
                                  <div class="head"><a href="/user/home?id=130283160"><img src="https://p1.music.126.net/elZc8cSjkwu57ssiXr0WVA==/1387583674838698.jpg?param=50y50"></a></div>
                                  <div class="cntwrap">
                                    <div class="">
                                      <div class="cnt f-brk"><a href="/user/home?id=130283160" class="s-fc7">忏描</a>：已经七年了<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png"></div>
                                    </div>
                                    <div class="que f-brk f-pr s-fc3"><span class="darr"><i class="bd">◆</i><i class="bg">◆</i></span><a class="s-fc7" href="/user/home?id=335712274">aMEIKAtsu</a>：啥时候更新动态<img src="http://s1.music.126.net/style/web2/emt/emoji_97.png">已经三年了</div>
                                    <div class="rp">
                                      <div class="time s-fc4">9月28日 20:32</div><span class="dlt"><span style="display: none;" class="j-delete-comment"><a href="javascript:void(0)" class="s-fc3" data-id="5426740230" data-type="delete">删除</a><span class="sep">|</span></span></span><a data-id="5426740230" data-type="like" href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i></a><span class="sep">|</span><a href="javascript:void(0)" class="s-fc3" data-id="5426740230" data-type="reply">回复</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="dmore dmore-cmt f-cb">
                                <div class="dhas s-fc3">后面还有<span class="j-flag">775</span>条评论，<a data-type="viewmore" class="s-fc3 f-ff1" href="javascript:void(0)">查看更多&gt;</a></div>
                                <a data-type="cc" class="dtoggle" href="javascript:void(0)">收起<i data-type="cc" class="u-icn u-icn-61"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-DZkT7loWtZ8RAOEe">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-g2lFdkkxeQigVTKO">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=4251601&amp;uid=233521">2013年10月9日</a><!-- <a class="s-fc4" href="/event?id=4251601&uid=233521">2013年10月9日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text"></div>
                      <div class="j-flag">
                        <div id="auto-id-L99SgiXTInVtuLGM">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p1.music.126.net/XHZPTP8-CNqBvB2tS7X_0A==/699289395275307.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="4251601" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="19092045"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=19092045" class="s-fc1" data-log="event" data-event-id="4251601">Englishman In New York</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=42938" title="Sting" class="s-fc3" data-log="event" data-event-id="4251601">Sting</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="545">(545)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag " data-count="3">(3)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="70">(70)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-CtQ5ToKxfe5vUKam">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-aoIz2Jq9iKrDHzgw">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=3144673&amp;uid=233521">2013年8月20日</a><!-- <a class="s-fc4" href="/event?id=3144673&uid=233521">2013年8月20日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">这个点听会儿，舒服。</div>
                      <div class="j-flag">
                        <div id="auto-id-SxWrVbuXKxK0D6SQ">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p1.music.126.net/QWMsn4ZhQgcDrLk9sEvMTQ==/1744924953293011.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="3144673" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="5167316"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=5167316" class="s-fc1" data-log="event" data-event-id="3144673">The First Time Ever Saw Your Face</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=33846" title="George Michael" class="s-fc3" data-log="event" data-event-id="3144673">George Michael</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="330">(330)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag f-hide" data-count="0">(0)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="10">(10)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-8CRhlibKa3K3nTTz">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-BTvIyV0UZ54dTQ5i">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=3074199&amp;uid=233521">2013年8月16日</a><!-- <a class="s-fc4" href="/event?id=3074199&uid=233521">2013年8月16日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">周五下午，有音乐，好心情。</div>
                      <div class="j-flag">
                        <div id="auto-id-gmItUppiIlv70IIu">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p2.music.126.net/22eFimeRbIwAJOB6I9ESCw==/609129441797397.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="3074199" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="18656640"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=18656640" class="s-fc1" data-log="event" data-event-id="3074199">Say Something</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=36369" title="James" class="s-fc3" data-log="event" data-event-id="3074199">James</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="192">(192)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag " data-count="1">(1)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="8">(8)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-xuGQvK8EXPXflr34">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-znEiQFidRUV3aWn3">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享专辑</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=2948488&amp;uid=233521">2013年8月9日</a><!-- <a class="s-fc4" href="/event?id=2948488&uid=233521">2013年8月9日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">拾伍，拾吾。老歌新唱，欢迎大家品评。</div>
                      <div class="j-flag">
                        <div id="auto-id-rcQoF2h78AKPTWTi">
                          <div class="src src-alb cover-ply f-cb">
                            <div class="cover cover-alb u-dicn u-dicn-23"><span class="lnk"><img src="http://p2.music.126.net/NqIClhIfC6zgE6pmTAc53w==/4457420139017765.jpg?param=40y40&amp;quality=100"><span class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="19" data-res-id="2532449" data-log="event" data-event-id="2948488"></span></span></div>
                            <div class="scnt">
                              <h3 class="tit f-thide s-fc1 f-fs1"><span class="tag u-dtag">专辑<i class="rt"></i></span><a href="/album?id=2532449" data-log="event" data-event-id="2948488" class="s-fc1">拾伍 重唱集</a></h3>
                              <h4 class="from f-thide s-fc3"></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="187">(187)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag " data-count="1">(1)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="7">(7)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-GBF431pcKo7wK8xG">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-uzM408WzonbADTfv">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=2521153&amp;uid=233521">2013年7月16日</a><!-- <a class="s-fc4" href="/event?id=2521153&uid=233521">2013年7月16日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">相同歌词，不同旋律，是改编，更是回忆。温暖而有力。</div>
                      <div class="j-flag">
                        <div id="auto-id-LTpcszRL7hDVlMTh">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p1.music.126.net/NqIClhIfC6zgE6pmTAc53w==/4457420139017765.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="2521153" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="26619380"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=26619380" class="s-fc1" data-log="event" data-event-id="2521153">最美</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=13418" title="羽·泉" class="s-fc3" data-log="event" data-event-id="2521153">羽·泉</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="178">(178)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag f-hide" data-count="0">(0)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="3">(3)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-iqyCSfbX6MUVTP7b">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-DuOtHkoZIkTTyDe3">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享专辑</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=2242546&amp;uid=233521">2013年7月1日</a><!-- <a class="s-fc4" href="/event?id=2242546&uid=233521">2013年7月1日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">几个臭小子，加油咯～<img src="http://s1.music.126.net/style/web2/emt/emoji_86.png"></div>
                      <div class="j-flag">
                        <div id="auto-id-tBG67lzI95wAI9i1">
                          <div class="src src-alb cover-ply f-cb">
                            <div class="cover cover-alb u-dicn u-dicn-23"><span class="lnk"><img src="http://p1.music.126.net/DxtSe0BV794Wl0y6_6Mk7w==/4416738208781673.jpg?param=40y40&amp;quality=100"><span class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="19" data-res-id="2519235" data-log="event" data-event-id="2242546"></span></span></div>
                            <div class="scnt">
                              <h3 class="tit f-thide s-fc1 f-fs1"><span class="tag u-dtag">专辑<i class="rt"></i></span><a href="/album?id=2519235" data-log="event" data-event-id="2242546" class="s-fc1">色.color</a></h3>
                              <h4 class="from f-thide s-fc3"></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="157">(157)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag f-hide" data-count="0">(0)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="6">(6)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-FdTicKsOAw31m9xn">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-1UZcPoHMrfTtVB4L">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享专辑</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=676140&amp;uid=233521">2013年5月3日</a><!-- <a class="s-fc4" href="/event?id=676140&uid=233521">2013年5月3日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">这张专辑几乎首首耐听。</div>
                      <div class="j-flag">
                        <div id="auto-id-nGMTpM6JJGXTxwdr">
                          <div class="src src-alb cover-ply f-cb">
                            <div class="cover cover-alb u-dicn u-dicn-23"><span class="lnk"><img src="http://p1.music.126.net/4rmoIQdxhH6wRA8OW7o-lQ==/600333348775551.jpg?param=40y40&amp;quality=100"><span class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="19" data-res-id="1757830" data-log="event" data-event-id="676140"></span></span></div>
                            <div class="scnt">
                              <h3 class="tit f-thide s-fc1 f-fs1"><span class="tag u-dtag">专辑<i class="rt"></i></span><a href="/album?id=1757830" data-log="event" data-event-id="676140" class="s-fc1">Promise</a></h3>
                              <h4 class="from f-thide s-fc3"></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="114">(114)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag f-hide" data-count="0">(0)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="9">(9)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-PTUDpWXqZG9LIqQ4">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-cyxALJ58Exq7Nza0">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=498008&amp;uid=233521">2013年4月22日</a><!-- <a class="s-fc4" href="/event?id=498008&uid=233521">2013年4月22日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">13亿份'爱'在这一刻汇聚，坚信我们定能挺过...</div>
                      <div class="j-flag">
                        <div id="auto-id-kDQ3ca60MGLwpHQd">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p1.music.126.net/dCJFwotCzse8TOYHD2MSTg==/62672162798062.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="498008" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="390846"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=390846" class="s-fc1" data-log="event" data-event-id="498008">因为爱</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=13418" title="羽·泉" class="s-fc3" data-log="event" data-event-id="498008">羽·泉</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="126">(126)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag " data-count="1">(1)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="9">(9)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-CR5EDr7iP2Mw9S5B">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-lniAXyDs0u0vHy5a">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=478298&amp;uid=233521">2013年4月21日</a><!-- <a class="s-fc4" href="/event?id=478298&uid=233521">2013年4月21日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">其实想分享一首<a href="javascript:;" class="s-fc7" data-title="#誓言#" data-action="activity">#誓言#</a>，但好像没搜到。 那年，非典写了这首歌。今天和未来，无论何时，在你无助或难过的时候，请你继续相信【羽泉】和所有无名的天使及拥有大爱的兄弟姐妹同胞们！更要相信在苦难中的你！大自然面前脆弱的我们，可以！！！【泉.凡】</div>
                      <div class="j-flag">
                        <div id="auto-id-XWrQJiROg8gVUVNT">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p1.music.126.net/6xMuwt5Cvs4WU819WfNwug==/73667279076193.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="478298" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="390434"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=390434" class="s-fc1" data-log="event" data-event-id="478298">不弃不离</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=13418" title="羽·泉" class="s-fc3" data-log="event" data-event-id="478298">羽·泉</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="106">(106)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag " data-count="2">(2)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="7">(7)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
                <li class="itm" id="auto-id-gOWH0PxwrMiLXE6p">
                  <div class="gface">
                    <a href="/user/home?id=233521" class="ficon"><img class="j-flag" src="http://p1.music.126.net/6ym1zyTQKEfaj7HtzhxdSA==/86861418612294.jpg?param=45y45"></a>
                  </div>
                  <div class="gcnt j-flag">
                    <div class="dcntc" id="auto-id-QLUkJ3vEfmG3o2R1">
                      <div class="type f-pr f-fs1"><a href="/user/home?id=233521" class="s-fc7">胡海泉</a><sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">分享单曲</span><!-- <span class="gz u-dbtn f-pa"><i class="u-dicn u-dicn-11"></i>关注</span><span class="gz u-dbtn u-dbtn-ygz f-pa" style="right:100px;"><i class="u-dicn u-dicn-24"></i>已关注</span><span class="gz u-dbtn u-dbtn-qx f-pa" style="right:200px;">取消关注</span> -->
                      </div>
                      <div class="time"><a class="s-fc4" data-action="logdetail" href="/event?id=459413&amp;uid=233521">2013年4月17日</a><!-- <a class="s-fc4" href="/event?id=459413&uid=233521">2013年4月17日</a> -->
                      </div>
                      <div class="text f-fs1  f-brk j-text">不过是个名称：）</div>
                      <div class="j-flag">
                        <div id="auto-id-4Eor7ThB764PskIW">
                          <div class="src f-cb">
                            <div class="cover cover-ply"><span class="lnk"><img src="http://p1.music.126.net/5Y0L6xD_92GMpgXBpeV_-A==/918092209242577.jpg?param=40y40&amp;quality=100"></span><a href="javascript:" data-log="event" data-event-id="459413" class="ply u-dicn u-dicn-8 f-alpha" data-res-action="play" data-res-type="18" data-res-id="1474270"></a></div>
                            <div class="scnt">
                              <h3 class="tit f-thide f-fs1"><a href="/song?id=1474270" class="s-fc1" data-log="event" data-event-id="459413">Superstar</a></h3>
                              <h4 class="from f-thide s-fc3"><a href="/artist?id=35329" title="James Blunt" class="s-fc3" data-log="event" data-event-id="459413">James Blunt</a></h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doper j-flag"> <a href="javascript:" class="s-fc7" data-action="like"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag " data-count="87">(87)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="forward">转发 <span class="j-flag f-hide" data-count="0">(0)</span></a><span class="line">|</span><a href="javascript:" class="s-fc7" data-action="comment">评论 <span class="j-flag " data-count="6">(6)</span></a></div>
                      <div class="arrow u-dicn u-dicn-2 j-flag" style="display:none;" data-action="unfold" title="动态管理"></div>
                      <div class="dsup j-flag f-hide">赞：<span class="j-flag"></span></div>
                      <div class="j-flag f-hide"></div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="u-page j-flag"></div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sd-right">
        <div class="frduser">
          <a href="/user/home?id=330293944" class="face">
            <img src="http://p1.music.126.net/pVptwn0wRkMLLmjIdtGr7Q==/109951165973320454.jpg?param=70y70">
          </a>
          <h5 class="f-thide"><a href="/user/home?id=330293944" class="s-fc1 f-fs1" title="二笑倾心丶">二笑倾心丶</a></h5>
          <p class="f-brk" title=""></p>
          <ul class="f-cb">
            <li>
              <a href="/user/event?id=330293944"><em id="event_count">1</em><i>动态</i></a>
            </li>
            <li>
              <a href="/user/follows?id=330293944"><em>3</em><i>关注</i></a>
            </li>
            <li>
              <a href="/user/fans?id=330293944"><em>2</em><i>粉丝</i></a>
            </li>
          </ul>
        </div>
        <div class="sd-wrap">
          <div class="u-load s-fc4"><i class="icn"></i> 正在加载，请稍后...</div>
          <div class="n-frdlist" style="">
            <div class="hd f-cb">
              <h4>明星用户</h4>
              <a href="#" class="more" id="moreStarLink">换一批</a>
            </div>
            <ul>
              <li onmouseover="this.className='z-hover';" onmouseout="this.className='';" data-id="59073" class=""><a class="j-flag" href="/user/home?id=59073"><img src="http://p1.music.126.net/TRG-tGs098M83Oat7pI54Q==/5994537394864711.jpg?param=45y45"></a>
                <div class="cnt">
                  <div class="name f-thide"><a class="j-flag" href="/user/home?id=59073" title="灵伟"><span>灵伟</span><sup class="u-icn u-icn-1"></sup></a></div>
                  <div class="info f-thide j-flag" title="电台DJ、资深乐评人。">电台DJ、资深乐评人。</div>
                </div>
                <div class="btns"><a href="#" class="u-btn u-btn-crt f-fr j-flag" data-action="follow" data-id="59073" data-type="star"><i>关注</i></a><span class="done s-fc4 j-flag" style="display:none;"><i class="u-icn u-icn-67"></i> 已关注</span></div>
                <div class="del"><a href="#" class="u-icn u-icn-50 j-flag" data-action="delete" data-id="59073" data-type="star">&nbsp;</a></div>
              </li>
              <li onmouseover="this.className='z-hover';" onmouseout="this.className='';" data-id="198554"><a class="j-flag" href="/user/home?id=198554"><img src="http://p1.music.126.net/ZEEvSOoXV7Dv2QEkqUN3zg==/109951165625860507.jpg?param=45y45"></a>
                <div class="cnt">
                  <div class="name f-thide"><a class="j-flag" href="/user/home?id=198554" title="孙楠"><span>孙楠</span><sup class="u-icn u-icn-1"></sup></a></div>
                  <div class="info f-thide j-flag" title="歌手孙楠&nbsp;&nbsp;&nbsp;代表作《你快回来》《燃烧》">歌手孙楠&nbsp;&nbsp;&nbsp;代表作《你快回来》《燃烧》</div>
                </div>
                <div class="btns"><a href="#" class="u-btn u-btn-crt f-fr j-flag" data-action="follow" data-id="198554" data-type="star"><i>关注</i></a><span class="done s-fc4 j-flag" style="display:none;"><i class="u-icn u-icn-67"></i> 已关注</span></div>
                <div class="del"><a href="#" class="u-icn u-icn-50 j-flag" data-action="delete" data-id="198554" data-type="star">&nbsp;</a></div>
              </li>
              <li onmouseover="this.className='z-hover';" onmouseout="this.className='';" data-id="725130"><a class="j-flag" href="/user/home?id=725130"><img src="http://p1.music.126.net/fBd9G5UPnAkN5GJhD27f7w==/109951164233456965.jpg?param=45y45"></a>
                <div class="cnt">
                  <div class="name f-thide"><a class="j-flag" href="/user/home?id=725130" title="池约翰CJohnny"><span>池约翰CJohnny</span><sup class="u-icn u-icn-1"></sup></a></div>
                  <div class="info f-thide j-flag" title="MIC男团成员池约翰">MIC男团成员池约翰</div>
                </div>
                <div class="btns"><a href="#" class="u-btn u-btn-crt f-fr j-flag" data-action="follow" data-id="725130" data-type="star"><i>关注</i></a><span class="done s-fc4 j-flag" style="display:none;"><i class="u-icn u-icn-67"></i> 已关注</span></div>
                <div class="del"><a href="#" class="u-icn u-icn-50 j-flag" data-action="delete" data-id="725130" data-type="star">&nbsp;</a></div>
              </li>
            </ul>
          </div>
          <div class="n-frdlist" style="display:none;">
            <div class="hd f-cb">
              <h4>感兴趣的人</h4>
              <a href="#" class="more" id="moreFriendLink">换一批</a>
            </div>
            <ul id="recommendFriendList"></ul>
          </div>
          <div class="n-frdwb">
            <p>添加微博好友，和他们分享音乐</p>
            <a data-action="bind" href="javascript:void(0)" data-href="http://music.163.com/api/sns/authorize?snsType=2&amp;clientType=web2&amp;callbackType=Binding&amp;forcelogin=true" hidefocus="true" class="bind-wb"><i><em class="u-slg3 u-slg3-sn"></em>绑定新浪微博</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotLogin from "@/components/NotLogin/NotLogin";
import PubHeader from "@/components/PubHeader/PubHeader";

export default {
  name: "MyFriend",
  components: {
    NotLogin,
    PubHeader,
  },
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>

<style lang='less'>
.friend-container {
  .main-friend {
    display: flex;
    .u-icn,
    .u-icn2,
    .u-icn3 {
      display: inline-block;
      overflow: hidden;
      vertical-align: middle;
    }
    .u-icn {
      background: url(~@/assets/img/commonbg/icon.png) no-repeat 0 9999px;
    }
    .u-icn2 {
      background: url(~@/assets/img/commonbg/icon2.png) no-repeat 0 9999px;
    }
    .mn-left {
      flex: 1;
      .mn-wrap {
        padding: 20px 30px;
        .pub-video-btn,
        .pub-event-btn {
          cursor: pointer;
          margin: 6px 0 0 10px;
          overflow: hidden;
          background: url(~@/assets/img/commonbg/frd_dyn_sprite.png) no-repeat 0 9999px;
        }
        .pub-event-btn {
          width: 84px;
          height: 24px;
          background-position: -100px -452px;
          &:hover {
            background-position: -100px -480px;
          }
        }
        .pub-video-btn {
          width: 71px;
          height: 24px;
          background-position: 0 -452px;
          &:hover {
            background-position: 0 -480px;
          }
        }
        .action-list {
          .m-timeline {
            position: relative;
            zoom: 1;
            text-shadow: none;
            .m-dlist {
              position: relative;
              zoom: 1;
              .itm {
                position: relative;
                padding: 20px 0;
                border-bottom: 1px solid #e8e8e9;
                .gface {
                  position: absolute;
                  top: 20px;
                  left: 0;
                  width: 54px;
                  .ficon {
                    float: left;
                    position: relative;
                    zoom: 1;
                    width: 45px;
                    height: 45px;
                  }
                }
                .gcnt {
                  position: relative;
                  zoom: 1;
                  margin-left: 55px;
                  padding-top: 4px;
                  .dcntc {
                    .time {
                      margin-top: 7px;
                    }
                    .text {
                      margin-top: 10px;
                      line-height: 24px;
                      font-size: 14px;
                      word-break: break-word;
                    }
                    .doper {
                      margin: 18px 0 -2px;
                      text-align: right;
                      line-height: normal;
                    }
                  }
                }
              }
            }
          }
        }
        .m-dynamicbar {
          display: block;
          color: #666;
          background: #fffcdf;
          border: 1px solid #f0eb98;
          padding: 8px 0;
          text-align: center;
          letter-spacing: 1px;
        }
      }
    }
    .sd-right {
      position: relative;
      width: 296px;
      padding: 0 1px;
      zoom: 1;
      background-color: #fbfbfb;
      border-left: 1px solid #d3d3d3;
      .frduser {
        height: 192px;
        border-bottom: 1px solid #fff;
        background: linear-gradient(#ffffff, #eeeeee);
        .face {
          position: absolute;
          top: 38px;
          left: 30px;
          width: 70px;
          height: 70px;
          img {
            display: block;
            width: 62px;
            height: 62px;
            padding: 2px;
            background: #fff;
            border: 1px solid #dadada;
          }
        }
        h5,
        p {
          position: absolute;
          left: 112px;
          width: 160px;
        }
        h5 {
          top: 40px;
          font-size: 14px;
          width: 180px;
        }
        p {
          top: 67px;
          height: 38px;
          overflow: hidden;
          line-height: 19px;
          color: #888;
        }
        ul {
          position: absolute;
          top: 134px;
          left: 13px;
          overflow: hidden;
          li {
            display: inline;
            float: left;
            margin: 0 2px 0 -2px;
            border-left: 1px solid #c2c2c2;
            a {
              display: block;
              padding: 0 20px;
              color: #666;
              em {
                display: block;
                padding: 0 0 9px;
                font-size: 20px;
                line-height: 20px;
                font-family: Arial;
              }
              i {
                display: block;
                padding: 0 0 0 2px;
              }
              &:hover {
                color: #0c73cc;
                text-decoration: none;
              }
            }
          }
        }
      }
      .sd-wrap {
        border-top: 1px solid #d3d3d3;
        padding: 20px 30px;
        .u-load {
          display: none;
          height: 26px;
          padding: 20px 0;
          text-align: center;
          .icn {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-right: 2px;
            vertical-align: middle;
            background: url(~@/assets/img/commonbg/loading.gif) no-repeat;
          }
        }
        .n-frdlist {
          margin: 0 0 20px;
          .hd {
            margin: 5px 0;
            padding: 0 0 5px;
            border-bottom: 1px solid #dcdcdc;
            h4 {
              float: left;
            }
            .more {
              float: right;
              color: #666;
            }
          }
          ul li {
            height: 45px;
            position: relative;
            padding: 10px 0;
            img {
              width: 45px;
              height: 45px;
              position: absolute;
              top: 10px;
              left: 0;
            }
            .cnt {
              margin: 0 65px 0 55px;
              line-height: 14px;
              .name {
                padding: 3px 0 7px;
                sup {
                  margin-left: 3px;
                  margin-top: -2px;
                  &.u-icn-1 {
                    width: 11px;
                    height: 13px;
                    background-position: 0 1px;
                    font-size: 100%;
                    font-style: normal;
                  }
                  &.u-icn2 {
                    width: 12px;
                    height: 13px;
                    background-position: -110px -190px;
                  }
                }
              }
              .info {
                margin-top: 2px;
                color: #9b9b9b;
              }
            }
            .btns {
              .u-btn {
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -11px;
                width: 52px;
                height: 22px;
                background: url(~@/assets/img/commonbg/button.png) no-repeat 0 9999px;
                background-position: 0 -96px;
                i {
                  display: inline-block;
                  line-height: 22px;
                  overflow: hidden;
                  padding-left: 20px;
                  color: #515151;
                  font-size: 12px;
                  font-weight: normal;
                }
              }
              .done {
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -7px;
                .u-icn-67 {
                  width: 13px;
                  height: 10px;
                  background-position: -60px -470px;
                }
              }
            }
            .del {
              display: none;
              position: absolute;
              top: 0;
              height: 100%;
              left: 100%;
              width: 15px;
              .u-icn {
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -7px;
              }
              .u-icn-50 {
                width: 14px;
                height: 14px;
                background-position: 3px -636px;
              }
              a:hover {
                background-color: #cd0000;
                background-position: -11px -636px;

                text-decoration: none;
              }
            }
          }
        }
        .n-frdwb {
          .bind-wb {
            display: block;
            margin: 10px 0 0 0;
            width: 234px;
            height: 28px;

            border: 1px solid #c4c4c4;
            border-radius: 3px;
            background: linear-gradient(#ffffff, #f1f1f1);
            &:hover {
              border-color: #dedddd;
              text-decoration: none;
              background: linear-gradient(#ffffff, #f8f8f8);
            }
            i {
              display: block;
              line-height: 28px;
              text-align: center;
            }
            em {
              width: 20px;
              height: 20px;
              display: inline-block;
              background: url(~@/assets/img/loginBox/logo.png) no-repeat 0 9999px;
              background-position: -172px 0;
              vertical-align: middle;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>