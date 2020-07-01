var path = 'http://localhost:3000';

function createUser() {
    axios({
        method: 'post',
        url: path + '/CreateUser',
        data: {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            tell: document.getElementById('tell').value,
            mobile: document.getElementById('mobile').value,
            sessions_number: document.getElementById('sessions_number').value,
            sport_type: document.getElementById('sportType').value,
            address: document.getElementById('address').value,
            start_date: document.getElementById('register-date').value
        }
    }).then(res => {
        let id = res.data.id;
        let cardContainer = document.getElementById('user-container');
        $(cardContainer).fadeIn();
        let fullname, memberId, createdDate, sportType
        fullname = document.getElementById('card-fname');
        memberId = document.getElementById('member-id');
        createdDate = document.getElementById('create-date');
        sportType = document.getElementById('sport-type');
        fullname.innerHTML = res.data.firstname + " " + res.data.lastname;
        memberId.innerHTML = res.data.id;
        createdDate.innerHTML = res.data.created_datetime;
        if (res.data.sport_type == 1) {
            sportType.innerHTML = "بوکس و رزمی"
        } else if (res.data.sport_type == 2) {
            sportType.innerHTML = "بدنسازی"
        }




        generateQRcode(id);
    })
}



function findById(id) {
    let container = document.getElementById('card-container');
    let messageHolder = document.getElementsByClassName('message-holder')[0];
    $(container).fadeOut();
    axios({
        method: 'post',
        url: path + '/SelectMemberByScan',
        data: {
            id: id
        }
    }).then(res => {
        if (res.data) {
            let member = res.data.result;
            let flag = res.data.flag;
            if (flag === 1 || member.sessions_number <= 0) {
                $(messageHolder).slideDown();
                document.getElementById('message').innerHTML = "تعداد جلسات یا تاریخ دوره به پایان رسیده است";
                setTimeout(function () {
                    $(messageHolder).slideUp()
                }, 6000)
            }
            $(container).fadeIn();
            document.getElementById('fullname').innerHTML = member.firstname + " " + member.lastname;
            document.getElementById('member-id').innerHTML = member.id;
            document.getElementById('start-date').innerHTML = member.start_date;
            document.getElementById('expire-date').innerHTML = member.expire_date;
            document.getElementById('sessions-number').innerHTML = member.sessions_number;


        }
    })
}