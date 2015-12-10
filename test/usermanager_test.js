
module('list', {
//	setup:function(){alert('setup moneyOps individual test');},
//	teardown:function(){alert('teardown moneyOps individual test');}
});

test('addList', 1, function()
{
    var usermanager = new UserManager();
    var u = new User('proprietor', 'socket_prop');
    var expected = usermanager.users.length + 1;

    usermanager.addUser(u);

    equal(usermanager.users.length, expected, 'Adding user to usermanager');
}
);

test('existList', 4, function()
{
    var usermanager = new UserManager();
    var u = new User('proprietor', 'socket_prop');
    var u_ = new User('user', 'socket');

    usermanager.addUser(u);

    equal(usermanager.exists(u), 0, 'check if user is in list by object');
    equal(usermanager.exists(u.getSocket()), 0, 'check if user is in list by ID');
    equal(usermanager.exists(u_), -1, 'check if user is not in list by object');
    equal(usermanager.exists(u_.getSocket()), -1, 'check if user is not in list by ID');
}
);

test('getUser', 2, function()
    {
        var usermanager = new UserManager();
        var u = new User('proprietor', 'socket_prop');
        var u_ = new User('user', 'socket');

        usermanager.addUser(u);

        equal(usermanager.getUser(u.getSocket()), u, 'get the user with ID');
        equal(usermanager.getUser(u_.getSocket()), undefined, 'get a non asigned user');
    }
);

test('isAvailable', 2, function()
{
    var usermanager = new UserManager();
    var u = new User('proprietor', 'socket_prop');
    var u_ = new User('user', 'socket');

    usermanager.addUser(u);

    equal(usermanager.isAvailable('user'), true, 'is available pseudo');
    equal(usermanager.isAvailable('proprietor'), false, 'is not available pseudo');
})