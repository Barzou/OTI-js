
module('list', {
//	setup:function(){alert('setup moneyOps individual test');},
//	teardown:function(){alert('teardown moneyOps individual test');}
});

test('shareWith', 1, function()
{
    var u = new User('u', 'socket');
    var u_ = new User('u_', 'socket_');
    var list = new List('test', u);
    u.createList(list);

    equal(u.shareWith(list.getId(), u_), true, 'Adding user to an owned list');
}
);

test('removeUserFromList', 1, function()
    {
        var u = new User('u', 'socket');
        var u_ = new User('u_', 'socket_');
        var list = new List('test', u);
        u.createList(list);
        u.shareWith(list.getId(), u_)

        equal(u.removeUserFromList(list, u_), true, 'Removing user from an owned list');
    }
);