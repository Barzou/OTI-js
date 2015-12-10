
    module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

asyncTest("testCobraConnection", function(){
    expect(2);
    QUnit.stop(1);
    var cobra = new Cobra();

    cobra.joinRoomCallback = function(){
        ok(true,true,"is room joined");
        QUnit.start();
    };

    cobra.connectionCallback = function () {
        ok(true,true,"is connected");
        cobra.joinRoom('listecourse');
        QUnit.start();
    };

    cobra.connect('http://cobra-framework.com:8080');
});
