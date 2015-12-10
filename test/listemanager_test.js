
module('list', {
//	setup:function(){alert('setup moneyOps individual test');},
//	teardown:function(){alert('teardown moneyOps individual test');}
});

test('addList', 1, function()
{
    var listmanager = new ListManager();
    var list = new List('list', new User('proprietor', 'socket_prop'));
    var expected = listmanager.lists.length + 1;

    listmanager.createList(list);

    equal(listmanager.lists.length, expected, 'Adding list to listmanager');
}
);

test('getListWithSameName', 2, function()
{
    var listmanager = new ListManager();
    var list = new List('list', new User('proprietor', 'socket_prop'));
    var list_ = new List('list', new User('proprietor', 'socket_prop'));
    var list__ = new List('list_', new User('proprietor', 'socket_prop'));

    listmanager.createList(list);

    equal(listmanager.getListName(list_), 0, 'Looking for the list with the same name');
    equal(listmanager.getListName(list__), -1, 'Looking for a list name that does not match');
});

test('getListPostition', 4, function()
{
    var listmanager = new ListManager();
    var list = new List('list', new User('proprietor', 'socket_prop'));
    var list_ = new List('list_', new User('proprietor', 'socket_prop'));
    var list__ = new List('list__', new User('proprietor', 'socket_prop'));

    listmanager.createList(list);
    listmanager.createList(list_);

    equal(listmanager.getListPosition(list), 0, 'Looking for the list position using List object');
    equal(listmanager.getListPosition(list_.getId()), 1, 'Looking for the list position using ID');
    equal(listmanager.getListPosition(list__), -1, 'Looking for a list that does not match using List object');
    equal(listmanager.getListPosition(list__.getId()), -1, 'Looking for a list that does not match using ID');
});

test('getList', 4, function()
{
    var listmanager = new ListManager();
    var list = new List('list', new User('proprietor', 'socket_prop'));
    var list_ = new List('list_', new User('proprietor', 'socket_prop'));
    var list__ = new List('list__', new User('proprietor', 'socket_prop'));

    listmanager.createList(list);
    listmanager.createList(list_);

    equal(listmanager.getList(list), list, 'Looking for the list using List object');
    equal(listmanager.getList(list_.getId()), list_, 'Looking for the list using ID');
    equal(listmanager.getList(list__), undefined, 'Looking for a list that does not match using List object');
    equal(listmanager.getList(list__.getId()), undefined, 'Looking for a list that does not match using ID');
});

test('deleteList', 2, function()
{
    var listmanager = new ListManager();
    var list = new List('list', new User('proprietor', 'socket_prop'));
    var list_ = new List('list_', new User('proprietor', 'socket_prop'));
    var list__ = new List('list__', new User('proprietor', 'socket_prop'));

    listmanager.createList(list);
    var expected = listmanager.lists;
    listmanager.createList(list_);
    listmanager.deleteList(list_);

    equal(listmanager.lists, expected, 'removing list from lists');
    equal(listmanager.deleteList(list__), undefined, 'remonving not in lists list');
});

test('updateList', 2, function()
{
    var listmanager = new ListManager();
    var list = new List('list', new User('proprietor', 'socket_prop'));
    var list_ = new List('list_', new User('proprietor', 'socket_prop'));

    listmanager.createList(list);
    list.title = "new title";
    listmanager.updateList(list);

    equal(listmanager.lists[0], list, 'updating list from lists');
    equal(listmanager.updateList(list_), undefined, 'updating not in lists list');
});