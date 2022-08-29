var getLocalization = function (culture) {
    var localization = null;
    switch (culture) {
        case "ru":
            localization =
                {
                    // separator of parts of a date (e.g. '/' in 11/05/1955)
                    '.': ".",
                    // separator of parts of a time (e.g. ':' in 05:44 PM)
                    ':': ":",
                    // the first day of the week (0 = Sunday, 1 = Monday, etc)
                    firstDay: 1,
                    days: {
                        // full day names
                        names: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                        // abbreviated day names
                        namesAbbr: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
                        // shortest day names
                        namesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
                    },

                    months: {
                        // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                        names: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
                        // abbreviated month names
                        namesAbbr: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек", ""]
                    },
                    // AM and PM designators in one of these forms:
                    // The usual view, and the upper and lower case versions
                    //      [standard,lowercase,uppercase]
                    // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
                    //      null
                    AM: ["AM", "am", "AM"],
                    PM: ["PM", "pm", "PM"],
                    eras: [
                        // eras in reverse chronological order.
                        // name: the name of the era in this culture (e.g. A.D., C.E.)
                        // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                        // offset: offset in years from gregorian calendar
                        { "name": "A.D.", "start": null, "offset": 0 }
                    ],
                    twoDigitYearMax: 2050,
                    patterns:
                    {
                        d: "dd.MM.yyyy",
                        D: "dddd, d. MMMM yyyy",
                        t: "HH:mm",
                        T: "HH:mm:ss",
                        f: "dddd, d. MMMM yyyy HH:mm",
                        F: "dddd, d. MMMM yyyy HH:mm:ss",
                        M: "dd MMMM",
                        Y: "MMMM yyyy",
                        d1: "dd.MM.yyyy HH:mm",
                        d2: "dd.MM.yyyy HH:mm:ss",
                        ISO2: "yyyy-MM-dd HH:mm:ss"
                    },
                    percentsymbol: "%",
                    currencysymbol: "$",
                    currencysymbolposition: "после",
                    decimalseparator: ',',
                    thousandsseparator: '.',
                    pagergotopagestring: "Перейти к ",
                    pagershowrowsstring: "К-во строк:",
                    pagerrangestring: " из ",
                    pagerpreviousbuttonstring: "след",
                    pagernextbuttonstring: "пред",
                    pagerfirstbuttonstring: "первый",
                    pagerlastbuttonstring: "последний",
                    groupsheaderstring: "Перетащите столбец и поместите его здесь для группировки",
                    sortascendingstring: "Сортировать по возрастанию",
                    sortdescendingstring: "Сортировать по убыванию",
                    sortremovestring: "Очистить сортировку",
                    groupbystring: "Группировать по этой колонке",
                    groupremovestring: "Удалить из групп",
                    filterclearstring: "Очистить",
                    filterstring: "Фильтровать",
                    filtershowrowstring: "Показать строки, где:",
                    filterorconditionstring: "или",
                    filterandconditionstring: "и",
                    filterselectallstring: "(Выбрать всё)",
                    filterchoosestring: "Пожалуйста выберите:",
                    filterstringcomparisonoperators: ['пустой', 'не пустой', 'содержит', 'содержит(с учётом регистра)',
                        'не содержит', 'не содержит(с учётом регистра)', 'начинается с', 'начинается с(с учётом регистра)',
                        'заканчивается на', 'заканчивается на(с учётом регистра)', 'равный', 'равно(с учётом регистра)', 'null', 'не null'],
                    filternumericcomparisonoperators: ['равно', 'не равно', 'меньше чем', 'меньше или равно', 'больше чем', 'больше или равно', 'null', 'не null'],
                    filterdatecomparisonoperators: ['равно', 'не равно', 'меньше чем', 'меньше или равно', 'больше чем', 'больше или равно', 'null', 'не null'],
                    filterbooleancomparisonoperators: ['равно', 'не равно'],
                    validationstring: "Введенное значение недействительно",
                    emptydatastring: "Нет данных",
                    filterselectstring: "Выберите Фильтр",
                    loadtext: "Загрузка...",
                    clearstring: "Очистить",
                    todaystring: "Сегодня",
                    filtershowrowdatestring: "Показать строки дата в которых: ",
                    promptText: "Выбирай: ",
                    placeHolder: "Выбирай: "

                };
            break;

        case "rusched":
            localization = {
                // separator of parts of a date (e.g. '/' in 11/05/1955)
                '.': ".",
                // separator of parts of a time (e.g. ':' in 05:44 PM)
                ':': ":",
                // the first day of the week (0 = Sunday, 1 = Monday, etc)
                firstDay: 1,
                days: {
                    // full day names
                    names: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    // abbreviated day names
                    namesAbbr: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
                    // shortest day names
                    namesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
                },

                months: {
                    // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                    names: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ""],
                    // abbreviated month names
                    namesAbbr: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек", ""]
                },
                // AM and PM designators in one of these forms:
                // The usual view, and the upper and lower case versions
                //      [standard,lowercase,uppercase]
                // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
                //      null
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                eras: [
                    // eras in reverse chronological order.
                    // name: the name of the era in this culture (e.g. A.D., C.E.)
                    // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                    // offset: offset in years from gregorian calendar
                    { "name": "A.D.", "start": null, "offset": 0 }
                ],

                twoDigitYearMax: 2050,
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, d. MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dddd, d. MMMM yyyy HH:mm",
                    F: "dddd, d. MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy",
                    d1: "dd.MM.yyyy HH:mm",
                    d2: "dd.MM.yyyy HH:mm:ss",
                    ISO2: "dd.MM.yyyy HH:mm:ss"
                 //   ISO2: "yyyy-MM-dd HH:mm:ss"
                    //// S is a sortable format that does not vary by culture
                    //S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
                    //// formatting of dates in MySQL DataBases
                    //ISO: "yyyy-MM-dd hh:mm:ss",
                    //d3: "dd-MMMM-yyyy",
                    //d4: "dd-MM-yy",
                    //d5: "H:mm",
                    //d6: "HH:mm",
                    //d7: "HH:mm tt",
                    //d8: "dd/MMMM/yyyy",
                    //d9: "MMMM-dd",
                    //d10: "MM-dd",
                    //d11: "MM-dd-yyyy"
                },
                backString: "Предыдущий",
                forwardString: "Следующий",
                toolBarPreviousButtonString: "Предыдущий",
                toolBarNextButtonString: "Следующий",
                emptyDataString: "Нет данных",
                loadString: "Загрузка...",
                clearString: "Очистить",
                todayString: "Сегодня",
                dayViewString: "День",
                weekViewString: "Неделя",
                monthViewString: "Месяц",
                timelineDayViewString: "График дня",
                timelineWeekViewString: "График недели",
                timelineMonthViewString: "График месяца",
                loadingErrorMessage: "Ошибка!!!",
                editRecurringAppointmentDialogTitleString: "Изменить повторения",
                editRecurringAppointmentDialogContentString: "Вы просто хотите отредактировать этот эпизод или сериал?",
                editRecurringAppointmentDialogOccurrenceString: "Редактировать вхождения",
                editRecurringAppointmentDialogSeriesString: "Редактировать серию",
                editDialogTitleString: "Изменить встречу",
                editDialogCreateTitleString: "Создать новую встречу",
                contextMenuEditAppointmentString: "Изменить встречу",
                contextMenuCreateAppointmentString: "Создать новую встречу",
                editDialogSubjectString: "Тема",
                editDialogLocationString: "Место",
                editDialogFromString: "С",
                editDialogToString: "По",
                editDialogAllDayString: "Весь день",
                editDialogExceptionsString: "Исключения",
                editDialogResetExceptionsString: "Сбросить повторения",
                editDialogDescriptionString: "Отметка",
                editDialogResourceIdString: "Календарь",
                editDialogStatusString: "Статус",
                editDialogColorString: "Цвет",
                editDialogColorPlaceHolderString: "Выберите цвет",
                editDialogTimeZoneString: "Часовой пояс",
                editDialogSelectTimeZoneString: "Выберите часовой пояс",
                editDialogSaveString: "Сохранить",
                editDialogDeleteString: "Удалить",
                editDialogCancelString: "Отмена",
                editDialogRepeatString: "Повторение",
                editDialogRepeatEveryString: "Повторить все",
                editDialogRepeatEveryWeekString: "недели",
                editDialogRepeatEveryYearString: "Год(ы)",
                editDialogRepeatEveryDayString: "Дни",
                editDialogRepeatNeverString: "Никогда",
                editDialogRepeatDailyString: "Ежедненвно",
                editDialogRepeatWeeklyString: "Еженедельно",
                editDialogRepeatMonthlyString: "Ежемесячно",
                editDialogRepeatYearlyString: "Ежегодно",
                editDialogRepeatEveryMonthString: "Месяц(ы)",
                editDialogRepeatEveryMonthDayString: "День",
                editDialogRepeatFirstString: "первый",
                editDialogRepeatSecondString: "второй",
                editDialogRepeatThirdString: "третий",
                editDialogRepeatFourthString: "четвёртый",
                editDialogRepeatLastString: "последний",
                editDialogRepeatEndString: "Конец",
                editDialogRepeatAfterString: "По",
                editDialogRepeatOnString: "По",
                editDialogRepeatOfString: "С",
                editDialogRepeatOccurrencesString: "Повторения",
                editDialogRepeatSaveString: "Сохранить повторение",
                editDialogRepeatSaveSeriesString: "Сохранить повторение",
                editDialogRepeatDeleteString: "Удалить повторение",
                editDialogRepeatDeleteSeriesString: "Удалить серию",

                editDialogStatuses:
                {
                    free: "Свободно",
                    tentative: "Предварительно",
                    busy: "Занято",
                    outOfOffice: "Отсутствует"
                }
            };
            break;

        case "en":
        default:
            localization =
            {
                // separator of parts of a date (e.g. '/' in 11/05/1955)
                '/': "/",
                // separator of parts of a time (e.g. ':' in 05:44 PM)
                ':': ":",
                // the first day of the week (0 = Sunday, 1 = Monday, etc)
                firstDay: 0,
                days: {
                    // full day names
                    names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    // abbreviated day names
                    namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    // shortest day names
                    namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                },
                months: {
                    // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    // abbreviated month names
                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
                },
                // AM and PM designators in one of these forms:
                // The usual view, and the upper and lower case versions
                //      [standard,lowercase,uppercase]
                // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
                //      null
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                eras: [
                // eras in reverse chronological order.
                // name: the name of the era in this culture (e.g. A.D., C.E.)
                // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                // offset: offset in years from gregorian calendar
                { "name": "A.D.", "start": null, "offset": 0 }
                ],
                twoDigitYearMax: 2029,
                patterns: {
                    // short date pattern
                    d: "M/d/yyyy",
                    // long date pattern
                    D: "dddd, MMMM dd, yyyy",
                    // short time pattern
                    t: "h:mm tt",
                    // long time pattern
                    T: "h:mm:ss tt",
                    // long date, short time pattern
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    // long date, long time pattern
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    // month/day pattern
                    M: "MMMM dd",
                    // month/year pattern
                    Y: "yyyy MMMM",
                    // S is a sortable format that does not vary by culture
                    S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
                    // formatting of dates in MySQL DataBases
                    ISO: "yyyy-MM-dd hh:mm:ss",
                    ISO2: "yyyy-MM-dd HH:mm:ss",
                    d1: "dd.MM.yyyy",
                    d2: "dd-MM-yyyy",
                    d3: "dd-MMMM-yyyy",
                    d4: "dd-MM-yy",
                    d5: "H:mm",
                    d6: "HH:mm",
                    d7: "HH:mm tt",
                    d8: "dd/MMMM/yyyy",
                    d9: "MMMM-dd",
                    d10: "MM-dd",
                    d11: "MM-dd-yyyy"
                },
                percentsymbol: "%",
                currencysymbol: "$",
                currencysymbolposition: "before",
                decimalseparator: '.',
                thousandsseparator: ',',
                pagergotopagestring: "Go to page:",
                pagershowrowsstring: "Show rows:",
                pagerrangestring: " of ",
                pagerpreviousbuttonstring: "previous",
                pagernextbuttonstring: "next",
                pagerfirstbuttonstring: "first",
                pagerlastbuttonstring: "last",
                groupsheaderstring: "Drag a column and drop it here to group by that column",
                sortascendingstring: "Sort Ascending",
                sortdescendingstring: "Sort Descending",
                sortremovestring: "Remove Sort",
                groupbystring: "Group By this column",
                groupremovestring: "Remove from groups",
                filterclearstring: "Clear",
                filterstring: "Filter",
                filtershowrowstring: "Show rows where:",
                filterorconditionstring: "Or",
                filterandconditionstring: "And",
                filterselectallstring: "(Select All)",
                filterchoosestring: "Please Choose:",
                filterstringcomparisonoperators: ['empty', 'not empty', 'enthalten', 'enthalten(match case)',
                   'does not contain', 'does not contain(match case)', 'starts with', 'starts with(match case)',
                   'ends with', 'ends with(match case)', 'equal', 'equal(match case)', 'null', 'not null'],
                filternumericcomparisonoperators: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'],
                filterdatecomparisonoperators: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'],
                filterbooleancomparisonoperators: ['equal', 'not equal'],
                validationstring: "Entered value is not valid",
                emptydatastring: "No data to display",
                filterselectstring: "Select Filter",
                loadtext: "Loading...",
                clearstring: "Clear",
                todaystring: "Today"
            }
            break;
    }
    return localization;
}