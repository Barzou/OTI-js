module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

test("isScriptIncluded", 1, function(){
    var count_script = document.getElementsByTagName('script').length;
    var expected_count_script = count_script + 1;

    Tools.include("script");
    equal(expected_count_script, document.getElementsByTagName('script').length, "is script included");
});

test("isTagCreated", 2, function(){
    var balise = Tools.creerBalise("P", "align", "center");

    equal(balise.tagName.toLowerCase(), 'p', "is a p tag");
    equal(balise.getAttribute('align'), 'center', "is center");
});

test("isAlphaOnly", 3, function(){
    var work1 = {keyCode : "a".charCodeAt(0)};
    var work2 = {keyCode : "Z".charCodeAt(0)};
    var dontWork1 = {keyCode : "-".charCodeAt(0)};

    equal(Tools.alphaOnly(work1), true, "is 'a' an alpha char");
    equal(Tools.alphaOnly(work2), true, "is 'Z' an alpha char");
    equal(Tools.alphaOnly(dontWork1), false, "is '-' an alpha char");
});

test("isPromptCalledWhenF5pressed", 1, function(){
    // F5 key press event mock data
    // setup
    var f5Key = {
        keyCode : 116,
        charCode : 0,
        preventDefault : function(){}
    };
    var oldPrompt = window.prompt;
    var isPromptCalled = false;

    window.prompt = function(){
        isPromptCalled = true;
    };

    // exercise
    Tools.fkey(f5Key);

    // verify
    equal(isPromptCalled, true, "is prompt called when f5 pressed");

    window.prompt = oldPrompt;
});

test("isUsernameVerificationsWork", 5, function(){
    // setup
    var tooShortUsername = "user";
    var tooShortPassWord = "passwor";
    var specialCharUsername = "*$)sdfd";
    var worksUsername = "username";

    // setup
    Tools.users = {};
    Tools.users.isAvailable = function(){
        return true;
    };

    // exercise and verify
    equal(
        Tools.controlConnection(tooShortUsername).error,
        "Votre pseudo doit contenir 6 caractères ou plus de cet ensemble: [A-Za-z0-9_].\n",
        "is username too short"
    );

    equal(
        Tools.controlConnection(worksUsername, tooShortPassWord).error,
        "Votre mot de passe doit contenir au moins 8 caractères.",
        "is password too short"
    );

    equal(
        Tools.controlConnection(specialCharUsername).error,
        "Votre pseudo doit contenir 6 caractères ou plus de cet ensemble: [A-Za-z0-9_].\n",
        "is username contains special char"
    );

    // setup
    Tools.users.isAvailable = function(){
        return false;
    };

    equal(
        Tools.controlConnection(worksUsername).error,
        "Le pseudo que vous avez choisi est indisponible.\n",
        "is username not available"
    );

    // setup
    Tools.users.isAvailable = function(){
        return true;
    };

    equal(
        Tools.controlConnection(worksUsername).error,
        "",
        "is username fine"
    );
});
