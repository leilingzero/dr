//发布页https://www.dadagui.vip /有人机验证
function verifyLogin(url) {
    let cnt = 0;
    let cookie = '';
    let r = Math.random();
    let yzm_url = getHome(url) + '/index.php/verify/index.html';
    log(`验证码链接:${yzm_url}`);
    let submit_url = getHome(url) + '/index.php/ajax/verify_check';
    log(`post登录链接:${submit_url}`);
    while (cnt < OCR_RETRY) {
        try {
            let {cookie, html} = reqCookie(yzm_url + '?r=' + r, {toBase64: true});
            let code = OcrApi.classification(html);
            log(`第${cnt + 1}次验证码识别结果:${code}`);
            html = post(submit_url, {
                headers: {Cookie: cookie},
                body: 'type=show&verify=' + code,
            });
            html = JSON.parse(html);
            
            if (html.code === 1) {
                log(`第${cnt + 1}次验证码提交成功`);
                log(cookie);
                return cookie // 需要返回cookie
            } else if (html.code !== 1 && cnt + 1 >= OCR_RETRY) {
                cookie = ''; // 需要清空返回cookie
            }
        } catch (e) {
            log(`第${cnt + 1}次验证码提交失败:${e.message}`);
            if (cnt + 1 >= OCR_RETRY) {
                cookie = '';
            }
        }
        cnt += 1
    }
    return cookie
}

globalThis.verifyLogin = verifyLogin;

muban.首图2.二级.title = '.stui-content__detail .title&&Text;p.data:eq(3)&&Text';
muban.首图2.二级.desc = 'p.data:eq(-1)&&Text;p.data:eq(2)&&Text;p.data:eq(0)&&Text;p.data:eq(-2)&&Text;p.data:eq(-3)&&Text';
muban.首图2.二级.tabs = '.stui-vodlist__head h3';
var rule = {
    title: '达达龟',
    模板: '首图2',
    host: 'https://www.dadagui.me',
    // url:'/vodshow/fyclass--------fypage---.html',
    url: '/vodshow/fyclassfyfilter.html',
    filterable: 1, //是否启用分类筛选,
    filter_url: '-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter: {
        "1": [{ "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "大陆", "v": "大陆" }, { "n": "香港", "v": "香港" }, { "n": "台湾", "v": "台湾" }, { "n": "美国", "v": "美国" }, { "n": "法国", "v": "法国" }, { "n": "英国", "v": "英国" }, { "n": "日本", "v": "日本" }, { "n": "韩国", "v": "韩国" }, { "n": "德国", "v": "德国" }, { "n": "泰国", "v": "泰国" }, { "n": "印度", "v": "印度" }, { "n": "意大利", "v": "意大利" }, { "n": "西班牙", "v": "西班牙" }, { "n": "加拿大", "v": "加拿大" }, { "n": "其他", "v": "其他" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "国语" }, { "n": "英语", "v": "英语" }, { "n": "粤语", "v": "粤语" }, { "n": "闽南语", "v": "闽南语" }, { "n": "韩语", "v": "韩语" }, { "n": "日语", "v": "日语" }, { "n": "法语", "v": "法语" }, { "n": "德语", "v": "德语" }, { "n": "其它", "v": "其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }],
        "2": [{ "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "内地", "v": "内地" }, { "n": "韩国", "v": "韩国" }, { "n": "香港", "v": "香港" }, { "n": "台湾", "v": "台湾" }, { "n": "日本", "v": "日本" }, { "n": "美国", "v": "美国" }, { "n": "泰国", "v": "泰国" }, { "n": "英国", "v": "英国" }, { "n": "新加坡", "v": "新加坡" }, { "n": "其他", "v": "其他" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "国语" }, { "n": "英语", "v": "英语" }, { "n": "粤语", "v": "粤语" }, { "n": "闽南语", "v": "闽南语" }, { "n": "韩语", "v": "韩语" }, { "n": "日语", "v": "日语" }, { "n": "其它", "v": "其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }],
        "3": [{ "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "内地", "v": "内地" }, { "n": "港台", "v": "港台" }, { "n": "日韩", "v": "日韩" }, { "n": "欧美", "v": "欧美" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "国语" }, { "n": "英语", "v": "英语" }, { "n": "粤语", "v": "粤语" }, { "n": "闽南语", "v": "闽南语" }, { "n": "韩语", "v": "韩语" }, { "n": "日语", "v": "日语" }, { "n": "其它", "v": "其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }],
        "4": [{ "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "国产", "v": "国产" }, { "n": "日本", "v": "日本" }, { "n": "欧美", "v": "欧美" }, { "n": "其他", "v": "其他" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2025", "v": "2025" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "国语" }, { "n": "英语", "v": "英语" }, { "n": "粤语", "v": "粤语" }, { "n": "闽南语", "v": "闽南语" }, { "n": "韩语", "v": "韩语" }, { "n": "日语", "v": "日语" }, { "n": "其它", "v": "其它" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }]
    },
    //searchUrl: '/vodsearch/**----------fypage---.html',
    searchUrl: '/rss.xml?wd=**',
    class_parse: '.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    lazy: $js.toString(() => {
        let js = 'try{function requestApix(callback){$.post(\"api.php\",{vid:getQueryString(\"vid\")},function(result){callback(result.data.url);},\"json\");}requestApix(function(data){location.href=sign(data);})}catch(e){}location.href=document.querySelector(\"#playleft iframe\").src;';
        input = {
            parse: 1,
            url: input,
            click: js,
            js: js
        };
    }),
    一级二: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',            
    一级: $js.toString(() => {
         let cookie = getItem(RULE_CK, '');
        //log('储存的cookie:' + cookie);        
        let ret = request(MY_URL, {
            headers: {
                Referer: encodeUrl(MY_URL),
                Cookie: cookie,
            }
        });
        if (/系统安全验证/.test(ret)) {
            //log(ret);
            cookie = verifyLogin(MY_URL);
            if (cookie) {
                log(`本次成功过验证,cookie:${cookie}`);
                setItem(RULE_CK, cookie);
            } else {
                log(`本次验证失败,cookie:${cookie}`);
            }
            ret = request(MY_URL, {
                headers: {
                    Referer: encodeUrl(MY_URL),
                    Cookie: cookie,
                }
            });
        }
//log(ret);
        let d = [];
        let p = rule.一级二.split(';');
        let arr = pdfa(ret, p[0]);//列表
        arr.forEach(it => {
            d.push({
                title: pdfh(it, p[1]),//标题
                pic_url: pdfh(it, p[2]),//图片
                desc: pdfh(it, p[3]),//描述
                url: pdfh(it, p[4]),//链接
                
            });

        });
        setResult(d);
    }),
    搜索: $js.toString(() => {
    let html = post(input.split('?')[0], { body: input.split('?')[1] });
    let items = pdfa(html, 'rss&&item');
    // log(items);
    let d = [];
    items.forEach(it => {
      it = it.replace(/title|link|author|pubdate|description/g, 'p');
      let url = pdfh(it, 'p:eq(1)&&Text');
      url = url.replace(/cc/g, 'me');
      d.push({
        title: pdfh(it, 'p&&Text'),
        url: url,
        desc: pdfh(it, 'p:eq(3)&&Text'),
        content: pdfh(it, 'p:eq(2)&&Text'),
        pic_url: "",
      });
    });
    setResult(d);
  }),
  预处理:'',//js编写，用于过人机验证，未实现               
}