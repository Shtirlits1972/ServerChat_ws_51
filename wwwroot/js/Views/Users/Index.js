$(document).ready(function () {

    var IsEdit = false;

    var roleArr = [
        { value: "юзер", label: "юзер" },
        { value: "админ", label: "админ" }];

    var RoleSource =
    {
        datatype: "array",
        datafields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' }
        ],
        localdata: roleArr
    };

    var RoleAdapter = new $.jqx.dataAdapter(RoleSource, {
        autoBind: true
    });

    var url = "/Users/GetData";

    var source = {
        datatype: "json",

        updaterow: function (rowid, rowdata, commit) {

            $.post("/Users/Edit", { model: rowdata }, null, null).done(function () {
                commit(true);
            }).fail(function () {
                commit(false);
            });
        },
        datafields: [
            { name: 'id', type: 'int' },
            { name: 'email', type: 'string' },
            { name: 'pass', type: 'string' },
            { name: 'role', type: 'string' },
            { name: 'userFio', type: 'string' }
        ],
        id: 'id',
        url: url
    };

    var dataAdapter = new $.jqx.dataAdapter(source);

    $("#tabUsers").jqxGrid({
        autoloadstate: true,
        autosavestate: true,
        filterable: true,
        sortable: true,
        autoshowfiltericon: true,
        editable: true,
        editmode: 'dblclick',
        localization: getLocalization('ru'),
        showtoolbar: true,
        width: 800,
        source: dataAdapter,
        //filtermode: 'excel',
        columnsresize: true,
        pageable: true,
        pagesize: 10,
        pagesizeoptions: ['5', '10', '50', '100', '1000'],
        pagermode: "simple",  //  "pagesizeoptions",

        rendertoolbar: function (toolbar) {
            var me = this;
            var container = $("<div style='margin: 5px;'></div>");
            toolbar.append(container);
            container.append('<input id="btnAdd" type="button" value="Добавить" />');
            container.append('<input style="margin-left: 5px;" id="btnDel" type="button" value="Удалить" />');
            container.append('<input style="margin-left: 5px;" id="btnEdit" type="button" value="Изменить" />');
            container.append('<input style="margin-left: 5px;" id="btnClearFilter" type="button" value="Сброс" />');
            container.append('<input style="margin-left: 5px;" id="btnRefresh" type="button" value="Обновить" />');

            $("#btnAdd").jqxButton({ theme: 'bootstrap' });
            $("#btnDel").jqxButton({ theme: 'bootstrap' });
            $("#btnEdit").jqxButton({ theme: 'bootstrap' });
            $("#btnClearFilter").jqxButton({ theme: 'bootstrap' });
            $("#btnRefresh").jqxButton({ theme: 'bootstrap' });

            $('#btnRefresh').click(function () {
                $("#tabUsers").jqxGrid({ source: dataAdapter });
            });

            $('#btnClearFilter').click(function () {
                $("#tabUsers").jqxGrid('clearfilters');
            });
            // update row.
            $("#btnEdit").on('click', function () {
                window.IsEdit = true;
                var selectedrowindex = $("#tabUsers").jqxGrid('getselectedrowindex');
                if (selectedrowindex >= 0) {

                    var id = $("#tabUsers").jqxGrid('getrowid', selectedrowindex);
                    var offset = $("#tabUsers").offset();

                    $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                    $("#popupWindow").jqxWindow('open');

                    selectedrowindex = $("#tabUsers").jqxGrid('getselectedrowindex');
                    var dataRecord = $("#tabUsers").jqxGrid('getrowdata', selectedrowindex);

                    $("#EmailE").val(dataRecord.email);
                    $("#PassE").val(dataRecord.pass);
                    $("#RoleE").val(dataRecord.role);
                    $("#UserFioE").val(dataRecord.userFio);

                }
                else {
                        alert('Выбеирте строку для изменения!');
                }
            });
            // create new row.
            $("#btnAdd").on('click', function () {
                window.IsEdit = false;
                var offset = $("#tabUsers").offset();
                $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60 } });
                $("#popupWindow").jqxWindow('open');
            });
            $("#btnDel").on('click', function () {
                var selectedrowindex = $("#tabUsers").jqxGrid('getselectedrowindex');
                var rowscount = $("#tabUsers").jqxGrid('getdatainformation').rowscount;
                if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                    var id = $("#tabUsers").jqxGrid('getrowid', selectedrowindex);
                    var r = confirm("Хотите удалить?!");
                    if (r === true) {
                        $.post("/Users/Del", { Id: id }, null, "text").done(function (data) {
                            var commit = $("#tabUsers").jqxGrid('deleterow', id);
                        }).fail(function () { alert('Ошибка!'); });
                    }
                }
                else {
                    alert('Выбеирте строку для удаления!');
                }
            });

        },

        columns: [
            { text: 'ИД', datafield: 'id', width: 50, editable: false, cellsalign: 'center', align: 'center' },
            { text: 'E-mail', datafield: 'email', align: 'center' },
            { text: 'Пароль', datafield: 'pass', align: 'center' },
            {
                text: 'Роль', datafield: 'role', columntype: 'combobox', filtertype: 'checkedlist', align: 'center',
                createeditor: function (row, value, editor) {
                    editor.jqxComboBox({ source: RoleAdapter, displayMember: 'label', valueMember: 'value' });
                }
            },
            { text: 'Ф.И.О.', datafield: 'userFio', align: 'center' }
        ]
    });
});