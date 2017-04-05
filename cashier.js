/* @update: 2017-2-28 11:55:55 */
function setCardSelectHide() {
    $("body").bind("click", function(a) {
        $(a.target).parents(".bank-disable").length >= 1 || $(".j_baitiaoList, .j_usedBankList").slideUp("fast")
    })
}
function showErrorMsg(a) {
    $("#showErrMsgSpan").show(),
    $("#showErrMsgSpan").html(a)
}
function showActivatPayPwdTip() {
    $.jdThickBox({
        type: "text",
        width: 490,
        height: 158,
        _box: "many02",
        source: '<div class="mflex"><div class="mc"><s class="icon-warn03"></s><div class="fore"><h3 class="ftx-04">\u5c0a\u656c\u7684\u7528\u6237\u60a8\u597d\uff0c\u4e3a\u4e86\u4fdd\u969c\u60a8\u7684\u8d26\u6237\u8d44\u4ea7\u5b89\u5168\uff0c\u652f\u4ed8\u524d\u8bf7\u60a8\u5f00\u542f\u652f\u4ed8\u5bc6\u7801</h3><p class="ftx-03">\u652f\u4ed8\u5bc6\u7801\u5f00\u542f\u540e\uff0c\u4f7f\u7528\u8d26\u6237\u4e2d\u4f59\u989d\u3001\u793c\u54c1\u5361\u3001\u4f18\u60e0\u5238\u65f6\uff0c\u9700\u8981\u8f93\u5165\u652f\u4ed8\u5bc6\u7801\uff0c\u4e3a\u60a8\u7684\u8d26\u6237\u8d44\u91d1\u52a0\u628a\u9501</p></div><div class="btns"><a href="http://safe.jd.com/user/paymentpassword/safetyCenter.action" class="btn-h2 btn-c2">\u7acb\u5373\u5f00\u542f\u652f\u4ed8\u5bc6\u7801</a></div><div class="extra"></div></div></div>',
        title: "\u8bf7\u5f00\u901a\u652f\u4ed8\u5bc6\u7801",
        _close_val: "\xd7",
        _titleOn: !0
    })
}
function isOpenPayPwd() {
    var a = isCheckedVirtualPay()
      , e = globalVar.payPwd;
    e.isSearchPayPwd = !0,
    1 == a || 1 == globalVar.isSignPay ? 1 == e.isOpenPayPwd ? (1 == e.isHaveValidPayPwd ? $("#pv-line-haveValidated").show() : $("#pv-line-password").show(),
    1 == globalVar.isSignPay ? $("#signPayMesDiv").show() : $("#signPayMesDiv").hide()) : 1 == e.isOpenShortPwd ? (1 == e.isHaveValidPayPwd ? $("#pv-line-haveValidated").show() : $("#pv-line-shortPwd").show(),
    1 == globalVar.isSignPay ? $("#signPayMesDiv").show() : $("#signPayMesDiv").hide()) : ($("#pv-line-password").hide(),
    $("#pv-line-shortPwd").hide(),
    $("#pv-line-shortPwd .ui-shortPwd-input").val(""),
    $("#payPwd").val(""),
    $("#noOpenPwdDiv").show(),
    $("#signPayMesDiv").hide()) : ($("#pv-line-password").hide(),
    $("#pv-line-shortPwd").hide(),
    $("#pv-line-shortPwd .ui-shortPwd-input").val(""),
    $("#pv-line-haveValidated").hide(),
    $("#payPwd").val(""),
    $("#noOpenPwdDiv").hide(),
    $("#signPayMesDiv").hide())
}
function reckonOtherCountPay(a) {
    var e = Number($("#virtualPayCountStrong").text());
    e = a + e,
    $("#virtualPayCountStrong").html(e.toFixed(2))
}
function subOtherPay(a) {
    if ("checked" != $("#virtualPayYue").attr("checked") && "checked" != $("#virtualPayJingBean").attr("checked") && "checked" != $("#virtualPayGangbeng").attr("checked") && "checked" != $("#virtualPayWyQianBao").attr("checked") && "checked" != $("#virtualPayJrb").attr("checked"))
        $("#virtualPayCountStrong").html("0.00");
    else {
        var e = Number($("#virtualPayCountStrong").text());
        e -= a,
        $("#virtualPayCountStrong").html(e.toFixed(2))
    }
}
function clearCheckBox(a) {
    "bankCard" != a ? bankCard.bankListHide() : (payBankcard.emptyErrorTips(),
    payBankcard.setInputBlur(),
    paymentUI.setPlaceholder()),
    "blank_note" != a && baiTiao.hide(),
    "jr_jrb" != a && xiaoJinKu.hide(),
    "balance_com" != a && yue.hide(),
    "jingbean" != a && jingBean.hide(),
    "gangbeng" != a && gangBeng.hide(),
    "wyQianBao" != a && wyQianBao.hide(),
    "balance_com" != a && "jingbean" != a && "gangbeng" != a && "wyQianBao" != a && otherPay.hide()
}
function showRemainTip() {}
function getCanPay(a) {
    var e = Number($("#remainShouldPayAmount").val())
      , i = e - a;
    return $("#remainShouldPayAmount").val(i.toFixed(2)),
    $("#remainShouldPayAmountSpan").html(i.toFixed(2)),
    i > 0 ? i = a : (i = e,
    $("#remainShouldPayAmount").val("0"),
    $("#remainShouldPayAmountSpan").html("0")),
    i
}
function getCanBackMoney(a) {
    if ("" != a) {
        var e = Number($("#remainShouldPayAmount").val());
        return e = Number(a) + e,
        $("#remainShouldPayAmount").val(e.toFixed(2)),
        $("#remainShouldPayAmountSpan").html(e.toFixed(2)),
        e
    }
    return ""
}
function isCheckedVirtualPay() {
    var a = !1;
    return $("input[name=virtualPayType]").each(function() {
        "checked" == $(this).attr("checked") && (a = !0,
        globalVar.payPwd.isValidPayPwd = !0)
    }),
    1 == globalVar.isSignPay && (a = !0,
    globalVar.payPwd.isValidPayPwd = !0),
    a
}
function isCombPay() {
    var a = 0;
    return $("input[name=virtualPayType]").each(function() {
        "checked" == $(this).attr("checked") && (a += 1)
    }),
    a >= 2
}
function submitPay() {
    confirmSubmitPay()
}
function confirmSubmitPay() {
    try {
        if (1 == globalVar.canBeSubmit) {
            var a = isCheckedVirtualPay();
            if (1 == globalVar.bankCardIsChecked)
                if (1 == globalVar.quickPayIsChecked) {
                    if ("" == $("#quickpayToken").val())
                        return void $("#submitPayError").html("\u8bf7\u83b7\u53d6\u624b\u673a\u9a8c\u8bc1\u7801");
                    if (!quickValidate.quickpayConfirmValidate())
                        return;
                    0 == globalVar.isSignPay && $("#cardPayType").val("quick"),
                    $("#cardPayAmountHide").val($("#cardPayAmountStrong").html())
                } else
                    0 == globalVar.quickPayIsChecked && ($("#cardPayType").val("normal"),
                    $("#cardPayAmountHide").val($("#cardPayAmountStrong").html()));
            if (submitButton.disable(),
            1 == a) {
                if ("checked" == $("#virtualPayBlankNote").attr("checked") && ("" == $("#fenQiPlanHidden").val() || "0" == $("#fenQiPlanHidden").val()))
                    return $("#showErrMsgSpan").html("\u7531\u4e8e\u7f51\u7edc\u95ee\u9898\u60a8\u597d\u50cf\u6ca1\u6709\u9009\u62e9\u6b63\u786e\u7684\u767d\u6761\u5206\u671f\u54df^_^\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u65b0\u9009\u62e9\uff01"),
                    void submitButton.enable();
                0 == globalVar.payPwd.isHaveValidPayPwd && "" == $("#payPwd").val() ? ($("#showErrMsgSpan").html("\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801"),
                submitButton.enable()) : virtualPay()
            } else
                cardPay()
        }
    } catch (e) {
        $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^"),
        $("#submitPayError").fadeOut(5e3, function() {
            $("#submitPayError").html(""),
            $("#submitPayError").show("")
        });
        var i = $("#paySign").val()
          , n = {
            quickType: "\u7acb\u5373\u652f\u4ed8",
            paySign: i,
            exception: e.name + ":" + e.message
        }
          , o = "/quick/jsErrorCatch.action";
        $.post(o, n, "json")
    }
}
function isIE6() {
    var a = /msie 6/i.test(navigator.userAgent);
    return a
}
function virtualPay() {
    var a = 0;
    1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked && 1 == globalVar.quickBoundPayFlag && 1 == globalVar.isSignPay && (a = 1);
    var e = "combinationVirtualPay.action"
      , i = $("#payPwd").val().replace(/%/g, "%25").replace(/\+/g, "%2B").replace(/\&/g, "%26")
      , n = quickConfirm.jdparm()
      , o = $("#deviceId").val()
      , t = $("#fingerprint").val()
      , r = $("#riskPaySession").val()
      , l = $("#virtualPayForm").serialize() + "&payPwd=" + i + "&baiTiaoRepayDate=" + $("#baiTiaoRepayDateHide").val() + "&creditVersion=" + $("#creditVersion").val() + "&jscContent=" + n + "&deviceId=" + o + "&fingerprint=" + t + "&riskPaySession=" + r + "&signPay=" + a
      , s = "";
    if (1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked && 1 == globalVar.quickBoundPayFlag && 1 == globalVar.isSignPay) {
        var d = $("input[name='payCard-cardId']").val()
          , u = $("#remainShouldPayAmount").val()
          , c = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
          , h = $("#ub-item-firstBank").children("input[name='payCard-agencyCode']").attr("value")
          , m = $("#ub-item-firstBank").children("input[name='payCard-isSign']").attr("value")
          , y = $("#ub-item-firstBank").children("input[name='payCard-token']").attr("value")
          , v = $("#pv-input-cvv2").val()
          , b = $("#ub-item-firstBank").children("input[name='payCard-shouldAmount']").attr("value")
          , f = $("#ub-item-firstBank").children("input[name='payCard-realAmount']").attr("value")
          , p = $("#ub-item-firstBank").children("input[name='payCard-discountAmount']").attr("value")
          , P = "0";
        globalVar.useZhiFuManJian && (P = "1"),
        s = "&cardId=" + d + "&signAmount=" + u + "&bankCode=" + c + "&agencyCode=" + h + "&sign=" + m + "&token=" + y + "&cvv2=" + v + "&shouldAmount=" + b + "&realAmount=" + f + "&discountAmount=" + p + "&useManJian=" + P,
        l += s
    }
    var C = !0;
    1 == globalVar.bankCardIsChecked && 0 == globalVar.quickPayIsChecked && (C = !1),
    l = 1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked && 0 == globalVar.isSignPay ? l + "&haveQuickPay=1&userType=" + globalVar.userType : l + "&haveQuickPay=0&userType=" + globalVar.userType,
    "" != globalVar.payPwd.validatedEncode && (l = l + "&validatedEncode=" + globalVar.payPwd.validatedEncode),
    $.ajax({
        type: "post",
        url: e,
        data: l,
        async: C,
        timeout: 25e3,
        success: function(a) {
            var e = a.result;
            if ("success" == e)
                "quick" == a.cardPayType ? (buildVirtualPayList(a),
                cardPay()) : "normal" == a.cardPayType ? cardPay() : location.href = a.redirectUrl;
            else if ("failure" == e) {
                if ("00100" == a.resultCode)
                    uniformFkGetPhontVerifyCode("1", a.codedPhoneNum, a.riskPaySession);
                else if ("00300" == a.resultCode)
                    showErrorForFK("\u8be5\u8ba2\u5355\u4e0d\u652f\u6301\u6253\u767d\u6761\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u3002");
                else if ("00301" == a.resultCode)
                    showErrorForFK("\u6b64\u652f\u4ed8\u65b9\u5f0f\u98ce\u9669\u8f83\u9ad8\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u3002");
                else if ("00302" == a.resultCode)
                    showErrorForFK("\u6b64\u652f\u4ed8\u65b9\u5f0f\u98ce\u9669\u8f83\u9ad8\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u7ec4\u5408\u652f\u4ed8\u65b9\u5f0f\u3002");
                else if ("ECV0101" == a.resultCode)
                    showErrorForFK("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u60a8\u6838\u5bf9\u6216\u91cd\u65b0\u83b7\u53d6\u3002");
                else if ("SMS10007" == a.resultCode)
                    showErrorForFK("\u9a8c\u8bc1\u7801\u5df2\u5931\u6548\uff0c\u8bf7\u60a8\u91cd\u65b0\u83b7\u53d6\u3002");
                else if ("SMS10008" == a.resultCode)
                    showErrorForFK("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u60a8\u6838\u5bf9\u6216\u91cd\u65b0\u83b7\u53d6\u3002");
                else if ("SMS20001" == a.resultCode)
                    showErrorForFK("\u77ed\u4fe1\u53d1\u9001\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01");
                else if ("E10002" == a.resultCode)
                    showErrorForFK("\u652f\u4ed8\u5bc6\u7801\u9519\u8bef");
                else if ("E10003" == a.resultCode)
                    showErrorForFK("\u60a8\u7684\u652f\u4ed8\u5bc6\u7801\u88ab\u9501\u5b9a\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                else if ("E10004" == a.resultCode)
                    showErrorForFK("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5");
                else if ("L84000" == a.resultCode)
                    showErrorForFK("\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801");
                else if ("L85000" == a.resultCode)
                    showErrorForFK("\u4eac\u8c46\u5df2\u7ecf\u652f\u4ed8\u8fc7\uff0c\u4e0d\u5141\u8bb8\u518d\u6b21\u4f7f\u7528");
                else if ("L85100" == a.resultCode)
                    showErrorForFK("\u4eac\u8c46\u53ea\u80fd\u652f\u4ed8\u5e94\u4ed8\u91d1\u989d\u7684\u4e00\u534a");
                else if ("L85101" == a.resultCode)
                    showErrorForFK("\u4eac\u8c46\u91d1\u989d\u53ea\u80fd\u652f\u4ed81000\u8c46\u4ee5\u4e0a,\u5e76\u4e14\u4e3a1000\u8c46\u7684\u6574\u6570\u500d");
                else if ("L81001" == a.resultCode)
                    showErrorForFK("\u5f53\u524d\u7528\u6237\u548c\u4e0b\u5355\u7528\u6237\u4e0d\u4e00\u81f4\uff0c\u8bf7\u767b\u9646\u4e0b\u5355\u7528\u6237\u652f\u4ed8");
                else if ("L81002" == a.resultCode)
                    showErrorForFK("\u7531\u4e8e\u7f51\u7edc\u95ee\u9898\u60a8\u597d\u50cf\u6ca1\u6709\u9009\u62e9\u6b63\u786e\u7684\u767d\u6761\u5206\u671f\u54df^_^\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u65b0\u9009\u62e9\uff01");
                else if ("L86000" == a.resultCode)
                    showErrorForFK("\u652f\u4ed8\u8ba2\u5355\u4fe1\u606f\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                else if ("L81000" == a.resultCode)
                    showErrorForFK("\u8ba2\u5355\u4e2d\u542b\u6709\u53d7\u9650\u5236\u5546\u54c1\u4e0d\u652f\u6301\u6253\u767d\u6761,\u6216\u8005\u5df2\u8d85\u8fc7\u767d\u6761\u5141\u8bb8\u9650\u989d\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f");
                else if ("L80000" == a.resultCode)
                    buildVirtualPayList(a),
                    paymentUI.showModal("#virtualResultDiv", function() {}),
                    modalAuth.hide(),
                    fkAuthModal.hide(),
                    submitButton.enable();
                else if ("L82000" == a.resultCode)
                    showErrorForFK("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                else if ("L83000" == a.resultCode)
                    showErrorForFK("\u8bf7\u9009\u62e9\u865a\u62df\u652f\u4ed8\u65b9\u5f0f\u63d0\u4ea4");
                else if ("L87000" == a.resultCode)
                    showErrorForFK("\u767d\u6761\u652f\u4ed8\u91d1\u989d\u5c0f\u4e8e10\u5143\u65f6\u4e0d\u80fd\u5206\u671f\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u767d\u6761\u5206\u671f");
                else if ("ECR0005" == a.resultCode)
                    showErrorForFK("\u8be5\u8ba2\u5355\u7c7b\u578b\u5df2\u8d85\u8fc7\u5f53\u6708\u6700\u5927\u9650\u989d\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f");
                else if ("L93000" == a.resultCode)
                    showErrorForFK("\u8be5\u8ba2\u5355\u5b58\u5728\u98ce\u9669\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f");
                else {
                    var i = a.messageText;
                    (null == i || "" == i) && (i = "\u4e0d\u597d\u610f\u601d\uff0c\u7cfb\u7edf\u51fa\u4e86\u70b9\u5c0f\u7455\u75b5\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5^_^"),
                    showErrorForFK(i)
                }
                modalAuth.hide(),
                modalAuth.hideError(),
                modalAuth.hideLoading()
            }
        },
        error: function() {
            submitButton.enable()
        }
    })
}
function showErrorForFK(a) {
    fkAuthModal.hideLoading(),
    $("#messageError_fk").html(a),
    fkAuthModal.showError(),
    showErrorMsg(a),
    submitButton.enable()
}
function buildVirtualPayList(resultData, quickPayInfo) {
    var html_ = "";
    if (null != resultData && "" != resultData) {
        var payResList = resultData.virtualPayResList
          , resList = eval("(" + payResList + ")")
          , remainAmount = resultData.remainAmount
          , cardPayType = resultData.cardPayType
          , cardPayAmount = resultData.cardPayAmount;
        if (null != resList && "" != resList && resList.length > 0)
            for (var i = 0; i < resList.length; i++)
                html_ += "<li>",
                html_ += '<span class="p-name">',
                "jingbean" == resList[i].virtualPayType ? html_ += "\u4eac\u8c46\u652f\u4ed8" : "balance_cashier" == resList[i].virtualPayType ? html_ += "\u4f59\u989d\u652f\u4ed8" : "blank_note" == resList[i].virtualPayType ? html_ += "\u767d\u6761\u652f\u4ed8" : "jr_jrb" == resList[i].virtualPayType ? html_ += "\u4eac\u4e1c\u5c0f\u91d1\u5e93\u652f\u4ed8" : "GANGBENG" == resList[i].virtualPayType ? html_ += "\u94a2\u955a\u652f\u4ed8" : "bankCardPay" == resList[i].virtualPayType && (html_ += "\u94f6\u884c\u5361\u652f\u4ed8"),
                html_ += "</span>",
                html_ += "jingbean" == resList[i].virtualPayType ? '<span class="p-money">\u652f\u4ed8 <span>' + resList[i].payAmount / 100 + "</span> \u5143</span>" : '<span class="p-money">\u652f\u4ed8 <span>' + resList[i].payAmount + "</span> \u5143</span>",
                resList[i].isSuccess && 0 == resList[i].isRepeatSubmit ? html_ += '<span class="p-flag p-success">\u652f\u4ed8\u6210\u529f</span>' : (html_ += '<span class="p-flag p-failure">',
                html_ += null != resList[i].info && "" != resList[i].info ? resList[i].info : "\u652f\u4ed8\u5931\u8d25",
                html_ += "</span>"),
                html_ += "</li>";
        html_ += '<span id="quickPayResultInfo">',
        html_ += "</span>"
    }
    if ($("#quickPayResultInfo"),
    "quick" == cardPayType || null != quickPayInfo) {
        var html_1 = "";
        html_1 += "<li>",
        html_1 += '<span class="p-name">',
        html_1 += "\u5feb\u6377\u652f\u4ed8",
        html_1 += "</span>",
        (null == cardPayAmount || "undefined" == cardPayAmount) && (cardPayAmount = $("#cardPayAmountStrong").html()),
        html_1 += '<span class="p-money">\u652f\u4ed8 <span>' + cardPayAmount + "</span> \u5143</span>";
        var str = "\u672a\u6267\u884c";
        null != quickPayInfo && "" != quickPayInfo && (str = quickPayInfo),
        html_1 += '<span class="p-flag p-failure">' + str + "</span>",
        html_1 += "</li>",
        $("#quickPayResultInfo").html(html_1)
    }
    null == quickPayInfo && ($("#remainAmountSpan").html(remainAmount),
    $("#virtualPayResultUl").html(html_))
}
function cardPay() {
    if (1 == globalVar.bankCardIsChecked) {
        if (1 == globalVar.quickPayIsChecked)
            return void quickConfirm.quickpayConfirm();
        if (0 == globalVar.quickPayIsChecked)
            return void normalBankPaymentConfirm()
    }
}
function toQuickPayForm() {
    $("#wangyinPaySuccess").hide(),
    $(".ui-modal-mask").remove();
    var a = $("input[name='bankCode']").val();
    bankCard.quickCardShow(),
    payBankcard.selectedQuickBank(a),
    $(".fast-bank").remove(),
    $(".main").removeClass("ui-modal-mask-blur")
}
function cashierSubmitSmsPay() {
    var a = $("#phoneVer_modalAuthInput").val();
    a.length >= 6 && (0 == globalVar.quickBoundPayFlag ? $("#ui-input-unboundPhoneVerifyCode").val(a) : $("#ui-input-boundPhoneVerifyCode").val(a),
    globalVar.canBeSubmit = !0,
    confirmSubmitPay(),
    modalAuth.hideError(),
    modalAuth.showLoading())
}
function combinSubmitPay() {
    modalAuth.resetInput(),
    validateSubmitPay();
    var a = $("input[name='phone']").val();
    $("#common_verificationModal").find(".common_m15_openBindPhone").html("\uff08\u5df2\u53d1\u9001\u81f3" + a + ")")
}
function quickGetPhontVerifyCode() {
    if (!$("#ui-button-gray-phoneVerifyCode").hasClass("disable"))
        if (modalAuth.hideError(),
        modalAuth.resetInput(),
        0 == globalVar.quickBoundPayFlag) {
            if (modalAuth.setCountdown())
                return void submitButton.enable();
            quickConfirm.unboundGetVerifyCode()
        } else {
            if (modalAuth.setCountdown())
                return void submitButton.enable();
            quickConfirm.boundGetVerifyCode()
        }
}
function fkReGetPhontVerifyCode() {
    if (!$("#ui-button-gray-phoneVerifyCode_fk").hasClass("disable")) {
        if (fkAuthModal.hideError(),
        fkAuthModal.resetInput(),
        fkAuthModal.setCountdown())
            return void submitButton.enable();
        fkGetPhontVerifyCode("2")
    }
}
function fkGetPhontVerifyCode(a) {
    function e(e) {
        if (1 == a)
            if (e.success)
                fkAuthModal.resetModal(),
                $("#m15_openBindPhone_fk").html("\uff08\u5df2\u53d1\u9001\u81f3" + e.result.phone + ")"),
                $("#messageError_fk").html(Constants.phoneSendSuccess),
                fkAuthModal.show(),
                fkAuthModal.showError();
            else {
                submitButton.enable();
                var i = e.resultCode
                  , n = "";
                n = "ECS0104" == i ? "\u8be5\u8ba2\u5355\u4e0d\u652f\u6301\u6253\u767d\u6761\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u3002" : "\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                $("#submitPayError").html(n)
            }
        else if (2 == a)
            if (e.success)
                fkAuthModal.resetInput(),
                $("#messageError_fk").html(Constants.phoneSendSuccess),
                fkAuthModal.show(),
                fkAuthModal.showError();
            else {
                var i = e.resultCode
                  , n = "";
                "1231" == i || (n = "\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"),
                $("#messageError_fk").html(n),
                fkAuthModal.hideLoading(),
                fkAuthModal.showError(),
                submitButton.enable()
            }
    }
    var i = {
        amount: $("#baiTiaoCanPay").val(),
        orderId: $("#orderIdHide").val()
    }
      , n = "/sendMsg.action";
    $.post(n, i, e, "json")
}
function uniformfkReGetPhontVerifyCode() {
    if (!$("#ui-button-gray-phoneVerifyCode_fk").hasClass("disable")) {
        if (fkAuthModal.hideError(),
        fkAuthModal.resetInput(),
        fkAuthModal.setCountdown())
            return void submitButton.enable();
        uniformFkGetPhontVerifyCode("2", $("#codedPhoneNum").val(), $("#riskPaySession").val())
    }
}
function uniformFkGetPhontVerifyCode(a, e, i) {
    function n(i) {
        if (1 == a)
            if (i.success)
                fkAuthModal.resetModal(),
                $("#m15_openBindPhone_fk").html("\uff08\u5df2\u53d1\u9001\u81f3\u5c3e\u53f7:" + e + "\u7684\u624b\u673a)"),
                $("#messageError_fk").html(Constants.phoneSendSuccess),
                fkAuthModal.show(),
                fkAuthModal.showError();
            else {
                submitButton.enable();
                var n = i.resultCode
                  , o = "";
                o = "SMS20001" == n ? "\u77ed\u4fe1\u53d1\u9001\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01" : "\u77ed\u4fe1\u53d1\u9001\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                $("#submitPayError").html(o)
            }
        else if (2 == a)
            if (i.success)
                fkAuthModal.resetInput(),
                $("#messageError_fk").html(Constants.phoneSendSuccess),
                fkAuthModal.show(),
                fkAuthModal.showError();
            else {
                var n = i.resultCode
                  , o = "";
                o = "SMS20001" == n ? "\u77ed\u4fe1\u53d1\u9001\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01" : "\u77ed\u4fe1\u53d1\u9001\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                $("#messageError_fk").html(o),
                fkAuthModal.hideLoading(),
                fkAuthModal.showError(),
                submitButton.enable()
            }
    }
    $("#riskPaySession").val(i),
    $("#codedPhoneNum").val(e);
    var o = {
        riskPaySession: i,
        codedPhoneNum: e
    }
      , t = "/uniformSendMsg.action";
    $.post(t, o, n, "json")
}
function validateSubmitPay() {
    function a(a) {
        null != a ? "0" == a.state ? (globalVar.payPwd.validatedEncode = a.validatedEncode,
        1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked && 0 == globalVar.isSignPay ? (submitButton.disable(),
        0 == globalVar.quickBoundPayFlag ? quickConfirm.unboundGetVerifyCode() : quickConfirm.boundGetVerifyCode()) : virtualPay()) : "1" == a.state ? (submitButton.enable(),
        $("#showErrMsgSpan").html("\u652f\u4ed8\u5bc6\u7801\u9519\u8bef\u3002")) : "2" == a.state ? (submitButton.enable(),
        $("#showErrMsgSpan").html("\u652f\u4ed8\u5bc6\u7801\u88ab\u9501\u5b9a\u3002")) : "3" == a.state ? (submitButton.enable(),
        $("#showErrMsgSpan").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^")) : "5" == a.state ? (submitButton.enable(),
        $("#showErrMsgSpan").html("\u60a8\u7684\u8d26\u6237\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u9690\u60a3\uff0c\u8bf7\u60a8\u5148\u53bb<a href='https://authpay.jd.com/account/home.action' class='ml10' target='_blank'>\u4fee\u6539\u652f\u4ed8\u5bc6\u7801</a>")) : "-10" == a.state && (globalVar.payPwd.isHaveValidPayPwd = !1,
        submitButton.enable(),
        $("#pv-line-haveValidated").hide(),
        $("#pv-line-password").show(),
        $("#showErrMsgSpan").html("\u60a8\u7684\u652f\u4ed8\u5bc6\u7801\u5df2\u7ecf\u8d85\u8fc7\u652f\u4ed8\u65f6\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u652f\u4ed8\u5bc6\u7801\u3002")) : (submitButton.enable(),
        $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^"))
    }
    try {
        if (1 == globalVar.canBeSubmit) {
            var e = isCheckedVirtualPay();
            if (1 == globalVar.bankCardIsChecked && (1 == globalVar.quickPayIsChecked ? (0 == globalVar.isSignPay && $("#cardPayType").val("quick"),
            $("#cardPayAmountHide").val($("#cardPayAmountStrong").html())) : 0 == globalVar.quickPayIsChecked && ($("#cardPayType").val("normal"),
            $("#cardPayAmountHide").val($("#cardPayAmountStrong").html()))),
            submitButton.disable(),
            1 == e || 1 == globalVar.isSignPay) {
                if ("checked" == $("#virtualPayBlankNote").attr("checked") && ("" == $("#fenQiPlanHidden").val() || "0" == $("#fenQiPlanHidden").val()))
                    return $("#showErrMsgSpan").html("\u7531\u4e8e\u7f51\u7edc\u95ee\u9898\u60a8\u597d\u50cf\u6ca1\u6709\u9009\u62e9\u6b63\u786e\u7684\u767d\u6761\u5206\u671f\u54df^_^\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u65b0\u9009\u62e9\uff01"),
                    void submitButton.enable();
                if (0 == globalVar.payPwd.isHaveValidPayPwd && "" == $("#payPwd").val())
                    $("#showErrMsgSpan").html("\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801"),
                    submitButton.enable();
                else {
                    if (1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked && 1 == globalVar.quickBoundPayFlag && 1 == globalVar.isSignPay && !quickValidate.boundGetVerifyCodeValidate())
                        return void submitButton.enable();
                    var i = globalVar.contextPath + "/lazy/checkPassword.action"
                      , n = $("#payPwd").val()
                      , o = $("#orderId").val()
                      , t = {
                        pwd: n,
                        orderId: o,
                        haveValidated: 1 == globalVar.payPwd.isHaveValidPayPwd ? "1" : !1
                    };
                    $.post(i, t, a, "json")
                }
            } else
                1 == globalVar.bankCardIsChecked && (1 == globalVar.quickPayIsChecked ? (submitButton.disable(),
                0 == globalVar.quickBoundPayFlag ? quickConfirm.unboundGetVerifyCode() : quickConfirm.boundGetVerifyCode()) : cardPay())
        }
    } catch (r) {
        $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^"),
        $("#submitPayError").fadeOut(5e3, function() {
            $("#submitPayError").html(""),
            $("#submitPayError").show("")
        });
        var l = $("#paySign").val()
          , t = {
            quickType: "\u7acb\u5373\u652f\u4ed8",
            paySign: l,
            exception: r.name + ":" + r.message
        }
          , i = "/quick/jsErrorCatch.action";
        $.post(i, t, "json")
    }
}
function submitRiskInfo(a, e, i) {
    try {
        $.ajax({
            type: "post",
            url: "/riskInfo.action",
            data: {
                orderId: a,
                deviceId: e,
                fingerprint: i
            },
            timeout: 5e3,
            success: function() {},
            error: function() {}
        })
    } catch (n) {}
}
function quickCheckedVirtual() {
    var a = !1;
    return $("input[name=virtualPayType]").each(function() {
        "checked" == $(this).attr("checked") && (a = !0)
    }),
    a
}
function quickPayManJian() {
    globalVar.useZhiFuManJian = !1;
    var a = quickCheckedVirtual()
      , e = ""
      , i = ""
      , n = "";
    if (a)
        $("#cardPayDisAmountText").html(""),
        $("#cardPayDisAmountText").hide(),
        0 == globalVar.bankCardIsChecked && $("#pay_manjian").hide();
    else if (1 == globalVar.bankCardIsChecked) {
        if (1 == globalVar.quickPayIsChecked)
            if (1 == globalVar.quickBoundPayFlag ? (e = $("#ub-item-firstBank").children("input[name='payCard-shouldAmount']").attr("value"),
            i = $("#ub-item-firstBank").children("input[name='payCard-realAmount']").attr("value"),
            n = $("#ub-item-firstBank").children("input[name='payCard-discountAmount']").attr("value")) : (e = $("#newCard-shouldAmount").val(),
            i = $("#newCard-realAmount").val(),
            n = $("#newCard-discountAmount").val()),
            1 == globalVar.clickAddNewCard) {
                var o = $("#remainShouldPayAmount").val();
                null != o && ($("#cardPayAmountStrong").text(Number(o).toFixed(2)),
                $("#cardCanPay").val(Number(o).toFixed(2)),
                $("#cardWillPay").val(Number(o).toFixed(2))),
                $("#cardPayDisAmountText").html(""),
                $("#cardPayDisAmountText").hide(),
                $("#cardDiscountAmount").val(""),
                1 == globalVar.quickBoundPayFlag ? $("#pay_manjian").show() : $("#pay_manjian").hide()
            } else if ("" != e && "" != i && "" != n && "0.00" != n && "0.00" != i && "0.00" != e)
                $("#cardPayDisAmountText").html("\u5df2\u51cf" + n + "\u5143"),
                $("#cardPayDisAmountText").show(),
                $("#cardPayAmountStrong").text(Number(i).toFixed(2)),
                $("#cardWillPay").val(Number(i).toFixed(2)),
                $("#cardDiscountAmount").val(n),
                $("#cardCanPay").val(e),
                globalVar.useZhiFuManJian = !0;
            else {
                var o = $("#remainShouldPayAmount").val();
                null != o && ($("#cardPayAmountStrong").text(Number(o).toFixed(2)),
                $("#cardCanPay").val(Number(o).toFixed(2)),
                $("#cardWillPay").val(Number(o).toFixed(2))),
                $("#cardPayDisAmountText").html(""),
                $("#cardPayDisAmountText").hide(),
                $("#cardDiscountAmount").val(""),
                1 == globalVar.quickBoundPayFlag ? $("#pay_manjian").show() : $("#pay_manjian").hide()
            }
    } else
        $("#pay_manjian").hide()
}
function initGlobalPayOrderInfo() {
    if ("false" != globalVar.globalPay) {
        var a = globalVar.decryptPaysession;
        ("" == a || null == a) && (a = $("#decryptPaysession").val());
        var e = "getGlobalRateInfo.action";
        $.ajax({
            type: "post",
            url: e,
            data: {
                paySessionInfo: a
            },
            timeout: 1e4,
            success: function(a) {
                "" != a && $("#globalRateInfo").html(a)
            },
            error: function() {}
        })
    }
}
function submitGlobalUserInfo() {
    var a = $("#globalUserName").val()
      , e = $("#globalUserNo").val()
      , i = $("#globalUserPhone").val();
    return i = void 0 == i ? "" : i,
    quickPayValidate.holderNameRule.test(a) ? "" == e ? void $("#globalUserNoError").css("display", "inline-block") : "" == i || quickPayValidate.phoneRule.test(i) ? void $.ajax({
        url: "submitGlobalUserInfo.action",
        data: {
            globalUserName: a,
            globalUserNo: e,
            globalUserPhone: i
        },
        type: "POST",
        dataType: "json",
        timeout: 1e4,
        success: function(a) {
            return "" == a || void 0 == a || void 0 == a.isSuccess || "false" == a.isSuccess ? void $("#globalRealNameErrorInfo").html(a.desc) : void window.location.reload()
        },
        error: function() {
            $("#globalRealNameErrorInfo").html("\u5168\u7403\u8d2d\u5b9e\u540d\u4fe1\u606f\u7533\u62a5\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5~")
        }
    }) : void $("#globalUserPhoneError").css("display", "inline-block") : void $("#globalUserNameError").css("display", "inline-block")
}
function passwordKeyDown(a) {
    a = a ? a : window.event ? window.event : "";
    var e = a.keyCode ? a.keyCode : a.which;
    13 == e && paymentCommon.payCommonPortal()
}
var payOrder = {
    toggleDetail: function(ele, orderId) {
        var $orderList = $(".j_orderList");
        $(ele).hasClass("opened") ? ($orderList.slideUp(300),
        $(ele).removeClass("opened").html("\u8ba2\u5355\u8be6\u60c5<i></i>")) : $.ajax({
            url: "payOrderInfo.action?orderId=" + orderId,
            type: "get",
            dataType: "html",
            error: function() {
                $("#listPayOrderInfo").html("")
            },
            success: function(data) {
                if (null != data && "" != data) {
                    var obj = eval("(" + data + ")")
                      , orderAdress = obj.orderAdress
                      , wareName = obj.wareName
                      , receiver = obj.receiver
                      , mobile = obj.mobile;
                    if ("undefined" != orderAdress && void 0 != orderAdress && "null" != orderAdress && null != orderAdress && $("#shdz").text("\u6536\u8d27\u5730\u5740\uff1a" + orderAdress),
                    "undefined" != wareName && void 0 != wareName && "null" != wareName && null != wareName)
                        if (wareName.length > 80) {
                            var subWareName = wareName.substring(0, 80) + "...";
                            $("#spmc").text("\u5546\u54c1\u540d\u79f0\uff1a" + subWareName)
                        } else
                            $("#spmc").text("\u5546\u54c1\u540d\u79f0\uff1a" + wareName);
                    "undefined" != receiver && void 0 != receiver && "null" != receiver && null != receiver && $("#shr").text("\u6536\u8d27\u4eba\uff1a" + receiver),
                    "undefined" != mobile && void 0 != mobile && "null" != mobile && null != mobile && $("#mobile").text(mobile),
                    $orderList.slideDown(300),
                    $(ele).addClass("opened").html("\u6536\u8d77\u8be6\u60c5<i></i>")
                }
            }
        })
    }
}
  , bankCard = {
    quickCardShow: function() {
        var a = $("#noQuickPay").val();
        if ("1" != a) {
            if (globalVar.quickPayIsChecked = !0,
            $("#quickPayCardMenuLi").hasClass("curr"))
                return;
            exchangeOtherBankPay(2),
            $("#normalPayCardDiv").hide(),
            $("#quickPayCardDiv").show(),
            $("#normalPayCardMenuLi").removeClass("curr"),
            $("#quickPayCardMenuLi").addClass("curr"),
            $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8"),
            $("#submitPayError").html("\u8bf7\u9009\u62e9\u94f6\u884c\u652f\u4ed8")
        }
    },
    normalPayCardShow: function() {
        var a = $("#noQuickPay").val();
        "1" != a && $("#normalPayCardMenuLi").hasClass("curr") || (payBankcard.quickToOther(),
        $("#normalPayCardDiv").show(),
        $("#quickPayCardDiv").hide(),
        $("#quickPayCardMenuLi").removeClass("curr"),
        $("#normalPayCardMenuLi").addClass("curr"),
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8"),
        $("#submitPayError").html("\u8bf7\u9009\u62e9\u94f6\u884c\u652f\u4ed8"),
        globalVar.canBeSubmit = !1,
        globalVar.quickPayIsChecked = !1)
    },
    normalPayCardHide: function() {
        $("#normalPayCardDiv").hide()
    },
    normalPayCardSelected: function() {},
    bankListHide: function() {
        $("#ui-checkbox-L-payCard").find("em").removeClass("selected"),
        $("#payCardBoxDiv").removeClass("paybox-selected"),
        $("#payCardCheckBoxHidden").val("false"),
        1 == globalVar.quickBoundUserFlag && ($("#pv-line-cvv2").hide(),
        $("#pv-input-cvv2").val(""),
        $("#pay-verify-typeCredit").removeClass("type-credit"),
        $("#boundPhoneVerifyCode").val(""),
        $(".j_returnBankUsed").hide(),
        $(".j_bankUsed").show()),
        $(".j_bankArea").slideUp(300),
        globalVar.bankCardIsChecked = !1,
        $("#cardPayMethod").val("")
    },
    checked: function(a) {
        if (null != a && (globalVar.bankCardIsChecked = a),
        1 == globalVar.bankCardIsChecked)
            this.bankListHide(),
            globalVar.bankCardIsChecked = !1,
            globalVar.clickAddNewCard = !1,
            $("#cardPayMethod").val("");
        else {
            $("#ui-checkbox-L-payCard").find("em").addClass("selected"),
            $("#payCardBoxDiv").addClass("paybox-selected"),
            $("#payCardCheckBoxHidden").val("true"),
            globalVar.bankCardIsChecked = !0;
            var e = $("input[name='payCard-cardType']").val();
            if (e) {
                if (2 == e) {
                    var i = ($("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase(),
                    $("input[name='payCard-isVaildCVV2']").val());
                    "false" != i ? ($("#pv-input-cvv2").val(""),
                    $("#pv-line-cvv2").show(),
                    $("#pay-verify-typeCredit").addClass("type-credit"),
                    globalVar.isVaildCVV2 = !0) : ($("#pay-verify-typeCredit").removeClass("type-credit"),
                    globalVar.isVaildCVV2 = !1)
                }
                globalVar.quickBoundPayFlag = !0
            }
        }
        ("" == $("#remainShouldPayAmount").val() || "0" == $("#remainShouldPayAmount").val() || "0.00" == $("#remainShouldPayAmount").val()) && (clearCheckBox("bankCard"),
        isOpenPayPwd()),
        showTip.remainTip(),
        null == a && (checkUsedCardVaild(),
        checkSignState(),
        showManJianHuodong())
    }
}
  , reckonVirtual = {
    backBalanceTobaiTiao: function(a) {
        if ("checked" == $("#virtualPayBlankNote").attr("checked") && "" != a) {
            a = Number(a);
            var e = Number($("#baiTiaoBalanceHide").val())
              , i = Number($("#baiTiaoCanPay").val());
            if (e != i) {
                var n = i + a;
                if (e > n)
                    i = n,
                    $("#remainShouldPayAmount").val("0"),
                    $("#remainShouldPayAmountSpan").html("0");
                else {
                    i = e;
                    var o = n - e;
                    $("#remainShouldPayAmount").val(o),
                    $("#remainShouldPayAmountSpan").html(o)
                }
                $("#baiTiaoCanPay").val(i.toFixed(2)),
                $("#baiTiaoCanPayText").html(i.toFixed(2)),
                baiTiao.fenQi.reckonFee()
            }
            baiTiao.fenQi.reloadReckonFenQiPay(!0),
            baiTiao.baiTiaoManjianChecked($("#fenQiPlanHidden").val()),
            fenQiShu = baiTiaoInstallmentLimited($("#baiTiaoCanPay").val(), $("#fenQiPlanHidden").val()),
            $("#fenQiPlanHidden").val(fenQiShu)
        }
    },
    subtractRemain: function(a) {
        var e = a.split(",");
        for (i = 0; i < e.length; i++) {
            if ("blank_note" == e[i] && "" == $("#baiTiaoCanPay").val()) {
                var n = Number($("#baiTiaoBalanceHide").val())
                  , o = getCanPay(n);
                o = o.toFixed(2),
                $("#baiTiaoCanPayText").html(o),
                $("#baiTiaoCanPay").val(o)
            }
            if ("jr_jrb" == e[i] && "" == $("#jrbCanPay").val()) {
                var t = Number($("#jrbBalanceHide").val())
                  , r = "";
                r = getCanPay(t),
                $("#xjkCanPayStrong").html(r.toFixed(2)),
                $("#jrbCanPay").val(r.toFixed(2))
            }
            if ("balance_com" == e[i]) {
                var l = $("#yueCanPay").val();
                if ("" == l || "0" == l || "0.00" == l) {
                    var s = Number($("#yueBalanceHide").val())
                      , d = getCanPay(s);
                    $("#yueCanPayStrong").html(d.toFixed(2)),
                    $("#yueCanPay").val(d.toFixed(2));
                    var u = Number($("#virtualPayCountStrong").text());
                    u = d + u,
                    $("#virtualPayCountStrong").html(u.toFixed(2))
                }
            }
            if ("gangbeng" == e[i]) {
                var c = $("#gangbengCanPay").val();
                if ("" == c || "0" == c || "0.00" == c) {
                    var h = Number($("#coinsBalanceHide").val())
                      , m = getCanPay(h);
                    $("#coinsCanPayStrong").html(m.toFixed(2)),
                    $("#gangbengCanPay").val(m.toFixed(2));
                    var u = Number($("#virtualPayCountStrong").text());
                    u = m + u,
                    $("#virtualPayCountStrong").html(u.toFixed(2))
                }
            }
            if ("wyQianBao" == e[i]) {
                var y = $("#wyQianBaoCanPay").val();
                if ("" == y || "0" == y || "0.00" == y) {
                    var v = Number($("#wyQianBaoBalanceHide").val())
                      , b = getCanPay(v);
                    $("#wyQianBaoCanPayStrong").html(b.toFixed(2)),
                    $("#wyQianBaoCanPay").val(b.toFixed(2));
                    var u = Number($("#virtualPayCountStrong").text());
                    u = b + u,
                    $("#virtualPayCountStrong").html(u.toFixed(2))
                }
            }
            if ("jingbean" == e[i]) {
                var f = $("#jingBeanCanPay").val();
                if ("" == f || "0" == f || "0.00" == f) {
                    var p = Number($("#orderShouldPayHide").val())
                      , P = Number(jbToRmb($("#jingbeanBalanceHide").val()))
                      , C = p / 2;
                    P > C && (P = C),
                    P = 10 * parseInt(P / 10);
                    var k = getCanPay(P);
                    0 >= k && ($("#jingBeanCheckBoxLi").find("em").removeClass("selected"),
                    $("#jingbeanCheckDiv").addClass("ui-checkbox-wrap ui-check-disable"),
                    jingBean.checked(!0)),
                    $("#jingBeanCanPayStrong").html(k.toFixed(2)),
                    $("#jingBeanCanPaySpan").html(rmbToJb(k)),
                    $("#jingBeanCanPay").val(k);
                    var u = Number($("#virtualPayCountStrong").text());
                    u = k + u,
                    $("#virtualPayCountStrong").html(u.toFixed(2))
                }
            }
        }
    },
    backRemain: function(a) {
        var e = a.split(",");
        for (i = 0; i < e.length; i++) {
            if ("blank_note" == e[i]) {
                var n = $("#baiTiaoCanPay").val();
                "" != n && (getCanBackMoney(n),
                $("#baiTiaoCanPay").val(""))
            }
            if ("jr_jrb" == e[i]) {
                var o = $("#jrbCanPay").val();
                "" != o && (getCanBackMoney(o),
                $("#jrbCanPay").val(""))
            }
            if ("balance_com" == e[i]) {
                var t = $("#yueCanPay").val();
                "" != t && (getCanBackMoney(t),
                subOtherPay(t),
                $("#yueCanPay").val(""))
            }
            if ("gangbeng" == e[i]) {
                var r = $("#gangbengCanPay").val();
                "" != r && (getCanBackMoney(r),
                subOtherPay(r),
                $("#gangbengCanPay").val(""))
            }
            if ("wyQianBao" == e[i]) {
                var l = $("#wyQianBaoCanPay").val();
                "" != l && (getCanBackMoney(l),
                subOtherPay(l),
                $("#wyQianBaoCanPay").val(""))
            }
            if ("jingbean" == e[i]) {
                var s = $("#jingBeanCanPay").val();
                "" != s && (getCanBackMoney(s),
                subOtherPay(s),
                $("#jingBeanCanPay").val(""))
            }
        }
    },
    virtualCanPay: function(a) {
        var e = this;
        $("input[name=virtualPayType]").each(function() {
            if ("checked" == $(this).attr("checked")) {
                var i = Number($("#remainShouldPayAmount").val());
                a == $(this).val() && ("0" == i || "0.00" == i) && clearCheckBox(a),
                e.subtractRemain($(this).val())
            } else
                e.backRemain($(this).val())
        }),
        showTip.quickPayCodeTip(),
        showTip.remainTip(),
        isOpenPayPwd()
    }
}
  , showTip = {
    quickPayCodeTip: function() {
        1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked && null != $("#quickpayToken").val() && "" != $("#quickpayToken").val() && ($("#submitPayError").html("\u94f6\u884c\u5361\u652f\u4ed8\u91d1\u989d\u8c03\u6574\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6\u624b\u673a\u9a8c\u8bc1\u7801"),
        $("#quickpayToken").val(""))
    },
    userErrTip: function(a, e) {
        null == e || "yes" == e ? $("#userTipSpanDiv").show() : $("#userTipSpanDiv").hide(),
        $("#userTipSpan").html(a)
    },
    remainTip: function() {
        var a = $("#remainShouldPayAmount").val();
        null != a && ($("#cardPayAmountStrong").text(Number(a).toFixed(2)),
        $("#cardWillPay").val(Number(a).toFixed(2)),
        $("#cardCanPay").val(Number(a).toFixed(2)),
        $("#cardDiscountAmount").val(0)),
        "0" == $("#remainShouldPayAmount").val() || "0.00" == $("#remainShouldPayAmount").val() ? (this.hide(),
        bankCard.bankListHide()) : 0 == globalVar.bankCardIsChecked ? ($("#remainShouldPayMsgDiv").show(),
        $("#paySubmit").addClass("disable"),
        globalVar.canBeSubmit = !1) : ($("#remainShouldPayMsgDiv").hide(),
        1 == globalVar.quickBoundUserFlag ? ($("#paySubmit").removeClass("disable"),
        globalVar.canBeSubmit = !0) : ($("#paySubmit").addClass("disable"),
        globalVar.canBeSubmit = !1),
        quickPayManJian());
        var e = $(".paybox.j_paybox.paybox-selected");
        void 0 != e && e.length > 1 ? $("#notSupportCombineCouponTipDiv").show() : $("#notSupportCombineCouponTipDiv").hide()
    },
    show: function() {
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8").addClass("disable"),
        $("#submitPayError").html("\u8bf7\u9009\u62e9\u94f6\u884c\u652f\u4ed8"),
        globalVar.canBeSubmit = !1
    },
    hide: function() {
        $("#remainShouldPayMsgDiv").hide(),
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8").removeClass("disable"),
        $("#submitPayError").html(""),
        globalVar.canBeSubmit = !0
    },
    submitHide: function() {
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8").addClass("disable"),
        $("#submitPayError").html("\u8be5\u94f6\u884c\u901a\u9053\u6682\u65f6\u4e0d\u80fd\u652f\u4ed8\uff0c\u8bf7\u5c1d\u8bd5\u4f7f\u7528\u5176\u4ed6\u94f6\u884c\u5361\u5b8c\u6210\u652f\u4ed8\u3002"),
        $("#font-red-cvv2-bound").html(""),
        globalVar.canBeSubmit = !1
    },
    submitShow: function() {
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8").removeClass("disable"),
        $("#submitPayError").html(""),
        $("#errorReBind").html(""),
        globalVar.canBeSubmit = !0
    }
}
  , wangyin = {
    success: function() {
        paymentUI.showModal("#wangyinPaySuccess", function() {
            var a = $("input[name='bankCode']").val()
              , e = $("input[name='commonBankType']").val()
              , i = $("#quickDebit_" + a).val()
              , n = $("#quickCredit_" + a).val();
            if ("1" == e)
                if ("undefined" == typeof i || "" == i)
                    $("#quickBankPaySpan").hide(),
                    $("#options").hide();
                else {
                    var o = $("#success-" + a.toLowerCase()).val();
                    "undefined" == o || "" == o ? ($("#quickBankPaySpan").hide(),
                    $("#options").hide()) : ($("#quickBankPaySpan").text(o + "\u5feb\u6377\u652f\u4ed8"),
                    $("#quickBankPaySpan").show(),
                    $("#options").show())
                }
            else if ("2" == e)
                if ("undefined" == typeof n || "" == n)
                    $("#quickBankPaySpan").hide(),
                    $("#options").hide();
                else {
                    var o = $("#success-" + a.toLowerCase()).val();
                    "undefined" == o || "" == o ? ($("#quickBankPaySpan").hide(),
                    $("#options").hide()) : ($("#quickBankPaySpan").text(o + "\u5feb\u6377\u652f\u4ed8"),
                    $("#quickBankPaySpan").show(),
                    $("#options").show())
                }
            else
                $("#quickBankPaySpan").hide(),
                $("#options").hide()
        })
    },
    error: function() {
        paymentUI.showModal("#wangyinPayError", function() {})
    }
}
  , submitButton = {
    disable: function() {
        globalVar.canBeSubmit = !1,
        $("#loadingDiv").show(),
        $("#pv-button-submitPay").hide(),
        $("#showErrMsgSpan").html("")
    },
    enable: function() {
        $("#loadingDiv").hide(),
        $("#pv-button-submitPay").show(),
        globalVar.canBeSubmit = !0,
        $("#cardPayType").val("")
    }
};
$(function() {
    if ($(".j_orderTime").length > 0) {
        var a = 60 * $(".j_orderTime").attr("data-time");
        paymentUI.setOrderCountdown(".j_orderTime", a, function() {})
    }
    paymentUI.setPaidPop(function(a) {
        var e = a.find(".ui-pop-content")
          , i = $(".j_uiPaidPop").attr("data-content");
        if ("undefined" == typeof i) {
            if ("undefined" != e && void 0 != e && null != e) {
                var n = $("input[name='orderId']").val()
                  , o = "halfPayList.action?orderId=" + n;
                $.ajax({
                    type: "GET",
                    url: o,
                    dataType: "html",
                    cache: !1,
                    success: function(a) {
                        null != a && "" != a && (e.removeClass("loading"),
                        e.html(a),
                        $(".j_uiPaidPop").attr("data-content", a))
                    },
                    error: function() {}
                })
            }
        } else
            e.removeClass("loading"),
            e.html(i)
    })
});
var modalAuth = {
    modalId: "#verificationModal",
    show: function() {
        var a = this;
        paymentUI.showModal(this.modalId, function() {
            a.setCountdown(".j_verificationCount"),
            $(a.modalId).find(".j_modalAuthInput").focus()
        }, function() {
            a.resetCountdown(),
            a.resetInput()
        })
    },
    hide: function() {
        paymentUI.hideModal(this.modalId),
        this.resetCountdown()
    },
    setCountdown: function() {
        var a = $("#ui-button-gray-phoneVerifyCode");
        return a.hasClass("disable") ? !0 : (a.html('<em class="j_authCountdown">60</em>' + Constants.phoneCodeSending),
        a.addClass("disable"),
        paymentUI.setAuthCountdown(".j_authCountdown", 60, function() {
            a.html(Constants.phoneCodeResend),
            a.removeClass("disable")
        }),
        !1)
    },
    resetCountdown: function() {
        $(".j_verificationCount").html(Constants.phoneCodeResend),
        $(".j_verificationCount").removeClass("disable")
    },
    showError: function() {
        $(this.modalId).find(".vc-n-error").show(),
        $("#clearMessage").show()
    },
    hideError: function() {
        $(this.modalId).find(".vc-n-error").hide(),
        $("#clearMessage").hide()
    },
    showLoading: function() {
        $(this.modalId).find(".vc-number").addClass("vc-loading")
    },
    hideLoading: function() {
        $(this.modalId).find(".vc-number").removeClass("vc-loading")
    },
    resetInput: function() {
        $(this.modalId).find(".j_modalAuthInput").val("")
    }
};
$(function() {
    var a = "keyup"
      , e = navigator.userAgent.toLowerCase();
    /iphone|ipad|ipod/.test(e) && (a = "input propertychange"),
    $(".j_modalAuthInput").live(a, function() {
        $.trim($(this).val());
        37 != a.which && 39 != a.which && 67 != a.which && 17 != a.which && ($(this).val($(this).val().replace(/\D/g, "")),
        $(this).val() || $(this).val("")),
        cashierSubmitSmsPay()
    })
}),
$("#clearMessage").live("click", function() {
    modalAuth.resetInput()
}),
$("#phoneJ_modalClose").live("click", function() {
    $(".ui-modal-mask").remove(),
    $("#submitPayError").html(""),
    $("#errorReBind").hide();
    var a = $.trim($("#phoneVer_modalAuthInput").val());
    a.length < 6 && submitButton.enable()
}),
$("#messageClose").live("click", function() {
    $(".ui-modal-mask").remove(),
    $("#submitPayError").html(""),
    $("#errorReBind").hide();
    var a = $.trim($("#phoneVer_modalAuthInput").val());
    a.length < 6 && submitButton.enable()
});
var fkAuthModal = {
    modalId: "#MsgModal",
    show: function() {
        var a = this;
        paymentUI.showModal(this.modalId, function() {
            a.setCountdown("#ui-button-gray-phoneVerifyCode_fk"),
            $(a.modalId).find("#phoneVer_modalAuthInput_fk").focus()
        }, function() {
            a.resetCountdown(),
            a.resetInput()
        })
    },
    hide: function() {
        paymentUI.hideModal(this.modalId),
        this.resetCountdown()
    },
    setCountdown: function() {
        var a = $("#ui-button-gray-phoneVerifyCode_fk");
        return a.hasClass("disable") ? !0 : (a.html('<em class="j_authCountdown">60</em>' + Constants.phoneCodeSending),
        a.addClass("disable"),
        paymentUI.setAuthCountdown(".j_authCountdown", 60, function() {
            a.html(Constants.phoneCodeResend),
            a.removeClass("disable")
        }),
        !1)
    },
    resetCountdown: function() {
        $("#ui-button-gray-phoneVerifyCode_fk").html(Constants.phoneCodeResend),
        $("#ui-button-gray-phoneVerifyCode_fk").removeClass("disable")
    },
    showError: function() {
        $(this.modalId).find(".vc-n-error").show(),
        $("#clearMessage_fk").show()
    },
    hideError: function() {
        $(this.modalId).find(".vc-n-error").hide(),
        $("#clearMessage_fk").hide()
    },
    showLoading: function() {
        $(this.modalId).find(".vc-number").addClass("vc-loading")
    },
    hideLoading: function() {
        $(this.modalId).find(".vc-number").removeClass("vc-loading")
    },
    resetInput: function() {
        $(this.modalId).find("#phoneVer_modalAuthInput_fk").val("")
    },
    resetModal: function() {
        $("#m15_openBindPhone_fk").html(""),
        $("#messageError_fk").html(""),
        this.resetInput(),
        this.resetCountdown(),
        this.hideError(),
        this.hideLoading()
    }
};
$(function() {
    var a = "keyup"
      , e = navigator.userAgent.toLowerCase();
    /iphone|ipad|ipod/.test(e) && (a = "input propertychange"),
    $("#phoneVer_modalAuthInput_fk").live(a, function() {
        var e = $.trim($(this).val());
        37 != a.which && 39 != a.which && 67 != a.which && 17 != a.which && ($(this).val($(this).val().replace(/\D/g, "")),
        $(this).val() || $(this).val(""));
        var i = $("#phoneVer_modalAuthInput_fk").val();
        i.length >= 6 && ($("#verifCode").val(e),
        globalVar.canBeSubmit = !0,
        fkAuthModal.hideError(),
        fkAuthModal.showLoading(),
        virtualPay())
    })
}),
$("#clearMessage_fk").live("click", function() {
    fkAuthModal.resetInput()
}),
$("#phoneJ_modalClose_fk").live("click", function() {
    $(".ui-modal-mask").remove(),
    fkAuthModal.resetModal(),
    $("#submitPayError").html(""),
    $("#verifCode").val("");
    var a = $.trim($("#phoneVer_modalAuthInput_fk").val());
    a.length < 6 && submitButton.enable()
}),
$("#messageClose_fk").live("click", function() {
    $(".ui-modal-mask").remove(),
    fkAuthModal.resetModal(),
    $("#submitPayError").html(""),
    $("#verifCode").val("");
    var a = $.trim($("#phoneVer_modalAuthInput_fk").val());
    a.length < 6 && submitButton.enable()
});
/* @update: 2017-2-28 11:55:55 */
function fenQiDefaultSelected(a, i) {
    1 == i ? baiTiao.checked(!1, !1, "yes") : (baiTiao.checked(!1, !1, "no"),
    $("#noFenQiCheckBox").addClass("selected"),
    $("#fenQiPlanHidden").val(globalVar.defaultFenqiPlan),
    $("#fenQiFeeInfoDiv").hide())
}
function initBaiTiao() {
    "true" == $("#baiTiaoIsEnable").val() ? (payBaitiao.setBaitiaoSelect(),
    fenQiDefaultSelected(globalVar.defaultFenqiPlan, globalVar.fenQiIsChecked),
    isOpenPayPwd(),
    globalVar.cshstate = !0,
    baiTiao.checked(!1)) : baiTiao.checked(!0),
    fenQiShu = baiTiaoInstallmentLimited($("#baitiaoWillPay").val(), $("#fenQiPlanHidden").val()),
    $("#fenQiPlanHidden").val(fenQiShu)
}
function initBalance() {
    var url = "/quick/balanceQueryRequest.action"
      , paySign = $("#paySign").val();
    $.ajax({
        type: "post",
        url: url,
        data: {
            paySign: paySign
        },
        timeout: 5e3,
        success: function(result) {
            var isSuccess = "";
            try {
                result = eval("(" + result + ")"),
                isSuccess = result.result
            } catch (e) {}
            "false" == isSuccess ? $("#payBalancePayboxDiv").removeClass("paybox") : "" != result && ($("#payBalancePayboxDiv").html(result),
            $("#payBalancePayboxDiv").show())
        },
        error: function(a) {
            $("#payBalancePayboxDiv").removeClass("paybox")
        }
    })
}
function chenshuiyonghuFun(a, i, e) {
    1 == a && "" == i && "" == e && $("#shengshuiUserTips").html(" <span style='font-weight:900;color:#FF5D5B;font-size:18px;font-family: Microsoft Yahei;'>\u6253\u767d\u6761 \u8fd4<span style=';font-size:24px'>5</span>\u5143</span>\uff08\u79fb\u52a8\u7aef\u4eac\u5238,30\u65e5\u5185\u5230\u8d26\uff09")
}
function baiTiaoInstallmentLimited(a, i) {
    var e = Number(a);
    return 10 > e ? ($("[id^='fenQi']").removeClass("selected"),
    $("[id^='fenQi']").addClass("disable"),
    $("#noFenQiCheckBox").addClass("selected"),
    $("#fenQiPlanHidden").val("1"),
    $("#fenQiFeeInfoDiv").hide(),
    1) : ($("[id^='fenQi']").removeClass("disable"),
    i)
}
function getParamByKey(a, i) {
    var e = new RegExp("(^|&)" + i + "=([^&]*)(&|$)")
      , o = a.match(e);
    return null != o ? decodeURI(o[2]) : null
}
function baitiaoBridge(a) {
    try {
        globalVar.openCouponDialog = !0;
        {
            var i = getParamByKey(a, "couponInfo")
              , e = (getParamByKey(a, "discountAmount"),
            getParamByKey(a, "couponCode"))
              , o = getParamByKey(a, "couponType")
              , n = getParamByKey(a, "activityCode")
              , l = getParamByKey(a, "activityType")
              , t = $("#fenQiPlanHidden").val()
              , u = getParamByKey(a, "plans");
            getParamByKey(a, "cancle")
        }
        (null == e || "" == e) && (u = getALlPlans()),
        paymentUI.hideModal("#baitiaoCouponModal"),
        $("#baitiaoCouponIframe").attr("src", "");
        var s = $("#baiTiaoBalanceHide").val()
          , v = $("#baiTiaoCanPay").val()
          , b = null;
        Number(v) > Number(s) && (b = Number(s)),
        reloadCouponList(v, l, n, e, o, i, t, u)
    } catch (d) {
        setNullCoupon(),
        $("#submitPayError").html("\u7531\u4e8e\u60a8\u6ca1\u6709\u9009\u62e9\u6b63\u786e\u7684\u5206\u671f\u6216\u8005\u4f18\u60e0\u5238\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5!"),
        $("#submitPayError").fadeOut(5e3, function() {
            $("#submitPayError").html("").show()
        });
        var r = $("#paySign").val()
          , a = {
            quickType: "\u767d\u6761\u9009\u5206\u671f\u6216\u8005\u9009\u4f18\u60e0\u5238\u51fa\u9519",
            paySign: r,
            baiTiaoFenQiShu: fenQiShu,
            exception: "\u767d\u6761\u4f18\u60e0\u5238," + d.name + ":" + d.message
        }
          , c = "/quick/jsErrorCatch.action";
        $.post(c, a, "json")
    }
}
function setNullCoupon() {
    $("#fenQiPlanHidden").val();
    $("#shengshuiUserTips").html("\u8bf7\u9009\u62e9\u4f18\u60e0"),
    paymentUI.hideModal("#baitiaoCouponModal"),
    $("#baiTiaoActivityCode").val(""),
    $("#baiTiaoCouponCode").val(""),
    $("#baiTiaoCouponType").val(""),
    $("#baiTiaoDiscountAmount").val(""),
    $("#baiTiaoCouponInfo").val(""),
    $("#baitiaoActivityType").val(""),
    $("#baitiaoPlans").val("");
    var a = $("#baiTiaoBalanceHide").val()
      , i = ($("#orderShouldPayHide").val(),
    $("#baiTiaoCanPay").val())
      , e = i;
    Number(i) > Number(a) && (e = Number(a)),
    $("#baiTiaoCanPay").val(e),
    $("#baiTiaoCanPayText").html(e),
    $("#baitiaoWillPay").val(e)
}
function showBaitiaoCouponList() {
    var a = $("#fenQiPlanHidden").val();
    (null == a || "" == a) && (a = "1");
    var i = $("#baiTiaoActivityCode").val()
      , e = $("#baiTiaoCouponCode").val()
      , o = $("#baiTiaoCouponType").val()
      , n = $("#baiTiaoCanPay").val()
      , l = "0"
      , t = Number($("#orderShouldPayHide").val())
      , n = Number($("#baiTiaoCanPay").val());
    t != n && (l = "1");
    var u = baitiaoCouponListURL + "?data=" + $("#baitiaoCouponIframe").attr("dataId") + "&plan=" + a + "&sourceCode=JDPC&total=" + n + "&activityCode=" + i + "&couponCode=" + e + "&couponType=" + o + "&combinePay=" + l;
    u += "true" == globalVar.globalPay ? "&origin=qqgcashier" : "&origin=cashier",
    $("#baitiaoCouponIframe").attr("src", u),
    paymentUI.showModal("#baitiaoCouponModal", function() {}, function() {
        $("#baitiaoCouponIframe").attr("src", "")
    })
}
function openCounponDialogHandle(a, i) {
    {
        var e = $("#baiTiaoCanPay").val()
          , o = $("#baitiaoWillPay").val();
        $("#shengshuiUserTips").html()
    }
    (null == o || "" == o) && (o = e),
    $("#fenQiPlanHidden").val(i),
    i = baiTiaoInstallmentLimited(o, i),
    $("#fenQiPlanHidden").val(i),
    1 == i && $("#span_em_fenqi").html("");
    var n = $(a).parents(".paybox");
    $(a).parents().find("li").removeClass("selected"),
    n.addClass("selected"),
    n.find(".j_paymentCheck").addClass("selected"),
    $(".j_baitiaoFenqiCheck").addClass("selected");
    {
        var l = !0
          , t = $("#baiTiaoBalanceHide").val();
        $("#orderShouldPayHide").val()
    }
    Number(e) > Number(t) && (e = Number(t));
    var u = $("#baiTiaoCouponInfo" + i).val();
    (null == u || "" == u) && (u = "\u8bf7\u9009\u62e9\u4f18\u60e0");
    var s = ($("#baiTiaoActivityCode" + i).val(),
    $("#baiTiaoCouponCode" + i).val())
      , v = $("#baiTiaoCouponType" + i).val()
      , b = $("#baitiaoActivityType" + i).val()
      , d = $("#fenQiFuWuFei" + i).val()
      , r = $("#feilvSpan" + i).val()
      , c = $("#baiTiaoDiscountAmount" + i).val();
    if ($("#shengshuiUserTips").html(u),
    $("#baiTiaoActivityCode").val($("#baiTiaoActivityCode" + i).val()),
    $("#baiTiaoCouponCode").val(s),
    $("#baiTiaoCouponType").val(v),
    $("#baiTiaoCouponInfo").val(u),
    $("#baitiaoActivityType").val(b),
    $("#fenQiFuWuFei").html(d),
    $("#feilvSpan").html(r),
    $("#baiTiaoDiscountAmount").val(c),
    o = Number(e) - Number($("#baiTiaoDiscountAmount" + i).val()),
    o = o.toFixed(2),
    $("#baiTiaoCanPayText").html(o),
    $("#baitiaoWillPay").val(o),
    "1" == i) {
        l = !1,
        $("#noFenQiCheckBox").addClass("selected"),
        $("#fenQiPlanHidden").val("1"),
        $("#fenQiFeeInfoDiv").hide(),
        $("#span_em_fenqi").html(""),
        $("#fenQiFeeInfoDiv").hide();
        var p = $("#baiTiaoActivityType1").val();
        "1" == p && ($("#shengshuiUserTips").html("\u8bf7\u9009\u62e9\u4f18\u60e0"),
        $("#baiTiaoCouponInfo1").val(""),
        $("#baiTiaoActivityCode1").val(""),
        $("#baiTiaoCouponCode1").val(""),
        $("#baiTiaoCouponCode").val(""),
        $("#baiTiaoCouponType1").val(""),
        $("#baiTiaoCouponType").val(""),
        $("#baiTiaoDiscountAmount").val(""),
        $("#baitiaoActivityType").val(""),
        $("#baitiaoPlans").val(""),
        $("#baiTiaoCouponInfo").val(""))
    } else
        globalVar.fenQiIsChecked = !0,
        $("#selectedFenQiB").html(i + "\u671f"),
        $("#span_em_fenqi").html("\u5206" + i + "\u671f"),
        $("#firstPayAmountSpan").html($("#firstPayAmountSpan" + i).val()),
        $("#feilvSpan").html($("#feilvSpan" + i).val()),
        $("#fenQiFuWuFei").html($("#fenQiFuWuFei" + i).val()),
        $("#fenQiFeeInfoDiv").show(),
        $("#noFenQiFeeInfoDiv").hide(),
        $("#fenQi" + i).addClass("selected")
}
function reloadCouponList(a, i, e, o, n, l, t, u) {
    var s = u
      , v = new Array;
    null != s && "" != s && "" != $.trim(s) && (s = s.replace("[", "").replace("]", ""),
    s = s.split(","),
    $.each(s, function(a, i) {
        v.push(Number($.trim(i)))
    })),
    $.ajax({
        url: "/calculateCoupons.action",
        data: {
            orderId: $("#orderId").val(),
            orderAmount: a,
            couponCode: null == o ? "" : o,
            activityCode: null == e ? "" : e,
            plans: u,
            globalPay: globalVar.globalPay
        },
        type: "POST",
        dataType: "json",
        timeout: 1e4,
        success: function(s) {
            if ("" == s || null == s || !s.isSuccess || null == s.calculateVos || s.calculateVos.length <= 0)
                return void setNullCoupon();
            $.each(s.calculateVos, function(a, t) {
                var u = "{'firstPay':'" + t.laterPay + "','fenQiFuWuFei':" + t.fee + ",'bankSavingFen':'0','rate':" + t.rate + ",'bankFee':'0'}";
                $("#fenQiInfoHide" + t.plan).val(u),
                $("#fenQiFuWuFei" + t.plan).val(t.planFee),
                $("#feilvSpan" + t.plan).val(t.rate + "%"),
                $("#fenqiindexhidden" + t.plan).val(t.plan),
                $("#baiTiaoDiscountAmount" + t.plan).val(t.discountAmount),
                $("#pl-i-fenqi" + t.plan).html(t.laterPay + "\u5143/\u671f"),
                $.isArray(v) && -1 != $.inArray(Number(t.plan), v) ? ($("#baiTiaoActivityType" + t.plan).val(i),
                $("#baiTiaoActivityCode" + t.plan).val(e),
                $("#baiTiaoCouponCode" + t.plan).val(o),
                $("#baiTiaoCouponType" + t.plan).val(n),
                $("#baiTiaoCouponInfo" + t.plan).val(l)) : ($("#baiTiaoActivityType" + t.plan).val(""),
                $("#baiTiaoActivityCode" + t.plan).val(""),
                $("#baiTiaoCouponCode" + t.plan).val(""),
                $("#baiTiaoCouponType" + t.plan).val(""),
                $("#baiTiaoCouponInfo" + t.plan).val(""))
            }),
            (null == l || "" == l) && (l = "\u8bf7\u9009\u62e9\u4f18\u60e0"),
            $("#shengshuiUserTips").html(l),
            $("#baiTiaoCanPay").val(Number(a).toFixed(2));
            var b = Number(a) - Number($("#baiTiaoDiscountAmount" + t).val());
            $("#baiTiaoCanPayText").html(b.toFixed(2)),
            $("#baitiaoWillPay").val(b.toFixed(2)),
            fenQiShu = baiTiaoInstallmentLimited($("#baitiaoWillPay").val(), t),
            $("#baiTiaoActivityCode").val(e),
            $("#baiTiaoCouponCode").val(o),
            $("#baiTiaoCouponType").val(n),
            $("#baiTiaoDiscountAmount").val($("#baiTiaoDiscountAmount" + t).val()),
            $("#baiTiaoCouponInfo").val(l),
            $("#baitiaoActivityType").val(i),
            $("#baitiaoPlans").val(u),
            $("#fenQiFuWuFei").html($("#fenQiFuWuFei" + t).val()),
            $("#feilvSpan").html($("#feilvSpan" + t).val())
        }
    })
}
function reloadCouponListTwo(a, i, e, o, n, l, t, u) {
    var s = u
      , v = new Array;
    null != s && "" != s && "" != $.trim(s) && (s = s.replace("[", "").replace("]", ""),
    s = s.split(","),
    $.each(s, function(a, i) {
        v.push(Number($.trim(i)))
    })),
    $.ajax({
        url: "/calculateCoupons.action",
        data: {
            orderId: $("#orderId").val(),
            orderAmount: a,
            couponCode: null == o ? "" : o,
            activityCode: null == e ? "" : e,
            plans: u
        },
        type: "POST",
        dataType: "json",
        timeout: 1e4,
        success: function(s) {
            if (null == s || !s.isSuccess || null == s.calculateVos || s.calculateVos.length <= 0)
                return void setNullCoupon();
            $.each(s.calculateVos, function(a, t) {
                var u = "{'firstPay':'" + t.laterPay + "','fenQiFuWuFei':" + t.fee + ",'bankSavingFen':'0','rate':" + t.rate + ",'bankFee':'0'}";
                $("#fenQiInfoHide" + t.plan).val(u),
                $("#fenQiFuWuFei" + t.plan).val(t.planFee),
                $("#feilvSpan" + t.plan).val(t.rate + "%"),
                $("#fenqiindexhidden" + t.plan).val(t.plan),
                $("#baiTiaoDiscountAmount" + t.plan).val(t.discountAmount),
                $("#pl-i-fenqi" + t.plan).html(t.laterPay + "\u5143/\u671f"),
                $.isArray(v) && -1 != $.inArray(Number(t.plan), v) ? ($("#baiTiaoActivityType" + t.plan).val(i),
                $("#baiTiaoActivityCode" + t.plan).val(e),
                $("#baiTiaoCouponCode" + t.plan).val(o),
                $("#baiTiaoCouponType" + t.plan).val(n),
                $("#baiTiaoCouponInfo" + t.plan).val(l)) : ($("#baiTiaoActivityType" + t.plan).val(""),
                $("#baiTiaoActivityCode" + t.plan).val(""),
                $("#baiTiaoCouponCode" + t.plan).val(""),
                $("#baiTiaoCouponType" + t.plan).val(""),
                $("#baiTiaoCouponInfo" + t.plan).val(""))
            }),
            $("#baiTiaoCanPay").val(Number(a));
            var b = Number(a) - Number($("#baiTiaoDiscountAmount" + t).val());
            $("#baiTiaoCanPayText").html(b.toFixed(2)),
            $("#baitiaoWillPay").val(b.toFixed(2)),
            fenQiShu = baiTiaoInstallmentLimited($("#baitiaoWillPay").val(), t),
            $("#baiTiaoDiscountAmount").val($("#baiTiaoDiscountAmount" + t).val()),
            $("#baitiaoPlans").val(u),
            $("#fenQiFuWuFei").html($("#fenQiFuWuFei" + t).val()),
            $("#feilvSpan").html($("#feilvSpan" + t).val())
        }
    })
}
function getALlPlans() {
    var a = "";
    return $("input[name='allPlans']").each(function() {
        a = null == a || "" == a ? $(this).val() : a + "," + $(this).val()
    }),
    a
}
var baitiaoCouponListURL = globalVar.baitiaoCouponListURL
  , payBaitiao = {
    setBaitiaoSelect: function() {
        $(".j_baitiaoSelect").bind("click", function(a) {
            a.stopPropagation(),
            payBaitiao.showBaitiaoList()
        })
    },
    selectBaitiaoFenqi: function(ele, fenQiShu) {
        try {
            if ($("#baiTiaoRepayDateHide").val($("#firstPayDay" + fenQiShu).val()),
            $("#repayDate").html($("#firstPayDay" + fenQiShu).val()),
            0 == globalVar.openCouponDialog) {
                $("#fenQiPlanHidden").val(fenQiShu),
                baiTiao.baiTiaoManjianChecked(fenQiShu),
                fenQiShu = baiTiaoInstallmentLimited($("#baitiaoWillPay").val(), fenQiShu),
                $("#fenQiPlanHidden").val(fenQiShu),
                baiTiao.baiTiaoManjianChecked(fenQiShu);
                var $pbox = $(ele).parents(".paybox");
                $(ele).parents().find("li").removeClass("selected"),
                $pbox.addClass("selected"),
                $pbox.find(".j_paymentCheck").addClass("selected"),
                $(".j_baitiaoFenqiCheck").addClass("selected");
                var isFenqi = !0;
                if ("1" == fenQiShu && (isFenqi = !1,
                $("#noFenQiCheckBox").addClass("selected"),
                $("#fenQiPlanHidden").val("1"),
                $("#fenQiFeeInfoDiv").hide(),
                $("#shengshuiUserTips").html(2 != Number($("#baiTiaoActivityType1").val()) ? "\u8bf7\u9009\u62e9\u4f18\u60e0" : $("#baiTiaoCouponInfo1").val())),
                isFenqi) {
                    globalVar.fenQiIsChecked = !0;
                    var fenQiFeiJson = $("#fenQiInfoHide" + fenQiShu).val();
                    fenQiFeiJson = eval("(" + fenQiFeiJson + ")"),
                    baiTiao.fenQi.reckonFee(),
                    $("#selectedFenQiB").html(fenQiShu + "\u671f"),
                    $("#span_em_fenqi").html("\u5206" + fenQiShu + "\u671f"),
                    $("#firstPayAmountSpan").html(fenQiFeiJson.firstPay),
                    $("#feilvSpan").html(fenQiFeiJson.rate + "%"),
                    $("#fenQiFeeInfoDiv").show(),
                    $("#noFenQiFeeInfoDiv").hide(),
                    $("#fenQi" + fenQiShu).addClass("selected"),
                    $("#shengshuiUserTips").html("" == $("#baiTiaoCouponInfo" + fenQiShu).val() ? "\u8bf7\u9009\u62e9\u4f18\u60e0" : $("#baiTiaoCouponInfo" + fenQiShu).val())
                } else
                    $("#span_em_fenqi").html(""),
                    $("#fenQiFeeInfoDiv").hide();
                return
            }
            openCounponDialogHandle(ele, fenQiShu)
        } catch (e) {
            $("#submitPayError").html("\u7531\u4e8e\u7f51\u7edc\u95ee\u9898\u60a8\u6ca1\u6709\u9009\u62e9\u6b63\u786e\u7684\u5206\u671f\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5!"),
            $("#submitPayError").fadeOut(5e3, function() {
                $("#submitPayError").html("").show()
            });
            var paySign = $("#paySign").val()
              , data = {
                quickType: "\u767d\u6761\u9009\u5206\u671f\u51fa\u9519",
                paySign: paySign,
                baiTiaoFenQiShu: fenQiShu,
                exception: e.name + ":" + e.message
            }
              , url = "/quick/jsErrorCatch.action";
            $.post(url, data, "json")
        }
    },
    showBaitiaoList: function() {
        $(".j_baitiaoList").show()
    }
}
  , baiTiao = {
    hide: function() {
        $("#baiTiaoCheckBox").find("em").removeClass("selected"),
        $("#baiTiaoDivContainer").removeClass("paybox-selected"),
        $("#virtualPayBlankNote").attr("checked", !1),
        $("#baiTiaoCanPay").attr("name", ""),
        $("#baiTiaoCanPayText").html(""),
        $("#baitiaoWillPay").val(""),
        $("#baitiaoActivityType").val(""),
        $("#baiTiaoCouponInfo").val(""),
        $("#baiTiaoDiscountAmount").val(""),
        $("#baiTiaoCouponCode").val(""),
        $("#baiTiaoCouponType").val(""),
        $("#baiTiaoActivityCode").val(""),
        $("#shengshuiUserTips").html("\u8bf7\u9009\u62e9\u4f18\u60e0"),
        $("#baitiaoPlans").val(""),
        $("#baitiao-selector-fenqi-check").slideUp(300),
        reckonVirtual.backRemain("blank_note"),
        globalVar.baiTiaoIsChecked = !1,
        $("#baiTiaoPayAmountDiv").hide(),
        $("span[name=baiTiaoHuanKuanRi]").hide(),
        baiTiao.fenQi.noFenQiChecked();
        var a = getALlPlans();
        $.each(a, function(a, i) {
            $("#baiTiaoDiscountAmount" + i).val(""),
            $("#baiTiaoCouponCode" + i).val(""),
            $("#baiTiaoCouponType" + i).val(""),
            $("#baiTiaoActivityType" + i).val(""),
            $("#baiTiaoActivityCode" + i).val(""),
            $("#baiTiaoCouponInfo" + i).val("")
        })
    },
    show: function() {
        if ($("#baiTiaoCheckBox").find("em").addClass("selected"),
        $("#baiTiaoDivContainer").addClass("paybox-selected"),
        $("#virtualPayBlankNote").attr("checked", !0),
        $("#baiTiaoCanPay").attr("name", "balance"),
        $("#paybox").addClass("selected"),
        "1" == globalVar.userType && $("#baitiao-selector-fenqi-check").slideDown(300),
        "1" == globalVar.userType && $("span[name=baiTiaoHuanKuanRi]").show(),
        $("#baiTiaoPayAmountDiv").show(),
        1 == globalVar.openCouponDialog) {
            var a = getALlPlans()
              , i = Number($("#orderShouldPayHide").val())
              , e = Number($("#remainShouldPayAmount").val());
            0 != e && (i = e);
            var o = Number($("#baiTiaoBalanceHide").val());
            Number(i) > o && (i = o),
            i = i.toFixed(2),
            reloadCouponList(i, "", "", "", "", "", "1", a)
        }
        globalVar.baiTiaoIsChecked = !0
    },
    fenQi: {
        hover: function(a) {
            $(a).addClass("hover")
        },
        removeHover: function(a) {
            $(a).removeClass("hover")
        },
        getRealFenQiFee: function(fenQiShu) {
            var fenQiFeiJson = $("#fenQiInfoHide" + fenQiShu).val();
            fenQiFeiJson = eval("(" + fenQiFeiJson + ")");
            var baiTiaoCanPay = $("#baiTiaoCanPay").val()
              , orderShouldPay = $("#orderShouldPayHide").val()
              , isYn = Number($("#baiTiaoBalanceHide").val()) > Number(orderShouldPay);
            return $("#baiTiaoCouponCode" + fenQiShu) && "" != $("#baiTiaoCouponCode" + fenQiShu).val() && isYn && (baiTiaoCanPay = Number(orderShouldPay) - Number($("#baiTiaoDiscountAmount" + fenQiShu).val())),
            baiTiaoFenQiFuWuFei = (baiTiaoCanPay * fenQiFeiJson.rate / 100).toFixed(2)
        },
        reloadReckonFenQiPay: function(a) {
            {
                var i = Number($("#baiTiaoCanPayText").text())
                  , e = $("#orderShouldPayHide").val();
                Number($("#baiTiaoBalanceHide").val()) > Number(e)
            }
            if ($("#orderShouldPayHide").val() != i || a) {
                var o = getALlPlans()
                  , n = $("#fenQiPlanHidden").val();
                (null == n || "" == n) && (n = "1"),
                reloadCouponList(i, "", "", "", "", "", n, o)
            }
        },
        reloadReckonFenQiPayTwo: function(a) {
            {
                var i = Number($("#baiTiaoCanPayText").text())
                  , e = $("#orderShouldPayHide").val();
                Number($("#baiTiaoBalanceHide").val()) > Number(e)
            }
            if ($("#orderShouldPayHide").val() != i || a) {
                var o = (getALlPlans(),
                $("#fenQiPlanHidden").val());
                (null == o || "" == o) && (o = "1")
            }
        },
        reckonFee: function() {
            if (1 == globalVar.fenQiIsChecked) {
                if ("3.0" == $("#creditVersion").val()) {
                    var a = $("#fenQiPlanHidden").val()
                      , i = this.getRealFenQiFee(a);
                    $("#fenQiFuWuFei").html(i)
                }
            }
        },
        fenQiChecked: function() {
            $("#baiTiaoCheckBox").find("em").addClass("selected"),
            $("#baiTiaoDivContainer").addClass("paybox-selected"),
            $("#fenQiCheckBox").find("em").addClass("selected"),
            $("#baitiao-selector-fenqi-check").addClass("fenqi-check"),
            $("#noFenQiCheckBox").find("em").removeClass("selected"),
            globalVar.fenQiIsChecked = !0
        },
        noFenQiChecked: function() {
            $("#baitiao-selector-fenqi-check").find(".pl-item").removeClass("selected"),
            $("#noFenQiCheckBox").addClass("selected"),
            $("#baitiao-selector-fenqi-check").removeClass("fenqi-check"),
            $("#fenQiPlanHidden").val(globalVar.defaultFenqiPlan),
            $("#fenQiFeeInfoDiv").hide(),
            globalVar.fenQiIsChecked = !1
        },
        select: function(a) {
            null != a && (globalVar.fenQiIsChecked = a),
            1 == globalVar.fenQiIsChecked ? this.noFenQiChecked() : this.fenQiChecked()
        }
    },
    checked: function(a, i, e) {
        null != a && (globalVar.baiTiaoIsChecked = a),
        1 == globalVar.baiTiaoIsChecked ? this.hide() : ("true" == $("#baiTiaoIsEnable").val() && ("yes" == e && (baiTiao.fenQi.fenQiChecked(),
        0 == globalVar.fenQiIsChecked && $("#fenQi" + globalVar.defaultFenqiPlan).addClass("selected")),
        "no" == e && baiTiao.fenQi.noFenQiChecked(),
        this.show()),
        virtualPayCheckedState()),
        (null == i || 1 == i) && reckonVirtual.virtualCanPay("blank_note"),
        1 == globalVar.baiTiaoIsChecked ? baiTiao.baiTiaoManjianChecked("1") : baiTiao.baiTiaoManJianUnChecked();
        var o = Number($("#fenQiPlanHidden").val());
        if (1 == o && 0 == globalVar.openCouponDialog) {
            2 == Number($("#baiTiaoActivityType1").val()) && Number($("#baiTiaoDiscountAmount1").val()) > 0 && $("#shengshuiUserTips").html($("#unCheckBaiTiaoCouponInfo").val());
            var n = Number($("#baiTiaoCanPay").val())
              , l = Number($("#baiTiaoDiscountAmount1").val())
              , t = n - l;
            $("#baiTiaoCanPayText").html(t.toFixed(2)),
            $("#baitiaoWillPay").val(t.toFixed(2)),
            $("#baiTiaoActivityCode").val($("#baiTiaoActivityCode1").val()),
            $("#baiTiaoCouponCode").val($("#baiTiaoCouponCode1").val()),
            $("#baiTiaoCouponType").val($("#baiTiaoCouponType1").val()),
            $("#baiTiaoCouponInfo").val($("#baiTiaoCouponInfo1").val()),
            $("#baitiaoActivityType").val($("#baitiaoActivityType1").val()),
            $("#baiTiaoDiscountAmount").val($("#baiTiaoDiscountAmount1").val()),
            $("#baitiaoActivityType").val($("#baitiaoActivityType1").val())
        }
        Number($("#baitiaoWillPay").val()) > 0 && (fenQiShu = baiTiaoInstallmentLimited($("#baitiaoWillPay").val(), $("#fenQiPlanHidden").val()),
        $("#fenQiPlanHidden").val(fenQiShu)),
        1 == globalVar.cshstate ? globalVar.cshstate = !1 : 1 == globalVar.baiTiaoIsChecked && this.fenQi.reloadReckonFenQiPay(!0),
        checkUsedCardVaild(),
        checkSignState(),
        showManJianHuodong()
    },
    baiTiaoManJianUnChecked: function() {
        if (globalVar.baiTiaoMjed && "" != $("#baiTiaoActivityCode").val()) {
            $("#shengshuiUserTips").html($("#unCheckBaiTiaoCouponInfo").val());
            var a = Number($("#remainShouldPayAmount").val()) + Number($("#baiTiaoDiscountAmount" + globalVar.baiTiaoMjPreFenQiShu).val());
            $("#remainShouldPayAmount").val(a.toFixed(2)),
            $("#remainShouldPayAmountSpan").html(a.toFixed(2)),
            $("#baiTiaoActivityCode").val(""),
            $("#baiTiaoCouponCode").val(""),
            $("#baiTiaoCouponType").val(""),
            $("#baiTiaoDiscountAmount").val(""),
            globalVar.baiTiaoMjed = !1
        }
    },
    baiTiaoManjianChecked: function(a) {
        var i = $("#baiTiaoActivityType" + a).val()
          , e = $("#baiTiaoActivityCode" + a).val()
          , o = $("#baiTiaoCouponCode" + a).val();
        if ("1" != i && "2" != i && (chenshuiyonghuFun(globalVar.isBaiTiaoDeadUser, o, e),
        $("#baiTiaoActivityCode").val(""),
        $("#baiTiaoCouponCode").val(""),
        $("#baiTiaoCouponType").val(""),
        $("#baiTiaoActivityType").val(""),
        $("#baiTiaoDiscountAmount").val("")),
        (globalVar.baiTiaoMjPreFenQiShu != a || !globalVar.baiTiaoMjed) && "" != e || "1" != i) {
            var n = 0;
            if (n = $("#baiTiaoCanPay").val(),
            n == $("#orderShouldPayHide").val() || "1" == i) {
                "1" == i || "2" == i ? $("#shengshuiUserTips").html($("#baiTiaoCouponInfo" + a).val()) : chenshuiyonghuFun(globalVar.isBaiTiaoDeadUser, o, e);
                var l = Number(n) - Number($("#baiTiaoDiscountAmount" + a).val());
                $("#baiTiaoCanPayText").html(l.toFixed(2)),
                $("#baitiaoWillPay").val(l.toFixed(2)),
                $("#baiTiaoActivityCode").val($("#baiTiaoActivityCode" + a).val()),
                $("#baiTiaoActivityType").val($("#baiTiaoActivityType" + a).val()),
                $("#baiTiaoCouponCode").val($("#baiTiaoCouponCode" + a).val()),
                $("#baiTiaoCouponType").val($("#baiTiaoCouponType" + a).val()),
                $("#baiTiaoDiscountAmount").val($("#baiTiaoDiscountAmount" + a).val()),
                globalVar.baiTiaoMjed = !0,
                globalVar.baiTiaoMjPreFenQiShu = a
            } else
                globalVar.baiTiaoMjed = !1,
                "2" == i && (chenshuiyonghuFun(globalVar.isBaiTiaoDeadUser, o, e),
                $("#baiTiaoActivityCode").val(""),
                $("#baiTiaoActivityType").val(""),
                $("#baiTiaoCouponCode").val(""),
                $("#baiTiaoCouponType").val(""),
                $("#baiTiaoDiscountAmount").val("")),
                "1" != i && (chenshuiyonghuFun(globalVar.isBaiTiaoDeadUser, o, e),
                $("#baiTiaoActivityCode").val(""),
                $("#baiTiaoCouponCode").val(""),
                $("#baiTiaoActivityType").val(""),
                $("#baiTiaoCouponType").val(""),
                $("#baiTiaoDiscountAmount").val(""))
        }
    }
};
/* @update: 2017-2-28 11:55:55 */
function checkUsedCardVaild() {
    if (1 == globalVar.bankCardIsChecked)
        if (1 == globalVar.quickPayIsChecked) {
            var e = $("#ub-item-firstBank").children("input[name='payCard-valid']").attr("value");
            void 0 == e ? showTip.show() : "0" == e ? showTip.submitHide() : showTip.submitShow()
        } else
            showTip.hide()
}
function checkSignState() {
    if (1 == globalVar.bankCardIsChecked)
        if (1 == globalVar.quickPayIsChecked && 0 != globalVar.quickBoundPayFlag) {
            var e = $("#ub-item-firstBank").children("input[name='payCard-isSign']").attr("value");
            globalVar.isSignPay = void 0 == e ? !1 : "true" == e ? !0 : !1
        } else
            globalVar.isSignPay = !1;
    else
        globalVar.isSignPay = !1;
    isOpenPayPwd()
}
function showManJianHuodong() {
    var e = !1;
    $("input[name=virtualPayType]").each(function() {
        "checked" == $(this).attr("checked") && (e = !0)
    }),
    1 == e ? 1 == globalVar.bankCardIsChecked ? 1 == globalVar.quickPayIsChecked ? ($("#pay_manjian").hide(),
    $("span[name='promotionDiscount']").hide()) : ($("span[name='promotionDiscount']").show(),
    $("#pay_manjian").show(),
    $("span[name='promotionDiscount']").show()) : ($("span[name='promotionDiscount']").show(),
    $("#pay_manjian").hide()) : (1 == globalVar.clickAddNewCard ? ($("span[name='promotionDiscount']").show(),
    $("#pay_manjian").hide()) : ($("span[name='promotionDiscount']").show(),
    $("#pay_manjian").show()),
    0 == globalVar.bankCardIsChecked && ($("span[name='promotionDiscount']").show(),
    $("#pay_manjian").hide()))
}
var Constants = {
    unSupportCardType: "\u6682\u4e0d\u652f\u6301\u8be5\u94f6\u884c ",
    cardCheckError: "/(\u3112o\u3112)/~~\u94f6\u884c\u5361\u6821\u9a8c\u6709\u8bef\uff0c\u8bf7\u624b\u52a8\u9009\u62e9\u94f6\u884c",
    cardCheckError2: "\u94f6\u884c\u5361\u6821\u9a8c\u6709\u8bef\uff0c\u6216\u8005\u4e0d\u652f\u6301\u8be5\u94f6\u884c",
    phoneSendSuccess: "\u77ed\u4fe1\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\uff0c\u8bf7\u6ce8\u610f\u67e5\u6536",
    phoneCodeResend: "\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801",
    phoneCodeSending: "\u79d2\u540e\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801",
    inputCardNo: "\u8bf7\u8f93\u5165\u94f6\u884c\u5361\u53f7",
    CardNoLengthLess: "\u5361\u53f7\u957f\u5ea6\u4f4d\u6570\u4e0d\u8db3",
    cardNoFormatError: "\u5361\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e",
    selectMonth: "\u8bf7\u9009\u62e9\u6709\u6548\u671f\u6708\u4efd",
    selectYear: "\u8bf7\u9009\u62e9\u6709\u6548\u671f\u5e74\u4efd",
    inputCVV2: "\u8bf7\u8f93\u5165\u5361\u9a8c\u8bc1\u7801",
    CVV2LengthLess: "\u5361\u9a8c\u8bc1\u7801\u5fc5\u987b\u4e3a3\u4f4d\u6570\u5b57",
    CVV2FormatError: "\u5361\u9a8c\u8bc1\u7801\u683c\u5f0f\u4e0d\u6b63\u786e",
    inputHolderName: "\u8bf7\u8f93\u5165\u59d3\u540d",
    holderNameFormatError: "\u59d3\u540d\u683c\u5f0f\u4e0d\u6b63\u786e",
    inputHolderId: "\u8bf7\u8f93\u5165\u8bc1\u4ef6\u53f7",
    holderIdError: "\u8eab\u4efd\u8bc1\u4e0d\u6b63\u786e",
    inputPhone: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7",
    phoneLengthLess: "\u624b\u673a\u53f7\u5fc5\u987b\u4e3a11\u4f4d\u6570\u5b57",
    phoneFormatError: "\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e",
    inputVerifyCode: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
    verifyCodeLengthLess: "\u77ed\u4fe1\u9a8c\u8bc1\u7801\u957f\u5ea6\u5fc5\u987b\u4e3a6\u4f4d",
    verifyCodeFormatError: "\u77ed\u4fe1\u9a8c\u8bc1\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"
}
  , nameDate = ""
  , payBankcard = {
    setBankSelect: function() {
        $(".j_usedBankSelect").bind("click", function(e) {
            e.stopPropagation(),
            $(".j_usedBankList").slideDown("fast")
        })
    },
    exchangeBindCardOrder: function(e) {
        if (!$(e).hasClass("bank-disable")) {
            var a = $(".ub-list");
            a.prepend(e),
            $("#ub-item-firstBank").html(e.innerHTML),
            $(e).addClass("selected").siblings().removeClass("selected"),
            $(".j_usedBankList").hide(),
            bankCard.checked(!1),
            globalVar.quickPayIsChecked = !0;
            var i = $(e).find(".bank-logo").attr("id").split("-")[1]
              , t = $("input[name='payCard-cardType']").val();
            $("#payCard-cardType-bound").val(t),
            payBankcard.amountLimit(i, t, "bound");
            var r = $("input[name='phone']").val();
            if ($("#m15_openBindPhone").html("\uff08\u5df2\u53d1\u9001\u81f3" + r + ")"),
            globalVar.canBeSubmit)
                if (1 == t)
                    $("#pv-line-cvv2").hide(),
                    $("#pv-input-cvv2").val(""),
                    $("#pay-verify-typeCredit").removeClass("type-credit"),
                    $("#debit-radio").children("i").attr("id", "radio-cardType-1");
                else {
                    var n = $("input[name='payCard-isVaildCVV2']").val();
                    "false" != n ? ($("#pv-input-cvv2").val(""),
                    $("#pv-line-cvv2").show(),
                    $("#pay-verify-typeCredit").addClass("type-credit"),
                    globalVar.isVaildCVV2 = !0) : ($("#pv-line-cvv2").hide(),
                    $("#pv-input-cvv2").val(""),
                    $("#pay-verify-typeCredit").removeClass("type-credit"),
                    globalVar.isVaildCVV2 = !1),
                    $("#debit-radio").children("i").attr("id", "radio-cardType-2")
                }
            checkUsedCardVaild(),
            checkSignState(),
            showManJianHuodong()
        }
    },
    showAllBankList: function() {
        globalVar.clickAddNewCard = !0,
        bankCard.checked(!1),
        bankCard.quickCardShow(),
        $(".j_quickBankList").show(),
        $(".j_quickBankEdit").hide(),
        globalVar.quickBoundPayFlag = !1,
        $(".j_bankArea").slideDown(300),
        $(".j_returnBankUsed").show(),
        $(".j_bankUsed").hide(),
        $("#pay-verify-typeCredit").removeClass("type-credit"),
        $("#pv-line-cvv2").hide(),
        $("#pv-input-cvv2").val(""),
        $("#boundPhoneVerifyCode").val(""),
        $("#font-red-cvv2-bound").html(""),
        $("#font-red-verifyCode-bound").html(""),
        $("#paySubmit").addClass("disable"),
        $("#submitPayError").html("\u8bf7\u9009\u62e9\u94f6\u884c\u652f\u4ed8"),
        $("#ui-button-gray-boundPhoneVerifyCode").html("\u83b7\u53d6\u9a8c\u8bc1\u7801").removeClass("disable"),
        globalVar.canBeSubmit = !1,
        globalVar.isSignPay = !1;
        var e = isCheckedVirtualPay();
        e || ($("#pv-line-password").hide(),
        $("#pv-line-shortPwd").hide(),
        $("#pv-line-shortPwd .ui-shortPwd-input").val(""),
        $("#payPwd").val(""),
        $("#noOpenPwdDiv").hide(),
        $("#signPayMesDiv").hide()),
        showManJianHuodong()
    },
    returnBankUsed: function() {
        payBankcard.setInputBlur(),
        payBankcard.quickToOther(),
        exchangeOtherBankPay(1),
        globalVar.quickBoundPayFlag = !0,
        $(".j_bankArea").slideUp(300),
        $(".j_bankUsed").show(),
        $(".j_returnBankUsed").hide();
        var e = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value");
        if (e) {
            if (2 == e) {
                var a = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase();
                if (void 0 != a && "" != a && null != a) {
                    var i = $("input[name='payCard-isVaildCVV2']").val();
                    "false" != i ? ($("#pv-input-cvv2").val(""),
                    $("#pv-line-cvv2").show(),
                    $("#pay-verify-typeCredit").addClass("type-credit"),
                    globalVar.isVaildCVV2 = !0) : ($("#pay-verify-typeCredit").removeClass("type-credit"),
                    globalVar.isVaildCVV2 = !1)
                }
            }
            globalVar.quickPayIsChecked = !0
        } else
            globalVar.quickPayIsChecked = !1;
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8").removeClass("disable"),
        $("#submitPayError").html(""),
        $("#errorReBind").html(""),
        $("#showErrMsgSpan").html(""),
        checkUsedCardVaild(),
        checkSignState(),
        globalVar.clickAddNewCard = !1,
        showManJianHuodong(),
        showTip.remainTip()
    },
    cardVerifySuccess: function(e) {
        var a = $("#cardVerifyShort").val().split("-")
          , i = a[0]
          , t = a[1]
          , r = a[2]
          , n = a[3];
        1 == e ? ($("#ui-input-cardNo").val(i).cardNoSplitter(),
        $(".j_bankIdentific").find(".ui-button").removeClass("disable"),
        $("#bi-i-result-bank").show().html(r),
        $("#font-red-cardError").html(""),
        $("#noCardReadminSpan").html(""),
        payBankcard.quickToAuthUser()) : ($("#font-red-cardNo").html(""),
        $("#ui-input-cardNo").removeClass("ui-input-error"),
        $("#input-cardNo-verify").val("true")),
        $("#bank-selected-quickpay").children(".bank-logo").attr("id", "bank-" + t.toLowerCase()),
        payBankcard.changeCardType(n, t),
        payBankcard.amountLimit(t, n, "unbound");
        var o = $("#quickDebit_" + t).val()
          , d = $("#quickCredit_" + t).val();
        "" == o ? ($("#debit-radio").addClass("ui-check-disable j_uiTips"),
        $("#debit-radio").attr("data-tips", "\u8be5\u884c\u6682\u4e0d\u652f\u6301\u50a8\u84c4\u5361\uff0c\u53ef\u4f7f\u7528<a href='javascript:void(0);' onclick='unionPaySubmit();' data-bank='" + t + "'>\u94f6\u8054\u5728\u7ebf</a>\u652f\u4ed8"),
        $("#credit-radio").removeClass("ui-check-disable")) : "" == d ? ($("#credit-radio").addClass("ui-check-disable j_uiTips"),
        $("#credit-radio").attr("data-tips", "\u8be5\u884c\u6682\u4e0d\u652f\u6301\u4fe1\u7528\u5361\uff0c\u53ef\u4f7f\u7528<a href='javascript:void(0);' onclick='unionPaySubmit();' data-bank='" + t + "'>\u94f6\u8054\u5728\u7ebf</a>\u652f\u4ed8"),
        $("#debit-radio").removeClass("ui-check-disable")) : ($("#debit-radio").removeClass("ui-check-disable j_uiTips"),
        $("#credit-radio").removeClass("ui-check-disable j_uiTips"),
        $("#debit-radio").removeAttr("data-tips"),
        $("#credit-radio").removeAttr("data-tips"))
    },
    editedQuickBank: function() {
        $(".j_bankIdentific").find(".ui-button").hasClass("disable") || (globalVar.clickAddNewCard = !1,
        payBankcard.setInputBlur(),
        bankCard.quickCardShow(),
        $(".j_quickBankList").slideUp(300),
        $(".j_quickBankEdit").slideDown(300),
        $(".bank-identific").hide(),
        $(".j_bankEdit").stop(!0).animate({
            opacity: 1
        }, 300),
        $(".j_bankIdentific").stop(!0).animate({
            opacity: .3
        }, 300),
        $("#paySubmit").val("\u540c\u610f\u5f00\u901a\u5e76\u652f\u4ed8").removeClass("disable"),
        $("#submitPayError").html(""),
        $(".ui-magnifying").remove(),
        globalVar.canBeSubmit = !0)
    },
    selectedQuickBank: function(e) {
        globalVar.clickAddNewCard = !1,
        $("#firstCardPayPromotionDesc").hide(),
        $("#firstCardPayIcon").hide(),
        $("#newCard-shouldAmount").val(""),
        $("#newCard-realAmount").val(""),
        $("#newCard-discountAmount").val(""),
        $("#amountLimit-day").hide();
        var a = $("#ordeTypeHide").val()
          , i = 1
          , t = $("#quickDebit_" + e).val()
          , r = $("#quickCredit_" + e).val();
        if ("" == t ? ($("#debit-radio").addClass("ui-check-disable j_uiTips"),
        "84" != a && "85" != a && $("#debit-radio").attr("data-tips", "\u8be5\u884c\u6682\u4e0d\u652f\u6301\u50a8\u84c4\u5361\uff0c\u53ef\u4f7f\u7528<a href='javascript:void(0);' target='_blank' onclick='unionPaySubmit();' data-bank='" + e + "'>\u94f6\u8054\u5728\u7ebf</a>\u652f\u4ed8"),
        $("#credit-radio").removeClass("ui-check-disable"),
        i = 2) : "" == r ? ($("#credit-radio").addClass("ui-check-disable"),
        "84" != a && "85" != a && $("#credit-radio").attr("data-tips", "\u8be5\u884c\u6682\u4e0d\u652f\u6301\u4fe1\u7528\u5361\uff0c\u53ef\u4f7f\u7528<a href='javascript:void(0);' target='_blank'onclick='unionPaySubmit();' data-bank='" + e + "'>\u94f6\u8054\u5728\u7ebf</a>\u652f\u4ed8"),
        $("#debit-radio").removeClass("ui-check-disable")) : ($("#debit-radio").removeClass("ui-check-disable j_uiTips"),
        $("#credit-radio").removeClass("ui-check-disable j_uiTips"),
        $("#debit-radio").removeAttr("data-tips"),
        $("#credit-radio").removeAttr("data-tips")),
        1 == i) {
            $("#debit-radio").children("i").find("em").addClass("selected"),
            $("#credit-radio").children("i").find("em").removeClass("selected"),
            $("#quick-form-validity").hide(),
            $("#quick-form-cvv2").hide(),
            $("#bw-quick-cardType").removeClass("type-credit");
            var n = $("#debitpromotionDesc_" + e).val();
            null != n && "" != n && ($("#firstCardPayPromotionDesc_b").html(n),
            $("#firstCardPayPromotionDesc").show(),
            $("#firstCardPayIcon").show());
            var o = $("#debitProtocolTitle_" + e).val()
              , d = $("#debitProtocolURL_" + e).val();
            void 0 != o && "" != o && void 0 != d && "" != d ? ($("#quick_protocol").html(o),
            $("#quick_protocol").attr("href", d),
            $("#quick_protocol").show()) : $("#quick_protocol").hide()
        } else {
            $("#debit-radio").children("i").find("em").removeClass("selected"),
            $("#credit-radio").children("i").find("em").addClass("selected"),
            $("#quick-form-validity").show();
            var l = $("input[name='payCard-isVaildCVV2']").val();
            "false" != l ? ($("#quick-form-cvv2").show(),
            $("#bw-quick-cardType").addClass("type-credit"),
            globalVar.isVaildCVV2 = !0) : ($("#quick-form-cvv2").hide(),
            globalVar.isVaildCVV2 = !1);
            var u = $("#cebitpromotionDesc_" + e).val();
            null != u && "" != u && ($("#firstCardPayPromotionDesc_b").html(u),
            $("#firstCardPayPromotionDesc").show(),
            $("#firstCardPayIcon").show());
            var s = $("#creditProtocolTitle_" + e).val()
              , c = $("#creditProtocolURL_" + e).val();
            void 0 != s && "" != s && void 0 != c && "" != c ? ($("#quick_protocol").html(s),
            $("#quick_protocol").attr("href", c),
            $("#quick_protocol").show()) : $("#quick_protocol").hide()
        }
        $("#bank-selected-quickpay").children(".bank-logo").attr("id", "bank-" + e.toLowerCase()),
        $("#debit-radio").children("i").attr("id", "radio-cardType-" + i),
        $(".j_quickBankList").slideUp(300),
        $(".j_quickBankEdit").slideDown(300),
        $(".bank-identific").hide(),
        $(".j_bankEdit").stop(!0).animate({
            opacity: 1
        }, 300),
        $(".j_bankIdentific").stop(!0).animate({
            opacity: .3
        }, 300),
        $("#paySubmit").val("\u540c\u610f\u5f00\u901a\u5e76\u652f\u4ed8").removeClass("disable"),
        $("#submitPayError").html(""),
        payBankcard.setInputBlur(),
        payBankcard.amountLimit(e, i, "unbound"),
        globalVar.canBeSubmit = !0;
        var p = "#promptInfo_" + e;
        $("#quickBank_promptInfo").html($(p).val()),
        payBankcard.quickToAuthUser(),
        payBankcard.showBankTips(e, i)
    },
    quickToAuthUser: function() {
        var e = $("#ui-input-holderName");
        if ("true" == e.attr("authed")) {
            var a = $("#ui-input-holderId");
            e.val(e.attr("defaultValue")),
            e.attr("userRealUserInfo", "1"),
            a.val(a.attr("defaultValue")),
            e.hide(),
            $("#unEditor-holderName").html(e.val()),
            $("#useOtherName").html("\u4f7f\u7528\u5176\u4ed6\u7528\u6237").show(),
            a.hide(),
            $("#unEditor-holderId").html(a.val()),
            $("#ui-input-holderName").removeClass("ui-input-error"),
            $("#font-red-holderName").html(""),
            $("#ui-input-holderId").removeClass("ui-input-error"),
            $("#font-red-holderId").html("")
        }
    },
    quickToOtherUser: function() {
        if ("\u4f7f\u7528\u5b9e\u540d\u7528\u6237" == $("#useOtherName").html())
            return void payBankcard.quickToAuthUser();
        var e = $("#ui-input-holderName");
        e.attr("userRealUserInfo", "0"),
        e.show().val(""),
        $("#unEditor-holderName").html(""),
        $("#useOtherName").html("\u4f7f\u7528\u5b9e\u540d\u7528\u6237").show(),
        $("#ui-input-holderId").show().val(""),
        $("#unEditor-holderId").html("")
    },
    quickToOther: function() {
        $(".j_quickBankList").slideDown(300),
        $(".j_quickBankEdit").slideUp(300),
        $(".bank-identific").show(),
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8").addClass("disable"),
        $("#submitPayError").html("\u8bf7\u9009\u62e9\u94f6\u884c\u652f\u4ed8"),
        payBankcard.ableEditor(),
        payBankcard.emptyErrorTips(),
        globalVar.canBeSubmit = !1
    },
    amountLimit: function(e, a, i) {
        var t = $("#ub-item-firstBank").children("input[name='payCard-valid']").attr("value");
        if ("0" != t) {
            var r, n, o = $("#amountLimit_" + e.toUpperCase()).val().split("/");
            if (1 == a ? (r = "" != o[0] ? "\u5355\u7b14\u9650\u989d " + o[0] : "",
            n = "" != o[1] ? "\u5355\u65e5\u9650\u989d " + o[1] : "") : (r = "" != o[2] ? "\u5355\u7b14\u9650\u989d " + o[2] : "",
            n = "" != o[3] ? "\u5355\u65e5\u9650\u989d " + o[3] : ""),
            "unbound" == i)
                $("#amountLimit-single").html(r),
                $("#amountLimit-day").html(n);
            else {
                for (var d = !0, l = 1 == a ? 0 : 2, u = 1 == a ? o.length - 2 : o.length, s = l; u > s; s++)
                    "" != o[s] && (d = !1);
                d ? $("#bl-title-amountLimit .j_uiTips").hide() : $("#bl-title-amountLimit .j_uiTips").show().attr("data-tips", r + " " + n)
            }
        }
    },
    changeCardType: function(e, a) {
        if ($("#debit-radio").children("i").attr("id", "radio-cardType-" + e),
        1 == e) {
            $("#bw-quick-cardType").removeClass("type-credit"),
            $("#debit-radio").children("i").find("em").addClass("selected"),
            $("#credit-radio").children("i").find("em").removeClass("selected"),
            $("#quick-form-validity").hide(),
            $("#quick-form-cvv2").hide();
            var i = $("#debitpromotionDesc_" + a.toUpperCase()).val();
            null != i && "" != i ? ($("#firstCardPayPromotionDesc_b").html(i),
            $("#firstCardPayPromotionDesc").show(),
            $("#firstCardPayIcon").show()) : ($("#firstCardPayPromotionDesc").hide(),
            $("#firstCardPayIcon").hide());
            var t = $("#debitProtocolTitle_" + a.toUpperCase()).val()
              , r = $("#debitProtocolURL_" + a.toUpperCase()).val();
            void 0 != t && "" != t && void 0 != r && "" != r ? ($("#quick_protocol").html(t),
            $("#quick_protocol").attr("href", r),
            $("#quick_protocol").show()) : $("#quick_protocol").hide()
        } else {
            $("#bw-quick-cardType").addClass("type-credit"),
            $("#debit-radio").children("i").find("em").removeClass("selected"),
            $("#credit-radio").children("i").find("em").addClass("selected"),
            $("#quick-form-validity").show();
            var n = $("#isVaildCVV2_" + a.toUpperCase()).val();
            "false" != n ? ($("#quick-form-cvv2").show(),
            globalVar.isVaildCVV2 = !0) : ($("#quick-form-cvv2").hide(),
            globalVar.isVaildCVV2 = !1);
            var o = $("#cebitpromotionDesc_" + a.toUpperCase()).val();
            null != o && "" != o ? ($("#firstCardPayPromotionDesc_b").html(o),
            $("#firstCardPayPromotionDesc").show(),
            $("#firstCardPayIcon").show()) : ($("#firstCardPayPromotionDesc").hide(),
            $("#firstCardPayIcon").hide());
            var d = $("#creditProtocolTitle_" + a.toUpperCase()).val()
              , l = $("#creditProtocolURL_" + a.toUpperCase()).val();
            void 0 != d && "" != d && void 0 != l && "" != l ? ($("#quick_protocol").html(d),
            $("#quick_protocol").attr("href", l),
            $("#quick_protocol").show()) : $("#quick_protocol").hide()
        }
        payBankcard.showBankTips(a, e)
    },
    unableEditor: function() {
        $("#debit-radio").hide(),
        $("#credit-radio").hide();
        var e = 1 == $("#debit-radio").children("i").attr("id").split("cardType-")[1] ? "\u50a8\u84c4\u5361" : "\u4fe1\u7528\u5361";
        $("#unEditor-cardType").html(e),
        $("#ui-input-cardNo").hide(),
        $("#unEditor-cardNo").html($("#ui-input-cardNo").val()),
        $("#ui-input-holderName").hide(),
        $("#unEditor-holderName").html($("#ui-input-holderName").val()),
        $("#ui-input-holderId").hide(),
        $("#unEditor-holderId").html($("#ui-input-holderId").val()),
        $("#holderIdType").hide(),
        $("#unEditor-holderIdType").html($("#holderIdType").find("option:selected").text()),
        $("#ui-input-phone").hide(),
        $("#unEditor-phone").html($("#ui-input-phone").val()),
        2 == $("#debit-radio").children("i").attr("id").split("cardType-")[1] && ($("#ui-select-validity").hide(),
        $("#unEditor-validity").html($("#ui-select-month").val() + "/" + $("#ui-select-year").val()),
        $("#ui-input-cvv2").hide(),
        $("#unEditor-cvv2").html("***"))
    },
    ableEditor: function() {
        $("#debit-radio").show(),
        $("#credit-radio").show(),
        $("#unEditor-cardType").html(""),
        $("#ui-input-cardNo").show().val(""),
        $("#unEditor-cardNo").html(""),
        $("#ui-input-holderName").show().val(""),
        $("#unEditor-holderName").html(""),
        $("#ui-input-holderId").show().val(""),
        $("#unEditor-holderId").html(""),
        $("#ui-input-phone").show().val(""),
        $("#unEditor-phone").html(""),
        $("#Editor-phone").html(""),
        $("#unEditor-holderIdType").html(""),
        $("#ui-input-unboundPhoneVerifyCode").val(""),
        2 == $("#debit-radio").children("i").attr("id").split("cardType-")[1] && ($("#ui-select-validity").show(),
        $("#unEditor-validity").html(""),
        $("#ui-select-month").val("\u9009\u62e9"),
        $("#ui-select-year").val("\u9009\u62e9"),
        $("#ui-input-cvv2").show().val(""),
        $("#unEditor-cvv2").html("")),
        $("#submitPayError").html(""),
        paymentUI.setPlaceholder(),
        globalVar.clickAddNewCard = !0,
        $("#newCard-realAmount").val($("#newCard-shouldAmount").val()),
        $("#newCard-discountAmount").val("0.00"),
        $("#cardPayDisAmountText").html(""),
        $("#cardDiscountAmount").val(""),
        quickPayManJian()
    },
    emptyErrorTips: function() {
        $("#font-red-cardNo").html(""),
        $("#ui-input-cardNo").removeClass("ui-input-error"),
        $("#font-red-validity").html(""),
        $("#ui-select-month").removeClass("ui-input-error"),
        $("#ui-select-year").removeClass("ui-input-error"),
        $("#font-red-cvv2").html(""),
        $("#ui-input-cvv2").removeClass("ui-input-error"),
        $("#font-red-holderName").html(""),
        $("#ui-input-holderName").removeClass("ui-input-error"),
        $("#font-red-holderId").html(""),
        $("#ui-input-holderId").removeClass("ui-input-error"),
        $("#font-red-phone").html(""),
        $("#ui-input-phone").removeClass("ui-input-error"),
        $("#font-red-verifyCode").html(""),
        $("#ui-input-unboundPhoneVerifyCode").removeClass("ui-input-error"),
        $("#font-red-cvv2-bound").html(""),
        $("#pv-input-cvv2").removeClass("ui-input-error"),
        $("#font-red-verifyCode-bound").html(""),
        $("#ui-input-boundPhoneVerifyCode").removeClass("ui-input-error")
    },
    selectedEBank: function(e, a, i) {
        globalVar.quickPayIsChecked = !1,
        2 == i && (payBankcard.showAllBankList(),
        bankCard.normalPayCardShow());
        $("input[name='payCard-modeType']").val();
        $("#normalCardPay").val(""),
        $(".j_eBankList").slideUp(300),
        $(".j_eBankEdit").slideDown(300),
        $(".j_eBankEdit").find("span").first().attr("id", "bank-" + a.toLowerCase()),
        $("input[name='seletedAgencyCode']").val(e);
        var t = $("#normalDebit_" + a).val()
          , r = $("#normalCredit_" + a).val()
          , n = 1;
        "" == t ? ($("#nordebit-radio").addClass("ui-check-disable disable"),
        $("#norcredit-radio").removeClass("ui-check-disable disable"),
        n = 2) : "" == r ? ($("#norcredit-radio").addClass("ui-check-disable disable"),
        $("#nordebit-radio").removeClass("ui-check-disable disable")) : ($("#nordebit-radio").removeClass("ui-check-disable disable"),
        $("#norcredit-radio").removeClass("ui-check-disable disable")),
        1 == n ? ($("#nordebit-radio").children("i").find("em").addClass("selected"),
        $("#norcredit-radio").children("i").find("em").removeClass("selected"),
        loadLimitAmountInfo(a, 1)) : ($("#nordebit-radio").children("i").find("em").removeClass("selected"),
        $("#norcredit-radio").children("i").find("em").addClass("selected"),
        loadLimitAmountInfo(a, 2)),
        virtualPayCheckedState(),
        setValueBankPayment(a, e),
        $("#paySubmit").val("\u8df3\u8f6c\u7f51\u94f6\u5e76\u652f\u4ed8").removeClass("disable"),
        $("#submitPayError").html(""),
        globalVar.canBeSubmit = !0
    },
    setToggleEdit: function() {
        var e = $(".j_bankIdentific")
          , a = $(".j_bankEdit");
        e.bind("mouseenter", function() {
            a.stop(!0).animate({
                opacity: .3
            }, 300)
        }).bind("mouseleave", function() {
            a.stop(!0).animate({
                opacity: 1
            }, 300)
        }),
        a.bind("mouseenter", function() {
            e.stop(!0).animate({
                opacity: .3
            }, 300)
        }).bind("mouseleave", function() {
            e.stop(!0).animate({
                opacity: 1
            }, 300)
        })
    },
    setInputFocus: function() {
        var e = $(".j_bankIdentific");
        e.find(".ui-icon-pen").hide(),
        e.find(".ui-button").show()
    },
    setInputBlur: function() {
        $(".j_bankIdentific").find(".ui-icon-pen").show(),
        $(".j_bankIdentific").find(".ui-button").addClass("disable").hide(),
        $("#bi-i-result-bank").html(""),
        $("#bi-i-text-cardNo").val(""),
        $("#font-red-cardError").html(""),
        $("#noCardReadminSpan").html("")
    },
    reBind: function() {
        var e = $(".ub-list .ub-item").find("span").attr("id");
        ("" != e || "undefined" != e) && (e = e.split("-")[1].toUpperCase()),
        $(".ui-tips").remove(),
        payBankcard.showAllBankList(),
        payBankcard.selectedQuickBank(e),
        modalAuth.hide(),
        submitButton.enable()
    },
    showBankTips: function(e, a) {
        "BCOM" != e && "bcom" != e || 2 != Number(a) ? ($("#quickBankTips").attr("data-tips", ""),
        $("#quickBankTips").removeClass("ui-icon ui-icon-info ml5 j_uiTips")) : ($("#quickBankTips").attr("data-tips", "\u8eab\u4efd\u8bc1\u53f7\u4ee5\u53ca\u624b\u673a\u53f7\u7801\u4ec5\u7528\u4e8e\u4eac\u4e1c\u652f\u4ed8\u8eab\u4efd\u9a8c\u8bc1\uff0c\u975e\u94f6\u884c\u9a8c\u8bc1"),
        $("#quickBankTips").addClass("ui-icon ui-icon-info ml5 j_uiTips"))
    }
}
  , quickConfirm = {
    verifyCardBinConfirm: function(e) {
        function a(a) {
            if (a.success) {
                var t = a.result.bankCode
                  , r = a.result.bankName
                  , n = a.result.cardType;
                if (null != n && "" != n && null != t && "" != t)
                    if (1 == n) {
                        var o = $("#debitpromotionDesc_" + t.toUpperCase()).val();
                        null != o && "" != o && ($("#firstCardPayPromotionDesc_b").html(o),
                        $("#firstCardPayPromotionDesc").show(),
                        $("#firstCardPayIcon").show())
                    } else if (2 == n) {
                        var d = $("#cebitpromotionDesc_" + t.toUpperCase()).val();
                        null != d && "" != d && ($("#firstCardPayPromotionDesc_b").html(d),
                        $("#firstCardPayPromotionDesc").show(),
                        $("#firstCardPayIcon").show())
                    }
                var l = a.result.shouldAmount
                  , s = a.result.realAmount
                  , c = a.result.discountAmount
                  , p = a.result.promotionDesc
                  , h = a.result.isRandomCutOff
                  , m = a.result.certTypeVoList;
                if ($("#unboundCardIsRandomCutOff").val(h),
                "" != l && "" != s && "" != p && "" != c && "0" != c && "0.0" != c && "0.00" != c && (globalVar.clickAddNewCard = !1,
                $("#amountLimit-day").hide(),
                $("#firstCardPayPromotionDesc_b").text(p),
                $("#firstCardPayPromotionDesc").show(),
                $("#firstCardPayIcon").show(),
                $("#cardPayDisAmountText").html("\u5df2\u4f18\u60e0" + c + "\u5143"),
                $("#cardPayDisAmountText").show(),
                $("#pay_manjian").show(),
                $("span[name='promotionDiscount']").show(),
                $("#newCard-shouldAmount").val(l),
                $("#newCard-realAmount").val(s),
                $("#newCard-discountAmount").val(c)),
                1 == n && $("#quickDebit_" + t).val() || 2 == n && $("#quickCredit_" + t).val())
                    $("#cardVerifyShort").val(i + "-" + t + "-" + r + "-" + n),
                    payBankcard.cardVerifySuccess(e);
                else if (1 == e) {
                    var v = 1 == n ? "\u50a8\u84c4\u5361" : "\u4fe1\u7528\u5361";
                    $("#font-red-cardError").html(Constants.unSupportCardType + v),
                    $(".j_bankIdentific").find(".ui-button").addClass("disable"),
                    $("#bi-i-result-bank").show().html(r);
                    var y = $("#ordeTypeHide").val();
                    "84" != y && "85" != y && $("#noCardReadminSpan").html("\u6682\u4e0d\u652f\u6301\u8be5\u884c" + v + "\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528<a href='javascript:void(0);' target='_blank' onclick='unionPaySubmit();'>\u94f6\u8054\u5728\u7ebf</a>\u652f\u4ed8")
                }
                if ("true" != u.attr("authed") && void 0 != m && "" != m) {
                    $("#holderIdType").removeAttr("disabled"),
                    $("#holderIdType").show(),
                    $("#holderIdType").html("");
                    var f = "";
                    $.each(m, function(e, a) {
                        f += '<option value="' + a.cardCenterCertTypeCode + '">' + a.certTypeName + "</option>"
                    }),
                    $("#holderIdType").html(f)
                }
            } else if (1 == e)
                $("#bi-i-text-cardNo").addClass("ui-input-error"),
                $(".j_bankIdentific .bi-i-result").hide(),
                $(".j_bankIdentific").find(".ui-button").addClass("disable");
            else {
                var C = a.result.errorInfo;
                (void 0 == C || "" == C) && (C = Constants.cardCheckError2),
                $("#font-red-cardNo").html(C),
                $("#ui-input-cardNo").addClass("ui-input-error"),
                $("#input-cardNo-verify").val("false"),
                $("#noCardReadminSpan").html("")
            }
            quickPayManJian()
        }
        var i = quickConfirm.cardNoTrim(1 == e ? $("#bi-i-text-cardNo").val() : $("#ui-input-cardNo").val())
          , t = $("#paySign").val()
          , r = $("#remainShouldPayAmount").val()
          , n = $("#deviceId").val()
          , o = $("#fingerprint").val()
          , d = quickCheckedVirtual()
          , l = "0";
        0 == d && (l = "1");
        var u = $("#ui-input-holderName")
          , s = {
            cardNo: i,
            paySign: t,
            amount: r,
            deviceId: n,
            fingerprint: o,
            novirtual: l
        }
          , c = globalVar.contextPath + "/quick/verifyCardBin.action";
        $.post(c, s, a, "json")
    },
    verifyBankCodeBinConfirm: function() {
        function e(e) {
            if (e.success) {
                var a = e.result.bankCode
                  , i = e.result.bankName
                  , t = 0;
                $("#debit-radio").addClass("ui-check-disable"),
                $("#credit-radio").addClass("ui-check-disable"),
                $("#quickCredit_" + a).val() && (t = 2,
                $("#credit-radio").removeClass("ui-check-disable")),
                $("#quickDebit_" + a).val() && (t = 1,
                $("#debit-radio").removeClass("ui-check-disable")),
                0 != t ? ($("#cardVerifyShort").val("-" + a + "-" + i + "-" + t),
                payBankcard.cardVerifySuccess(1)) : ($("#font-red-cardError").html(Constants.unSupportCardType),
                $(".j_bankIdentific").find(".ui-button").addClass("disable"),
                $("#bi-i-result-bank").show().html(i),
                $("#noCardReadminSpan").html(""))
            } else
                $("#bi-i-text-cardNo").val().length >= 3 && ($("#font-red-cardError").html(Constants.cardCheckError),
                $(".j_bankIdentific .bi-i-result").hide(),
                $(".j_bankIdentific").find(".ui-button").addClass("disable"),
                $("#noCardReadminSpan").html(""))
        }
        var a, i, t = quickConfirm.cardNoTrim($("#bi-i-text-cardNo").val());
        if (quickValidate.bankCodeVerifyRule.test(t))
            a = t.toUpperCase();
        else {
            if (!quickValidate.bankNameVerifyRule.test(t))
                return;
            i = t
        }
        var r = {
            bankCode: a,
            bankName: i
        }
          , n = "/quick/verifyBankCodeBin.action";
        $.post(n, r, e, "json")
    },
    jdparm: function() {
        try {
            jdparm.jdform("jd_prefs");
            var e = $("#jd_prefs").val();
            return e
        } catch (a) {}
        return ""
    },
    unboundGetVerifyCode: function() {
        function e(e) {
            if (3 == e.result.txnStatus) {
                var a = {
                    asyncTxnSequenceId: e.result.asyncTxnSequenceId,
                    paySign: h,
                    queryType: 1,
                    quickPayType: 1,
                    bankCode: s,
                    payAgencyCode: e.result.payAgencyCode,
                    userRealUserInfo: m
                };
                asyncWait.count = 0,
                asyncWait.setTimer(a, 0)
            } else
                $("#submitPayError").html(e.result.messageText),
                submitButton.enable();
            null != e && null != e.result && null != e.result.marketingCacheInfoResVo && $("#marketingCacheInfoResVo").val(e.result.marketingCacheInfoResVo)
        }
        try {
            if (!quickValidate.unboundGetVerifyCodeValidate())
                return void submitButton.enable();
            $("#submitPayError").html("");
            var a = quickConfirm.cardNoTrim($("#ui-input-cardNo").val())
              , i = $("#ui-input-holderName").val()
              , t = $("#ui-input-holderId").val()
              , r = $("#ui-select-month").find("option:selected").text()
              , n = $("#ui-select-year").find("option:selected").text().substr(2, 4)
              , o = n + r
              , d = $("#ui-input-cvv2").val()
              , l = $("#ui-input-phone").val()
              , u = $("#debit-radio").children("i").attr("id").split("cardType-")[1];
            1 == u && (d = "");
            var s = $("#bank-selected-quickpay").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , c = quickConfirm.getAgencyCode(u, s)
              , p = $("#remainShouldPayAmount").val()
              , h = $("#paySign").val()
              , m = $("#ui-input-holderName").attr("userRealUserInfo")
              , v = quickConfirm.jdparm()
              , y = "0";
            globalVar.useZhiFuManJian && (y = "1");
            var f = {
                cardNo: a,
                holderName: i,
                holderId: t,
                validDate: o,
                cvv2: d,
                phone: l,
                cardType: u,
                bankCode: s,
                agencyCode: c,
                amount: p,
                paySign: h,
                quickPayType: "1",
                userRealUserInfo: m,
                jscContent: v,
                useManJian: y
            }
              , C = globalVar.contextPath + "/quick/asyncGetVerifyCode.action";
            $.post(C, f, e, "json")
        } catch (b) {
            $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u83b7\u53d6\u77ed\u4fe1^_^"),
            $("#submitPayError").fadeOut(5e3, function() {
                $("#submitPayError").html("").show()
            });
            var h = $("#paySign").val()
              , f = {
                quickType: "\u4e00\u6b21\u77ed\u4fe1",
                paySign: h,
                exception: b.name + ":" + b.message
            }
              , C = "/quick/jsErrorCatch.action";
            $.post(C, f, "json")
        }
    },
    boundGetVerifyCode: function() {
        function e(e) {
            if (3 == e.result.txnStatus) {
                var a = {
                    asyncTxnSequenceId: e.result.asyncTxnSequenceId,
                    paySign: d,
                    queryType: 1,
                    quickPayType: 2,
                    bankCode: r,
                    payAgencyCode: e.result.payAgencyCode
                };
                asyncWait.count = 0,
                asyncWait.setTimer(a, 0)
            } else
                $("#submitPayError").html(20568 == e.result.messageCode ? "\u60a8\u7684\u4fe1\u7528\u5361\u5df2\u8fc7\u671f\uff0c\u8bf7<a href='javascript:;' onclick='payBankcard.reBind()'>\u91cd\u65b0\u7ed1\u5b9a</a>" : e.result.messageText),
                submitButton.enable();
            null != e && null != e.result && null != e.result.marketingCacheInfoResVo && $("#marketingCacheInfoResVo").val(e.result.marketingCacheInfoResVo)
        }
        try {
            if (!quickValidate.boundGetVerifyCodeValidate())
                return void submitButton.enable();
            $("#submitPayError").html("");
            var a = $("#pv-input-cvv2").val();
            1 == $("#payCard-cardType-bound").val() && (a = "");
            var i = $("input[name='payCard-cardId']").val()
              , t = $("input[name='payCard-agencyCode']").val()
              , r = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , n = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value")
              , o = $("#remainShouldPayAmount").val()
              , d = $("#paySign").val()
              , l = quickConfirm.jdparm()
              , u = $("#deviceId").val()
              , s = $("#fingerprint").val()
              , c = "0";
            globalVar.useZhiFuManJian && (c = "1");
            var p = {
                cvv2: a,
                cardId: i,
                agencyCode: t,
                amount: o,
                paySign: d,
                quickPayType: "2",
                bankCode: r,
                cardType: n,
                jscContent: l,
                deviceId: u,
                fingerprint: s,
                useManJian: c
            }
              , h = globalVar.contextPath + "/quick/asyncGetVerifyCode.action";
            $.post(h, p, e, "json")
        } catch (m) {
            $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u83b7\u53d6\u77ed\u4fe1^_^"),
            $("#submitPayError").fadeOut(5e3, function() {
                $("#submitPayError").html("").show("")
            });
            var d = $("#paySign").val()
              , p = {
                quickType: "\u4e8c\u6b21\u77ed\u4fe1",
                paySign: d,
                exception: m.name + ":" + m.message
            }
              , h = "/quick/jsErrorCatch.action";
            $.post(h, p, "json")
        }
    },
    quickpayConfirm: function() {
        0 == globalVar.quickBoundPayFlag ? quickConfirm.unboundQuickpayConfirm() : quickConfirm.boundQuickpayConfirm()
    },
    unboundQuickpayConfirm: function() {
        try {
            if (!quickValidate.unboundQuickpayConfirmValidate())
                return;
            var e = quickConfirm.cardNoTrim($("#ui-input-cardNo").val())
              , a = $("#ui-input-holderName").val()
              , i = $("#ui-input-holderId").val()
              , t = $("#ui-select-month").find("option:selected").text()
              , r = $("#ui-select-year").find("option:selected").text().substr(2, 4)
              , n = r + t
              , o = $("#ui-input-cvv2").val()
              , d = $("#ui-input-phone").val()
              , l = $("#ui-input-unboundPhoneVerifyCode").val()
              , u = $("#debit-radio").children("i").attr("id").split("cardType-")[1];
            1 == u && (o = "");
            var s, c, p = $("#bank-selected-quickpay").children(".bank-logo").attr("id").split("-")[1].toUpperCase(), h = $("#payAgencyCode").val(), m = $("#quickpayToken").val(), v = $("#remainShouldPayAmount").val(), y = $("#paySign").val();
            1 == $("#virtualPayBlankNote").attr("checked") && (s = $("#fenQiPlanHidden").val(),
            c = $("#baiTiaoRepayDateHide").val());
            var f = $("#ui-input-holderName").attr("userRealUserInfo")
              , C = "0";
            globalVar.useZhiFuManJian && (C = "1");
            var b = $("#marketingCacheInfoResVo").val()
              , k = {
                cardNo: e,
                holderName: a,
                holderId: i,
                validDate: n,
                cvv2: o,
                phone: d,
                phoneVerifyCode: l,
                cardType: u,
                bankCode: p,
                agencyCode: h,
                token: m,
                amount: v,
                paySign: y,
                fenQiPlanHidden: s,
                baiTiaoRepayDateHide: c,
                quickPayType: "1",
                userRealUserInfo: f,
                useManJian: C,
                marketing: b
            }
              , V = globalVar.contextPath + "/quick/asyncQuickpayConfirm.action"
              , g = function(e) {
                if (3 == e.result.txnStatus) {
                    var a = {
                        asyncTxnSequenceId: e.result.asyncTxnSequenceId,
                        paySign: y,
                        fenQiPlanHidden: s,
                        baiTiaoRepayDateHide: c,
                        queryType: 2,
                        quickPayType: 1,
                        bankCode: p,
                        payAgencyCode: h,
                        userRealUserInfo: f
                    };
                    asyncWait.count = 0,
                    asyncWait.setTimer(a, 0)
                } else
                    1 == e.result.txnStatus ? ($("#submitPayError").html(""),
                    window.location.href = e.result.resultUrl) : isCheckedVirtualPay() ? (buildVirtualPayList("", e.result.messageText),
                    paymentUI.showModal("#virtualResultDiv", function() {}),
                    submitButton.enable()) : 1 == e.result.showError ? ($("#submitPayError").html(e.result.messageText),
                    submitButton.enable()) : 2 == e.result.showError && (window.location.href = e.result.resultUrl)
            };
            $.post(V, k, g, "json")
        } catch (q) {
            $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^"),
            $("#submitPayError").fadeOut(5e3, function() {
                $("#submitPayError").html("").show("")
            });
            var y = $("#paySign").val()
              , k = {
                quickType: "\u4e00\u6b21\u652f\u4ed8",
                paySign: y,
                exception: q.name + ":" + q.message
            }
              , V = "/quick/jsErrorCatch.action";
            $.post(V, k, "json")
        }
    },
    boundQuickpayConfirm: function() {
        function e(e) {
            if (3 == e.result.txnStatus) {
                var a = {
                    asyncTxnSequenceId: e.result.asyncTxnSequenceId,
                    paySign: u,
                    fenQiPlanHidden: i,
                    baiTiaoRepayDateHide: t,
                    queryType: 2,
                    quickPayType: 2,
                    payAgencyCode: o,
                    bankCode: s,
                    cardId: n
                };
                asyncWait.count = 0,
                asyncWait.setTimer(a, 1)
            } else
                1 == e.result.txnStatus ? ($("#submitPayError").html(""),
                window.location.href = e.result.resultUrl) : isCheckedVirtualPay() ? (buildVirtualPayList("", e.result.messageText),
                paymentUI.showModal("#virtualResultDiv", function() {}),
                submitButton.enable()) : 1 == e.result.showError ? (modalAuth.hideLoading(),
                modalAuth.showError(),
                $("#messageError").html(e.result.messageText),
                submitButton.enable()) : 2 == e.result.showError && (window.location.href = e.result.resultUrl)
        }
        try {
            if (!quickValidate.boundQuickpayConfirmValidate())
                return;
            var a = $("#pv-input-cvv2").val();
            1 == $("#payCard-cardType-bound").val() && (a = "");
            var i, t, r = $("#ui-input-boundPhoneVerifyCode").val(), n = $("input[name='payCard-cardId']").val(), o = $("#payAgencyCode").val(), d = $("#quickpayToken").val(), l = $("#remainShouldPayAmount").val(), u = $("#paySign").val(), s = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase();
            1 == $("#virtualPayBlankNote").attr("checked") && (i = $("#fenQiPlanHidden").val(),
            t = $("#baiTiaoRepayDateHide").val());
            var c = "0";
            globalVar.useZhiFuManJian && (c = "1");
            var p = $("#marketingCacheInfoResVo").val()
              , h = {
                cvv2: a,
                phoneVerifyCode: r,
                cardId: n,
                agencyCode: o,
                token: d,
                amount: l,
                paySign: u,
                fenQiPlanHidden: i,
                baiTiaoRepayDateHide: t,
                bankCode: s,
                quickPayType: "2",
                useManJian: c,
                marketing: p
            }
              , m = globalVar.contextPath + "/quick/asyncQuickpayConfirm.action";
            $.post(m, h, e, "json")
        } catch (v) {
            $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^"),
            $("#submitPayError").fadeOut(5e3, function() {
                $("#submitPayError").html("").show("")
            });
            var u = $("#paySign").val()
              , h = {
                quickType: "\u4e8c\u6b21\u652f\u4ed8",
                paySign: u,
                exception: v.name + ":" + v.message
            }
              , m = "/quick/jsErrorCatch.action";
            $.post(m, h, "json")
        }
    },
    getAgencyCode: function(cardType, bankCode) {
        if (1 == cardType) {
            var quickDebit = $("#quickDebit_" + bankCode).val()
              , quickDebitJson = eval("(" + quickDebit + ")");
            agencyCode = quickDebitJson.agencyCode
        } else {
            var quickCredit = $("#quickCredit_" + bankCode).val()
              , quickCreditJson = eval("(" + quickCredit + ")");
            agencyCode = quickCreditJson.agencyCode
        }
        return agencyCode
    },
    cardNoTrim: function(e) {
        var a = e.replace(/(^\s+)|(\s+$)/g, "");
        return a.replace(/\s/g, "")
    },
    setCountdown: function(e) {
        var a;
        return a = $(1 == e ? "#ui-button-gray-unboundPhoneVerifyCode" : "#ui-button-gray-boundPhoneVerifyCode"),
        a.hasClass("disable") ? !0 : (a.html('<em class="j_authCountdown">60</em> ' + Constants.phoneCodeSending),
        a.addClass("disable"),
        paymentUI.setAuthCountdown(".j_authCountdown", 60, function() {
            a.html(Constants.phoneCodeResend),
            a.removeClass("disable")
        }),
        !1)
    },
    resetCountdown: function() {
        var e;
        e = $(0 == globalVar.quickBoundPayFlag ? "#ui-button-gray-unboundPhoneVerifyCode" : "#ui-button-gray-boundPhoneVerifyCode"),
        e.html(Constants.phoneCodeResend),
        e.removeClass("disable")
    },
    signPayConfirm: function() {
        function e(e) {
            1 == e.result.txnStatus ? ($("#submitPayError").html(""),
            window.location.href = e.result.resultUrl) : 2 == e.result.txnStatus ? null != e.result.messageCode && "" != e.result.messageCode && ("030113" == e.result.messageCode ? quickConfirm.boundGetVerifyCode() : ($("#submitPayError").html(e.result.messageText),
            submitButton.enable())) : ($("#submitPayError").html("\u652f\u4ed8\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"),
            submitButton.enable())
        }
        try {
            var a = $("input[name='payCard-cardId']").val()
              , i = $("#remainShouldPayAmount").val()
              , t = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , r = $("#ub-item-firstBank").children("input[name='payCard-agencyCode']").attr("value")
              , n = $("#ub-item-firstBank").children("input[name='payCard-isSign']").attr("value")
              , o = $("#ub-item-firstBank").children("input[name='payCard-token']").attr("value")
              , d = $("#pv-input-cvv2").val()
              , l = $("#paySign").val()
              , u = $("#deviceId").val()
              , s = $("#fingerprint").val()
              , c = {
                paySign: l,
                cardId: a,
                agencyCode: r,
                token: o,
                amount: i,
                sign: n,
                bankCode: t,
                quickPayType: "2",
                cvv2: d,
                deviceId: u,
                fingerprint: s
            }
              , p = globalVar.contextPath + "/quick/signPayConfirm.action";
            $.post(p, c, e, "json")
        } catch (h) {
            $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^"),
            $("#submitPayError").fadeOut(5e3, function() {
                $("#submitPayError").html("").show("")
            });
            var l = $("#paySign").val()
              , c = {
                quickType: "\u4e8c\u6b21\u652f\u4ed8",
                paySign: l,
                exception: h.name + ":" + h.message
            }
              , p = "/quick/jsErrorCatch.action";
            $.post(p, c, "json")
        }
    }
}
  , quickValidate = {
    cardNoRule: /^[0-9]*$/,
    cvv2Rule: /^[0-9]*$/,
    holderNameRule: /^[a-zA-Z]+([\s]?[a-zA-Z]+)*$|^[\u4e00-\u9fa5]+([\xb7]?[\u4e00-\u9fa5]+)*$/,
    phoneRule: /^[0-9]*$/,
    phoneVerifyCodeRule: /^[A-Za-z0-9]*$/,
    bankCodeVerifyRule: /^[A-Za-z]*$/,
    bankNameVerifyRule: /^[\u4e00-\u9fa5]+([\xb7]?[\u4e00-\u9fa5]+)*$/,
    keyCode: [8, 35, 36, 37, 39, 46],
    unboundGetVerifyCodeValidate: function() {
        if (!quickValidate.cardNoValidate())
            return !1;
        if (!quickValidate.holderNameValidate())
            return !1;
        if (!quickValidate.holderIdValidate())
            return !1;
        var e = $("#debit-radio").children("i").attr("id").split("cardType-")[1];
        if (2 == e) {
            if (!quickValidate.validDateValidate())
                return !1;
            var a = $("#bank-selected-quickpay").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , i = $("#isVaildCVV2_" + a.toUpperCase()).val();
            if ("false" != i && !quickValidate.cvv2Validate())
                return !1
        }
        return quickValidate.phoneValidate() ? !0 : !1
    },
    boundGetVerifyCodeValidate: function() {
        var e = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value");
        if (2 == e) {
            var a = ($("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase(),
            $("input[name='payCard-isVaildCVV2']").val());
            if ("false" != a)
                return quickValidate.cvv2Validate()
        }
        return !0
    },
    quickpayConfirmValidate: function() {
        return 0 == globalVar.quickBoundPayFlag ? quickValidate.unboundQuickpayConfirmValidate() : quickValidate.boundQuickpayConfirmValidate()
    },
    unboundQuickpayConfirmValidate: function() {
        return quickValidate.unboundGetVerifyCodeValidate() && quickValidate.phoneVerifyCodeValidate() ? !0 : !1
    },
    boundQuickpayConfirmValidate: function() {
        return quickValidate.boundGetVerifyCodeValidate() && quickValidate.phoneVerifyCodeValidate() ? !0 : !1
    },
    cardNoValidate: function() {
        var e = quickConfirm.cardNoTrim($("#ui-input-cardNo").val());
        if ("" == e)
            return $("#font-red-cardNo").html(Constants.inputCardNo),
            $("#ui-input-cardNo").addClass("ui-input-error"),
            !1;
        if (!quickValidate.cardNoRule.test(e))
            return $("#font-red-cardNo").html(Constants.cardNoFormatError),
            $("#ui-input-cardNo").addClass("ui-input-error"),
            !1;
        $("#debit-radio").children("i").attr("id").split("cardType-")[1];
        return e.length < 12 ? ($("#font-red-cardNo").html(Constants.CardNoLengthLess),
        $("#ui-input-cardNo").addClass("ui-input-error"),
        !1) : (quickConfirm.verifyCardBinConfirm(2),
        $("#font-red-cardNo").html(""),
        $("#ui-input-cardNo").removeClass("ui-input-error"),
        !0)
    },
    validDateValidate: function() {
        return quickValidate.monthsValidate() && quickValidate.yearsValidate() ? ($("#font-red-validity").html(""),
        !0) : !1
    },
    monthsValidate: function() {
        return "" == $("#ui-select-month").find("option:selected").text() || "\u9009\u62e9" == $("#ui-select-month").find("option:selected").text() ? ($("#font-red-validity").html(Constants.selectMonth),
        $("#ui-select-month").addClass("ui-input-error"),
        !1) : ($("#ui-select-month").removeClass("ui-input-error"),
        !0)
    },
    yearsValidate: function() {
        return "" == $("#ui-select-year").find("option:selected").text() || "\u9009\u62e9" == $("#ui-select-year").find("option:selected").text() ? ($("#font-red-validity").html(Constants.selectYear),
        $("#ui-select-year").addClass("ui-input-error"),
        !1) : ($("#ui-select-year").removeClass("ui-input-error"),
        !0)
    },
    cvv2Validate: function() {
        if (0 == globalVar.quickBoundPayFlag) {
            var e = $("#ui-input-cvv2").val();
            if ("" == e)
                return $("#font-red-cvv2").html(Constants.inputCVV2),
                $("#ui-input-cvv2").addClass("ui-input-error"),
                !1;
            if (!quickValidate.cvv2Rule.test(e))
                return $("#font-red-cvv2").html(Constants.CVV2FormatError),
                $("#ui-input-cvv2").addClass("ui-input-error"),
                !1;
            if (3 != e.length)
                return $("#font-red-cvv2").html(Constants.CVV2LengthLess),
                $("#ui-input-cvv2").addClass("ui-input-error"),
                !1;
            $("#font-red-cvv2").html(""),
            $("#ui-input-cvv2").removeClass("ui-input-error")
        } else {
            var e = $("#pv-input-cvv2").val();
            if ($("#pv-line-cvv2").show(),
            "" == e)
                return $("#font-red-cvv2-bound").html(Constants.inputCVV2),
                $("#pv-input-cvv2").addClass("ui-input-error"),
                !1;
            if (!quickValidate.cvv2Rule.test(e))
                return $("#font-red-cvv2-bound").html(Constants.CVV2FormatError),
                $("#pv-input-cvv2").addClass("ui-input-error"),
                !1;
            if (3 != e.length)
                return $("#font-red-cvv2-bound").html(Constants.CVV2LengthLess),
                $("#pv-input-cvv2").addClass("ui-input-error"),
                !1;
            $("#pv-input-cvv2").removeClass("ui-input-error"),
            $("#font-red-cvv2-bound").html("")
        }
        return !0
    },
    holderNameValidate: function() {
        var e = $("#ui-input-holderName").val();
        return "" == e ? ($("#font-red-holderName").html(Constants.inputHolderName),
        $("#ui-input-holderName").addClass("ui-input-error"),
        !1) : ($("#ui-input-holderName").removeClass("ui-input-error"),
        $("#font-red-holderName").html(""),
        !0)
    },
    holderIdValidate: function() {
        var e = $("#ui-input-holderId").val()
          , a = $("#holderIdType").val();
        if ("" == e)
            return $("#font-red-holderId").html(Constants.inputHolderId),
            $("#ui-input-holderId").addClass("ui-input-error"),
            !1;
        var i = $("#ui-input-holderName");
        return "0" != i.attr("userRealUserInfo") || quickValidate.validateHolderId(e, a) ? ($("#ui-input-holderId").removeClass("ui-input-error"),
        $("#font-red-holderId").html(""),
        !0) : ($("#font-red-holderId").html(Constants.holderIdError),
        $("#ui-input-holderId").addClass("ui-input-error"),
        !1)
    },
    phoneValidate: function() {
        var e = $("#ui-input-phone").val();
        return "" == e ? ($("#font-red-phone").html(Constants.inputPhone),
        $("#ui-input-phone").addClass("ui-input-error"),
        !1) : quickValidate.phoneRule.test(e) ? 11 != e.length ? ($("#font-red-phone").html(Constants.phoneLengthLess),
        $("#ui-input-phone").addClass("ui-input-error"),
        !1) : ($("#ui-input-phone").removeClass("ui-input-error"),
        $("#font-red-phone").html(""),
        !0) : ($("#font-red-phone").html(Constants.phoneFormatError),
        $("#ui-input-phone").addClass("ui-input-error"),
        !1)
    },
    phoneVerifyCodeValidate: function() {
        if (0 == globalVar.quickBoundPayFlag) {
            var e = $("#ui-input-unboundPhoneVerifyCode").val();
            if ("" == e)
                return $("#font-red-verifyCode").html(Constants.inputVerifyCode),
                $("#ui-input-unboundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (!quickValidate.phoneVerifyCodeRule.test(e))
                return $("#font-red-verifyCode").html(Constants.verifyCodeFormatError),
                $("#ui-input-unboundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (6 != e.length)
                return $("#font-red-verifyCode").html(Constants.verifyCodeLengthLess),
                $("#ui-input-unboundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            $("#ui-input-unboundPhoneVerifyCode").removeClass("ui-input-error"),
            $("#font-red-verifyCode").html("")
        } else {
            var e = $("#ui-input-boundPhoneVerifyCode").val();
            if ("" == e)
                return $("#font-red-verifyCode-bound").html(Constants.inputVerifyCode),
                $("#ui-input-boundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (!quickValidate.phoneVerifyCodeRule.test(e))
                return $("#font-red-verifyCode-bound").html(Constants.verifyCodeFormatError),
                $("#ui-input-boundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (6 != e.length)
                return $("#font-red-verifyCode-bound").html(Constants.verifyCodeLengthLess),
                $("#ui-input-boundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            $("#ui-input-boundPhoneVerifyCode").removeClass("ui-input-error"),
            $("#font-red-verifyCode-bound").html("")
        }
        return !0
    },
    validateHolderId: function(e, a) {
        if (void 0 != a && "" != a && 0 != a)
            return !0;
        if (15 == e.length)
            return !0;
        if ("X" == e.substring(e.length - 1, e.length)) {
            var i = /^(\d{6})(19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X)?$/;
            return i.test(e)
        }
        if (!/^\d{17}(\d|x)$/i.test(e))
            return !1;
        var t = 0
          , r = e.substr(6, 4) + "-" + Number(e.substr(10, 2)) + "-" + Number(e.substr(12, 2))
          , n = new Date(r.replace(/-/g, "/"));
        if (r != n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate())
            return !1;
        for (var o = 17; o >= 0; o--)
            t += Math.pow(2, o) % 11 * parseInt(e.charAt(17 - o), 11);
        return t % 11 != 1 ? !1 : !0
    }
};
$("#p-k-check-payCard").live("click", function() {
    if ($("#ui-checkbox-L-payCard").find("em").hasClass("selected"))
        if (1 == globalVar.quickBoundUserFlag) {
            var e = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value");
            if (e && 2 == e) {
                var a = ($("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase(),
                $("input[name='payCard-isVaildCVV2']").val());
                "false" != a ? ($("#pv-input-cvv2").val(""),
                $("#pv-line-cvv2").show(),
                $("#pay-verify-typeCredit").addClass("type-credit"),
                globalVar.isVaildCVV2 = !0) : ($("#pay-verify-typeCredit").removeClass("type-credit"),
                globalVar.isVaildCVV2 = !1),
                globalVar.quickBoundPayFlag = !0
            }
        } else
            $(".j_bankArea").slideDown(300);
    else
        1 == globalVar.quickBoundUserFlag && ($("#pv-line-cvv2").hide(),
        $("#pv-input-cvv2").val(""),
        $("#pay-verify-typeCredit").removeClass("type-credit"),
        $("#boundPhoneVerifyCode").val(""),
        $("#submitPayError").html(""),
        $("#paySubmit").val("\u7acb\u5373\u652f\u4ed8"),
        $(".j_returnBankUsed").hide(),
        $(".j_bankUsed").show()),
        $(".j_bankArea").slideUp(300),
        payBankcard.emptyErrorTips()
}),
$("#bi-i-text-cardNo").live("keyup", function() {
    if (quickValidate.bankCodeVerifyRule.test($(this).val()) || quickValidate.bankNameVerifyRule.test($(this).val()))
        return $("#bi-i-text-cardNo").val($(this).val().toUpperCase()),
        void quickConfirm.verifyBankCodeBinConfirm();
    var e = quickConfirm.cardNoTrim($(this).val());
    e.length > 13 && quickConfirm.verifyCardBinConfirm(1)
}).live("focus", function() {
    payBankcard.setInputFocus(),
    $("#font-red-cardError").html(""),
    $("#bi-i-text-cardNo").removeClass("ui-input-error"),
    $("#noCardReadminSpan").html("")
}).live("blur", function() {
    quickValidate.bankCodeVerifyRule.test($(this).val()) || quickConfirm.verifyCardBinConfirm(1),
    "" == $("#bi-i-text-cardNo").val() && payBankcard.setInputBlur(),
    $("#bi-i-text-cardNo").hasClass("ui-input-error") && ($("#font-red-cardError").html(Constants.cardCheckError),
    $("#noCardReadminSpan").html(""))
}),
$("#debit-radio").live("click", function() {
    if (!$(this).hasClass("ui-check-disable") && !$(this).children().find("em").hasClass("selected")) {
        var e = $("#bank-selected-quickpay .bank-logo").attr("id").split("-")[1];
        payBankcard.amountLimit(e, 1, "unbound"),
        payBankcard.changeCardType(1, e),
        payBankcard.ableEditor(),
        payBankcard.emptyErrorTips(),
        payBankcard.quickToAuthUser()
    }
}),
$("#credit-radio").live("click", function() {
    if (!$(this).hasClass("ui-check-disable") && !$(this).children().find("em").hasClass("selected")) {
        var e = $("#bank-selected-quickpay .bank-logo").attr("id").split("-")[1];
        payBankcard.amountLimit(e, 2, "unbound"),
        payBankcard.changeCardType(2, e),
        payBankcard.ableEditor(),
        payBankcard.emptyErrorTips(),
        payBankcard.quickToAuthUser();
        var a = $("#isVaildCVV2_" + e.toUpperCase()).val();
        "false" != a ? ($("#quick-form-cvv2").show(),
        globalVar.isVaildCVV2 = !0) : ($("#quick-form-cvv2").hide(),
        globalVar.isVaildCVV2 = !1)
    }
}),
$("#ui-input-cardNo").live("focus", function() {
    $("#font-red-cardNo").html(""),
    $("#ui-input-cardNo").removeClass("ui-input-error")
}).live("blur", function() {
    quickValidate.cardNoValidate()
}),
$("#ui-select-month").live("focus", function() {
    $(".j_quickBankEdit").addClass("type-credit-month"),
    $("#ui-select-month").removeClass("ui-input-error"),
    $("#font-red-validity").html("")
}).live("blur", function() {
    $(".j_quickBankEdit").removeClass("type-credit-month"),
    quickValidate.validDateValidate()
}),
$("#ui-select-year").live("focus", function() {
    $(".j_quickBankEdit").addClass("type-credit-year"),
    $("#ui-select-year").removeClass("ui-input-error"),
    $("#font-red-validity").html("")
}).live("blur", function() {
    $(".j_quickBankEdit").removeClass("type-credit-year"),
    quickValidate.validDateValidate()
}),
$("#ui-input-cvv2").live("focus", function() {
    $(".j_quickBankEdit").addClass("type-credit-code"),
    $("#font-red-cvv2").html(""),
    $("#ui-input-cvv2").removeClass("ui-input-error")
}).live("blur", function() {
    $(".j_quickBankEdit").removeClass("type-credit-code"),
    quickValidate.cvv2Validate()
}),
$("#pv-input-cvv2").live("focus", function() {
    $("#pay-verify-typeCredit").addClass("type-credit-verify-code"),
    $("#pv-input-cvv2").removeClass("ui-input-error"),
    $("#font-red-cvv2-bound").html("")
}).live("blur", function() {
    $("#pay-verify-typeCredit").removeClass("type-credit-verify-code"),
    quickValidate.cvv2Validate()
}),
$("#ui-input-holderName").live("focus", function() {
    $("#ui-input-holderName").removeClass("ui-input-error"),
    $("#font-red-holderName").html("")
}).live("blur", function() {
    quickValidate.holderNameValidate()
}),
$("#ui-input-holderId").live("focus", function() {
    $("#ui-input-holderId").removeClass("ui-input-error"),
    $("#font-red-holderId").html("")
}).live("blur", function() {
    $(this).val($(this).val().toUpperCase()),
    quickValidate.holderIdValidate()
}),
$("#ui-input-phone").live("focus", function() {
    $("#ui-input-phone").removeClass("ui-input-error"),
    $("#font-red-phone").html("")
}).live("blur", function() {
    quickValidate.phoneValidate()
}),
$("#ui-input-unboundPhoneVerifyCode").live("focus", function() {
    $("#ui-input-unboundPhoneVerifyCode").removeClass("ui-input-error"),
    $("#font-red-verifyCode").html("")
}).live("blur", function() {
    quickValidate.phoneVerifyCodeValidate()
}),
$("#ui-input-boundPhoneVerifyCode").live("focus", function() {
    $("#ui-input-boundPhoneVerifyCode").removeClass("ui-input-error"),
    $("#font-red-verifyCode-bound").html("")
}).live("blur", function() {
    quickValidate.phoneVerifyCodeValidate()
}),
$("#errorReBind").live("click", function() {
    $(this).attr("style", "display:none")
}),
asyncWait = {
    queryURL: globalVar.contextPath + "/quick/asyncQueryTxnStatus.action",
    timeArray: [1e3, 3e3, 6e3, 8e3, 1e4, 12e3],
    count: 0,
    queryRequest: function(e, a) {
        $.post(this.queryURL, e, function(i) {
            if (3 == i.result.txnStatus)
                asyncWait.setTimer(e, a);
            else if (1 == i.result.txnStatus)
                if (1 == e.queryType) {
                    if (1 == e.quickPayType) {
                        $("#submitPayError").html(Constants.phoneSendSuccess),
                        payBankcard.unableEditor(),
                        modalAuth.show(),
                        modalAuth.showError();
                        var t = $("#unEditor-phone").html();
                        "" != t && t.length > 7 && (t = t.substring(0, t.length - t.substring(3).length) + "****" + t.substring(7)),
                        $("#m15_openBindPhone").html("\uff08\u5df2\u53d1\u9001\u81f3" + t + ")");
                        var r = $("#cardPayAmountStrong").html();
                        $("#cardPaySum").html("\u652f\u4ed8&nbsp;" + r + "\u5143"),
                        $("#messageError").html(Constants.phoneSendSuccess)
                    } else {
                        modalAuth.show(),
                        modalAuth.showError();
                        var r = $("#cardPayAmountStrong").html();
                        $("#cardPaySum").html("\u652f\u4ed8&nbsp;" + r + "\u5143"),
                        $("#messageError").html(Constants.phoneSendSuccess)
                    }
                    $("#quickpayToken").attr("value", i.result.token),
                    $("#asyncTxnSequenceId").attr("value", i.result.asyncTxnSequenceId),
                    $("#payAgencyCode").attr("value", e.payAgencyCode)
                } else
                    2 == e.queryType && ($("#submitPayError").html(""),
                    window.location.href = i.result.resultUrl);
            else
                1 == e.queryType ? ($("#submitPayError").html(i.result.messageText),
                submitButton.enable(),
                modalAuth.hideLoading(),
                modalAuth.showError(),
                $("#messageError").html(i.result.messageText),
                1 == i.result.errorReBind && $("#errorReBind").attr("style", ""),
                _jaq.track("SMS_" + i.result.code)) : 2 == e.queryType && (isCheckedVirtualPay() ? (buildVirtualPayList("", i.result.messageText),
                paymentUI.showModal("#virtualResultDiv", function() {}),
                submitButton.enable(),
                $("#submitPayError").html(i.result.messageText),
                modalAuth.hide(),
                _jaq.track("PAY_" + i.result.code)) : 1 == i.result.showError ? ($("#submitPayError").html(i.result.messageText),
                modalAuth.hideLoading(),
                modalAuth.showError(),
                $("#messageError").html(i.result.messageText),
                submitButton.enable(),
                _jaq.track("PAY_" + i.result.code)) : 2 == i.result.showError && (window.location.href = i.result.resultUrl))
        }, "json")
    },
    setTimer: function(e, a) {
        this.count < this.timeArray.length && setTimeout(function() {
            asyncWait.queryRequest(e, a)
        }, this.timeArray[this.count]),
        this.count++,
        this.count > this.timeArray.length && ($("#messageError").html("\u8ba2\u5355\u5904\u7406\u4e2d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u8ba2\u5355\u72b6\u6001\u6216\u7a0d\u540e\u91cd\u8bd5\u3002"),
        $("#submitPayError").html("\u8ba2\u5355\u5904\u7406\u4e2d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u8ba2\u5355\u72b6\u6001\u6216\u7a0d\u540e\u91cd\u8bd5\u3002"),
        submitButton.enable(),
        modalAuth.hideLoading(),
        modalAuth.showError())
    }
},
$(function() {
    $("body").click(function(e) {
        for (var a = e.srcElement || e.target, i = [$(".list-box").filter(":not(.un-list-box)").get(0)]; a; ) {
            for (var t = 0; t < i.length; t++)
                if (a == i[t])
                    return void $(".list-box dl dd").show();
            if (a === document.body)
                return void $(".list-box dl dd").hide();
            a = a.parentNode
        }
    }),
    $(".list-box dl dd a").click(function(e) {
        e.stopPropagation();
        var a = $(this).clone().html();
        $(this).parent().find("a").removeClass("curr").end().prev().html(a),
        $(this).addClass("curr").parent().hide()
    }),
    $(".pay-fenqi .jdcheckbox").click(function() {
        var e = ($(this).val(),
        $(this).parent().find(".list-box"));
        $(this).attr("checked") ? e.removeClass("un-list-box") : e.addClass("un-list-box")
    })
}),
$(function() {
    $.fn.cardNoSplitter = function(e) {
        var a = {
            min: 13,
            max: 25,
            delimiter: " ",
            delimiterNumber: 4,
            onlyNumber: !0,
            copy: !0
        }
          , i = $.extend({}, a, e)
          , t = $(this);
        "" != t.val() && "undefined" != typeof t.val() && t.val(t.val().replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1" + i.delimiter)),
        t.bind("keyup", function(e) {
            return 13 == e.keyCode || 108 == e.keyCode ? void payBankcard.editedQuickBank() : void (quickValidate.bankCodeVerifyRule.test(t.val()) || quickValidate.bankNameVerifyRule.test(t.val()) || $.inArray(e.keyCode, quickValidate.keyCode) >= 0 || (i.onlyNumber && (e.keyCode >= 48 && e.keyCode <= 57 || (this.value = this.value.replace(/\D/g, ""))),
            this.value = this.value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1" + i.delimiter)))
        }).bind("dragenter", function() {
            return !1
        }).bind("onpaste", function() {
            return !clipboardData.getData("text").match(/\D/)
        }).bind("blur", function() {
            this.value = this.value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1" + i.delimiter)
        })
    }
});
/* @update: 2017-2-28 11:55:55 */
function pitchCoupon() {
    $("#xjkMarketingInfoResVo").val($("#xjk_coupoList .selected").find("#encryptXjkCoupon").val()),
    $("#xjkDisacountAmount").val($("#xjk_coupoList .selected").find("#discountAmount").val());
    var a = $("#xjk_coupoList .selected").find("#xjkPromotionDesc").val();
    void 0 == a || "" == a ? ($("#xjkCoupotext").html(""),
    $("#xjkcoupoHint").html("\u8bf7\u9009\u62e9\u4f18\u60e0")) : ($("#xjkCoupotext").html(a),
    $("#xjkcoupoHint").html("")),
    $("#xjkCheckBoxLi").find("em").hasClass("selected") && clearCheckBox("jr_jrb"),
    paymentUI.hideModal("#xjkCouponModal"),
    1 == globalVar.xjkIsChecked && (xiaoJinKu.checked(),
    xiaoJinKu.checked())
}
function hideOtherPay() {
    $("#payOherCheckLi").find("em").removeClass("selected"),
    $("#payBalancePayboxDiv").removeClass("paybox-selected"),
    $("#otherPayListDiv").hide(),
    globalVar.payOtherIsChecked = !1
}
function isHideOtherPay() {
    "checked" != $("#virtualPayJingBean").attr("checked") && "checked" != $("#virtualPayYue").attr("checked") && hideOtherPay()
}
function jbToRmb(a) {
    return null != a && "0" != a && "" != a ? (a = Number(a),
    (a / 100).toFixed(2)) : 0
}
function rmbToJb(a) {
    return jingbean = Number(a),
    (100 * jingbean).toFixed(0)
}
var xiaoJinKu = {
    hide: function() {
        if ($("#xjkCheckBoxLi").find("em").removeClass("selected"),
        $("#virtualPayJrb").attr("checked", !1),
        $("#xjkPayAmountDiv").hide(),
        $("#xjkPayboxDiv").removeClass("paybox-selected"),
        $("#jrbCanPay").attr("name", ""),
        reckonVirtual.backRemain("jr_jrb"),
        globalVar.xjkIsChecked = !1,
        globalVar.xjkMarket) {
            var a = Number($("#xjkdisAmountValue").val());
            if (void 0 != a && "" != a && "0" != a && "0.00" != a) {
                var e = Number($("#xjkWellPay").val()) + Number($("#xjkdisAmountValue").val());
                globalVar.xjkMarket = !1,
                $("#remainShouldPayAmount").val(e.toFixed(2)),
                $("#remainShouldPayAmountSpan").html(e.toFixed(2)),
                $("#xjkdisAmountValue").val("")
            }
        }
        xiaoJinKu.xjkManJianUnChecked()
    },
    show: function() {
        $("#xjkCheckBoxLi").find("em").addClass("selected"),
        $("#virtualPayJrb").attr("checked", !0),
        $("#xjkPayAmountDiv").show(),
        $("#xjkPayboxDiv").addClass("paybox-selected"),
        $("#jrbCanPay").attr("name", "balance");
        var a = Number($("#orderShouldPayHide").val())
          , e = Number($("#remainShouldPayAmount").val())
          , n = Number($("#jrbBalanceHide").val());
        if (n >= e && e == a) {
            if (void 0 != $("#xjkMarketingInfoResVo").val() && "" != $("#xjkMarketingInfoResVo").val()) {
                var i = Number($("#xjkDisacountAmount").val());
                (void 0 == i || null == i || "" == i) && (i = "0"),
                e -= i,
                globalVar.xjkMarket = !0,
                $("#xjkdisAmountValue").val(i),
                $("#remainShouldPayAmount").val("0"),
                $("#remainShouldPayAmountSpan").html("0"),
                $("#xjkCanPayStrong").html(e.toFixed(2)),
                $("#jrbCanPay").val(e.toFixed(2)),
                $("#xjkWellPay").val(e.toFixed(2))
            }
        } else
            $("#xjkMarketingInfoResVo").val(""),
            $("#xjkDisacountAmount").val(""),
            $("#xjkCoupotext").html(""),
            $("#xjkcoupoHint").html("\u8bf7\u9009\u62e9\u4f18\u60e0");
        globalVar.xjkIsChecked = !0
    },
    xjkManJianUnChecked: function() {
        if (globalVar.xjkMjed && document.getElementById("jrbActivityIdHide") && document.getElementById("jrbDiscountMoneyHide")) {
            var a = Number($("#remainShouldPayAmount").val()) + Number($("#jrbDiscountMoneyHide").val());
            $("#remainShouldPayAmount").val(a.toFixed(2)),
            $("#remainShouldPayAmountSpan").html(a.toFixed(2)),
            $("#xjkActivityId").val(""),
            $("#xjkRewardAmount").val(""),
            globalVar.xjkMjed = !1
        }
    },
    xjkManJianChecked: function() {
        if (document.getElementById("jrbActivityIdHide") && document.getElementById("jrbDiscountMoneyHide") && $("#jrbCanPay").val() == $("#orderShouldPayHide").val()) {
            var a = Number($("#jrbCanPay").val()) - Number($("#jrbDiscountMoneyHide").val());
            $("#jrbCanPay").val(a.toFixed(2)),
            $("#xjkCanPayStrong").html(a.toFixed(2)),
            $("#xjkActivityId").val($("#jrbActivityIdHide").val()),
            $("#xjkRewardAmount").val($("#jrbDiscountMoneyHide").val()),
            globalVar.xjkMjed = !0
        }
    },
    checked: function(a, e) {
        null != a && (globalVar.xjkIsChecked = a);
        var n = $("#jrbCanPay").val();
        1 == globalVar.xjkIsChecked ? (this.hide(),
        reckonVirtual.backBalanceTobaiTiao(n)) : this.show(),
        (null == e || 1 == e) && (reckonVirtual.virtualCanPay("jr_jrb"),
        xiaoJinKu.xjkManJianChecked()),
        virtualPayCheckedState(),
        checkUsedCardVaild(),
        checkSignState(),
        showManJianHuodong()
    }
}
  , payXJK = {
    selectCoupon: function() {
        paymentUI.showModal("#xjkCouponModal"),
        $(".xjkCoupo-content").Jtab({
            compatible: !0,
            event: "click"
        }),
        $.each($("#xjk_coupoList").find("li"), function(a, e) {
            var n = $(this).find(".ui-checkbox").find("em");
            $("#xjkMarketingInfoResVo").val() == $(e).attr("couponid") ? (n.removeClass("selected"),
            n.addClass("selected")) : n.removeClass("selected")
        })
    },
    bindCheck: function() {
        $("#xjk_coupoList").find(".ui-checkbox-wrap").bind("click", function() {
            if (!$(this).hasClass("ui-check-disable")) {
                var a = $(this).find(".ui-checkbox").find("em");
                a.hasClass("selected") ? (a.removeClass("selected"),
                $(this).removeClass("ui-check-checked")) : ($("#xjk_coupoList").find(".ui-checkbox-wrap").find("em").removeClass("selected"),
                a.addClass("selected"),
                $(this).addClass("ui-check-checked"))
            }
        })
    }
}
  , otherPay = {
    hide: function() {
        $("#payOherCheckLi").find("em").removeClass("selected"),
        $("#payBalancePayboxDiv").removeClass("paybox-selected"),
        $("#otherPayListDiv").hide(),
        $("#otherPayAmountDiv").hide(),
        globalVar.payOtherIsChecked = !1
    },
    show: function() {
        $("#payOherCheckLi").find("em").addClass("selected"),
        $("#payBalancePayboxDiv").addClass("paybox-selected"),
        $("#otherPayListDiv").show(),
        $("#otherPayAmountDiv").show(),
        globalVar.payOtherIsChecked = !0
    },
    checkedForJingbean: function() {
        "block" == $("#otherPayListDiv").css("display") ? $("#otherPayListDiv").css("display", "none") : $("#otherPayListDiv").css("display", "block")
    },
    checked: function(a) {
        reckonVirtual.virtualCanPay(),
        null != a && (globalVar.payOtherIsChecked = a),
        1 == globalVar.payOtherIsChecked ? this.hide() : this.show(),
        yue.checked(globalVar.payOtherIsChecked ? !1 : !0);
        var e = $("#remainShouldPayAmount").val();
        ("0" != e && "0.00" != e || 0 == globalVar.yuEIsChecked) && (1 == globalVar.payOtherIsChecked ? (jingBean.checked(!1),
        gangBeng.checked(!1),
        wyQianBao.checked(!1)) : (jingBean.checked(!0),
        gangBeng.checked(!0),
        wyQianBao.checked(!0))),
        checkUsedCardVaild(),
        checkSignState(),
        showManJianHuodong()
    }
}
  , yue = {
    hide: function() {
        $("#yueCheckBoxLi").find("em").removeClass("selected"),
        $("#yueCanPaydiv").hide(),
        $("#virtualPayYue").attr("checked", !1),
        $("#yueCanPay").attr("name", ""),
        reckonVirtual.backRemain("balance_com"),
        globalVar.yuEIsChecked = !1
    },
    show: function() {
        $("#yueCheckBoxLi").find("em").addClass("selected"),
        $("#yueCanPaydiv").show(),
        $("#virtualPayYue").attr("checked", !0),
        $("#yueCanPay").attr("name", "balance"),
        globalVar.yuEIsChecked = !0
    },
    reckon: function() {
        reckonVirtual.virtualCanPay("balance_com")
    },
    checked: function(a, e) {
        var n = $("#yueCanPay").val();
        null != $("#yueBalanceHide").val() && "" != $("#yueBalanceHide").val() && (null != a && (globalVar.yuEIsChecked = a),
        1 == globalVar.yuEIsChecked ? (this.hide(),
        reckonVirtual.backBalanceTobaiTiao(n)) : this.show(),
        (null == e || 1 == e) && this.reckon()),
        virtualPayCheckedState()
    }
}
  , jingBean = {
    hide: function() {
        $("#jingBeanCheckBoxLi").find("em").removeClass("selected"),
        $("#jingBeanCanPayDiv").hide(),
        $("#virtualPayJingBean").attr("checked", !1),
        $("#jingBeanCanPay").attr("name", ""),
        reckonVirtual.backRemain("jingbean"),
        "checked" != $("#virtualPayYue").attr("checked") && "checked" != $("#virtualPayJingBean").attr("checked") && "checked" != $("#virtualPayGangbeng").attr("checked") && $("#virtualPayCountStrong").html("0.00"),
        globalVar.jingBeanIsChecked = !1
    },
    show: function() {
        $("#jingBeanCheckBoxLi").find("em").addClass("selected"),
        $("#jingBeanCanPayDiv").show(),
        $("#virtualPayJingBean").attr("checked", !0),
        $("#jingBeanCanPay").attr("name", "balance"),
        globalVar.jingBeanIsChecked = !0
    },
    reckon: function() {
        reckonVirtual.virtualCanPay("jingbean")
    },
    checked: function(a, e) {
        var n = $("#jingBeanCanPay").val();
        null != $("#jingbeanBalanceHide").val() && "" != $("#jingbeanBalanceHide").val() && (null != a && (globalVar.jingBeanIsChecked = a),
        1 == globalVar.jingBeanIsChecked ? (this.hide(),
        reckonVirtual.backBalanceTobaiTiao(n)) : this.show(),
        (null == e || 1 == e) && this.reckon()),
        virtualPayCheckedState()
    }
}
  , gangBeng = {
    hide: function() {
        $("#coinsCanPayDiv").hide(),
        $("#coinsCheckBoxLi").find("em").removeClass("selected"),
        $("#virtualPayGangbeng").attr("checked", !1),
        $("#gangbengCanPay").attr("name", ""),
        globalVar.gangbengIsChecked = !1,
        reckonVirtual.backRemain("gangbeng")
    },
    show: function() {
        $("#coinsCanPayDiv").show(),
        $("#coinsCheckBoxLi").find("em").addClass("selected"),
        $("#virtualPayGangbeng").attr("checked", !0),
        $("#gangbengCanPay").attr("name", "balance"),
        globalVar.gangbengIsChecked = !0
    },
    checked: function(a) {
        var e = $("#gangbengCanPay").val();
        null != $("#coinsBalanceHide").val() && "" != $("#coinsBalanceHide").val() && (null != a && (globalVar.gangbengIsChecked = a),
        1 == globalVar.gangbengIsChecked ? (this.hide(),
        reckonVirtual.backBalanceTobaiTiao(e)) : this.show(),
        reckonVirtual.virtualCanPay("gangbeng"),
        virtualPayCheckedState())
    }
}
  , wyQianBao = {
    hide: function() {
        $("#wyQianBaoCanPayDiv").hide(),
        $("#wyQianBaoCheckBoxLi").find("em").removeClass("selected"),
        $("#virtualPayWyQianBao").attr("checked", !1),
        $("#wyQianBaoCanPay").attr("name", ""),
        globalVar.wyQianBaoChecked = !1,
        reckonVirtual.backRemain("wyQianBao")
    },
    show: function() {
        $("#wyQianBaoCanPayDiv").show(),
        $("#wyQianBaoCheckBoxLi").find("em").addClass("selected"),
        $("#virtualPayWyQianBao").attr("checked", !0),
        $("#wyQianBaoCanPay").attr("name", "balance"),
        globalVar.wyQianBaoChecked = !0
    },
    checked: function(a) {
        var e = $("#wyQianBaoCanPay").val();
        null != $("#wyQianBaoBalanceHide").val() && "" != $("#wyQianBaoBalanceHide").val() && (null != a && (globalVar.wyQianBaoChecked = a),
        1 == globalVar.wyQianBaoChecked ? (this.hide(),
        reckonVirtual.backBalanceTobaiTiao(e)) : this.show(),
        reckonVirtual.virtualCanPay("wyQianBao"),
        virtualPayCheckedState())
    }
};
/* @update: 2017-2-28 11:55:55 */
function gradedPay(a) {
    "1" == a ? ($("#onGradedPay").hide(),
    $("#gradedPayDiv").removeClass("hide"),
    $("#cancelGradedPay").show(),
    $("#shouldEbankPay").text($("#cardPayAmountStrong").text()),
    $("input[name='gradedPayInput']").val(""),
    $("input[name='gradedPayment']").val("1"),
    $("#shouldPayError").text("")) : "0" == a && ($("#onGradedPay").show(),
    $("#gradedPayDiv").addClass("hide"),
    $("#cancelGradedPay").hide(),
    $("input[name='gradedPayInput']").val(""),
    $("#shouldEbankPay").text(""),
    $("input[name='gradedPayment']").val(""))
}
function loadLimitAmountInfo(a, e) {
    var n = "/misc/js/cashier/limitAmountInfo.json"
      , t = 1 == e ? "debitCard" : "creditCard";
    try {
        $.getJSON(n, function(e) {
            if ($("#limitAmountInfoTbl").children().remove(),
            void 0 != e[a.toLocaleLowerCase()] && void 0 != e[a.toLocaleLowerCase()][t]) {
                var n = e[a.toLocaleLowerCase()][t];
                n.length <= 3 ? $("#allLimitInfoA").css("display", "none") : $("#allLimitInfoA").css("display", "inline"),
                void 0 != n && n.length > 0 && ($("#limitAmountInfoTbl").append('<colgroup><col width="30%"/><col width="30%"/><col width="40%"/></colgroup><tr><th>\u5355\u7b14\u9650\u989d(\u5143)</th><th>\u6bcf\u65e5\u9650\u989d(\u5143)</th><th>\u9700\u8981\u6ee1\u8db3\u7684\u6761\u4ef6</th></tr>'),
                $.each(n, function(a, e) {
                    $("#limitAmountInfoTbl").append(3 > a ? "<tr><td>" + e.singleLimit + "</td><td>" + e.dayLimit + "</td><td>" + e.condition + "</td></tr>" : "<tr><td class='hide'>" + e.singleLimit + "</td><td class='hide'>" + e.dayLimit + "</td><td class='hide'>" + e.condition + "</td></tr>")
                }))
            } else
                $("#allLimitInfoA").css("display", "none"),
                $("#possibleLimitSpan").css("display", "none")
        })
    } catch (i) {}
}
function virtualPayCheckedState() {
    var a = isCheckedVirtualPay();
    if (a)
        $("#onGradedPay").hide(),
        $("#gradedPayDiv").addClass("hide"),
        $("#cancelGradedPay").hide(),
        $("input[name='gradedPayment']").val("");
    else {
        var e = $("input[name='requestInfo']").val()
          , n = $("input[name='seletedAgencyCode']").val()
          , t = $("#cardPayAmountStrong").text();
        $.ajax({
            url: "gradedPay.action?agencyCode=" + n + "&shouldPay=" + t + "&paySign=" + e,
            type: "get",
            dataType: "html",
            error: function() {},
            success: function(a) {
                null != a && "" != a && ("YES" == a ? ($("#onGradedPay").show(),
                $("#gradedPayDiv").addClass("hide"),
                $("#cancelGradedPay").hide(),
                $("#shouldEbankPay").text($("#cardPayAmountStrong").text())) : "NO" == a && ($("#onGradedPay").hide(),
                $("#gradedPayDiv").addClass("hide"),
                $("#cancelGradedPay").hide()))
            }
        })
    }
}
function exchangeOtherBankPay(a) {
    $("#normalCardPay").val("normalCardPay"),
    $("#ebankPaymentListDiv").show(),
    $("#normalPayCardConfirmDiv").hide(),
    $("#ebankDiv").hide(),
    $("#gradedPayDiv").addClass("hide"),
    $("#ebank-cardtype").find("i").eq(0).addClass("selected"),
    $("input[name='gradedPayInput']").val(""),
    $("input[name='gradedPayment']").val(""),
    $("input[name='commonBankType']").val(""),
    $("input[name='bankCode']").val(""),
    $("input[name='agencyCode']").val(""),
    $("#confirmPayAmount").val(""),
    $("#shouldPaymentAmount").val(""),
    1 == a ? showTip.hide() : showTip.show()
}
function validateAmount() {
    var a = $("input[name='gradedPayInput']")
      , e = $("#shouldPayError")
      , n = a.val();
    if ("" != n) {
        {
            var t = $("#cardPayAmountStrong").text();
            parseFloat(t) - parseFloat(n)
        }
        return parttenNum.test(n) ? parseFloat(n) > 0 && parseFloat(n) <= 50 ? (e.text("\u8ba2\u5355\u652f\u4ed8\u91d1\u989d\u5fc5\u987b\u5927\u4e8e50\u5143"),
        a.focus(),
        !1) : parseFloat(n) <= 0 ? (e.text("\u8ba2\u5355\u652f\u4ed8\u91d1\u989d\u5fc5\u987b\u5927\u4e8e0\u5143"),
        a.focus(),
        !1) : parseFloat(n) > parseFloat(t) ? (e.text("\u60a8\u8f93\u5165\u7684\u91d1\u989d\u8d85\u8fc7\u5269\u4f59\u5e94\u652f\u4ed8\u91d1\u989d"),
        a.focus(),
        !1) : (e.text(""),
        !0) : (e.text("\u60a8\u8f93\u5165\u7684\u91d1\u989d\u683c\u5f0f\u4e0d\u6b63\u786e"),
        a.focus(),
        !1)
    }
    return $("#shouldEbankPay").html($("#cardPayAmountStrong").text()),
    e.text(""),
    !1
}
function setValueBankPayment(a, e) {
    $("input[name='bankCode']").val(a),
    $("input[name='agencyCode']").val(e),
    $("#submitPayError").text(""),
    $("#shouldPayError").text("");
    var n = $("#nordebit-radio").find("i").find("em").hasClass("selected")
      , t = $("#norcredit-radio").find("i").find("em").hasClass("selected");
    n ? $("input[name='commonBankType']").val("1") : t && $("input[name='commonBankType']").val("2")
}
function normalBankPaymentConfirm() {
    var a = $("#normalCardPay").val();
    if ("normalCardPay" == a) {
        var e = $("input[name='payCard-agencyCode']").val()
          , n = $("input[name='payCard-payChannelCode']").val();
        payBankcard.selectedEBank(e, n, "2"),
        submitNormalBankConfirm()
    } else
        submitNormalBankConfirm();
    submitButton.enable()
}
function submitNormalBankConfirm() {
    var a = $("input[name='bankCode']").val()
      , e = $("#cardPayAmountStrong").text();
    if (null == a || "" == a)
        $("#submitPayError").text("\u8bf7\u9009\u62e9\u94f6\u884c\u652f\u4ed8"),
        $("#submitPayError").show();
    else if ("0" == e || "0.00" == e)
        $("#submitPayError").text("\u94f6\u884c\u5361\u5e94\u4ed8\u91d1\u989d\u4e3a0\uff01"),
        $("#submitPayError").show();
    else {
        var n = $("input[name='gradedPayment']").val();
        "1" != n || validateAmount() ? ($("input[name='shouldPaymentAmount']").val($("#cardPayAmountStrong").text()),
        $("input[name='confirmPaymentAmount']").val("1" == n ? $("input[name='gradedPayInput']").val() : $("#cardPayAmountStrong").text()),
        $("#paymentConfirm").submit(),
        wangyin.success()) : ($("#shouldPayError").text("\u672c\u6b21\u652f\u4ed8\u91d1\u989d\u8f93\u5165\u6709\u8bef\uff01"),
        $("#shouldPayError").show())
    }
}
function unionPaySubmit() {
    $("input[name='payCount']").val(""),
    $("input[name='agencyCode']").val("021"),
    $("input[name='bankCode']").val("unionpay"),
    $("input[name='commonBankType']").val("0");
    var a = $("input[name='to_type']").val();
    $("input[name='toType']").val(a),
    $("#paymentConfirm").submit(),
    wangyin.success()
}
$("#nordebit-radio").live("click", function() {
    if (!$(this).hasClass("disable")) {
        $("#nordebit-radio").children("i").find("em").addClass("selected"),
        $("#norcredit-radio").children("i").find("em").removeClass("selected"),
        $("input[name='commonBankType']").val("1");
        var a = $("#seletedAgencyCode").siblings().eq(0).attr("id")
          , e = a.substr(a.indexOf("-") + 1);
        loadLimitAmountInfo(e, 1)
    }
}),
$("#norcredit-radio").live("click", function() {
    if (!$(this).hasClass("disable")) {
        $("#norcredit-radio").children("i").find("em").addClass("selected"),
        $("#nordebit-radio").children("i").find("em").removeClass("selected"),
        $("input[name='commonBankType']").val("2");
        var a = $("#seletedAgencyCode").siblings().eq(0).attr("id")
          , e = a.substr(a.indexOf("-") + 1);
        loadLimitAmountInfo(e, 2)
    }
});
var parttenNum = /^(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2})?$/;
/* @update: 2017-2-28 11:55:55 */
function submitBankorPlatPay(t, n, e, a) {
    confirmSubmitBankPlatPay(t, n, e, a)
}
function confirmSubmitBankPlatPay(t, n, e, a) {
    $("input[name='agencyCode']").val(t),
    $("input[name='bankCode']").val(n),
    $("input[name='commonBankType']").val(e),
    $("input[name='toType']").val(a),
    $("#paymentConfirm").submit(),
    wangyinOther.success()
}
function weixinPay(t, n) {
    var e = "/payment/getWeixin.action";
    $("input[name='agencyCode']").val(t),
    $("input[name='bankCode']").val("weixin"),
    $("input[name='toType']").val(n),
    document.paymentConfirm.target = "_self",
    $("#paymentConfirm").append($("#deviceId")),
    $("#paymentConfirm").append($("#fingerprint")),
    $("#paymentConfirm").append($("#jscContent")),
    $("#paymentConfirm").attr("action", e),
    $("#paymentConfirm").attr("method", "post"),
    $("#paymentConfirm").submit()
}
function phoneValidate(t) {
    if ("" == t || null == t)
        return 1;
    if ("" != t) {
        if (11 != t.length)
            return 2;
        if (!telphoneRule.test(t))
            return 3
    }
    return 0
}
function submitPostalAndEnterPay(t, n) {
    confirmSubmitPostalAndEnterPay(t, n)
}
function confirmSubmitPostalAndEnterPay(t, n) {
    var e = ""
      , a = 0;
    if (0 == a) {
        var o = $("input[name='paySign']").val();
        $.ajax({
            url: "payHKSBM.action?paySign=" + o + "&phone=" + e + "&type=" + n,
            type: "get",
            dataType: "html",
            error: function() {
                switch (n) {
                case "0":
                    $("#postalError").text(hksbmError),
                    $("#postalError").show();
                    break;
                case "1":
                    $("#enterError").text(hksbmError),
                    $("#enterError").show()
                }
            },
            success: function(e) {
                if (null != e && "" != e) {
                    var a = e.split("||")[0]
                      , o = e.split("||")[1];
                    if (null != o && "" != o) {
                        var r = /(\d{3})\d{4}(\d{4})/;
                        o = o.replace(r, "$1****$2")
                    }
                    "0" == n || "2" == n ? (postoffice.getPhoneCode(),
                    $("#postalHksbm1").text(a),
                    $("#postalHksbm2").text(a),
                    $("input[name='postalPhone']").val(""),
                    $("#postPhoneSpan").text(o)) : (1 == n || 3 == n) && (enterprise.getPhoneCode(),
                    $("#enterHksbm1").text(a),
                    $("#enterHksbm2").text(a),
                    $("#enterHksbm3").text(a),
                    $("input[name='enterPhone']").val(""),
                    $("#enterPhoneSpan").text(o)),
                    null != t && ($(t).hide(),
                    $(t).siblings(".j_phoneCurrent").show(),
                    $(t).siblings(".j_sendToPhone").show(),
                    $(t).siblings(".j_phoneNew").hide(),
                    $(t).siblings(".op-error").hide(),
                    $(t).siblings(".op-error").text(""))
                } else
                    switch (n) {
                    case "0":
                        $("#postalError").text(hksbmError),
                        $("#postalError").show();
                        break;
                    case "1":
                        $("#enterError").text(hksbmError),
                        $("#enterError").show()
                    }
            }
        })
    }
}
function showPayDetail() {
    var infoJson = $("input[name='payResultDetailInfoJson']").val()
      , url = "payDetailLazy.action?payResultDetailInfoJson=" + infoJson;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "html",
        cache: !1,
        success: function(data) {
            if (null != data && "" != data) {
                var obj = eval("(" + data + ")")
                  , payDetailHtml = obj.payDetailHtml
                  , amount = obj.amount
                  , toPayUrl = obj.toPayUrl;
                $("#showPayDetailMsg").prepend(payDetailHtml),
                null != payDetailHtml && "" != payDetailHtml && $("input[name='payResultDetailFlag']").val("1"),
                "0" == amount || "0.00" == amount ? ($("#goshoping").show(),
                $("#toPayContinue").hide(),
                $("#contineShoping").show()) : ($("#goshoping").hide(),
                $("#toPayContinue").show(),
                $("#toPayContinue").find("a").attr("href", toPayUrl))
            } else
                $("#toPayContinue").show(),
                $("#goshoping").hide(),
                $("#toPayContinue").find("a").attr("href", "http://www.jd.com/"),
                $("#toPayContinue").find("a").text("\u7ee7\u7eed\u901b\u901b")
        }
    })
}
function submitAgentHksbmPay() {
    var t = $("input[name='paySign']").val();
    $.ajax({
        url: "payAgentHKSBM.action?paySign=" + t,
        type: "get",
        dataType: "html",
        error: function() {
            $("#agentError").text(hksbmError),
            $("#agentError").show()
        },
        success: function(t) {
            if (null != t && "" != t) {
                var n = t.split("||")[0]
                  , e = t.split("||")[1];
                if (null != e && "" != e) {
                    var a = /(\d{3})\d{4}(\d{4})/;
                    e = e.replace(a, "$1****$2")
                }
                $("#agentHksbm").text(n),
                $("#agentHksbm2").text(n),
                $("#agentHksbm3").text(n),
                $("#agentPhoneSpan").text(e),
                $("#agentGetPhoneCode").hide(),
                $("#agentSendPhoneCode").show()
            } else
                $("#agentError").text(hksbmError),
                $("#agentError").show()
        }
    })
}
var telphoneRule = /^[0-9]*$/
  , phoneIsNull = "\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a"
  , phoneIsSmall = "\u624b\u673a\u53f7\u5fc5\u987b\u4e3a11\u4f4d\u6570\u5b57"
  , phoneFormatIsError = "\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e"
  , hksbmError = "\u83b7\u53d6\u8bc6\u522b\u7801\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5";
$(document).ready(function() {
    var t = ($("input[name='toType']").val(),
    $("input[name='postalEntry']").val())
      , n = $("input[name='corperEntry']").val();
    "1" == t ? $("#postalTab").click() : "1" == n && $("#transferTab").click()
});
var wangyinOther = {
    success: function() {
        paymentUI.showModal("#wangyinPaySuccess", function() {})
    },
    error: function() {
        paymentUI.showModal("#wangyinPayError", function() {})
    }
};
/* @update: 2017-2-28 11:55:55 */
function buildCombineVirtualPayList(result, quickPayInfo) {
    var html_ = "";
    if (null != result && "" != result) {
        var payResList = result.virtualPayResList
          , resList = eval(payResList)
          , remainAmount = result.remainAmount
          , cardPayMethod = result.cardPayMethod
          , cardPayAmount = result.cardPayAmount;
        if (null != resList && "" != resList && resList.length > 0)
            for (var i = 0; i < resList.length; i++)
                html_ += "<li>",
                html_ += '<span class="p-name">',
                "balance_cashier" == resList[i].virtualPayType ? html_ += "\u4f59\u989d\u652f\u4ed8" : "jingbean" == resList[i].virtualPayType ? html_ += "\u4eac\u8c46\u652f\u4ed8" : "wyQianBao" == resList[i].virtualPayType ? html_ += "\u4f59\u989d\u652f\u4ed8" : "blank_note" == resList[i].virtualPayType ? html_ += "\u767d\u6761\u652f\u4ed8" : "jr_jrb" == resList[i].virtualPayType ? html_ += "\u5c0f\u91d1\u5e93\u652f\u4ed8" : "gangbeng" == resList[i].virtualPayType ? html_ += "\u94a2\u955a\u652f\u4ed8" : "bankCardPay" == resList[i].virtualPayType && (html_ += "\u94f6\u884c\u5361\u652f\u4ed8"),
                html_ += "</span>",
                html_ += "jingbean" == resList[i].virtualPayType ? '<span class="p-money">\u652f\u4ed8 <span>' + resList[i].payAmount / 100 + "</span> \u5143</span>" : '<span class="p-money">\u652f\u4ed8 <span>' + resList[i].payAmount + "</span> \u5143</span>",
                resList[i].isSuccess && 0 == resList[i].isRepeatSubmit ? html_ += '<span class="p-flag p-success">\u652f\u4ed8\u6210\u529f</span>' : (html_ += '<span class="p-flag p-failure">',
                html_ += null != resList[i].info && "" != resList[i].info ? resList[i].info : "\u652f\u4ed8\u5931\u8d25",
                html_ += "</span>"),
                html_ += "</li>";
        html_ += '<span id="quickPayResultInfo">',
        html_ += "</span>"
    }
    if ($("#quickPayResultInfo"),
    "quick" == cardPayMethod || null != quickPayInfo) {
        var html_1 = "";
        html_1 += "<li>",
        html_1 += '<span class="p-name">',
        html_1 += "\u5feb\u6377\u652f\u4ed8",
        html_1 += "</span>",
        (null == cardPayAmount || "undefined" == cardPayAmount) && (cardPayAmount = $("#cardPayAmountStrong").html()),
        html_1 += '<span class="p-money">\u652f\u4ed8 <span>' + cardPayAmount + "</span> \u5143</span>";
        var str = "\u672a\u6267\u884c";
        null != quickPayInfo && "" != quickPayInfo && (str = quickPayInfo),
        html_1 += '<span class="p-flag p-failure">' + str + "</span>",
        html_1 += "</li>",
        $("#quickPayResultInfo").html(html_1)
    }
    null == quickPayInfo && ($("#remainAmountSpan").html(remainAmount),
    $("#virtualPayResultUl").html(html_))
}
function resultCodeHandle(e, a) {
    return void 0 != e && "040201" == e ? (common_modalAuth.hide(),
    void paymentUI.showModal("#activeTipsModal", function() {
        $("#activeTipsInfo").html(void 0 != a && "" != a ? a : "\u8be5\u4f18\u60e0\u4fe1\u606f\u5f02\u5e38\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u539f\u4ef7\u652f\u4ed8\u6216\u7a0d\u540e\u91cd\u8bd5\uff01")
    }, function() {
        window.location.reload()
    })) : void 0
}
var paymentCommon = {
    riskReport: function(e) {
        function a(a) {
            if (void 0 == a || "" == a)
                return submitButton.enable(),
                void $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^");
            if ("checkAmountError" == a.messageCode)
                return submitButton.enable(),
                void $("#submitPayError").html("\u652f\u4ed8\u65b9\u5f0f\u91d1\u989d\u8ba1\u7b97\u9519\u8bef\uff0c\u8bf7\u5237\u65b0\u91cd\u65b0\u652f\u4ed8");
            if ("CHECK_STATUS_WRONG" == a.passwordResultEnum)
                return submitButton.enable(),
                void $("#showErrMsgSpan").html("\u652f\u4ed8\u5bc6\u7801\u9519\u8bef\u3002");
            if ("CHECK_STATUS_LOCK" == a.passwordResultEnum)
                return submitButton.enable(),
                void $("#showErrMsgSpan").html("\u652f\u4ed8\u5bc6\u7801\u88ab\u9501\u5b9a\u3002");
            if ("CHECK_STATUS_NETWORK_FAILURE" == a.passwordResultEnum)
                return submitButton.enable(),
                void $("#showErrMsgSpan").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^");
            if ("RESEST_PASSWORD" == a.passwordResultEnum)
                return submitButton.enable(),
                void $("#showErrMsgSpan").html("\u60a8\u7684\u8d26\u6237\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u9690\u60a3\uff0c\u8bf7\u60a8\u5148\u53bb<a href='https://authpay.jd.com/account/home.action' class='ml10' target='_blank'>\u4fee\u6539\u652f\u4ed8\u5bc6\u7801</a>");
            if ("PASSWORD_OVERDUE" == a.passwordResultEnum)
                return globalVar.payPwd.isHaveValidPayPwd = !1,
                submitButton.enable(),
                $("#pv-line-haveValidated").hide(),
                $("#pv-line-password").show(),
                void $("#showErrMsgSpan").html("\u60a8\u7684\u652f\u4ed8\u5bc6\u7801\u5df2\u7ecf\u8d85\u8fc7\u652f\u4ed8\u65f6\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u652f\u4ed8\u5bc6\u7801\u3002");
            if (void 0 != a.combineToken && $("#combineToken").val(a.combineToken),
            void 0 != a.validatedEncode && (globalVar.payPwd.validatedEncode = a.validatedEncode),
            !a.success || void 0 != a.riskResultEnum && "SAFE" != a.riskResultEnum)
                "STOP_PAY" == a.riskResultEnum ? common_fkAuthModal.showErrorForFK("\u6b64\u652f\u4ed8\u65b9\u5f0f\u98ce\u9669\u8f83\u9ad8\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u3002") : "RECHECK" == a.riskResultEnum && (void 0 != a.combineToken && $("#combine2Token").val(a.combineToken),
                void 0 != a.riskPhoneToken && $("#riskPhoneToken").val(a.riskPhoneToken),
                void 0 != a.phoneNum && $("#riskPhoneNum").val(a.phoneNum),
                paymentCommon.riskSendMsg("1", a.phoneNum, a.riskPhoneToken));
            else {
                if ((1 == e || 1 == globalVar.isSignPay) && 0 == globalVar.payPwd.isHaveValidPayPwd && "" == $("#payPwd").val())
                    return $("#showErrMsgSpan").html("\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801"),
                    void submitButton.enable();
                submitButton.disable(),
                paymentCommon.uniformCharge()
            }
        }
        var o = $("#orderId").val()
          , n = $("#userTypeHidden").val()
          , t = $("#paySign").val()
          , r = $("#deviceId").val()
          , i = $("#fingerprint").val()
          , d = $("#cardPayMethod").val()
          , s = $("input[name='payCard-cardId']").val()
          , u = $("#cardPayAmountStrong").html()
          , l = $("#jscContent").val()
          , m = $("#payPwd").val();
        m = hex_md5(m),
        $("#combineToken").val("");
        var c = "";
        if (1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked)
            if (0 == globalVar.quickBoundPayFlag) {
                var h = $("#debit-radio").children("i").attr("id").split("cardType-")[1]
                  , p = $("#bank-selected-quickpay").children(".bank-logo").attr("id").split("-")[1].toUpperCase();
                c = quickConfirm.getAgencyCode(h, p)
            } else
                c = $("input[name='payCard-agencyCode']").val();
        var y = {
            orderId: o,
            paySign: t,
            deviceId: r,
            fingerprint: i,
            cardPayMethod: d,
            cardIdAtrr: s,
            cardPayAmountHide: u,
            userType: n,
            payPwd: m,
            haveValidated: 1 == globalVar.payPwd.isHaveValidPayPwd ? "1" : !1,
            jscContent: l,
            agencyCode: c
        }
          , y = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(y) + "&" + $("#quickPayForm").serialize()
          , v = globalVar.contextPath + "/combine/pollRisk.action";
        $.post(v, y, a, "json")
    },
    riskSendMsg: function(e, a, o) {
        function n(a) {
            if (void 0 != a.combineToken && $("#combineToken").val(a.combineToken),
            1 == e)
                if (a.success)
                    common_fkAuthModal.resetModal(),
                    $("#common_m15_openBindPhone_fk").html("\uff08\u5df2\u53d1\u9001\u81f3\u5c3e\u53f7:" + codedPhoneNum + "\u7684\u624b\u673a)"),
                    $("#common_messageError_fk").html(Constants.phoneSendSuccess),
                    common_fkAuthModal.show(),
                    common_fkAuthModal.showError();
                else {
                    submitButton.enable();
                    var o = a.messageCode
                      , n = "";
                    n = "SMS20001" == o ? "\u77ed\u4fe1\u53d1\u9001\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01" : "\u77ed\u4fe1\u53d1\u9001\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                    $("#submitPayError").html(n)
                }
            else if (2 == e)
                if (a.success)
                    common_fkAuthModal.resetInput(),
                    $("#common_messageError_fk").html(Constants.phoneSendSuccess),
                    common_fkAuthModal.show(),
                    common_fkAuthModal.showError();
                else {
                    var o = a.messageCode
                      , n = "";
                    n = "SMS20001" == o ? "\u77ed\u4fe1\u53d1\u9001\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01" : "\u77ed\u4fe1\u53d1\u9001\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                    $("#common_messageError_fk").html(n),
                    common_fkAuthModal.hideLoading(),
                    common_fkAuthModal.showError(),
                    submitButton.enable()
                }
        }
        "" != a && a.length > 7 && (codedPhoneNum = a.substring(0, a.length - a.substring(3).length) + "****" + a.substring(7)),
        $("#riskPaySession").val(o),
        $("#codedPhoneNum").val(codedPhoneNum);
        var t = $("#userTypeHidden").val()
          , r = $("#paySign").val()
          , i = {
            orderId: $("#orderId").val(),
            paySign: r,
            userType: t,
            combinePayToken: $("#combineToken").val(),
            phone: a,
            cardPayMethod: $("#cardPayMethod").val(),
            riskPhoneToken: o,
            cardIdAtrr: $("input[name='payCard-cardId']").val(),
            cardPayAmountHide: $("#cardPayAmountStrong").html()
        };
        i = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(i);
        var d = globalVar.contextPath + "/combine/sendRiskSms.action";
        $.post(d, i, n, "json")
    },
    riskValidMsg: function() {
        function e(e) {
            void 0 != e.combineToken && $("#combineToken").val(e.combineToken),
            e.success ? paymentCommon.uniformCharge() : ($("#submitPayError").html(e.messageInfo),
            common_fkAuthModal.showErrorForFK(e.messageInfo))
        }
        $("#codedPhoneNum").val(codedPhoneNum);
        var a = $("#paySign").val()
          , o = $("#userTypeHidden").val()
          , n = {
            combinePayToken: $("#combineToken").val(),
            cardPayMethod: $("#cardPayMethod").val(),
            cardIdAtrr: $("input[name='payCard-cardId']").val(),
            cardPayAmountHide: $("#cardPayAmountStrong").html(),
            orderId: $("#orderId").val(),
            paySign: a,
            userType: o,
            riskPhoneToken: $("#riskPhoneToken").val(),
            verifCode: $("#common_risk_modalAuthInput_fk").val()
        };
        n = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(n);
        var t = globalVar.contextPath + "/combine/verificationRiskSms.action";
        $.post(t, n, e, "json")
    },
    quickOneSendMsg: function() {
        function e(e) {
            if (void 0 != e.messageCode && "040201" == e.messageCode)
                return resultCodeHandle(e.messageCode, e.messageInfo);
            if (void 0 != e && void 0 != e.marketingCacheInfoResVo && $("#marketingCacheInfoResVo").val(e.marketingCacheInfoResVo),
            void 0 != e.combineToken && $("#combineToken").val(e.combineToken),
            e.success && 3 == e.txnStatus) {
                var a = {
                    asyncTxnSequenceId: e.asyncTxnSequenceId,
                    paySign: h,
                    cardPayMethod: "quick",
                    queryType: 1,
                    quickPayType: 1,
                    bankCode: l,
                    payAgencyCode: e.payAgencyCode,
                    userRealUserInfo: p
                };
                anyncWaitCommon.count = 0,
                anyncWaitCommon.setTimer(a, 0)
            } else
                $("#submitPayError").html(e.messageInfo),
                submitButton.enable()
        }
        try {
            if (!quickPayValidate.unboundGetVerifyCodeValidate())
                return void submitButton.enable();
            $("#submitPayError").html("");
            var a = quickConfirm.cardNoTrim($("#ui-input-cardNo").val())
              , o = $("#ui-input-holderName").val()
              , n = $("#ui-input-holderId").val()
              , t = $("#ui-select-month").find("option:selected").text()
              , r = $("#ui-select-year").find("option:selected").text().substr(2, 4)
              , i = r + t
              , d = $("#ui-input-cvv2").val()
              , s = $("#ui-input-phone").val()
              , u = $("#debit-radio").children("i").attr("id").split("cardType-")[1];
            1 == u && (d = "");
            var l = $("#bank-selected-quickpay").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , m = quickConfirm.getAgencyCode(u, l)
              , c = $("#remainShouldPayAmount").val()
              , h = $("#paySign").val()
              , p = $("#ui-input-holderName").attr("userRealUserInfo")
              , y = quickConfirm.jdparm()
              , v = $("#userTypeHidden").val()
              , f = "0";
            globalVar.useZhiFuManJian && (f = "1");
            var C = $("#holderIdType").val()
              , g = $("#unboundCardIsRandomCutOff").val()
              , k = {
                combinePayToken: $("#combineToken").val(),
                cardPayMethod: $("#cardPayMethod").val(),
                cardIdAtrr: $("input[name='payCard-cardId']").val(),
                cardPayAmountHide: $("#cardPayAmountStrong").html(),
                orderId: $("#orderId").val(),
                cardNo: a,
                holderName: o,
                holderId: n,
                validDate: i,
                cvv2: d,
                phone: s,
                cardType: u,
                bankCode: l,
                agencyCode: m,
                amount: c,
                paySign: h,
                quickPayType: "1",
                userRealUserInfo: p,
                userType: v,
                cardDiscountFlag: f,
                jscContent: y,
                cardIsRandomCutOff: g,
                holderIdType: C
            };
            k = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(k) + "&" + $("#quickPayForm").serialize();
            var b = globalVar.contextPath + "/combine/sendUnbindQuickSms.action";
            $.post(b, k, e, "json")
        } catch (P) {
            supportPay.jsErrorReport(1)
        }
    },
    quickTwoSendMsg: function() {
        function e(e) {
            if (void 0 != e.messageCode && "040201" == e.messageCode)
                return resultCodeHandle(e.messageCode, e.messageInfo);
            if (void 0 != e && void 0 != e.marketingCacheInfoResVo && $("#marketingCacheInfoResVo").val(e.marketingCacheInfoResVo),
            void 0 != e.combineToken && $("#combineToken").val(e.combineToken),
            e.success && 3 == e.txnStatus) {
                var a = {
                    asyncTxnSequenceId: e.asyncTxnSequenceId,
                    paySign: s,
                    cardPayMethod: "quick",
                    queryType: 1,
                    quickPayType: 2,
                    bankCode: t,
                    agencyCode: e.agencyCode
                };
                anyncWaitCommon.count = 0,
                anyncWaitCommon.setTimer(a, 0)
            } else
                $("#submitPayError").html(e.messageInfo),
                submitButton.enable()
        }
        try {
            if (!quickPayValidate.boundGetVerifyCodeValidate())
                return void submitButton.enable();
            $("#submitPayError").html("");
            var a = $("#pv-input-cvv2").val();
            1 == $("#payCard-cardType-bound").val() && (a = "");
            var o = $("input[name='payCard-cardId']").val()
              , n = $("input[name='payCard-agencyCode']").val()
              , t = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , r = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value")
              , i = $("#ub-item-firstBank").children("input[name='payCard-isRandomCutOff']").attr("value")
              , d = $("#remainShouldPayAmount").val()
              , s = $("#paySign").val()
              , u = $("#userTypeHidden").val()
              , l = "0";
            globalVar.useZhiFuManJian && (l = "1");
            var m = quickConfirm.jdparm()
              , c = {
                combinePayToken: $("#combineToken").val(),
                cardPayMethod: $("#cardPayMethod").val(),
                cardIdAtrr: $("input[name='payCard-cardId']").val(),
                cardPayAmountHide: $("#cardPayAmountStrong").html(),
                orderId: $("#orderId").val(),
                cvv2: a,
                cardId: o,
                agencyCode: n,
                amount: d,
                paySign: s,
                quickPayType: "2",
                bankCode: t,
                cardType: r,
                userType: u,
                cardDiscountFlag: l,
                jscContent: m,
                cardIsRandomCutOff: i
            };
            c = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(c) + "&" + $("#quickPayForm").serialize();
            var h = globalVar.contextPath + "/combine/sendBindedQuickSms.action";
            $.post(h, c, e, "json")
        } catch (p) {
            supportPay.jsErrorReport(2)
        }
    },
    quickOnePayCommonPortal: function() {
        try {
            if (!quickPayValidate.unboundQuickpayConfirmValidate())
                return;
            var e = quickConfirm.cardNoTrim($("#ui-input-cardNo").val())
              , a = $("#ui-input-holderName").val()
              , o = $("#ui-input-holderId").val()
              , n = $("#ui-select-month").find("option:selected").text()
              , t = $("#ui-select-year").find("option:selected").text().substr(2, 4)
              , r = t + n
              , i = $("#ui-input-cvv2").val()
              , d = $("#ui-input-phone").val()
              , s = $("#common_phoneVer_modalAuthInput_fk").val()
              , u = $("#debit-radio").children("i").attr("id").split("cardType-")[1];
            1 == u && (i = "");
            var l = $("#bank-selected-quickpay").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , m = $("#payAgencyCode").val()
              , c = $("#quickpayToken").val()
              , h = $("#remainShouldPayAmount").val()
              , p = $("#paySign").val()
              , y = $("#userTypeHidden").val()
              , v = "0";
            globalVar.useZhiFuManJian && (v = "1");
            var f = $("#marketingCacheInfoResVo").val()
              , C = $("#ui-input-holderName").attr("userRealUserInfo")
              , g = $("#unboundCardIsRandomCutOff").val()
              , k = $("#holderIdType").val()
              , b = {
                orderId: $("#orderId").val(),
                combinePayToken: $("#combineToken").val(),
                cardPayMethod: "quick",
                cardIdAtrr: $("input[name='payCard-cardId']").val(),
                cardPayAmountHide: $("#cardPayAmountStrong").html(),
                cardNo: e,
                holderName: a,
                holderId: o,
                validDate: r,
                cvv2: i,
                phone: d,
                phoneVerifyCode: s,
                cardType: u,
                bankCode: l,
                agencyCode: m,
                token: c,
                amount: h,
                paySign: p,
                quickPayType: "1",
                userType: y,
                cardDiscountFlag: v,
                marketingCacheInfoResVo: f,
                userRealUserInfo: C,
                cardIsRandomCutOff: g,
                holderIdType: k
            };
            b = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(b) + "&" + $("#quickPayForm").serialize();
            var P = globalVar.contextPath + "/combine/submitUnbindQuickPay.action"
              , _ = function(e) {
                if (void 0 != e.messageCode && "040201" == e.messageCode)
                    return resultCodeHandle(e.messageCode, e.messageInfo);
                if (void 0 != e.combineToken && $("#combineToken").val(e.combineToken),
                e.success && 3 == e.txnStatus) {
                    var a = {
                        asyncTxnSequenceId: e.asyncTxnSequenceId,
                        cardPayMethod: "quick",
                        paySign: p,
                        queryType: 2,
                        quickPayType: 1,
                        bankCode: l,
                        payAgencyCode: m,
                        userRealUserInfo: C
                    };
                    anyncWaitCommon.count = 0,
                    anyncWaitCommon.setTimer(a, 0)
                } else
                    1 == e.txnStatus ? ($("#submitPayError").html(""),
                    window.location.href = e.resultUrl) : ($("#submitPayError").html(e.messageInfo),
                    common_modalAuth.hideLoading(),
                    common_modalAuth.showError(),
                    $("#common_messageError").html(e.messageInfo),
                    submitButton.enable())
            };
            $.post(P, b, _, "json")
        } catch (V) {
            supportPay.jsErrorReport(1)
        }
    },
    quickTwoPayCommonPortal: function() {
        function e(e) {
            if (void 0 != e.messageCode && "040201" == e.messageCode)
                return resultCodeHandle(e.messageCode, e.messageInfo);
            if (void 0 != e.combineToken && $("#combineToken").val(e.combineToken),
            e.success && 3 == e.txnStatus) {
                var a = {
                    asyncTxnSequenceId: e.asyncTxnSequenceId,
                    cardPayMethod: "quick",
                    paySign: d,
                    queryType: 2,
                    quickPayType: 2,
                    payAgencyCode: t,
                    bankCode: s,
                    cardId: n
                };
                anyncWaitCommon.count = 0,
                anyncWaitCommon.setTimer(a, 1)
            } else
                e.success && 1 == e.txnStatus ? "true" == $("#includeVirtual").val() ? paymentCommon.virtualPayCommonPortal() : ($("#submitPayError").html(""),
                window.location.href = e.resultUrl) : (common_modalAuth.hideLoading(),
                common_modalAuth.showError(),
                $("#common_messageError").html(e.messageInfo),
                submitButton.enable())
        }
        try {
            if (!quickPayValidate.boundQuickpayConfirmValidate())
                return;
            var a = $("#pv-input-cvv2").val();
            1 == $("#payCard-cardType-bound").val() && (a = "");
            var o = $("#common_phoneVer_modalAuthInput_fk").val()
              , n = $("input[name='payCard-cardId']").val()
              , t = $("#payAgencyCode").val()
              , r = $("#quickpayToken").val()
              , i = $("#remainShouldPayAmount").val()
              , d = $("#paySign").val()
              , s = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , u = $("#userTypeHidden").val()
              , l = "0"
              , m = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value")
              , c = $("#ub-item-firstBank").children("input[name='payCard-isRandomCutOff']").attr("value");
            globalVar.useZhiFuManJian && (l = "1");
            var h = $("#marketingCacheInfoResVo").val()
              , p = {
                orderId: $("#orderId").val(),
                combinePayToken: $("#combineToken").val(),
                cardPayMethod: "quick",
                cardIdAtrr: $("input[name='payCard-cardId']").val(),
                cardPayAmountHide: $("#cardPayAmountStrong").html(),
                cvv2: a,
                phoneVerifyCode: o,
                cardId: n,
                cardType: m,
                agencyCode: t,
                token: r,
                amount: i,
                paySign: d,
                bankCode: s,
                quickPayType: "2",
                userType: u,
                marketingCacheInfoResVo: h,
                cardDiscountFlag: l,
                cardIsRandomCutOff: c
            };
            p = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(p) + "&" + $("#quickPayForm").serialize();
            var y = globalVar.contextPath + "/combine/submitBindedQuickPay.action";
            $.post(y, p, e, "json")
        } catch (v) {
            supportPay.jsErrorReport(2)
        }
    },
    quickPayCommonPortal: function() {
        var e = $("#common_phoneVer_modalAuthInput_fk").val();
        return e.length >= 6 && 1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked ? void (0 == globalVar.quickBoundPayFlag ? paymentCommon.quickOnePayCommonPortal() : paymentCommon.quickTwoPayCommonPortal()) : void 0
    },
    signPayCommonPortal: function() {
        function e(e) {
            if (void 0 != e.messageCode && "040201" == e.messageCode)
                return resultCodeHandle(e.messageCode, e.messageInfo);
            if (void 0 != e.combineToken && $("#combineToken").val(e.combineToken),
            e.success && 1 == e.txnStatus)
                "true" == $("#includeVirtual").val() ? this.virtualPayCommonPortal() : ($("#submitPayError").html(""),
                window.location.href = e.redirectUrl);
            else if (e.success && 2 == e.txnStatus)
                null != e.messageCode && "" != e.messageCode && ("030113" == e.messageCode ? paymentCommon.quickTwoSendMsg() : ($("#submitPayError").html(e.messageInfo),
                submitButton.enable()));
            else if (e.success && 3 == e.txnStatus) {
                var o = {
                    asyncTxnSequenceId: e.asyncTxnSequenceId,
                    cardPayMethod: "sign",
                    paySign: u,
                    queryType: 2,
                    quickPayType: 3,
                    payAgencyCode: t,
                    bankCode: n,
                    cardId: a
                };
                anyncWaitCommon.count = 0,
                anyncWaitCommon.setTimer(o, 1)
            } else
                $("#submitPayError").html(e.messageInfo),
                submitButton.enable()
        }
        try {
            var a = $("input[name='payCard-cardId']").val()
              , o = $("#remainShouldPayAmount").val()
              , n = $("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , t = $("#ub-item-firstBank").children("input[name='payCard-agencyCode']").attr("value")
              , r = $("#ub-item-firstBank").children("input[name='payCard-token']").attr("value")
              , i = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value")
              , d = $("#ub-item-firstBank").children("input[name='payCard-isRandomCutOff']").attr("value")
              , s = $("#pv-input-cvv2").val()
              , u = $("#paySign").val()
              , l = $("#userTypeHidden").val()
              , m = "0";
            globalVar.useZhiFuManJian && (m = "1");
            var c = $("#payPwd").val();
            c = hex_md5(c);
            var h = {
                orderId: $("#orderId").val(),
                combinePayToken: $("#combineToken").val(),
                cardPayMethod: "sign",
                cardIdAtrr: $("input[name='payCard-cardId']").val(),
                cardPayAmountHide: $("#cardPayAmountStrong").html(),
                paySign: u,
                cardId: a,
                cardType: i,
                agencyCode: t,
                signToken: r,
                amount: o,
                bankCode: n,
                quickPayType: "2",
                cvv2: s,
                payPwd: c,
                userType: l,
                cardDiscountFlag: m,
                cardIsRandomCutOff: d
            };
            h = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(h) + "&" + $("#quickPayForm").serialize(),
            "" != globalVar.payPwd.validatedEncode && (h = h + "&validatedEncode=" + globalVar.payPwd.validatedEncode);
            var p = globalVar.contextPath + "/combine/submitSignedQuickPay.action";
            $.post(p, h, e, "json")
        } catch (y) {
            supportPay.jsErrorReport(2)
        }
    },
    virtualPayCommonPortal: function() {
        var e = globalVar.contextPath + "/combine/virtualPay.action"
          , a = $("#payPwd").val();
        a = hex_md5(a);
        var o = $("#cardPayMethod").val()
          , n = $("#baiTiaoRepayDateHide").val()
          , t = {
            cardPayMethod: o,
            cardIdAtrr: $("input[name='payCard-cardId']").val(),
            payPwd: a,
            baiTiaoRepayDate: void 0 == n ? "" : n,
            creditVersion: +$("#creditVersion").val(),
            paySign: $("#paySign").val(),
            orderId: $("#orderId").val(),
            combinePayToken: $("#combineToken").val()
        }
          , r = $.param(t) + "&" + $("#virtualPayForm").serialize()
          , i = !0;
        1 == globalVar.bankCardIsChecked && 0 == globalVar.quickPayIsChecked && (i = !1),
        "" != globalVar.payPwd.validatedEncode && (r = r + "&validatedEncode=" + globalVar.payPwd.validatedEncode),
        $.ajax({
            type: "post",
            url: e,
            data: r,
            async: i,
            timeout: 25e3,
            success: function(e) {
                if (void 0 != e.messageCode && "040201" == e.messageCode)
                    return resultCodeHandle(e.messageCode, e.messageInfo);
                var a = e.success;
                if (1 == a)
                    "normal" == o ? paymentCommon.bankPayPortal() : location.href = e.redirectUrl;
                else if (0 == a) {
                    if ("00300" == e.messageCode)
                        supportPay.common_showErrorMsg("\u8be5\u8ba2\u5355\u4e0d\u652f\u6301\u6253\u767d\u6761\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u3002");
                    else if ("00301" == e.messageCode)
                        supportPay.common_showErrorMsg("\u6b64\u652f\u4ed8\u65b9\u5f0f\u98ce\u9669\u8f83\u9ad8\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u3002");
                    else if ("00302" == e.messageCode)
                        supportPay.common_showErrorMsg("\u6b64\u652f\u4ed8\u65b9\u5f0f\u98ce\u9669\u8f83\u9ad8\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u7ec4\u5408\u652f\u4ed8\u65b9\u5f0f\u3002");
                    else if ("ECV0101" == e.messageCode)
                        supportPay.common_showErrorMsg("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u60a8\u6838\u5bf9\u6216\u91cd\u65b0\u83b7\u53d6\u3002");
                    else if ("SMS10007" == e.messageCode)
                        supportPay.common_showErrorMsg("\u9a8c\u8bc1\u7801\u5df2\u5931\u6548\uff0c\u8bf7\u60a8\u91cd\u65b0\u83b7\u53d6\u3002");
                    else if ("SMS10008" == e.messageCode)
                        supportPay.common_showErrorMsg("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u60a8\u6838\u5bf9\u6216\u91cd\u65b0\u83b7\u53d6\u3002");
                    else if ("SMS20001" == e.messageCode)
                        supportPay.common_showErrorMsg("\u77ed\u4fe1\u53d1\u9001\u592a\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01");
                    else if ("E10002" == e.messageCode)
                        supportPay.common_showErrorMsg("\u652f\u4ed8\u5bc6\u7801\u9519\u8bef");
                    else if ("E10003" == e.messageCode)
                        supportPay.common_showErrorMsg("\u60a8\u7684\u652f\u4ed8\u5bc6\u7801\u88ab\u9501\u5b9a\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                    else if ("E10004" == e.messageCode)
                        supportPay.common_showErrorMsg("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5");
                    else if ("L84000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801");
                    else if ("L85000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u4eac\u8c46\u5df2\u7ecf\u652f\u4ed8\u8fc7\uff0c\u4e0d\u5141\u8bb8\u518d\u6b21\u4f7f\u7528");
                    else if ("L85100" == e.messageCode)
                        supportPay.common_showErrorMsg("\u4eac\u8c46\u53ea\u80fd\u652f\u4ed8\u5e94\u4ed8\u91d1\u989d\u7684\u4e00\u534a");
                    else if ("L85101" == e.messageCode)
                        supportPay.common_showErrorMsg("\u4eac\u8c46\u91d1\u989d\u53ea\u80fd\u652f\u4ed81000\u8c46\u4ee5\u4e0a,\u5e76\u4e14\u4e3a1000\u8c46\u7684\u6574\u6570\u500d");
                    else if ("L81001" == e.messageCode)
                        supportPay.common_showErrorMsg("\u5f53\u524d\u7528\u6237\u548c\u4e0b\u5355\u7528\u6237\u4e0d\u4e00\u81f4\uff0c\u8bf7\u767b\u9646\u4e0b\u5355\u7528\u6237\u652f\u4ed8");
                    else if ("L81002" == e.messageCode)
                        supportPay.common_showErrorMsg("\u7531\u4e8e\u7f51\u7edc\u95ee\u9898\u60a8\u597d\u50cf\u6ca1\u6709\u9009\u62e9\u6b63\u786e\u7684\u767d\u6761\u5206\u671f\u54df^_^\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u65b0\u9009\u62e9\uff01");
                    else if ("L86000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u652f\u4ed8\u8ba2\u5355\u4fe1\u606f\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                    else if ("L81000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u8ba2\u5355\u4e2d\u542b\u6709\u53d7\u9650\u5236\u5546\u54c1\u4e0d\u652f\u6301\u6253\u767d\u6761,\u6216\u8005\u5df2\u8d85\u8fc7\u767d\u6761\u5141\u8bb8\u9650\u989d\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f");
                    else if ("L80000" == e.messageCode)
                        buildCombineVirtualPayList(e),
                        paymentUI.showModal("#virtualResultDiv", function() {}),
                        common_modalAuth.hide(),
                        common_fkAuthModal.hide(),
                        submitButton.enable();
                    else if ("L82000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                    else if ("L83000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u8bf7\u9009\u62e9\u865a\u62df\u652f\u4ed8\u65b9\u5f0f\u63d0\u4ea4");
                    else if ("L87000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u767d\u6761\u652f\u4ed8\u91d1\u989d\u5c0f\u4e8e10\u5143\u65f6\u4e0d\u80fd\u5206\u671f\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u767d\u6761\u5206\u671f");
                    else if ("ECR0005" == e.messageCode)
                        supportPay.common_showErrorMsg("\u8be5\u8ba2\u5355\u7c7b\u578b\u5df2\u8d85\u8fc7\u5f53\u6708\u6700\u5927\u9650\u989d\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f");
                    else if ("L93000" == e.messageCode)
                        supportPay.common_showErrorMsg("\u8be5\u8ba2\u5355\u5b58\u5728\u98ce\u9669\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f");
                    else {
                        var n = e.messageInfo;
                        (null == n || "" == n) && (n = "\u4e0d\u597d\u610f\u601d\uff0c\u7cfb\u7edf\u51fa\u4e86\u70b9\u5c0f\u7455\u75b5\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5^_^"),
                        supportPay.common_showErrorMsg(n)
                    }
                    common_modalAuth.hide(),
                    common_modalAuth.hideError(),
                    common_modalAuth.hideLoading()
                }
            },
            error: function() {
                submitButton.enable()
            }
        })
    },
    bankPayPortal: function() {
        var e = $("#normalCardPay").val();
        if ("normalCardPay" == e) {
            var a = $("input[name='payCard-agencyCode']").val()
              , o = $("input[name='payCard-payChannelCode']").val();
            payBankcard.selectedEBank(a, o, "2")
        }
        var n = $("input[name='bankCode']").val()
          , t = $("#cardPayAmountStrong").text();
        if (null == n || "" == n)
            $("#submitPayError").text("\u8bf7\u9009\u62e9\u94f6\u884c\u652f\u4ed8"),
            $("#submitPayError").show();
        else if ("0" == t || "0.00" == t)
            $("#submitPayError").text("\u94f6\u884c\u5361\u5e94\u4ed8\u91d1\u989d\u4e3a0\uff01"),
            $("#submitPayError").show();
        else {
            var r = $("input[name='gradedPayment']").val();
            if ("1" != r || validateAmount()) {
                $("input[name='shouldPaymentAmount']").val($("#cardPayAmountStrong").text()),
                $("input[name='confirmPaymentAmount']").val("1" == r ? $("input[name='gradedPayInput']").val() : $("#cardPayAmountStrong").text());
                var i = $("#deviceId").val()
                  , d = $("#fingerprint").val()
                  , s = $("#jscContent").val();
                $("#paymentConfirm").append(" <input type='hidden' name='deviceId'  value='" + i + "' autocomplete='off'>"),
                $("#paymentConfirm").append(" <input type='hidden' name='fingerprint'  value='" + d + "' autocomplete='off'>"),
                $("#paymentConfirm").append(" <input type='hidden' name='jscContent'  value='" + s + "' autocomplete='off'>"),
                $("#paymentConfirm").submit(),
                wangyin.success()
            } else
                $("#shouldPayError").text("\u672c\u6b21\u652f\u4ed8\u91d1\u989d\u8f93\u5165\u6709\u8bef\uff01"),
                $("#shouldPayError").show()
        }
        submitButton.enable()
    },
    payCommonPortal: function() {
        var e = $("#payPwd").val();
        try {
            if (1 == globalVar.canBeSubmit) {
                if (1 == globalVar.bankCardIsChecked)
                    if (1 == globalVar.quickPayIsChecked) {
                        if (0 == globalVar.isSignPay)
                            $("#cardPayMethod").val("quick");
                        else if ($("#cardPayMethod").val("sign"),
                        "" == e && 0 == globalVar.payPwd.isHaveValidPayPwd)
                            return $("#showErrMsgSpan").html("\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801"),
                            void submitButton.enable();
                        $("#cardPayAmountHide").val($("#cardPayAmountStrong").html())
                    } else
                        0 == globalVar.quickPayIsChecked && ($("#cardPayMethod").val("normal"),
                        $("#cardPayAmountHide").val($("#cardPayAmountStrong").html()));
                submitButton.disable();
                var a = supportPay.checkedVirtual();
                if (1 == a) {
                    if ($("#includeVirtual").val("true"),
                    "" == e && 0 == globalVar.payPwd.isHaveValidPayPwd)
                        return $("#showErrMsgSpan").html("\u8bf7\u8f93\u5165\u652f\u4ed8\u5bc6\u7801"),
                        void submitButton.enable()
                } else
                    $("#includeVirtual").val("false");
                if (!(a || globalVar.bankCardIsChecked && globalVar.quickPayIsChecked))
                    return void this.bankPayPortal();
                this.riskReport(a)
            }
            var o = $("input[name='phone']").val();
            globalVar.bankCardIsChecked && globalVar.quickPayIsChecked && 0 == globalVar.quickBoundPayFlag && (o = $("#ui-input-phone").val(),
            "" != o && o.length > 7 && (o = o.substring(0, o.length - o.substring(3).length) + "****" + o.substring(7))),
            $("#common_verificationModal").find(".common_m15_openBindPhone").html("\uff08\u5df2\u53d1\u9001\u81f3" + o + ")")
        } catch (n) {
            supportPay.jsErrorReport(0)
        }
    },
    uniformCharge: function() {
        var e = supportPay.checkedVirtual();
        try {
            1 == e ? 0 == globalVar.bankCardIsChecked ? this.virtualPayCommonPortal() : 0 == globalVar.quickPayIsChecked ? this.virtualPayCommonPortal() : 0 == globalVar.quickBoundPayFlag ? this.quickOneSendMsg() : 0 == globalVar.isSignPay ? this.quickTwoSendMsg() : this.signPayCommonPortal() : 1 == globalVar.isSignPay ? this.signPayCommonPortal() : 1 == globalVar.bankCardIsChecked && 1 == globalVar.quickPayIsChecked && (0 == globalVar.quickBoundPayFlag ? this.quickOneSendMsg() : this.quickTwoSendMsg())
        } catch (a) {
            supportPay.jsErrorReport(0)
        }
    },
    uniformQuickSms: function() {
        0 == globalVar.quickBoundPayFlag ? this.quickOneSendMsg() : this.quickTwoSendMsg()
    }
}
  , anyncWaitCommon = {
    queryURL: globalVar.contextPath + "/combine/polling.action",
    timeArray: [1e3, 1e3, 2e3, 2e3, 4e3, 4e3],
    count: 0,
    queryRequest: function(e, a, o) {
        var n = {
            orderId: $("#orderId").val(),
            combinePayToken: $("#combineToken").val(),
            cardIdAtrr: $("input[name='payCard-cardId']").val(),
            cardPayAmountHide: $("#cardPayAmountStrong").html(),
            userType: $("#userTypeHidden").val(),
            pollingCount: o
        };
        n = $.param($("input[name=virtualPayType]:checked")) + "&" + $.param($("input[name=balance]")) + "&" + $.param(n) + "&" + $.param(e),
        $.post(this.queryURL, n, function(o) {
            if (void 0 != o.combineToken && $("#combineToken").val(o.combineToken),
            void 0 != o.agencyCode && $("#payAgencyCode").val(o.agencyCode),
            3 == o.txnStatus)
                anyncWaitCommon.setTimer(e, a);
            else if (1 == o.txnStatus)
                if (1 == e.queryType) {
                    if (1 == e.quickPayType) {
                        $("#submitPayError").html(Constants.phoneSendSuccess),
                        payBankcard.unableEditor(),
                        common_modalAuth.show(),
                        common_modalAuth.showError();
                        var n = $("#unEditor-phone").html();
                        "" != n && n.length > 7 && (n = n.substring(0, n.length - n.substring(3).length) + "****" + n.substring(7)),
                        $("#m15_openBindPhone").html("\uff08\u5df2\u53d1\u9001\u81f3" + n + ")");
                        var t = $("#cardPayAmountStrong").html();
                        $("#cardPaySum").html("\u652f\u4ed8&nbsp;" + t + "\u5143"),
                        $("#common_messageError").html(Constants.phoneSendSuccess)
                    } else {
                        common_modalAuth.show(),
                        common_modalAuth.showError();
                        var t = $("#cardPayAmountStrong").html();
                        $("#cardPaySum").html("\u652f\u4ed8&nbsp;" + t + "\u5143"),
                        $("#common_messageError").html(Constants.phoneSendSuccess)
                    }
                    $("#quickpayToken").attr("value", o.token),
                    $("#asyncTxnSequenceId").attr("value", o.asyncTxnSequenceId),
                    $("#payAgencyCode").attr("value", e.agencyCode)
                } else
                    2 == e.queryType && ("true" == $("#includeVirtual").val() ? paymentCommon.virtualPayCommonPortal() : ($("#submitPayError").html(""),
                    window.location.href = o.redirectUrl));
            else if (1 == e.queryType)
                $("#submitPayError").html(o.messageInfo),
                submitButton.enable(),
                common_modalAuth.hideLoading(),
                common_modalAuth.showError(),
                $("#messageError").html(o.messageInfo),
                1 == o.errorReBind && $("#errorReBind").attr("style", ""),
                _jaq.track("SMS_" + o.code);
            else if (2 == e.queryType) {
                if (void 0 != o.messageCode && "" != o.messageCode && "030113" == o.messageCode)
                    return void paymentCommon.quickTwoSendMsg();
                $("#submitPayError").html(o.messageInfo),
                common_modalAuth.hideLoading(),
                common_modalAuth.showError(),
                $("#common_messageError").html(o.messageInfo),
                $("#common_messageError_fk").html(o.messageInfo),
                common_fkAuthModal.hideLoading(),
                common_fkAuthModal.showError(),
                submitButton.enable(),
                _jaq.track("PAY_" + o.code)
            }
        }, "json")
    },
    setTimer: function(e, a) {
        var o = this.count;
        o < this.timeArray.length && setTimeout(function() {
            anyncWaitCommon.queryRequest(e, a, o)
        }, this.timeArray[this.count]),
        this.count++,
        this.count > this.timeArray.length && (common_modalAuth.hide(),
        $("#messageError").html("\u8ba2\u5355\u5904\u7406\u4e2d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u8ba2\u5355\u72b6\u6001\u6216\u7a0d\u540e\u91cd\u8bd5\u3002"),
        $("#submitPayError").html("\u8ba2\u5355\u5904\u7406\u4e2d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u8ba2\u5355\u72b6\u6001\u6216\u7a0d\u540e\u91cd\u8bd5\u3002"),
        submitButton.enable(),
        common_modalAuth.hideLoading(),
        common_modalAuth.showError(),
        common_fkAuthModal.hide(),
        common_fkAuthModal.hideLoading(),
        common_fkAuthModal.hideError())
    }
}
  , supportPay = {
    checkedVirtual: function() {
        var e = !1;
        return $("input[name=virtualPayType]").each(function() {
            "checked" == $(this).attr("checked") && (e = !0,
            globalVar.payPwd.isValidPayPwd = !0)
        }),
        e
    },
    jsErrorReport: function(a) {
        $("#submitPayError").html("\u60a8\u7684\u7f51\u7edc\u597d\u50cf\u4e0d\u7ed9\u529b\u54df\uff01\u8bf7\u5c1d\u8bd5\u5237\u65b0\u540e\u70b9\u51fb\u652f\u4ed8^_^"),
        $("#submitPayError").fadeOut(5e3, function() {
            $("#submitPayError").html(""),
            $("#submitPayError").show("")
        });
        var o = $("#paySign").val()
          , n = "";
        0 == a ? n = "\u7acb\u5373\u652f\u4ed8" : 1 == a ? n = "\u4e00\u6b21\u77ed\u4fe1" : 2 == a && (n = "\u4e8c\u6b21\u77ed\u4fe1");
        var t = {
            quickType: n,
            paySign: o,
            exception: e.name + ":" + e.message
        }
          , r = globalVar.contextPath + "/quick/jsErrorCatch.action";
        $.post(r, t, "json")
    },
    common_showErrorMsg: function(e) {
        $("#showErrMsgSpan").show(),
        $("#showErrMsgSpan").html(e),
        submitButton.enable()
    }
}
  , common_fkAuthModal = {
    modalId: "#common_msgModal",
    show: function() {
        var e = this;
        paymentUI.showModal(this.modalId, function() {
            e.setCountdown("#common-ui-button-gray-phoneVerifyCode_fk"),
            $(e.modalId).find("#common_phoneVer_modalAuthInput_fk").focus()
        }, function() {
            e.resetCountdown(),
            e.resetInput()
        })
    },
    clear: function() {
        this.hideError(),
        $("#common_risk_modalAuthInput_fk").val("")
    },
    hide: function() {
        paymentUI.hideModal(this.modalId),
        this.resetCountdown()
    },
    setCountdown: function() {
        var e = $("#common-ui-button-gray-phoneVerifyCode_fk");
        return e.hasClass("disable") ? !0 : (e.html('<em class="j_authCountdown">60</em>' + Constants.phoneCodeSending),
        e.addClass("disable"),
        paymentUI.setAuthCountdown(".j_authCountdown", 60, function() {
            e.html(Constants.phoneCodeResend),
            e.removeClass("disable")
        }),
        !1)
    },
    resetCountdown: function() {
        $("#common-ui-button-gray-phoneVerifyCode_fk").html(Constants.phoneCodeResend),
        $("#common-ui-button-gray-phoneVerifyCode_fk").removeClass("disable")
    },
    showError: function() {
        $(this.modalId).find(".vc-n-error").show(),
        $("#common_clearMessage_fk").show()
    },
    hideError: function() {
        $(this.modalId).find(".vc-n-error").hide(),
        $("#common_clearMessage_fk").hide()
    },
    showLoading: function() {
        $(this.modalId).find(".vc-number").addClass("vc-loading")
    },
    hideLoading: function() {
        $(this.modalId).find(".vc-number").removeClass("vc-loading")
    },
    resetInput: function() {
        $(this.modalId).find("#common_phoneVer_modalAuthInput_fk").val("")
    },
    resetModal: function() {
        $("#common_m15_openBindPhone_fk").html(""),
        $("#common_messageError_fk").html(""),
        this.resetInput(),
        this.resetCountdown(),
        this.hideError(),
        this.hideLoading()
    },
    showErrorForFK: function(e) {
        common_fkAuthModal.hideLoading(),
        $("#common_messageError_fk").html(e),
        common_fkAuthModal.showError(),
        showErrorMsg(e),
        submitButton.enable()
    }
};
$(function() {
    var e = "keyup"
      , a = navigator.userAgent.toLowerCase();
    /iphone|ipad|ipod/.test(a) && (e = "input propertychange"),
    $("#common_risk_modalAuthInput_fk").live(e, function() {
        var a = $.trim($(this).val());
        37 != e.which && 39 != e.which && 67 != e.which && 17 != e.which && ($(this).val($(this).val().replace(/\D/g, "")),
        $(this).val() || $(this).val(""));
        var o = $("#common_risk_modalAuthInput_fk").val();
        o.length >= 6 && ($("#verifCode").val(a),
        globalVar.canBeSubmit = !0,
        common_fkAuthModal.hideError(),
        common_fkAuthModal.showLoading(),
        paymentCommon.riskValidMsg())
    })
}),
$("#common_clearMessage_fk").live("click", function() {
    fkAuthModal.resetInput()
}),
$("#common_phoneJ_modalClose_fk").live("click", function() {
    $(".ui-modal-mask").remove(),
    common_fkAuthModal.resetModal(),
    $("#submitPayError").html("");
    var e = $.trim($("#common_phoneVer_modalAuthInput_fk").val());
    e.length < 6 && submitButton.enable()
}),
$("#common_messageClose_fk").live("click", function() {
    $(".ui-modal-mask").remove(),
    common_fkAuthModal.resetModal(),
    $("#submitPayError").html("");
    var e = $.trim($("#common_phoneVer_modalAuthInput_fk").val());
    e.length < 6 && submitButton.enable()
});
var common_modalAuth = {
    modalId: "#common_verificationModal",
    show: function() {
        var e = this;
        paymentUI.showModal(this.modalId, function() {
            e.setCountdown(".j_verificationCount"),
            $(e.modalId).find(".j_modalAuthInput").focus()
        }, function() {
            e.resetCountdown(),
            e.resetInput()
        })
    },
    hide: function() {
        paymentUI.hideModal(this.modalId),
        this.resetCountdown()
    },
    setCountdown: function() {
        var e = $("#common_ui-button-gray-phoneVerifyCode");
        return e.hasClass("disable") ? !0 : (e.html('<em class="j_authCountdown">60</em>' + Constants.phoneCodeSending),
        e.addClass("disable"),
        paymentUI.setAuthCountdown(".j_authCountdown", 60, function() {
            e.html(Constants.phoneCodeResend),
            e.removeClass("disable")
        }),
        !1)
    },
    resetCountdown: function() {
        $(".j_verificationCount").html(Constants.phoneCodeResend),
        $(".j_verificationCount").removeClass("disable")
    },
    showError: function() {
        $(this.modalId).find(".vc-n-error").show(),
        $("#common_clearMessage").show()
    },
    hideError: function() {
        $(this.modalId).find(".vc-n-error").hide(),
        $("#common_clearMessage").hide()
    },
    showLoading: function() {
        $(this.modalId).find(".vc-number").addClass("vc-loading")
    },
    hideLoading: function() {
        $(this.modalId).find(".vc-number").removeClass("vc-loading")
    },
    resetInput: function() {
        $(this.modalId).find(".j_modalAuthInput").val("")
    },
    commonQuickPay: function() {
        var e = $("#common_phoneVer_modalAuthInput").val();
        e.length >= 6 && (0 == globalVar.quickBoundPayFlag ? $("#common_ui-input-unboundPhoneVerifyCode").val(e) : $("#common_ui-input-boundPhoneVerifyCode").val(e),
        globalVar.canBeSubmit = !0,
        paymentCommon.quickPayCommonPortal(),
        common_modalAuth.hideError(),
        common_.showLoading())
    }
};
$(function() {
    var e = "keyup"
      , a = navigator.userAgent.toLowerCase();
    /iphone|ipad|ipod/.test(a) && (e = "input propertychange"),
    $(".j_modalAuthInput").live(e, function() {
        $.trim($(this).val());
        37 != e.which && 39 != e.which && 67 != e.which && 17 != e.which && ($(this).val($(this).val().replace(/\D/g, "")),
        $(this).val() || $(this).val(""));
        var a = $("#common_phoneVer_modalAuthInput_fk").val();
        a.length >= 6 && (globalVar.canBeSubmit = !0,
        common_modalAuth.hideError(),
        common_modalAuth.showLoading(),
        paymentCommon.quickPayCommonPortal())
    })
}),
$("#common_clearMessage").live("click", function() {
    common_modalAuth.resetInput()
}),
$("#common_phoneJ_modalClose").live("click", function() {
    $(".ui-modal-mask").remove(),
    $("#submitPayError").html(""),
    $("#errorReBind").hide();
    var e = $.trim($("#common_phoneVer_modalAuthInput").val());
    e.length < 6 && submitButton.enable()
}),
$("#common_messageClose").live("click", function() {
    $(".ui-modal-mask").remove(),
    $("#submitPayError").html(""),
    $("#errorReBind").hide();
    var e = $.trim($("#common_phoneVer_modalAuthInput").val());
    e.length < 6 && submitButton.enable()
});
var quickPayValidate = {
    cardNoRule: /^[0-9]*$/,
    cvv2Rule: /^[0-9]*$/,
    holderNameRule: /^[a-zA-Z]+([\s]?[a-zA-Z]+)*$|^[\u4e00-\u9fa5]+([\xb7]?[\u4e00-\u9fa5]+)*$/,
    phoneRule: /^[0-9]*$/,
    phoneVerifyCodeRule: /^[A-Za-z0-9]*$/,
    bankCodeVerifyRule: /^[A-Za-z]*$/,
    bankNameVerifyRule: /^[\u4e00-\u9fa5]+([\xb7]?[\u4e00-\u9fa5]+)*$/,
    keyCode: [8, 35, 36, 37, 39, 46],
    unboundGetVerifyCodeValidate: function() {
        if (!quickPayValidate.cardNoValidate())
            return !1;
        if (!quickPayValidate.holderNameValidate())
            return !1;
        if (!quickPayValidate.holderIdValidate())
            return !1;
        var e = $("#debit-radio").children("i").attr("id").split("cardType-")[1];
        if (2 == e) {
            if (!quickPayValidate.validDateValidate())
                return !1;
            var a = $("#bank-selected-quickpay").children(".bank-logo").attr("id").split("-")[1].toUpperCase()
              , o = $("#isVaildCVV2_" + a.toUpperCase()).val();
            if ("" != o && "false" != o && !quickPayValidate.cvv2Validate())
                return !1
        }
        return quickPayValidate.phoneValidate() ? !0 : !1
    },
    boundGetVerifyCodeValidate: function() {
        var e = $("#ub-item-firstBank").children("input[name='payCard-cardType']").attr("value");
        if (2 == e) {
            var a = ($("#ub-item-firstBank").children(".bank-logo").attr("id").split("-")[1].toUpperCase(),
            $("input[name='payCard-isVaildCVV2']").val());
            if ("false" != a)
                return quickPayValidate.cvv2Validate()
        }
        return !0
    },
    quickpayConfirmValidate: function() {
        return 0 == globalVar.quickBoundPayFlag ? quickPayValidate.unboundQuickpayConfirmValidate() : quickPayValidate.boundQuickpayConfirmValidate()
    },
    unboundQuickpayConfirmValidate: function() {
        return quickPayValidate.unboundGetVerifyCodeValidate() && quickPayValidate.phoneVerifyCodeValidate() ? !0 : !1
    },
    boundQuickpayConfirmValidate: function() {
        return quickPayValidate.boundGetVerifyCodeValidate() && quickPayValidate.phoneVerifyCodeValidate() ? !0 : !1
    },
    cardNoValidate: function() {
        var e = quickConfirm.cardNoTrim($("#ui-input-cardNo").val());
        if ("" == e)
            return $("#font-red-cardNo").html(Constants.inputCardNo),
            $("#ui-input-cardNo").addClass("ui-input-error"),
            !1;
        if (!quickPayValidate.cardNoRule.test(e))
            return $("#font-red-cardNo").html(Constants.cardNoFormatError),
            $("#ui-input-cardNo").addClass("ui-input-error"),
            !1;
        $("#debit-radio").children("i").attr("id").split("cardType-")[1];
        return e.length < 12 ? ($("#font-red-cardNo").html(Constants.CardNoLengthLess),
        $("#ui-input-cardNo").addClass("ui-input-error"),
        !1) : (e == $("#cardVerifyShort").val().split("-")[0] ? payBankcard.cardVerifySuccess(2) : quickConfirm.verifyCardBinConfirm(2),
        $("#font-red-cardNo").html(""),
        $("#ui-input-cardNo").removeClass("ui-input-error"),
        !0)
    },
    validDateValidate: function() {
        return quickPayValidate.monthsValidate() && quickPayValidate.yearsValidate() ? ($("#font-red-validity").html(""),
        !0) : !1
    },
    monthsValidate: function() {
        return "" == $("#ui-select-month").find("option:selected").text() || "\u9009\u62e9" == $("#ui-select-month").find("option:selected").text() ? ($("#font-red-validity").html(Constants.selectMonth),
        $("#ui-select-month").addClass("ui-input-error"),
        !1) : ($("#ui-select-month").removeClass("ui-input-error"),
        !0)
    },
    yearsValidate: function() {
        return "" == $("#ui-select-year").find("option:selected").text() || "\u9009\u62e9" == $("#ui-select-year").find("option:selected").text() ? ($("#font-red-validity").html(Constants.selectYear),
        $("#ui-select-year").addClass("ui-input-error"),
        !1) : ($("#ui-select-year").removeClass("ui-input-error"),
        !0)
    },
    cvv2Validate: function() {
        if (0 == globalVar.quickBoundPayFlag) {
            var e = $("#ui-input-cvv2").val();
            if ("" == e)
                return $("#font-red-cvv2").html(Constants.inputCVV2),
                $("#ui-input-cvv2").addClass("ui-input-error"),
                !1;
            if (!quickPayValidate.cvv2Rule.test(e))
                return $("#font-red-cvv2").html(Constants.CVV2FormatError),
                $("#ui-input-cvv2").addClass("ui-input-error"),
                !1;
            if (3 != e.length)
                return $("#font-red-cvv2").html(Constants.CVV2LengthLess),
                $("#ui-input-cvv2").addClass("ui-input-error"),
                !1;
            $("#font-red-cvv2").html(""),
            $("#ui-input-cvv2").removeClass("ui-input-error")
        } else {
            var e = $("#pv-input-cvv2").val();
            if ($("#pv-line-cvv2").show(),
            "" == e)
                return $("#font-red-cvv2-bound").html(Constants.inputCVV2),
                $("#pv-input-cvv2").addClass("ui-input-error"),
                !1;
            if (!quickPayValidate.cvv2Rule.test(e))
                return $("#font-red-cvv2-bound").html(Constants.CVV2FormatError),
                $("#pv-input-cvv2").addClass("ui-input-error"),
                !1;
            if (3 != e.length)
                return $("#font-red-cvv2-bound").html(Constants.CVV2LengthLess),
                $("#pv-input-cvv2").addClass("ui-input-error"),
                !1;
            $("#pv-input-cvv2").removeClass("ui-input-error"),
            $("#font-red-cvv2-bound").html("")
        }
        return !0
    },
    holderNameValidate: function() {
        var e = $("#ui-input-holderName").val();
        return "" == e ? ($("#font-red-holderName").html(Constants.inputHolderName),
        $("#ui-input-holderName").addClass("ui-input-error"),
        !1) : ($("#ui-input-holderName").removeClass("ui-input-error"),
        $("#font-red-holderName").html(""),
        !0)
    },
    holderIdValidate: function() {
        var e = $("#ui-input-holderId").val()
          , a = $("#holderIdType").val();
        if ("" == e)
            return $("#font-red-holderId").html(Constants.inputHolderId),
            $("#ui-input-holderId").addClass("ui-input-error"),
            !1;
        var o = $("#ui-input-holderName");
        return "0" != o.attr("userRealUserInfo") || quickPayValidate.validateHolderId(e, a) ? ($("#ui-input-holderId").removeClass("ui-input-error"),
        $("#font-red-holderId").html(""),
        !0) : ($("#font-red-holderId").html(Constants.holderIdError),
        $("#ui-input-holderId").addClass("ui-input-error"),
        !1)
    },
    phoneValidate: function() {
        var e = $("#ui-input-phone").val();
        return "" == e ? ($("#font-red-phone").html(Constants.inputPhone),
        $("#ui-input-phone").addClass("ui-input-error"),
        !1) : quickPayValidate.phoneRule.test(e) ? 11 != e.length ? ($("#font-red-phone").html(Constants.phoneLengthLess),
        $("#ui-input-phone").addClass("ui-input-error"),
        !1) : ($("#ui-input-phone").removeClass("ui-input-error"),
        $("#font-red-phone").html(""),
        !0) : ($("#font-red-phone").html(Constants.phoneFormatError),
        $("#ui-input-phone").addClass("ui-input-error"),
        !1)
    },
    phoneVerifyCodeValidate: function() {
        if (0 == globalVar.quickBoundPayFlag) {
            var e = $("#common_phoneVer_modalAuthInput_fk").val();
            if ("" == e)
                return $("#font-red-verifyCode").html(Constants.inputVerifyCode),
                $("#ui-input-unboundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (!quickPayValidate.phoneVerifyCodeRule.test(e))
                return $("#font-red-verifyCode").html(Constants.verifyCodeFormatError),
                $("#ui-input-unboundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (6 != e.length)
                return $("#font-red-verifyCode").html(Constants.verifyCodeLengthLess),
                $("#ui-input-unboundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            $("#ui-input-unboundPhoneVerifyCode").removeClass("ui-input-error"),
            $("#font-red-verifyCode").html("")
        } else {
            var e = $("#common_phoneVer_modalAuthInput_fk").val();
            if ("" == e)
                return $("#font-red-verifyCode-bound").html(Constants.inputVerifyCode),
                $("#ui-input-boundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (!quickPayValidate.phoneVerifyCodeRule.test(e))
                return $("#font-red-verifyCode-bound").html(Constants.verifyCodeFormatError),
                $("#ui-input-boundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            if (6 != e.length)
                return $("#font-red-verifyCode-bound").html(Constants.verifyCodeLengthLess),
                $("#ui-input-boundPhoneVerifyCode").addClass("ui-input-error"),
                !1;
            $("#ui-input-boundPhoneVerifyCode").removeClass("ui-input-error"),
            $("#font-red-verifyCode-bound").html("")
        }
        return !0
    },
    validateHolderId: function(e, a) {
        if (void 0 != a && "" != a && 0 != a)
            return !0;
        if (15 == e.length)
            return !0;
        if ("X" == e.substring(e.length - 1, e.length)) {
            var o = /^(\d{6})(19|20)?(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X)?$/;
            return o.test(e)
        }
        if (!/^\d{17}(\d|x)$/i.test(e))
            return !1;
        var n = 0
          , t = e.substr(6, 4) + "-" + Number(e.substr(10, 2)) + "-" + Number(e.substr(12, 2))
          , r = new Date(t.replace(/-/g, "/"));
        if (t != r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate())
            return !1;
        for (var i = 17; i >= 0; i--)
            n += Math.pow(2, i) % 11 * parseInt(e.charAt(17 - i), 11);
        return n % 11 != 1 ? !1 : !0
    }
};
