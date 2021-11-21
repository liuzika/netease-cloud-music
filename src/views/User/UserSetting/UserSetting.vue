<template>
  <div class="g-bd">
<div class="g-wrap" id="baseBox">
<div class="u-title u-title-2 f-cb">
<h3><span class="f-ff2">个人设置</span></h3>
</div>
<ul class="m-tabs f-cb">
<li class="fst"><a href="/user/update" class="z-slt"><em>基本设置</em></a></li>
<li><a href="/user/binding/#/list"><em>绑定设置</em></a></li>
<li><a href="/user/setting"><em>隐私设置</em></a></li>
</ul>
<form onsubmit="return false;" id="update_form">
<div class="n-base f-cb">
<div class="frm m-frm">
<div class="itm">
<label class="lab">昵称：</label>
<input type="text" class="u-txt txt" value="二笑倾心丶" id="nickname" maxlength="30">
<div class="u-err" style="display:none;" id="err"><i class="u-icn u-icn-25"></i><span>昵称已存在！</span></div>
</div>
<div class="itm f-cb">
<label class="lab">介绍：</label>
<div class="u-txtwrap f-pr">
<textarea class="u-txt area" id="signature"></textarea>
<span class="zs s-fc2" id="remain">300</span>
</div>
</div>
<div class="itm f-cb">
<label class="lab">性别：</label>
<div class="f-cb">
<label class="check"><input name="gender" type="radio" class="u-rdi" checked="true" value="1"> 男</label>
<label class="check"><input name="gender" type="radio" class="u-rdi" value="2"> 女</label>
<label class="check"><input name="gender" type="radio" class="u-rdi" value="0"> 保密</label>
</div>
</div>
<div class="itm f-cb" style="z-index:11;">
<label class="lab">生日：</label>
<div class="u-slt u-slt-1 f-pr" id="yselect">
<span class="curr">1998</span>
<i class="btn" id="auto-id-aVTze8ZaHkkXV5HM"></i>
<ul style="display: none;"><!-- ie6下，高超过150px就设_height:150px; -->
<li class="f-thide" id="auto-id-TVy7DSKNFGX3PTde"><a href="#">2021</a></li><li class="f-thide" id="auto-id-ITL1u3oeLA7mSTyS"><a href="#">2020</a></li><li class="f-thide" id="auto-id-AsxRLvNIColEnSzb"><a href="#">2019</a></li><li class="f-thide" id="auto-id-mxeoefT6Nl6e1wqO"><a href="#">2018</a></li><li class="f-thide" id="auto-id-SpxwPbxiNWX5c5tp"><a href="#">2017</a></li><li class="f-thide" id="auto-id-kaGRgXJDvH7Nfx01"><a href="#">2016</a></li><li class="f-thide" id="auto-id-RAPmbwIEJEcvoNHd"><a href="#">2015</a></li><li class="f-thide" id="auto-id-7mm2KRSDdX5BlmyP"><a href="#">2014</a></li><li class="f-thide" id="auto-id-qmqFyFODwvHc12FT"><a href="#">2013</a></li><li class="f-thide" id="auto-id-VdEZMMnLkp1Bs2sw"><a href="#">2012</a></li><li class="f-thide" id="auto-id-QK1uuw3Dlbl3uKOI"><a href="#">2011</a></li><li class="f-thide" id="auto-id-1tRhq5TOTGC8al1b"><a href="#">2010</a></li><li class="f-thide" id="auto-id-oDPPxrsbpc0CFcH1"><a href="#">2009</a></li><li class="f-thide" id="auto-id-dGG8yFx8aqSroJKv"><a href="#">2008</a></li><li class="f-thide" id="auto-id-qo6glqkkpWSakgwr"><a href="#">2007</a></li><li class="f-thide" id="auto-id-BfpqupZMJTEPV2lJ"><a href="#">2006</a></li><li class="f-thide" id="auto-id-aCv7xLTsgu1l5LqD"><a href="#">2005</a></li><li class="f-thide" id="auto-id-Rwamg45CNukzRWv7"><a href="#">2004</a></li><li class="f-thide" id="auto-id-tMl037i6pMEElER5"><a href="#">2003</a></li><li class="f-thide" id="auto-id-IkK5RIuqie6GE9HE"><a href="#">2002</a></li><li class="f-thide" id="auto-id-eLOACWbkie8rHqBr"><a href="#">2001</a></li><li class="f-thide" id="auto-id-u5iglWU4cLvcFT82"><a href="#">2000</a></li><li class="f-thide" id="auto-id-T8bU0JpPsEoMam8M"><a href="#">1999</a></li><li class="f-thide" id="auto-id-AgvltiN3iTRTkglM"><a href="#">1998</a></li><li class="f-thide" id="auto-id-t1nQDPGkfu67ReAX"><a href="#">1997</a></li><li class="f-thide" id="auto-id-CTdlAu058tRQL1vq"><a href="#">1996</a></li><li class="f-thide" id="auto-id-e9dNGciqPEoSMtkH"><a href="#">1995</a></li><li class="f-thide" id="auto-id-xSxyAQpC8QX4vl6Z"><a href="#">1994</a></li><li class="f-thide" id="auto-id-pKM0sOP1ScXvzard"><a href="#">1993</a></li><li class="f-thide" id="auto-id-7Ja0kiqBquoIRvda"><a href="#">1992</a></li><li class="f-thide" id="auto-id-VHHt9P0MCQqOxqKb"><a href="#">1991</a></li><li class="f-thide" id="auto-id-NHxlF6i4dRTxTtWX"><a href="#">1990</a></li><li class="f-thide" id="auto-id-HXFT7IK1nHPbGxoT"><a href="#">1989</a></li><li class="f-thide" id="auto-id-qm2l2vctXx0U885C"><a href="#">1988</a></li><li class="f-thide" id="auto-id-BbSbXkMlczwUQxUw"><a href="#">1987</a></li><li class="f-thide" id="auto-id-K8T7utB03hRANSsg"><a href="#">1986</a></li><li class="f-thide" id="auto-id-4ZaFnLK4qmoVl4qc"><a href="#">1985</a></li><li class="f-thide" id="auto-id-Z4TngaR0F5GzxagO"><a href="#">1984</a></li><li class="f-thide" id="auto-id-AO5MkUAke3R2fW9I"><a href="#">1983</a></li><li class="f-thide" id="auto-id-qgs3T9GQKMOJoDWi"><a href="#">1982</a></li><li class="f-thide" id="auto-id-vpCNdqRHZbnrHk8u"><a href="#">1981</a></li><li class="f-thide" id="auto-id-I3vl0OrnrR2kLDRL"><a href="#">1980</a></li><li class="f-thide" id="auto-id-z8xF0d4X4Fg80DAT"><a href="#">1979</a></li><li class="f-thide" id="auto-id-rTkg8QGN9aeT1QRP"><a href="#">1978</a></li><li class="f-thide" id="auto-id-g9NHNUn1BK2ycJ3o"><a href="#">1977</a></li><li class="f-thide" id="auto-id-SSvOPPJ4TpTpTU2c"><a href="#">1976</a></li><li class="f-thide" id="auto-id-G27fCgf0gnmqWFGu"><a href="#">1975</a></li><li class="f-thide" id="auto-id-5qn6rDbXINetXp3H"><a href="#">1974</a></li><li class="f-thide" id="auto-id-z6bei2gnLtCwD6W6"><a href="#">1973</a></li><li class="f-thide" id="auto-id-c9HLELFnfq41RmMb"><a href="#">1972</a></li><li class="f-thide" id="auto-id-swS3XP0Ppf8l5Sb8"><a href="#">1971</a></li><li class="f-thide" id="auto-id-c0FwFN05SMTNQwR6"><a href="#">1970</a></li><li class="f-thide" id="auto-id-8ynWyDbChygiCUi8"><a href="#">1969</a></li><li class="f-thide" id="auto-id-fwe5Beo5Z4wnDmT3"><a href="#">1968</a></li><li class="f-thide" id="auto-id-bblfM4J4OHz6Uc03"><a href="#">1967</a></li><li class="f-thide" id="auto-id-JzLOsyPsd6HQGhqg"><a href="#">1966</a></li><li class="f-thide" id="auto-id-L6v03va8FMW4iQG9"><a href="#">1965</a></li><li class="f-thide" id="auto-id-G9wPVTFBvNEEJ4J9"><a href="#">1964</a></li><li class="f-thide" id="auto-id-e14lPEWdffwZET7W"><a href="#">1963</a></li><li class="f-thide" id="auto-id-QIxD6foI1y0fOZe1"><a href="#">1962</a></li><li class="f-thide" id="auto-id-o6rV4HqCbW76seQM"><a href="#">1961</a></li><li class="f-thide" id="auto-id-C9XReVT9hrKsqtIN"><a href="#">1960</a></li><li class="f-thide" id="auto-id-eheJyCk8veEvDr6s"><a href="#">1959</a></li><li class="f-thide" id="auto-id-TLQUh0y4v0ZNUZK0"><a href="#">1958</a></li><li class="f-thide" id="auto-id-4zmH4Wby1FGsddkT"><a href="#">1957</a></li><li class="f-thide" id="auto-id-7VzAq63946AlDPHJ"><a href="#">1956</a></li><li class="f-thide" id="auto-id-rlBib6LuBIdVK5TD"><a href="#">1955</a></li><li class="f-thide" id="auto-id-m6RFrS8dgLzepy53"><a href="#">1954</a></li><li class="f-thide" id="auto-id-O4TVR94C7H6nz35e"><a href="#">1953</a></li><li class="f-thide" id="auto-id-rhMkiMcDy3ZQAxEx"><a href="#">1952</a></li><li class="f-thide" id="auto-id-hL7sPpIAhDNCT8f6"><a href="#">1951</a></li><li class="f-thide" id="auto-id-2r2TXLAo7s9g1qmk"><a href="#">1950</a></li><li class="f-thide" id="auto-id-ZJp49HFfUfQG1Oo7"><a href="#">1949</a></li><li class="f-thide" id="auto-id-F77nT1m8qrxg0wBT"><a href="#">1948</a></li><li class="f-thide" id="auto-id-XzTnH6BhIrmnHZ4a"><a href="#">1947</a></li><li class="f-thide" id="auto-id-7Tdl60ZiN5MQwUQ9"><a href="#">1946</a></li><li class="f-thide" id="auto-id-enazusPDfOVzLW9a"><a href="#">1945</a></li><li class="f-thide" id="auto-id-9AvxadiagvKfItKG"><a href="#">1944</a></li><li class="f-thide" id="auto-id-6237TRh28yWBFreM"><a href="#">1943</a></li><li class="f-thide" id="auto-id-z5E0hTxtSXAVicRa"><a href="#">1942</a></li><li class="f-thide" id="auto-id-BucWEuIp9t67LMTF"><a href="#">1941</a></li><li class="f-thide" id="auto-id-LLWxaJodXdcGdCDf"><a href="#">1940</a></li><li class="f-thide" id="auto-id-B2TKrIQ2eP39oGDq"><a href="#">1939</a></li><li class="f-thide" id="auto-id-URxZ7rDbRu5BTJhQ"><a href="#">1938</a></li><li class="f-thide" id="auto-id-L4DwEt4LIOFamngi"><a href="#">1937</a></li><li class="f-thide" id="auto-id-cXWwqyFT7eOKFaza"><a href="#">1936</a></li><li class="f-thide" id="auto-id-XsF9TJWMpXMzf6P0"><a href="#">1935</a></li><li class="f-thide" id="auto-id-gZCmL9fDmug0Vqd3"><a href="#">1934</a></li><li class="f-thide" id="auto-id-fH1HVOvXGi1SDVCV"><a href="#">1933</a></li><li class="f-thide" id="auto-id-7WqSd8BCVdvKaI8W"><a href="#">1932</a></li><li class="f-thide" id="auto-id-CKsuhia94PovWTIe"><a href="#">1931</a></li><li class="f-thide" id="auto-id-LAahswLzM63dc8zu"><a href="#">1930</a></li><li class="f-thide" id="auto-id-wSuEbhZa7TI0Xohs"><a href="#">1929</a></li><li class="f-thide" id="auto-id-uvDxKmo2kLpbHygq"><a href="#">1928</a></li><li class="f-thide" id="auto-id-FegizqxKgdgT6abU"><a href="#">1927</a></li><li class="f-thide" id="auto-id-IotrIbFL5uyrOtnu"><a href="#">1926</a></li><li class="f-thide" id="auto-id-yJvy2ofOPC4Eyu4v"><a href="#">1925</a></li><li class="f-thide" id="auto-id-WcmE7T5ktu40XLT5"><a href="#">1924</a></li><li class="f-thide" id="auto-id-E4FZegb3nMDaXSBg"><a href="#">1923</a></li><li class="f-thide" id="auto-id-mBbZpaCJAlnITWvn"><a href="#">1922</a></li><li class="f-thide" id="auto-id-43Tw2gXZFmt4Oh7e"><a href="#">1921</a></li><li class="f-thide" id="auto-id-zqVv7E1S9fBf2OJL"><a href="#">1920</a></li></ul>
</div>
<span class="wrd f-fl">年</span>
<div class="u-slt u-slt-2 f-pr" id="mselect">
<span class="curr">04</span>
<i class="btn" id="auto-id-pPxHSh8umFNrvG5u"></i>
<ul style="display: none;">
<li class="f-thide" id="auto-id-n8a0ndWHXo98VtHS"><a href="#">01</a></li><li class="f-thide" id="auto-id-I9Tl77AtRFMKdw35"><a href="#">02</a></li><li class="f-thide" id="auto-id-S4prB2p7qwElicDf"><a href="#">03</a></li><li class="f-thide" id="auto-id-RRSXlSI5obGcMigE"><a href="#">04</a></li><li class="f-thide" id="auto-id-qu6isppXZbqSo5HC"><a href="#">05</a></li><li class="f-thide" id="auto-id-HGNnvOL1bsQuz2xi"><a href="#">06</a></li><li class="f-thide" id="auto-id-XaV9ETWWK374H2uq"><a href="#">07</a></li><li class="f-thide" id="auto-id-q1ImC4ea1RhK87hd"><a href="#">08</a></li><li class="f-thide" id="auto-id-tysvdLcb7w2wLISb"><a href="#">09</a></li><li class="f-thide" id="auto-id-D1xUtAomCvIUPQIh"><a href="#">10</a></li><li class="f-thide" id="auto-id-UFXJB7lwtcCsrVSy"><a href="#">11</a></li><li class="f-thide" id="auto-id-8yOUzIxfhaUdSPFL"><a href="#">12</a></li></ul>
</div>
<span class="wrd f-fl">月</span>
<div class="u-slt u-slt-2 f-pr" id="dselect">
<span class="curr">07</span>
<i class="btn" id="auto-id-6RWyLRRzrOhDh2FT"></i>
<ul style="display: none;">
<li class="f-thide" id="auto-id-QqdPv9ZptOmvPz7i"><a href="#">01</a></li><li class="f-thide" id="auto-id-Fz08XlACC1nIfuTm"><a href="#">02</a></li><li class="f-thide" id="auto-id-TLdGU9bX42Pgqr8l"><a href="#">03</a></li><li class="f-thide" id="auto-id-1ooUQVwslQ9w436V"><a href="#">04</a></li><li class="f-thide" id="auto-id-XaoyWaKhhNWlbTRf"><a href="#">05</a></li><li class="f-thide" id="auto-id-TtaVlXhXkqg6XePW"><a href="#">06</a></li><li class="f-thide" id="auto-id-XidRIOvCWSK7xgR9"><a href="#">07</a></li><li class="f-thide" id="auto-id-r9znCHxfGhtvwTv2"><a href="#">08</a></li><li class="f-thide" id="auto-id-lhTalxcEwPM53hXp"><a href="#">09</a></li><li class="f-thide" id="auto-id-KeQtWhDFClzuBVR3"><a href="#">10</a></li><li class="f-thide" id="auto-id-WKK0SkuXXSEEnl7o"><a href="#">11</a></li><li class="f-thide" id="auto-id-93rLg7OK4at84nms"><a href="#">12</a></li><li class="f-thide" id="auto-id-bxiLEnA1fPCXmOPJ"><a href="#">13</a></li><li class="f-thide" id="auto-id-GtQxyaVkTs7kESd8"><a href="#">14</a></li><li class="f-thide" id="auto-id-POpLiVU6A8mQ1B2T"><a href="#">15</a></li><li class="f-thide" id="auto-id-qdupDzanJpwr9rPo"><a href="#">16</a></li><li class="f-thide" id="auto-id-6KMddLl8XSdZDqTM"><a href="#">17</a></li><li class="f-thide" id="auto-id-yOK9NXG5fbDQQcSR"><a href="#">18</a></li><li class="f-thide" id="auto-id-wzQzq5qNFCKW7Toy"><a href="#">19</a></li><li class="f-thide" id="auto-id-MNCAQ4spN2ezfe40"><a href="#">20</a></li><li class="f-thide" id="auto-id-S4mUGxCHf30nWcfH"><a href="#">21</a></li><li class="f-thide" id="auto-id-iXIkxa6srozPMnd3"><a href="#">22</a></li><li class="f-thide" id="auto-id-VhwanciIUA5ZMAyv"><a href="#">23</a></li><li class="f-thide" id="auto-id-kkzzTrWTuSVdL1xp"><a href="#">24</a></li><li class="f-thide" id="auto-id-oUZmGAR2F1dtv1qT"><a href="#">25</a></li><li class="f-thide" id="auto-id-9htQhzXzhedNAfGc"><a href="#">26</a></li><li class="f-thide" id="auto-id-4NEzLeMPibcbVTbo"><a href="#">27</a></li><li class="f-thide" id="auto-id-rdXDxEafcuOLrHqR"><a href="#">28</a></li><li class="f-thide" id="auto-id-wnic5tTfnIhpDc0a"><a href="#">29</a></li><li class="f-thide" id="auto-id-ob0hCqs7KVpC79J4"><a href="#">30</a></li></ul>
</div>
<span class="wrd f-fl">日</span>
</div>
<div class="itm itm-1 f-cb" style="z-index:10;">
<label class="lab">地区：</label>
<div class="u-slt f-pr" id="pselect">
<span class="curr">广东省</span>
<i class="btn" id="auto-id-9V0TfG8clh1muIko"></i>
<ul style="display: none;"><!-- ie6下，高超过150px就设_height:150px; -->
<li class="f-thide" id="auto-id-xXJ3gsT6HEfAwT7O"><a href="#">直辖市</a></li><li class="f-thide" id="auto-id-S2fmh66AS0n78a6w"><a href="#">特别行政区</a></li><li class="f-thide" id="auto-id-UwgIVOv0gDU4d3ZL"><a href="#">河北省</a></li><li class="f-thide" id="auto-id-OP6L8CxUGfr9u7sJ"><a href="#">山西省</a></li><li class="f-thide" id="auto-id-qG6PmPNofGCxTcNv"><a href="#">内蒙古</a></li><li class="f-thide" id="auto-id-9nlXFTA7HPUArumT"><a href="#">辽宁省</a></li><li class="f-thide" id="auto-id-3mbZqxtamJ5oGKAX"><a href="#">吉林省</a></li><li class="f-thide" id="auto-id-B1vsJGZynfREBXCa"><a href="#">黑龙江省</a></li><li class="f-thide" id="auto-id-JhlSiTdHymsgtorA"><a href="#">江苏省</a></li><li class="f-thide" id="auto-id-Us3pItQlk48fLh4S"><a href="#">浙江省</a></li><li class="f-thide" id="auto-id-J0pKiOxTqMBRWiI5"><a href="#">安徽省</a></li><li class="f-thide" id="auto-id-ra7wlIzxi1qURkIR"><a href="#">福建省</a></li><li class="f-thide" id="auto-id-tFKllTKtW78swzn7"><a href="#">江西省</a></li><li class="f-thide" id="auto-id-9w9pPUBFZKRPWAH5"><a href="#">山东省</a></li><li class="f-thide" id="auto-id-5VVMqzQbTs5SoqeK"><a href="#">河南省</a></li><li class="f-thide" id="auto-id-ARN06EcOg7yFC22s"><a href="#">湖北省</a></li><li class="f-thide" id="auto-id-0Vm1AqeNLA5QGVwI"><a href="#">湖南省</a></li><li class="f-thide" id="auto-id-p1Z2HsQWrAttffiX"><a href="#">广东省</a></li><li class="f-thide" id="auto-id-cOV7QakODuoATF5g"><a href="#">广西</a></li><li class="f-thide" id="auto-id-TdxmyTFKoVRh6ttL"><a href="#">海南省</a></li><li class="f-thide" id="auto-id-KrQJl2U37Cgx5q72"><a href="#">四川省</a></li><li class="f-thide" id="auto-id-NAE78zrfTrnBtXy5"><a href="#">贵州省</a></li><li class="f-thide" id="auto-id-rcDfQ0vySLeV6vWr"><a href="#">云南省</a></li><li class="f-thide" id="auto-id-NuShztCzHTWzIG25"><a href="#">西藏</a></li><li class="f-thide" id="auto-id-MAA1CqLoOF8IdCVa"><a href="#">陕西省</a></li><li class="f-thide" id="auto-id-KKwcdcD9AdLDJ1KJ"><a href="#">甘肃省</a></li><li class="f-thide" id="auto-id-pRt5tSdFWTblNyHi"><a href="#">青海省</a></li><li class="f-thide" id="auto-id-2ox8ffI0FTLGoq8x"><a href="#">宁夏</a></li><li class="f-thide" id="auto-id-uZdfm7zQL1kNOr5x"><a href="#">新疆</a></li><li class="f-thide" id="auto-id-bI0Hh837iS3DONzc"><a href="#">台湾省</a></li><li class="f-thide" id="auto-id-hWNv5QIVKsqWaZ0P"><a href="#">海外</a></li></ul>
</div>
<div class="u-slt f-pr" id="cselect">
<span class="curr f-thide">河源市</span>
<i class="btn" id="auto-id-wcS0kHMuIdgLLSvT"></i>
<ul style="display: none;">
<li class="f-thide" id="auto-id-e0S6acTJDW0HZh0S"><a href="#">广州市</a></li><li class="f-thide" id="auto-id-ERqW7cG5irclHlwa"><a href="#">韶关市</a></li><li class="f-thide" id="auto-id-oeVS8maGUDE8oFGk"><a href="#">深圳市</a></li><li class="f-thide" id="auto-id-BvgTtlktFzmKPQRs"><a href="#">珠海市</a></li><li class="f-thide" id="auto-id-oIOWSR0Tlg3IZUaJ"><a href="#">汕头市</a></li><li class="f-thide" id="auto-id-faqovaPvTTcZLDev"><a href="#">佛山市</a></li><li class="f-thide" id="auto-id-mNshMWDl3VLgLzLe"><a href="#">江门市</a></li><li class="f-thide" id="auto-id-G17ZCRQbF2qLfVm8"><a href="#">湛江市</a></li><li class="f-thide" id="auto-id-4ZCqISA7vA3pZV9w"><a href="#">茂名市</a></li><li class="f-thide" id="auto-id-ox9XJJNT8IA9sWz9"><a href="#">肇庆市</a></li><li class="f-thide" id="auto-id-QhUCAfP0rioZZwAZ"><a href="#">惠州市</a></li><li class="f-thide" id="auto-id-rbUFubGzToA88SNN"><a href="#">梅州市</a></li><li class="f-thide" id="auto-id-lrrJZ5nggWZUhxNN"><a href="#">汕尾市</a></li><li class="f-thide" id="auto-id-UwI033JcgV0Nwlrw"><a href="#">河源市</a></li><li class="f-thide" id="auto-id-bWraghJcGXO1Zw3T"><a href="#">阳江市</a></li><li class="f-thide" id="auto-id-mptQD6rh2X6kWqNw"><a href="#">清远市</a></li><li class="f-thide" id="auto-id-DEBFxTcctJqonMEM"><a href="#">东莞市</a></li><li class="f-thide" id="auto-id-pXOod1zMQmFb4f3D"><a href="#">中山市</a></li><li class="f-thide" id="auto-id-TkDIhsRbMw55K1vt"><a href="#">潮州市</a></li><li class="f-thide" id="auto-id-ODm5I64qEg130pyH"><a href="#">揭阳市</a></li><li class="f-thide" id="auto-id-Xa07vQaVz7p9JSXz"><a href="#">云浮市</a></li></ul>
</div>
</div>
<div class="itm ft">
<a class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true" href="#" data-action="save"><i>保 存</i></a>
<a class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="#" data-action="cancel" style="display:none;"><i>取 消</i></a>
</div>
</div>
<div class="avatar f-pr">
<img src="http://p1.music.126.net/pVptwn0wRkMLLmjIdtGr7Q==/109951165973320454.jpg?param=140y140" id="avatar">
<span class="btm"></span>
<a href="javascript:;" class="upload" id="upload">更换头像</a>
</div>
</div>
</form>
</div>
<div class="g-wrap m-edtimg f-cb" style="display:none;">
<div class="u-bread1 f-fw1 f-fs1">
<a href="javascript:;" class="s-fc7" id="back">个人设置</a><span class="arr s-fc4">&gt;</span><span class="f-fw1">更换头像</span>
</div>
<div id="cropBox"></div>
</div>
</div>
</template>

<script>
export default {
    name: 'UserSetting'
}
</script>

<style>

</style>