
module('list', {
//	setup:function(){alert('setup moneyOps individual test');},
//	teardown:function(){alert('teardown moneyOps individual test');}
});

test('addProduct', 2, function()
{
    var list = new List('test', 'me');

    equal(list.addProduct('produit'), true, 'Adding product to List');
    equal(list.addProduct('produit'), false, 'Adding already in product to List');
}
);

test('getUser', 2, function()
{
    var list = new List('test', 'me');
    var u = new User('name', 'socket');

    list.sharedWith.push(u);

    equal(list.getUser(u), 0, 'get user in List.sharedWith');
    equal(list.getUser(new User('name_', 'socket_')), -1, 'get user not in List.sharedWith');
});

test('isSharedWith', 3, function()
{
    var proprietor = new User('prop', 'socket_prop');

    var list = new List('test', proprietor);
    var u = new User('name', 'socket');

    list.sharedWith.push(u);

    equal(list.isSharedWith(u), true, 'is shared with user');
    equal(list.isSharedWith(new User('name_', 'socket_')), false, 'is not shared with user');
    equal(list.isSharedWith(proprietor), true, 'is shared with proprietor');
});

test('addUser', 3, function()
{
    var proprietor = new User('prop', 'socket_prop');

    var list = new List('test', proprietor);
    var u = new User('name', 'socket');

    equal(list.addUser(u), true, 'Adding user to List');
    equal(list.addUser(u), false, 'Adding already in user to List');
    equal(list.addUser(u), false, 'Adding proprietor to List');
});

test('removeUser', 3, function()
{
    var proprietor = new User('prop', 'socket_prop');

    var list = new List('test', proprietor);
    var u = new User('name', 'socket');

    list.addUser(u);

    equal(list.removeUser(u), true, 'Removing user from List');
    equal(list.removeUser(proprietor), false, 'Removing proprietor from List');
    equal(list.removeUser(new User('name_', 'socket_')), false, 'Removing not in List user');
});

test('equals', 2, function()
{
    var list = new List('test', new User('prop', 'socket_prop'));

    var list2 = new List('test_', new User('prop_', 'socket_prop_'));

    equal(list.equals(list), true, 'equals Lists');
    equal(list.equals(list2), false, 'not equals Lists');
});