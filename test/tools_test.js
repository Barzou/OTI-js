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