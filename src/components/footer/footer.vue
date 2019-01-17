<template>
    <footer id="footer">
        <container>
            <div class="ky bfcbox right">
                <div class="col contact">联系</div>
                <div class="col menu row"
                     role="menu">
                    <dl role="list"
                        class="dl">
                        <dt>
                            <b>产品服务</b>
                        </dt>
                        <dd>
                            <a role="link"
                               title="产品介绍"
                               href="#">产品介绍</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="增值服务"
                               href="#">增值服务</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">生鲜速运</a>
                        </dd>
                    </dl>
                    <dl role="list"
                        class="dl">
                        <dt>
                            <b>客户服务</b>
                        </dt>
                        <dd>
                            <a role="link"
                               title="产品介绍"
                               href="#">下单寄件</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="增值服务"
                               href="#">运单查询</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">时效运费查询</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">网点查询</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">寄件须知</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">客户支持</a>
                        </dd>
                    </dl>
                    <dl role="list"
                        class="dl">
                        <dt>
                            <b>热门活动</b>
                        </dt>
                        <dd>
                            <a role="link"
                               title="产品介绍"
                               href="#">客户福利</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="增值服务"
                               href="#">积分礼品</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">跨越红包</a>
                        </dd>
                    </dl>
                    <dl role="list"
                        class="dl">
                        <dt>
                            <b>新闻公告</b>
                        </dt>
                        <dd>
                            <a role="link"
                               title="产品介绍"
                               href="#">跨越公告</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="增值服务"
                               href="#">跨越新闻</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">行业新闻</a>
                        </dd>
                    </dl>
                    <dl role="list"
                        class="dl">
                        <dt>
                            <b>走进跨越</b>
                        </dt>
                        <dd>
                            <a role="link"
                               title="产品介绍"
                               href="#">企业介绍</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="增值服务"
                               href="#">员工关怀</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">加入我们</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">联系我们</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">业务合作</a>
                        </dd>
                    </dl>
                    <dl role="list"
                        class="dl">
                        <dt>
                            <b>内部办公</b>
                        </dt>
                        <dd>
                            <a role="link"
                               title="产品介绍"
                               href="#">内部邮箱</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="增值服务"
                               href="#">企业邮箱</a>
                        </dd>
                        <dd>
                            <a role="link"
                               title="生鲜速运"
                               href="#">跨越周刊</a>
                        </dd>
                    </dl>
                </div>
            </div>

            <!-- Company -->
            <div class="company">
                <ul class="row">
                    <li class="link">
                        <a role="link"
                           title="产品介绍"
                           href="#">使用条款</a>
                    </li>
                    <li class="link">
                        <a role="link"
                           title="产品介绍"
                           href="#">法律声明</a>
                    </li>
                    <li class="link">
                        <a role="link"
                           title="产品介绍"
                           href="#">隐私保护</a>
                    </li>
                </ul>
                <div class="copyright">
                    <div class="ky ft-l">总部地址：深圳市宝安区福永镇福永街道福园二路</div>
                    <div class="ky ft-r">
                        跨越速运集团有限公司版权所有 Copyright © 2007-
                        <span>{{ year }}</span>ky-express.com.All Rights Reserved 粤ICP备08000894号
                    </div>
                </div>
            </div>
        </container>
    </footer>
</template>
<script>
import './footer.scss'
import { Container } from '@comps'
export default {
    data() {
        return {
            year: (new Date()).getFullYear()
        }
    },
    components: {
        Container
    }
}
</script>
