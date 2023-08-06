import Vue from "vue";
import Router from "vue-router";
import register from "@/views/register";
import login from "@/views/login";
import index from "@/views/index";
import console from "@/views/console";
import order from "@/views/order";
import goodslist from "@/views/goodslist";
import goodsadd from "@/views/goodsadd";
import goodsclassify from "@/views/goodsclassify";
import shopmanage from "@/views/shopmanage";
import accountlist from "@/views/accountlist";
import accountadd from "@/views/accountadd";
import passmodify from "@/views/passmodify";
import goodscount from "@/views/goodscount";
import ordercount from "@/views/ordercount";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/index",
      name: "index",
      component: index,
      children: [
        {
          path: "/console",
          name: "console",
          component: console
        },
        {
          path: "/order",
          name: "order",
          component: order
        },
        {
          path: "/goodslist",
          name: "goodslist",
          component: goodslist
        },
        {
          path: "/goodsadd",
          name: "goodsadd",
          component: goodsadd
        },
        {
          path: "/goodsclassify",
          name: "goodsclassify",
          component: goodsclassify
        },
        {
          path: "/shopmanage",
          name: "shopmanage",
          component: shopmanage
        },
        {
          path: "/accountlist",
          name: "accountlist",
          component: accountlist
        },
        {
          path: "/accountadd",
          name: "accountadd",
          component: accountadd
        },
        {
          path: "/passmodify",
          name: "passmodify",
          component: passmodify
        },
        {
          path: "/goodscount",
          name: "goodscount",
          component: goodscount
        },
        {
          path: "/ordercount",
          name: "ordercount",
          component: ordercount
        }
      ]
    }
  ]
});
